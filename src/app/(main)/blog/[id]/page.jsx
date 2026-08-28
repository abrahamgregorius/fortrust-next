import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const { data } = await supabase.from("blogs").select("*").eq("id", id).single();

    if (!data) {
        return { title: "Blog Post Not Found | FORTRUST" };
    }

    return {
        title: data.title,
        description: data.excerpt || `${data.title} — FORTRUST Education Services`,
        keywords: data.tag || [],
        openGraph: {
            title: data.title,
            description: data.excerpt || `${data.title} — FORTRUST Education Services`,
            type: "article",
            publishedTime: data.created_at,
            modifiedTime: data.updated_at,
            authors: [data.author || "Tim FORTRUST"],
            images: data.image_urls?.[0] ? [{ url: data.image_urls[0], width: 1200, height: 630 }] : [],
        },
        alternates: {
            canonical: `https://fortrust.edu/blog/${id}`,
        },
    };
}

export default async function BlogPost({ params }) {
    const { id } = await params;
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single();
    const { data: categoryData } = data?.category_id
        ? await supabase.from("categories").select("name").eq("id", data.category_id).single()
        : { data: null };

    // Fetch all, filter out current, take 3 newest
    const [{ data: allBlogs }, { data: allCategories }] = await Promise.all([
        supabase.from("blogs").select("*"),
        supabase.from("categories").select("id, name"),
    ]);
    const catMap = Object.fromEntries((allCategories || []).map(c => [c.id, c.name]));
    const relatedArticles = (allBlogs || [])
        .filter(b => b.id != id)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 3)
        .map(b => ({ ...b, category: catMap[b.category_id] }));

    if (error || !data) {
        return (
            <>
                <Navbar></Navbar>
                <main>
                    <section className="page-header">
                        <div className="container">
                            <h1>Blog Post Not Found</h1>
                            <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
                            <Link href="/blog">Back to Blog</Link>
                        </div>
                    </section>
                </main>
                <Footer></Footer>
            </>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
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
        "url": `https://fortrust.edu/blog/${id}`,
    };

    return (
        <>
            <Navbar></Navbar>
            <main>
                {/* Article Schema.org */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
                />

                <section className="page-header blog-post-header">
                    <div className="container">
                        {categoryData?.name && <p className="category-label">{categoryData.name}</p>}
                        <h1>{data.title}</h1>
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
                                    {
                                        data.image_urls && data.image_urls.length > 0 ? (
                                            <img src={data.image_urls[0]} alt={`Image 1`} style={{ maxWidth: '100%' }} />
                                        ) : (
                                            <p>No images available.</p>
                                        )
                                    }
                                </div>

                                <div className="blog-content" dangerouslySetInnerHTML={{ __html: data.content }}></div>

                                <div className="content-block">
                                    {
                                        data.image_urls && data.image_urls.length > 1 ? (
                                            data.image_urls.slice(1).map((url, index) => (
                                                <div key={index} style={{ marginBottom: '1rem' }}>
                                                    <img src={url} alt={`Image ${index + 2}`} style={{ maxWidth: '100%' }} />
                                                </div>
                                            ))
                                        ) : null
                                    }
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
                                    {relatedArticles.map((article, i) => (
                                        <Link key={article.id} href={`/blog/${article.id}`} className="related-article-card">
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
            <Footer></Footer>
        </>
    )
}
