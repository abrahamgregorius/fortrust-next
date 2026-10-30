"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

// Records one view per blog post per browser session: refreshes and
// client-side re-renders don't inflate the count. UTM params, referrer
// and a pseudo session id land in `blog_views` for later analysis.
export default function BlogViewTracker({ blogId, locale = "en" }) {
    useEffect(() => {
        if (!blogId) return;

        try {
            const dedupeKey = `blog-view-${blogId}`;
            if (sessionStorage.getItem(dedupeKey)) return;
            sessionStorage.setItem(dedupeKey, "1");

            let sessionId = sessionStorage.getItem("visitor-session");
            if (!sessionId) {
                sessionId = (crypto.randomUUID?.() || `${Date.now()}-${Math.random()}`)
                    .replace(/-/g, "");
                sessionStorage.setItem("visitor-session", sessionId);
            }

            const params = new URLSearchParams(window.location.search);

            supabase
                .from("blog_views")
                .insert({
                    blog_id: blogId,
                    path: window.location.pathname,
                    locale,
                    referrer: document.referrer || null,
                    utm_source: params.get("utm_source") || null,
                    utm_medium: params.get("utm_medium") || null,
                    utm_campaign: params.get("utm_campaign") || null,
                    session_id: sessionId,
                })
                .then(({ error }) => {
                    if (error) console.warn("View tracking failed:", error.message);
                });
        } catch {
            // Storage blocked (private mode etc.) — never break the page.
        }
    }, [blogId, locale]);

    return null;
}
