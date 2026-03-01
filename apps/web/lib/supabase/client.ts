// apps/web/lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

let browserClient: ReturnType<typeof createBrowserClient<Database>> | null = null;

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) {
    if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") {
      console.warn(`[Supabase Client] Missing env var: ${name}. Client might not work.`);
    }
    // Fallback for static generation (prerendering) to prevent @supabase/ssr crashes
    return name === "NEXT_PUBLIC_SUPABASE_URL" ? "https://placeholder.supabase.co" : "placeholder-key";
  }
  return v;
}

export function getSupabaseBrowser() {
  if (browserClient) return browserClient;

  const url = getEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anon = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  const client = createBrowserClient<Database>(url, anon);
  browserClient = client;
  return client;
}

export const createSupabaseBrowser = getSupabaseBrowser;
