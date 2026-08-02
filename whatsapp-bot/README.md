# WhatsApp Order Notifier (Supabase + Baileys)

A production-ready Node.js service that sends an instant WhatsApp message to
your personal number whenever a new row is inserted into the Supabase
`orders` table — using **Supabase Realtime** (no polling) and the latest
**@whiskeysockets/baileys** (v7, ESM).

## How it works

1. Connects to WhatsApp with Baileys using a persisted session (`auth_info/`).
2. On first run only, prints a QR code in the terminal — scan it once with
   WhatsApp > Linked Devices.
3. Subscribes to `INSERT` events on `public.orders` via Supabase Realtime.
4. On every new order, sends a formatted WhatsApp message and logs the event.
5. Reconnects automatically (exponential backoff) if the connection drops.
6. Deduplicates notifications so the same order is never sent twice.

## Requirements

- Node.js **18+** (Baileys v7 requires ESM)
- A Supabase project with the `orders` table
- npm

## Setup

```bash
# 1. Clone / copy this folder, then install dependencies
cd whatsapp-bot
npm install

# 2. Create your environment file
cp .env.example .env
#    ...then fill in the values (see below)

# 3. Run
npm start
```

### Environment variables

| Variable                       | Required | Description                                                        |
| ------------------------------ | -------- | ------------------------------------------------------------------ |
| `SUPABASE_URL`                 | Yes      | Your project URL (Project Settings > API)                          |
| `SUPABASE_ANON_KEY`            | Yes      | Anon public key (must be allowed to read `orders`)                 |
| `SUPABASE_SERVICE_ROLE_KEY`    | No       | Optional (reserved for server-side write-back features)            |
| `WHATSAPP_NUMBER`              | Yes      | Personal number, digits only, e.g. `92304557141`                   |
| `AUTH_DIR`                     | No       | Session folder (default `auth_info`)                               |
| `LOG_LEVEL`                    | No       | Baileys logger level (default `warn`)                              |

## Enable Realtime on the `orders` table

Realtime must be enabled or the bot will never receive events.

**Option A — SQL Editor:**

```sql
alter publication supabase_realtime add table public.orders;
```

**Option B — Dashboard:**
Database → Replication → click on `orders` → enable "Replication" (and any
columns you need for the notification).

> If RLS is enabled on `orders`, make sure the `anon` role has a `SELECT`
> policy, because Supabase Realtime respects Row Level Security.

## Expected log output

```
[boot] Starting WhatsApp order-notification bot...
[whatsapp] Scan the QR code with WhatsApp > Linked Devices:
┌──────────────┐
│  QR CODE...  │
└──────────────┘
[whatsapp] Connected to WhatsApp
[realtime] Subscription status: SUBSCRIBED
[realtime] Realtime connected — watching for INSERTs on public.orders

# ...a new order is inserted...
[realtime] Event: INSERT | table: public.orders | id: 7f3a...
[realtime] New order received
[order] New order received
[order] Sending notification...
[order] Notification sent successfully
```

## Notification format

The bot listens on the real `orders` table columns used by the site:
`name`, `phone`, `city`, `address`, `quantity`, `status` (+ `id`, `created_at`).
`product` and `price` are **not** stored per order, so they are filled from the
`PRODUCT_NAME` / `PRODUCT_PRICE` env vars (price = unit price × quantity).

```
🛒 NEW ORDER

👤 Name: Ali Khan

📞 Phone: 0300...

🏙 City: Lahore

📍 Address:
House 12, Main Road

📦 Product:
Dr. Rubina Herbal Weight Loss Powder

🔢 Quantity: 1

💰 Price:
Rs. 1999

🆔 Order ID:
7f3a...

🕒 Time:
2026-08-02T10:30:00.000Z
```

Any missing field is displayed as `N/A`.

## Behavior notes

- **Session persistence** — after the first QR scan the session is saved in
  `auth_info/`. The QR is not shown again until the session expires or you
  delete the folder.
- **Duplicate prevention** — order IDs are tracked in memory; repeated INSERT
  events for the same row are ignored. If you run multiple instances, add a
  `notified_at` column to `orders` and write it back with the service role key.
- **Auto-reconnect** — the socket reconnects with backoff (1s → 30s max) on
  drops. It stops and exits only on an explicit logout.
- **Retries** — a failed message send is retried up to 3 times with a 5s delay.

## Troubleshooting

| Problem                        | Fix                                                            |
| ------------------------------ | -------------------------------------------------------------- |
| QR code won't appear           | Delete `auth_info/` and restart                                |
| "Logged out"                   | The session was revoked; delete `auth_info/` and re-scan       |
| No events arrive               | Enable Realtime on `orders` (see above) and check RLS          |
| `Missing required environment` | Copy `.env.example` → `.env` and fill in the values            |
| WhatsApp bans / blocks         | Use the number only for personal notifications, avoid spamming |

## Production deployment

Run it as a long-lived process, e.g. with PM2:

```bash
npm install -g pm2
pm2 start index.js --name whatsapp-order-notifier
pm2 save
pm2 startup
```

> Baileys stores the session on the local filesystem, so keep `auth_info/`
> with your deployment (don't delete it between restarts).

## Disclaimer

This project uses Baileys, which automates the consumer WhatsApp Web protocol.
It is not affiliated with or endorsed by WhatsApp. Use responsibly for
personal notifications only.
