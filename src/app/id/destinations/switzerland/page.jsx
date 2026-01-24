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

export default function Switzerland() {
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
            <Navbar />

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Kuliah di Swiss, Tempat Kolaborasi Internasional dan Inovasi</h1>
                        <p>Unggul dalam perhotelan, diplomasi internasional, riset finansial, dan teknologi.</p>
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
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Switzerland.webp" />
                                            <img src="/destinations/banners/Browser/Switzerland.webp" alt="" className="content__banner" />
                                        </picture>

                                        <h2>Mengapa Kuliah di Swiss?</h2>
                                        <p>
                                            Selamat datang di Swiss—surga akademik di mana impian Anda bersinggungan dengan peluang global dan keunggulan yang tak tertandingi. Bayangkan belajar di negara di mana Anda bangun dengan pemandangan Pegunungan Alpen yang menakjubkan, berinteraksi sehari-hari dengan budaya dari seluruh penjuru dunia, dan membangun masa depan di beberapa universitas paling bergengsi di dunia.
                                        </p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Keunggulan Kuliah di Swiss</h3>
                                        <ul>
                                            <li>
                                                <strong>Pendidikan Kelas Dunia yang Unggul</strong><br />
                                                Rumah bagi universitas yang secara konsisten berada di peringkat terbaik dunia—seperti ETH Zurich dan EPFL Lausanne—pendidikan Swiss identik dengan ketelitian dan inovasi.
                                            </li>
                                            <li>
                                                <strong>Imersi Multibahasa Sejati</strong><br />
                                                Tidak ada negara lain yang menawarkan kesempatan untuk hidup dan belajar di masyarakat dengan empat bahasa nasional, membuka pintu pasar kerja internasional.
                                            </li>
                                            <li>
                                                <strong>Riset & Inovasi Tak Tertandingi di Finansial</strong><br />
                                                Swiss memimpin dunia dalam output riset per kapita dan menjadi tuan rumah inovasi groundbreaking, terutama di bidang finansial.
                                            </li>
                                            <li>
                                                <strong>Jaringan Global di Pusat Diplomasi Internasional</strong><br />
                                                Dengan kota seperti Geneva yang menjadi tuan rumah organisasi seperti PBB, WTO, dan WHO, ruang kelas Anda meluas ke papan direksi paling berpengaruh di dunia.
                                            </li>
                                            <li>
                                                <strong>Kualitas Hidup & Keamanan Luar Biasa</strong><br />
                                                Secara konsisten diperingkat di antara negara paling aman, bersih, dan layak huni di dunia.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Generous untuk Anda</strong><br />
                                                Pemerintah Swiss dan universitas menawarkan beasiswa khusus untuk mahasiswa internasional, membuat pendidikan kelas dunia dapat diakses.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>5 Kota Terbaik</h3>
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
                                                        <td>Zurich</td>
                                                        <td>ETH Zurich, University of Zurich (UZH)</td>
                                                        <td>Inovasi & finansial; pemandangan danau; jejaring global.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Geneva</td>
                                                        <td>University of Geneva</td>
                                                        <td>Campuran budaya; pusat diplomasi; akses ke LSM dunia.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bern</td>
                                                        <td>University of Bern</td>
                                                        <td>Warisan Swiss; tenang namun strategis; ekosistem riset kuat.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lausanne</td>
                                                        <td>EPFL, UNIL, EHL</td>
                                                        <td>Pusat sains & teknik; rumah sekolah perhotelan terbaik.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Basel</td>
                                                        <td>University of Basel</td>
                                                        <td>Kota seni & farmasi; pesona sejarah.</td>
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
                                        <p>Persaingan tinggi—persiapkan dokumen Anda secara strategis.</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Jenis</th>
                                                        <th>Sarjana (S1)</th>
                                                        <th>Pascasarjana (S2)</th>
                                                        <th>Doktoral (S3)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Akademik</strong></td>
                                                        <td>Ijazah SMA; nilai rata-rata 70–80%.</td>
                                                        <td>Gelar S1 diakui; IPK ≥3,0.</td>
                                                        <td>Gelar S2; pengalaman riset terbukti.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Bahasa</strong></td>
                                                        <td>IELTS 5,5–6,0 / TOEFL 60–78.</td>
                                                        <td>IELTS 6,0–6,5 / TOEFL 79–90.</td>
                                                        <td>IELTS ≥6,5 / TOEFL ≥90.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Dokumen</strong></td>
                                                        <td>Transkrip, paspor, personal statement, bukti finansial, rekomendasi.</td>
                                                        <td>Transkrip S1, CV, rekomendasi, SOP.</td>
                                                        <td>Transkrip S2, CV, proposal riset, rekomendasi.</td>
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
                                        <h2>Biaya Kuliah & Hidup di Swiss</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Biaya Kuliah Tahunan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Program</th>
                                                        <th>Biaya (CHF)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sarjana (Seni/Bisnis)</td>
                                                        <td>CHF 1,000 – 2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sarjana (Sains/Teknik)</td>
                                                        <td>CHF 1,500 – 3,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pascasarjana (Seni/Bisnis)</td>
                                                        <td>CHF 1,500 – 3,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pascasarjana (Sains/Teknik)</td>
                                                        <td>CHF 1,800 – 4,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Diploma/Advanced Studies</td>
                                                        <td>CHF 3,000 – 8,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Mobile Cards */}
                                        <div className="cost-cards-mobile">
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Sarjana (Seni/Bisnis)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya:</span>
                                                        <span className="cost-value">CHF 1,000 – 2,500</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Sarjana (Sains/Teknik)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya:</span>
                                                        <span className="cost-value">CHF 1,500 – 3,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Pascasarjana (Seni/Bisnis)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya:</span>
                                                        <span className="cost-value">CHF 1,500 – 3,200</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Pascasarjana (Sains/Teknik)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya:</span>
                                                        <span className="cost-value">CHF 1,800 – 4,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Diploma/Advanced Studies</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya:</span>
                                                        <span className="cost-value">CHF 3,000 – 8,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Hunian</th>
                                                        <th>Makan & Transport</th>
                                                        <th>Total Bulanan (CHF)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Zurich</td>
                                                        <td>CHF 800–1,500</td>
                                                        <td>CHF 470–710</td>
                                                        <td>CHF 1,500–2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Geneva</td>
                                                        <td>CHF 700–1,400</td>
                                                        <td>CHF 410–600</td>
                                                        <td>CHF 1,400–2,300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bern</td>
                                                        <td>CHF 650–1,250</td>
                                                        <td>CHF 405–540</td>
                                                        <td>CHF 1,300–2,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lausanne</td>
                                                        <td>CHF 600–1,200</td>
                                                        <td>CHF 370–530</td>
                                                        <td>CHF 1,200–2,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Basel</td>
                                                        <td>CHF 600–1,100</td>
                                                        <td>CHF 350–470</td>
                                                        <td>CHF 1,200–2,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Mobile Cards */}
                                        <div className="cost-cards-mobile">
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Zurich</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Hunian:</span>
                                                        <span className="cost-value">CHF 800–1,500</span>
                                                    </div>
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Makan & Transport:</span>
                                                        <span className="cost-value">CHF 470–710</span>
                                                    </div>
                                                    <div className="cost-amount cost-amount-total">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">CHF 1,500–2,500</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Geneva</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Hunian:</span>
                                                        <span className="cost-value">CHF 700–1,400</span>
                                                    </div>
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Makan & Transport:</span>
                                                        <span className="cost-value">CHF 410–600</span>
                                                    </div>
                                                    <div className="cost-amount cost-amount-total">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">CHF 1,400–2,300</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Bern</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Hunian:</span>
                                                        <span className="cost-value">CHF 650–1,250</span>
                                                    </div>
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Makan & Transport:</span>
                                                        <span className="cost-value">CHF 405–540</span>
                                                    </div>
                                                    <div className="cost-amount cost-amount-total">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">CHF 1,300–2,200</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Lausanne</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Hunian:</span>
                                                        <span className="cost-value">CHF 600–1,200</span>
                                                    </div>
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Makan & Transport:</span>
                                                        <span className="cost-value">CHF 370–530</span>
                                                    </div>
                                                    <div className="cost-amount cost-amount-total">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">CHF 1,200–2,100</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Basel</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Hunian:</span>
                                                        <span className="cost-value">CHF 600–1,100</span>
                                                    </div>
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Makan & Transport:</span>
                                                        <span className="cost-value">CHF 350–470</span>
                                                    </div>
                                                    <div className="cost-amount cost-amount-total">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">CHF 1,200–2,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "work" && (
                                <div id="work" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Hak Bekerja untuk Mahasiswa</h2>
                                        <p>Selama kuliah: kerja paruh waktu hingga 15 jam/minggu. Saat libur resmi universitas: boleh penuh waktu.</p>
                                        <p>Setelah lulus: dapat izin tinggal hingga 18 bulan untuk mencari kerja/magang profesional.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Swiss</h2>
                                        <p>Beasiswa tersedia dari pemerintah, universitas, dan yayasan swasta bagi pelamar yang proaktif.</p>
                                        <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Tips Mendapatkan Beasiswa</h3>
                                        <ol>
                                            <li>Bangun kontak personal lebih awal.</li>
                                            <li>Kustomisasi motivation letter tiap institusi.</li>
                                            <li>Tunjukkan pengalaman multikultural nyata.</li>
                                            <li>Selaraskan riset dengan prioritas Swiss (sustainability, teknologi, finansial).</li>
                                            <li>Lamar ke beberapa program sekaligus.</li>
                                        </ol>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Institusi di Swiss</h2>
                                        <p>
                                            Belajar di institusi terkemuka Swiss di bidang teknologi, perhotelan, dan riset.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">ETH Zurich</div>
                                            <div className="university-item">École Polytechnique Fédérale de Lausanne (EPFL)</div>
                                            <div className="university-item">University of Zurich</div>
                                            <div className="university-item">University of Geneva</div>
                                            <div className="university-item">University of Bern</div>
                                            <div className="university-item">University of Basel</div>
                                            <div className="university-item">University of Lausanne</div>
                                            <div className="university-item">University of Fribourg</div>
                                            <div className="university-item">University of St. Gallen</div>
                                            <div className="university-item">University of Neuchâtel</div>
                                            <div className="university-item">Zurich University of Applied Sciences</div>
                                            <div className="university-item">Lucerne University of Applied Sciences & Arts</div>
                                            <div className="university-item">University of Applied Sciences and Arts Western Switzerland</div>
                                            <div className="university-item">University of Applied Sciences of Eastern Switzerland</div>
                                            <div className="university-item">FernUni Schweiz (Swiss Distance University)</div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran</h2>
                                        <p>Intake utama: September (Fall). Beberapa kampus punya intake Januari (Spring).</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Tahap</th>
                                                        <th>Waktu Sebelum Mulai</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Riset & Tes Standar</strong></td>
                                                        <td>11–15 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Kumpulkan Dokumen & Esai</strong></td>
                                                        <td>8–12 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Kirim Aplikasi & Beasiswa</strong></td>
                                                        <td>6–9 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Wawancara & Hasil</strong></td>
                                                        <td>4–7 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Visa Pelajar & Persiapan</strong></td>
                                                        <td>2–5 bulan</td>
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
                        <h2>Siap Kuliah di Swiss?</h2>
                        <p>Biarkan konselor ahli kami membimbing Anda di setiap langkah.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Bicara dengan Konselor Gratis</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}