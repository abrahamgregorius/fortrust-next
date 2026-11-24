// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in the UK",
    description: "Study in the UK with Fortrust. Leading universities, applications, CAS and student visas — free expert consultation.",
    alternates: {
        canonical: "/destinations/uk",
        languages: {
            "en-US": "/destinations/uk",
            "id-ID": "/id/destinations/uk",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
