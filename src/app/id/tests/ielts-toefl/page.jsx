import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function IeltsToefl() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Panduan Lengkap IELTS dan TOEFL</h1>
                        <p>
                            Semua yang perlu diketahui sebelum mengikuti ujian.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Memahami IELTS dan TOEFL</h2>
                        <p>
                            Bukti kemampuan Bahasa Inggris sering menjadi syarat wajib saat kamu berencana kuliah atau bekerja di luar negeri. Dua tes kemampuan Bahasa Inggris yang paling diakui di dunia adalah IELTS (International English Language Testing System) dan TOEFL (Test of English as a Foreign Language).
                        </p>
                        <p>
                            Keduanya diterima ribuan institusi di seluruh dunia, namun memiliki pengalaman ujian dan sistem penilaian yang berbeda. Artikel ini membahas perbedaan utama, kelebihan masing‑masing, serta perbandingan konversi skor, termasuk ujian Cambridge English.
                        </p>

                        <h3>Apa itu IELTS?</h3>
                        <p>
                            IELTS mengevaluasi kemampuan melalui empat bagian: Listening, Reading, Writing, dan Speaking. Tersedia dalam versi Academic dan General Training, IELTS menjadi pilihan utama untuk masuk universitas, imigrasi, dan registrasi profesional di UK, Australia, Kanada, Selandia Baru, dan semakin banyak di AS. Peserta dapat memilih format berbasis kertas atau komputer.
                        </p>

                        <h3>Apa itu TOEFL?</h3>
                        <p>
                            TOEFL adalah tes kemampuan Bahasa Inggris yang juga sangat diakui secara global, terutama disukai universitas di AS namun diterima luas di negara lain. Versi paling populer adalah iBT (Internet‑Based Test) yang menilai Reading, Listening, Speaking, dan Writing.
                        </p>

                        <h3>Perbedaan Utama IELTS & TOEFL</h3>
                        <p>Memilih antara IELTS dan TOEFL bisa membingungkan. Memahami perbedaan ini membantu kamu menentukan tes yang paling sesuai dengan kekuatan dan tujuanmu.</p>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Fitur</th>
                                        <th>IELTS</th>
                                        <th>TOEFL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Bagian Speaking</td>
                                        <td>Tatap muka dengan penguji</td>
                                        <td>Berbicara melalui mikrofon</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Soal</td>
                                        <td>Format beragam</td>
                                        <td>Mayoritas pilihan ganda</td>
                                    </tr>
                                    <tr>
                                        <td>Durasi Ujian</td>
                                        <td>± 3 jam</td>
                                        <td>± 3 jam</td>
                                    </tr>
                                    <tr>
                                        <td>Hasil Tersedia</td>
                                        <td>± 13 hari</td>
                                        <td>± 6 hari</td>
                                    </tr>
                                    <tr>
                                        <td>Biaya</td>
                                        <td>USD 210–275</td>
                                        <td>USD 245–275</td>
                                    </tr>
                                    <tr>
                                        <td>Masa Berlaku Skor</td>
                                        <td>2 tahun</td>
                                        <td>2 tahun</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>Kapan Sebaiknya Mengambil Tes IELTS/TOEFL?</h3>
                        <p>
                            Rencanakan mengikuti tes pada semester pertama tahun terakhir SMA, atau beberapa bulan sebelum tenggat pendaftaran universitas. Waktu ini memberi ruang untuk menerima hasil dan, jika perlu, mengulang tes untuk meningkatkan skor. Persiapan lebih awal memastikan kamu memenuhi syarat dan meningkatkan peluang mencapai hasil terbaik sebelum tenggat penting.
                        </p>

                        <h3>Bagaimana Format Ujian IELTS dan TOEFL?</h3>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>Fitur / Bagian</th>
                                        <th>IELTS</th>
                                        <th>TOEFL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Reading</td>
                                        <td>3 bagian, 40 soal, 60 menit</td>
                                        <td>3 bagian, 36–56 soal, 60–80 menit</td>
                                    </tr>
                                    <tr>
                                        <td>Listening</td>
                                        <td>4 bagian, 40 soal, 30 menit</td>
                                        <td>4 bagian, 28–39 soal, 41–57 menit</td>
                                    </tr>
                                    <tr>
                                        <td>Writing</td>
                                        <td>2 tugas, 60 menit</td>
                                        <td>2 tugas, 50 menit</td>
                                    </tr>
                                    <tr>
                                        <td>Speaking</td>
                                        <td>3 bagian, 11–14 menit (tatap muka)</td>
                                        <td>6 tugas, 20 menit (rekaman)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                        <h3 style={{ marginTop: 'var(--space-8)' }}>Konversi Skor IELTS, TOEFL, dan Cambridge English</h3>
                        <p>Memilih tes yang tepat juga bergantung pada bagaimana skor dikonversi antar ujian. Berikut tabel konversi yang umum digunakan:</p>
                        <div className="table-responsive">
                            <table className="data-table">
                                <thead>
                                    <tr>
                                        <th>IELTS Band</th>
                                        <th>TOEFL iBT</th>
                                        <th>Cambridge English Scale</th>
                                        <th>Ujian Cambridge</th>
                                        <th>Persyaratan Umum Untuk</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>9</td>
                                        <td>118–120</td>
                                        <td>200–230</td>
                                        <td>C2 Proficiency (CPE)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8.5</td>
                                        <td>115–117</td>
                                        <td>191–199</td>
                                        <td>C2 Proficiency (CPE)</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>110–114</td>
                                        <td>185–190</td>
                                        <td>C2 Proficiency (CPE)</td>
                                        <td></td>
                                    </tr>
                                    <tr className="highlighted-row">
                                        <td>7.5</td>
                                        <td>102–109</td>
                                        <td>176–184</td>
                                        <td>C1 Advanced (CAE)</td>
                                        <td>Magister</td>
                                    </tr>
                                    <tr className="highlighted-row">
                                        <td>7</td>
                                        <td>94–101</td>
                                        <td>169–175</td>
                                        <td>C1 Advanced (CAE)</td>
                                        <td>Master Degree</td>
                                    </tr>
                                    <tr className="highlighted-row">
                                        <td>6.5</td>
                                        <td>79–93</td>
                                        <td>162–168</td>
                                        <td>B2 First (FCE)</td>
                                        <td>Sarjana / Magister</td>
                                    </tr>
                                    <tr className="highlighted-row">
                                        <td>6</td>
                                        <td>60–78</td>
                                        <td>154–161</td>
                                        <td>B2 First (FCE)</td>
                                        <td>Sarjana</td>
                                    </tr>
                                    <tr>
                                        <td>5.5</td>
                                        <td>46–59</td>
                                        <td>147–153</td>
                                        <td>B2 First (FCE)</td>
                                        <td>Diploma</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>35–45</td>
                                        <td>140–146</td>
                                        <td>B1 Preliminary (PET)</td>
                                        <td>Diploma</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: 'var(--neutral-400)', marginTop: 'var(--space-2)' }}>
                            *Rentang skor yang baik untuk IELTS, TOEFL, dan Cambridge berada pada area berwarna.
                        </p>

                        <p style={{ marginTop: 'var(--space-8)' }}>
                            Persiapan IELTS/TOEFL tidak harus rumit. Fortrust menyediakan sumber belajar, rencana studi yang dipersonalisasi, dan dukungan berkelanjutan agar kamu meraih skor terbaik. Hubungi Fortrust hari ini dan dekatkan dirimu pada mimpi akademik!
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