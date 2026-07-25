import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip Next.js internals, APIs, and static assets/files (e.g. logos, favicons, site maps)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // If URL path contains uppercase letters, perform a 301 Permanent Redirect to lowercased URL
  if (/[A-Z]/.test(pathname)) {
    const lowercaseUrl = new URL(
      pathname.toLowerCase() + request.nextUrl.search,
      request.url
    );
    return NextResponse.redirect(lowercaseUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Apply this middleware to all paths except files/static folders
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"],
};
