"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useRef, useEffect } from "react";
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
                        <h1>Kuliah di Kanada, Maksimalkan Potensimu</h1>
                        <p>
                            Pendidikan berkualitas, pengalaman kerja berbayar, kesehatan terjamin, dan jalur imigrasi yang jelas dalam satu paket.
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
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <picture><source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Canada.webp" /><img src="/destinations/banners/Browser/Canada.webp" alt="" className="content__banner" /></picture>
                                        <h2>Mengapa Kuliah di Kanada</h2>
                                        <p>
                                            Kanada menawarkan lebih dari sekadar pendidikan kelas dunia: kerja berbayar, layanan kesehatan kuat, dan jalur jelas menuju permanent residency—ideal bagi pelajar ambisius.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Keunggulan Kuliah di Kanada</h3>
                                        <ul>
                                            <li>
                                                <strong>PGWP Terbuka Hingga 3 Tahun</strong><br /> Kerja setelah lulus tanpa batas pemberi kerja, akses jalur PR melalui Express Entry & PNP.
                                            </li>
                                            <li>
                                                <strong>Pendidikan Menambah Poin Imigrasi</strong><br /> Studi di Kanada menambah poin CRS dan membuka jalur CEC tanpa sponsor.
                                            </li>
                                            <li>
                                                <strong>Program Co-op Berbayar</strong><br /> Kombinasi semester akademik dan kerja penuh waktu terstruktur (8–20 bulan pengalaman industri).
                                            </li>
                                            <li>
                                                <strong>Kepemimpinan Riset Global</strong><br /> Unggul di AI, sains iklim, dan clean tech (Vector Institute, MILA).
                                            </li>
                                            <li>
                                                <strong>Asuransi Kesehatan Provinsi</strong><br /> Banyak provinsi memberi perlindungan gratis atau subsidi setelah masa tunggu.
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
                                                        <td>Pusat multikultural, pekerjaan beragam, jaringan</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>UBC, Simon Fraser University</td>
                                                        <td>Ekonomi hijau, industri teknologi dan film utama, kualitas hidup tinggi</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>McGill, Université de Montréal</td>
                                                        <td>Biaya kuliah terjangkau, keuntungan bilingual, budaya dinamis</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>University of Ottawa, Carleton University</td>
                                                        <td>Aman, magang pemerintah, kota bilingual</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>University of Calgary, SAIT</td>
                                                        <td>Gaji awal tinggi, sewa terjangkau, tanpa pajak penjualan provinsi</td>
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
                                        <h2>Syarat Masuk Kuliah di Kanada</h2>
                                        <div className="">
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Persyaratan Akademik</th>
                                                            <th>Kemampuan Bahasa Inggris</th>
                                                            <th>Dokumen Pendukung</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Bachelor (Sarjana / S1)</strong></td>
                                                            <td>Lulus SMA/secondary school (setara Grade 12)
                                                                <br /><br />
                                                                Nilai rata-rata minimal 65–75% (lebih tinggi untuk jurusan populer seperti kedokteran, teknik, atau bisnis)
                                                                <br /><br />
                                                                Prasyarat mata pelajaran sesuai program (Matematika & Fisika untuk Teknik, Biologi & Kimia untuk Ilmu Hayati)
                                                            </td>
                                                            <td>English: IELTS Academic 6.5 (tidak ada band di bawah 6.0)
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 80–90+
                                                                <br /><br />
                                                                French: TEF, TCF atau setara, jika memilih universitas berbahasa Prancis
                                                            </td>
                                                            <td>Portofolio (untuk program seni/desain)
                                                                <br /><br />
                                                                Essay atau wawancara tambahan untuk prodi dengan persaingan tinggi
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Master (Magister / S2)</strong></td>
                                                            <td>Telah meraih gelar Bachelor dari institusi terakreditasi
                                                                <br /><br />
                                                                Minimal GPA 3.0/4.0 (~B average)
                                                                <br /><br />
                                                                <strong>Tambahan:</strong>
                                                                <br />
                                                                GRE/GMAT untuk program tertentu (MBA, Bisnis, Ekonomi)
                                                                <br /><br />
                                                                Pengalaman kerja (khusus program terapan/MBA)
                                                            </td>
                                                            <td>IELTS Academic 6.5–7.0
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 90–100+
                                                                <br /><br />
                                                                French: TEF/TCF untuk program berbahasa Prancis
                                                            </td>
                                                            <td>2+ surat rekomendasi akademik/profesional
                                                                <br /><br />
                                                                Statement of Purpose yang mencakup tujuan akademik dan karier
                                                                <br /><br />
                                                                Proposal riset (untuk program berbasis thesis)
                                                                <br /><br />
                                                                Transkrip resmi dari seluruh studi sebelumnya
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>PhD (Doktoral / S3)</strong></td>
                                                            <td>Master di bidang terkait
                                                                <br /><br />
                                                                Lulusan Bachelor yang sangat unggul bisa diterima (langsung ke PhD)
                                                                <br /><br />
                                                                Riwayat akademik dan riset yang kuat
                                                                <br /><br />
                                                                <strong>Tambahan:</strong>
                                                                <br />
                                                                Bukti publikasi ilmiah sangat mendukung
                                                                <br /><br />
                                                                Supervisor harus sudah dikonfirmasi sebelum mendaftar
                                                            </td>
                                                            <td>IELTS Academic 6.5–7.0+
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 90–100+
                                                                <br /><br />
                                                                <strong>French:</strong> TEF/TCF untuk program berbahasa Prancis
                                                            </td>
                                                            <td>Proposal riset detail sesuai bidang supervisor
                                                                <br /><br />
                                                                3 surat rekomendasi
                                                                <br /><br />
                                                                Statement of Purpose
                                                                <br /><br />
                                                                Transkrip lengkap
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h2>Timeline Pendaftaran untuk Mahasiswa Internasional</h2>
                                        <div className="">
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Tahap</th>
                                                            <th>Bachelor’s</th>
                                                            <th>Master’s</th>
                                                            <th>PhD</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>18–24 bulan sebelum masuk</td>
                                                            <td>Riset program & kampus</td>
                                                            <td>Cari supervisor, persiapkan dokumen</td>
                                                            <td>Hubungi supervisor, draft proposal</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12–16 bulan sebelum masuk</td>
                                                            <td>Tes IELTS/TOEFL, kumpulkan dokumen</td>
                                                            <td>Persiapkan SOP & rekomendasi</td>
                                                            <td>Ajukan beasiswa/funding</td>
                                                        </tr>
                                                        <tr>
                                                            <td>8–12 bulan sebelum masuk</td>
                                                            <td>Kirim aplikasi (Okt–Feb)</td>
                                                            <td>Kirim aplikasi (Okt–Jan)</td>
                                                            <td>Aplikasi (Nov–Feb)</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4–6 bulan sebelum masuk</td>
                                                            <td>Terima offer, ajukan visa</td>
                                                            <td>Terima offer, urus dana & visa</td>
                                                            <td>Terima offer, urus funding & visa</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <br />
                                        <p>
                                            Ingat, periode pendaftaran utama adalah September (Fall), sementara beberapa program tersedia Januari (Winter) atau Mei (Spring). Mulailah persiapan minimal 1,5–2 tahun sebelum rencana studi untuk hasil terbaik
                                        </p>
                                        <p>
                                            Kuliah di Kanada membutuhkan persiapan matang mulai dari syarat akademik, kemampuan bahasa, hingga dokumen pendukung yang detail. Dengan memahami tenggat waktu pendaftaran, Anda bisa memperbesar peluang diterima di universitas top dunia dan mengawali masa depan global yang cerah.
                                        </p>
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
                                        <h2>Semua Institusi di Kanada</h2>
                                        <p>Belajar di universitas dan college paling bergengsi di Kanada.</p>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Brock University</div>
                                            <div className="university-item">Cape Breton University</div>
                                            <div className="university-item">Concordia University</div>
                                            <div className="university-item">Dalhousie University</div>
                                            <div className="university-item">Emily Carr University of Art and Design</div>
                                            <div className="university-item">Lakehead University</div>
                                            <div className="university-item">MacEwan University</div>
                                            <div className="university-item">McGill University</div>
                                            <div className="university-item">Memorial University of Newfoundland</div>
                                            <div className="university-item">Mount Saint Vincent University</div>
                                            <div className="university-item">Simon Fraser University</div>
                                            <div className="university-item">Thompson Rivers University</div>
                                            <div className="university-item">Toronto Metropolitan University</div>
                                            <div className="university-item">Trent University</div>
                                            <div className="university-item">University of Alberta</div>
                                            <div className="university-item">University of Canada West</div>
                                            <div className="university-item">University of Lethbridge</div>
                                            <div className="university-item">University of Manitoba</div>
                                            <div className="university-item">University of New Brunswick</div>
                                            <div className="university-item">University of Regina</div>
                                            <div className="university-item">University of Saskatchewan</div>
                                            <div className="university-item">University of the Fraser Valley</div>
                                            <div className="university-item">University of Victoria</div>
                                            <div className="university-item">University of Waterloo</div>
                                            <div className="university-item">University of Windsor</div>
                                            <div className="university-item">Wilfrid Laurier University</div>
                                            <div className="university-item">York University</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>College/Foundation</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Algonquin college</div>
                                            <div className="university-item">Bronte College</div>
                                            <div className="university-item">Bow Valley College</div>
                                            <div className="university-item">Cambrian College of Applied Arts and Technology</div>
                                            <div className="university-item">Career College, Vancouver</div>
                                            <div className="university-item">Canadore College</div>
                                            <div className="university-item">Centenial College</div>
                                            <div className="university-item">Columbia College</div>
                                            <div className="university-item">Coquitlam College</div>
                                            <div className="university-item">Fanshawe College</div>
                                            <div className="university-item">Fleming College</div>
                                            <div className="university-item">Fraser International College</div>
                                            <div className="university-item">George Brown College</div>
                                            <div className="university-item">Georgian College</div>
                                            <div className="university-item">Humber College</div>
                                            <div className="university-item">ICM</div>
                                            <div className="university-item">Langgara College</div>
                                            <div className="university-item">Lambton College</div>
                                            <div className="university-item">Mohawk College</div>
                                            <div className="university-item">Oxford International College - Halifax</div>
                                            <div className="university-item">Oxford International College - Toronto</div>
                                            <div className="university-item">SAE Institute Canada</div>
                                            <div className="university-item">Sasketchewan Polytechic</div>
                                            <div className="university-item">Seneca College</div>
                                            <div className="university-item">Sault College</div>
                                            <div className="university-item">Sheridan College</div>
                                            <div className="university-item">Southern Alberta Institute of Technology</div>
                                            <div className="university-item">The Confederation College of Applied Arts and Technology</div>
                                            <div className="university-item">Toronto Film School</div>
                                            <div className="university-item">Toronto Metropolitan International College</div>
                                            <div className="university-item">Ulethbridge International College</div>
                                            <div className="university-item">Upper Madison College</div>
                                            <div className="university-item">Vancouver Community College</div>
                                            <div className="university-item">Western International College</div>
                                            <div className="university-item">Wilfrid Laurier International Colelge</div>
                                            <div className="university-item">UMC High Schools</div>
                                            <div className="university-item">Delta School District</div>
                                        </div>
                                        <p className="partners__many">*Daftar ini hanya menyoroti sebagian kecil dari mitra universitas penuh kami.</p>
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
                                                        <td><strong>18–24 bulan sebelumnya</strong></td>
                                                        <td>Riset program & universitas.</td>
                                                        <td>Mulai riset (program lebih sedikit).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>12–16 bulan sebelumnya</strong></td>
                                                        <td>Persiapan tes bahasa & kumpulkan dokumen.</td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>8–12 bulan sebelumnya</strong></td>
                                                        <td>Kirim aplikasi (Okt–Feb).</td>
                                                        <td>Daftar (Mar–Sep S1, Jun–Okt S2/S3).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>4–6 bulan sebelumnya</strong></td>
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