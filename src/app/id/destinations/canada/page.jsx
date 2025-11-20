"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {
    Briefcase,
    Building2,
    CalendarDays,
    FileCheck2,
    GraduationCap,
    LayoutGrid,
    Wallet,
} from "lucide-react";

export default function Canada() {
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
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Kuliah di Kanada: Buka Potensi Maksimalmu</h1>
                        <p>
                            Pendidikan berkualitas, pengalaman kerja berbayar, kesehatan terjamin, dan jalur imigrasi yang jelas dalam satu paket.
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
                            {activeTab === "overview" && (
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <img src="/destinations/banners/Canada.png" className="content__banner" alt="" />
                                        <h2>Mengapa Kuliah di Kanada</h2>
                                        <p>
                                            Kanada menawarkan lebih dari sekadar pendidikan kelas dunia: kerja berbayar, layanan kesehatan kuat, dan jalur jelas menuju permanent residency—ideal bagi pelajar ambisius.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Keunggulan Kuliah di Kanada</h3>
                                        <ul>
                                            <li>
                                                <strong>PGWP Terbuka Hingga 3 Tahun:</strong> Kerja setelah lulus tanpa batas pemberi kerja, akses jalur PR melalui Express Entry & PNP.
                                            </li>
                                            <li>
                                                <strong>Pendidikan Menambah Poin Imigrasi:</strong> Studi di Kanada menambah poin CRS dan membuka jalur CEC tanpa sponsor.
                                            </li>
                                            <li>
                                                <strong>Program Co-op Berbayar:</strong> Kombinasi semester akademik dan kerja penuh waktu terstruktur (8–20 bulan pengalaman industri).
                                            </li>
                                            <li>
                                                <strong>Kepemimpinan Riset Global:</strong> Unggul di AI, sains iklim, dan clean tech (Vector Institute, MILA).
                                            </li>
                                            <li>
                                                <strong>Asuransi Kesehatan Provinsi:</strong> Banyak provinsi memberi perlindungan gratis atau subsidi setelah masa tunggu.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Kuliah di Kanada</h3>
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
                                                        <td>Toronto</td>
                                                        <td>University of Toronto, York University</td>
                                                        <td>Multicultural hub, diverse jobs, networking</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>UBC, Simon Fraser University</td>
                                                        <td>
                                                            Green economy, major tech and film industry, high
                                                            quality of life
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>McGill, Université de Montréal</td>
                                                        <td>
                                                            Affordable tuition, bilingual advantage, vibrant
                                                            culture
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>University of Ottawa, Carleton University</td>
                                                        <td>Safe, government internships, bilingual city</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>University of Calgary, SAIT</td>
                                                        <td>
                                                            High starting salaries, affordable rent, no provincial
                                                            sales tax
                                                        </td>
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
                                                <strong>Akademik:</strong> Lulus SMA (Grade 12 atau setara) dengan nilai rata-rata 65–75%+.
                                            </li>
                                            <li>
                                                <strong>Bahasa:</strong> Inggris (IELTS 6,5+, TOEFL 80–90+) atau Prancis (TEF/TCF).
                                            </li>
                                            <li>
                                                <strong>Lainnya:</strong> Portofolio / esai tambahan untuk program kompetitif.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Magister (S2)</h3>
                                        <ul>
                                            <li>
                                                <strong>Akademik:</strong> Gelar S1 relevan, IPK minimal 3,0/4,0.
                                            </li>
                                            <li>
                                                <strong>Dokumen:</strong> ≥2 surat rekomendasi, SOP, proposal riset (program tesis).
                                            </li>
                                            <li>
                                                <strong>Bahasa:</strong> IELTS 6,5–7,0; TOEFL 90–100+ atau setara Prancis.
                                            </li>
                                            <li>
                                                <strong>Lainnya:</strong> GRE/GMAT untuk bisnis/ekonomi.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Doktor (S3)</h3>
                                        <ul>
                                            <li>
                                                <strong>Akademik:</strong> Gelar S2 terkait dengan rekam riset kuat.
                                            </li>
                                            <li>
                                                <strong>Dokumen:</strong> Proposal riset rinci, 3 rekomendasi, transkrip lengkap.
                                            </li>
                                            <li>
                                                <strong>Lainnya:</strong> Publikasi riset dan persetujuan supervisor sering diperlukan.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup di Kanada</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Kuliah Tahunan (Internasional)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Sarjana (S1)</th>
                                                        <th>Pascasarjana (S2)</th>
                                                        <th>Diploma</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Toronto</td>
                                                        <td>C$25,000 – C$35,000</td>
                                                        <td>C$20,000 – C$40,000+</td>
                                                        <td>C$14,000 – C$20,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>C$23,000 – C$35,000</td>
                                                        <td>C$20,000 – C$38,000</td>
                                                        <td>C$13,000 – C$18,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>C$20,000 – C$27,000</td>
                                                        <td>C$18,000 – C$30,000</td>
                                                        <td>C$12,000 – C$17,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>C$22,000 – C$30,000</td>
                                                        <td>C$18,000 – C$32,000</td>
                                                        <td>C$13,000 – C$18,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>C$20,000 – C$28,000</td>
                                                        <td>C$17,000 – C$30,000</td>
                                                        <td>C$12,000 – C$17,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Hunian (Berbagi)</th>
                                                        <th>Makanan, Transport, Utilitas</th>
                                                        <th>Total Bulanan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Toronto</td>
                                                        <td>C$900 – C$1,500</td>
                                                        <td>C$600 – C$800</td>
                                                        <td>C$1,500 – C$2,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>C$850 – C$1,400</td>
                                                        <td>C$550 – C$700</td>
                                                        <td>C$1,400 – C$2,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>C$500 – C$900</td>
                                                        <td>C$500 – C$600</td>
                                                        <td>C$1,000 – C$1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>C$700 – C$1,100</td>
                                                        <td>C$500 – C$700</td>
                                                        <td>C$1,200 – C$1,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>C$600 – C$1,000</td>
                                                        <td>C$500 – C$600</td>
                                                        <td>C$1,100 – C$1,600</td>
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
                                        <h2>Hak Bekerja untuk Mahasiswa</h2>
                                        <p>
                                            Perubahan terbaru membuat studi di Kanada semakin menarik:
                                        </p>
                                        <ul>
                                            <li>
                                                Mahasiswa internasional dapat bekerja hingga <strong>24 jam/minggu</strong> saat semester (sebelumnya 20 jam).
                                            </li>
                                            <li>
                                                <strong>Pekerjaan penuh waktu</strong> diizinkan saat libur akademik.
                                            </li>
                                        </ul>
                                        <p>
                                            Dengan biaya kuliah lebih rendah dan upah minimum C$15–17/jam di banyak provinsi, banyak mahasiswa dapat menutup sebagian besar biaya hidup dari kerja paruh waktu.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Kanada</h2>
                                        <p>
                                            Kanada menawarkan banyak beasiswa untuk semua jenjang. Banyak yang tutup 8–12 bulan sebelum mulai—rencanakan lebih awal!
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Beasiswa Penting untuk Intake 2026</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Penyedia / Universitas</th>
                                                        <th>Nama Beasiswa</th>
                                                        <th>Tingkat</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>University of Toronto</td>
                                                        <td>Lester B. Pearson International Scholarship</td>
                                                        <td>S1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of British Columbia</td>
                                                        <td>UBC International Scholars Program</td>
                                                        <td>S1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>McGill University</td>
                                                        <td>McGill Entrance Scholarships</td>
                                                        <td>S1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of Waterloo</td>
                                                        <td>International Master’s and Doctoral Awards</td>
                                                        <td>S2 / S3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Government of Canada</td>
                                                        <td>Vanier Canada Graduate Scholarships</td>
                                                        <td>S3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ontario Government</td>
                                                        <td>Ontario Graduate Scholarship (OGS)</td>
                                                        <td>S2 / S3</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Institusi Mitra Kami</h2>
                                        <p>
                                            Kami bermitra dengan banyak universitas dan college terkemuka di Kanada.
                                        </p>
                                        <div className="partners-grid">
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=U+of+Toronto"
                                                    alt="University of Toronto"
                                                />
                                            </div>
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=UBC"
                                                    alt="University of British Columbia"
                                                />
                                            </div>
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=McGill"
                                                    alt="McGill University"
                                                />
                                            </div>
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=Waterloo"
                                                    alt="University of Waterloo"
                                                />
                                            </div>
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=SFU"
                                                    alt="Simon Fraser University"
                                                />
                                            </div>
                                            <div className="partner-logo">
                                                <img
                                                    src="https://placehold.co/150x50/cccccc/000000?text=York+U"
                                                    alt="York University"
                                                />
                                            </div>
                                        </div>
                                        <p className="partners__many">...dan banyak lagi</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran & Intake</h2>
                                        <p>
                                            Sesuaikan aplikasi dengan tanggal mulai yang diinginkan. Intake Fall (September) paling umum.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Tahap</th>
                                                        <th>Fall (Mulai Sep)</th>
                                                        <th>Winter (Mulai Jan)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>18–24 months before</strong></td>
                                                        <td>Riset program & universitas.</td>
                                                        <td>Mulai riset (program lebih sedikit).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>12–16 months before</strong></td>
                                                        <td>Persiapan tes bahasa & kumpulkan dokumen.</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>8–12 months before</strong></td>
                                                        <td>Kirim aplikasi (Okt–Feb).</td>
                                                        <td>Daftar (Mar–Sep S1, Jun–Okt S2/S3).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>4–6 months before</strong></td>
                                                        <td>Terima offer & ajukan study permit.</td>
                                                        <td>Finalisasi visa & persiapan.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Kanada?</h2>
                        <p>
                            Konselor ahli kami siap membimbing setiap langkah Anda.
                        </p>
                        <a
                            href="/contact"
                            className="btn btn--primary btn--large"
                        >
                            Bicara dengan Konselor Gratis
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}