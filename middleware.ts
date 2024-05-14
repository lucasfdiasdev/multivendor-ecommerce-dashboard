import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/dashboard/:path*"],
};

export function middleware(req: NextRequest) {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/admin-login", req.url));
  }
}
