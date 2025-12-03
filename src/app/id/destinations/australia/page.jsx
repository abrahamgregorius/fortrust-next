"use client";

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

export default function Australia() {
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
            <Navbar />

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Australia: Jalur Cepat Menuju Karier Global</h1>
                        <p>Dapatkan hak kerja pasca-studi terpanjang di dunia, gelar yang diakui secara global, dan jalur langsung menuju Permanent Residence.</p>
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
                                        <img
                                            src="../../destinations/banners/Australia.png"
                                            className="content__banner"
                                            alt="Australia Banner"
                                        />
                                        <h2>Mengapa Kuliah di Australia?</h2>
                                        <p>Australia menonjol sebagai tujuan utama bagi mahasiswa internasional yang mencari hak kerja pasca-studi yang luar biasa, sistem kualifikasi yang diakui secara global, dan jalur tak tertandingi menuju permanent residency (PR). Artikel ini menjelaskan mengapa "Kuliah di Australia" adalah pilihan terbaik bagi calon sarjana di seluruh dunia.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Manfaat Utama Kuliah di Australia</h3>
                                        <ul>
                                            <li><strong>Hak Kerja Pasca-Studi Terpanjang di Dunia:</strong> Australia menawarkan hak kerja pasca-studi paling murah hati, memungkinkan lulusan bekerja hingga enam tahun—lebih lama dari Kanada, Inggris, atau AS.</li>
                                            <li><strong>Australian Qualifications Framework (AQF):</strong> Sistem unik ini menstandarkan tingkat pendidikan, memastikan gelar Anda langsung diakui di luar negeri dan memungkinkan transisi mulus antar bidang.</li>
                                            <li><strong>Opsi Kerja Fleksibel untuk Mahasiswa:</strong> Tidak seperti negara lain, Australia memperbolehkan mahasiswa bekerja tanpa batas jam selama libur semester resmi.</li>
                                            <li><strong>Insentif Studi Regional:</strong> Belajar di daerah regional memberikan poin tambahan untuk PR, biaya lebih rendah, dan visa kerja pasca-studi yang diperpanjang.</li>
                                            <li><strong>Keselarasan Studi-Migrasi:</strong> Daftar keterampilan Australia secara langsung menghubungkan program akademik dengan kebutuhan migrasi, meningkatkan peluang PR Anda.</li>
                                            <li><strong>Pinjaman Pemerintah (HECS-HELP) untuk Penduduk yang Memenuhi Syarat:</strong> Penduduk tetap tertentu dapat menggunakan pinjaman HECS-HELP untuk menutup biaya kuliah tanpa pembayaran di muka.</li>
                                            <li><strong>Iklim dan Keragaman Budaya yang Tak Tertandingi:</strong> Australia menawarkan berbagai pilihan gaya hidup dan integrasi budaya yang mulus bagi mahasiswa.</li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Kuliah di Australia</h3>
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
                                                        <td>Melbourne</td>
                                                        <td>University of Melbourne, Monash University</td>
                                                        <td>Terkenal dengan budaya, seni, dan keragaman. Pasar kerja yang sangat baik.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>University of Sydney (USYD), University of New South Wales (UNSW)</td>
                                                        <td>Pusat bisnis global, pantai yang menakjubkan, dan akselerasi karier yang tak tertandingi.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>University of Queensland (UQ), QUT, Griffith University</td>
                                                        <td>Biaya hidup terjangkau, iklim subtropis, dan inovasi dalam riset.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>University of Western Australia (UWA), Curtin University</td>
                                                        <td>Gerbang menuju Asia, kuat di pertambangan/energi, dengan gaya hidup santai.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>University of Adelaide, Flinders University</td>
                                                        <td>Luas, terjangkau, dan sangat baik untuk ilmu pertahanan dan kesehatan.</td>
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
                                        <h2>Persyaratan Masuk & Timeline</h2>
                                        <p>Memahami persyaratan masuk dan timeline aplikasi adalah kunci untuk mengamankan masa depan Anda di Australia.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Gelar Sarjana (S1)</h3>
                                        <ul>
                                            <li><strong>Persyaratan Akademik:</strong> Penyelesaian sekolah menengah atas setara dengan Australian Year 12, dengan rata-rata minimum 65–75%+.</li>
                                            <li><strong>Kemahiran Bahasa Inggris:</strong> Skor IELTS Academic 6.5 secara keseluruhan (tidak ada band di bawah 6.0) atau setara.</li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Gelar Magister (S2)</h3>
                                        <ul>
                                            <li><strong>Persyaratan Akademik:</strong> Gelar Sarjana yang telah diselesaikan di bidang terkait dengan IPK minimum 3.0/4.0 atau setara.</li>
                                            <li><strong>Dokumen Pendukung:</strong> Pernyataan Tujuan (SOP), 2–3 surat rekomendasi, dan transkrip akademik yang disertifikasi.</li>
                                            <li><strong>Kemahiran Bahasa Inggris:</strong> Skor IELTS Academic 6.5–7.0 secara keseluruhan atau setara.</li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Doktor (S3)</h3>
                                        <ul>
                                            <li><strong>Persyaratan Akademik:</strong> Penyelesaian Gelar Magister melalui riset atau Gelar Sarjana tingkat honors dengan performa akademik yang kuat.</li>
                                            <li><strong>Dokumen Pendukung:</strong> Proposal riset yang detail, 3 surat rekomendasi yang kuat, dan transkrip akademik.</li>
                                            <li><strong>Persyaratan Lain:</strong> Identifikasi dan amankan profesor yang bersedia membimbing riset Anda.</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup di Australia</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Kuliah Tahunan (Mahasiswa Internasional)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Universitas (S1)</th>
                                                        <th>Universitas (S2/S3)</th>
                                                        <th>Diploma / Sertifikat Perguruan Tinggi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Melbourne</td>
                                                        <td>AUD $25,000 – $55,000</td>
                                                        <td>AUD $30,000 – $55,000</td>
                                                        <td>AUD $6,000 – $18,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>AUD $25,000 – $50,000</td>
                                                        <td>AUD $30,000 – $55,000</td>
                                                        <td>AUD $8,000 – $20,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>AUD $25,000 – $50,000</td>
                                                        <td>AUD $30,000 – $55,000</td>
                                                        <td>AUD $6,000 – $17,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>AUD $25,000 – $50,000</td>
                                                        <td>AUD $30,000 – $55,000</td>
                                                        <td>AUD $5,000 – $15,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>AUD $20,000 – $27,000</td>
                                                        <td>AUD $30,000 – $55,000</td>
                                                        <td>AUD $5,000 – $15,000</td>
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
                                                        <th>Tempat Tinggal (Berbagi)</th>
                                                        <th>Makanan, Transportasi, Utilitas</th>
                                                        <th>Total Perkiraan Bulanan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Melbourne</td>
                                                        <td>AUD $900 – $1,500</td>
                                                        <td>AUD $600 – $800</td>
                                                        <td>AUD $1,500 – $2,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>AUD $1,000 – $1,800</td>
                                                        <td>AUD $600 – $700</td>
                                                        <td>AUD $1,600 – $2,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>AUD $800 – $1,200</td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>AUD $1,200 – $1,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>AUD $600 – $1,000</td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>AUD $1,100 – $1,600</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>AUD $500 – $900</td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>AUD $1,000 – $1,500</td>
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
                                        <p>Mahasiswa internasional di Australia menikmati hak bekerja yang murah hati, mendukung stabilitas keuangan dan pengalaman kerja yang sangat berharga:</p>
                                        <ul>
                                            <li><strong>Selama semester akademik:</strong> Mahasiswa diizinkan bekerja hingga 40 jam per dua minggu.</li>
                                            <li><strong>Selama libur kuliah resmi:</strong> Mahasiswa dapat bekerja tanpa batas jam.</li>
                                            <li><strong>Ketentuan khusus untuk perawatan lansia:</strong> Mereka yang bekerja di sektor perawatan lansia tidak memiliki batasan jam kerja hingga setidaknya pertengahan 2025.</li>
                                        </ul>
                                        <p>Setelah lulus, Anda mungkin memenuhi syarat untuk Temporary Graduate Visa (subclass 485), memberi Anda kesempatan untuk bekerja dan tinggal di Australia hingga enam tahun, tergantung pada gelar dan wilayah studi Anda. Visa ini menyediakan jalur penting untuk mendapatkan pengalaman profesional dan menjelajahi rute menuju permanent residency.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Australia</h2>
                                        <p>Australia berkomitmen untuk mendukung talenta luar biasa melalui berbagai beasiswa nasional dan khusus universitas. Persiapan dini sangat penting, karena banyak tenggat waktu beasiswa jatuh 8–12 bulan sebelum tahun akademik dimulai.</p>
                                        <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Tanyakan Tentang Beasiswa</a>
                                    </div>
                                    <div className="content-block">
                                        <h3>Direktori Beasiswa 2026 untuk Australia</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Universitas / Penyedia</th>
                                                        <th>Nama Beasiswa</th>
                                                        <th>Tingkat Studi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Pemerintah Australia</td>
                                                        <td>Australia Awards Scholarships (AAS)</td>
                                                        <td>S1 / S2 / S3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pemerintah Australia</td>
                                                        <td>Research Training Program (RTP) Scholarships</td>
                                                        <td>S2 / S3</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of Melbourne</td>
                                                        <td>Melbourne International Undergraduate Scholarship</td>
                                                        <td>S1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of Sydney</td>
                                                        <td>Sydney Scholars Awards</td>
                                                        <td>S1</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Monash University</td>
                                                        <td>Monash International Merit Scholarship</td>
                                                        <td>S1 / S2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Deakin University</td>
                                                        <td>Deakin Vice-Chancellor's International Scholarship</td>
                                                        <td>S1 / S2</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Pemerintah Australia</td>
                                                        <td>Destination Australia Scholarships (VET stream)</td>
                                                        <td>Diploma</td>
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
                                        <h2>Semua Institusi di Australia</h2>
                                        <p>Kami bermitra dengan universitas ternama di Australia.</p>
                                        <div className="universities-grid">
                                            <div className="university-item">Australian Catholic University</div>
                                            <div className="university-item">Australian University of Theology</div>
                                            <div className="university-item">Australian National University</div>
                                            <div className="university-item">Avondale University</div>
                                            <div className="university-item">Bond University</div>
                                            <div className="university-item">Charles Darwin University</div>
                                            <div className="university-item">Charles Sturt University</div>
                                            <div className="university-item">CQ University</div>
                                            <div className="university-item">Curtin University</div>
                                            <div className="university-item">Deakin University</div>
                                            <div className="university-item">Edith Cowan University</div>
                                            <div className="university-item">Federation University of Australia</div>
                                            <div className="university-item">Flinders University</div>
                                            <div className="university-item">Griffith University</div>
                                            <div className="university-item">James Cook University</div>
                                            <div className="university-item">La Trobe University</div>
                                            <div className="university-item">Macquarie University</div>
                                            <div className="university-item">Monash University</div>
                                            <div className="university-item">Murdoch University</div>
                                            <div className="university-item">Queensland University of Technology</div>
                                            <div className="university-item">RMIT University</div>
                                            <div className="university-item">Southern Cross University</div>
                                            <div className="university-item">Swinburne University of Technology</div>
                                            <div className="university-item">Torrens University Australia</div>
                                            <div className="university-item">University of Adelaide</div>
                                            <div className="university-item">University of Canberra</div>
                                            <div className="university-item">University of Divinity</div>
                                            <div className="university-item">University of Melbourne</div>
                                            <div className="university-item">University of New England</div>
                                            <div className="university-item">University of New South Wales</div>
                                            <div className="university-item">University of Newcastle</div>
                                            <div className="university-item">University of Notre Dame Australia</div>
                                            <div className="university-item">University of Queensland</div>
                                            <div className="university-item">University of South Australia</div>
                                            <div className="university-item">University of Southern Queensland</div>
                                            <div className="university-item">University of Sydney</div>
                                            <div className="university-item">University of Tasmania</div>
                                            <div className="university-item">University of Technology Sydney</div>
                                            <div className="university-item">University of the Sunshine Coast</div>
                                            <div className="university-item">University of Western Australia</div>
                                            <div className="university-item">University of Wollongong</div>
                                            <div className="university-item">Victoria University</div>
                                            <div className="university-item">Western Sydney University</div>
                                            <div className="university-item">Blue Mountains International Hotel Management School</div>
                                            <div className="university-item">Box Hill Institute</div>
                                            <div className="university-item">Gordon Institute of TAFE</div>
                                            <div className="university-item">Le Cordon Bleu (Adelaide)</div>
                                            <div className="university-item">Study Group International</div>
                                            <div className="university-item">Melbourne Polytechnic</div>
                                            <div className="university-item">Navitas Limited</div>
                                            <div className="university-item">Sunraysia Institute of TAFE</div>
                                            <div className="university-item">TAFE Queensland</div>
                                            <div className="university-item">TAFE Queensland SkillsTech</div>
                                            <div className="university-item">Think Education</div>
                                            <div className="university-item">William Blue College of Hospitality Management</div>
                                        </div>
                                        <p className="partners__many">...dan banyak lagi</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran</h2>
                                        <p>Rencanakan untuk intake utama Februari atau intake pertengahan tahun Juli. Februari adalah intake utama untuk sebagian besar universitas dengan pilihan program terluas.</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Tahap</th>
                                                        <th>Jadwal</th>
                                                        <th>Tindakan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>18-24 bulan sebelumnya</td>
                                                        <td>Riset program & universitas.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>12-16 bulan sebelumnya</td>
                                                        <td>Ikuti tes bahasa Inggris dan kumpulkan dokumen yang diperlukan.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>8-12 bulan sebelumnya</td>
                                                        <td>Kirim aplikasi (biasanya antara Okt–Feb).</td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>4-6 bulan sebelumnya</td>
                                                        <td>Terima tawaran Anda dan ajukan visa pelajar (subclass 500).</td>
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
                        <h2>Siap Kuliah di Australia?</h2>
                        <p>Biarkan konselor ahli kami memandu Anda melalui setiap langkah prosesnya.</p>
                        <a href="/contact" className="btn btn--primary btn--large">Bicara dengan Konselor Gratis</a>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
