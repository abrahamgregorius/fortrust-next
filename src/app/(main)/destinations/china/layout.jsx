// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in China",
    description: "Study in China with Fortrust. Top universities, scholarships, applications, and visas — guided end to end by our education consultants.",
    alternates: {
        canonical: "/destinations/china",
        languages: {
            "en-US": "/destinations/china",
            "id-ID": "/id/destinations/china",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
