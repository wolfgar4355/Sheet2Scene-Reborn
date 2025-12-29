// apps/web/middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const runtime = "nodejs";

function basicAuthGate(req: NextRequest) {
  const wantUser = process.env.BASIC_AUTH_USER;
  const wantPass = process.env.BASIC_AUTH_PASS;

  // Si pas configuré → pas de Basic Auth
  if (!wantUser || !wantPass) return null;

  const authHeader = req.headers.get("authorization") || "";

  if (!authHeader.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Beta"' },
    });
  }

  let user = "";
  let pass = "";
  try {
    const base64 = authHeader.split(" ")[1] || "";
    const decoded =
      typeof atob === "function"
        ? atob(base64)
        : Buffer.from(base64, "base64").toString("utf8");
    [user, pass] = decoded.split(":");
  } catch {
    return new NextResponse("Bad auth header", { status: 400 });
  }

  if (user !== wantUser || pass !== wantPass) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Beta"' },
    });
  }

  return null; // OK → laisse passer
}

export async function middleware(req: NextRequest) {
  // 1) Basic Auth (optionnel)
  const basic = basicAuthGate(req);
  if (basic) return basic;

  // 2) Supabase SSR session refresh (cookies)
  const res = NextResponse.next();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Si Supabase pas configuré → laisse passer (utile en dev)
  if (!url || !anon) return res;

  const supabase = createServerClient(url, anon, {
    cookies: {
      get(name) {
        return req.cookies.get(name)?.value;
      },
      set(name, value, options) {
        res.cookies.set({ name, value, ...options });
      },
      remove(name, options) {
        res.cookies.set({ name, value: "", ...options, maxAge: 0 });
      },
    },
  });

  // ⚠️ déclenche le refresh cookie/session
  await supabase.auth.getUser();

  return res;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|images|sounds|assets|sw.js|site.webmanifest|robots.txt).*)",
  ],
};
