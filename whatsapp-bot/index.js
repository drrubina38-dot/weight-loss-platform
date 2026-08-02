import {
  connectWhatsApp,
  getWhatsAppClient,
  buildOrderMessage,
  isConnected,
} from "./whatsapp.js";
import http from "node:http";
import { createSupabaseClient, subscribeToOrders } from "./supabase.js";
import { SessionSync } from "./session-sync.js";
import { config } from "./config.js";

const processedOrderIds = new Set();
const MAX_TRACKED_IDS = 1000;
const MAX_RETRIES = 3;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const markProcessed = (id) => {
  processedOrderIds.add(id);
  if (processedOrderIds.size > MAX_TRACKED_IDS) {
    processedOrderIds.delete(processedOrderIds.values().next().value);
  }
};

async function waitForWhatsApp(timeoutMs = 120000) {
  const started = Date.now();
  while (!isConnected()) {
    if (Date.now() - started > timeoutMs) {
      throw new Error("Timed out waiting for WhatsApp connection");
    }
    await sleep(2000);
  }
  return getWhatsAppClient();
}

async function sendNotification(order, retries = MAX_RETRIES) {
  const orderId = order?.id;

  if (orderId) {
    if (processedOrderIds.has(orderId)) {
      console.log(`[order] Duplicate ignored for order ${orderId}`);
      return;
    }
    markProcessed(orderId);
  }

  if (!config.whatsappNumber) {
    throw new Error("WHATSAPP_NUMBER is not set");
  }

  try {
    const jid = `${config.whatsappNumber}@s.whatsapp.net`;
    console.log(`[order] Sending notification to ${jid}...`);
    const sock = await waitForWhatsApp();
    await sock.sendMessage(jid, {
      text: buildOrderMessage(order),
    });
    console.log("[order] Notification sent successfully");
  } catch (err) {
    if (retries > 1) {
      console.error(
        `[order] Send failed (${err.message}), retrying in 5s (${retries - 1} left)...`
      );
      await sleep(5000);
      await sendNotification(order, retries - 1);
    } else {
      throw err;
    }
  }
}

function handleNewOrder(order) {
  console.log("[order] New order received");
  sendNotification(order).catch((err) => {
    console.error(`[order] Failed to send notification: ${err.message}`);
  });
}

function validateEnv() {
  const missing = [];
  if (!config.supabaseUrl) missing.push("SUPABASE_URL");
  if (!config.supabaseAnonKey) missing.push("SUPABASE_ANON_KEY");
  if (!config.whatsappNumber) missing.push("WHATSAPP_NUMBER");

  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(", ")}`);
    console.error("Copy .env.example to .env and fill in the values.");
    process.exit(1);
  }

  if (!/^\d{8,15}$/.test(config.whatsappNumber)) {
    console.error(
      "WHATSAPP_NUMBER must contain only digits with country code, e.g. 923XXXXXXXXX"
    );
    process.exit(1);
  }
}

async function main() {
  validateEnv();

  console.log("[boot] Starting WhatsApp order-notification bot...");

  startHealthServer();

  const sessionSync = SessionSync.isConfigured(config)
    ? new SessionSync({
        url: config.supabaseUrl,
        serviceKey: config.supabaseServiceRoleKey,
        bucket: config.sessionBucket,
        authDir: config.authDir,
      })
    : null;

  if (sessionSync) {
    try {
      await sessionSync.restore();
    } catch (err) {
      console.error(`[session] Restore failed (continuing anyway): ${err.message}`);
    }
  }

  await connectWhatsApp({
    onSessionChanged: sessionSync ? () => sessionSync.push() : undefined,
  });

  const supabase = createSupabaseClient();
  const subscription = subscribeToOrders(supabase, handleNewOrder);
  console.log("[realtime] Realtime connected — watching for INSERTs on public.orders");

  if (sessionSync) {
    setInterval(() => sessionSync.push(), 60 * 1000);
  }

  startKeepAlive();

  const shutdown = async () => {
    console.log("[shutdown] Stopping bot...");
    if (sessionSync) await sessionSync.pushNow();
    await subscription.unsubscribe();
    process.exit(0);
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

function startHealthServer() {
  const port = Number(process.env.PORT) || 3000;
  const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, connected: isConnected(), time: new Date().toISOString() }));
  });
  server.on("error", (err) => console.error(`[health] Server error: ${err.message}`));
  server.listen(port, () => {
    console.log(`[health] Health server listening on port ${port}`);
  });
  return server;
}

function startKeepAlive() {
  const baseUrl = (process.env.RENDER_EXTERNAL_URL || config.healthUrl || "").replace(/\/+$/, "");
  if (!baseUrl) {
    console.log("[keepalive] No RENDER_EXTERNAL_URL / HEALTH_URL set — skipping self-ping.");
    return;
  }

  const ping = async () => {
    try {
      const res = await fetch(`${baseUrl}/health`, { signal: AbortSignal.timeout(15000) });
      console.log(`[keepalive] Ping ${baseUrl}/health -> ${res.status}`);
    } catch (err) {
      console.error(`[keepalive] Ping failed: ${err.message}`);
    }
  };

  ping();
  setInterval(ping, 10 * 60 * 1000);
}

process.on("unhandledRejection", (reason) => {
  console.error("[process] Unhandled rejection:", reason);
});

main().catch((err) => {
  console.error("[boot] Fatal error:", err);
  process.exit(1);
});
