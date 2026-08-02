import fs from "node:fs";
import "dotenv/config";
import { SessionSync } from "./session-sync.js";
import { config } from "./config.js";

async function main() {
  if (!config.supabaseUrl || !config.supabaseServiceRoleKey) {
    console.error(
      "Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env first (service role key is required to write to Storage)."
    );
    process.exit(1);
  }

  if (!fs.existsSync(config.authDir)) {
    console.error(
      `Auth folder "${config.authDir}" not found. Run the bot locally once and scan the QR first.`
    );
    process.exit(1);
  }

  console.log("[seed] Uploading local WhatsApp session to Supabase Storage...");

  const sync = new SessionSync({
    url: config.supabaseUrl,
    serviceKey: config.supabaseServiceRoleKey,
    bucket: config.sessionBucket,
    authDir: config.authDir,
  });

  await sync.ensureBucket();
  await sync.pushNow();

  console.log("[seed] Done. The deployed bot will restore this session on startup.");
  process.exit(0);
}

main().catch((err) => {
  console.error("[seed] Fatal:", err);
  process.exit(1);
});
