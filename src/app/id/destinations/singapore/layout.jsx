// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Singapura",
    description: "Kuliah di Singapura bersama Fortrust. Universitas kelas dunia dekat dari rumah — apply, visa, dan akomodasi selesai tanpa ribet.",
    alternates: {
        canonical: "/id/destinations/singapore",
        languages: {
            "en-US": "/destinations/singapore",
            "id-ID": "/id/destinations/singapore",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
