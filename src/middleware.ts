import { getToken } from "next-auth/jwt";
// import {  } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isAuth = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const protectedPages = [
    "/dashboard/:path",
    "/dashboard",
    "/ajouter-ouvrier",
    "/ajouter-condidate",
    "/condidats",
    "/condidats/:path",
    "/",
  ];
  const isProtectedRoute = protectedPages.some((route) => {
    return pathname.startsWith(route);
  });
  if (isProtectedRoute && !isAuth) {
    console.log("not auth");
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  console.log("is auth");
  return NextResponse.next();
}
export const config = {
  matcher: [
    "/dashboard/:path",
    "/dashboard",
    "/ajouter-ouvrier",
    "/condidats",
    "/",
    "/ajouter-condidate",
    "/ajouter-condidate",
  ],
  // matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
