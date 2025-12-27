// apps/web/lib/supabase/admin.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _admin: SupabaseClient | null = null;

/**
 * Supabase ADMIN client
 * - Service Role only
 * - Server-side only
 * - NO Database typing (Supabase v2 safety)
 */
export function getAdmin(): SupabaseClient {
  if (_admin) return _admin;

  const url =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    throw new Error(
      "Missing Supabase env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)"
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
