// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in Canada",
    description: "Study in Canada with Fortrust. Get free guidance on universities, applications, study permits, and accommodation for Indonesian students.",
    alternates: {
        canonical: "/destinations/canada",
        languages: {
            "en-US": "/destinations/canada",
            "id-ID": "/id/destinations/canada",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
