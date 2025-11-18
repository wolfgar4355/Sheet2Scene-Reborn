// apps/web/middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Basic Auth global (protège tout le site sauf les assets Next)
 * Fonctionne sur le runtime Edge (atob dispo) et Node.
 */
export function middleware(req: NextRequest) {
  const authHeader = req.headers.get("authorization") || "";

  // Demander l’auth si pas d’entête Basic
  if (!authHeader.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Beta"' },
    });
  }

  // Récupère user:pass à partir du header Basic base64
  let user = "";
  let pass = "";
  try {
    const base64 = authHeader.split(" ")[1] || "";
    const decoded = typeof atob === "function"
      ? atob(base64)                  // Edge runtime
      : Buffer.from(base64, "base64").toString("utf8"); // Node fallback
    [user, pass] = decoded.split(":");
  } catch {
    return new NextResponse("Bad auth header", { status: 400 });
  }

  // Compare aux valeurs d’environnement
  if (
    user !== process.env.BASIC_AUTH_USER ||
    pass !== process.env.BASIC_AUTH_PASS
  ) {
    return new NextResponse("Unauthorized", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Beta"' },
    });
  }

  // OK -> laisse passer
  return NextResponse.next();
}

// Protège tout sauf les assets/favicons/service worker, etc.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sw.js|site.webmanifest|robots.txt).*)",
  ],
};
