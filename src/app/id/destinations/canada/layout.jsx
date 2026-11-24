// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Kanada",
    description: "Kuliah di Kanada bersama Fortrust. Panduan bebas biaya untuk universitas, apply, study permit, dan akomodasi bagi mahasiswa Indonesia.",
    alternates: {
        canonical: "/id/destinations/canada",
        languages: {
            "en-US": "/destinations/canada",
            "id-ID": "/id/destinations/canada",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
