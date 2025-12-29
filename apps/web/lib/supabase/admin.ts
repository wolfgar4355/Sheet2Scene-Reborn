// apps/web/lib/supabase/admin.ts

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database";

export function getAdmin() {
  const url =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL || // fallback si tu n'as pas encore SUPABASE_URL
    "";

  const serviceRole = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

  if (!url) {
    throw new Error("Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL fallback) in env");
  }
  if (!serviceRole) {
    throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY in env");
  }

  return createClient<Database>(url, serviceRole, {
    auth: { persistSession: false },
    global: { fetch },
  });
}
