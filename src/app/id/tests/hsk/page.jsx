import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HSK() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Panduan Lengkap Ujian HSK</h1>
                        <p>
                            Semua yang perlu kamu ketahui sebelum mengikuti ujian.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Memahami HSK (Hanyu Shuiping Kaoshi)</h2>
                        <p>
                            Jika kamu belajar Bahasa Mandarin dan mulai mempertimbangkan kuliah, bekerja, atau tinggal di Tiongkok, kamu pasti sudah mendengar tentang HSK. Singkatan dari “Hanyu Shuiping Kaoshi,” ini adalah tes resmi kemampuan Bahasa Mandarin untuk penutur asing. Skor HSK yang baik dapat membuka peluang kuliah di universitas Tiongkok, beasiswa, bahkan meningkatkan daya saing CV untuk pekerjaan yang membutuhkan Mandarin.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>Kapan Sebaiknya Mengikuti HSK?</h3>
                        <p>
                            Waktu terbaik adalah beberapa bulan sebelum tenggat pendaftaran—misalnya untuk masuk universitas atau melamar pekerjaan—agar kamu punya waktu menerima hasil atau mengulang jika perlu. Jika kamu baru selesai satu level belajar Mandarin, mengikuti HSK juga cara bagus untuk mengukur perkembanganmu.
                        </p>
                        <p>
                            Karena tiap institusi punya syarat berbeda, pastikan kamu cek level HSK yang diwajibkan.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>Struktur Ujian HSK</h3>
                        <p>HSK terdiri dari enam level, dari pemula (HSK 1) hingga mahir (HSK 6). Berikut rinciannya:</p>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Level HSK</th>
                                        <th>Bagian</th>
                                        <th>Jenis Soal</th>
                                        <th>Durasi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HSK 1 & 2</td>
                                        <td>Mendengar + Membaca</td>
                                        <td>Pilihan ganda</td>
                                        <td>40–55 mins</td>
                                    </tr>
                                    <tr>
                                        <td>HSK 3 & 4</td>
                                        <td>Mendengar, Membaca, Menulis</td>
                                        <td>Pilihan ganda & jawaban singkat</td>
                                        <td>90–105 mins</td>
                                    </tr>
                                    <tr>
                                        <td>HSK 5 & 6</td>
                                        <td>Mendengar, Membaca, Menulis</td>
                                        <td>Pilihan ganda & esai</td>
                                        <td>120–140 mins</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul>
                            <li><strong>Mendengar:</strong> Mendengarkan rekaman dalam Bahasa Mandarin lalu menjawab.</li>
                            <li><strong>Membaca:</strong> Membaca teks dan memilih jawaban benar.</li>
                            <li><strong>Menulis:</strong> Muncul mulai level 3 – menulis kata, kalimat, atau esai.</li>
                        </ul>
                        <p>Ada juga tes opsional HSK Speaking (HSKK) jika ingin menunjukkan kemampuan berbicara.</p>


                        <h3 style={{ marginTop: 'var(--space-8)' }}>Berapa Biaya HSK?</h3>
                        <p>
                            Biaya bervariasi per negara dan level, umumnya USD 20–100. Level lebih tinggi biasanya lebih mahal. Cek ke pusat tes lokal untuk detail terbaru.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>Skor yang Dibutuhkan</h3>
                        <ul>
                            <li>Untuk S1 di Tiongkok biasanya cukup HSK Level 4.</li>
                            <li>Untuk S2/S3 targetkan Level 5 atau 6.</li>
                        </ul>
                        <p>Tiap universitas atau perusahaan bisa punya standar berbeda, jadi selalu konfirmasi.</p>


                        <h3 style={{ marginTop: 'var(--space-8)' }}>Tips Persiapan HSK</h3>
                        <ul>
                            <li><strong>Kenali Format</strong><br /> Latihan dengan soal asli agar terbiasa.</li>
                            <li><strong>Rutin Latihan</strong><br /> Gunakan flashcard, kuis, dan ujian simulasi.</li>
                            <li><strong>Kuasai Kosakata</strong><br /> Unduh daftar kosakata resmi level yang kamu ambil.</li>
                            <li><strong>Perbanyak Mendengar</strong><br /> Tonton acara Mandarin atau dengarkan podcast.</li>
                            <li><strong>Baca & Tulis Harian</strong><br /> Coba baca berita dan tulis paragraf pendek.</li>
                            <li><strong>Belajar Bersama</strong><br /> Ikut kelas atau cari partner belajar.</li>
                            <li><strong>Review Ujian Lama</strong><br /> Lihat pola soal dari tes sebelumnya.</li>
                        </ul>

                        <p style={{ marginTop: 'var(--space-8)' }}>
                            Siap melangkah ke level berikutnya? Mau kuliah, kerja, atau sekadar ukur kemampuan, HSK adalah gerbangmu. Butuh bantuan belajar? Fortrust siap mendukung dengan sumber belajar, rencana studi personal, dan strategi ujian. Hubungi kami dan raih targetmu dengan percaya diri!
                        </p>

                        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                            <Link href="/contact" className="btn btn--primary btn--large">Konsultasi Gratis</Link>
                        </div>

                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}