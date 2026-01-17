"use client"

import { useState } from "react";
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

export default function Singapore() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Ringkasan", icon: <LayoutGrid /> },
        { id: "requirements", label: "Persyaratan", icon: <FileCheck2 /> },
        { id: "costs", label: "Biaya", icon: <Wallet /> },
        { id: "work", label: "Hak Bekerja", icon: <Briefcase /> },
        { id: "scholarships", label: "Beasiswa", icon: <GraduationCap /> },
        { id: "partners", label: "Institusi", icon: <Building2 /> },
        { id: "intakes", label: "Jadwal Masuk", icon: <CalendarDays /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Kuliah di Singapura, Langkah Paling Cerdas Untuk Masa Depan
                        </h1>
                        <p>
                            Tempat pendidikan kelas dunia bertemu peluang karier yang menentukan.
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
                                <>
                                    <div id="overview" className="tab-pane active">
                                        <div className="content-block">
                                            <picture><source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Singapore.webp" /><img src="/destinations/banners/Browser/Singapore.webp" alt="" className="content__banner" /></picture>
                                            <h2>Keuntungan Belajar di Singapura</h2>
                                            <ul>
                                                <li>Pendidikan berkualitas dunia dengan universitas terkemuka seperti NUS, NTU, dan SMU</li>
                                                <li>Standar kesehatan dan keselamatan yang tinggi</li>
                                                <li>Masyarakat multikultural dengan bahasa Inggris sebagai bahasa utama</li>
                                                <li>Lokasi strategis untuk bisnis dan inovasi di Asia</li>
                                                <li>Ekonomi kuat dengan peluang kerja yang sangat baik</li>
                                                <li>Infrastruktur modern dan transportasi umum yang efisien</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "requirements" && (
                                <>
                                    <div id="requirements" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Persyaratan Masuk</h2>
                                            <p>
                                                Persyaratan masuk ke universitas di Singapura tergantung pada tingkat studi dan institusi. Berikut adalah persyaratan umum.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Program</th>
                                                            <th>IELTS</th>
                                                            <th>TOEFL iBT</th>
                                                            <th>PTE Academic</th>
                                                            <th>Persyaratan Lain</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Gelar Sarjana</td>
                                                            <td>6.5</td>
                                                            <td>85</td>
                                                            <td>58</td>
                                                            <td>Ijazah SMA, IPK 3.0+</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Gelar Master</td>
                                                            <td>6.5</td>
                                                            <td>85</td>
                                                            <td>58</td>
                                                            <td>Gelar Sarjana, pengalaman kerja relevan</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PhD</td>
                                                            <td>6.5</td>
                                                            <td>85</td>
                                                            <td>58</td>
                                                            <td>Gelar Master, proposal penelitian</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "costs" && (
                                <>
                                    <div id="costs" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Biaya Kuliah di Singapura</h2>
                                            <p>
                                                Singapura menawarkan nilai yang sangat baik untuk uang dalam pendidikan. Berikut adalah rincian biaya.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Kuliah</h3>
                                            <p>Biaya kuliah untuk program sarjana berkisar antara SGD 8,000 hingga SGD 15,000 per tahun, tergantung pada universitas dan program studi.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Hidup</h3>
                                            <p>Biaya hidup di Singapura sekitar SGD 1,200 hingga SGD 2,000 per bulan, termasuk akomodasi, makanan, transportasi, dan pengeluaran lainnya.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Lainnya</h3>
                                            <p>Biaya aplikasi, visa, asuransi kesehatan, dan bahan ajar tambahan dapat menambah total biaya studi.</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "work" && (
                                <>
                                    <div id="work" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Hak Bekerja untuk Mahasiswa</h2>
                                            <p>
                                                Menggabungkan studi dan pengalaman kerja legal di Singapura tidak hanya membantu finansial, tetapi juga memperkuat jaringan profesional Anda di salah satu ekonomi paling kompetitif di dunia.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Bekerja Paruh Waktu Saat Kuliah:</strong>
                                                    Pemegang Student Pass di institusi yang disetujui dapat bekerja paruh waktu hingga 16 jam per minggu selama masa perkuliahan tanpa izin kerja terpisah.
                                                </li>
                                                <li>
                                                    <strong>Penuh Waktu Saat Libur:</strong>
                                                    Selama libur resmi universitas, mahasiswa dapat bekerja penuh waktu tanpa izin terpisah.
                                                </li>
                                                <li>
                                                    <strong>Peluang Kerja Pasca‑Studi:</strong>
                                                    Lulusan dapat mengajukan Long‑Term Visit Pass (LTVP) hingga 1 tahun saat mencari kerja, atau Employment Pass (EP) setelah mendapatkan tawaran kerja yang memenuhi syarat.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Beasiswa di Singapura</h2>
                                            <p>
                                                Singapura menawarkan banyak beasiswa untuk mahasiswa internasional, didukung oleh Kementerian Pendidikan dan universitas top seperti NUS dan NTU.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Institusi di Singapura</h2>
                                            <p>
                                                Belajar di institusi terkemuka Singapura di bidang teknologi, manajemen, dan riset.
                                            </p>
                                            <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">National University of Singapore</div>
                                                <div className="university-item">Nanyang Technological University</div>
                                                <div className="university-item">Singapore Management University</div>
                                                <div className="university-item">Singapore University of Social Sciences</div>
                                                <div className="university-item">Singapore Institute of Technology</div>
                                                <div className="university-item">Singapore University of Technology and Design</div>
                                                <div className="university-item">University of the Arts Singapore</div>
                                                <div className="university-item">Curtin University</div>
                                                <div className="university-item">James Cook University</div>
                                                <div className="university-item">The University of Newcastle</div>
                                                <div className="university-item">Paris-Panthéon-Assas University</div>
                                                <div className="university-item">Amity Global Institute</div>
                                                <div className="university-item">Auston Institute of Management</div>
                                                <div className="university-item">BAC College (Singapore)</div>
                                                <div className="university-item">Beacon International College</div>
                                                <div className="university-item">DIMENSIONS International College</div>
                                                <div className="university-item">East Asia Institute of Management (EAIM)</div>
                                                <div className="university-item">ERC Institute</div>
                                                <div className="university-item">Kaplan Higher Education Academy</div>
                                                <div className="university-item">London School of Business & Finance</div>
                                                <div className="university-item">Management Development Institute of Singapore</div>
                                                <div className="university-item">Nanyang Institute of Management</div>
                                                <div className="university-item">PSB Academy</div>
                                                <div className="university-item">Raffles College of Higher Education</div>
                                                <div className="university-item">SISH Institute</div>
                                                <div className="university-item">Singapore Institute of Management</div>
                                                <div className="university-item">Singapore Raffles Music College</div>
                                                <div className="university-item">TMC Academy</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "intakes" && (
                                <>
                                    <div id="intakes" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Jadwal Pendaftaran</h2>
                                            <p>
                                                Universitas di Singapura umumnya memiliki dua intake utama per tahun, dengan intake Agustus sebagai yang paling populer.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>Intake Agustus (Utama):</strong>
                                                    Intake utama dengan pilihan program terluas. Pendaftaran umumnya dibuka Oktober–Maret tahun sebelumnya.
                                                </li>
                                                <li>
                                                    <strong>Intake Januari (Terbatas):</strong>
                                                    Intake lebih kecil dengan pilihan program terbatas (umumnya Bisnis, TI, dan Perhotelan). Pendaftaran sekitar Juni–September tahun sebelumnya.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Tips:</strong> Daftar lebih awal! Seleksi sangat kompetitif, pengajuan dini menunjukkan kesiapan dan meningkatkan peluang.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Singapura?</h2>
                        <p>
                            Biarkan konselor ahli kami membimbing Anda di setiap langkah.
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
