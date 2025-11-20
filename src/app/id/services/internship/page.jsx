import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Internship() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Program Magang untuk Siswa SMA</h1>
                        <p>
                            Masuki dunia profesional dan dapatkan keunggulan kompetitif bahkan sebelum mulai kuliah.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Mengapa Magang Saat SMA?</h2>
                        <p>
                            Magang bukan hanya untuk mahasiswa. Pengalaman profesional sejak dini membantu eksplorasi minat karier, membangun keterampilan, dan memperkuat aplikasi kuliah. Program 1 bulan kami menempatkan siswa SMA berprestasi di perusahaan multinasional terkemuka dengan pengalaman terstruktur dan berdampak.
                        </p>
                    </div>
                </section>
                <section className="about-story" style={{ backgroundColor: "var(--neutral-100)" }}>
                    <div className="container about-story__container">
                        <div className="about-story__text">
                            <h2 style={{ color: "var(--accent)" }}>
                                Penempatan 1 Bulan di Perusahaan Multinasional
                            </h2>
                            <p>
                                Kami bermitra dengan perusahaan multinasional papan atas di Indonesia untuk menyediakan magang eksklusif selama 1 bulan. Anda tidak akan sekadar membuat kopi; Anda akan diberi proyek nyata, dibimbing mentor khusus, dan berkontribusi pada pekerjaan bermakna dalam tim profesional.
                            </p>
                            <ul>
                                <li>
                                    <i data-lucide="check-circle"></i> Mengerjakan proyek nyata dan menyelesaikan tantangan bisnis riil.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Mendapat mentorship dari profesional berpengalaman.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Sertifikat penyelesaian resmi untuk memperkuat CV.
                                </li>
                            </ul>
                        </div>
                        <div className="about-story__image">
                            <img
                                src="https://via.placeholder.com/500x350/cccccc/000000?text=Student+in+Office+Meeting"
                                alt="A high school student participating in a professional office meeting"
                            />
                        </div>
                    </div>
                </section>

                <section className="pillars" style={{ backgroundColor: "var(--accent)" }}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Apa yang Akan Anda Dapatkan</h2>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="award"></i>
                                <h3>Keterampilan Profesional</h3>
                                <p>
                                    Bangun soft skills penting seperti komunikasi, kerja tim, dan problem‑solving di lingkungan korporat nyata.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="users"></i>
                                <h3>Bangun Jaringan</h3>
                                <p>
                                    Terhubung dengan profesional dan mentor yang dapat membimbing pilihan karier dan memberi surat rekomendasi.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="file-text"></i>
                                <h3>Perkuat CV Anda</h3>
                                <p>
                                    Pengalaman magang di perusahaan multinasional membuat aplikasi kuliah dan beasiswa Anda menonjol.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Memulai Lebih Awal?</h2>
                        <p>
                            Kuota terbatas untuk program magang eksklusif kami. Amankan tempat Anda sekarang.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large">Daftar Magang</a>
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}