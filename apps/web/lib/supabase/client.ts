// apps/web/lib/supabase/client.ts
"use client";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!url) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  if (!anon) throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return { url, anon };
}

/** Crée un client Supabase côté navigateur */
export function createSupabaseBrowser() {
  const { url, anon } = getEnv();
  return createBrowserClient<Database>(url, anon);
}

/**
 * Singleton pratique (évite de recréer le client à chaque render).
 * Utilise ça dans les components client.
 */
let _browser: ReturnType<typeof createSupabaseBrowser> | null = null;
export function getSupabaseBrowser() {
  if (!_browser) _browser = createSupabaseBrowser();
  return _browser;
}
