'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TagFilter({ posts, categories, locale = "en" }) {
    const [selected, setSelected] = useState('all');

    const getCategoryName = (categoryId) => {
        const cat = categories.find(c => c.id === categoryId);
        return cat ? cat.name : categoryId || null;
    };

    const uniqueCategories = [
        { id: 'all', name: 'All' },
        ...categories.map(c => ({ id: c.id, name: c.name })),
    ];

    const filtered = selected === 'all' ? posts : posts.filter(p => p.category_id === selected);

    const [featured, ...rest] = filtered;

    return (
        <>
            <div className="category-picker">
                <div className="container">
                    <div className="category-tabs">
                        {uniqueCategories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelected(cat.id)}
                                className={selected === cat.id ? 'active' : ''}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="blog-magazine">
                <div className="container">
                    {featured && (
                        <Link href={`/${locale === "id" ? "id/blog" : "blog"}/${locale === "en" ? (featured.slug_en || featured.slug) : featured.slug}`} className="magazine-hero">
                            <div className="hero-image-wrap">
                                <img
                                    src={featured.image_urls?.[0] || "/placeholder.jpg"}
                                    alt={locale === "en" ? (featured.title_en || featured.title) : featured.title}
                                />
                                <div className="hero-overlay">
                                    <div className="hero-tags">
                                        {getCategoryName(featured.category_id) && (
                                            <span className="tag-chip">{getCategoryName(featured.category_id)}</span>
                                        )}
                                    </div>
                                    <h2 className="hero-title">{locale === "en" ? (featured.title_en || featured.title) : featured.title}</h2>
                                    <p className="hero-author"><strong>by {featured.author}{featured.designation ? `, ${featured.designation}` : ''}</strong></p>
                                    <p className="hero-date">{new Date(featured.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                                </div>
                            </div>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <div className="magazine-grid">
                            {rest.map((post) => {
                                const displayTitle = locale === "en" ? (post.title_en || post.title) : post.title;
                                return (
                                <Link href={`/${locale === "id" ? "id/blog" : "blog"}/${locale === "en" ? (post.slug_en || post.slug) : post.slug}`} key={post.id} className="magazine-card">
                                    <div className="card-image-wrap">
                                        <img
                                            src={post.image_urls?.[0] || "/placeholder.jpg"}
                                            alt={displayTitle}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <div className="card-tags">
                                            {getCategoryName(post.category_id) && (
                                                <span className="tag-chip">{getCategoryName(post.category_id)}</span>
                                            )}
                                        </div>
                                        <h3 className="card-title">{displayTitle}</h3>
                                        <p className="card-author"><strong>by {post.author}{post.designation ? `, ${post.designation}` : ''}</strong></p>
                                        <p className="card-date">{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                                    </div>
                                </Link>
                                );
                            })}
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div className="empty-state">
                            <p>No blog posts in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
