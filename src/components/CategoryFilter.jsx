'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CategoryFilter({ posts }) {
    const [selected, setSelected] = useState('all');

    const categories = ['all', ...new Set(posts.map(p => p.category).filter(Boolean))];

    const filtered = selected === 'all' ? posts : posts.filter(p => p.category === selected);

    const [featured, ...rest] = filtered;

    return (
        <>
            <div className="category-picker">
                <div className="container">
                    <div className="category-tabs">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelected(cat)}
                                className={selected === cat ? 'active' : ''}
                            >
                                {cat === 'all' ? 'All' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <section className="blog-magazine">
                <div className="container">
                    {featured && (
                        <Link href={`/blog/${featured.id}`} className="magazine-hero">
                            <div className="hero-image-wrap">
                                <img
                                    src={featured.image_urls?.[0] || "/placeholder.jpg"}
                                    alt={featured.title}
                                />
                                <div className="hero-overlay">
                                    <span className="hero-category">{featured.category}</span>
                                    <h2 className="hero-title">{featured.title}</h2>
                                    <p className="hero-author">by {featured.author}</p>
                                </div>
                            </div>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <div className="magazine-grid">
                            {rest.map((post) => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="magazine-card">
                                    <div className="card-image-wrap">
                                        <img
                                            src={post.image_urls?.[0] || "/placeholder.jpg"}
                                            alt={post.title}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <span className="card-category">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-author">by {post.author}</p>
                                    </div>
                                </Link>
                            ))}
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
