// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;
    
    // Check for admin authentication
    const token = request.cookies.get("access_token")?.value;
    const isAdminRoute = pathname.startsWith("/admin");

    if (isAdminRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // Handle locale redirects
    // If path starts with /id, it's Indonesian - let it through
    if (pathname.startsWith("/id")) {
        return NextResponse.next();
    }

    // If path starts with /en, redirect to root (since 'en' is default)
    if (pathname.startsWith("/en")) {
        const newPath = pathname.replace(/^\/en/, "") || "/";
        return NextResponse.redirect(new URL(newPath, request.url));
    }

    // For all other paths, they're treated as English (default)
    return NextResponse.next();
}

// Run middleware on all routes except static files
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public files (images, etc)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|public).*)",
    ],
};
