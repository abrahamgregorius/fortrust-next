/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // AVIF averages ~30% smaller than WebP; webp kept as fallback.
        formats: ["image/avif", "image/webp"],
        // Default 4h caused constant re-optimization (and cold-cache 500s on
        // large images). 31 days matches the immutable static asset cache.
        minimumCacheTTL: 2678400,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "korasssprzuarfcfctte.supabase.co",
                pathname: "/storage/v1/object/public/**",
            },
        ],
    },
};

export default nextConfig;
