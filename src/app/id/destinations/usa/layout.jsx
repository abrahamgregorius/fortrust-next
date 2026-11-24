// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di USA",
    description: "Kuliah di Amerika Serikat bersama Fortrust. Universitas, apply, visa F-1, dan beasiswa — dipercaya sejak 1994.",
    alternates: {
        canonical: "/id/destinations/usa",
        languages: {
            "en-US": "/destinations/usa",
            "id-ID": "/id/destinations/usa",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
