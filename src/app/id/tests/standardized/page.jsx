import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Standardized() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Persiapan Ujian Standar</h1>
                        <p>
                            Bangun fondasi akademik yang kuat dan raih skor terbaik di ujian standar Anda.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Unggul di Ujian Standar Anda</h2>
                        <p>
                            Ujian standar seperti GMAT, SAT, dan Cambridge Levels adalah komponen penting dalam aplikasi ke universitas dan sekolah bisnis terkemuka. Program persiapan kami dirancang untuk memberikan pemahaman materi, strategi efektif, dan latihan yang Anda butuhkan untuk meraih skor kompetitif.
                        </p>

                        <h3>Materi yang Dicakup:</h3>
                        <ul>
                            <li>
                                <strong>GMAT/SAT:</strong> Tinjauan komprehensif Quantitative, Verbal, dan Analytical Writing dengan fokus strategi problem solving.
                            </li>
                            <li>
                                <strong>Cambridge O'level & A'level:</strong> Pendampingan materi mendalam sesuai kurikulum Cambridge untuk menguasai konsep inti.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}

                        >
                            <div className="container final-cta__container">
                                <h2>Siap Menaklukkan Ujian?</h2>
                                <p>
                                    Ikuti kelas persiapan kami dan bangun keterampilan untuk sukses.
                                </p>
                                <a href="/contact" className="btn btn--primary btn--large">Tanyakan Program</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}