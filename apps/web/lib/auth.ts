// apps/web/lib/auth.ts
import { createSupabaseServer } from "@/lib/supabase/server";

export async function getUser() {
  const supabase = createSupabaseServer();
  if (!supabase) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) return null;

  return data.user ?? null;
}
