"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    Award,
    BookOpen,
    Calculator,
    LayoutGrid,
    Star,
} from "lucide-react";
import { useState } from "react";

export default function StandardizedID() {
    const [activeTab, setActiveTab] = useState("sat");

    const tabs = [
        { id: "sat", label: "SAT", icon: <BookOpen /> },
        { id: "gmat", label: "GMAT", icon: <Calculator /> },
        { id: "cambridge", label: "Cambridge Curriculum Exams", icon: <Award /> },
        { id: "csca", label: "China Scholastic Competency Assessment", icon: <Star /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Persiapan Tes Standar: SAT, GMAT, Cambridge Curriculum Exams, China Scholastic Competency Assessment
                        </h1>
                        <p>
                            Raih skor kompetitif pada tes standar dengan strategi persiapan terbukti dan bimbingan ahli kami.
                        </p>
                    </div>
                </section>

                <section className="destination-details">
                    <div className="container destination-details__container">
                        {/* Tabs Nav */}
                        <div className="tabs-nav">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-link ${activeTab === tab.id ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="tab-content">
                            {activeTab === "sat" && (
                                <div id="sat" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persiapan SAT</h2>
                                        <p>
                                            SAT (Scholastic Assessment Test) adalah tes standar yang banyak digunakan untuk penerimaan perguruan tinggi di Amerika Serikat dan semakin diterima oleh universitas di seluruh dunia. Skor SAT yang kuat dapat membuka pintu ke universitas top dan peluang beasiswa yang signifikan.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Struktur Tes SAT (Digital SAT)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Bagian</th>
                                                        <th>Durasi</th>
                                                        <th>Pertanyaan</th>
                                                        <th>Rentang Skor</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading and Writing</td>
                                                        <td>64 menit (2 modul)</td>
                                                        <td>54 pertanyaan</td>
                                                        <td>200-800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Math</td>
                                                        <td>70 menit (2 modul)</td>
                                                        <td>44 pertanyaan</td>
                                                        <td>200-800</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p><strong>Total Waktu Tes:</strong> 2 jam 14 menit</p>
                                        <p><strong>Rentang Skor Total:</strong> 400-1600</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Benchmark Skor SAT</h3>
                                        <ul>
                                            <li><strong>1500-1600:</strong> Ivy League dan universitas top 10</li>
                                            <li><strong>1400-1490:</strong> Universitas top 20-50</li>
                                            <li><strong>1300-1390:</strong> Universitas bagus, beasiswa prestasi</li>
                                            <li><strong>1200-1290:</strong> Sebagian besar universitas negeri</li>
                                            <li><strong>1000-1190:</strong> Community college, beberapa universitas</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Apa yang Diuji di SAT?</h3>
                                        <p><strong>Reading and Writing:</strong></p>
                                        <ul>
                                            <li>Pemahaman membaca berbagai jenis teks</li>
                                            <li>Kosakata dalam konteks</li>
                                            <li>Tata bahasa dan penggunaan</li>
                                            <li>Retorika dan argumentasi</li>
                                            <li>Interpretasi data dari tabel dan grafik</li>
                                        </ul>
                                        
                                        <p><strong>Math:</strong></p>
                                        <ul>
                                            <li>Aljabar (persamaan linear, sistem, fungsi)</li>
                                            <li>Matematika Lanjutan (kuadrat, eksponensial, persamaan kompleks)</li>
                                            <li>Problem-Solving dan Analisis Data (rasio, persentase, statistik)</li>
                                            <li>Geometri dan Trigonometri</li>
                                            <li>Kalkulator diizinkan untuk beberapa bagian</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Program Persiapan SAT Kami</h3>
                                        <p><strong>Durasi Kursus:</strong> 8-12 minggu</p>
                                        <p><strong>Jadwal Kelas:</strong> Batch akhir pekan dan hari kerja tersedia</p>
                                        <p><strong>Fitur Program:</strong></p>
                                        <ul>
                                            <li>Tes diagnostik untuk menilai level saat ini</li>
                                            <li>Cakupan komprehensif semua bagian tes</li>
                                            <li>Materi latihan resmi College Board</li>
                                            <li>Lembar rumus matematika dan panduan referensi cepat</li>
                                            <li>Teknik kecepatan membaca dan pemahaman</li>
                                            <li>Aturan tata bahasa dan strategi menulis</li>
                                            <li>Tes latihan lengkap mingguan</li>
                                            <li>Jaminan peningkatan skor (berlaku syarat)</li>
                                            <li>Bimbingan aplikasi universitas</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Kapan Anda Harus Mengambil SAT?</h3>
                                        <p>
                                            Idealnya, siswa harus mengambil SAT di tahun junior mereka (kelas 11) dengan opsi untuk mengambil ulang di tahun senior (kelas 12). Tes ditawarkan 7 kali per tahun secara internasional. Kami merekomendasikan:
                                        </p>
                                        <ul>
                                            <li>Percobaan pertama: Maret atau Mei tahun junior</li>
                                            <li>Percobaan kedua: Agustus atau Oktober tahun senior (jika diperlukan)</li>
                                            <li>Berikan 3-6 bulan persiapan sebelum tanggal tes</li>
                                            <li>Daftar 6-8 minggu sebelum tanggal tes</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "gmat" && (
                                <div id="gmat" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persiapan GMAT</h2>
                                        <p>
                                            Graduate Management Admission Test (GMAT) diperlukan untuk penerimaan ke sebagian besar program MBA dan master bisnis di seluruh dunia. Skor GMAT yang kompetitif sangat penting untuk sekolah bisnis top dan dapat secara signifikan meningkatkan peluang beasiswa.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Struktur GMAT Focus Edition</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Bagian</th>
                                                        <th>Durasi</th>
                                                        <th>Pertanyaan</th>
                                                        <th>Rentang Skor</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Quantitative Reasoning</td>
                                                        <td>45 menit</td>
                                                        <td>21 pertanyaan</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Verbal Reasoning</td>
                                                        <td>45 menit</td>
                                                        <td>23 pertanyaan</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Data Insights</td>
                                                        <td>45 menit</td>
                                                        <td>20 pertanyaan</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p><strong>Total Waktu Tes:</strong> 2 jam 15 menit (plus istirahat)</p>
                                        <p><strong>Rentang Skor Total:</strong> 205-805</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Benchmark Skor GMAT</h3>
                                        <ul>
                                            <li><strong>705-805:</strong> Harvard, Stanford, Wharton (program MBA top 5)</li>
                                            <li><strong>655-704:</strong> Sekolah bisnis top 10-20</li>
                                            <li><strong>605-654:</strong> Sekolah bisnis top 30-50</li>
                                            <li><strong>555-604:</strong> Sekolah bisnis bagus, program regional</li>
                                            <li><strong>505-554:</strong> Persyaratan minimum sebagian besar sekolah bisnis</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Konten Tes GMAT</h3>
                                        <p><strong>Quantitative Reasoning:</strong></p>
                                        <ul>
                                            <li>Problem Solving</li>
                                            <li>Data Sufficiency (unik untuk GMAT)</li>
                                            <li>Aritmatika, Aljabar, Geometri</li>
                                            <li>Kalkulator tidak diizinkan</li>
                                        </ul>
                                        
                                        <p><strong>Verbal Reasoning:</strong></p>
                                        <ul>
                                            <li>Reading Comprehension</li>
                                            <li>Critical Reasoning (argumen logis)</li>
                                            <li>Sentence Correction (tata bahasa)</li>
                                        </ul>

                                        <p><strong>Data Insights:</strong></p>
                                        <ul>
                                            <li>Data Sufficiency</li>
                                            <li>Multi-Source Reasoning</li>
                                            <li>Table Analysis</li>
                                            <li>Graphics Interpretation</li>
                                            <li>Two-Part Analysis</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Program Persiapan GMAT Kami</h3>
                                        <p><strong>Durasi Kursus:</strong> 10-16 minggu</p>
                                        <p><strong>Jadwal Kelas:</strong> Opsi sore dan akhir pekan untuk profesional bekerja</p>
                                        <p><strong>Apa yang Anda Dapatkan:</strong></p>
                                        <ul>
                                            <li>Materi latihan dan software GMAT resmi</li>
                                            <li>Tinjauan konsep komprehensif untuk semua bagian</li>
                                            <li>Pelatihan Data Sufficiency khusus</li>
                                            <li>Teknik matematika mental (strategi tanpa kalkulator)</li>
                                            <li>Framework critical reasoning</li>
                                            <li>Aturan tata bahasa sentence correction</li>
                                            <li>Strategi tes adaptif komputer</li>
                                            <li>6+ tes simulasi adaptif lengkap</li>
                                            <li>Pelacakan kinerja dan analitik</li>
                                            <li>Bimbingan aplikasi MBA</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Siapa yang Harus Mengambil GMAT?</h3>
                                        <ul>
                                            <li>Profesional yang mencari gelar MBA</li>
                                            <li>Mereka yang melamar program Master in Management</li>
                                            <li>Kandidat untuk master bisnis khusus (Keuangan, Pemasaran, dll.)</li>
                                            <li>Biasanya 2-5 tahun pengalaman kerja direkomendasikan</li>
                                            <li>Berlaku selama 5 tahun dari tanggal tes</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "cambridge" && (
                                <div id="cambridge" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persiapan Cambridge Curriculum Exams</h2>
                                        <p>
                                            Cambridge International Examinations menawarkan kurikulum dan jalur penilaian yang komprehensif yang diakui oleh universitas dan majikan di seluruh dunia. Dari tingkat Primary hingga Pre-University, kualifikasi Cambridge memberikan dasar yang kuat untuk kesuksesan akademik dan peluang global.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Level Penilaian Cambridge</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Level</th>
                                                        <th>Kelompok Usia</th>
                                                        <th>Tahap</th>
                                                        <th>Mata Pelajaran Utama</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Primary Checkpoint</td>
                                                        <td>11 tahun (Kelas 6)</td>
                                                        <td>Akhir Sekolah Dasar</td>
                                                        <td>Bahasa Inggris, Matematika, Sains</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lower Secondary Checkpoint</td>
                                                        <td>14 tahun (Kelas 9)</td>
                                                        <td>Akhir Sekolah Menengah Bawah</td>
                                                        <td>Bahasa Inggris, Matematika, Sains</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IGCSE (O-Level)</td>
                                                        <td>16 tahun (Kelas 10-11)</td>
                                                        <td>Sekolah Menengah</td>
                                                        <td>8-10 mata pelajaran</td>
                                                    </tr>
                                                    <tr>
                                                        <td>A-Level</td>
                                                        <td>18 tahun (Kelas 12-13)</td>
                                                        <td>Pra-Universitas</td>
                                                        <td>3-4 mata pelajaran</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Mengapa Memilih Kurikulum Cambridge?</h3>
                                        <ul>
                                            <li>
                                                <strong>Pengakuan Internasional:</strong> Diterima oleh universitas di seluruh dunia
                                            </li>
                                            <li>
                                                <strong>Standar Ketat:</strong> Benchmark akademik yang konsisten secara global
                                            </li>
                                            <li>
                                                <strong>Jalur ke A-Levels:</strong> Rute langsung ke persiapan universitas
                                            </li>
                                            <li>
                                                <strong>Pengembangan Keterampilan:</strong> Fokus pada pemikiran kritis dan pemecahan masalah
                                            </li>
                                            <li>
                                                <strong>Penerimaan Universitas:</strong> Hasil A-Level digunakan untuk masuk universitas langsung
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Struktur Ujian Cambridge</h3>
                                        <p><strong>Bahasa Inggris:</strong></p>
                                        <ul>
                                            <li>Pemahaman membaca</li>
                                            <li>Menulis (naratif, persuasif, informatif)</li>
                                            <li>Penggunaan dan tata bahasa dalam konteks</li>
                                        </ul>
                                        
                                        <p><strong>Matematika:</strong></p>
                                        <ul>
                                            <li>Bilangan dan perhitungan</li>
                                            <li>Aljabar dan deret</li>
                                            <li>Geometri dan pengukuran</li>
                                            <li>Penanganan data dan probabilitas</li>
                                        </ul>

                                        <p><strong>Sains:</strong></p>
                                        <ul>
                                            <li>Biologi (proses kehidupan, sel, ekosistem)</li>
                                            <li>Kimia (materi, reaksi, tabel periodik)</li>
                                            <li>Fisika (gaya, energi, listrik)</li>
                                            <li>Penyelidikan dan investigasi ilmiah</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Persiapan Kurikulum Cambridge Kami</h3>
                                        <p><strong>Program yang Tersedia:</strong></p>
                                        <ul>
                                            <li>Persiapan Primary Checkpoint (Kelas 5-6)</li>
                                            <li>Lower Secondary Checkpoint (Kelas 8-9)</li>
                                            <li>Persiapan IGCSE (Kelas 9-11)</li>
                                            <li>Persiapan A-Level (Kelas 11-13)</li>
                                        </ul>

                                        <p><strong>Fitur Program:</strong></p>
                                        <ul>
                                            <li>Rencana pelajaran selaras dengan kurikulum</li>
                                            <li>Soal dan skema penilaian sebelumnya</li>
                                            <li>Materi studi khusus mata pelajaran</li>
                                            <li>Penilaian kemajuan reguler</li>
                                            <li>Teknik ujian dan manajemen waktu</li>
                                            <li>Bimbingan individual per mata pelajaran tersedia</li>
                                            <li>Ujian simulasi dalam kondisi ujian sebenarnya</li>
                                            <li>Workshop revisi sebelum ujian sebenarnya</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Pengakuan Universitas</h3>
                                        <p>
                                            A-Level Cambridge diakui oleh universitas di seluruh dunia dan sering dianggap setara dengan:
                                        </p>
                                        <ul>
                                            <li>Diploma SMA AS + kursus AP</li>
                                            <li>Diploma International Baccalaureate (IB)</li>
                                            <li>Berbagai kualifikasi sekolah menengah nasional</li>
                                        </ul>
                                        <p>
                                            Siswa dengan hasil A-Level yang kuat (nilai A*-B) dapat diterima di universitas top termasuk Oxford, Cambridge, Imperial, UCL, sekolah Ivy League AS, dan institusi bergengsi lainnya di seluruh dunia.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "csca" && (
                                <div id="csca" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persiapan China Scholastic Competency Assessment</h2>
                                        <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#f8f9fa', borderRadius: '8px', margin: '2rem 0' }}>
                                            <h3 style={{ color: '#6c757d', marginBottom: '1rem' }}>Konten Sedang Dalam Proses Pembaruan</h3>
                                            <p style={{ color: '#6c757d', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                                                Kami sedang menyiapkan konten lengkap untuk China Scholastic Competency Assessment (CSCA).
                                            </p>
                                            <p style={{ color: '#6c757d', fontSize: '1rem' }}>
                                                Silakan hubungi kami untuk informasi lebih lanjut tentang persiapan CSCA.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Unggul di Tes Standar Anda?</h2>
                        <p>
                            Biarkan strategi terbukti dan bimbingan ahli kami membantu Anda mencapai skor target.
                        </p>
                        <a
                            href="/id/contact"
                            className="btn btn--primary btn--large"
                        >
                            Pesan Konsultasi Gratis Anda
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}