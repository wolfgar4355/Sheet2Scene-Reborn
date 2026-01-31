// apps/web/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

let browserClient: ReturnType<typeof createBrowserClient<Database>> | null = null;

function getPublicEnv(name: string) {
  // Dans un Client Component, Next remplace process.env.* au build.
  // Si la variable n’existe pas dans Vercel, ça devient undefined.
  const v = process.env[name];
  return typeof v === "string" && v.trim().length > 0 ? v : "";
}

/**
 * Client Supabase côté navigateur (Client Components).
 * Lazy singleton pour éviter d'instancier au chargement du module.
 *
 * Retourne `null` si les env NEXT_PUBLIC_* ne sont pas présentes,
 * au lieu de throw (sinon ça casse build/prerender).
 */
export function getSupabaseBrowser() {
  if (browserClient) return browserClient;

  const url = getPublicEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anon = getPublicEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  if (!url || !anon) {
    // Optionnel: log dev-friendly sans casser prod
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "[Supabase] Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY"
      );
    }
    return null;
  }

  browserClient = createBrowserClient<Database>(url, anon);
  return browserClient;
}

/** Alias (si tu veux garder l'ancien nom dans certains fichiers) */
export const createSupabaseBrowser = getSupabaseBrowser;
