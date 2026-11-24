// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in Switzerland",
    description: "Study in Switzerland with Fortrust. Hospitality and business schools, applications, visas, and accommodation — guided end to end.",
    alternates: {
        canonical: "/destinations/switzerland",
        languages: {
            "en-US": "/destinations/switzerland",
            "id-ID": "/id/destinations/switzerland",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
