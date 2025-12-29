// apps/web/lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import type { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

function getEnv() {
  const url =
    process.env.SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "";

  const anon =
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "";

  if (!url) throw new Error("Missing SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL)");
  if (!anon) throw new Error("Missing SUPABASE_ANON_KEY (or NEXT_PUBLIC_SUPABASE_ANON_KEY)");

  return { url, anon };
}

/**
 * ✅ Supabase server client
 * - App Router (Server Components / Route Handlers): createSupabaseServer()
 * - Pages Router (pages/api): createSupabaseServer(req, res)
 */
export function createSupabaseServer(
  req?: NextApiRequest,
  res?: NextApiResponse
) {
  const { url, anon } = getEnv();

  // --- pages/api usage (req,res)
  if (req && res) {
    return createServerClient<Database>(url, anon, {
      cookies: {
        getAll() {
          const cookieHeader = req.headers.cookie ?? "";
          // Parse simple "a=b; c=d"
          return cookieHeader
            .split(";")
            .map((c) => c.trim())
            .filter(Boolean)
            .map((c) => {
              const idx = c.indexOf("=");
              const name = idx >= 0 ? c.slice(0, idx) : c;
              const value = idx >= 0 ? c.slice(idx + 1) : "";
              return { name, value };
            });
        },
        setAll(cookiesToSet) {
          // NextApiResponse: setHeader('Set-Cookie', [...])
          const existing = res.getHeader("Set-Cookie");
          const existingArr = Array.isArray(existing)
            ? existing
            : existing
              ? [String(existing)]
              : [];

          const nextArr = cookiesToSet.map(({ name, value, options }) => {
            const parts: string[] = [`${name}=${value}`];

            if (options?.maxAge != null) parts.push(`Max-Age=${options.maxAge}`);
            if (options?.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
            if (options?.path) parts.push(`Path=${options.path}`);
            if (options?.domain) parts.push(`Domain=${options.domain}`);
            if (options?.sameSite) parts.push(`SameSite=${options.sameSite}`);
            if (options?.secure) parts.push("Secure");
            if (options?.httpOnly) parts.push("HttpOnly");

            return parts.join("; ");
          });

          res.setHeader("Set-Cookie", [...existingArr, ...nextArr]);
        },
      },
    });
  }

  // --- App Router usage (no req/res) via next/headers cookies()
  const cookieStore = cookies();

  return createServerClient<Database>(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          // Si appelé depuis un Server Component "read-only", ça peut throw.
          // Dans ce cas, c'est ok: le refresh de session ne se fera pas ici.
        }
      },
    },
  });
}

/** ✅ Fonction manquante demandée par ton build */
export async function getServerUser() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  return { user: data.user ?? null, error };
}
