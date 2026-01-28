"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import {
    Briefcase,
    Building2,
    CalendarDays,
    FileCheck2,
    GraduationCap,
    LayoutGrid,
    Wallet,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Australia() {
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

    const tuitionData = [
        { city: 'Melbourne', undergrad: 'AUD $25,000 – $55,000', grad: 'AUD $30,000 – $55,000', diploma: 'AUD $6,000 – $18,000' },
        { city: 'Sydney', undergrad: 'AUD $25,000 – $50,000', grad: 'AUD $30,000 – $55,000', diploma: 'AUD $8,000 – $20,000' },
        { city: 'Brisbane', undergrad: 'AUD $25,000 – $50,000', grad: 'AUD $30,000 – $55,000', diploma: 'AUD $6,000 – $17,000' },
        { city: 'Perth', undergrad: 'AUD $25,000 – $50,000', grad: 'AUD $30,000 – $55,000', diploma: 'AUD $5,000 – $15,000' },
        { city: 'Adelaide', undergrad: 'AUD $20,000 – $27,000', grad: 'AUD $30,000 – $55,000', diploma: 'AUD $5,000 – $15,000' }
    ];

    const livingCostData = [
        { city: 'Melbourne', housing: 'AUD $900 – $1,500', foodTransport: 'AUD $600 – $800', total: 'AUD $1,500 – $2,200' },
        { city: 'Sydney', housing: 'AUD $1,000 – $1,800', foodTransport: 'AUD $600 – $700', total: 'AUD $1,600 – $2,500' },
        { city: 'Brisbane', housing: 'AUD $800 – $1,200', foodTransport: 'AUD $400 – $600', total: 'AUD $1,200 – $1,800' },
        { city: 'Perth', housing: 'AUD $600 – $1,000', foodTransport: 'AUD $400 – $600', total: 'AUD $1,100 – $1,600' },
        { city: 'Adelaide', housing: 'AUD $500 – $900', foodTransport: 'AUD $400 – $600', total: 'AUD $1,000 – $1,500' }
    ];

    const citiesData = [
        {
            city: 'Melbourne',
            institutions: 'University of Melbourne, Monash University',
            highlights: 'Terkenal dengan budaya, seni, dan keragaman. Pasar kerja yang sangat baik.'
        },
        {
            city: 'Sydney',
            institutions: 'University of Sydney (USYD), University of New South Wales (UNSW)',
            highlights: 'Pusat bisnis global, pantai yang menakjubkan, dan akselerasi karier yang tak tertandingi.'
        },
        {
            city: 'Brisbane',
            institutions: 'University of Queensland (UQ), QUT, Griffith University',
            highlights: 'Biaya hidup terjangkau, iklim subtropis, dan inovasi dalam riset.'
        },
        {
            city: 'Perth',
            institutions: 'University of Western Australia (UWA), Curtin University',
            highlights: 'Gerbang menuju Asia, kuat di pertambangan/energi, dengan gaya hidup santai.'
        },
        {
            city: 'Adelaide',
            institutions: 'University of Adelaide, Flinders University',
            highlights: 'Luas, terjangkau, dan sangat baik untuk ilmu pertahanan dan kesehatan.'
        }
    ];

    return (
        <>
            <Navbar />

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Kuliah di Australia, Jalur Cepat Menuju Karir Global</h1>
                        <p>Dapatkan hak kerja pasca-studi terpanjang di dunia, gelar yang diakui secara global, dan jalur langsung menuju Permanent Residence.</p>
                    </div>
                </section>

                <section className="destination-details">
                    <div className="container destination-details__container">
                    <div className="tabs-nav-container">
                        {isMobile && <button className="nav-arrow left" onClick={scrollLeft}>‹</button>}
                        <div className="tabs-nav" ref={navRef}>
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
                        {isMobile && <button className="nav-arrow right" onClick={scrollRight}>›</button>}
                    </div>

                        <div className="tab-content">
                            {activeTab === "overview" && (
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Australia.webp" />
                                            <img src="/destinations/banners/Browser/Australia.webp" alt="Australia Banner" className="content__banner" />
                                        </picture>
                                        <h2>Mengapa Kuliah di Australia?</h2>
                                        <p>Australia menonjol sebagai tujuan utama bagi mahasiswa internasional yang mencari hak kerja pasca-studi yang luar biasa, sistem kualifikasi yang diakui secara global, dan jalur tak tertandingi menuju permanent residency (PR). Artikel ini menjelaskan mengapa "Kuliah di Australia" adalah pilihan terbaik bagi calon sarjana di seluruh dunia.</p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Manfaat Utama Kuliah di Australia</h3>
                                        <ul>
                                            <li><strong>Hak Kerja Pasca-Studi Terpanjang di Dunia</strong><br /> Australia menawarkan hak kerja pasca-studi paling murah hati, memungkinkan lulusan bekerja hingga enam tahun—lebih lama dari Kanada, Inggris, atau AS.</li>
                                            <li><strong>Australian Qualifications Framework (AQF)</strong><br /> Sistem unik ini menstandarkan tingkat pendidikan, memastikan gelar Anda langsung diakui di luar negeri dan memungkinkan transisi mulus antar bidang.</li>
                                            <li><strong>Opsi Kerja Fleksibel untuk Mahasiswa</strong><br /> Tidak seperti negara lain, Australia memperbolehkan mahasiswa bekerja tanpa batas jam selama libur semester resmi.</li>
                                            <li><strong>Insentif Studi Regional</strong><br /> Belajar di daerah regional memberikan poin tambahan untuk PR, biaya lebih rendah, dan visa kerja pasca-studi yang diperpanjang.</li>
                                            <li><strong>Keselarasan Studi-Migrasi</strong><br /> Daftar keterampilan Australia secara langsung menghubungkan program akademik dengan kebutuhan migrasi, meningkatkan peluang PR Anda.</li>
                                            <li><strong>Pinjaman Pemerintah (HECS-HELP) untuk Penduduk yang Memenuhi Syarat</strong><br /> Penduduk tetap tertentu dapat menggunakan pinjaman HECS-HELP untuk menutup biaya kuliah tanpa pembayaran di muka.</li>
                                            <li><strong>Iklim dan Keragaman Budaya yang Tak Tertandingi</strong><br /> Australia menawarkan berbagai pilihan gaya hidup dan integrasi budaya yang mulus bagi mahasiswa.</li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Kuliah di Australia</h3>
                                        <div className="cities-table-desktop">
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
                                        <Carousel
                                            data={citiesData}
                                            renderItem={(city, index) => (
                                                <>
                                                    <div className="card-header">
                                                        <h4>{city.city}</h4>
                                                    </div>
                                                    <div className="details">
                                                        <div className="detail-item">
                                                            <span className="label">Institusi Utama:</span>
                                                            <span className="value">{city.institutions}</span>
                                                        </div>
                                                        <div className="detail-item">
                                                            <span className="label">Keunggulan Kota:</span>
                                                            <span className="value">{city.highlights}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === "requirements" && (
                                <div id="requirements" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Persyaratan Umum Masuk Kuliah di Australia</h2>
                                        <p>
                                            Baik Anda ingin menempuh program Bachelor, Master, atau PhD, berikut adalah gambaran umum syarat yang harus dipenuhi oleh mahasiswa internasional:
                                        </p>
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
                                                            <td>Telah menyelesaikan pendidikan SMA/sederajat setara Year 12 Australia.
                                                                <br /><br />
                                                                Rata-rata nilai minimal 65–75% atau lebih tinggi untuk jurusan seperti kedokteran, hukum, atau teknik.
                                                                <br /><br />
                                                                Beberapa program memerlukan latar belakang pelajaran tertentu, seperti matematika atau fisika untuk STEM.
                                                            </td>
                                                            <td>
                                                                IELTS Academic minimal 6.5 (tiap band 6.0+).
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 80–90.
                                                                <br />(Beberapa universitas menerima PTE atau Cambridge C1 Advanced).
                                                            </td>
                                                            <td>
                                                                Portofolio atau audisi untuk seni/kreatif.
                                                                <br /><br />
                                                                Tes standar untuk bidang spesifik yang kompetitif.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Master (Magister / S2)</strong></td>
                                                            <td>
                                                                Lulus Bachelor di bidang relevan dengan nilai minimal IPK 3.0/4.0 (65–70%).
                                                                <br /><br />
                                                                Untuk Master berbasis riset, perlu bukti kemampuan penelitian, seperti proposal mini.
                                                            </td>
                                                            <td>
                                                                IELTS Academic 6.5–7.0.
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 90–100.
                                                            </td>
                                                            <td>
                                                                Statement of Purpose, 2–3 surat rekomendasi dari dosen atau profesional, transkrip akademik resmi.
                                                                <br /><br />
                                                                Program tertentu (MBA, Finance) mungkin butuh GMAT/GRE.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>PhD (Doktoral / S3)</strong></td>
                                                            <td>
                                                                Telah meraih Master by research di bidang terkait, atau Bachelor dengan honors dan prestasi tinggi.
                                                                <br /><br />
                                                                Mahasiswa S1 berprestasi luar biasa kadang bisa langsung ke PhD.
                                                                <br /><br />
                                                                <strong>Syarat lain:</strong> {" "}
                                                                Harus memperoleh dukungan supervisor di universitas tujuan untuk proses seleksi PhD.
                                                            </td>
                                                            <td>
                                                                IELTS Academic 6.5–7.0+ (program riset intensif mungkin lebih tinggi).
                                                                <br /><br />
                                                                ATAU
                                                                <br /><br />
                                                                TOEFL iBT 90–100+.
                                                            </td>
                                                            <td>
                                                                Proposal riset mendetail sesuai keilmuan fakultas tujuan.
                                                                <br /><br />
                                                                3 surat rekomendasi dari pembimbing.
                                                                <br /><br />
                                                                Bukti publikasi/konferensi atau karya akademik sangat mendukung.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h2>Timeline dan Proses Aplikasi Kuliah di Australia</h2>
                                        <p>
                                            Australia memiliki dua masa penerimaan utama: Intake Februari (utama, paling banyak pilihan) dan Intake Juli (khusus bisnis, IT, dan sains), cocok bagi pelajar yang menyelesaikan sekolah pertengahan tahun atau ingin pindah program
                                        </p>
                                        <div className="">
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Stage</th>
                                                            <th>Sarjana / S1</th>
                                                            <th>Magister / S2</th>
                                                            <th>Doktoral / S3</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>18–24 bulan sebelum</td>
                                                            <td>Riset jurusan/uni, cek syarat pelajaran & nilai.</td>
                                                            <td>Rangkum program, cari supervisor untuk riset.</td>
                                                            <td>Hubungi supervisor, susun proposal riset.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>12–16 bulan sebelum</td>
                                                            <td>Persiapkan tes bahasa, kumpulkan dokumen.</td>
                                                            <td>Kirim aplikasi + dokumen, daftar beasiswa (Okt–Jan).</td>
                                                            <td>Daftar beasiswa, lengkapkan publikasi.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>8–12 bulan sebelum</td>
                                                            <td>Kirim aplikasi (Okt–Feb).</td>
                                                            <td></td>
                                                            <td>Kirim aplikasi PhD (Nov–Feb).</td>
                                                        </tr>
                                                        <tr>
                                                            <td>4–6 bulan sebelum</td>
                                                            <td>Terima offer, urus visa pelajar.</td>
                                                            <td>Terima offer, bayar tuition, urus visa.</td>
                                                            <td>Terima offer, urus funding & visa.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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
                                        <div className="cost-table-desktop">
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
                                                        {tuitionData.map((item) => (
                                                            <tr key={item.city}>
                                                                <td>{item.city}</td>
                                                                <td>{item.undergrad}</td>
                                                                <td>{item.grad}</td>
                                                                <td>{item.diploma}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <Carousel
                                            data={tuitionData}
                                            renderItem={(cost, index) => (
                                                <>
                                                    <div className="card-header">
                                                        <h4>{cost.city}</h4>
                                                    </div>
                                                    <div className="details">
                                                        <div className="detail-item">
                                                            <span className="label">Universitas (S1):</span>
                                                            <span className="value">{cost.undergrad}</span>
                                                        </div>
                                                        <div className="detail-item">
                                                            <span className="label">Universitas (S2/S3):</span>
                                                            <span className="value">{cost.grad}</span>
                                                        </div>
                                                        <div className="detail-item">
                                                            <span className="label">Diploma / Sertifikat Perguruan Tinggi:</span>
                                                            <span className="value">{cost.diploma}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Hidup Bulanan</h3>
                                        <div className="cost-table-desktop">
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
                                                        {livingCostData.map((item) => (
                                                            <tr key={item.city}>
                                                                <td>{item.city}</td>
                                                                <td>{item.housing}</td>
                                                                <td>{item.foodTransport}</td>
                                                                <td>{item.total}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <Carousel
                                            data={livingCostData}
                                            renderItem={(cost, index) => (
                                                <>
                                                    <div className="card-header">
                                                        <h4>{cost.city}</h4>
                                                    </div>
                                                    <div className="details">
                                                        <div className="detail-item">
                                                            <span className="label">Tempat Tinggal (Berbagi):</span>
                                                            <span className="value">{cost.housing}</span>
                                                        </div>
                                                        <div className="detail-item">
                                                            <span className="label">Makanan, Transportasi, Utilitas:</span>
                                                            <span className="value">{cost.foodTransport}</span>
                                                        </div>
                                                        <div className="detail-item total">
                                                            <span className="label">Total Perkiraan Bulanan:</span>
                                                            <span className="value">{cost.total}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === "work" && (
                                <div id="work" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Hak Bekerja untuk Mahasiswa</h2>
                                        <p>Mahasiswa internasional di Australia menikmati hak bekerja yang murah hati, mendukung stabilitas keuangan dan pengalaman kerja yang sangat berharga:</p>
                                        <ul>
                                            <li><strong>Selama semester akademik</strong><br /> Mahasiswa diizinkan bekerja hingga 40 jam per dua minggu.</li>
                                            <li><strong>Selama libur kuliah resmi</strong><br /> Mahasiswa dapat bekerja tanpa batas jam.</li>
                                            <li><strong>Ketentuan khusus untuk perawatan lansia</strong><br /> Mereka yang bekerja di sektor perawatan lansia tidak memiliki batasan jam kerja hingga setidaknya pertengahan 2025.</li>
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
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
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
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>TAFE dan VET</h3>
                                        <div className="universities-grid">
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
