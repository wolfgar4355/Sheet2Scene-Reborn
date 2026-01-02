// apps/web/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

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

  // ✅ Edge runtime : atob est dispo
  let user = "";
  let pass = "";
  try {
    const base64 = authHeader.slice("Basic ".length).trim();
    const decoded = atob(base64);
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

  return null;
}

export function middleware(req: NextRequest) {
  const basic = basicAuthGate(req);
  if (basic) return basic;

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|images|sounds|assets|sw.js|site.webmanifest|robots.txt).*)",
  ],
};
