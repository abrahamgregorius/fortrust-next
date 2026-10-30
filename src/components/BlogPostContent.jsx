import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"
import BlogViewTracker from "@/components/BlogViewTracker"

export const dynamic = 'force-dynamic';

const postCategoryIds = (p) => p.category_ids || (p.category_id ? [p.category_id] : []);

export default async function BlogPostContent({ slug, locale = "en", slugField = "slug" }) {
    const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq(slugField, slug)
        .eq("status", "PUBLISHED")
        .single();

    if (error || !data) {
        return (
            <>
                <Navbar />
                <main>
                    <section className="page-header">
                        <div className="container">
                            <h1>Blog Post Not Found</h1>
                            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
                            <Link href={`/${locale === "id" ? "id/blog" : "blog"}`}>Back to Blog</Link>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const displayTitle = locale === "id" ? data.title : (data.title_en || data.title);
    const displayContent = locale === "id" ? data.content : (data.content_en || data.content);

    const { data: allCategories } = await supabase.from("categories").select("id, name");
    const catMap = Object.fromEntries((allCategories || []).map(c => [c.id, c.name]));

    const categoryName = (id) => catMap[id] || null;
    const primaryCategory = postCategoryIds(data).map(categoryName).filter(Boolean)[0] || null;

    const localizedTitle = (b) => (locale === "id" ? b.title : (b.title_en || b.title));

    // Related articles: posts sharing tags (weighted higher) or categories
    // with this one; gaps filled with the newest posts so the box is never
    // empty. The current post is excluded by id (slug-safe for both locales).
    const [{ data: relatedRaw }] = await Promise.all([
        supabase.from("blogs").select("*").eq("status", "PUBLISHED").neq("id", data.id),
    ]);

    const currentTags = new Set((data.tag || []).map(t => t.trim().toLowerCase()));
    const currentCats = new Set(postCategoryIds(data));

    const scored = (relatedRaw || []).map((b) => {
        const tagOverlap = (b.tag || [])
            .map(t => t.trim().toLowerCase())
            .filter(t => currentTags.has(t)).length;
        const catOverlap = postCategoryIds(b).filter(c => currentCats.has(c)).length;
        return { ...b, score: tagOverlap * 2 + catOverlap };
    });

    const matched = scored
        .filter(b => b.score > 0)
        .sort((a, b) => b.score - a.score || new Date(b.created_at) - new Date(a.created_at));
    const matchedIds = new Set(matched.map(b => b.id));

    const latestOthers = scored
        .filter(b => !matchedIds.has(b.id))
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const relatedArticles = [...matched, ...latestOthers]
        .slice(0, 3)
        .map(b => ({ ...b, category: postCategoryIds(b).map(categoryName).filter(Boolean)[0] || null }));

    // "Latest Posts" section underneath: newest published posts, current excluded.
    const latestPosts = [...scored]
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3)
        .map(b => ({ ...b, category: postCategoryIds(b).map(categoryName).filter(Boolean)[0] || null }));

    const slugPair = { idSlug: data.slug, enSlug: data.slug_en };

    const canonicalUrl = `https://fortrust.edu/blog/${slug}`;
    const hreflangId = `https://fortrust.edu/id/blog/${slug}`;
    const hreflangEn = `https://fortrust.edu/blog/${slug}`;
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": displayTitle,
        "image": data.image_urls?.[0] || "https://fortrust.edu/logo-fortrust.png",
        "datePublished": data.created_at,
        "dateModified": data.updated_at || data.created_at,
        "author": {
            "@type": "Person",
            "name": data.author || "Tim FORTRUST",
        },
        "publisher": {
            "@type": "Organization",
            "name": "FORTRUST Education Services",
            "logo": {
                "@type": "ImageObject",
                "url": "https://fortrust.edu/logo-fortrust.png"
            }
        },
        "description": data.excerpt || displayTitle,
        "keywords": data.tag ? data.tag.join(", ") : "",
        "url": canonicalUrl,
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <Navbar />
            <main>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__blogSlugPair = ${JSON.stringify(slugPair)}`,
                    }}
                />
                <BlogViewTracker blogId={data.id} locale={locale} />
                <link rel="alternate" hrefLang="en" href={hreflangEn} />
                <link rel="alternate" hrefLang="id" href={hreflangId} />
                <link rel="alternate" hrefLang="x-default" href={hreflangEn} />

                <section className="page-header blog-post-header">
                    <div className="container">
                        {/* <a
                            href={`/${locale === "id" ? "id/blog" : "blog"}`}
                            className="back-button"
                            style={{ display: 'inline-flex', alignItems: 'center', marginBottom: "1rem", gap: '0.5rem', opacity: 0.6, color: 'currentColor', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back
                        </a> */}
                        {primaryCategory && <p className="category-label">{primaryCategory}</p>}
                        <h1>{displayTitle}</h1>
                        <p className="author-line"><strong>{data.author}</strong>{data.designation ? `, ${data.designation}` : ''}</p>
                        <p className="date-line">{formatDate(data.created_at)}</p>
                        <a
                            href={locale === "en" ? `/id/blog/${slugPair.idSlug}` : `/blog/${slugPair.enSlug}`}
                            className="lang-toggle-btn"
                        >
                            {locale === "en" ? "Baca dalam Bahasa Indonesia" : "Read in English"}
                        </a>
                        <div className="tags-blog">
                            {data.tag?.map ? data.tag.map(t => <span key={t.trim()}>{t.trim()}</span>) : null}
                        </div>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container">
                        <div className="blog-layout">
                            <div className="blog-main-content">
                                <div className="content-block">
                                    {data.image_urls && data.image_urls.length > 0 ? (
                                        <img src={data.image_urls[0]} alt="Image 1" style={{ maxWidth: '100%' }} />
                                    ) : (
                                        <p>No images available.</p>
                                    )}
                                </div>

                                <div className="blog-content" dangerouslySetInnerHTML={{ __html: displayContent }}></div>

                                <div className="content-block">
                                    {data.image_urls && data.image_urls.length > 1 ? (
                                        data.image_urls.slice(1).map((url, index) => (
                                            <div key={index} style={{ marginBottom: '1rem' }}>
                                                <img src={url} alt={`Image ${index + 2}`} style={{ maxWidth: '100%' }} />
                                            </div>
                                        ))
                                    ) : null}
                                </div>

                                {data?.youtube_url && (
                                    <div className="content-block">
                                        <div style={{
                                            position: 'relative',
                                            paddingBottom: '56.25%',
                                            height: 0,
                                            overflow: 'hidden',
                                            marginBottom: '1rem'
                                        }}>
                                            <iframe
                                                src={`https://www.youtube.com/embed/${data.youtube_url}?rel=0`}
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                            ></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <aside className="blog-sidebar">
                                <div className="related-articles">
                                    <h3>{locale === "id" ? "Artikel Terkait" : "Related Articles"}</h3>
                                    {relatedArticles.length === 0 && (
                                        <p style={{ fontSize: "0.85rem", opacity: 0.7 }}>
                                            {locale === "id" ? "Belum ada artikel terkait." : "No related articles yet."}
                                        </p>
                                    )}
                                    {relatedArticles.map((article) => (
                                        <Link key={article.id} href={`/${locale === "id" ? "id/blog" : "blog"}/${locale === "en" ? (article.slug_en || article.slug) : article.slug}`} className="related-article-card">
                                            <div className="related-article-row">
                                                {article.image_urls?.[0] && (
                                                    <img src={article.image_urls[0]} alt={article.title} />
                                                )}
                                                <div className="related-article-info">
                                                    <h4>{localizedTitle(article)}</h4>
                                                    <span className="related-article-meta">{article.category || formatDate(article.created_at)}</span>
                                                    <span className="related-article-date">{formatDate(article.created_at)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <div className="related-articles" style={{ marginTop: "2rem" }}>
                                    <h3>{locale === "id" ? "Pos Terbaru" : "Latest Posts"}</h3>
                                    {latestPosts.map((article) => (
                                        <Link key={article.id} href={`/${locale === "id" ? "id/blog" : "blog"}/${locale === "en" ? (article.slug_en || article.slug) : article.slug}`} className="related-article-card">
                                            <div className="related-article-row">
                                                {article.image_urls?.[0] && (
                                                    <img src={article.image_urls[0]} alt={article.title} />
                                                )}
                                                <div className="related-article-info">
                                                    <h4>{localizedTitle(article)}</h4>
                                                    <span className="related-article-meta">{article.category || formatDate(article.created_at)}</span>
                                                    <span className="related-article-date">{formatDate(article.created_at)}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
