// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Selandia Baru",
    description: "Kuliah di Selandia Baru bersama Fortrust. Universitas, apply, visa pelajar, dan dukungan setiba di sana — konsultasi gratis.",
    alternates: {
        canonical: "/id/destinations/newzealand",
        languages: {
            "en-US": "/destinations/newzealand",
            "id-ID": "/id/destinations/newzealand",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
