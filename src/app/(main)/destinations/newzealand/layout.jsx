// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Study in New Zealand",
    description: "Study in New Zealand with Fortrust. Universities, applications, student visas, and support after arrival — free consultation.",
    alternates: {
        canonical: "/destinations/newzealand",
        languages: {
            "en-US": "/destinations/newzealand",
            "id-ID": "/id/destinations/newzealand",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
