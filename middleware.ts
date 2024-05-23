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

const publicRoutes = ["/admin-login", "/register", "/login", "/"];

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const loginRoute = new URL("/", req.url);
  const token = req.cookies.get("access_token")?.value;

  const isPublicRoute = publicRoutes.includes(url.pathname);

  // Se houver token, o usuário será redirecionado para /seller/dashboard
  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/seller/dashboard", req.url));
  }

  // Se a rota for a raiz ou a página de login e o domínio for o correto, redirecione para a página de login
  if (
    url.pathname === "/" ||
    (url.pathname === "/login" && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL("/login", req.url));
  }

  // Se não houver token, verifique se a rota é pública e redirecione para a página de login se necessário
  if (!token) {
    if (isPublicRoute) {
      return NextResponse.next();
    }
    return NextResponse.redirect(loginRoute);
  }
}
