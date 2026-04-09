"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Link from "next/link";

export default function PopupBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [popupBanners, setPopupBanners] = useState([]);
    const [activeBanners, setActiveBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
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
            console.log('Current time:', now);
            console.log('Available banners:', popupBanners);

            // Filter active popup banners within schedule
            const filteredBanners = popupBanners.filter(banner => {
                console.log('Checking banner:', banner.title, 'always_show:', banner.always_show, 'start_date:', banner.start_date, 'end_date:', banner.end_date);
                if (banner.always_show) {
                    console.log('Banner always show: true');
                    return true; // Always show if flagged
                }

                if (!banner.start_date || !banner.end_date) {
                    console.log('Banner has no dates and not always show: false');
                    return false; // No schedule and not always show
                }

                const startDate = new Date(banner.start_date);
                const endDate = new Date(banner.end_date);
                console.log('Parsed start:', startDate, 'end:', endDate);

                const isInRange = now >= startDate && now <= endDate;
                console.log('Is in range:', isInRange);
                return isInRange;
            });

            console.log('Filtered active banners:', filteredBanners);
            setActiveBanners(filteredBanners);
            setCurrentIndex(0); // Reset to first banner
            setShowBanner(filteredBanners.length > 0);
        }
    }, [popupBanners, isLoading]);

    const handleClose = () => {
        if (currentIndex < activeBanners.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setShowBanner(false);
        }
    };

    if (isLoading || !showBanner || currentIndex >= activeBanners.length) return null;

    const currentBanner = activeBanners[currentIndex];

    return (
        <div className="popup-modal-overlay" suppressHydrationWarning onClick={handleClose}>
            <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
                <Link href={currentBanner.link_url}>
                    <picture>
                        <source media="(max-width: 768px)" srcSet={currentBanner.mobile_image_url || currentBanner.image_url} />
                        <img src={currentBanner.image_url} alt="Popup Banner" width={800} height={600} />
                    </picture>
                </Link>
            </div>
            <div className="popup-modal-hint">
                Click dark area to close
            </div>
        </div>
    );
}