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
        { id: "partners", label: "Mitra", icon: <Building2 /> },
        { id: "intakes", label: "Jadwal Masuk", icon: <CalendarDays /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Singapura: Langkah Paling Cerdas untuk Masa Depanmu
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
                                            <img src="/destinations/banners/Singapore.png" className="content__banner" alt="Singapura" />
                                            <h2>Mengapa Kuliah di Singapura?</h2>
                                            <p>
                                                Singapura menawarkan kombinasi unik antara pendidikan kelas dunia, peluang karier yang kuat, dan lingkungan multikultural yang dinamis.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>
                                                Keunggulan Kuliah di Singapura
                                            </h3>
                                            <ul>
                                                <li>
                                                    <strong>Bekerja Sambil Kuliah Tanpa Visa Kerja Terpisah:</strong>
                                                    Jika Anda kuliah di universitas negeri, Anda dapat bekerja paruh waktu (hingga 16 jam/minggu) tanpa mengajukan visa terpisah.
                                                </li>
                                                <li>
                                                    <strong>Gerbang Langsung ke Pasar Kerja Asia yang Paling Cepat Berkembang:</strong>
                                                    Dengan lebih dari 7.000 perusahaan multinasional, magang di perusahaan Fortune 500 sangat mudah diakses.
                                                </li>
                                                <li>
                                                    <strong>Gelar Diakui Secara Global:</strong>
                                                    Universitas seperti NUS dan NTU secara konsisten berada di peringkat 15 besar dunia, menawarkan gelar yang dihargai di berbagai ekonomi utama.
                                                </li>
                                                <li>
                                                    <strong>Minim Hambatan Bahasa di Pusat Multibahasa:</strong>
                                                    Bahasa Inggris menjadi bahasa pengantar utama, dan Anda juga bisa mempelajari Mandarin dan Melayu untuk meningkatkan keunggulan profesional di Asia.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "requirements" && (
                                <>
                                    <div id="requirements" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Persyaratan Masuk Umum</h2>
                                            <p>
                                                Persaingan untuk masuk ke universitas top seperti NUS dan NTU sangat ketat. Memenuhi persyaratan berikut akan meningkatkan peluang Anda.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Persyaratan</th>
                                                            <th>Sarjana (S1)</th>
                                                            <th>Pascasarjana (S2)</th>
                                                            <th>Doktoral (S3)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Persyaratan Akademik</strong>
                                                            </td>
                                                            <td>
                                                                Lulusan SMA/sederajat dengan nilai rata-rata 70–80%.
                                                            </td>
                                                            <td>
                                                                Gelar S1 terkait dengan IPK minimum 3,0/4,0.
                                                            </td>
                                                            <td>
                                                                Gelar S2 terkait dengan rekam jejak riset yang kuat.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Kemampuan Bahasa</strong>
                                                            </td>
                                                            <td>
                                                                IELTS 5.5–6.0 atau TOEFL iBT 60–78.
                                                            </td>
                                                            <td>
                                                                IELTS 6.0–6.5 atau TOEFL iBT 79–90.
                                                            </td>
                                                            <td>
                                                                IELTS 6.5+ atau TOEFL iBT 90+.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Dokumen Pendukung</strong>
                                                            </td>
                                                            <td>
                                                                Paspor, transkrip, personal statement, bukti finansial.
                                                            </td>
                                                            <td>
                                                                Paspor, transkrip, CV, 2–3 surat rekomendasi, statement of purpose.
                                                            </td>
                                                            <td>
                                                                Transkrip, proposal riset, CV, 2–3 referensi akademik, publikasi.
                                                            </td>
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
                                            <h2>Biaya Kuliah & Hidup di Singapura</h2>
                                            <p>
                                                Memahami komponen biaya membantu Anda merencanakan dengan tepat. Berikut rincian biaya kuliah dan biaya hidup.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Kuliah (per tahun)</h3>
                                            <ul>
                                                <li>
                                                    <strong>Program Sarjana (S1):</strong>
                                                    Sekitar SGD 17.000 – 25.000/tahun setelah subsidi MOE.
                                                </li>
                                                <li>
                                                    <strong>Program Pascasarjana (S2):</strong>
                                                    SGD 18.000 – 35.000/tahun. Bisnis/keuangan bisa &gt; SGD 40.000.
                                                </li>
                                                <li>
                                                    <strong>Program Doktoral (S3):</strong>
                                                    SGD 18.000 – 25.000/tahun, sering disubsidi dan banyak yang menerima pendanaan penuh.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Catatan:</strong> Penerima MOE Tuition Grant wajib bekerja di Singapura selama 3 tahun setelah lulus.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Perkiraan Biaya Hidup Bulanan</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Kategori Pengeluaran</th>
                                                            <th>Perkiraan Biaya (per bulan)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Hunian (apartemen berbagi/asrama)</td>
                                                            <td>SGD 400 – 1,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Makanan</td>
                                                            <td>SGD 300 – 600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transportasi (EZ-Link)</td>
                                                            <td>SGD 100 – 150</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Utilitas & Internet</td>
                                                            <td>SGD 50 – 150</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Pribadi & Hiburan</td>
                                                            <td>SGD 200 – 400</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Total Anggaran Bulanan</strong>
                                                            </td>
                                                            <td>
                                                                <strong>SGD 1,200 – 2,500</strong>
                                                            </td>
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
                                                Singapura menyediakan banyak beasiswa untuk mahasiswa internasional, didukung oleh Kementerian Pendidikan dan universitas top seperti NUS dan NTU. Dengan pendanaan yang tepat, perjalanan akademik Anda bisa menginspirasi sekaligus terjangkau.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >
                                                Tanyakan Tentang Beasiswa
                                            </a>
                                        </div>
                                        <div className="content-block">
                                            <h3>Jenis Beasiswa Utama</h3>
                                            <ul>
                                                <li>
                                                    <strong>Singapore International Graduate Award (SINGA):</strong>
                                                    Untuk kandidat S3 unggul di bidang sains/rekayasa, mencakup biaya kuliah penuh dan tunjangan bulanan.
                                                </li>
                                                <li>
                                                    <strong>Tuition Grant Scheme:</strong> Subsidi pemerintah yang signifikan untuk biaya kuliah S1, disertai komitmen kerja 3 tahun di Singapura setelah lulus.
                                                </li>
                                                <li>
                                                    <strong>Beasiswa Universitas:</strong>
                                                    Universitas top seperti NUS, NTU, dan SMU menawarkan beasiswa berbasis prestasi yang mencakup biaya kuliah dan tunjangan hidup untuk S1 dan S2/S3.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Institusi Mitra Kami</h2>
                                            <p>
                                                Kami bermitra dengan universitas negeri dan swasta ternama di Singapura yang konsisten menempati peringkat terbaik di Asia dan dunia.
                                            </p>
                                            <div className="partners-grid">
                                                <div className="partner-logo">
                                                    <img
                                                        src="https://placehold.co/150x50/cccccc/000000?text=NUS"
                                                        alt="National University of Singapore"
                                                    />
                                                </div>
                                                <div className="partner-logo">
                                                    <img
                                                        src="https://placehold.co/150x50/cccccc/000000?text=NTU"
                                                        alt="Nanyang Technological University"
                                                    />
                                                </div>
                                                <div className="partner-logo">
                                                    <img
                                                        src="https://placehold.co/150x50/cccccc/000000?text=SMU"
                                                        alt="Singapore Management University"
                                                    />
                                                </div>
                                                <div className="partner-logo">
                                                    <img
                                                        src="https://placehold.co/150x50/cccccc/000000?text=SUTD"
                                                        alt="Singapore University of Technology and Design"
                                                    />
                                                </div>
                                            </div>
                                            <p className="partners__many">...dan banyak lagi</p>
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
