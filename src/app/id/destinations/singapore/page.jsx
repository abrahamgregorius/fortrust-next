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
                                            <picture><source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Singapore.webp" /><img src="/destinations/banners/Browser/Singapore.webp" alt="" className="content__banner" /></picture>
                                            <h2>Mengapa Kuliah di Singapura?</h2>
                                            <p>
                                                Singapura bukan hanya destinasi wisata top, tetapi juga salah satu pusat pendidikan terbaik di Asia dan dunia. Banyak mahasiswa internasional memilih kuliah di Singapura karena keunggulan uniknya yang sulit ditemukan di negara lain.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Keuntungan Belajar di Singapura</h3>
                                            <ul>
                                                <li>
                                                    <strong>Bekerja Sambil Kuliah Tanpa Izin Kerja Tambahan</strong><br />
                                                    Jika Anda menempuh pendidikan di universitas negeri Singapura, Anda dapat bekerja paruh waktu hingga 16 jam per minggu saat semester berjalan. Hebatnya, Anda tidak perlu mengurus work visa terpisah—sehingga bisa mendapatkan penghasilan tambahan sambil menambah pengalaman kerja.

                                                </li>
                                                <li>
                                                    <strong>Akses Langsung ke Pasar Kerja Asia yang Berkembang Pesat</strong><br />
                                                    Singapura adalah pusat bisnis Asia dan rumah bagi lebih dari 7.000 perusahaan multinasional. Kesempatan magang di Fortune 500 companies atau kantor regional Asia-Pasifik bisa dicapai hanya dengan naik MRT beberapa pemberhentian saja—keunggulan yang sangat jarang Anda dapatkan di negara lain.

                                                </li>
                                                <li>
                                                    <strong>Gelar yang Diakui Dunia
                                                    </strong><br />
                                                    Universitas top seperti National University of Singapore (NUS) dan Nanyang Technological University (NTU) konsisten masuk dalam 15 besar dunia. Anda bahkan berpeluang mendapatkan gelar ganda internasional berkat kerja sama dengan universitas ternama di Eropa, Amerika, dan Australia.
                                                </li>
                                                <li>
                                                    <strong>Tidak Ada Hambatan Bahasa di Lingkungan Multibahasa</strong><br />
                                                    Bahasa Inggris digunakan sebagai bahasa utama perkuliahan. Namun, belajar di Singapura juga membuka kesempatan bagi Anda untuk mempelajari Mandarin dan Bahasa Melayu, yang sangat berguna untuk membangun jaringan dan karier di pasar terbesar Asia.
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
                                            <h2>Persyaratan Masuk</h2>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Persyaratan</th>
                                                            <th>Undergraduate (Bachelor)</th>
                                                            <th>Graduate (Master)</th>
                                                            <th>Postgraduate (PhD/Doctorate)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Persyaratan Akademis</strong></td>
                                                            <td>Lulus SMA/setara dengan A-Level, International Baccalaureate (IB), atau program Foundation yang diakui.<br />Rata-rata nilai minimal 70–80% (tergantung universitas dan jurusan).</td>
                                                            <td>Ijazah S1 di bidang relevan dari universitas terakreditasi.<br />IPK minimal 3.0/4.0 atau setara.</td>
                                                            <td>Ijazah S2 di bidang terkait dengan catatan akademik dan riset yang kuat.<br />Pengalaman penelitian, proyek, atau publikasi ilmiah menjadi nilai tambah.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Persyaratan Bahasa</strong></td>
                                                            <td>IELTS: 5.5–6.0<br />TOEFL iBT: 60–78<br />Untuk program berbahasa Mandarin: HSK Level 4</td>
                                                            <td>IELTS: 6.0–6.5<br />TOEFL iBT: 79–90<br />Untuk program berbahasa Mandarin: HSK Level 5</td>
                                                            <td>IELTS: 6.5+<br />TOEFL iBT: 90+<br />Untuk program berbahasa Mandarin: HSK Level 5</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Dokumen Pendukung</strong></td>
                                                            <td>Fotokopi paspor (masa berlaku minimal 6 bulan)<br />Salinan nilai dan ijazah yang telah dilegalisir<br />Bukti kemampuan finansial (opsional, tergantung universitas)</td>
                                                            <td>2 atau lebih surat rekomendasi (akademik/profesional)<br />Personal statement berisi tujuan studi dan motivasi<br />Proposal penelitian (untuk program berbasis riset)</td>
                                                            <td>Proposal penelitian mendalam yang selaras dengan bidang keahlian dosen pembimbing<br />Publikasi akademik (jika ada)<br />2–3 surat rekomendasi akademik dari dosen pembimbing</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Mengapa Sangat Penting Untuk Memenuhi Syarat Ini?</h3>
                                            <p>Universitas top seperti NUS dan NTU menarik puluhan ribu pelamar setiap tahun — dan persaingannya ketat. Memenuhi (bahkan melampaui) syarat masuk akan meningkatkan peluang diterima sekaligus mempersiapkan Anda menghadapi standar akademik yang tinggi.</p>
                                        </div>
                                        <div className="content-block">
                                            <h2>Jadwal Pendaftaran</h2>
                                            <p>Universitas di Singapura menawarkan dua intake utama setiap tahun. Intake utama terjadi pada Agustus atau September dan paling populer di kalangan mahasiswa, karena selaras dengan akhir tahun ajaran di banyak negara, memastikan transisi yang lancar ke pendidikan tinggi. Batas waktu pendaftaran untuk intake utama ini biasanya jatuh pada Mei atau Juni, dan mahasiswa mendapat manfaat dari berbagai pilihan program yang lebih luas serta kesempatan dukungan finansial yang lebih besar, termasuk beasiswa.</p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Intake</th>
                                                            <th>Mulai Kuliah</th>
                                                            <th>Periode Pendaftaran</th>
                                                            <th>Waktu Ideal untuk Mulai Persiapan</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Intake Agustus (Utama)</td>
                                                            <td>Awal hingga pertengahan Agustus</td>
                                                            <td>Biasanya Oktober hingga Maret tahun sebelumnya</td>
                                                            <td>Mayoritas program gelar, terutama di bidang yang diminati tinggi seperti Ilmu Komputer, Teknik, dan Bisnis, dimulai selama intake ini, menawarkan pilihan kursus terluas.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Intake Januari (Terbatas)</td>
                                                            <td>Awal Januari</td>
                                                            <td>Juni hingga September tahun sebelumnya</td>
                                                            <td>Intake ini menawarkan berbagai kursus terbatas, biasanya di bidang seperti Bisnis, IT, Perhotelan, dan Teknik terpilih.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br />
                                            <h3>Tips Sukses</h3>
                                            <ul>
                                                <li>Daftar Lebih Awal: Universitas top Singapura memiliki penerimaan yang kompetitif; pengajuan awal menunjukkan kesiapan dan meningkatkan peluang Anda.</li>
                                                <li>Cek Syarat Spesifik: Setiap universitas mungkin berbeda sedikit dalam nilai, dokumen, atau batas waktu.</li>
                                                <li>Manfaatkan Intake Januari dengan Bijak: Jika Anda melewatkan Agustus, jangan menyerah — Januari bisa menjadi kesempatan kedua Anda.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "costs" && (
                                <>
                                    <div id="costs" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Biaya Kuliah dan Biaya Hidup</h2>
                                            <p>Singapura adalah salah satu kota teraman sekaligus pusat pendidikan terbaik di dunia. Bagi mahasiswa internasional, mengetahui biaya kuliah dan biaya hidup yang sebenarnya adalah langkah penting sebelum memutuskan kuliah di sini.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Kuliah di Singapura</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Tingkat Program</th>
                                                            <th>Detail</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Program Sarjana (S1)</td>
                                                            <td>Universitas Negeri (NUS, NTU, SMU): Dengan subsidi MOE: SGD 17,000 – 25,000/tahun.<br />Tanpa subsidi: SGD 30,000 – 50,000/tahun (jurusan seperti Kedokteran & Hukum lebih mahal).<br />Perguruan Tinggi Swasta: SGD 20,000 – 42,000/tahun.<br /><br />Catatan: Subsidi MOE mensyaratkan Anda bekerja di Singapura selama 3 tahun setelah lulus.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Program Magister (S2)</td>
                                                            <td>Coursework Master’s: SGD 18,000 – 35,000/tahun (bisnis & program spesialis SGD 40,000).<br />Research Master’s: SGD 18,000 – 28,000/tahun.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Program Doktor (S3/PhD)</td>
                                                            <td>Biaya: SGD 18,000 – 25,000/tahun (sering mendapat subsidi).<br />Banyak mahasiswa PhD mendapatkan pendanaan penuh + tunjangan bulanan SGD 2,200 – 3,000.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Biaya Hidup di Singapura</h3>
                                            <p>Untuk hidup nyaman, siapkan anggaran SGD 1,200 – 2,500/bulan tergantung jenis akomodasi dan gaya hidup.</p>
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
                                                            <td>Akomodasi (kos/dorm)</td>
                                                            <td>SGD 400 – 1,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Makan</td>
                                                            <td>SGD 300 – 600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transportasi</td>
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
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Mengapa Tetap Layak Dipertimbangkan?</h3>
                                            <p>Meski biayanya lebih tinggi dibanding negara Asia lainnya, durasi studi yang lebih singkat (3 tahun S1, 1–1.5 tahun S2) dan pengakuan internasional membuat Anda bisa lulus lebih cepat dan bekerja lebih awal.</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "work" && (
                                <>
                                    <div id="work" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Hak Bekerja</h2>
                                            <p>Dengan memanfaatkan hak kerja selama dan setelah kuliah, Anda tidak hanya meringankan biaya hidup tetapi juga membangun karier di salah satu pasar kerja terbaik di Asia. Pemerintah Singapura melalui Ministry of Manpower (MOM) dan Immigration & Checkpoints Authority (ICA) mengatur dengan jelas hak kerja mahasiswa internasional — sehingga Anda bisa mendapatkan pengalaman profesional sambil menyelesaikan studi.</p>
                                        </div>
                                        <div className="content-block">
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Kategori</th>
                                                            <th>Detail</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Bekerja Paruh Waktu Selama Kuliah</strong></td>
                                                            <td>Dengan Student Pass dari ICA dan terdaftar di program penuh waktu di institusi yang disetujui (seperti NUS, NTU, SMU, atau politeknik), Anda boleh bekerja maksimal 16 jam per minggu selama masa kuliah tanpa izin kerja terpisah.<br /><br />Saat libur akademik resmi dari kampus, Anda bisa bekerja penuh waktu tanpa izin tambahan, selama status mahasiswa aktif tetap berlaku.<br /><br /><strong>Contoh Pekerjaan yang Diperbolehkan:</strong><br />Pekerjaan di kampus (asisten perpustakaan, teknisi lab, staf administrasi)<br />Magang berbayar sesuai jurusan<br />Pekerjaan paruh waktu di hotel, restoran, atau event</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Syarat yang Harus Dipatuhi</strong></td>
                                                            <td>Harus berkuliah di institusi yang diakui ICA<br />Tidak boleh menjadi wiraswasta atau bekerja di sektor terlarang<br />Jadwal kerja tidak mengganggu kuliah atau kehadiran</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Magang dan Penempatan Industri</strong></td>
                                                            <td>Jika magang merupakan bagian dari kurikulum, Anda dapat mengikuti dengan Training Employment Pass atau Work Holiday Pass tergantung durasi dan gaji. Banyak kampus yang memfasilitasi penempatan ini</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Peluang Kerja Setelah Lulus</strong></td>
                                                            <td>Lulusan dapat mengajukan:<br />Long-Term Visit Pass (LTVP): Hingga 1 tahun untuk mencari pekerjaan<br />Employment Pass (EP) atau S Pass: Setelah memperoleh tawaran kerja yang memenuhi syarat<br /><br />Dengan lebih dari 7.000 perusahaan multinasional berbasis di Singapura, peluang kerja untuk lulusan sangat menjanjikan</td>
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
                                            <h2>BEASISWA</h2>
                                            <p>Singapura menyediakan berbagai beasiswa bagi mahasiswa internasional, langsung dari Kementerian Pendidikan dan universitas ternama seperti NUS dan NTU. Dengan dukungan finansial yang tepat, perjalanan akademik di Singapura bisa jadi pengalaman tak terlupakan dan jauh lebih terjangkau.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Beasiswa dari Pemerintah & Kementerian Pendidikan Singapura</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Beasiswa</th>
                                                            <th>Detail</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Singapore International Graduate Award (SINGA)</strong></td>
                                                            <td>Untuk siapa? Lulusan terbaik dari seluruh dunia yang ingin meraih gelar PhD di bidang sains atau teknik.<br />Cakupan: Biaya kuliah penuh, tunjangan bulanan (SGD 2.000–2.500), tiket pesawat, dan uang saku awal.<br />Universitas tuan rumah: NUS, NTU, SMU, SUTD</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>ASEAN Scholarships</strong></td>
                                                            <td>Untuk siapa? Siswa asal negara ASEAN yang ingin melanjutkan ke jenjang SMP/SMA di Singapura.<br />Cakupan: Biaya pendidikan, akomodasi, uang saku bulanan, dan tiket pulang pergi.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Tuition Grant Scheme</strong></td>
                                                            <td>Untuk siapa? Mahasiswa internasional di universitas negeri (NUS, NTU, SMU, SUTD).<br />Cakupan: Subsidi biaya kuliah hingga lebih dari 50%.<br />Syarat: Bersedia menjalani ikatan kerja selama 3 tahun di Singapura setelah lulus.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Beasiswa dari Universitas di Singapura</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Beasiswa</th>
                                                            <th>Detail</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Beasiswa NUS</strong></td>
                                                            <td>NUS Global Merit Scholarship: Untuk mahasiswa internasional berprestasi. Cakupan biaya kuliah dan tunjangan hidup.<br />NUS Research Scholarships: Untuk mahasiswa S2/S3, mencakup biaya kuliah dan uang saku bulanan.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Beasiswa NTU</strong></td>
                                                            <td>NTU Undergraduate Scholarship: Berdasarkan prestasi akademik, menanggung biaya kuliah dan tunjangan hidup.<br />NTU Graduate Scholarships: Untuk master & PhD di bidang teknik dan sains.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Beasiswa SMU</strong></td>
                                                            <td>SMU Merit and Financial Scholarships: Untuk mahasiswa internasional yang menonjol di program S1 maupun pascasarjana.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Cara Mendaftar & Tips Sukses</h3>
                                            <ul>
                                                <li><strong>Daftar Lebih Awal:</strong> Deadline beasiswa ketat — biasanya 4–8 bulan sebelum kuliah dimulai.</li>
                                                <li><strong>Siapkan Dokumen Terbaik:</strong> Transkrip legalisir, surat rekomendasi, esai motivasi, dan bukti kegiatan di luar akademik.</li>
                                                <li><strong>Jaga Prestasi & Aktivitas:</strong> IPK tinggi, serta pengalaman organisasi atau sosial jadi nilai plus.</li>
                                                <li><strong>Cek Persyaratan:</strong> Beasiswa dan universitas memiliki kriteria khusus.</li>
                                            </ul>
                                            <p>Bayangkan kuliah tanpa beban biaya, lulus dan bergabung dengan komunitas global di negara paling aman dan inovatif di Asia. Beasiswa bukan sekadar dana, namun tiket untuk masa depan!</p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
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
                                                    <strong>Intake Agustus (Utama)</strong><br />
                                                    Intake utama dengan pilihan program terluas. Pendaftaran umumnya dibuka Oktober–Maret tahun sebelumnya.
                                                </li>
                                                <li>
                                                    <strong>Intake Januari (Terbatas)</strong><br />
                                                    Intake lebih kecil dengan pilihan program terbatas (umumnya Bisnis, TI, dan Perhotelan). Pendaftaran sekitar Juni–September tahun sebelumnya.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Tips</strong><br /> Daftar lebih awal! Seleksi sangat kompetitif, pengajuan dini menunjukkan kesiapan dan meningkatkan peluang.
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
