// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in Singapore",
    description: "Study in Singapore with Fortrust. World class universities close to home — applications, visas, and accommodation, all handled.",
    alternates: {
        canonical: "/destinations/singapore",
        languages: {
            "en-US": "/destinations/singapore",
            "id-ID": "/id/destinations/singapore",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
