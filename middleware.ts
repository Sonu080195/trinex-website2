// middleware.ts
// Place this in your PROJECT ROOT (same level as package.json, NOT inside app/)
// Protects everything under /admin — redirects to /admin/login if no valid session.

import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/adminAuth";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow the login page and the login API route through without a session
  if (pathname === "/admin/login" || pathname === "/api/admin/login") {
    return NextResponse.next();
  }

  // Everything else under /admin requires a valid session cookie
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("admin_session")?.value;
    const valid = await verifySessionToken(token);

    if (!valid) {
      const loginUrl = new URL("/admin/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};