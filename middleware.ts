import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// rotas que o middleware ficará ouvindo
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/admin/:path*",
    "/seller/:path*",
  ],
};

const publicRoutes = ["/admin-login", "/register", "/login"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const loginRoute = new URL("/", req.url);
  const token = req.cookies.get("access_token")?.value;
  const isPublicRoute = publicRoutes.includes(url.pathname);

  if (
    url.pathname === "/" ||
    (url.pathname === "/login" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  // se existir um token o usuario sera redirecionado para o seller/dashboard
  if (token && isPublicRoute) {
    // TODO:

    return NextResponse.redirect(new URL("/seller/dashboard", req.url));
  }

  if (!token) {
    if (isPublicRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(loginRoute);
  }
}
