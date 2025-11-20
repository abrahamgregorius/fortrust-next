import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Language() {
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
                            Bukti kemampuan Bahasa Inggris sering menjadi syarat wajib saat berencana kuliah atau bekerja di luar negeri. Dua tes yang paling diakui secara global adalah IELTS dan TOEFL.
                        </p>
                        <p>
                            Keduanya diterima ribuan institusi dunia namun memiliki pengalaman ujian dan sistem penilaian berbeda. Berikut perbedaan utama, keunggulan, dan konversi skor termasuk ujian Cambridge.
                        </p>

                        <h3>Apa itu IELTS?</h3>
                        <p>
                            IELTS menilai kemampuan melalui empat bagian: Listening, Reading, Writing, Speaking. Ada versi Academic dan General Training. Digunakan untuk masuk universitas, imigrasi, dan registrasi profesional di UK, Australia, Kanada, Selandia Baru, dan semakin banyak di AS.
                        </p>

                        <h3>Apa itu TOEFL?</h3>
                        <p>
                            TOEFL adalah tes kemampuan Bahasa Inggris yang juga sangat diakui; versi paling populer adalah iBT yang menilai Reading, Listening, Speaking, dan Writing.
                        </p>

                        <h3>Perbedaan Utama IELTS & TOEFL</h3>
                        <p>Memahami perbedaan membantu memilih tes yang sesuai kekuatan dan tujuan.</p>
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
                                        <td>Tatap muka</td>
                                        <td>Lewat mikrofon</td>
                                    </tr>
                                    <tr>
                                        <td>Jenis Soal</td>
                                        <td>Beragam</td>
                                        <td>Mayoritas pilihan ganda</td>
                                    </tr>
                                    <tr>
                                        <td>Durasi</td>
                                        <td>±3 jam</td>
                                        <td>±3 jam</td>
                                    </tr>
                                    <tr>
                                        <td>Hasil Tersedia</td>
                                        <td>±13 hari</td>
                                        <td>±6 hari</td>
                                    </tr>
                                    <tr>
                                        <td>Biaya</td>
                                        <td>USD 210–275</td>
                                        <td>USD 245–275</td>
                                    </tr>
                                    <tr>
                                        <td>Masa Berlaku</td>
                                        <td>2 tahun</td>
                                        <td>2 tahun</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 style={{marginTop: 'var(--space-8)'}}>Kapan Sebaiknya Mengambil Tes?</h3>
                        <p>
                            Ambil tes di semester pertama kelas akhir SMA atau beberapa bulan sebelum tenggat pendaftaran universitas agar ada waktu menerima hasil dan retake bila perlu.
                        </p>

                        <h3>Format Ujian IELTS dan TOEFL</h3>
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


                        <h3 style={{marginTop: 'var(--space-8)'}}>Konversi Skor IELTS, TOEFL, Cambridge</h3>
                        <p>Pemilihan tes juga bergantung pada konversi skor antar ujian. Berikut tabel yang umum dipakai:</p>
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
                        <p style={{fontSize: '0.9rem', color: 'var(--neutral-400)', marginTop: 'var(--space-2)'}}>
                            *Area berwarna menunjukkan rentang skor yang baik.
                        </p>

                        <p style={{marginTop: 'var(--space-8)'}}>
                            Persiapan tes tidak harus sulit. Fortrust siap dengan sumber belajar, rencana personal, dan dukungan untuk bantu capai skor terbaik.
                        </p>

                        <div style={{textAlign: 'center', marginTop: 'var(--space-12)'}}>
                            <a href="/contact" className="btn btn--primary btn--large">Konsultasi Gratis</a>
                        </div>

                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}