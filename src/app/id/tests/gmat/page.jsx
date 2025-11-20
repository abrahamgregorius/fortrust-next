import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function GMAT() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Panduan Lengkap GMAT</h1>
                        <p>
                            Semua yang perlu Anda ketahui sebelum mengikuti ujian.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Memahami GMAT (Graduate Management Admission Test)</h2>
                        <p>
                            Ingin menempuh MBA atau magister bisnis dan melangkah ke sekolah bisnis terbaik dunia? Graduate Management Admission Test (GMAT) adalah tahapan penting dalam perjalanan Anda. Berikut panduan lengkap dan mudah dipahami yang mencakup dasar GMAT, format tes, persyaratan skor, biaya, dan kiat sukses dari para ahli.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Apa itu GMAT?</h3>
                        <p>
                            GMAT adalah ujian standar yang disyaratkan ribuan sekolah bisnis di seluruh dunia, khususnya untuk program MBA dan magister manajemen. Ujian ini mengukur kemampuan di empat area utama: Analytical Writing, Integrated Reasoning, Quantitative Reasoning, dan Verbal Reasoning. Berbeda dengan ujian umum, GMAT menargetkan keterampilan yang paling dihargai program bisnis: pemecahan masalah, berpikir kritis, dan analisis data.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Kapan Sebaiknya Mengikuti GMAT?</h3>
                        <p>
                            Waktu sangat penting. Banyak kandidat mengikuti GMAT sekitar satu tahun sebelum masuk sekolah bisnis yang dituju—biasanya pada tahun terakhir kuliah S1 atau setelah memiliki pengalaman kerja. Sisihkan waktu untuk kemungkinan retake agar skor dapat ditingkatkan, jadi rencanakan sejak awal.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Siapa yang Menerima GMAT?</h3>
                        <p>
                            GMAT diterima oleh lebih dari 7.000 program di lebih dari 2.300 sekolah bisnis pascasarjana di seluruh dunia. Sekolah-sekolah top di AS, Kanada, Eropa, Asia, dan wilayah lainnya menggunakan skor GMAT untuk mengevaluasi pelamar. Baik Anda menargetkan Harvard, INSEAD, LBS, atau sekolah bisnis terbaik di negara Anda, skor GMAT yang kuat membuka banyak peluang.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Format Ujian GMAT</h3>
                        <p>Memahami struktur GMAT akan membuat hari ujian lebih percaya diri. Ujian terdiri dari empat bagian:</p>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Bagian</th>
                                        <th>Deskripsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Analytical Writing Assessment (AWA)</td>
                                        <td>Menganalisis sebuah argumen dan menulis esai terstruktur untuk menunjukkan kemampuan berpikir kritis dan komunikasi efektif.</td>
                                    </tr>
                                    <tr>
                                        <td>Integrated Reasoning (IR)</td>
                                        <td>Mengevaluasi data dalam berbagai format seperti grafik, tabel, dan teks—keterampilan penting di era bisnis berbasis data.</td>
                                    </tr>
                                    <tr>
                                        <td>Quantitative Reasoning</td>
                                        <td>Menyelesaikan soal matematika terkait problem solving dan data sufficiency; kalkulator tidak diperbolehkan.</td>
                                    </tr>
                                    <tr>
                                        <td>Verbal Reasoning</td>
                                        <td>Menilai kemampuan membaca, penalaran kritis, dan tata bahasa.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ marginTop: "var(--space-4)" }}>
                            Durasi ujian sekitar 3 jam 7 menit (tidak termasuk jeda), dengan skor total hingga 800 (berdasarkan Quantitative dan Verbal). Setiap bagian memiliki skala penilaian sendiri. Hasil biasanya tersedia dalam ±7 hari.
                        </p>


                        <h3 style={{ marginTop: "var(--space-8)" }}>Biaya dan Pendaftaran GMAT</h3>
                        <p>
                            Tahun 2025, biaya GMAT sekitar USD 275. Biaya dapat bervariasi per negara dan layanan opsional seperti penjadwalan ulang, pembatalan, atau pengiriman laporan skor tambahan. Siapkan anggaran untuk kemungkinan retake dan layanan tambahan.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Berapa Skor GMAT yang Baik?</h3>
                        <p>
                            Skor kompetitif umumnya berada di kisaran 600–700 untuk program bisnis top. Sekolah MBA elite bisa memiliki median lebih tinggi. Komite seleksi juga menilai pengalaman kerja, IPK, esai, dan rekomendasi selain skor GMAT.
                        </p>
                        <p>
                            GMAT bukan sekadar tes—ini kesempatan untuk mempertajam keterampilan yang membentuk karier Anda. Dengan persiapan yang tepat, Anda akan percaya diri, menarik perhatian sekolah top, dan mencapai target Anda.
                        </p>


                        <p style={{ marginTop: "var(--space-8)" }}>
                            Jangan ragu—hubungi Fortrust untuk dukungan GMAT personal, strategi ahli, dan panduan komprehensif. Mari melangkah satu tahap lebih dekat ke sekolah bisnis impian Anda!
                        </p>

                        <div style={{ textAlign: "center", marginTop: "var(--space-12)" }}>
                            <Link href="/contact" className="btn btn--primary btn--large">Konsultasi Gratis</Link>
                        </div>

                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}