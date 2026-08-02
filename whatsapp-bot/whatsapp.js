import makeWASocket, {
  DisconnectReason,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
} from "@whiskeysockets/baileys";
import qrcode from "qrcode-terminal";
import pino from "pino";
import { config } from "./config.js";

let currentSock = null;
let connectionState = "connecting";

export function getWhatsAppClient() {
  return currentSock;
}

export function isConnected() {
  return connectionState === "open";
}

const toDisplay = (value) =>
  value === null || value === undefined || String(value).trim() === ""
    ? "N/A"
    : String(value).trim();

function resolvePrice(order) {
  if (
    order?.price !== null &&
    order?.price !== undefined &&
    String(order.price).trim() !== ""
  ) {
    const price = Number(order.price);
    if (!Number.isNaN(price)) return price;
  }

  const unitPrice = Number(config.productPrice);
  const quantity = Number(order?.quantity);
  if (!Number.isNaN(unitPrice) && unitPrice > 0 && !Number.isNaN(quantity) && quantity > 0) {
    return unitPrice * quantity;
  }

  return null;
}

export function buildOrderMessage(order) {
  const price = resolvePrice(order);
  const priceText = price === null ? "N/A" : `Rs. ${price.toLocaleString()}`;
  const productName =
    order?.product && String(order.product).trim() !== ""
      ? String(order.product).trim()
      : config.productName;

  return [
    "🛒 NEW ORDER",
    "",
    `👤 Name: ${toDisplay(order?.name)}`,
    "",
    `📞 Phone: ${toDisplay(order?.phone)}`,
    "",
    `🏙 City: ${toDisplay(order?.city)}`,
    "",
    "📍 Address:",
    toDisplay(order?.address),
    "",
    "📦 Product:",
    toDisplay(productName),
    "",
    `🔢 Quantity: ${toDisplay(order?.quantity)}`,
    "",
    "💰 Price:",
    priceText,
    "",
    "🆔 Order ID:",
    toDisplay(order?.id),
    "",
    "🕒 Time:",
    toDisplay(order?.created_at),
  ].join("\n");
}

/**
 * Connects to WhatsApp using Baileys v7 (ESM).
 * - Prints a QR code once (via qrcode-terminal) when no valid session exists.
 * - Persists the session in config.authDir so the QR is scanned only once.
 * - Automatically reconnects with exponential backoff when the socket drops,
 *   unless the account was explicitly logged out.
 */
export async function connectWhatsApp({ onSessionChanged } = {}) {
  const { state, saveCreds } = await useMultiFileAuthState(config.authDir);
  const { version } = await fetchLatestBaileysVersion();

  const logger = pino({ level: config.logLevel });

  const sock = makeWASocket({
    version,
    logger,
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, logger),
    },
  });

  currentSock = sock;

  let reconnectTimer = null;
  let attempts = 0;

  const scheduleReconnect = (reason) => {
    if (reconnectTimer) return;
    const delay = Math.min(1000 * 2 ** attempts, 30000);
    attempts += 1;
    console.error(`[whatsapp] Connection closed: ${reason}. Reconnecting in ${delay / 1000}s...`);
    reconnectTimer = setTimeout(() => {
      reconnectTimer = null;
      connectWhatsApp();
    }, delay);
  };

  sock.ev.process(async (events) => {
    if (events["connection.update"]) {
      const { connection, lastDisconnect, qr } = events["connection.update"];

      if (qr) {
        console.log("[whatsapp] Scan the QR code with WhatsApp > Linked Devices:");
        qrcode.generate(qr, { small: true });
      }

      if (connection === "open") {
        attempts = 0;
        connectionState = "open";
        console.log("[whatsapp] Connected to WhatsApp");
      } else if (connection === "close") {
        connectionState = "close";
        const statusCode = lastDisconnect?.error?.output?.statusCode;
        if (statusCode === DisconnectReason.loggedOut) {
          console.error(
            "[whatsapp] Logged out. Delete the auth_info folder and re-scan the QR code."
          );
          process.exit(1);
        } else {
          scheduleReconnect(statusCode ?? "unknown reason");
        }
      }
    }

    if (events["creds.update"]) {
      await saveCreds();
      if (onSessionChanged) onSessionChanged();
    }
  });

  return sock;
}
