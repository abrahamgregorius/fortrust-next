import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SAT() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Panduan Lengkap Ujian SAT</h1>
                        <p>
                            Semua yang perlu diketahui sebelum mengikuti ujian.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Memahami SAT (Scholastic Assessment Test)</h2>
                        <p>
                            Apakah Anda siswa SMA yang ingin mendaftar ke universitas, khususnya di Amerika Serikat? Salah satu tahapan penting dalam perjalanan menuju kuliah adalah mengikuti SAT—ujian standar yang berperan besar dalam seleksi penerimaan. Di sini kami jelaskan apa itu SAT, kapan sebaiknya diambil, format dan biaya, siapa yang menerima, serta kisaran skor untuk universitas top.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Apa itu SAT?</h3>
                        <p>
                            SAT adalah ujian standar yang digunakan universitas di Amerika Serikat untuk menilai kesiapan akademik calon mahasiswa. Tes ini mengukur kemampuan Matematika, Evidence-Based Reading, dan Writing. Meski beberapa kampus kini test-optional, SAT tetap penting untuk menunjukkan kemampuan akademik.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Kapan Sebaiknya Mengikuti SAT?</h3>
                        <p>
                            Banyak siswa mengambil SAT pada kelas 11 atau 12, biasanya periode Maret–Mei atau September–November. Ini memberi waktu untuk retake jika ingin meningkatkan skor sebelum tenggat pendaftaran. Mulailah belajar beberapa bulan sebelumnya.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Siapa yang Menerima SAT?</h3>
                        <p>
                            Hampir semua universitas di AS menerima skor SAT. Semakin banyak institusi internasional juga menerimanya, menjadikan SAT pilihan fleksibel bagi yang mempertimbangkan studi luar negeri. Selalu cek kebijakan kampus tujuan.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Format Ujian SAT</h3>
                        <p>Tahun 2025 SAT diselenggarakan dalam format digital baru. Bagian-bagiannya:</p>
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
                                        <td>Evidence-Based Reading</td>
                                        <td>Menganalisis bacaan dan menjawab pilihan ganda.</td>
                                    </tr>
                                    <tr>
                                        <td>Writing and Language</td>
                                        <td>Memperbaiki kalimat dan tata bahasa dalam konteks.</td>
                                    </tr>
                                    <tr>
                                        <td>Math</td>
                                        <td>Mencakup aljabar, analisis data, problem solving, dan konsep lanjutan. Soal pilihan ganda & isian.</td>
                                    </tr>
                                    <tr>
                                        <td>(Opsional) Essay</td>
                                        <td>Banyak kampus tidak lagi mewajibkan; cek kampus tujuan.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ marginTop: "var(--space-4)" }}>
                            Durasi tes sekitar 2 jam 14 menit. Semua bagian selain Math berupa pilihan ganda; bagian Math juga memiliki soal isian. Hasil biasanya tersedia dalam 2–4 minggu.
                        </p>


                        <h3 style={{ marginTop: "var(--space-8)" }}>Berapa Biaya SAT?</h3>
                        <p>
                            Biaya standar sekitar USD 60. Ada biaya tambahan untuk registrasi terlambat, ubah tanggal, atau laporan skor ekstra. Siapkan anggaran jika perlu retake.
                        </p>

                        <h3 style={{ marginTop: "var(--space-8)" }}>Skor SAT yang Baik untuk Universitas Top</h3>
                        <p>
                            Untuk universitas top global, skor kompetitif berada di kisaran 1300–1500. Semakin tinggi skor, semakin kuat aplikasi Anda. Ingat, nilai, aktivitas, dan esai juga sangat penting.
                        </p>
                        <p>
                            Kunci skor tinggi adalah persiapan terstruktur dan strategi tepat. Latihan dengan soal resmi, fokus pada bagian lemah, dan kuasai format digital serta waktu. Tetapkan target skor sejak awal.
                        </p>


                        <p style={{ marginTop: "var(--space-8)" }}>
                            Anda tidak perlu belajar sendiri. Fortrust siap mendampingi dengan strategi SAT yang dipersonalisasi. Hubungi kami dan wujudkan impian kuliah Anda!
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