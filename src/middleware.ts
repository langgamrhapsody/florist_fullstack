import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  const jwt_cookie = cookies().get("jwt") as RequestCookie;
  const jwt = jwt_cookie?.value;

  req.headers.set("Authorization", `Bearer ${jwt}`);

  const response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  if (jwt) {
    response.cookies.set({ name: "isLoggedIn", value: "true", path: "/" });
  } else {
    response.cookies.set({ name: "isLoggedIn", value: "false", path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/", "/auth/:path*", "/admin/:path*", "/user/:path*"],
};