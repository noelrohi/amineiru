import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/signin(.*)",
    "/signup(.*)",
    "/sso-callback(.*)",
    "/api(.*)",
    "/anime(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
