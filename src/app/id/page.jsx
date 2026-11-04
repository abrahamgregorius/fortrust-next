"use client";

import Link from "next/link";
import Image from "next/image";
import SkeletonImage from "@/components/SkeletonImage";
import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    MapPin,
    Mic,
    Medal,
    PackageCheck,
    Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PopupBanner from "@/components/PopupBanner";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [banners, setBanners] = useState([]);
    const [isLoadingBanners, setIsLoadingBanners] = useState(true);
    const [latestBlogs, setLatestBlogs] = useState([]);
    const [blogCategories, setBlogCategories] = useState([]);
    const [blogsLoaded, setBlogsLoaded] = useState(false);

    // FIX 1: Single parallel fetch instead of 3 sequential useEffects
    useEffect(() => {
        const fetchAll = async () => {
            const now = new Date().toISOString();

            // One failed request must never blank the page, so results are
            // unpacked defensively (any of them can be undefined).
            let blogsRes, bannersRes, testimonialsRes, eventsRes, categoriesRes;
            try {
                [blogsRes, bannersRes, testimonialsRes, eventsRes, categoriesRes] = await Promise.all([
                    // Featured (lowest featured_rank) first, then newest — same
                    // ordering as the blog listing page. 4 posts = 1 featured + 3 secondary.
                    supabase.from("blogs").select("*").eq("status", "PUBLISHED")
                        .order("featured_rank", { ascending: true, nullsFirst: false })
                        .order("created_at", { ascending: false }).limit(4),
                    supabase
                        .from("banners")
                        .select("*")
                        .eq("is_active", true)
                        .order("display_order", { ascending: false }),
                    supabase
                        .from("testimonials")
                        .select("*")
                        .order("display_order", { ascending: true }),
                    supabase
                        .from("events")
                        .select("*")
                        .gte("start_at", now)
                        .order("start_at", { ascending: true })
                        .limit(3),
                    supabase.from("categories").select("id, name").order("name"),
                ]);
            } catch (err) {
                console.error("Home data fetch failed:", err);
            }

            // Process banners with schedule filter
            if (!bannersRes?.error && bannersRes?.data) {
                const filtered = bannersRes.data.filter(banner => {
                    if (banner.always_show) return true;
                    // An active banner with no schedule is treated as always visible
                    // instead of silently falling back to the hardcoded default.
                    if (!banner.start_date || !banner.end_date) return true;
                    const now = new Date();
                    const start = new Date(banner.start_date);
                    const end = new Date(banner.end_date);
                    return now >= start && now <= end;
                });
                setBanners(filtered);
            }
            setIsLoadingBanners(false);

            if (!testimonialsRes?.error) {
                setTestimonials(testimonialsRes.data || []);
            }
            setIsLoadingTestimonials(false);

            if (!eventsRes?.error) {
                // Duplicate rows (the same event name entered twice) would
                // make the featured headline reappear in the upcoming grid,
                // so only the first (earliest) row of each name is kept.
                const seenNames = new Set();
                setEvents(
                    (eventsRes.data || []).filter((e) => {
                        const key = (e.name || "").trim().toLowerCase();
                        if (!key || seenNames.has(key)) return false;
                        seenNames.add(key);
                        return true;
                    })
                );
            }
            setIsLoadingEvents(false);

            if (!blogsRes?.error && blogsRes?.data) {
                const sorted = (blogsRes.data || []).sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                setLatestBlogs(sorted.slice(0, 4));
            }
            if (!categoriesRes?.error && categoriesRes?.data) {
                setBlogCategories(categoriesRes.data);
            }
            setBlogsLoaded(true);
        };
        fetchAll();
    }, []);

    // Primary category name for a post (category_ids array, falling back to
    // the legacy single category_id column).
    const blogCategoryName = (blog) => {
        const ids = blog.category_ids || (blog.category_id ? [blog.category_id] : []);
        return ids
            .map((id) => blogCategories.find((c) => c.id === id)?.name)
            .filter(Boolean)[0] || null;
    };

    // Excerpt: stored excerpt first, otherwise plain text pulled from the
    // article body (display content never modified, only trimmed).
    const featuredExcerpt = (blog, maxLen = 180) => {
        if (blog.excerpt) return blog.excerpt;
        const body = (blog.content || "")
            .replace(/<[^>]*>/g, " ")
            .replace(/\s+/g, " ")
            .trim();
        if (!body) return null;
        return body.length > maxLen ? `${body.slice(0, maxLen).trimEnd()}…` : body;
    };

    // Estimated reading time from the article body (~200 wpm).
    const readingTime = (blog) => {
        const body = (blog.content || "").replace(/<[^>]*>/g, " ");
        const minutes = Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 200));
        return `${minutes} menit baca`;
    };

    const hardcodedSlides = [
        {
            id: 0,
            title: "Join Our Success Stories.",
            subtitle:
                "Thousands of students have trusted us for over 30 years. You're next.",
            img: "/banner1.webp",
            mobileImg: "/banner1-mobile.webp",
        },
    ];

    const bannerSlides = banners
        .filter(banner => banner.image_url)
        .map(banner => ({
            id: `banner-${banner.id}`,
            title: banner.title,
            subtitle: "",
            img: banner.image_url,
            mobileImg: banner.mobile_image_url || banner.image_url,
            link: banner.link_url,
        }));

    const slides = bannerSlides.length > 0 ? bannerSlides : hardcodedSlides;

    const [testimonials, setTestimonials] = useState([]);
    const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
    const [events, setEvents] = useState([]);
    const [isLoadingEvents, setIsLoadingEvents] = useState(true);

    const formatTimeJakarta = (isoString) => {
        try {
            const d = new Date(isoString);
            const t = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Jakarta",
            }).format(d);
            return t.replace(":", ".");
        } catch (_) {
            return isoString;
        }
    };

    const getMonthDayJakarta = (isoString) => {
        try {
            const d = new Date(isoString);
            const month = new Intl.DateTimeFormat("en-US", {
                month: "short",
                timeZone: "Asia/Jakarta",
            })
                .format(d)
                .toUpperCase();
            const day = new Intl.DateTimeFormat("en-US", {
                day: "2-digit",
                timeZone: "Asia/Jakarta",
            }).format(d);
            return { month, day };
        } catch (_) {
            return { month: "---", day: "--" };
        }
    };

    // ---- Events (editorial showcase) helpers ----
    // The events table has no type column; webinars are recognised from the
    // event name/topics so the editorial meta row can label them correctly.
    const eventTypeLabel = (e) => {
        const hay = `${e.name || ""} ${e.topics || ""}`;
        return /webinar/i.test(hay) ? "WEBINAR" : "ACARA";
    };

    const eventDateLabel = (e) => {
        try {
            return new Intl.DateTimeFormat("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "Asia/Jakarta",
            }).format(new Date(e.start_at));
        } catch (_) {
            return "";
        }
    };

    // Full time range in WIB when end_at is available.
    const eventTimeRangeLabel = (e) => {
        let end = "";
        if (e.end_at) {
            try {
                if (new Date(e.end_at) > new Date(e.start_at)) {
                    end = formatTimeJakarta(e.end_at);
                }
            } catch (_) {
                /* ignore malformed end_at */
            }
        }
        const start = formatTimeJakarta(e.start_at);
        return end ? `${start} \u2013 ${end} WIB` : `${start} WIB`;
    };

    // Online events show "Online"; physical venues keep the full address
    // (wrapped to two lines by CSS) since it carries useful detail.
    const eventVenueLabel = (e) => {
        const loc = (e.location || "").trim();
        if (!loc || /^online\b/i.test(loc)) return "Online";
        return loc;
    };

    // Topic chips from the comma-separated topics field, capitalized and
    // capped at three so the cards never overflow.
    const eventTopics = (e) =>
        (e.topics || "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
            .slice(0, 3)
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1));

    const eventDescription = (e) =>
        (e.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

    const universities = [
        { src: "/universities/Logo/oaut.png", alt: "University Logo" },
        { src: "/universities/Logo/vuow.png", alt: "University Logo" },
        { src: "/universities/Logo/uoauck.jpg", alt: "University Logo" },
        { src: "/universities/Logo/uotago.jpg", alt: "University Logo" },
        { src: "/universities/Logo/UTS.png", alt: "University Logo" },
        { src: "/universities/Logo/apu.png", alt: "University Logo" },
        { src: "/universities/Logo/arizona.png", alt: "University Logo" },
        { src: "/universities/Logo/bhms.jpg", alt: "University Logo" },
        { src: "/universities/Logo/coventry.png", alt: "University Logo" },
        { src: "/universities/Logo/curtin.webp", alt: "University Logo" },
        { src: "/universities/Logo/deakin.png", alt: "University Logo" },
        { src: "/universities/Logo/falmouth.jpg", alt: "University Logo" },
        { src: "/universities/Logo/griffith.png", alt: "University Logo" },
        { src: "/universities/Logo/icm.png", alt: "University Logo" },
        { src: "/universities/Logo/jcu.png", alt: "University Logo" },
        { src: "/universities/Logo/lancaster.png", alt: "University Logo" },
        { src: "/universities/Logo/lincoln.jpg", alt: "University Logo" },
        { src: "/universities/Logo/manchester.png", alt: "University Logo" },
        { src: "/universities/Logo/massey.jpg", alt: "University Logo" },
        { src: "/universities/Logo/newcastle.png", alt: "University Logo" },
        { src: "/universities/Logo/osu.webp", alt: "University Logo" },
        { src: "/universities/Logo/SPJ.png", alt: "University Logo" },
        { src: "/universities/Logo/teesside.png", alt: "University Logo" },
        { src: "/universities/Logo/ucic.jpg", alt: "University Logo" },
        { src: "/universities/Logo/UIC.png", alt: "University Logo" },
        { src: "/universities/Logo/uwell.jpg", alt: "University Logo" },
        { src: "/universities/Logo/waikatopng.png", alt: "University Logo" },
        { src: "/universities/Logo/wsu.png", alt: "University Logo" },
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollRef = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    // Keep the slide index valid if the slide count shrinks (e.g. a banner
    // is deactivated or expires), otherwise no slide would have "active".
    useEffect(() => {
        setCurrentSlide((prev) => (prev >= slides.length ? 0 : prev));
    }, [slides.length]);

    // Auto play carousel (only useful with more than one slide)
    useEffect(() => {
        if (slides.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <>
            <Navbar></Navbar>

            <main suppressHydrationWarning>
                <PopupBanner />
                <section className="hero-carousel">
                    <div
                        className="carousel-wrapper"
                        ref={scrollRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        {isLoadingBanners ? (
                            <div className="carousel-slide active" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                                <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                            </div>
                        ) : (
                            slides.map((slide, idx) => (
                                <div
                                    key={slide.id}
                                    className={`carousel-slide ${idx === currentSlide ? "active" : ""}`}
                                >
                                    <picture>
                                        <source media="(max-width: 768px)" srcSet={slide.mobileImg || slide.img} />
                                        <img
                                            src={slide.img}
                                            alt=""
                                            loading={idx === 0 ? "eager" : "lazy"}
                                            decoding="async"
                                            fetchPriority={idx === 0 ? "high" : "low"}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, cursor: 'pointer' }}
                                            onClick={() => window.location.href = slide.link || "/id/contact"}
                                        />
                                    </picture>
                                    <div className="slide-content" />
                                </div>
                            ))
                        )}
                    </div>

                    {slides.length > 1 && (
                        <div className="carousel-nav">
                            <button
                                className="carousel-btn prev"
                                onClick={() =>
                                    setCurrentSlide((prev) =>
                                        (prev - 1 + slides.length) % slides.length
                                    )
                                }
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                className="carousel-btn next"
                                onClick={() =>
                                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                                }
                            >
                                <ChevronRight />
                            </button>
                        </div>
                    )}

                    {/* Carousel Dots (hidden when there is only one slide) */}
                    {slides.length > 1 && (
                        <div className="carousel-dots">
                            {slides.map((_, idx) => (
                                <span
                                    key={idx}
                                    className={`dot ${idx === currentSlide ? "active" : ""}`}
                                    onClick={() => setCurrentSlide(idx)}
                                />
                            ))}
                        </div>
                    )}
                </section>

                <section className="pillars">
                    <div className="container pillars__container">
                        <div className="pillar">
                            <Medal></Medal>
                            <h3>30+ Tahun Pengalaman</h3>
                            <p>
                                Dekade pengalaman konseling dan penempatan mahasiswa yang terpercaya.
                            </p>
                        </div>
                        <div className="pillar">
                            <PackageCheck></PackageCheck>
                            <h3>Layanan Lengkap</h3>
                            <p>
                                Dari aplikasi hingga akomodasi, kami memandu Anda di setiap langkah.
                            </p>
                        </div>
                        <div className="pillar">
                            <Users></Users>
                            <h3>Jaringan Alumni Kuat</h3>
                            <p>
                                Bergabunglah dengan komunitas di mana sebagian besar mahasiswa baru datang dari referensi.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="partners">
                    <div className="container partners__container">
                        <p>
                            Dipercaya oleh lebih dari 700+ institusi terkemuka di seluruh dunia
                        </p>
                        <div className="partners__scroller">
                            <div className="partners__logos">
                                {universities?.map((uni, i) => (
                                    <img key={`first-${i}`} src={uni.src} alt={uni.alt} loading="lazy" />
                                ))}
                                {universities?.map((uni, i) => (
                                    <img key={`second-${i}`} src={uni.src} alt={uni.alt} loading="lazy" />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials" suppressHydrationWarning>
                    <div className="container">
                        <div className="section-header">
                            <h2>Kisah Sukses Alumni</h2>
                            <p>
                                Dengarkan kisah mahasiswa yang berhasil menempuh perjalanan studi mereka bersama kami.
                            </p>
                        </div>
                        {isLoadingTestimonials ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }}>
                                <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                            </div>
                        ) : (
                            <>
                                <div className="alumni-scroll-container" id="alumni-scroll">
                                    {testimonials.map((t) => (
                                        <div key={t.id} className="flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <SkeletonImage
                                                        src={t.image_url || "/placeholder.jpg"}
                                                        alt={`Photo of ${t.person_name}`}
                                                        sizes="(max-width: 768px) 100vw, 340px"
                                                    />
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="testimonial-content">
                                                        <p>"{t.testimonial}"</p>
                                                        <div className="testimonial-meta">
                                                            <p className="author">
                                                                {t.person_name}
                                                                {t.person_institution && (
                                                                    <span className="institution">, {t.person_institution}</span>
                                                                )}
                                                            </p>
                                                            <p className="testimonial-date">
                                                                Dibagikan pada {new Date(t.created_at).toLocaleDateString('id-ID', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="alumni-nav">
                                    <button className="alumni-btn alumni-btn--prev" onClick={() => document.getElementById('alumni-scroll').scrollTo({ left: document.getElementById('alumni-scroll').scrollLeft - 340, behavior: 'smooth' })}>
                                        <ChevronLeft />
                                    </button>
                                    <button className="alumni-btn alumni-btn--next" onClick={() => document.getElementById('alumni-scroll').scrollTo({ left: document.getElementById('alumni-scroll').scrollLeft + 340, behavior: 'smooth' })}>
                                        <ChevronRight />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                <section className="latest-blogs">
                    <div className="container">
                        <div className="section-header">
                            <h2>Artikel Terbaru dari Blog Kami</h2>
                            <p>Wawasan, tips, dan cerita untuk membantu Anda merencanakan perjalanan studi ke luar negeri.</p>
                        </div>
                        {blogsLoaded && latestBlogs.length === 0 ? (
                            <p className="latest-blogs__empty">Belum ada artikel — kunjungi lagi sebentar lagi.</p>
                        ) : !blogsLoaded ? (
                            <div className="latest-blogs__editorial latest-blogs__skeleton" aria-hidden="true">
                                <div className="latest-blogs__skeleton-featured">
                                    <div className="latest-blogs__skeleton-box latest-blogs__skeleton-line" style={{ width: "90%" }} />
                                    <div className="latest-blogs__skeleton-box latest-blogs__skeleton-line" style={{ width: "35%" }} />
                                    <div className="latest-blogs__skeleton-box latest-blogs__skeleton-image" />
                                </div>
                                <div className="latest-blogs__skeleton-list">
                                    {[0, 1, 2].map((i) => (
                                        <div key={i} className="latest-blog-secondary">
                                            <div className="latest-blogs__skeleton-lines">
                                                <div className="latest-blogs__skeleton-box latest-blogs__skeleton-line" style={{ width: "50%" }} />
                                                <div className="latest-blogs__skeleton-box latest-blogs__skeleton-line" style={{ width: "95%" }} />
                                            </div>
                                            <div className="latest-blogs__skeleton-box latest-blogs__skeleton-thumb" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                        <div className="latest-blogs__editorial">
                            <Link
                                href={`/id/blog/${latestBlogs[0].slug}`}
                                className="latest-blog-featured"
                            >
                                <div className="latest-blog-featured__content">
                                    <h3>{latestBlogs[0].title}</h3>
                                    <span className="latest-blog-featured__meta">
                                        {blogCategoryName(latestBlogs[0]) && (
                                            <span className="latest-blog-featured__category">{blogCategoryName(latestBlogs[0])}</span>
                                        )}
                                        {`${new Date(latestBlogs[0].created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · ${readingTime(latestBlogs[0])}`}
                                    </span>
                                </div>
                                {latestBlogs[0].image_urls?.[0] && (
                                    <div className="latest-blog-featured__image">
                                        <SkeletonImage
                                            src={latestBlogs[0].image_urls[0]}
                                            alt={latestBlogs[0].title}
                                            sizes="(max-width: 767px) 100vw, (max-width: 1199px) 55vw, 50vw"
                                        />
                                    </div>
                                )}
                            </Link>
                            <div className="latest-blogs__secondary">
                                {latestBlogs.slice(1).map((blog) => (
                                    <Link key={blog.id} href={`/id/blog/${blog.slug}`} className="latest-blog-secondary">
                                        <div className="latest-blog-secondary__info">
                                            <h4>{blog.title}</h4>
                                            {featuredExcerpt(blog, 110) && <p className="latest-blog-secondary__excerpt">{featuredExcerpt(blog, 110)}</p>}
                                            <span className="latest-blog-secondary__meta">
                                                {blogCategoryName(blog) && (
                                                    <span className="latest-blog-secondary__category">{blogCategoryName(blog)}</span>
                                                )}
                                                {`${new Date(blog.created_at).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })} · ${readingTime(blog)}`}
                                            </span>
                                        </div>
                                        {blog.image_urls?.[0] && (
                                            <div className="latest-blog-secondary__thumb">
                                                <SkeletonImage
                                                    src={blog.image_urls[0]}
                                                    alt={blog.title}
                                                    sizes="(max-width: 767px) 34vw, (max-width: 1199px) 15vw, 16vw"
                                                />
                                            </div>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        )}
                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <Link href="/id/blog" className="btn btn--secondary">Lihat Semua Artikel</Link>
                        </div>
                    </div>
                </section>

                <section id="destinations" className="destinations">
                    <div className="container">
                        <div className="section-header">
                            <h2>Jelajahi Tujuan Studi Terbaik</h2>
                            <p>
                                Temukan negara dan universitas yang sempurna untuk ambisi Anda.
                            </p>
                        </div>
                        <div className="destinations__grid">
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/australia.webp"
                                        alt="Scenic view of Sydney, Australia"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>Australia</h3>
                                    <p>Pendidikan kelas dunia dengan biaya hidup yang terjangkau dan budaya yang kaya.</p>
                                    <a href="/id/destinations/australia">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/canada.webp"
                                        alt="Scenic view of Canada"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>Canada</h3>
                                    <p>Pendidikan berkualitas tinggi dengan lingkungan multikultural yang ramah dan aman.</p>
                                    <a href="/id/destinations/canada">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/china.webp"
                                        alt="Scenic view of China"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>China</h3>
                                    <p>Pendidikan modern dengan biaya terjangkau dan akses ke teknologi terdepan.</p>
                                    <a href="/id/destinations/china">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/malaysia.webp"
                                        alt="Scenic view of Malaysia"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>Malaysia</h3>
                                    <p>Pendidikan bertaraf internasional dengan biaya hidup yang rendah dan lokasi strategis.</p>
                                    <a href="/id/destinations/malaysia">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/newzealand.webp"
                                        alt="Beautiful landscape of New Zealand"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>New Zealand</h3>
                                    <p>Pembelajaran inovatif di salah satu negara teraman dengan alam yang menakjubkan.</p>
                                    <a href="/id/destinations/newzealand">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/singapore.webp"
                                        alt="Modern skyline of Singapore"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>Singapore</h3>
                                    <p>Pusat pendidikan global dengan fasilitas modern dan peluang karier internasional.</p>
                                    <a href="/id/destinations/singapore">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/switzerland.webp"
                                        alt="Modern skyline of Switzerland"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>Switzerland</h3>
                                    <p>Pendidikan berkualitas dengan pemandangan alam Alps yang menakjubkan dan standar hidup tinggi.</p>
                                    <a href="/id/destinations/switzerland">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/uk.webp"
                                        alt="Iconic view of London, UK"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>United Kingdom</h3>
                                    <p>Universitas bersejarah dunia dengan warisan keunggulan akademik yang prestisius.</p>
                                    <a href="/id/destinations/uk">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <div className="dest-card__media">
                                    <SkeletonImage
                                        src="/destinations/usa.webp"
                                        alt="Iconic view of United States of America"
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 45vw, 30vw"
                                    />
                                </div>
                                <div className="card__content">
                                    <h3>United States of America</h3>
                                    <p>Pendidikan universitas ternama dunia dengan fasilitas riset dan inovasi terdepan.</p>
                                    <a href="/id/destinations/usa">Pelajari Lebih Lanjut <ArrowRight></ArrowRight></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="events" suppressHydrationWarning>
                    <div className="container events__container">
                        <div className="section-header">
                            <h2>Acara &amp; Webinar</h2>
                            <p>
                                Bergabunglah dengan sesi gratis kami untuk mendapatkan semua pertanyaan Anda terjawab.
                            </p>
                        </div>
                        {isLoadingEvents ? (
                            <div className="events-skeleton" aria-hidden="true">
                                <div className="events-skeleton__feature">
                                    <div className="events-skeleton__poster skel-shimmer" />
                                    <div className="events-skeleton__lines">
                                        <div className="skel-shimmer events-skeleton__line" style={{ width: "30%" }} />
                                        <div className="skel-shimmer events-skeleton__line" style={{ width: "82%" }} />
                                        <div className="skel-shimmer events-skeleton__line" style={{ width: "95%" }} />
                                        <div className="skel-shimmer events-skeleton__line" style={{ width: "55%" }} />
                                    </div>
                                </div>
                                <div className="events-skeleton__row">
                                    {[0, 1].map((i) => (
                                        <div key={i} className="events-skeleton__card">
                                            <div className="events-skeleton__poster-sm skel-shimmer" />
                                            <div className="events-skeleton__lines">
                                                <div className="skel-shimmer events-skeleton__line" style={{ width: "45%" }} />
                                                <div className="skel-shimmer events-skeleton__line" style={{ width: "88%" }} />
                                                <div className="skel-shimmer events-skeleton__line" style={{ width: "60%" }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : events.length > 0 ? (
                            <>
                                {/* Acara unggulan: yang paling dekat, lebar penuh */}
                                <article className="event-feature">
                                    {events[0].image_url && (
                                        <div className="event-feature__media">
                                            <SkeletonImage
                                                src={events[0].image_url}
                                                alt={events[0].name}
                                                sizes="(max-width: 767px) 100vw, 40vw"
                                            />
                                        </div>
                                    )}
                                    <div className="event-feature__info">
                                        <span className="event-feature__meta">
                                            <span className="event-feature__type">{eventTypeLabel(events[0])}</span>
                                            <span>{eventDateLabel(events[0])}</span>
                                        </span>
                                        <h3 className="event-feature__title">{events[0].name}</h3>
                                        <div className="event-info event-info--lg">
                                            <span className="event-info__row">
                                                <MapPin size={15} />
                                                <span className="event-info__text">{eventVenueLabel(events[0])}</span>
                                            </span>
                                            <span className="event-info__row">
                                                <Clock size={15} />
                                                <span className="event-info__text">{eventTimeRangeLabel(events[0])}</span>
                                            </span>
                                            {events[0].speaker && (
                                                <span className="event-info__row">
                                                    <Mic size={15} />
                                                    <span className="event-info__text">{events[0].speaker}</span>
                                                </span>
                                            )}
                                            {eventTopics(events[0]).length > 0 && (
                                                <span className="event-info__chips">
                                                    {eventTopics(events[0]).map((topic) => (
                                                        <span key={topic} className="event-info__chip">{topic}</span>
                                                    ))}
                                                </span>
                                            )}
                                        </div>
                                        {eventDescription(events[0]) && (
                                            <p className="event-feature__desc">{eventDescription(events[0])}</p>
                                        )}
                                        <div className="event-action-row">
                                            <a
                                                href={events[0].registration_link}
                                                className="event-rsvp"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Daftar Sekarang <ArrowRight size={15} />
                                            </a>
                                        </div>
                                    </div>
                                </article>

                                {events.length > 1 && (
                                    <>
                                        <div className="events__subheading">
                                            <h3>Event Mendatang</h3>
                                        </div>
                                        <div className={`events__grid${events.length === 2 ? " events__grid--single" : ""}`}>
                                            {events.slice(1).map((event, i) => (
                                                <article key={i} className="event-compact">
                                                    {event.image_url && (
                                                        <div className="event-compact__media">
                                                            <SkeletonImage
                                                                src={event.image_url}
                                                                alt={event.name}
                                                                sizes="(max-width: 767px) 38vw, 240px"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="event-compact__info">
                                                        <span className="event-compact__meta">
                                                            <span className="event-compact__type">{eventTypeLabel(event)}</span>
                                                            <span>{eventDateLabel(event)}</span>
                                                        </span>
                                                        <h4 className="event-compact__title">{event.name}</h4>
                                                        <div className="event-info">
                                                            <span className="event-info__row">
                                                                <MapPin size={14} />
                                                                <span className="event-info__text">{eventVenueLabel(event)}</span>
                                                            </span>
                                                            <span className="event-info__row">
                                                                <Clock size={14} />
                                                                <span className="event-info__text">{eventTimeRangeLabel(event)}</span>
                                                            </span>
                                                            {event.speaker && (
                                                                <span className="event-info__row">
                                                                    <Mic size={14} />
                                                                    <span className="event-info__text">{event.speaker}</span>
                                                                </span>
                                                            )}
                                                            {eventTopics(event).length > 0 && (
                                                                <span className="event-info__chips">
                                                                    {eventTopics(event).map((topic) => (
                                                                        <span key={topic} className="event-info__chip">{topic}</span>
                                                                    ))}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {eventDescription(event) && (
                                                            <p className="event-compact__desc">{eventDescription(event)}</p>
                                                        )}
                                                        <div className="event-action-row">
                                                            <a
                                                                href={event.registration_link}
                                                                className="event-rsvp event-rsvp--compact"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Daftar Sekarang <ArrowRight size={14} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </>
                                )}

                                <div className="events__viewall">
                                    <a href="/id/events">
                                        Lihat Semua Acara <ArrowRight size={15} />
                                    </a>
                                </div>
                            </>
                        ) : (
                            <div className="events__fallback">
                                <p>Tidak ada acara mendatang saat ini. Bergabunglah dengan newsletter kami untuk pembaruan!</p>
                            </div>
                        )}
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Memulai Perjalanan Anda?</h2>
                        <p>
                            Impian Anda untuk belajar di luar negeri lebih dekat dari yang Anda pikirkan. Mari wujudkan.
                        </p>
                        <a href="/id/contact" className="btn btn--primary btn--large">
                            Bicara dengan Konselor Gratis
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}
