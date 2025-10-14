// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
    const isAuthenticated = localStorage.getItem("token");

    if (!isAuthenticated && request.nextUrl.pathname.startsWith("/protected")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}
