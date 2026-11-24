// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in Malaysia",
    description: "Study in Malaysia with Fortrust. High quality programs at affordable cost — applications, visas, and accommodation all handled for you.",
    alternates: {
        canonical: "/destinations/malaysia",
        languages: {
            "en-US": "/destinations/malaysia",
            "id-ID": "/id/destinations/malaysia",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
