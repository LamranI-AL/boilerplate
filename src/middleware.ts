import { getToken } from "next-auth/jwt";
// import {  } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const secret = process.env.NEXTAUTH_SECRET;
  const salt = process.env.NEXTAUTH_SALT || "default_salt"; // default
  if (!secret || !salt) {
    throw new Error(
      "NEXTAUTH_SECRET or NEXTAUTH_SALT is not defined in environment variables."
    );
  }

  // const isAuth = await getToken({
  //   req: request, // requête nxtjs
  //   secret: secret,
  //   salt: salt,
  // });
  const session = await auth();
  let isAuth = false;
  if (session === null) {
    isAuth = false;
  } else {
    isAuth = true;
  }

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
