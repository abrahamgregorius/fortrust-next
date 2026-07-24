"use client"
import { useEffect } from "react";

export default function ActivityTracker() {
    useEffect(() => {
        // Refresh lastActivity on every page visit
        const isProduction = process.env.NODE_ENV === 'production';
        const secureFlag = isProduction ? '; secure' : '';
        document.cookie = `lastActivity=${Date.now()}; path=/; max-age=86400${secureFlag}; samesite=lax`;
    }, []);

    return null;
}
