// apps/web/lib/supabase/server.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Database } from "@/types/database";

function mustEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

type AnyOptions = CookieOptions & {
  expires?: Date;
  maxAge?: number;
  path?: string;
  domain?: string;
  sameSite?: "lax" | "strict" | "none";
  secure?: boolean;
  httpOnly?: boolean;
};

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
 */
export function createSupabaseServer(): ReturnType<typeof createServerClient<Database>>;
export function createSupabaseServer(
  req: NextApiRequest,
  res: NextApiResponse
): ReturnType<typeof createServerClient<Database>>;
export function createSupabaseServer(req?: NextApiRequest, res?: NextApiResponse) {
  const url = mustEnv("NEXT_PUBLIC_SUPABASE_URL");
  const anon = mustEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

  // ✅ Pages Router
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

  // ✅ App Router
  const cookieStore = cookies();

  return createServerClient<Database>(url, anon, {
    cookies: {
      get(name) {
        return cookieStore.get(name)?.value;
      },
      set(name, value, options) {
        // Dans certains contextes (Server Component pur), set peut throw -> on ignore.
        try {
          cookieStore.set({
            name,
            value,
            ...options,
          } as any);
        } catch {}
      },
      remove(name, options) {
        try {
          cookieStore.set({
            name,
            value: "",
            ...options,
            maxAge: 0,
          } as any);
        } catch {}
      },
    },
  });
}

/** Helper utilisé par tes layouts/pages server-side */
export async function getServerUser() {
  const supabase = createSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error) return null;
  return data.user ?? null;
}
