// apps/web/lib/supabase/server-api.ts
import { createServerClient } from "@supabase/ssr";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Database } from "@/types/database";

function getEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  if (!url) throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
  if (!anon) throw new Error("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY");

  return { url, anon };
}

export function createSupabaseServerApi(req: NextApiRequest, res: NextApiResponse) {
  const { url, anon } = getEnv();

  return createServerClient<Database>(url, anon, {
    cookies: {
      getAll() {
        const cookieHeader = req.headers.cookie ?? "";
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
        const existing = res.getHeader("Set-Cookie");
        const existingArr = Array.isArray(existing)
          ? existing
          : existing
            ? [String(existing)]
            : [];

        const nextArr = cookiesToSet.map(({ name, value, options }) =>
          serializeCookie(name, value, options)
        );

        res.setHeader("Set-Cookie", [...existingArr, ...nextArr]);
      },
    },
  });
}

// mini helper sans dépendance externe
function serializeCookie(name: string, value: string, options: any = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];

  if (options.maxAge != null) parts.push(`Max-Age=${options.maxAge}`);
  if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
  parts.push(`Path=${options.path ?? "/"}`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (options.secure) parts.push("Secure");
  if (options.httpOnly) parts.push("HttpOnly");

  return parts.join("; ");
}
