import { preload } from "react-dom";
import HomeClientId from "@/components/home/HomeClientId";
import { supabase } from "@/lib/supabaseClient";

// ISR: hero banners are fetched server-side and baked into the HTML, so the
// hero image starts downloading at HTML parse time instead of waiting for
// JS hydration + a client-side Supabase round-trip (the old LCP waterfall).
// The page is regenerated at most every 5 minutes; a failed fetch falls back
// to the client-side path.
export const revalidate = 300;

async function getHeroBanners() {
    try {
        const { data, error } = await supabase
            .from("banners")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: false });
        if (error) return null;
        return (data || []).filter((banner) => {
            if (banner.always_show) return true;
            // An active banner with no schedule is treated as always visible.
            if (!banner.start_date || !banner.end_date) return true;
            const now = new Date();
            return now >= new Date(banner.start_date) && now <= new Date(banner.end_date);
        });
    } catch {
        return null;
    }
}

export default async function Home() {
    const banners = await getHeroBanners();

    // Hint the browser to start the LCP image before any JS runs.
    const firstBanner = banners?.find((b) => b.image_url);
    if (firstBanner) {
        preload(firstBanner.image_url, { as: "image", fetchPriority: "high" });
    } else if (banners) {
        // Empty result -> the client will render the hardcoded fallback slide.
        preload("/banner1.webp", { as: "image", fetchPriority: "high" });
    }

    return <HomeClientId initialBanners={banners} />;
}
