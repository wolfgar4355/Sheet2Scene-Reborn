// apps/web/middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  try {
    const wantUser = process.env.BASIC_AUTH_USER;
    const wantPass = process.env.BASIC_AUTH_PASS;

    // Si pas de HTTP Basic Auth configurée, on laisse passer
    if (!wantUser || !wantPass) {
      return NextResponse.next();
    }

    // Le bypasser TypeScript de la version précédente pour éviter l'erreur TS2339
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
      const decoded = atob(base64); // natif à Edge
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

    return NextResponse.next();
  } catch (err) {
    // Si quoi que ce soit crashe l'environnement, on bypass le blocage et on logged
    console.error("[Middleware] Edge runtime global error:", err);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icons|images|sounds|assets|sw.js|site.webmanifest|robots.txt).*)"
  ],
};
