import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client.
 * Requires env vars: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
 */
function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase env vars are missing. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your Vercel project settings and redeploy.",
    );
  }

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}

export const supabaseAdmin = getSupabaseAdmin;
