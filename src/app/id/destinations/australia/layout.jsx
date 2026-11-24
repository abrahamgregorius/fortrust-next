// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Australia",
    description: "Kuliah di Australia bersama Fortrust. Bimbingan lengkap: pilih universitas, apply, visa pelajar, hingga akomodasi. Konsultasi gratis sejak 1994.",
    alternates: {
        canonical: "/id/destinations/australia",
        languages: {
            "en-US": "/destinations/australia",
            "id-ID": "/id/destinations/australia",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
