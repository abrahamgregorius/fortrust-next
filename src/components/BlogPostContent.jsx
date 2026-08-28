import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export const dynamic = 'force-dynamic';

export default async function BlogPostContent({ slug, lang = 'en', langPath = '' }) {
    const [{ data, error }, { data: enTranslation }] = await Promise.all([
        supabase.from("blogs").select("*").eq("slug", slug).eq("language", lang).single(),
        lang === 'en' ? { data: null } : supabase.from("blogs").select("id").eq("slug", slug).eq("language", "en").single(),
    ]);

    const { data: categoryData } = data?.category_id
        ? await supabase.from("categories").select("name").eq("id", data.category_id).single()
        : { data: null };

    // Related: same language, different slug
    const [{ data: relatedRaw }, { data: allCategories }] = await Promise.all([
        supabase.from("blogs").select("*").eq("language", lang).neq("slug", slug),
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
                            <Link href={`${langPath}/blog`}>Back to Blog</Link>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        );
    }

    const canonicalUrl = `https://fortrust.edu${langPath}/blog/${slug}`;
    const hreflangAlternates = [
        { lang: 'en', href: `https://fortrust.edu/blog/${slug}` },
        { lang: 'ne', href: `https://fortrust.edu/ne/blog/${slug}` },
        { lang: 'hi', href: `https://fortrust.edu/hi/blog/${slug}` },
    ];

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(lang === 'ne' ? 'ne-NP' : lang === 'hi' ? 'hi-IN' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
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
        "description": data.excerpt || data.title,
        "keywords": data.tag ? data.tag.join(", ") : "",
        "url": canonicalUrl,
    };

    return (
        <>
            <Navbar />
            <main>
                {/* Schema.org */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />

                {/* hreflang links injected via metadata — handled by parent page */}

                <section className="page-header blog-post-header">
                    <div className="container">
                        {categoryData?.name && <p className="category-label">{categoryData.name}</p>}
                        <h1>{data.title}</h1>
                        <p className="author-line"><strong>{data.author}</strong>{data.designation ? `, ${data.designation}` : ''}</p>
                        <p className="date-line">{formatDate(data.created_at)}</p>
                        <div className="tags-blog">
                            {data.tag?.map ? data.tag.map(t => <span key={t.trim()}>{t.trim()}</span>) : null}
                        </div>
                        {enTranslation && (
                            <a href={`/blog/${slug}`} className="btn btn--secondary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                                Translate to English
                            </a>
                        )}
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

                                <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>

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
                                        <Link key={article.id} href={`${langPath}/blog/${article.slug}`} className="related-article-card">
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
