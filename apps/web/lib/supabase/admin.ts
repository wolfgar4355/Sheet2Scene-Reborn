// apps/web/lib/supabase/admin.ts
import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

function mustGetEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`[getAdmin] Missing env var: ${name}`);
  return v;
}

export function getAdmin() {
  const url = mustGetEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceKey = mustGetEnv("SUPABASE_SERVICE_ROLE_KEY");

  return createClient<Database>(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
