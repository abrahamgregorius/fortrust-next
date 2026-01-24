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

export default function UK() {
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
                        <h1>Kuliah di Inggris, Tradisi Unggul, Masa Depan Penuh Peluang</h1>
                        <p>Bergabung dengan warisan pendidikan kelas dunia di mana tradisi bersejarah bertemu inovasi modern.</p>
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
                                            <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/UK.webp" />
                                            <img src="/destinations/banners/Browser/UK.webp" alt="" className="content__banner" />
                                        </picture>

                                        <h2>Mengapa Kuliah di Inggris?</h2>
                                        <p>Inggris memadukan tradisi berabad-abad dengan inovasi mutakhir—memberi pengalaman transformasional akademik & profesional.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Keunggulan Kuliah di Inggris</h3>
                                        <ul>
                                            <li><strong>Pendidikan Diakui Global</strong><br /> Oxford, Cambridge, UCL berada di puncak ranking.</li>
                                            <li><strong>Durasi Studi Singkat</strong><br /> S1 biasanya 3 tahun; S2 1 tahun. Hemat biaya & waktu.</li>
                                            <li><strong>Kekayaan Budaya</strong><br /> Kastil, seni, musik, komunitas dari 200+ negara.</li>
                                            <li><strong>Hak Kerja & Beasiswa</strong><br /> Kerja 20 jam/minggu saat semester; penuh waktu saat libur; banyak beasiswa.</li>
                                            <li><strong>Peluang Karier</strong><br /> Pusat finansial, teknologi, kreatif, hukum dengan jejaring global.</li>
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
                                                        <td>London</td>
                                                        <td>UCL, Imperial, LSE, King’s College</td>
                                                        <td>Pusat global finansial & budaya; peluang magang tak terbatas.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Manchester</td>
                                                        <td>University of Manchester, MMU</td>
                                                        <td>Kota ramah mahasiswa; musik & sepak bola; biaya hidup relatif terjangkau.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Edinburgh</td>
                                                        <td>University of Edinburgh, Heriot-Watt</td>
                                                        <td>Keindahan historis; festival internasional; program inovatif.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Glasgow</td>
                                                        <td>University of Glasgow, Strathclyde</td>
                                                        <td>Seni & budaya dinamis; riset kelas dunia; biaya hidup lebih rendah.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Birmingham</td>
                                                        <td>University of Birmingham, Aston</td>
                                                        <td>Lokasi strategis pusat Inggris; jaringan industri luas.</td>
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
                                        <p>Ringkasan persyaratan yang perlu disiapkan.</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Jenis</th>
                                                        <th>Sarjana (S1)</th>
                                                        <th>Pascasarjana (S2/S3)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>Akademik</strong></td>
                                                        <td>Lulus SMA (A-level/IB setara) nilai ABB–AAA / IPK ~3,0–3,7.</td>
                                                        <td>Gelar S1 setara UK 2:1 (IPK ≥3,0); proposal riset untuk PhD.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Bahasa</strong></td>
                                                        <td>IELTS 6,0–6,5 (tiap band ≥5,5) / TOEFL 80–92.</td>
                                                        <td>IELTS 6,5–7,0 (band ≥6,0) / TOEFL 92–100.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Dokumen</strong></td>
                                                        <td>Transkrip, referensi, personal statement, bukti finansial.</td>
                                                        <td>Transkrip S1, referensi, motivation letter/proposal riset, CV.</td>
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
                                        <h2>Biaya Kuliah & Hidup di Inggris</h2>
                                        <p>Estimasi umum untuk membantu perencanaan anggaran.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Kuliah Tahunan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Program</th>
                                                        <th>Biaya Tahunan (GBP)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Sarjana (S1)</td>
                                                        <td>£15,000 – £28,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Magister (S2)</td>
                                                        <td>£16,000 – £30,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Doktor (S3)</td>
                                                        <td>£18,000 – £32,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Mobile Cards */}
                                        <div className="cost-cards-mobile">
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Sarjana (S1)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya Tahunan:</span>
                                                        <span className="cost-value">£15,000 – £28,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Magister (S2)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya Tahunan:</span>
                                                        <span className="cost-value">£16,000 – £30,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Doktor (S3)</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Biaya Tahunan:</span>
                                                        <span className="cost-value">£18,000 – £32,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Estimasi Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Total Bulanan (GBP)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>London</td>
                                                        <td>£1,300 – £1,700</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Manchester / Edinburgh</td>
                                                        <td>£900 – £1,300</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Kota Lain</td>
                                                        <td>£800 – £1,200</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {/* Mobile Cards */}
                                        <div className="cost-cards-mobile">
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>London</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">£1,300 – £1,700</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Manchester / Edinburgh</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">£900 – £1,300</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cost-card">
                                                <div className="cost-card-header">
                                                    <h4>Kota Lain</h4>
                                                </div>
                                                <div className="cost-details">
                                                    <div className="cost-amount">
                                                        <span className="cost-label">Total Bulanan:</span>
                                                        <span className="cost-value">£800 – £1,200</span>
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
                                        <p>Peluang jelas untuk kerja selama & setelah studi.</p>
                                        <ul>
                                            <li><strong>Saat Kuliah:</strong> Kerja hingga 20 jam/minggu saat semester; penuh waktu saat libur.</li>
                                            <li><strong>Graduate Route:</strong> Tinggal & kerja 2 tahun (PhD 3 tahun) tanpa sponsor.</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Inggris</h2>
                                        <p>Beragam beasiswa tersedia—kompetitif, jadi persiapkan lebih awal.</p>
                                        <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Program Utama</h3>
                                        <ul>
                                            <li><strong>Chevening:</strong> Pendanaan penuh S2 satu tahun.</li>
                                            <li><strong>Commonwealth:</strong> Untuk mahasiswa negara Persemakmuran (S2/S3).</li>
                                            <li><strong>Beasiswa Universitas:</strong> Prestasi, bidang studi, kewarganegaraan.</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Semua Institusi di Inggris</h2>
                                        <p>Belajar di universitas ternama di Inggris.</p>
                                        <h3 style={{ marginTop: "2rem" }}>Featured Universities</h3>
                                        <div className="featured-uni-grid">
                                            <div className="featured-uni-item">
                                                <img src="../../universities/UK/SU.png" alt="" />
                                                <p>
                                                    University of Strathclyde - Study Group
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/UK/ManU.png" alt="" />
                                                <p>
                                                    University of Manchaster - INTO
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/UK/KCL.png" alt="" />
                                                <p>
                                                    King's College London - Cambridge Education Group
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/UK/LU.png" alt="" />
                                                <p>
                                                    Lancaster University - INTO
                                                </p>
                                            </div>

                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Aberystwyth University</div>
                                            <div className="university-item">Anglia Ruskin University</div>
                                            <div className="university-item">Aston University</div>
                                            <div className="university-item">Bath Spa University</div>
                                            <div className="university-item">Birkbeck, University of London</div>
                                            <div className="university-item">Birmingham City University</div>
                                            <div className="university-item">Brunel University of London</div>
                                            <div className="university-item">Buckinghamshire New University</div>
                                            <div className="university-item">Cardiff University</div>
                                            <div className="university-item">City St George's, University of London</div>
                                            <div className="university-item">City, University of London</div>
                                            <div className="university-item">Coventry University</div>
                                            <div className="university-item">Cranfield University</div>
                                            <div className="university-item">De Montfort University</div>
                                            <div className="university-item">Durham University</div>
                                            <div className="university-item">Falmouth University</div>
                                            <div className="university-item">Goldsmiths, University of London</div>
                                            <div className="university-item">Heriot-Watt University</div>
                                            <div className="university-item">Imperial College London</div>
                                            <div className="university-item">King's College London</div>
                                            <div className="university-item">Kingston University</div>
                                            <div className="university-item">Lancaster University</div>
                                            <div className="university-item">Leeds Becket University</div>
                                            <div className="university-item">Leicester University</div>
                                            <div className="university-item">Lincoln Bishop University</div>
                                            <div className="university-item">Liverpool John Moores University</div>
                                            <div className="university-item">London Metropolitan University</div>
                                            <div className="university-item">London South Bank University</div>
                                            <div className="university-item">Loughborough University</div>
                                            <div className="university-item">Manchester Metropolitan University</div>
                                            <div className="university-item">Middlesex University</div>
                                            <div className="university-item">Newcastle University</div>
                                            <div className="university-item">Northumbria University</div>
                                            <div className="university-item">Oxford Brookes University</div>
                                            <div className="university-item">Queen Mary University of London</div>
                                            <div className="university-item">Queen's University Belfast</div>
                                            <div className="university-item">Royal Holloway, University of London[16]</div>
                                            <div className="university-item">Royal Veterinary College</div>
                                            <div className="university-item">Sheffield Hallam University</div>
                                            <div className="university-item">Southampton Solent University</div>
                                            <div className="university-item">Swansea University</div>
                                            <div className="university-item">Teesside University</div>
                                            <div className="university-item">Ulster University</div>
                                            <div className="university-item">University of Aberdeen</div>
                                            <div className="university-item">University of Bath</div>
                                            <div className="university-item">University of Bradford</div>
                                            <div className="university-item">University of Brighton</div>
                                            <div className="university-item">University of Central Lancashier</div>
                                            <div className="university-item">University of Chester</div>
                                            <div className="university-item">University of East Anglia - Norwich</div>
                                            <div className="university-item">University of East London (UEL)</div>
                                            <div className="university-item">University of Exeter</div>
                                            <div className="university-item">University of Hertfordshire</div>
                                            <div className="university-item">University of Huddersfield</div>
                                            <div className="university-item">University of Hull</div>
                                            <div className="university-item">University of Kent</div>
                                            <div className="university-item">University of Lancashire</div>
                                            <div className="university-item">University of Law</div>
                                            <div className="university-item">University of Leeds</div>
                                            <div className="university-item">University of Lincoln</div>
                                            <div className="university-item">University of Manchester</div>
                                            <div className="university-item">University of Northampton</div>
                                            <div className="university-item">University of Plymouth</div>
                                            <div className="university-item">University of Portsmouth</div>
                                            <div className="university-item">University of Reading</div>
                                            <div className="university-item">University of Roehampton London</div>
                                            <div className="university-item">University of Sheffield</div>
                                            <div className="university-item">University of South Wales</div>
                                            <div className="university-item">University of Southampton</div>
                                            <div className="university-item">University of Stirling</div>
                                            <div className="university-item">University of Strathclyde</div>
                                            <div className="university-item">University of Sunderland</div>
                                            <div className="university-item">University of Surrey</div>
                                            <div className="university-item">University of Sussex</div>
                                            <div className="university-item">University of the West of England - Bristol</div>
                                            <div className="university-item">University of Warwick</div>
                                            <div className="university-item">York St John University</div>
                                        </div>
                                        <p className="partners__many">...dan banyak lagi</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran</h2>
                                        <p>Intake utama: September. Perhatikan tenggat khusus UCAS.</p>
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
                                                        <td><strong>Riset & Pilih Kursus</strong></td>
                                                        <td>12–15 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Siapkan Personal Statement & Dokumen</strong></td>
                                                        <td>8–12 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Kirim Aplikasi UCAS (S1)</strong></td>
                                                        <td>Sebelum Januari (Oktober untuk Oxbridge/Kedokteran)</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Aplikasi Langsung (S2/S3)</strong></td>
                                                        <td>6–9 bulan</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Terima Offer & Ajukan Visa</strong></td>
                                                        <td>3–6 bulan</td>
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
                        <h2>Siap Kuliah di Inggris?</h2>
                        <p>Konselor ahli kami siap membimbing tiap langkah Anda.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Bicara dengan Konselor Gratis</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}