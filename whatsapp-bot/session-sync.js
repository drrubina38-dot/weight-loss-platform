import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { createClient } from "@supabase/supabase-js";

const ARCHIVE_PATH = "session/session-backup.json.gz";
const CONCURRENCY = 20;

function walkFiles(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(full, results);
    } else {
      results.push(full);
    }
  }
  return results;
}

async function mapLimit(items, limit, worker) {
  const queue = items.slice();
  const workers = Array.from({ length: Math.min(limit, queue.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      await worker(item);
    }
  });
  await Promise.all(workers);
}

/**
 * Keeps the Baileys auth_info folder backed up in Supabase Storage so the
 * WhatsApp session survives Render's ephemeral filesystem (free tier wipes
 * local files on every sleep/restart).
 *
 * The whole session is stored as ONE gzipped JSON archive (single fast
 * download/upload). A per-file fallback is kept for buckets seeded the old
 * way (a folder of individual files).
 */
export class SessionSync {
  constructor({ url, serviceKey, bucket = "wa-session", authDir = "auth_info" }) {
    this.bucket = bucket;
    this.authDir = authDir;
    this.client = createClient(url, serviceKey, { auth: { persistSession: false } });
    this.lastPush = 0;
    this.pushing = false;
    this.dirty = false;
    this.lastStats = new Map();
    this.minIntervalMs = 5000;
  }

  static isConfigured(config) {
    return !!(config.supabaseUrl && config.supabaseServiceRoleKey);
  }

  async ensureBucket() {
    const { data, error } = await this.client.storage.getBucket(this.bucket);
    if (error || !data) {
      const { error: createError } = await this.client.storage.createBucket(this.bucket, {
        public: false,
      });
      if (createError && !/already exists/i.test(createError.message)) {
        throw createError;
      }
    }
  }

  buildArchive() {
    if (!fs.existsSync(this.authDir)) return null;

    const files = {};
    for (const filePath of walkFiles(this.authDir)) {
      const rel = path.relative(this.authDir, filePath).replace(/\\/g, "/");
      const name = path.basename(rel);
      if (name.endsWith(".lock") || name.startsWith(".")) continue;
      files[rel] = fs.readFileSync(filePath).toString("base64");
    }

    if (Object.keys(files).length === 0) return null;
    return zlib.gzipSync(Buffer.from(JSON.stringify(files)));
  }

  async restore() {
    fs.mkdirSync(this.authDir, { recursive: true });

    const { data: blob, error } = await this.client.storage
      .from(this.bucket)
      .download(ARCHIVE_PATH);

    if (blob && !error) {
      try {
        const files = JSON.parse(zlib.gunzipSync(Buffer.from(await blob.arrayBuffer())).toString("utf8"));
        const names = Object.keys(files);
        for (const name of names) {
          fs.mkdirSync(path.dirname(path.join(this.authDir, name)), { recursive: true });
          fs.writeFileSync(path.join(this.authDir, name), Buffer.from(files[name], "base64"));
        }
        console.log(`[session] Restored ${names.length} session file(s) from archive.`);
        return;
      } catch (err) {
        console.error(`[session] Archive corrupt (${err.message}), trying per-file restore...`);
      }
    } else {
      console.log("[session] No session archive found, trying per-file restore...");
    }

    await this.restorePerFile();
  }

  async restorePerFile() {
    const files = [];
    for (let offset = 0; ; offset += 1000) {
      const { data, error } = await this.client.storage
        .from(this.bucket)
        .list("session", { limit: 1000, offset });

      if (error) throw error;
      files.push(...data);
      if (data.length < 1000) break;
    }

    if (files.length === 0) {
      console.log("[session] No remote session found — a QR scan will be required.");
      return;
    }

    let restored = 0;
    const pending = files.filter(
      (file) => !file.name.endsWith(".lock") && !file.name.startsWith(".")
    );

    await mapLimit(pending, CONCURRENCY, async (file) => {
      const { data: blob, error: downloadError } = await this.client.storage
        .from(this.bucket)
        .download(`session/${file.name}`);

      if (downloadError) {
        console.error(`[session] Failed to download ${file.name}: ${downloadError.message}`);
        return;
      }

      fs.writeFileSync(path.join(this.authDir, file.name), Buffer.from(await blob.arrayBuffer()));
      restored += 1;
    });

    console.log(`[session] Restored ${restored} session file(s) from per-file backup.`);
  }

  changedLocalFiles() {
    const changed = [];
    if (!fs.existsSync(this.authDir)) return changed;

    for (const filePath of walkFiles(this.authDir)) {
      const rel = path.relative(this.authDir, filePath).replace(/\\/g, "/");
      const name = path.basename(rel);
      if (name.endsWith(".lock") || name.startsWith(".")) continue;

      const stat = fs.statSync(filePath);
      const prev = this.lastStats.get(rel);

      if (!prev || prev.mtimeMs !== stat.mtimeMs || prev.size !== stat.size) {
        this.lastStats.set(rel, { mtimeMs: stat.mtimeMs, size: stat.size });
        changed.push({ rel, filePath });
      }
    }
    return changed;
  }

  async pushNow() {
    if (this.pushing) {
      this.dirty = true;
      return;
    }

    this.pushing = true;
    try {
      await this.ensureBucket();
      const changed = this.changedLocalFiles();

      if (changed.length === 0) {
        this.lastPush = Date.now();
        return;
      }

      const archive = this.buildArchive();
      if (!archive) {
        console.error("[session] No session files to archive.");
        return;
      }

      const { error } = await this.client.storage
        .from(this.bucket)
        .upload(ARCHIVE_PATH, archive, { upsert: true, contentType: "application/gzip" });

      if (error) {
        console.error(`[session] Archive upload failed: ${error.message}`);
      } else {
        console.log(
          `[session] Uploaded session archive (${(archive.length / 1024).toFixed(0)} KB, ${changed.length} changed file(s)).`
        );
      }
      this.lastPush = Date.now();
    } catch (err) {
      console.error(`[session] Push error: ${err.message}`);
    } finally {
      this.pushing = false;
      if (this.dirty) {
        this.dirty = false;
        this.pushNow();
      }
    }
  }

  push() {
    if (Date.now() - this.lastPush >= this.minIntervalMs) {
      return this.pushNow();
    }
    this.dirty = true;
    return Promise.resolve();
  }
}
