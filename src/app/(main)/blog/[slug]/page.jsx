import BlogPostContent from "@/components/BlogPostContent";
import { supabase } from "@/lib/supabaseClient";
import { htmlToPlainText } from "@/lib/htmlToPlainText";

export const dynamic = 'force-dynamic';

// Per-article metadata: unique title/description/OG image instead of the
// layout defaults, plus hreflang pair linking the EN and ID versions.
export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        // Mirror BlogPostContent's query (same slug field + status guard) so
        // the metadata always describes exactly what the page renders.
        // NOTE: the blogs table has no excerpt column — the description is
        // derived from the article body via htmlToPlainText.
        const { data } = await supabase
            .from("blogs")
            .select(
                "title, title_en, slug, slug_en, content, content_en, image_urls, created_at, updated_at"
            )
            .eq("slug_en", slug)
            .eq("status", "PUBLISHED")
            .single();

        if (!data) return {};

        const title = data.title_en || data.title;
        const description =
            htmlToPlainText(data.content_en || data.content || "")
                .replace(/\s+/g, " ")
                .trim()
                .slice(0, 160);

        return {
            title,
            description,
            alternates: {
                canonical: `/blog/${data.slug_en || slug}`,
                languages: {
                    "en-US": `/blog/${data.slug_en || data.slug}`,
                    "id-ID": `/id/blog/${data.slug}`,
                },
            },
            openGraph: {
                type: "article",
                title,
                description,
                url: `/blog/${data.slug_en || slug}`,
                ...(data.image_urls?.[0] ? { images: [{ url: data.image_urls[0] }] } : {}),
                publishedTime: data.created_at || undefined,
                modifiedTime: data.updated_at || undefined,
            },
        };
    } catch {
        return {};
    }
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    return <BlogPostContent slug={slug} locale="en" slugField="slug_en" />;
}
