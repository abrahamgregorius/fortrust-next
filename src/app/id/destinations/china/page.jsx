"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    Briefcase,
    Building2,
    CalendarDays,
    FileCheck2,
    GraduationCap,
    LayoutGrid,
    Wallet,
} from "lucide-react";
import { useState } from "react";

export default function China() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Ringkasan", icon: <LayoutGrid /> },
        { id: "requirements", label: "Persyaratan", icon: <FileCheck2 /> },
        { id: "costs", label: "Biaya", icon: <Wallet /> },
        { id: "work", label: "Hak Bekerja", icon: <Briefcase /> },
        { id: "scholarships", label: "Beasiswa", icon: <GraduationCap /> },
        { id: "partners", label: "Mitra", icon: <Building2 /> },
        { id: "intakes", label: "Jadwal Masuk", icon: <CalendarDays /> },
    ];

    return (
        <>
            <Navbar />

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Belajar di Pusat Ekonomi Dunia</h1>
                        <p>
                            Rasakan beasiswa kelas dunia, imersi ekonomi terbesar, dan penjelajahan budaya—semua dalam satu perjalanan transformasional di Tiongkok.
                        </p>
                    </div>
                </section>

                <section className="destination-details">
                    <div className="container destination-details__container">
                        <div className="tabs-nav">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-link ${activeTab === tab.id ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        <div className="tab-content">
                            {activeTab === "overview" && (
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <img src="/destinations/banners/China.jpg" className="content__banner" alt="Banner Tiongkok" />
                                        <h2>Mengapa Kuliah di Tiongkok?</h2>
                                        <p>
                                            Dengan peluang beasiswa yang sangat luas, imersi langsung di ekonomi terbesar kedua dunia, keunggulan bahasa, dan pembelajaran budaya aktif, Tiongkok memberi mahasiswa internasional pengalaman yang melampaui program studi konvensional.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Keunggulan Utama Kuliah di Tiongkok</h3>
                                        <ul>
                                            <li>
                                                <strong>Akses ke Ekonomi Terbesar & Paling Dinamis:</strong> Ekspos langsung ke manufaktur global, teknologi, dan jaringan bisnis internasional.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Kelas Dunia untuk Berbagai Bidang:</strong> Persentase beasiswa penuh lebih tinggi termasuk untuk STEM & bisnis, dengan kompetisi lebih ramah dibanding negara Barat.
                                            </li>
                                            <li>
                                                <strong>Keunggulan Bahasa Mandarin:</strong> Pelatihan bahasa intensif sering disubsidi kampus—nilai tambah besar di pasar kerja global.
                                            </li>
                                            <li>
                                                <strong>Imersi Budaya yang Unik:</strong> Peradaban 5.000 tahun dengan tradisi kedokteran, filsafat, dan ilmu yang masih hidup di kehidupan mahasiswa.
                                            </li>
                                            <li>
                                                <strong>Program STEM, AI, & Teknik Pionir:</strong> Universitas bermitra langsung dengan Baidu, ByteDance, DJI—akses ke laboratorium teknologi masa depan.
                                            </li>
                                            <li>
                                                <strong>Biaya Studi & Hidup Terjangkau:</strong> Sering kurang dari separuh biaya program serupa di negara Barat.
                                            </li>
                                            <li>
                                                <strong>Gerbang Karier Asia Pasifik:</strong> Masuk dalam jejaring pendidikan dan bisnis lintas negara di pusat ekonomi abad ke-21.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Mengenal Tier Universitas: 211, 985, & Double First Class</h3>
                                        <p>
                                            Kategori ini menunjukkan kualitas, prestise, dan inisiatif strategis pemerintah untuk meningkatkan daya saing pendidikan tinggi Tiongkok.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Universitas 211:</strong> Sekitar 100 universitas menerima pendanaan khusus untuk meningkatkan mutu pendidikan & riset.
                                            </li>
                                            <li>
                                                <strong>Universitas 985:</strong> Subkelompok elit dari 211 dengan target setara institusi top global.
                                            </li>
                                            <li>
                                                <strong>Double First Class:</strong> Inisiatif terbaru membangun universitas & disiplin kelas dunia secara dinamis dan selektif.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Kuliah di Tiongkok</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Institusi Utama</th>
                                                        <th>Keunggulan Kota</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Beijing</td>
                                                        <td>Tsinghua University, Peking University</td>
                                                        <td>Pusat sejarah & budaya; hub teknologi inovatif</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>Fudan University, Shanghai Jiao Tong University</td>
                                                        <td>Nuansa kosmopolitan; jaringan bisnis global</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>Sun Yat-sen University</td>
                                                        <td>Gerbang Asia Tenggara; biaya hidup terjangkau</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>Zhejiang University</td>
                                                        <td>Lingkungan indah; ekosistem teknologi kuat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>Sichuan University</td>
                                                        <td>Kuliner unik; gaya hidup santai; berkembang cepat</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "requirements" && (
                                <div id="requirements" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persyaratan Masuk Umum</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Sarjana (S1)</h3>
                                        <ul>
                                            <li>
                                                <strong>Akademik:</strong> Transkrip resmi sekolah menengah dengan nilai baik (60–80% tergantung tier).
                                            </li>
                                            <li>
                                                <strong>Bahasa:</strong> Program berbahasa Inggris: IELTS 6,5+/TOEFL 80–90+. Program Mandarin: HSK Level 4.
                                            </li>
                                            <li>
                                                <strong>Lainnya:</strong> Ujian masuk atau wawancara untuk program kompetitif.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Magister (S2)</h3>
                                        <ul>
                                            <li>
                                                <strong>Akademik:</strong> Gelar S1 relevan dengan IPK ≥3,0/4,0.
                                            </li>
                                            <li>
                                                <strong>Bahasa:</strong> Inggris: IELTS 6,5–7,0 / TOEFL 90–100+. Mandarin: HSK Level 5.
                                            </li>
                                            <li>
                                                <strong>Dokumen:</strong> ≥2 surat rekomendasi, Statement of Purpose, proposal riset (jika berbasis riset).
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Doktor (S3)</h3>
                                        <ul>
                                            <li>
                                                <strong>Akademik:</strong> Gelar S2 terkait dengan latar riset kuat.
                                            </li>
                                            <li>
                                                <strong>Bahasa:</strong> IELTS 6,5–7,0+ / TOEFL 90–100+. Mandarin: HSK Level 5 atau lebih tinggi.
                                            </li>
                                            <li>
                                                <strong>Dokumen:</strong> Proposal riset rinci, 3 rekomendasi, bukti publikasi.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup di Tiongkok</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Tahunan & Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>S1 (per tahun)</th>
                                                        <th>S2 (per tahun)</th>
                                                        <th>Hidup (per bulan)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Beijing</td>
                                                        <td>$3,500 – $5,000</td>
                                                        <td>$4,000 – $7,500</td>
                                                        <td>$700 – $1,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$4,500 – $8,000</td>
                                                        <td>$800 – $1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>$2,500 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$500 – $1,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$600 – $1,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>$2,200 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$400 – $900</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "work" && (
                                <div id="work" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Hak Bekerja Mahasiswa</h2>
                                        <p>
                                            Kebijakan yang terus berkembang memungkinkan mahasiswa internasional bekerja paruh waktu dan mengeksplor jalur karier setelah lulus.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Kerja Paruh Waktu:</strong> Hingga 20 jam/minggu saat semester (penuh waktu saat libur) setelah persetujuan kampus & Public Security Bureau (PSB).
                                            </li>
                                            <li>
                                                <strong>Kerja Pasca Studi:</strong> Lulusan yang mendapat kontrak kerja dapat mengubah visa pelajar menjadi visa kerja (Z visa).
                                            </li>
                                        </ul>
                                        <p>
                                            Lulusan universitas Tiongkok sering mendapat nilai tambah karena kualifikasi diakui dan kemampuan bahasa Mandarin.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Tiongkok</h2>
                                        <p>
                                            Tiongkok menawarkan pendanaan luas sehingga pendidikan berkualitas semakin terjangkau. Program berbahasa Inggris umumnya tidak mensyaratkan Mandarin.
                                        </p>
                                        <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Jenis Beasiswa</h3>
                                        <ul>
                                            <li>
                                                <strong>Chinese Government Scholarship (CSC):</strong> Menanggung penuh: kuliah, akomodasi, tunjangan hidup, asuransi.
                                            </li>
                                            <li>
                                                <strong>Confucius Institute Scholarship:</strong> Untuk studi bahasa & budaya Mandarin.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Pemerintah Daerah:</strong> Kota besar seperti Beijing & Shanghai menawarkan tuition waiver + tunjangan.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Universitas:</strong> Tsinghua, Peking dan lainnya memberi penghargaan berbasis prestasi & potensi riset.
                                            </li>
                                            <li>
                                                <strong>Belt and Road Scholarship:</strong> Untuk mahasiswa dari negara partisipan mendukung pertukaran global.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Institusi Mitra Kami</h2>
                                        <p>Kami bermitra dengan universitas elit Tiongkok (211, 985, Double First Class).</p>
                                        <div className="partners-grid">
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Tsinghua+U" alt="Tsinghua University" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Peking+U" alt="Peking University" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Fudan+U" alt="Fudan University" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=SJTU" alt="Shanghai Jiao Tong University" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Zhejiang+U" alt="Zhejiang University" />
                                            </div>
                                        </div>
                                        <p className="partners__many">...dan banyak lagi</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Masuk Utama</h2>
                                        <p>Universitas di Tiongkok umumnya memiliki dua intake utama tiap tahun; Fall paling populer untuk program penuh.</p>
                                        <ul>
                                            <li>
                                                <strong>Fall (September):</strong> Pendaftaran Januari–Juni; pilihan program terluas.
                                            </li>
                                            <li>
                                                <strong>Spring (Maret):</strong> Pendaftaran September–Desember tahun sebelumnya; lebih terbatas—opsi bagi yang terlambat.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Tiongkok?</h2>
                        <p>Konselor ahli kami siap membimbing setiap langkah Anda.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Bicara dengan Konselor Gratis</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
