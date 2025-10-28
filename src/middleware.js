// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("access_token")?.value;
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

// Only run middleware on these routes
export const config = {
    matcher: ["/admin/:path*"],
};
