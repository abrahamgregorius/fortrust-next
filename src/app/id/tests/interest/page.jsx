import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Interest() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Tes Minat dan Bakat</h1>
                        <p>Gali Potensi dan Temukan Jalur Karier Ideal Anda.</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Mengapa Perlu Tes Minat dan Bakat?</h2>
                        <br />
                        <p>
                            Memilih jurusan adalah salah satu keputusan terpenting.
                            Tes Minat dan Bakat adalah alat yang dirancang untuk membantu Anda
                            memahami kekuatan unik, karakter, dan passion Anda. Dengan menganalisis aspek tersebut, tes memberikan rekomendasi jurusan dan jalur karier yang selaras dengan diri Anda sehingga bisa berkembang maksimal.
                        </p>

                        <h3>Manfaat Tes Kami</h3>
                        <ul>
                            <li>
                                <strong>Rekomendasi Personal:</strong> Laporan detail berisi saran jurusan dan karier yang sesuai profil Anda.
                            </li>
                            <li>
                                <strong>Lebih Percaya Diri:</strong> Ambil keputusan masa depan dengan keyakinan dan kejelasan.
                            </li>
                            <li>
                                <strong>Hemat Waktu & Biaya:</strong> Kurangi risiko salah jurusan yang merugikan di kemudian hari.
                            </li>
                            <li>
                                <strong>Eksplorasi Karier:</strong> Temukan peluang karier yang mungkin belum terpikirkan.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Siap Menemukan Arah Anda?</h2>
                                <p>
                                    Ikuti tes kami hari ini dan ambil langkah pertama menuju perjalanan akademik dan profesional yang memuaskan.
                                </p>
                                <a href="/contact" className="btn btn--primary btn--large">Jadwalkan Tes Anda</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}