// lib/supabase/admin.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _admin: SupabaseClient | null = null;

/**
 * Client Supabase ADMIN
 * - Service Role ONLY
 * - Server-side uniquement
 * - Pas de session, pas de cookies
 */
export function getAdmin(): SupabaseClient {
  if (_admin) return _admin;

  const url =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). " +
      "Add them in Vercel → Settings → Environment Variables."
    );
  }

  _admin = createClient(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });

  return _admin;
}
