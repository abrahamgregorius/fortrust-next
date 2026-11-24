// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Inggris",
    description: "Kuliah di Inggris bersama Fortrust. Universitas unggulan, apply, CAS dan visa pelajar — konsultasi gratis dari ahlinya.",
    alternates: {
        canonical: "/id/destinations/uk",
        languages: {
            "en-US": "/destinations/uk",
            "id-ID": "/id/destinations/uk",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
