"use client";

/**
 * Admin session cookies.
 *
 * The access token is not written with document.cookie. It is handed to
 * /api/auth/session, which replies with an HttpOnly cookie. The server picks
 * the Secure flag from the scheme the request came in on, so logging in works
 * the same on an HTTPS domain and on a plain-HTTP VPS.
 */

async function postSession(body) {
    const res = await fetch("/api/auth/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        credentials: "same-origin",
    });
    if (!res.ok) {
        const payload = await res.json().catch(() => ({}));
        throw new Error(payload.error || `Session request failed (${res.status})`);
    }
    return res.json().catch(() => ({}));
}

/** Starts the session. Throws with a readable message on failure. */
export function startSession(accessToken) {
    return postSession({ access_token: accessToken });
}

/** Refreshes the idle timer so an open admin tab is not signed out. */
export function touchSession() {
    return postSession({ action: "touch" });
}

/** Removes the session cookies. */
export async function endSession() {
    const res = await fetch("/api/auth/session", {
        method: "DELETE",
        credentials: "same-origin",
    });
    if (!res.ok) throw new Error(`Sign out failed (${res.status})`);
}
