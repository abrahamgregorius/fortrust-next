// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in Australia",
    description: "Study in Australia with expert guidance from Fortrust. Universities, applications, student visas, and accommodation — free consultation since 1994.",
    alternates: {
        canonical: "/destinations/australia",
        languages: {
            "en-US": "/destinations/australia",
            "id-ID": "/id/destinations/australia",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
