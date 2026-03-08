// apps/web/middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

function basicAuthGate(req: NextRequest) {
  try {
    const wantUser = process.env.BASIC_AUTH_USER;
    const wantPass = process.env.BASIC_AUTH_PASS;

    if (!wantUser || !wantPass) return null;

    const authHeader = (req as any).headers?.get("authorization") || "";

    if (!authHeader.startsWith("Basic ")) {
      return new NextResponse("Auth required", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Beta"' },
      });
    }

    let user = "";
    let pass = "";
    try {
      const base64 = authHeader.replace("Basic ", "").trim();
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
  } catch (err) {
    console.error("[Middleware] Basic auth gate error:", err);
    return null; // Fallthrough
  }
}

export async function middleware(req: NextRequest) {
  try {
    // 1) Vérification optionnelle (Basic Auth dev)
    const basic = basicAuthGate(req);
    if (basic) return basic;

    // 2) Rafraîchissement sécurisé de la session Supabase
    return await updateSession(req);
    
  } catch (err) {
    console.error("[Middleware] Fatal invocation error:", err);
    // Évite le fameux 500 MIDDLEWARE_INVOCATION_FAILED sur Vercel
    return NextResponse.next();
  }
}

// On ignore les assets, images, etc.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|images|sounds|assets|sw.js|site.webmanifest|robots.txt).*)"
  ],
};
