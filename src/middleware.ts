import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getJWTSSR } from "./utils/helpers/ssrHelpers";

export async function middleware(req: NextRequest, res: NextResponse) {
  const jwt = getJWTSSR();

  req.headers.set("Authorization", `Bearer ${jwt}`);

  const response = NextResponse.next({
    request: {
      headers: req.headers,
    },
  });

  return response;
}

export const config = {
  matcher: ["/", "/auth/:path*", "/admin/:path*", "/user/:path*"],
};
