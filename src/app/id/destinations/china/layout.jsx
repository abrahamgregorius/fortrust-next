// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di China",
    description: "Kuliah di China bersama Fortrust. Universitas top, beasiswa, apply, dan visa — didampingi dari awal hingga berangkat.",
    alternates: {
        canonical: "/id/destinations/china",
        languages: {
            "en-US": "/destinations/china",
            "id-ID": "/id/destinations/china",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
