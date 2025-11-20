import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

export default function University() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Penempatan Universitas</h1>
                        <p>
                            Dari memilih jurusan yang tepat hingga menerima offer, kami membimbing Anda di setiap langkah.
                        </p>
                    </div>
                </section>

                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Perjalanan ke Universitas Jadi Lebih Mudah</h2>
                            <p>
                                Ikuti proses 6 langkah kami untuk pengalaman aplikasi yang lancar dan sukses.
                            </p>
                        </div>
                        <div className="stepper">
                            <div className="step">
                                <div className="step-icon">1</div>
                                <h3>Konseling Gratis</h3>
                                <p>
                                    Kami membahas latar belakang akademik, tujuan karier, dan anggaran untuk menemukan negara, universitas, dan jurusan yang paling cocok.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">2</div>
                                <h3>Pengajuan Aplikasi</h3>
                                <p>
                                    Kami membantu menyiapkan dan mengajukan aplikasi yang kuat, memastikan dokumen lengkap dan sesuai standar universitas.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">3</div>
                                <h3>Offer Letter & Acceptance</h3>
                                <p>
                                    Saat menerima offer letter, kami membantu memahami syarat dan ketentuan, serta memandu proses penerimaan.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">4</div>
                                <h3>Aplikasi Visa</h3>
                                <p>
                                    Kami memberi panduan ahli untuk aplikasi visa pelajar, memastikan dokumen rapi untuk memaksimalkan peluang persetujuan.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">5</div>
                                <h3>Briefing Pra‑Keberangkatan</h3>
                                <p>
                                    Kami bantu akomodasi, asuransi, dan memberikan briefing komprehensif agar siap hidup di luar negeri.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">6</div>
                                <h3>Dukungan Studi Berkelanjutan</h3>
                                <p>
                                    Setelah tiba, jika bingung harus apa, hubungi kami. Kami bantu mencari solusi dan menghubungkan Anda dengan jaringan alumni.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="documents-section">
                    <div className="container documents-section__container">
                        <div className="documents-info">
                            <h2>Dokumen yang Diperlukan</h2>
                            <p>
                                Menyiapkan dokumen ini akan mempercepat proses aplikasi Anda.
                            </p>
                            <ul className="checklist">
                                <li><CheckCircle></CheckCircle> Paspor yang masih berlaku</li>
                                <li>
                                    <CheckCircle></CheckCircle> Transkrip Nilai & Ijazah
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> Hasil Tes Bahasa Inggris (IELTS/TOEFL)
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> Statement of Purpose (SOP) atau Esai Pribadi
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> Surat Rekomendasi (jika diperlukan)
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> CV/Resume (untuk pendaftar pascasarjana)
                                </li>
                            </ul>
                        </div>
                        <div className="fees-info card">
                            <h3><i data-lucide="info"></i> Biaya Layanan</h3>
                            <p>
                                <strong>Layanan konseling dan penempatan universitas kami gratis.</strong>
                                Kami bermitra resmi dan didanai institusi mitra, sehingga Anda mendapatkan pendampingan ahli tanpa biaya.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Memulai Aplikasi?</h2>
                        <p>
                            Biarkan konselor ahli kami mewujudkan mimpi studi luar negeri Anda.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large">Jadwalkan Konsultasi Gratis</a>
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}