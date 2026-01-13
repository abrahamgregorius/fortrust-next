"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
    ArrowRight,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Clock,
    MapPin,
    Medal,
    PackageCheck,
    Users,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/lib/supabaseClient";

export default function Home() {
    // State untuk carousel
    const [currentSlide, setCurrentSlide] = useState(0);
    const [banners, setBanners] = useState([]);

    const fetchBanners = async () => {
        const { data, error } = await supabase
            .from("banners")
            .select("*")
            .eq("is_active", true)
            .order("display_order", "asc");
        if (error) {
            console.error("Error fetching banners:", error);
        } else {
            setBanners(data || []);
        }
    };

    // Hardcoded slides
    const hardcodedSlides = [
        {
            id: 0,
            title: "Bergabunglah dengan Kisah Sukses Kami.",
            subtitle:
                "Ribuan siswa telah mempercayai kami selama lebih dari 30 tahun. Giliran Anda selanjutnya.",
            img: "/banner1.webp",
            mobileImg: "/banner1-mobile.webp",
        },
    ];

    // Convert banners to slide format
    const bannerSlides = banners
        .filter(banner => banner.image_url) // Only include banners with image_url
        .map(banner => ({
            id: `banner-${banner.id}`, // Unique id to avoid conflict
            title: banner.title,
            subtitle: "", // Could add subtitle field to database later
            img: banner.image_url,
            mobileImg: banner.mobile_image_url || banner.image_url, // Use mobile image if available
            link: banner.link_url,
        }));

    // Use database banners if available, otherwise use hardcoded
    const slides = bannerSlides.length > 0 ? bannerSlides : hardcodedSlides;

    const [testimonials, setTestimonials] = useState([]);
    const fetchTestimonials = async () => {
        const { data, error } = await supabase.from("testimonials").select("*");
        if (error) {
            console.error("Error fetching testimonials:", error);
        } else {
            setTestimonials(data || []);
        }
    };

    const [events, setEvents] = useState([]);
    const [isLoadingEvents, setIsLoadingEvents] = useState(true);
    const fetchEvents = async () => {
        setIsLoadingEvents(true);
        try {
            const { data, error } = await supabase.from("events").select("*").order("created_at", { ascending: false }).limit(3);
            if (error) {
                console.error("Error fetching events:", error);
            } else {
                setEvents(data || []);
            }
        } catch (err) {
            console.error("Fetch events failed:", err);
        } finally {
            setIsLoadingEvents(false);
        }
    };

    const formatTimeJakarta = (isoString) => {
        try {
            const d = new Date(isoString);
            const t = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Jakarta",
            }).format(d);
            // Convert 1:00 PM -> 1.00 PM
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

    const universities = [
        {
            src: "/universities/Australia/Monash.png",
            alt: "NUS Logo",
        },
        {
            src: "/universities/Australia/USyd.png",
            alt: "USyd Logo",
        },
        {
            src: "/universities/Logo/UTS.png",
            alt: "UTS Logo",
        },
        {
            src: "/universities/Australia/UWA.png",
            alt: "Monash University Logo",
        },
        {
            src: "/universities/Logo/apu.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/arizona.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/bhms.jpg",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/coventry.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/curtin.webp",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/deakin.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/griffith.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/icm.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/jcu.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/lancaster.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/manchester.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/newcastle.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/osu.webp",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/SPJ.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/teesside.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/ucic.jpg",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/UIC.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/waikatopng.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/wsu.png",
            alt: "University Logo",
        },
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
        const walk = (x - startX) * 2; // Scroll speed
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

    // Auto play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        fetchTestimonials();
    }, [])

    useEffect(() => {
        fetchEvents();
    }, [])

    useEffect(() => {
        fetchBanners();
    }, [])

    return (
        <>
            <Navbar></Navbar>

            <main>
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
                        {slides.map((slide, idx) => (
                            <div
                                key={slide.id}
                                className={`carousel-slide ${idx === currentSlide ? "active" : ""}`}
                                style={{ position: 'relative' }}
                            >
                                <picture>
                                    <source media="(max-width: 768px)" srcSet={slide.mobileImg || slide.img} />
                                    <img src={slide.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0, cursor: 'pointer' }} onClick={() => window.location.href = slide.link || "/contact"} />
                                </picture>
                                <div className="slide-content">
                                    {/* <h1>{slide.title}</h1> */}
                                    {/* <p className="subhead">{slide.subtitle}</p> */}
                                    {/* <div className="hero__cta">
                                        <a
                                            href={slide.link || "/contact"}
                                            className="btn btn--primary btn--large"
                                        >
                                            Start Your Journey
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="carousel-wrapper">
                        <div
                            className="carousel-slide active"
                            // style="background-image: url('./public/banner-expo1.png')"
                        >
                            <div className="slide-content">
                                <h1>Fortrust International Edu Expo 2025</h1>
                                <p className="subhead">
                                    Get expert counselling, applications, visas,
                                    and pre-departure support - in one place.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScb58C3bbmq0-j1GfWilomVgXG5bQ_MgS4bUfFFJprhKBys3w/viewform?usp=header"
                                        className="btn btn--primary btn--large"
                                    >
                                        RSVP Now
                                    </a>
                                    <a
                                        href="#destinations"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Explore Destinations
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="carousel-slide"
                            style={{ backgroundImage: "/banner-expo2.png" }}
                            // style="background-image: url('./public/banner-expo2.png')"
                        >
                            <div className="slide-content">
                                <h1>Study in Singapore</h1>
                                <p className="subhead">
                                    Comprehensive support for your study in
                                    Singapore journey – from counselling to
                                    visas, all in one hub.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeDJpBg1jwi9PTzkefJ3i-M54MN2lvSZSUuTJTKJyuNBh3lng/viewform?usp=header"
                                        className="btn btn--primary btn--large"
                                    >
                                        RSVP Now
                                    </a>
                                    <a
                                        href="/services"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Find a Program
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="carousel-slide carousel-slide-text"
                            // style="background-image: url('./public/banner1.webp')"
                        >
                            <div className="slide-content">
                                <h1>Join Our Success Stories.</h1>
                                <p className="subhead">
                                    Thousands of students have trusted us for
                                    over 30 years. You're next.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="/contact"
                                        className="btn btn--primary btn--large"
                                    >
                                        Start Your Journey
                                    </a>
                                    <a
                                        href="/alumni"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Read Stories
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="carousel-nav">
                        <button
                            className="carousel-btn prev"
                            onClick={() =>
                                setCurrentSlide(
                                    (prev) =>
                                        (prev - 1 + slides.length) %
                                        slides.length
                                )
                            }
                        >
                            <ChevronLeft />
                        </button>
                        <button
                            className="carousel-btn next"
                            onClick={() =>
                                setCurrentSlide(
                                    (prev) => (prev + 1) % slides.length
                                )
                            }
                        >
                            <ChevronRight />
                        </button>
                    </div>

                    {/* Carousel Dots */}
                    <div className="carousel-dots">
                        {slides.map((_, idx) => (
                            <span
                                key={idx}
                                className={`dot ${idx === currentSlide ? "active" : ""
                                    }`}
                                onClick={() => setCurrentSlide(idx)}
                            />
                        ))}
                    </div>
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
                                {universities?.map((uni, i) => {
                                    return (
                                        <img
                                            key={i}
                                            src={uni.src}
                                            alt={uni.alt}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <div className="section-header">
                            <h2>Kisah Sukses Alumni</h2>
                            <p>
                                Dengarkan kisah mahasiswa yang berhasil menempuh perjalanan studi mereka bersama kami.
                            </p>
                        </div>
                        <div className="alumni-scroll-container" id="alumni-scroll">
                            {testimonials.map((t, index) => (
                                <div key={t.id} className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                src={t.image_url || "/placeholder.jpg"}
                                                alt={`Photo of ${t.person_name}`}
                                                className="w-full h-full object-cover"
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
                                <img
                                    src="/destinations/australia.jpg"
                                    alt="Scenic view of Sydney, Australia"
                                />
                                <div className="card__content">
                                    <h3>Australia</h3>
                                    <p>
                                        Pendidikan kelas dunia, kota-kota yang hidup, dan pemandangan alam yang menakjubkan.
                                    </p>
                                    <a href="/id/destinations/australia">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/canada.jpg"
                                    alt="Scenic view of Canada"
                                />
                                <div className="card__content">
                                    <h3>Canada</h3>
                                    <p>
                                        Pendidikan kelas dunia, kota-kota yang hidup, dan pemandangan alam yang menakjubkan.
                                    </p>
                                    <a href="/id/destinations/canada">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/china.jpg"
                                    alt="Scenic view of China"
                                />
                                <div className="card__content">
                                    <h3>China</h3>
                                    <p>
                                        Pendidikan kelas dunia, kota-kota yang hidup, dan pemandangan alam yang menakjubkan.
                                    </p>
                                    <a href="/id/destinations/china">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/malaysia.jpg"
                                    alt="Scenic view of Malaysia"
                                />
                                <div className="card__content">
                                    <h3>Malaysia</h3>
                                    <p>
                                        Pendidikan kelas dunia, kota-kota yang hidup, dan pemandangan alam yang menakjubkan.
                                    </p>
                                    <a href="/id/destinations/malaysia">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/newzealand.jpg"
                                    alt="Beautiful landscape of New Zealand"
                                />
                                <div className="card__content">
                                    <h3>New Zealand</h3>
                                    <p>
                                        Pembelajaran inovatif di salah satu negara teraman dan terindah.
                                    </p>
                                    <a href="/id/destinations/newzealand">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/singapore.jpg"
                                    alt="Modern skyline of Singapore"
                                />
                                <div className="card__content">
                                    <h3>Singapore</h3>
                                    <p>
                                        Pusat global teknologi, keuangan, dan pengalaman multikultural.
                                    </p>
                                    <a href="/id/destinations/singapore">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/switzerland.jpg"
                                    alt="Modern skyline of Switzerland"
                                />
                                <div className="card__content">
                                    <h3>Switzerland</h3>
                                    <p>
                                        Pusat global teknologi, keuangan, dan pengalaman multikultural.
                                    </p>
                                    <a href="/id/destinations/switzerland">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/uk.jpg"
                                    alt="Iconic view of London, UK"
                                />
                                <div className="card__content">
                                    <h3>United Kingdom</h3>
                                    <p>
                                        Rumah bagi universitas bersejarah dengan warisan keunggulan akademik.
                                    </p>
                                    <a href="/id/destinations/uk">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                            <div className="card dest-card">
                                <img
                                    src="/destinations/usa.jpg"
                                    alt="Iconic view of United States of America"
                                />
                                <div className="card__content">
                                    <h3>United States of America</h3>
                                    <p>
                                        Rumah bagi universitas bersejarah dengan warisan keunggulan akademik.
                                    </p>
                                    <a href="/id/destinations/usa">
                                        Pelajari Lebih Lanjut <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="events" suppressHydrationWarning>
                    <div className="container events__container">
                        <div className="section-header">
                            <h2>Acara & Webinar</h2>
                            <p>
                                Bergabunglah dengan sesi gratis kami untuk mendapatkan semua pertanyaan Anda terjawab.
                            </p>
                        </div>
                        {isLoadingEvents ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                                <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                            </div>
                        ) : (
                            <div className="events__list">
                                {events.length > 0 ? events.map((event, i) => {
                                    try {
                                        const { month, day } = getMonthDayJakarta(event.start_at);
                                        const timeStr = formatTimeJakarta(event.start_at);
                                        return (
                                            <div key={i} className="card event-card">
                                                {event.image_url && (
                                                    <div className="event-card__image">
                                                        <img
                                                            src={event.image_url}
                                                            alt={event.name}
                                                            className="event-image"
                                                        />
                                                    </div>
                                                )}
                                                <div className="event-card__date">
                                                    <span className="month">{month}</span><span className="day">{day}</span>
                                                </div>
                                                <div className="event-card__info">
                                                    <h4>{event.name}</h4>
                                                    <p><Clock size={20}></Clock> {timeStr} (Asia/Jakarta)</p>
                                                    <p><MapPin size={20}></MapPin> {event.location}</p>
                                                </div>
                                                <a href={event.registration_link} target="_blank" className="btn btn--secondary">RSVP Sekarang</a>
                                            </div>
                                        );
                                    } catch (e) {
                                        console.error('Error rendering event:', e);
                                        return null;
                                    }
                                }) : (
                                    <div className="events__fallback">
                                        <p>Tidak ada acara mendatang saat ini. Bergabunglah dengan newsletter kami untuk pembaruan!</p>
                                    </div>
                                )}
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
