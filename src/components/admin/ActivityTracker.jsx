"use client";
import { useEffect } from "react";
import { touchSession } from "@/lib/sessionCookie";

// How often the idle timer is refreshed. The middleware signs an admin out
// after an hour without any activity, so an open tab has to say it is still
// being used.
const TOUCH_INTERVAL_MS = 60 * 1000;

export default function ActivityTracker() {
    useEffect(() => {
        let active = true;

        const ping = () => {
            if (!active) return;
            // A failed refresh must never break the page.
            touchSession().catch(() => {});
        };

        ping();
        const id = setInterval(ping, TOUCH_INTERVAL_MS);

        return () => {
            active = false;
            clearInterval(id);
        };
    }, []);

    return null;
}
