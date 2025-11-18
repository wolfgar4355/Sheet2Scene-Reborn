import { NextRequest, NextResponse } from "next/server"

/**
 * Basic Auth ciblée — protège uniquement /admin/*
 * Fonctionne sur Edge runtime et Node.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // ⚙️ N'applique l'auth que sur les pages /admin
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  const authHeader = req.headers.get("authorization") || ""
  if (!authHeader.startsWith("Basic ")) {
    return new NextResponse("Auth required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Admin"' },
    })
  }

  try {
    const base64 = authHeader.split(" ")[1]
    const decoded = Buffer.from(base64, "base64").toString("utf-8")
    const [user, pass] = decoded.split(":")

    if (user !== process.env.BASIC_AUTH_USER || pass !== process.env.BASIC_AUTH_PASS) {
      return new NextResponse("Unauthorized", {
        status: 401,
        headers: { "WWW-Authenticate": 'Basic realm="Sheet2Scene Admin"' },
      })
    }

    return NextResponse.next()
  } catch {
    return new NextResponse("Bad auth header", { status: 400 })
  }
}

// ✅ Appliquer uniquement sur /admin/*
export const config = {
  matcher: ["/admin/:path*"],
}
