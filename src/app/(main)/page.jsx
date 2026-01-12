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
    const [isLoadingBanners, setIsLoadingBanners] = useState(true);

    const fetchBanners = async () => {
        setIsLoadingBanners(true);
        try {
            const { data, error } = await supabase
                .from("banners")
                .select("*")
                .eq("is_active", true)
                .order("display_order", "asc");
            if (error) {
                console.error("Error fetching banners:", error);
            } else {
                console.log("Fetched banners:", data);
                setBanners(data || []);
            }
        } catch (err) {
            console.error("Fetch banners failed:", err);
        } finally {
            setIsLoadingBanners(false);
        }
    };

    // Hardcoded slides
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

    console.log("Banner slides:", bannerSlides);

    // Use database banners if available, otherwise use hardcoded
    const slides = bannerSlides.length > 0 ? bannerSlides : hardcodedSlides;

    console.log("All slides:", slides);

    const [testimonials, setTestimonials] = useState([]);
    const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
    const fetchTestimonials = async () => {
        setIsLoadingTestimonials(true);
        try {
            const { data, error } = await supabase.from("testimonials").select("*");
            if (error) {
                console.error("Error fetching testimonials:", error);
            } else {
                setTestimonials(data || []);
            }
        } catch (err) {
            console.error("Fetch testimonials failed:", err);
        } finally {
            setIsLoadingTestimonials(false);
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
            src: "/universities/Logo/oaut.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/uoauck.jpg",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/uotago.jpg",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/UTS.png",
            alt: "University Logo",
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
            src: "/universities/Logo/falmouth.jpg",
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
            src: "/universities/Logo/lincoln.jpg",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/manchester.png",
            alt: "University Logo",
        },
        {
            src: "/universities/Logo/massey.jpg",
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
            src: "/universities/Logo/uwell.jpg",
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

            <main suppressHydrationWarning>
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
                            ))
                        )}
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
                            <h3>30+ Years of Experience</h3>
                            <p>
                                Decades of trusted counselling and student
                                placement experience.
                            </p>
                        </div>
                        <div className="pillar">
                            <PackageCheck></PackageCheck>
                            <h3>End-to-End Service</h3>
                            <p>
                                From application to accommodation, we guide you
                                every step.
                            </p>
                        </div>
                        <div className="pillar">
                            <Users></Users>
                            <h3>Strong Alumni Network</h3>
                            <p>
                                Join a community where most new students come
                                from referrals.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="partners">
                    <div className="container partners__container">
                        <p>
                            Trusted by over 700+ leading institutions worldwide
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

                <section className="testimonials" suppressHydrationWarning>
                    <div className="container">
                        <div className="section-header">
                            <h2>Alumni Success Stories</h2>
                            <p>
                                Hear from students who have successfully navigated their study abroad journey with us.
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
                                                                    <span className="institution"> {t.person_institution}</span>
                                                                )}
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

                <section id="destinations" className="destinations">
                    <div className="container">
                        <div className="section-header">
                            <h2>Explore Top Study Destinations</h2>
                            <p>
                                Find the perfect country and university for your
                                ambitions.
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
                                        World-class education, vibrant cities,
                                        and stunning natural landscapes.
                                    </p>
                                    <a href="/destinations/australia">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        World-class education, vibrant cities,
                                        and stunning natural landscapes.
                                    </p>
                                    <a href="/destinations/canada">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        World-class education, vibrant cities,
                                        and stunning natural landscapes.
                                    </p>
                                    <a href="/destinations/china">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        World-class education, vibrant cities,
                                        and stunning natural landscapes.
                                    </p>
                                    <a href="/destinations/malaysia">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        Innovative learning in one of the safest
                                        and most beautiful countries.
                                    </p>
                                    <a href="/destinations/newzealand">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        A global hub of technology, finance, and
                                        multicultural experiences.
                                    </p>
                                    <a href="/destinations/singapore">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        A global hub of technology, finance, and
                                        multicultural experiences.
                                    </p>
                                    <a href="/destinations/switzerland">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        Home to historic universities with a
                                        legacy of academic excellence.
                                    </p>
                                    <a href="/destinations/uk">
                                        Learn More <ArrowRight></ArrowRight>
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
                                        Home to historic universities with a
                                        legacy of academic excellence.
                                    </p>
                                    <a href="/destinations/usa">
                                        Learn More <ArrowRight></ArrowRight>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="events" suppressHydrationWarning>
                    <div className="container events__container">
                        <div className="section-header">
                            <h2>Events & Webinars</h2>
                            <p>
                                Join our free sessions to get all your questions
                                answered.
                            </p>
                        </div>
                        {isLoadingEvents ? (
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
                                <div className="spinner" style={{ border: '4px solid #f3f3f3', borderTop: '4px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite' }}></div>
                            </div>
                        ) : (
                            <>
                                <div className="events__fallback">
                                    <p>No upcoming events right now. Join our newsletter for updates!</p>
                                </div>
                                <div className="events__list">
                                    {events.length > 0 ? events.map((event, i) => {
                                        try {
                                            const { month, day } = getMonthDayJakarta(event.start_at);
                                            const timeStr = formatTimeJakarta(event.start_at);
                                            return (
                                                <div key={i} className="card event-card">
                                                    <div className="event-card__date">
                                                        <span className="month">{month}</span><span className="day">{day}</span>
                                                    </div>
                                                    <div className="event-card__info">
                                                        <h4>{event.name}</h4>
                                                        <p><Clock size={20}></Clock> {timeStr} (Asia/Jakarta)</p>
                                                        <p><MapPin size={20}></MapPin> {event.location}</p>
                                                    </div>
                                                    <a href={event.registration_link} className="btn btn--secondary">RSVP Now</a>
                                                </div>
                                            );
                                        } catch (e) {
                                            console.error('Error rendering event:', e);
                                            return null;
                                        }
                                    }) : (
                                        <div className="events__fallback">
                                            <p>No upcoming events right now. Join our newsletter for updates!</p>
                                        </div>
                                    )}

                                    <div className="events__fallback">
                                        <p>No upcoming events right now. Join our newsletter for updates!</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Start Your Journey?</h2>
                        <p>
                            Your dream of studying abroad is closer than you
                            think. Let's make it happen.
                        </p>
                        <a href="#" className="btn btn--primary btn--large">
                            Talk to a Counsellor for Free
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}
