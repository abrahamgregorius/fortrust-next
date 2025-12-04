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
            title: "Bergabunglah dengan Kisah Sukses Kami.",
            subtitle:
                "Ribuan siswa telah mempercayai kami selama lebih dari 30 tahun. Giliran Anda selanjutnya.",
            img: "/banner1.webp",
        },
        {
            id: 1,
            title: "Belajar di Luar Negeri dengan Percaya Diri.",
            subtitle:
                "Konselor ahli kami bersama Anda di setiap langkah.",
            img: "/banner2.jpg",
        },
        {
            id: 2,
            title: "Peluang Pendidikan Global.",
            subtitle:
                "Dari Australia hingga AS, jelajahi universitas terbaik di dunia.",
            img: "/banner3.jpg",
        },
    ];

    const testimonials1 = [
        {
            quote: "Semuanya baik dengan Fortrust, saya mendapat nasihat dan saran yang saya butuhkan selama aplikasi ke universitas NZ. Staf Fortrust, mbak Sarah juga telah membantu saya sepanjang perjalanan aplikasi saya ke beberapa universitas hingga saya memutuskan AIS adalah yang paling cocok untuk saya. Saya berterima kasih atas kesempatan untuk mewujudkan impian NZ saya bersama keluarga. Terima kasih, Fortrust!",
            author: "Oltariani Laswinta Fitri",
            role: "Auckland Institute of Studies - Master of Business",
            img: "/people/Oltariani-Laswinta-Fitri.jpg",
        },
        {
            quote: "Fortrust membuat seluruh proses memutuskan karir yang tahan masa depan dan memilih program universitas yang tepat menjadi sangat mudah. Mereka tidak hanya mempertimbangkan apa yang ingin saya pelajari, tetapi juga memastikan sesuai dengan anggaran kami.",
            author: "Joshua Moshe Djuandi",
            role: "Teesside University - Bachelor of Artificial Intelligence",
            img: "/people/Joshua-Moshe-Djuandi.jpg",
        },
        {
            quote: "Fortrust memberikan dukungan yang sangat baik sepanjang proses aplikasi University of Melbourne saya. Respons cepat mereka dan panduan yang mendalam membuat seluruh pengalaman menjadi lancar dan bebas stres. Mereka selalu tersedia untuk menjawab pertanyaan, memberikan nasihat yang dipersonalisasi dan memastikan saya memahami setiap langkah. Sangat merekomendasikan layanan mereka yang efisien dan profesional!",
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
                        <Image src="/banner1.webp" alt="Popup Banner" width={800} height={600} />
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
                                            href="/id/contact"
                                            className="btn btn--primary btn--large"
                                        >
                                            Mulai Perjalanan Anda
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
                                    Dapatkan konseling ahli, aplikasi, visa,
                                    dan dukungan pra-keberangkatan - di satu tempat.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScb58C3bbmq0-j1GfWilomVgXG5bQ_MgS4bUfFFJprhKBys3w/viewform?usp=header"
                                        className="btn btn--primary btn--large"
                                    >
                                        RSVP Sekarang
                                    </a>
                                    <a
                                        href="#destinations"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Jelajahi Tujuan
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
                                <h1>Belajar di Singapura</h1>
                                <p className="subhead">
                                    Dukungan komprehensif untuk perjalanan studi Anda di
                                    Singapura – dari konseling hingga
                                    visa, semua di satu hub.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSeDJpBg1jwi9PTzkefJ3i-M54MN2lvSZSUuTJTKJyuNBh3lng/viewform?usp=header"
                                        className="btn btn--primary btn--large"
                                    >
                                        RSVP Sekarang
                                    </a>
                                    <a
                                        href="/id/services"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Cari Program
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="carousel-slide carousel-slide-text"
                            // style="background-image: url('./public/banner1.webp')"
                        >
                            <div className="slide-content">
                                <h1>Bergabunglah dengan Kisah Sukses Kami.</h1>
                                <p className="subhead">
                                    Ribuan siswa telah mempercayai kami selama
                                    lebih dari 30 tahun. Giliran Anda selanjutnya.
                                </p>
                                <div className="hero__cta">
                                    <a
                                        href="/id/contact"
                                        className="btn btn--primary btn--large"
                                    >
                                        Mulai Perjalanan Anda
                                    </a>
                                    <a
                                        href="/id/alumni"
                                        className="btn btn--secondary btn--large"
                                    >
                                        Baca Kisah
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

                <section className="events">
                    <div className="container events__container">
                        <div className="section-header">
                            <h2>Acara & Webinar</h2>
                            <p>
                                Bergabunglah dengan sesi gratis kami untuk mendapatkan semua pertanyaan Anda terjawab.
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
                                    RSVP Sekarang
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
                                    RSVP Sekarang
                                </a>
                            </div>
                        </div>
                        <div className="events__fallback">
                            <p>
                                Tidak ada acara mendatang saat ini. Bergabunglah dengan newsletter kami untuk pembaruan!
                            </p>
                        </div>
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
