'use client';

import { useState } from 'react';
import Link from 'next/link';

function getTags(post) {
    if (!post.tag) return [];
    if (Array.isArray(post.tag)) return post.tag.map(t => t.trim()).filter(Boolean);
    return post.tag.split(',').map(t => t.trim()).filter(Boolean);
}

export default function TagFilter({ posts }) {
    const [selected, setSelected] = useState('all');

    const allTags = posts.flatMap(getTags);
    const uniqueTags = ['all', ...new Set(allTags)];

    const filtered = selected === 'all' ? posts : posts.filter(p => getTags(p).includes(selected));

    const [featured, ...rest] = filtered;

    return (
        <>
            <div className="category-picker">
                <div className="container">
                    <div className="category-tabs">
                        {uniqueTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelected(tag)}
                                className={selected === tag ? 'active' : ''}
                            >
                                {tag === 'all' ? 'All' : tag}
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
                                    <div className="hero-tags">
                                        {getTags(featured).map(t => (
                                            <span key={t} className="tag-chip">{t}</span>
                                        ))}
                                    </div>
                                    <h2 className="hero-title">{featured.title}</h2>
                                    <p className="hero-author"><strong>by {featured.author}{featured.designation ? `, ${featured.designation}` : ''}</strong></p>
                                    <p className="hero-date">{new Date(featured.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
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
                                        <div className="card-tags">
                                            {getTags(post).map(t => (
                                                <span key={t} className="tag-chip">{t}</span>
                                            ))}
                                        </div>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-author"><strong>by {post.author}{post.designation ? `, ${post.designation}` : ''}</strong></p>
                                        <p className="card-date">{new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {filtered.length === 0 && (
                        <div className="empty-state">
                            <p>No blog posts with this tag.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
