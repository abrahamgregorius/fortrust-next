import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Paket() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Program Kesetaraan Paket A, B, & C</h1>
                        <p>Jalur Menuju Pendidikan Formal dan Masa Depan yang Lebih Cerah.</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Pendidikan Fleksibel untuk Semua</h2>
                        <p>
                            Program Paket A, B, dan C menyediakan alternatif fleksibel yang diakui setara dengan sekolah formal. Dirancang bagi pelajar yang perlu menuntaskan pendidikan dasar/menengahnya, membuka pintu ke pendidikan tinggi dan peluang karier yang lebih baik.
                        </p>

                        <h3>Tingkat Program:</h3>
                        <ul>
                            <li>
                                <strong>Paket A:</strong> Setara Sekolah Dasar (SD).
                            </li>
                            <li>
                                <strong>Paket B:</strong> Setara Sekolah Menengah Pertama (SMP).
                            </li>
                            <li>
                                <strong>Paket C:</strong> Setara Sekolah Menengah Atas (SMA) dan memenuhi syarat masuk perguruan tinggi.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Siap Melanjutkan Pendidikan?</h2>
                                <p>
                                    Hubungi kami untuk informasi pendaftaran dan bagaimana kami dapat mendukung perjalanan akademik Anda.
                                </p>
                                <a href="/contact" className="btn btn--primary btn--large">Pelajari Lebih Lanjut</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}