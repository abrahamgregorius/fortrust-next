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

export default function Malaysia() {
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
                        <h1>Malaysia: Terjangkau & Diakui Secara Global</h1>
                        <p>Pusat pendidikan dinamis yang menggabungkan gelar berkualitas tinggi dan gaya hidup hemat.</p>
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
                                        <h2>Mengapa Kuliah di Malaysia?</h2>
                                        <p>Malaysia menawarkan keunggulan yang jarang ditemukan di negara lain—ideal bagi mahasiswa yang menghargai kualitas dan efisiensi biaya.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Keunggulan Utama Kuliah di Malaysia</h3>
                                        <ul>
                                            <li>
                                                <strong>Gelar Ganda dari Universitas Kelas Dunia:</strong> Dapatkan gelar universitas Inggris atau Australia (misal Monash, Nottingham) dengan biaya lebih rendah tanpa harus ke luar negeri.
                                            </li>
                                            <li>
                                                <strong>Pendidikan Berkualitas Terjangkau:</strong> Biaya kuliah sekitar USD 4.000–7.000/tahun + biaya hidup rendah membuat Anda bisa lulus tanpa menumpuk utang.
                                            </li>
                                            <li>
                                                <strong>Bahasa Inggris sebagai Bahasa Pengantar:</strong> Meminimalkan hambatan bahasa sambil tetap memungkinkan belajar Melayu & Mandarin untuk nilai strategis.
                                            </li>
                                            <li>
                                                <strong>Lingkungan Multikultural:</strong> Perpaduan budaya Melayu, Tionghoa, India meningkatkan kemampuan komunikasi lintas budaya.
                                            </li>
                                            <li>
                                                <strong>Lokasi Strategis di Asia Tenggara:</strong> Hub maskapai murah—mudah untuk eksplorasi, konferensi, dan networking regional.
                                            </li>
                                            <li>
                                                <strong>Peluang di Sektor Berkembang Pesat:</strong> Internship dan kerja di bidang teknologi, kesehatan, energi terbarukan makin banyak.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Kuliah</h3>
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
                                                        <td>Kuala Lumpur</td>
                                                        <td>University of Nottingham Malaysia, Sunway University</td>
                                                        <td>Ibu kota modern, keberagaman budaya, peluang karier luas.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Putrajaya</td>
                                                        <td>Heriot-Watt University Malaysia</td>
                                                        <td>Rapi, aman, arsitektur modern, ruang hijau terawat.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>NUMed (Newcastle Medicine Malaysia)</td>
                                                        <td>Biaya hidup hemat, akses cepat ke Singapura untuk magang lintas negara.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sarawak</td>
                                                        <td>Curtin University, Swinburne University</td>
                                                        <td>Budaya kaya & alam menakjubkan—ideal untuk pembelajaran praktis.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Selangor</td>
                                                        <td>Monash University Malaysia, Xiamen University</td>
                                                        <td>Ramah mahasiswa, dinamis, dekat pusat bisnis Kuala Lumpur.</td>
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
                                        <h2>Persyaratan Masuk</h2>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Program</th>
                                                        <th>Akademik</th>
                                                        <th>Bahasa</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Sarjana (S1)</strong></td>
                                                        <td>Lulus SMA dengan rata-rata 70–80%.</td>
                                                        <td>IELTS 5.5–6.0 / TOEFL iBT 60–78.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Magister (S2)</strong></td>
                                                        <td>Gelar S1 terkait; IPK min 3,0/4,0.</td>
                                                        <td>IELTS 6.0–6.5 / TOEFL iBT 79–90.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Doktor (S3)</strong></td>
                                                        <td>Gelar S2 dengan latar riset kuat.</td>
                                                        <td>IELTS ≥6.5 / TOEFL iBT ≥90.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup</h2>
                                        <p>Malaysia termasuk negara dengan biaya kuliah dan hidup paling terjangkau di Asia.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Biaya Kuliah (per tahun)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Sarjana (S1)</th>
                                                        <th>Magister (S2)</th>
                                                        <th>Diploma/Kolej</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 5,000 – 8,000</td>
                                                        <td>USD 2,500 – 4,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 3,500 – 6,000</td>
                                                        <td>USD 4,500 – 7,000</td>
                                                        <td>USD 2,200 – 3,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 3,200 – 5,500</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 2,000 – 3,500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Perkiraan Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Hunian (Berbagi)</th>
                                                        <th>Makan, Transport & Utilitas</th>
                                                        <th>Total Bulanan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 150 – 250</td>
                                                        <td>USD 215 – 340</td>
                                                        <td>USD 365 – 590</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 130 – 200</td>
                                                        <td>USD 195 – 300</td>
                                                        <td>USD 325 – 500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 120 – 180</td>
                                                        <td>USD 185 – 285</td>
                                                        <td>USD 305 – 465</td>
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
                                        <ul>
                                            <li>
                                                <strong>Kerja Paruh Waktu:</strong> Hingga 20 jam/minggu saat libur semester (minimal 7 hari) sesuai regulasi Imigrasi.
                                            </li>
                                            <li>
                                                <strong>Izin Kerja:</strong> Persetujuan Imigrasi Malaysia melalui universitas sebelum mulai bekerja.
                                            </li>
                                            <li>
                                                <strong>Pascastudi:</strong> Tidak ada visa kerja terbuka; perlu Employment Pass jika mendapat tawaran kerja penuh waktu.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Malaysia</h2>
                                        <p>Banyak beasiswa dari pemerintah & universitas membuka akses pendidikan bagi mahasiswa berbakat.</p>
                                        <a href="/contact" className="btn btn--primary" style={{ marginTop: 20 }}>Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Jenis Beasiswa Utama</h3>
                                        <ul>
                                            <li>
                                                <strong>Malaysia International Scholarship (MIS):</strong> Mendukung mahasiswa S2 berkinerja unggul (kuliah + tunjangan hidup).
                                            </li>
                                            <li>
                                                <strong>Beasiswa Universitas:</strong> Termasuk University of Malaya Excellence Award, Monash Malaysia Scholarships.
                                            </li>
                                            <li>
                                                <strong>Belt and Road Scholarship:</strong> Untuk mahasiswa negara inisiatif Belt & Road meliputi biaya kuliah dan biaya hidup.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Institusi Mitra Kami</h2>
                                        <p>Kami bermitra dengan universitas swasta papan atas dan kampus cabang internasional di Malaysia.</p>
                                        <div className="partners-grid">
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Monash+MY" alt="Monash University Malaysia" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Nottingham+MY" alt="University of Nottingham Malaysia" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Sunway" alt="Sunway University" />
                                            </div>
                                            <div className="partner-logo">
                                                <img src="https://placehold.co/150x50/cccccc/000000?text=Taylor's" alt="Taylor's University" />
                                            </div>
                                        </div>
                                        <p className="partners__many">...dan banyak lagi</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran</h2>
                                        <p>Dua intake utama tersedia; persiapkan lebih awal untuk visa & akomodasi.</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Intake</th>
                                                        <th>Periode Aplikasi</th>
                                                        <th>Mulai Kelas</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Fall</td>
                                                        <td>Januari – Juni</td>
                                                        <td>September</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spring</td>
                                                        <td>September – Desember (tahun sebelumnya)</td>
                                                        <td>Maret</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p style={{ marginTop: 20 }}><strong>Tips:</strong> Ajukan 3–4 bulan sebelum deadline untuk menghindari tekanan akhir.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Malaysia?</h2>
                        <p>Konselor ahli kami siap membantu setiap langkah.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Bicara dengan Konselor Gratis</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
