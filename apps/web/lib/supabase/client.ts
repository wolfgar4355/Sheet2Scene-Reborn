// apps/web/lib/supabase/client.ts
import "client-only";

import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

let _client: ReturnType<typeof createBrowserClient<Database>> | null = null;

export function getSupabaseBrowser() {
  // Protection: ce module est *client-only*, mais on garde un guard propre.
  if (typeof window === "undefined") {
    throw new Error("getSupabaseBrowser() must be called in the browser.");
  }

  if (_client) return _client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!url || !anon) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  _client = createBrowserClient<Database>(url, anon);
  return _client;
}
