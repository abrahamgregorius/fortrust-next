"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function PopupBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [popupBanners, setPopupBanners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPopupBanners = async () => {
        setIsLoading(true);
        try {
            const { data, error } = await supabase
                .from("popup_banners")
                .select("*")
                .eq("is_active", true)
                .order("created_at", "desc");
            if (error) {
                console.error("Error fetching popup banners:", error);
            } else {
                setPopupBanners(data || []);
            }
        } catch (err) {
            console.error("Fetch popup banners failed:", err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchPopupBanners();
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && !isLoading) {
            const now = new Date();

            // Find active popup banner within schedule
            const activeBanner = popupBanners.find(banner => {
                if (banner.always_show) return true; // Always show if flagged

                if (!banner.start_date || !banner.end_date) return false; // No schedule and not always show

                const startDate = new Date(banner.start_date);
                const endDate = new Date(banner.end_date);

                return now >= startDate && now <= endDate;
            });

            setShowBanner(!!activeBanner);
        }
    }, [popupBanners, isLoading]);

    if (isLoading || !showBanner) return null;

    // Get the active banner (we know it exists since showBanner is true)
    const activeBanner = popupBanners.find(banner => {
        if (banner.always_show) return true;
        if (!banner.start_date || !banner.end_date) return false;
        const startDate = new Date(banner.start_date);
        const endDate = new Date(banner.end_date);
        const now = new Date();
        return now >= startDate && now <= endDate;
    });

    if (!activeBanner) return null;

    return (
        <div className="popup-modal-overlay" suppressHydrationWarning onClick={() => {
            setShowBanner(false);
        }}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
                <Link href={activeBanner.link_url}>
                    <picture>
                        <source media="(max-width: 768px)" srcSet={activeBanner.mobile_image_url || activeBanner.image_url} />
                        <img src={activeBanner.image_url} alt="Popup Banner" width={800} height={600} />
                    </picture>
                </Link>
            </div>
            <div className="popup-modal-hint">
                Click dark area to close
            </div>
        </div>
    );
}