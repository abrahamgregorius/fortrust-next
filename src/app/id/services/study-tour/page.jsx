import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

export default function StudyTour() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="video-section">
                    <video
                        src="/video/study-tour.mp4"
                        autoPlay
                        muted
                        loop
                        style={{ width: '100%' }}
                        preload="metadata"
                    >
                        Your browser does not support the video tag.
                    </video>
                </section>

                <section className="page-header">
                    <div className="container">
                        <h1>Study Tour & Immersion Programs</h1>
                        <p>
                            Rasakan masa depan Anda sebelum berkomitmen. Perjalanan eksplorasi menanti.
                        </p>
                    </div>
                </section>
                <img src="/study-tour/banner-b.webp" alt="Study Tour Banner" style={{ width: '100%' }} />


                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Mengapa Ikut Study Tour?</h2>
                        <br />
                        <p>
                            Memilih kuliah di luar negeri adalah keputusan besar. Study tour adalah cara ideal untuk merasakan langsung kehidupan akademik dan budaya di destinasi impian. Ini lebih dari sekadar liburan; sebuah program singkat dan intensif untuk memberi kejelasan dan rasa percaya diri dalam membuat pilihan yang tepat.
                        </p>
                    </div>
                </section>

                <section className="about-story" style={{ backgroundColor: "var(--neutral-100)" }}>
                    <div className="container about-story__container">
                        <div className="about-story__text">
                            <h2 style={{ color: "var(--accent)", marginBottom: ".4rem" }}>
                                Program Immersi Unggulan UCCE
                            </h2>
                            <p>
                                The {" "}
                                <strong>University, College, Career Experience (UCCE)</strong> {" "}
                                adalah program immersi unggulan kami. Dirancang untuk memberi gambaran lengkap masa depan Anda dengan menggabungkan wawasan akademik dan paparan karier nyata.
                            </p>
                            <ul className="ucce">
                                <li>
                                    - Mengunjungi kampus universitas ternama dunia.

                                </li>
                                <li>
                                    - Mengikuti lokakarya dan cuplikan perkuliahan.
                                </li>
                                <li>
                                    - Bertemu profesional industri dan eksplorasi jalur karier potensial.
                                </li>
                            </ul>
                        </div>
                        <div className="about-story__image">
                            <img
                                src="https://via.placeholder.com/500x350/cccccc/000000?text=Students+on+Campus+Tour"
                                alt="A group of students on a university campus tour"
                            />
                        </div>
                    </div>
                </section>

                <section className="pillars">
                    <div className="container">
                        <div className="section-header">
                            <h2>Apa yang Akan Anda Alami</h2>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="university"></i>
                                <h3>Tur Kampus Universitas</h3>
                                <p>
                                    Menjelajahi kampus universitas top, melihat fasilitas, dan merasakan atmosfernya sebelum mendaftar.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="briefcase"></i>
                                <h3>Lokakarya Karier</h3>
                                <p>
                                    Berinteraksi dengan para pemimpin industri dan mendapatkan wawasan tentang peluang karier setelah lulus.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="globe"></i>
                                <h3>Eksplorasi Budaya</h3>
                                <p>
                                    Menyelami budaya lokal, mengunjungi landmark ikonik, dan memahami seperti apa hidup serta studi di negara baru.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Jelajahi Tur Mendatang Kami</h2>
                        <p>
                            Kami memilih destinasi terbaik untuk program study tour. Temukan yang paling cocok untuk Anda.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large">Tanyakan Study Tour</a>
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}