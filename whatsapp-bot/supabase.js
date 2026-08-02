import { createClient } from "@supabase/supabase-js";
import { config } from "./config.js";

export function createSupabaseClient() {
  if (!config.supabaseUrl || !config.supabaseAnonKey) {
    throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY are required. See .env.example");
  }

  return createClient(config.supabaseUrl, config.supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

/**
 * Subscribes to INSERT events on the public.orders table using
 * Supabase Realtime (postgres_changes). Never polls.
 */
export function subscribeToOrders(client, onNewOrder) {
  let channel = null;

  const attempt = () => {
    channel = client.channel(`orders-realtime-${Date.now()}`);

    channel
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "orders" },
        (payload) => {
          console.log(
            `[realtime] Event: ${payload.eventType} | table: ${payload.schema}.${payload.table} | id: ${payload.new?.id ?? "N/A"}`
          );
          console.log("[realtime] New order received");
          onNewOrder(payload.new);
        }
      )
      .subscribe((status) => {
        console.log(`[realtime] Subscription status: ${status}`);
        if (status === "CHANNEL_ERROR" || status === "TIMED_OUT") {
          console.log("[realtime] Subscription failed, retrying in 3s...");
          client.removeChannel(channel).then(() => setTimeout(attempt, 3000));
        }
      });
  };

  attempt();

  return {
    unsubscribe: () => (channel ? client.removeChannel(channel) : Promise.resolve()),
  };
}
