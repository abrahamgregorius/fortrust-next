import { NextResponse } from "next/server";

// Admin session cookies.
//
// The browser never writes the access token itself. The client hands the
// token to this route after a successful Supabase sign-in and the server
// replies with the cookies. That matters because only the server knows which
// scheme the request really used, so the Secure flag is correct on an HTTPS
// domain and on a plain-HTTP VPS alike.
//
// Both cookies are HttpOnly, so page scripts cannot read or forge them.

const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours
const ACTIVITY_MAX_AGE = 60 * 60 * 24; // 24 hours

/** The scheme the browser actually used, honouring a TLS-terminating proxy. */
function requestIsSecure(request) {
    const forwarded = request.headers.get("x-forwarded-proto");
    if (forwarded) {
        const first = forwarded.split(",")[0].trim().toLowerCase();
        if (first) return first === "https";
    }
    return request.nextUrl.protocol === "https:";
}

function cookieOptions(request, maxAge) {
    return {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: requestIsSecure(request),
        maxAge,
    };
}

export async function POST(request) {
    const body = await request.json().catch(() => ({}));

    // Keep an open admin tab alive. Only refreshes when a session exists, so
    // anonymous visitors on /login do not get a cookie.
    if (body?.action === "touch") {
        const hasSession = Boolean(request.cookies.get("access_token")?.value);
        if (!hasSession) return NextResponse.json({ ok: true, refreshed: false });

        const response = NextResponse.json({ ok: true, refreshed: true });
        response.cookies.set(
            "lastActivity",
            String(Date.now()),
            cookieOptions(request, ACTIVITY_MAX_AGE)
        );
        return response;
    }

    const token = typeof body?.access_token === "string" ? body.access_token : "";
    if (!token) {
        return NextResponse.json({ error: "access_token is required" }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set("access_token", token, cookieOptions(request, SESSION_MAX_AGE));
    response.cookies.set(
        "lastActivity",
        String(Date.now()),
        cookieOptions(request, ACTIVITY_MAX_AGE)
    );
    return response;
}

export async function DELETE(request) {
    const response = NextResponse.json({ ok: true });
    response.cookies.set("access_token", "", cookieOptions(request, 0));
    response.cookies.set("lastActivity", "", cookieOptions(request, 0));
    return response;
}
