// apps/web/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

let browserClient: ReturnType<typeof createBrowserClient<Database>> | null = null;

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

/**
 * Client Supabase côté navigateur (Client Components).
 * Lazy singleton pour éviter d'instancier au chargement du module.
 */
export function getSupabaseBrowser() {
  if (browserClient) return browserClient;

  const url = mustEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anon = mustEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  browserClient = createBrowserClient<Database>(url, anon);
  return browserClient;
}

/** Alias (si tu veux garder l'ancien nom dans certains fichiers) */
export const createSupabaseBrowser = getSupabaseBrowser;
