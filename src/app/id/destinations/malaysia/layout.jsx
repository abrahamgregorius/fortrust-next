// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Malaysia",
    description: "Kuliah di Malaysia bersama Fortrust. Program berkualitas dengan biaya terjangkau — apply, visa, dan akomodasi kami urus semua.",
    alternates: {
        canonical: "/id/destinations/malaysia",
        languages: {
            "en-US": "/destinations/malaysia",
            "id-ID": "/id/destinations/malaysia",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
