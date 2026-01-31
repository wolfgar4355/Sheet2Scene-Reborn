// lib/env.ts

function pick(...values: Array<string | undefined | null>) {
  for (const v of values) {
    if (typeof v === "string" && v.trim().length > 0) return v;
  }
  return "";
}

export function readEnv() {
  // Public (browser-safe)
  const NEXT_PUBLIC_SUPABASE_URL = pick(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_URL
  );

  const NEXT_PUBLIC_SUPABASE_ANON_KEY = pick(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.SUPABASE_ANON_KEY,
    process.env.SUPABASE_KEY
  );

  // Server-only
  const SUPABASE_URL = pick(process.env.SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_URL);
  const SUPABASE_SERVICE_ROLE_KEY = pick(
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    process.env.SUPABASE_SERVICE_KEY
  );

  return {
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY,
  };
}
