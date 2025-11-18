// lib/supabase/admin.ts
import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _admin: SupabaseClient | null = null;

/**
 * Crée ou renvoie le client admin.
 * Ne lit les env et ne crée le client qu’au premier appel (pas à l’import).
 * Jette une erreur claire seulement à l’usage si les env manquent.
 */
export function getAdmin(): SupabaseClient {
  if (_admin) return _admin;

  const url =
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      'Missing Supabase env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY). ' +
      'Add them in Vercel → Settings → Environment Variables (Production).'
    );
  }

  _admin = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return _admin;
}
