// middleware.js
import { NextResponse } from "next/server";

// How long an admin session may sit untouched before it is dropped.
const IDLE_TIMEOUT_MS = 60 * 60 * 1000; // 1 hour

export function middleware(request) {
    const { pathname } = request.nextUrl;

    const token = request.cookies.get("access_token")?.value;
    const lastActivity = request.cookies.get("lastActivity")?.value;
    const isAdminRoute = pathname.startsWith("/admin");

    if (isAdminRoute) {
        if (!token) {
            // Remember where the admin wanted to go, so a deep link survives
            // the round trip through /login.
            const login = new URL("/login", request.url);
            login.searchParams.set("next", pathname + request.nextUrl.search);
            return NextResponse.redirect(login);
        }

        const last = Number(lastActivity);
        if (lastActivity && Number.isFinite(last) && Date.now() - last > IDLE_TIMEOUT_MS) {
            // Idle for too long: drop the session and start over.
            const login = new URL("/login", request.url);
            login.searchParams.set("next", pathname + request.nextUrl.search);
            const response = NextResponse.redirect(login);
            response.cookies.set("access_token", "", { path: "/", maxAge: 0 });
            response.cookies.set("lastActivity", "", { path: "/", maxAge: 0 });
            return response;
        }
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
    matcher: ["/admin/:path*", "/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};
