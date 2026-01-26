import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Interest() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>TEST IQ, MINAT & BAKAT</h1>
                        <p>Langkah Jelas untuk Potensi Maksimal</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <div className="content-block">
                            <p>
                                Perencanaan masa depan anak yang efektif dimulai dengan arah yang jelas agar anak dapat
                                mencapai potensi terbaiknya. Saat ini, strategi seperti profiling test, tes IQ, dan interest talent
                                evaluation semakin diminati orang tua untuk menemukan kekuatan, kebutuhan, dan minat anak
                                sejak dini.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Pentingnya Profiling Test dalam Perencanaan Masa Depan Anak</h2>
                            <p>
                                Profiling test mampu mengungkap kepribadian, gaya belajar, dan pola berpikir anak. Informasi kunci ini membantu orang tua memilih metode dan lingkungan belajar yang paling sesuai, sehingga meningkatkan kepercayaan diri dan produktivitas anak.
                            </p>
                        </div>

                        <div className="content-block">
                            <p>
                                Tes IQ secara akurat mengukur kemampuan kognitif seperti logika, pemecahan masalah, dan pemahaman. Hasil dari tes ini memudahkan orang tua dalam memberikan dukungan akademik yang tepat agar potensi anak bisa berkembang maksimal.
                            </p>
                        </div>

                        <div className="content-block">
                            <p>
                                Interest talent evaluation membantu anak menemukan minat dan bakat sejak dini, sehingga orang tua dapat mengarahkan pendidikan dan aktivitas sesuai kekuatan anak.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Kenapa Profiling Assessment Kami Berbeda?</h2>
                            <h3>Evaluasi Psikologis Komprehensif</h3>
                            <p>
                                Sesi 45 menit bersama psikolog bersertifikat untuk meneliti gap antara hasil tes dengan
                                kondisi nyata anak serta mengidentifikasi tantangan belajar dan kesehatan mental.
                            </p>
                            
                            <h3>Konsultasi yang fokus pada Pendidikan </h3>
                            <p>
                                Panduan dari konsultan pendidikan untuk memilih bidang studi dan skill masa depan yang sesuai tren global dan minat anak.
                            </p>

                            <h3>Dibuat oleh Pakar Psikologi dengan ketepatan assessment yang tinggi</h3>
                            <p>
                                Tes profiling ini dikembangkan oleh psikolog yang berpengalaman dalam perencanaan talenta, rekrutmen, dan pengembangan kepemimpinan untuk klien dari berbagai bidang seperti pemerintah, pendidikan, media, keuangan, real estate, transportasi, dan lainnya.
                            </p>

                            <p style={{ marginTop: "var(--space-8)" }}>
                                Kombinasi pemahuman psikologis dan arahan pendidikan yang tepat membuat assessment Fortrust pilihan terbaik untuk masa depan anak Anda.
                            </p>
                        </div>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Hilangkan keraguan, rencanakan masa depan anak</h2>
                                <p>
                                    dengan Profiling Test Fortrust. Daftar Tes sekarang!
                                </p>
                                <a href="/id/contact" className="btn btn--primary btn--large">Daftar Tes Sekarang!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}