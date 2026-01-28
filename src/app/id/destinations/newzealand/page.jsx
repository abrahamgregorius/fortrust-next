"use client"

import { useState, useRef, useEffect } from "react";
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

export default function NewZealand() {
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

    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Kuliah di Selandia Baru, belajar sambil bertualang
                        </h1>
                        <p>
                            Raih kualifikasi yang diakui secara global sambil menjelajahi keindahan alam yang menakjubkan dan budaya yang dinamis.
                        </p>
                    </div>
                </section>

                <section className="destination-details">
                    <div className="container destination-details__container">
                        {/* Tabs Nav */}
                        <div className="tabs-nav-container">
                            {isMobile && <button className="nav-arrow left" onClick={scrollLeft}>‹</button>}
                            <div className="tabs-nav" ref={navRef}>
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
                            {isMobile && <button className="nav-arrow right" onClick={scrollRight}>›</button>}
                        </div>

                        {/* Tabs Content */}
                        <div className="tab-content">
                            {activeTab === "overview" && (
                                <>
                                    <div id="overview" className="tab-pane active">
                                        <div className="content-block">
                                            <picture><source media="(max-width: 768px)" srcSet={`/destinations/banners/Mobile/NewZealand.webp`} /><img src="/destinations/banners/Browser/NewZealand.webp" alt="" className="content__banner" /></picture>
                                            <h2>Mengapa Kuliah di Selandia Baru?</h2>
                                            <p>
                                                Selandia Baru menonjol sebagai tujuan studi yang menghadirkan pengalaman tak terlupakan sekaligus kualifikasi yang diakui secara global.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Manfaat Utama Kuliah di Selandia Baru</h3>
                                            <ul>
                                                <li><strong>Belajar dalam Kelas Kecil dan Mendukung</strong><br /> Dengan ukuran kelas rata-rata 10–25 mahasiswa, dosen mengenal Anda secara personal dan memberikan pendampingan yang sesuai.</li>
                                                <li><strong>Hak Bekerja yang Unggul</strong><br /> Bekerja hingga 20 jam per minggu selama semester dan penuh waktu saat liburan. Post-Study Work Visa memungkinkan Anda tinggal dan bekerja hingga tiga tahun di sektor apa pun.</li>
                                                <li><strong>Hidup di Masyarakat yang Aman dan Ramah</strong><br /> Selandia Baru secara konsisten masuk 10 besar negara teraman. Budaya menekankan sikap saling peduli ("manaakitanga"), membuat mahasiswa internasional benar-benar merasa disambut.</li>
                                                <li><strong>Jalur Mudah Menuju Permanent Residency</strong><br /> Lulusan di bidang kekurangan tenaga (teknologi, teknik, kesehatan) berpeluang mendapatkan jalur residensi langsung.</li>
                                                <li><strong>Belajar di Jantung Alam</strong><br /> Banyak kampus dikelilingi pegunungan, fjord, dan pantai, memberikan pengalaman belajar yang sulit ditandingi.</li>
                                                <li><strong>Perspektif Pribumi yang Memperkaya Setiap Mata Kuliah</strong><br /> Budaya Māori terjalin dalam pendidikan tinggi, mengajarkan nilai-nilai dan cara pandang inovatif yang meningkatkan daya saing global.</li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>5 Kota Terbaik untuk Kuliah di Selandia Baru</h3>
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
                                                            <td>Auckland</td>
                                                            <td>University of Auckland</td>
                                                            <td>Kota multikultural yang hidup dengan akses ke program kelas dunia dan peluang kerja yang dinamis.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wellington</td>
                                                            <td>Victoria University of Wellington</td>
                                                            <td>Memikat dengan energi kosmopolitan, seni yang berkembang, dan jaringan mahasiswa yang solid.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Christchurch</td>
                                                            <td>University of Canterbury</td>
                                                            <td>Biaya hidup terjangkau, taman indah, dan semangat progresif; unggul di bidang teknik dan teknologi.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dunedin</td>
                                                            <td>University of Otago</td>
                                                            <td>Kota pelajar sejati dengan universitas tertua di Selandia Baru, budaya yang hidup, dan garis pantai yang menakjubkan.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hamilton</td>
                                                            <td>University of Waikato</td>
                                                            <td>Oasis hijau yang ramah dengan kampus modern dan jalur studi fleksibel di bisnis, TI, dan sains.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "requirements" && (
                                <>
                                    <div id="requirements" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Persyaratan Masuk Umum</h2>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Persyaratan</th>
                                                            <th>Sarjana (S1)</th>
                                                            <th>Pascasarjana (S2)</th>
                                                            <th>Doktoral (S3/PhD)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Persyaratan Akademik</strong></td>
                                                            <td>Lulusan SMA dengan rata-rata minimal 70–80%</td>
                                                            <td>Gelar Sarjana di bidang terkait dengan IPK minimal 3,0/4,0</td>
                                                            <td>Gelar Magister di bidang terkait dengan latar belakang riset yang kuat</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Kemampuan Bahasa</strong></td>
                                                            <td>IELTS 5,5–6,0 atau TOEFL iBT 60–78</td>
                                                            <td>IELTS 6,0–6,5 atau TOEFL iBT 79–90</td>
                                                            <td>IELTS 6,5+ atau TOEFL iBT 90+</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Dokumen Pendukung</strong></td>
                                                            <td>Paspor, transkrip, personal statement, bukti finansial</td>
                                                            <td>Paspor, transkrip, CV, 2–3 surat rekomendasi, statement of purpose</td>
                                                            <td>Transkrip, proposal riset, CV, 2–3 referensi akademik, personal statement</td>
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
                                            <h2>Biaya Kuliah & Hidup di Selandia Baru</h2>
                                            <p>Setiap dolar NZ yang Anda keluarkan bukan hanya untuk pendidikan yang mengubah hidup, tetapi juga untuk kenangan dan pertemanan di negara yang menghargai Anda.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Kuliah Tahunan (NZD)</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Jenis Program</th>
                                                            <th>Universitas Negeri</th>
                                                            <th>Perguruan Tinggi Swasta</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>S1 (Seni/Bisnis)</td>
                                                            <td>22,000 – 32,000</td>
                                                            <td>20,000 – 40,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>S1 (Sains/Teknik)</td>
                                                            <td>33,000 – 50,000</td>
                                                            <td>25,000 – 42,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>S2 (Kursus/Mata Kuliah)</td>
                                                            <td>26,000 – 37,000</td>
                                                            <td>22,000 – 39,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>S3/Pascadoktoral</td>
                                                            <td>18,000 – 25,000 (subsidized)</td>
                                                            <td>19,000 – 28,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Diploma</td>
                                                            <td>15,000 – 22,000</td>
                                                            <td>16,000 – 24,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Rata-rata Biaya Hidup Bulanan (NZD)</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Kota</th>
                                                            <th>Hunian</th>
                                                            <th>Makanan</th>
                                                            <th>Transportasi</th>
                                                            <th>Perkiraan Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Auckland</td>
                                                            <td>700 – 1,500</td>
                                                            <td>400 – 600</td>
                                                            <td>130 – 170</td>
                                                            <td><strong>1,570 – 2,890</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wellington</td>
                                                            <td>650 – 1,230</td>
                                                            <td>350 – 580</td>
                                                            <td>100 – 140</td>
                                                            <td><strong>1,390 – 2,500</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Christchurch</td>
                                                            <td>500 – 1,100</td>
                                                            <td>320 – 550</td>
                                                            <td>90 – 120</td>
                                                            <td><strong>1,170 – 2,190</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dunedin</td>
                                                            <td>400 – 950</td>
                                                            <td>300 – 500</td>
                                                            <td>80 – 110</td>
                                                            <td><strong>1,010 – 2,000</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hamilton</td>
                                                            <td>480 – 980</td>
                                                            <td>320 – 520</td>
                                                            <td>90 – 130</td>
                                                            <td><strong>1,150 – 2,100</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "work" && (
                                <>
                                    <div id="work" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Hak Bekerja untuk Mahasiswa</h2>
                                            <p>Sejak Anda memulai perjalanan akademik di Selandia Baru, Anda didukung bukan hanya sebagai mahasiswa, tetapi juga sebagai calon pemimpin.</p>
                                            <ul>
                                                <li><strong>Bekerja Sambil Kuliah</strong><br /> Visa pelajar Anda umumnya memungkinkan Anda bekerja hingga 20 jam per minggu selama masa perkuliahan dan penuh waktu saat libur resmi universitas.</li>
                                                <li><strong>Meluncurkan Karier Anda</strong><br /> Setelah lulus, Anda dapat mengajukan Post-Study Work Visa, yang memungkinkan Anda bekerja di Selandia Baru hingga tiga tahun, di bidang apa pun yang Anda pilih.</li>
                                            </ul>
                                            <p>Bayangkan mendapat penghasilan tambahan, memperoleh keterampilan dunia nyata, dan membangun koneksi profesional—sembari tetap menyeimbangkan studi Anda.</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Beasiswa di Selandia Baru</h2>
                                            <p>Raih masa depan Anda di Selandia Baru, di mana pelajar Indonesia dapat mengakses berbagai beasiswa dari universitas papan atas untuk pendidikan yang unggul dan terjangkau. Tersedia beasiswa dari universitas maupun pemerintah, termasuk New Zealand Government Scholarship yang sepenuhnya mendanai biaya kuliah, biaya hidup, dan akomodasi.</p>
                                            <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Ya, Saya Butuh Bantuan Mendapatkan Beasiswa</a>
                                        </div>
                                        <div className="content-block">
                                            <h3>Jenis Beasiswa Utama</h3>
                                            <ul>
                                                <li><strong>Beasiswa Prestasi (Merit-Based)</strong><br /> Diberikan kepada mahasiswa dengan prestasi akademik, kepemimpinan, atau bakat khusus yang unggul.</li>
                                                <li><strong>Beasiswa Riset</strong><br /> Untuk mahasiswa dengan potensi akademik atau riset yang kuat, seperti NZIDRS (New Zealand International Doctoral Research Scholarships).</li>
                                                <li><strong>Beasiswa Pemerintah</strong><br /> Termasuk New Zealand ASEAN Scholarships (NZAS) yang membuka kesempatan studi S1 dan S2/S3.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Semua Institusi di Selandia Baru</h2>
                                            <p>Belajar di universitas kelas dunia Selandia Baru, dikenal karena keunggulan riset dan lingkungan belajar yang mendukung.</p>
                                            <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">Auckland University of Technology (AUT)</div>
                                                <div className="university-item">Lincoln University</div>
                                                <div className="university-item">Massey University</div>
                                                <div className="university-item">The University of Auckland</div>
                                                <div className="university-item">University of Canterbury</div>
                                                <div className="university-item">University of Otago</div>
                                                <div className="university-item">University of Waikato</div>
                                                <div className="university-item">Victoria University of Wellington</div>
                                            </div>
                                            <h3 style={{ marginTop: "2rem" }}>Polytechnic</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">Ara Institute of Canterbury</div>
                                                <div className="university-item">Eastern Institute of Technology (EIT)</div>
                                                <div className="university-item">Manukau Institute of Technology (MIT)</div>
                                                <div className="university-item">Nelson Marlborough Institute of Technology (NMIT)</div>
                                                <div className="university-item">NorthTec (also known as Tai Tokerau Wānanga)</div>
                                                <div className="university-item">Otago Polytechnic</div>
                                                <div className="university-item">Southern Institute of Technology (SIT)</div>
                                                <div className="university-item">Tai Poutini Polytechnic</div>
                                                <div className="university-item">The Open Polytechnic of New Zealand</div>
                                                <div className="university-item">Toi Ohomai Institute of Technology</div>
                                                <div className="university-item">Unitec Institute of Technology</div>
                                                <div className="university-item">Universal College of Learning (UCOL)</div>
                                                <div className="university-item">Waikato Institute of Technology (Wintec)</div>
                                                <div className="university-item">Wellington Institute of Technology (WelTec)</div>
                                                <div className="university-item">Western Institute of Technology at Taranaki (WITT)</div>
                                            </div>

                                            <p className="partners__many">*Daftar ini menyoroti hanya sebagian kecil dari mitra universitas lengkap kami.</p>

                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "intakes" && (
                                <>
                                    <div id="intakes" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Timeline Aplikasi</h2>
                                            <p>Di Selandia Baru, mahasiswa dapat mendaftar untuk intake Februari atau Juli. Untuk mulai Februari, aplikasi biasanya jatuh antara Agustus dan Oktober. Jika menargetkan intake Juli, kirimkan aplikasi antara Februari dan Mei.</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Selandia Baru?</h2>
                        <p>
                            Biarkan konselor ahli kami memandu Anda melalui setiap
                            langkah prosesnya.
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