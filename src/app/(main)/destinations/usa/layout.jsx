// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in the USA",
    description: "Study in the USA with Fortrust. Universities, applications, F-1 visas, and scholarship guidance — trusted since 1994.",
    alternates: {
        canonical: "/destinations/usa",
        languages: {
            "en-US": "/destinations/usa",
            "id-ID": "/id/destinations/usa",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
