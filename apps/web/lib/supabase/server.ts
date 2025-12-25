// lib/supabase/server.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

export function getSupabaseServerClient(): SupabaseClient {
  const cookieStore = cookies();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    throw new Error("Missing Supabase env vars");
  }

  return createClient(url, anon, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        Cookie: cookieStore
          .getAll()
          .map(c => `${c.name}=${c.value}`)
          .join("; "),
      },
    },
  });
}
