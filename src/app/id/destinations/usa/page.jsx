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

export default function USA() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
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
                            Amerika Serikat: Pusat Inovasi dan Peluang Global
                        </h1>
                        <p>
                            Temukan gerbang menuju inovasi tanpa batas, keberagaman, dan peluang karier kelas dunia.
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
                                            <h2>Mengapa Kuliah di Amerika Serikat?</h2>
                                            <p>
                                                Bayangkan menantang batas inovasi, menjadi bagian dari masyarakat multikultural, dan membuka peluang karier yang kuat—semua di negara paling berpengaruh di dunia. AS unggul dalam keunggulan akademik, fleksibilitas, keberagaman, riset, dan prospek karier.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Keunggulan Kuliah di AS</h3>
                                            <ul>
                                                <li>
                                                    <strong>Akses ke Institusi Akademik Kelas Dunia</strong><br />
                                                    AS memiliki universitas terbanyak di 100 besar dunia, termasuk Harvard, MIT, dan Stanford.
                                                </li>
                                                <li>
                                                    <strong>Peluang Riset dan Inovasi Tiada Tara</strong><br />
                                                    Dengan investasi miliaran setiap tahun, universitas di AS memimpin terobosan sains, teknologi, dan kewirausahaan.
                                                </li>
                                                <li>
                                                    <strong>Hidup Multikultural yang Inklusif</strong><br />
                                                    Kampus-kampus di AS mencerminkan keragaman dunia, menciptakan suasana yang hangat dan inklusif.
                                                </li>
                                                <li>
                                                    <strong>Fleksibilitas Akademik yang Personal</strong><br />
                                                    Model liberal arts memungkinkan kombinasi jurusan, minor, dan perpindahan bidang dengan mudah.
                                                </li>
                                                <li>
                                                    <strong>Jalur Karier Kelas Dunia</strong><br />
                                                    Dari Silicon Valley hingga Wall Street, pemberi kerja top merekrut dari kampus AS. Program OPT memungkinkan kerja hingga 3 tahun (untuk STEM hingga 36 bulan).
                                                </li>
                                                <li>
                                                    <strong>Ratusan Beasiswa & Bantuan Finansial</strong><br />
                                                    Banyak skema beasiswa dari universitas, pemerintah, dan lembaga swasta untuk mahasiswa internasional.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>5 Kota Terbaik untuk Kuliah di AS</h3>
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
                                                            <td>Boston</td>
                                                            <td>
                                                                Harvard University, MIT,
                                                                Boston University
                                                            </td>
                                                            <td>
                                                                Pusat intelektual AS; sentra biotech, kesehatan, dan startup.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>New York</td>
                                                            <td>
                                                                Columbia University, New
                                                                York University (NYU)
                                                            </td>
                                                            <td>
                                                                Magang terbaik di keuangan, seni, dan teknologi; lingkungan multikultural.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>San Francisco Bay Area</td>
                                                            <td>
                                                                Stanford University, UC
                                                                Berkeley
                                                            </td>
                                                            <td>
                                                                Jantung Silicon Valley; ideal bagi inovator dan entrepreneur dengan budaya startup yang kuat.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chicago</td>
                                                            <td>
                                                                University of Chicago,
                                                                Northwestern University
                                                            </td>
                                                            <td>
                                                                Seni-budaya hidup dan biaya kota besar yang relatif terjangkau.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>
                                                                University of Southern
                                                                California (USC), UCLA
                                                            </td>
                                                            <td>
                                                                Episentrum kreativitas—film, musik, teknologi, dan bisnis bertemu.
                                                            </td>
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
                                            <p>
                                                Universitas di AS tidak hanya mencari prestasi akademik—mereka menghargai passion, keberanian bermimpi besar, dan perjalanan pribadi Anda.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Jenis Persyaratan</th>
                                                            <th>Sarjana (S1)</th>
                                                            <th>Pascasarjana (S2)</th>
                                                            <th>Doktoral (S3)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Akademik</strong>
                                                            </td>
                                                            <td>
                                                                Ijazah SMA/sederajat dengan nilai rata-rata 70–80%.
                                                            </td>
                                                            <td>
                                                                Gelar S1 terakreditasi; IPK minimal 3,0/4,0.
                                                            </td>
                                                            <td>
                                                                Gelar S2 diakui; rekam jejak riset/publikasi yang kuat.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Bahasa</strong>
                                                            </td>
                                                            <td>
                                                                IELTS 5,5–6,0; TOEFL iBT 60–78.
                                                            </td>
                                                            <td>
                                                                IELTS 6,0–6,5; TOEFL iBT 79–90.
                                                            </td>
                                                            <td>
                                                                IELTS 6,5+; TOEFL iBT 90+.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Dokumen Pendukung</strong>
                                                            </td>
                                                            <td>
                                                                Transkrip, personal statement, bukti finansial, 1–2 surat rekomendasi.
                                                            </td>
                                                            <td>
                                                                Transkrip S1, CV, 2–3 surat rekomendasi, statement of purpose.
                                                            </td>
                                                            <td>
                                                                Transkrip S2, CV komprehensif, proposal riset, 2–3 surat rekomendasi.
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
                                            <h2>Biaya Kuliah & Hidup di AS</h2>
                                            <p>
                                                Sebelum berangkat, pahami komponen biaya agar bisa merencanakan dengan cerdas.
                                            </p>
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
                                                            <td>New York</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Boston</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
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
                                                            <th>Hunian</th>
                                                            <th>Makanan & Transport</th>
                                                            <th>Total Bulanan</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>New York</td>
                                                            <td>$1,200 – $2,600</td>
                                                            <td>$520 – $850</td>
                                                            <td>$1,720 – $3,450</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>$1,000 – $2,200</td>
                                                            <td>$425 – $710</td>
                                                            <td>$1,425 – $2,910</td>
                                                        </tr>
                                                        <tr>
                                                            <td>San Francisco</td>
                                                            <td>$1,300 – $2,700</td>
                                                            <td>$540 – $930</td>
                                                            <td>$1,840 – $3,630</td>
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
                                                Kuliah di AS juga tentang pengalaman kerja nyata. Berikut ruang lingkup hak bekerja bagi mahasiswa internasional.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Periode</th>
                                                            <th>Jenis Pekerjaan</th>
                                                            <th>Batasan & Ketentuan</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Saat Kuliah</strong>
                                                            </td>
                                                            <td>
                                                                Pekerjaan di kampus, magang berbayar
                                                            </td>
                                                            <td>
                                                                Hingga 20 jam/minggu saat semester; penuh waktu saat libur.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Off-campus (saat kuliah)</strong>
                                                            </td>
                                                            <td>
                                                                Magang CPT (Curricular Practical Training)
                                                            </td>
                                                            <td>
                                                                Harus terkait jurusan; umumnya setelah tahun pertama.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Setelah Lulus</strong>
                                                            </td>
                                                            <td>
                                                                OPT (Optional Practical Training), STEM OPT
                                                            </td>
                                                            <td>
                                                                Hingga 12 bulan; 36 bulan untuk program STEM. Wajib aplikasi ke USCIS.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Pasca OPT</strong>
                                                            </td>
                                                            <td>Visa Kerja H-1B</td>
                                                            <td>
                                                                Untuk kerja penuh waktu di bidang spesialis; memerlukan sponsor perusahaan.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Beasiswa di AS</h2>
                                            <p>
                                                Persaingan beasiswa di AS tinggi, namun banyak peluang tersedia bagi mahasiswa berprestasi dengan kemampuan bahasa Inggris yang kuat dan rekam jejak kegiatan non-akademik.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Tanyakan Tentang Beasiswa</a
                                            >
                                        </div>
                                        <div className="content-block">
                                            <h3>Jenis Beasiswa</h3>
                                            <ul>
                                                <li>
                                                    <strong>Beasiswa Universitas:</strong>
                                                    Banyak kampus top seperti Harvard, MIT, dan Stanford menawarkan beasiswa berbasis prestasi/kebutuhan.
                                                </li>
                                                <li>
                                                    <strong>Program Pemerintah:</strong>
                                                    Program nasional seperti Fulbright untuk mahasiswa internasional jenjang S2/S3.
                                                </li>
                                                <li>
                                                    <strong>Lembaga Swasta:</strong>
                                                    Beasiswa dari organisasi seperti The Gates Scholarship dan Freeman Asian Scholars.
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
                                            <h2>Mitra Universitas di Amerika Serikat</h2>
                                            <p>
                                                Belajar di universitas dan college ternama di seluruh Amerika Serikat.
                                            </p>
                                            <div className="universities-grid">
                                                <div className="university-item">Arizona State University</div>
                                                <div className="university-item">Bay Atlantic University</div>
                                                <div className="university-item">California State University , Fresno</div>
                                                <div className="university-item">California State University , San Marcos</div>
                                                <div className="university-item">California State University , Monterey Bay</div>
                                                <div className="university-item">California State University , North County San Diego</div>
                                                <div className="university-item">Colorado State University</div>
                                                <div className="university-item">De Paul University</div>
                                                <div className="university-item">Drew University</div>
                                                <div className="university-item">Fisher College</div>
                                                <div className="university-item">Florida Atlantic University</div>
                                                <div className="university-item">George mason University</div>
                                                <div className="university-item">Georgia Institute of Technology</div>
                                                <div className="university-item">Hofstra University</div>
                                                <div className="university-item">Illinois State University</div>
                                                <div className="university-item">Iowa State University</div>
                                                <div className="university-item">james Madison University</div>
                                                <div className="university-item">Kent State University</div>
                                                <div className="university-item">Long Island University</div>
                                                <div className="university-item">Long Island University Brooklyn</div>
                                                <div className="university-item">Lousiana State University</div>
                                                <div className="university-item">Mercer University</div>
                                                <div className="university-item">Mercy University</div>
                                                <div className="university-item">Montclair State University</div>
                                                <div className="university-item">Oregon State University</div>
                                                <div className="university-item">San Fransisco State University</div>
                                                <div className="university-item">Southern Illinois University</div>
                                                <div className="university-item">St Louis University</div>
                                                <div className="university-item">Suffolk University Boston</div>
                                                <div className="university-item">Syracuse University</div>
                                                <div className="university-item">Texas A&M University</div>
                                                <div className="university-item">Texas State University</div>
                                                <div className="university-item">The Ohio State University</div>
                                                <div className="university-item">The University of Arizona</div>
                                                <div className="university-item">Thomas Jefferson University</div>
                                                <div className="university-item">Towson University</div>
                                                <div className="university-item">Trine University</div>
                                                <div className="university-item">UC BERKELEY</div>
                                                <div className="university-item">UC DAVIS</div>
                                                <div className="university-item">UC IRVINE</div>
                                                <div className="university-item">UC SANTA BARBARA</div>
                                                <div className="university-item">UCD</div>
                                                <div className="university-item">UCLA</div>
                                                <div className="university-item">University of Alabama at Birmingham</div>
                                                <div className="university-item">University of Hartford</div>
                                                <div className="university-item">University of Iowa</div>
                                                <div className="university-item">University of Kansas</div>
                                                <div className="university-item">University of Louisville</div>
                                                <div className="university-item">University of Massachusett Boston</div>
                                                <div className="university-item">University of Massachusetts Amherst</div>
                                                <div className="university-item">University of Michigan - Ann Arbour</div>
                                                <div className="university-item">University of Nebraska - Lincoln</div>
                                                <div className="university-item">University Of Nebraska Omaha</div>
                                                <div className="university-item">University of Oklahoma</div>
                                                <div className="university-item">University of Rochester</div>
                                                <div className="university-item">University of San Francisco</div>
                                                <div className="university-item">UNIVERSITY OF SOUTHERN CALIFORNIA</div>
                                                <div className="university-item">UNIVERSITY OF VIRGINIA</div>
                                                <div className="university-item">UNIVERSITY OF WASHINGTON , Seattle</div>
                                                <div className="university-item">University of Wisconsin - Madison</div>
                                                <div className="university-item">Virginia Tech</div>
                                                <div className="university-item">West Virginia University</div>
                                                <div className="university-item">Western Michigan University</div>
                                                <div className="university-item">Western Washington University</div>
                                                <div className="university-item">Kings Education College</div>
                                                <div className="university-item">New England College</div>
                                                <div className="university-item">Santa Monica College</div>
                                                <div className="university-item">Shoreline Community College</div>
                                                <div className="university-item">UBridge</div>
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
                                                Waktu terbaik mendaftar biasanya Oktober–Januari tahun sebelum mulai kuliah. Intake utama untuk sebagian besar program adalah musim gugur (Fall).
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Tahap</th>
                                                            <th>Kapan Mulai</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Riset Program</strong>
                                                            </td>
                                                            <td>
                                                                12–15 bulan sebelum mulai
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Tes Standar</strong>
                                                            </td>
                                                            <td>
                                                                11–14 bulan sebelum (SAT, ACT, GRE, TOEFL, dll.)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Kumpulkan Dokumen & Tulis Esai</strong>
                                                            </td>
                                                            <td>
                                                                8–12 bulan sebelum deadline
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Kirim Aplikasi</strong>
                                                            </td>
                                                            <td>
                                                                6–9 bulan sebelum mulai
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>Hasil Seleksi & Visa</strong>
                                                            </td>
                                                            <td>
                                                                3–6 bulan sebelum mulai
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Kuliah di Amerika Serikat?</h2>
                        <p>
                            Biarkan konselor ahli kami membimbing Anda melalui setiap langkah proses.
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
