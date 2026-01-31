// apps/web/lib/supabase/server.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Database } from "@/types/database";

type AnyOptions = CookieOptions & {
  expires?: Date;
  maxAge?: number;
  path?: string;
  domain?: string;
  sameSite?: "lax" | "strict" | "none";
  secure?: boolean;
  httpOnly?: boolean;
};

function getEnv(name: string) {
  const v = process.env[name];
  return typeof v === "string" && v.trim().length > 0 ? v : "";
}

// mini helper sans dépendance externe (Pages Router)
function serializeCookie(name: string, value: string, options: AnyOptions = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];

  if (options.maxAge != null) parts.push(`Max-Age=${options.maxAge}`);
  if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
  parts.push(`Path=${options.path ?? "/"}`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (options.secure) parts.push(`Secure`);
  if (options.httpOnly) parts.push(`HttpOnly`);

  return parts.join("; ");
}

/**
 * createSupabaseServer()
 * - App Router (Server Components / Layout / Route Handlers): createSupabaseServer()
 * - Pages Router (pages/api): createSupabaseServer(req, res)
 *
 * ⚠️ Retourne `null` si env manquantes ou hors request scope (prerender),
 * pour éviter de casser le build.
 */
export function createSupabaseServer():
  | ReturnType<typeof createServerClient<Database>>
  | null;
export function createSupabaseServer(
  req: NextApiRequest,
  res: NextApiResponse
):
  | ReturnType<typeof createServerClient<Database>>
  | null;
export function createSupabaseServer(req?: NextApiRequest, res?: NextApiResponse) {
  const url = getEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anon = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  // Si env pas là → on ne throw pas (sinon build/prerender meurt)
  if (!url || !anon) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[Supabase] Missing NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY");
    }
    return null;
  }

  // ✅ Pages Router (pages/api)
  if (req && res) {
    return createServerClient<Database>(url, anon, {
      cookies: {
        get(name) {
          return req.cookies[name];
        },
        set(name, value, options) {
          res.setHeader("Set-Cookie", serializeCookie(name, value, options as AnyOptions));
        },
        remove(name, options) {
          res.setHeader(
            "Set-Cookie",
            serializeCookie(name, "", { ...(options as AnyOptions), maxAge: 0 })
          );
        },
      },
    });
  }

  // ✅ App Router (Server Components / Route Handlers)
  // En prerender/SSG, cookies() peut throw -> on fallback "no cookies"
  let cookieStore: ReturnType<typeof cookies> | null = null;
  try {
    cookieStore = cookies();
  } catch {
    cookieStore = null;
  }

  return createServerClient<Database>(url, anon, {
    cookies: {
      get(name) {
        return cookieStore?.get(name)?.value;
      },
      set(name, value, options) {
        if (!cookieStore) return;
        try {
          cookieStore.set({ name, value, ...options } as any);
        } catch {}
      },
      remove(name, options) {
        if (!cookieStore) return;
        try {
          cookieStore.set({ name, value: "", ...options, maxAge: 0 } as any);
        } catch {}
      },
    },
  });
}

/** Helper utilisé par tes layouts/pages server-side */
export async function getServerUser() {
  const supabase = createSupabaseServer();
  if (!supabase) return null;

  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user ?? null;
}
