// The page itself is a client component ("use client"), which cannot export
// metadata — this passthrough server layout provides the per-country title,
// description, canonical, and hreflang pair instead of the site defaults.
export const metadata = {
    title: "Kuliah di Swiss",
    description: "Kuliah di Swiss bersama Fortrust. Sekolah hospitality dan bisnis terbaik dunia, apply, visa, dan akomodasi — didampingi sampai berangkat.",
    alternates: {
        canonical: "/id/destinations/switzerland",
        languages: {
            "en-US": "/destinations/switzerland",
            "id-ID": "/id/destinations/switzerland",
        },
    },
};

export default function DestinationLayout({ children }) {
    return children;
}
