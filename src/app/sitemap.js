import { supabase } from "@/lib/supabaseClient";

const BASE = "https://fortrust.edu";

// All public marketing routes, EN at the root and ID under /id.
// Excludes /admin, /login, and other private routes (see robots.txt).
const SECTIONS = [
    "",
    "about",
    "contact",
    "blog",
    "events",
    "destinations/australia",
    "destinations/canada",
    "destinations/china",
    "destinations/malaysia",
    "destinations/newzealand",
    "destinations/singapore",
    "destinations/switzerland",
    "destinations/uk",
    "destinations/usa",
    "services/internship",
    "services/study-tour",
    "services/university",
    "tests/gmat",
    "tests/hsk",
    "tests/ielts-toefl",
    "tests/interest",
    "tests/language",
    "tests/language-prep",
    "tests/paket",
    "tests/sat",
    "tests/standardized",
    "alumni/success-stories",
    "alumni/work-placements",
    "policy/cookie",
    "policy/privacy",
];

const priorityFor = (section) => {
    if (section === "") return 1;
    if (["blog", "events"].includes(section)) return 0.8;
    if (section.startsWith("destinations/")) return 0.8;
    if (section.startsWith("policy/")) return 0.3;
    return 0.7;
};

const frequencyFor = (section) => {
    if (section === "") return "weekly";
    if (["blog", "events"].includes(section)) return "weekly";
    if (section.startsWith("policy/")) return "yearly";
    return "monthly";
};

export default async function sitemap() {
    const entries = [];

    // Static marketing pages in both locales.
    // No lastModified here: we can't derive real per-route dates for static
    // pages, and an always-fresh timestamp ("changed today" on every build)
    // trains crawlers to distrust lastmod. Blog posts below keep real DB
    // timestamps.
    for (const section of SECTIONS) {
        const path = section ? `/${section}` : "";
        entries.push({
            url: `${BASE}${path || "/"}`,
            changeFrequency: frequencyFor(section),
            priority: priorityFor(section),
        });
        entries.push({
            url: `${BASE}/id${path}`,
            changeFrequency: frequencyFor(section),
            priority: priorityFor(section),
        });
    }

    // Published articles — EN version uses slug_en (falls back to slug when
    // untranslated), ID version uses slug. Only PUBLISHED posts are listed.
    try {
        const { data: posts } = await supabase
            .from("blogs")
            .select("slug, slug_en, created_at, updated_at")
            .eq("status", "PUBLISHED");

        for (const post of posts || []) {
            const lastModified = post.updated_at || post.created_at || undefined;
            const enSlug = post.slug_en || post.slug;
            if (enSlug) {
                entries.push({
                    url: `${BASE}/blog/${enSlug}`,
                    lastModified,
                    changeFrequency: "monthly",
                    priority: 0.6,
                });
            }
            if (post.slug) {
                entries.push({
                    url: `${BASE}/id/blog/${post.slug}`,
                    lastModified,
                    changeFrequency: "monthly",
                    priority: 0.6,
                });
            }
        }
    } catch {
        // Sitemap still ships the static routes if the fetch fails.
    }

    return entries;
}
