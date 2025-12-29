// apps/web/lib/supabase/server-api.ts

import { createServerClient } from "@supabase/ssr";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Database } from "@/types/database";

export function createSupabaseServerApi(req: NextApiRequest, res: NextApiResponse) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  if (!url || !anon) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  return createServerClient<Database>(url, anon, {
    cookies: {
      get(name) {
        return req.cookies[name];
      },
      set(name, value, options) {
        // NextApiResponse cookie set:
        res.setHeader("Set-Cookie", serializeCookie(name, value, options));
      },
      remove(name, options) {
        res.setHeader("Set-Cookie", serializeCookie(name, "", { ...options, maxAge: 0 }));
      },
    },
  });
}

// mini helper sans dépendance externe
function serializeCookie(
  name: string,
  value: string,
  options: any = {}
) {
  const parts = [`${name}=${encodeURIComponent(value)}`];

  if (options.maxAge != null) parts.push(`Max-Age=${options.maxAge}`);
  if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
  if (options.path) parts.push(`Path=${options.path}`);
  else parts.push(`Path=/`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  if (options.secure) parts.push(`Secure`);
  if (options.httpOnly) parts.push(`HttpOnly`);

  return parts.join("; ");
}
