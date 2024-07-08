import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import GetCurrentUser from "./_services/GetCurrentUser";

const isProtectedRoute = createRouteMatcher([
  "/dashboard",
  "/ajouter-ouvrier",
  "/",
  "/visitor",
  "/supportContact",
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
  // (has) => {
  //   return (
  //     has({ permission: "org:sys_memberships:manage" }) ||
  //     has({ permission: "org:sys_domains_manage" })
  //   );
  // };
});
GetCurrentUser();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
