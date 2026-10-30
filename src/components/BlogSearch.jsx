"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

// Search box for the blog page header. Filters the posts already loaded
// on the page (instant, no API call) and shows up to 4 suggestions.
export default function BlogSearch({ posts, categories = [], locale = "en" }) {
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    const catMap = useMemo(
        () => Object.fromEntries(categories.map((c) => [c.id, c.name])),
        [categories]
    );

    const postCategories = (p) =>
        (p.category_ids || (p.category_id ? [p.category_id] : []))
            .map((id) => catMap[id])
            .filter(Boolean);

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (q.length < 2) return [];
        return posts
            .filter((p) => {
                const title = locale === "en" ? (p.title_en || p.title) : p.title;
                const haystack = [
                    title,
                    (p.tag || []).join(" "),
                    postCategories(p).join(" "),
                ]
                    .join(" ")
                    .toLowerCase();
                return haystack.includes(q);
            })
            .slice(0, 4);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query, posts, locale, catMap]);

    // Close the suggestion list when clicking outside.
    useEffect(() => {
        const onClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const postHref = (p) =>
        `/${locale === "id" ? "id/blog" : "blog"}/${
            locale === "en" ? (p.slug_en || p.slug) : p.slug
        }`;

    const showResults = open && query.trim().length >= 2;
    const placeholder = locale === "id" ? "Cari artikel…" : "Search articles…";

    return (
        <div className="blog-search" ref={wrapRef}>
            <div className="blog-search__box">
                <svg
                    className="blog-search__icon"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                    type="text"
                    className="blog-search__input"
                    value={query}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setOpen(true);
                    }}
                    onFocus={() => setOpen(true)}
                    onKeyDown={(e) => {
                        if (e.key === "Escape") setOpen(false);
                    }}
                    aria-label={placeholder}
                />
                {query && (
                    <button
                        type="button"
                        className="blog-search__clear"
                        onClick={() => {
                            setQuery("");
                            setOpen(false);
                        }}
                        aria-label={locale === "id" ? "Hapus" : "Clear"}
                    >
                        ✕
                    </button>
                )}
            </div>

            {showResults && (
                <ul className="blog-search__results">
                    {results.length === 0 ? (
                        <li className="blog-search__empty">
                            {locale === "id"
                                ? "Tidak ada artikel yang cocok."
                                : "No matching articles."}
                        </li>
                    ) : (
                        results.map((p) => (
                            <li key={p.id}>
                                <Link
                                    href={postHref(p)}
                                    className="blog-search__item"
                                    onClick={() => {
                                        setQuery("");
                                        setOpen(false);
                                    }}
                                >
                                    {p.image_urls?.[0] && (
                                        <img
                                            src={p.image_urls[0]}
                                            alt=""
                                            className="blog-search__thumb"
                                        />
                                    )}
                                    <span className="blog-search__text">
                                        <span className="blog-search__title">
                                            {locale === "en" ? (p.title_en || p.title) : p.title}
                                        </span>
                                        {postCategories(p).length > 0 && (
                                            <span className="blog-search__meta">
                                                {postCategories(p).join(" · ")}
                                            </span>
                                        )}
                                    </span>
                                </Link>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}
