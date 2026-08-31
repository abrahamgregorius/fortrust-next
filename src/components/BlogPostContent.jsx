import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export const dynamic = 'force-dynamic';

export default async function BlogPostContent({ slug, locale = "en", slugField = "slug" }) {
    const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq(slugField, slug)
        .single();

    const { data: categoryData } = data?.category_id
        ? await supabase.from("categories").select("name").eq("id", data.category_id).single()
        : { data: null };

    const [{ data: relatedRaw }, { data: allCategories }] = await Promise.all([
        supabase.from("blogs").select("*").neq("slug", slug),
        supabase.from("categories").select("id, name"),
    ]);
    const catMap = Object.fromEntries((allCategories || []).map(c => [c.id, c.name]));
    const relatedArticles = (relatedRaw || [])
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3)
        .map(b => ({ ...b, category: catMap[b.category_id] }));

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
                <link rel="alternate" hrefLang="en" href={hreflangEn} />
                <link rel="alternate" hrefLang="id" href={hreflangId} />
                <link rel="alternate" hrefLang="x-default" href={hreflangEn} />

                <section className="page-header blog-post-header">
                    <div className="container">
                        <a
                            href={`/${locale === "id" ? "id/blog" : "blog"}`}
                            className="back-button"
                            style={{ display: 'inline-flex', alignItems: 'center', marginBottom: "1rem", gap: '0.5rem', opacity: 0.6, color: 'currentColor', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back
                        </a>
                        {categoryData?.name && <p className="category-label">{categoryData.name}</p>}
                        <h1>{displayTitle}</h1>
                        <p className="author-line"><strong>{data.author}</strong>{data.designation ? `, ${data.designation}` : ''}</p>
                        <p className="date-line">{formatDate(data.created_at)}</p>
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
                                    <h3>Related Articles</h3>
                                    {relatedArticles.map((article) => (
                                        <Link key={article.id} href={`/${locale === "id" ? "id/blog" : "blog"}/${locale === "en" ? (article.slug_en || article.slug) : article.slug}`} className="related-article-card">
                                            <div className="related-article-row">
                                                {article.image_urls?.[0] && (
                                                    <img src={article.image_urls[0]} alt={article.title} />
                                                )}
                                                <div className="related-article-info">
                                                    <h4>{article.title}</h4>
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
