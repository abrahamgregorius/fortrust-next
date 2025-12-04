"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    const [showBanner, setShowBanner] = useState(false);
    const slides = [
        {
            id: 0,
            title: "Join Our Success Stories.",
            subtitle:
                "Thousands of students have trusted us for over 30 years. You're next.",
            img: "/banner1.webp",
        },
        {
            id: 1,
            title: "Study Abroad with Confidence.",
            subtitle:
                "Our expert counselors are with you every step of the way.",
            img: "/banner2.jpg",
        },
        {
            id: 2,
            title: "Global Education Opportunities.",
            subtitle:
                "From Australia to USA, explore the best universities worldwide.",
            img: "/banner3.jpg",
        },
    ];

    const testimonials1 = [
        {
            quote: "All good with Fortrust, I got advice and suggestions that I needed during application to NZ universities. Fortrust staff, mbak Sarah also have assisted me throughout my application journey to several universities until I decided AIS is the most suitable for me. I'm thankful to be given the opportunity to live my NZ dreams with my family. Thank you, Fortrust!",
            author: "Oltariani Laswinta Fitri",
            role: "Auckland Institute of Studies - Master of Business",
            img: "/people/Oltariani-Laswinta-Fitri.jpg",
        },
        {
            quote: "Fortrust made the whole process of deciding on a career that future proof and picking the right university program super easy. Not only did they consider what I wanted to study, but they also made sure it fit our budget.",
            author: "Joshua Moshe Djuandi",
            role: "Teesside University - Bachelor of Artificial Intelligence",
            img: "/people/Joshua-Moshe-Djuandi.jpg",
        },
        {
            quote: "Fortrust provided excellent support throughout my University of Melbourne application process. Their quick responses and insightful guidance made the entire experience smooth and stress-free. They were always available to answer questions, offering personalized advice and ensuring I understood each step. Highly recommend their efficient and professional service!",
            author: "Listiawati",
            role: "University of Melbourne - Bachelor of Commerce",
            img: "/people/Listiawati.jpg",
        },
        {
            quote: "Sangat membantu dalam memilih jurusan dan sekolah yang cocok berdasarkan dengan jurusannya. Counsellor juga sangat membantu sepanjang proses registrasi ke sekolah tersebut juga memberikan informasi yang detail.",
            author: "Charlotte Erika Javly",
            role: "Amity Global Institute - Finance and Accounting",
            img: "/people/Charlotte-Erika-Javly.jpg",
        },
    ];

    const [testimonials, setTestimonials] = useState([]);
    const fetchTestimonials = async () => {
        const { data, error } = await supabase.from("testimonials").select("*");
        if (error) {
            console.error("Error fetching testimonials:", error);
        } else {
            setTestimonials(data || []);
        }

        console.log(data);
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

    const [current, setCurrent] = useState(0);

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
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const closed = localStorage.getItem('popupBannerClosed');
            if (closed !== 'true') {
                setShowBanner(true);
            }
        }
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <>
            <Navbar></Navbar>

            {showBanner && (
                <div className="popup-modal-overlay">
                    <div className="popup-modal">
                        <button
                            className="popup-modal-close"
                            onClick={() => {
                                setShowBanner(false);
                                if (typeof window !== 'undefined') {
                                    localStorage.setItem('popupBannerClosed', 'true');
                                }
                            }}
                        >
                            ×
                        </button>
                        <Image src="/banner1.webp" alt="Popup Banner" width={800} height={600} />
                    </div>
                </div>
            )}

            <main>
                <section className="hero-carousel">
                    <div className="carousel-wrapper">
                        {slides.map((slide, idx) => (
                            <div
                                key={slide.id}
                                className={`carousel-slide ${idx === currentSlide ? "active" : ""
                                    }`}
                                style={{
                                    backgroundImage: `url('${slide.img}')`,
                                }}
                            >
                                <div className="slide-content">
                                    {/* <h1>{slide.title}</h1>
                                    <p className="subhead">{slide.subtitle}</p> */}
                                    <div className="hero__cta">
                                        <a
                                            href="/contact"
                                            className="btn btn--primary btn--large"
                                        >
                                            Start Your Journey
                                        </a>
                                    </div>
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

                <section className="testimonials">
                    <div className="container">
                        <div className="testimonial-slider-wrapper">
                            {testimonials.map((t, index) => (
                                <div
                                    key={t.id}
                                    className={`card testimonial-card ${index === current ? "active" : ""
                                        }`}
                                >
                                    <p className="testimonial-card__content">
                                        "{t.testimonial}"
                                    </p>
                                    <div className="testimonial-card__author">
                                        <img
                                            src={t.image_url}
                                            alt={`Photo of ${t.person_name}`}
                                        />
                                        <div className="author-info">
                                            <strong>{t.person_name}</strong>
                                            <p>{t.person_institution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation buttons */}
                        <div className="testimonial-nav">
                            <button
                                className="slider__btn slider__btn--prev"
                                onClick={prevSlide}
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                className="slider__btn slider__btn--next"
                                onClick={nextSlide}
                            >
                                <ChevronRight />
                            </button>
                        </div>
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

                <section className="events">
                    <div className="container events__container">
                        <div className="section-header">
                            <h2>Events & Webinars</h2>
                            <p>
                                Join our free sessions to get all your questions
                                answered.
                            </p>
                        </div>
                        <div className="events__list">
                            {/* <div className="card event-card">
              <div className="event-card__date">
                <span className="month">SEP</span><span className="day">20</span>
              </div>
              <div className="event-card__info">
                <h4>Study in Singapore Education Fair</h4>
                <p><i data-lucide="clock"></i> 10:00 AM (Asia/Jakarta)</p>
                <p><i data-lucide="map-pin"></i> Sheraton Hotel, Surabaya</p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeDJpBg1jwi9PTzkefJ3i-M54MN2lvSZSUuTJTKJyuNBh3lng/viewform?usp=header"
                className="btn btn--secondary"
                >RSVP Now</a
              >
            </div> */}
                            <div className="card event-card">
                                <div className="event-card__date">
                                    <span className="month">SEP</span>
                                    <span className="day">27</span>
                                </div>
                                <div className="event-card__info">
                                    <h4>
                                        Fortrust International Edu Expo 2025
                                    </h4>
                                    <p>
                                        <Clock size={20}></Clock> 1:00 PM
                                        (Asia/Jakarta)
                                    </p>
                                    <p>
                                        <MapPin size={20}></MapPin> Mangkuluhur
                                        Artotel Suites
                                    </p>
                                </div>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScb58C3bbmq0-j1GfWilomVgXG5bQ_MgS4bUfFFJprhKBys3w/viewform?usp=header"
                                    className="btn btn--secondary"
                                >
                                    RSVP Now
                                </a>
                            </div>

                            <div className="card event-card">
                                <div className="event-card__date">
                                    <span className="month">SEP</span>
                                    <span className="day">28</span>
                                </div>
                                <div className="event-card__info">
                                    <h4>
                                        Fortrust International Edu Expo 2025
                                    </h4>
                                    <p>
                                        <Clock size={20}></Clock> 1:00 PM
                                        (Asia/Jakarta)
                                    </p>
                                    <p>
                                        <MapPin size={20}></MapPin> Atria Hotel
                                        Gading Serpong
                                    </p>
                                </div>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScb58C3bbmq0-j1GfWilomVgXG5bQ_MgS4bUfFFJprhKBys3w/viewform?usp=header"
                                    className="btn btn--secondary"
                                >
                                    RSVP Now
                                </a>
                            </div>
                        </div>
                        <div className="events__fallback">
                            <p>
                                No upcoming events right now. Join our
                                newsletter for updates!
                            </p>
                        </div>
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
