"use client";

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
import { useEffect, useState, useRef } from "react";

export default function Malaysia() {
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
                            Kuliah di Malaysia, Pendidikan Global dengan biaya terjangkau
                        </h1>
                        <p>
                            Pusat pendidikan dinamis, menawarkan kombinasi langka gelar berkualitas tinggi, dan gaya hidup terjangkau.
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
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Malaysia.webp" />
                                            <img src="/destinations/banners/Browser/Malaysia.webp" alt="Australia Banner" className="content__banner" />
                                        </picture>
                                        <h2>Mengapa Belajar di Malaysia?</h2>
                                        <p>
                                            Malaysia menawarkan keunggulan yang lebih sulit ditemukan di tempat lain—terutama bagi mahasiswa yang menghargai kualitas dan praktikalitas.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Manfaat Utama Belajar di Malaysia</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Gelar Ganda dari Universitas Kelas Dunia</strong
                                                ><br />
                                                Dapatkan gelar dari universitas top UK atau Australia seperti Monash atau Nottingham dengan biaya fraksi, tanpa meninggalkan Malaysia.
                                            </li>
                                            <li>
                                                <strong
                                                >Pendidikan Kelas Dunia Terjangkau</strong
                                                ><br />
                                                Dengan biaya kuliah sekitar $4,000–$7,000/tahun dan biaya hidup rendah, Anda dapat lulus dengan gelar terhormat tanpa utang.
                                            </li>
                                            <li>
                                                <strong
                                                >Bahasa Inggris sebagai Bahasa Instruksi Utama</strong
                                                ><br />
                                                Bahasa Inggris banyak digunakan di universitas, menghilangkan hambatan bahasa sambil memungkinkan Anda belajar bahasa Asia strategis seperti Melayu dan Mandarin.
                                            </li>
                                            <li>
                                                <strong
                                                >Lingkungan Multikultural</strong
                                                ><br />
                                                Campuran unik budaya Melayu, Cina, dan India di Malaysia memberikan keunggulan dalam keterampilan komunikasi lintas budaya.
                                            </li>
                                            <li>
                                                <strong
                                                >Lokasi Strategis untuk Menjelajahi Asia</strong
                                                ><br />
                                                Terletak di jantung Asia Tenggara, Malaysia adalah hub maskapai penerbangan budget, sempurna untuk networking dan eksplorasi budaya.
                                            </li>
                                            <li>
                                                <strong
                                                >Peluang Berkembang di Sektor Berkembang Cepat</strong
                                                ><br />
                                                Temukan peluang magang dan pekerjaan di bidang teknologi, kesehatan, dan industri berkelanjutan.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Belajar di Malaysia</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Institusi Utama</th>
                                                        <th>Sorotan Kota</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>
                                                            University of Nottingham
                                                            Malaysia, Sunway University
                                                        </td>
                                                        <td>
                                                            Ibu kota yang ramai dengan gedung pencakar langit modern, keragaman budaya yang kaya, dan peluang networking karier tak terbatas.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Putrajaya</td>
                                                        <td>
                                                            Heriot-Watt University
                                                            Malaysia
                                                        </td>
                                                        <td>
                                                            Lingkungan aman dan terjangkau dengan arsitektur modern unik dan ruang hijau.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>
                                                            Newcastle University
                                                            Medicine Malaysia (NUMed)
                                                        </td>
                                                        <td>
                                                            Biaya hidup terjangkau dengan akses cepat ke Singapura untuk magang lintas batas.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sarawak</td>
                                                        <td>
                                                            Curtin University, Swinburne
                                                            University
                                                        </td>
                                                        <td>
                                                            Budaya kaya dan beragam serta lingkungan alam yang luar biasa untuk pembelajaran langsung.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Selangor</td>
                                                        <td>
                                                            Monash University Malaysia,
                                                            Xiamen University
                                                        </td>
                                                        <td>
                                                            Negara bagian ramah mahasiswa dengan lingkungan dinamis dan gerbang ke ibu kota.
                                                        </td>
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
                                        <h2>Persyaratan Masuk</h2>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Program</th>
                                                        <th>Persyaratan Akademik</th>
                                                        <th>Persyaratan Bahasa</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong
                                                            >Gelar Sarjana</strong
                                                            >
                                                        </td>
                                                        <td>
                                                            Menyelesaikan sekolah menengah dengan rata-rata minimal 70–80%.
                                                        </td>
                                                        <td>
                                                            IELTS 5.5–6.0 atau TOEFL iBT 60–78.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong
                                                            >Gelar Magister</strong
                                                            >
                                                        </td>
                                                        <td>
                                                            Gelar Sarjana di bidang terkait dengan IPK minimal 3.0/4.0.
                                                        </td>
                                                        <td>
                                                            IELTS 6.0–6.5 atau TOEFL iBT 79–90.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>Gelar PhD</strong>
                                                        </td>
                                                        <td>
                                                            Gelar Magister di disiplin relevan dengan latar belakang penelitian kuat.
                                                        </td>
                                                        <td>
                                                            IELTS 6.5+ atau TOEFL iBT 90+.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h2>Jadwal Pendaftaran</h2>
                                        <p>Mayoritas universitas di Malaysia membuka dua gelombang penerimaan utama:</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Gelombang</th>
                                                        <th>Periode Pendaftaran</th>
                                                        <th>Mulai Kuliah</th>
                                                        <th>Waktu Ideal untuk Mulai Persiapan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Intake Musim Gugur</td>
                                                        <td>Januari – Juni</td>
                                                        <td>September</td>
                                                        <td>Mulai riset universitas dan siapkan dokumen pada Oktober–Desember tahun sebelumnya.</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Intake Musim Semi</td>
                                                        <td>September – Desember (tahun sebelumnya)</td>
                                                        <td>Maret</td>
                                                        <td>Mulai persiapan pada Mei–Juli agar cukup waktu untuk tes bahasa, legalisasi dokumen, dan proses visa.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <p> <strong>Tips Pro:</strong>
                                            <br />
                                            Daftar minimal 3–4 bulan sebelum batas akhir agar tidak terburu-buru. Ini memberi waktu untuk mengurus akomodasi, tiket pesawat, dan visa pelajar.</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup di Malaysia</h2>
                                        <p>
                                            Malaysia dikenal menawarkan biaya kuliah dan hidup paling terjangkau di Asia. Berikut rincian untuk membantu Anda merencanakan anggaran.
                                        </p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Biaya Kuliah (per tahun)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Sarjana</th>
                                                        <th>Pascasarjana</th>
                                                        <th>Kuliah/Diploma</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 5,000 – 8,000</td>
                                                        <td>USD 2,500 – 4,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 3,500 – 6,000</td>
                                                        <td>USD 4,500 – 7,000</td>
                                                        <td>USD 2,200 – 3,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 3,200 – 5,500</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 2,000 – 3,500</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Perkiraan Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Akomodasi (Bersama)</th>
                                                        <th>
                                                            Makanan, Transportasi & Utilitas
                                                        </th>
                                                        <th>Total Biaya Bulanan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 150 – 250</td>
                                                        <td>USD 215 - 340</td>
                                                        <td>USD 365 – 590</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 130 – 200</td>
                                                        <td>USD 195 - 300</td>
                                                        <td>USD 325 – 500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 120 – 180</td>
                                                        <td>USD 185 - 285</td>
                                                        <td>USD 305 – 465</td>
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
                                        <ul>
                                            <li>
                                                <strong
                                                >Kerja Paruh Waktu Selama Studi</strong
                                                ><br />
                                                Mahasiswa internasional diizinkan bekerja paruh waktu hingga 20 jam per minggu selama liburan semester atau liburan lebih dari 7 hari.
                                            </li>
                                            <li>
                                                <strong
                                                >Persyaratan Izin Kerja</strong
                                                ><br />
                                                Anda harus mengajukan persetujuan melalui Departemen Imigrasi Malaysia dengan bantuan universitas sebelum memulai kerja.
                                            </li>
                                            <li>
                                                <strong
                                                >Peluang Kerja Pasca-Studi</strong
                                                ><br />
                                                Meskipun Malaysia tidak memiliki visa kerja pasca-studi terbuka, Anda dapat mengamankan Employment Pass jika menerima tawaran pekerjaan penuh waktu dari perusahaan Malaysia.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Malaysia</h2>
                                        <p>
                                            Malaysia menawarkan banyak beasiswa yang dapat membuat pendidikan Anda lebih mudah diakses. Dari penghargaan pemerintah hingga pendanaan spesifik universitas, Malaysia membuka pintu bagi mahasiswa berbakat dari seluruh dunia.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >Tanyakan Tentang Beasiswa</a
                                        >
                                    </div>
                                    <div className="content-block">
                                        <h3>Jenis Beasiswa Utama</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Malaysia International Scholarship (MIS)</strong
                                                ><br />
                                                Ditawarkan oleh Kementerian Pendidikan Malaysia, beasiswa ini mendukung mahasiswa pascasarjana luar biasa dan sering mencakup biaya kuliah dan tunjangan hidup.
                                            </li>
                                            <li>
                                                <strong
                                                >Beasiswa Spesifik Universitas</strong
                                                ><br />
                                                Kebanyakan universitas Malaysia memiliki beasiswa berbasis prestasi sendiri, seperti University of Malaya Excellence Award dan Monash University Malaysia Scholarships.
                                            </li>
                                            <li>
                                                <strong
                                                >Beasiswa Belt and Road</strong
                                                ><br />
                                                Untuk mahasiswa dari negara-negara Belt and Road Initiative, Malaysia berpartisipasi dalam program kolaboratif yang mencakup biaya kuliah dan biaya hidup.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Semua Institusi di Malaysia</h2>
                                        <p>
                                            Belajar di universitas swasta top Malaysia dan kampus cabang internasional.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Public Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">International Islamic University Malaysia (IIUM)</div>
                                            <div className="university-item">Islamic Science University of Malaysia (USIM)</div>
                                            <div className="university-item">Universiti Kebangsaan Malaysia (UKM) / The National University of Malaysia</div>
                                            <div className="university-item">Universiti Malaysia Kelantan (UMK)</div>
                                            <div className="university-item">Universiti Malaysia Pahang (UMP)</div>
                                            <div className="university-item">Universiti Malaysia Perlis (UniMAP)</div>
                                            <div className="university-item">Universiti Malaysia Sabah (UMS)</div>
                                            <div className="university-item">Universiti Malaysia Sarawak (UNIMAS)</div>
                                            <div className="university-item">Universiti Malaysia Terengganu (UMT)</div>
                                            <div className="university-item">Universiti Pendidikan Sultan Idris (UPSI)</div>
                                            <div className="university-item">Universiti Pertahanan Nasional Malaysia</div>
                                            <div className="university-item">Universiti Putra Malaysia (UPM)</div>
                                            <div className="university-item">Universiti Sains Malaysia (USM)</div>
                                            <div className="university-item">Universiti Sultan Zainal Abidin (UNiSZA)</div>
                                            <div className="university-item">Universiti Teknikal Malaysia Melaka</div>
                                            <div className="university-item">Universiti Teknologi Malaysia (UTM)</div>
                                            <div className="university-item">University of Malaya (UM)</div>
                                            <div className="university-item">Universiti Teknologi MARA (UiTM)</div>
                                            <div className="university-item">Universiti Tun Hussein Onn Malaysia (UTHM)</div>
                                            <div className="university-item">Universiti Utara Malaysia (UUM)</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Private Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">AIMST University</div>
                                            <div className="university-item">Al-Madinah International University (MEDIU)</div>
                                            <div className="university-item">Asia e University (AeU)</div>
                                            <div className="university-item">Asia Metropolitan University (AMU)</div>
                                            <div className="university-item">Asia Pacific University of Technology & Innovation (APU)</div>
                                            <div className="university-item">Asia School Of Business (ASB)</div>
                                            <div className="university-item">Binary University of Management & Entrepreneurship (BUME)</div>
                                            <div className="university-item">City University Malaysia</div>
                                            <div className="university-item">DRB-HICOM University Of Automotive Malaysia</div>
                                            <div className="university-item">Enforcement, Leadership and Management University (ELMU)</div>
                                            <div className="university-item">HELP University - Damansara Heights Campus</div>
                                            <div className="university-item">INCEIF University</div>
                                            <div className="university-item">Infrastructure University Kuala Lumpur (IUKL)</div>
                                            <div className="university-item">International Medical University (IMU)</div>
                                            <div className="university-item">INTI International University</div>
                                            <div className="university-item">KPJ Healthcare University</div>
                                            <div className="university-item">Limkokwing University of Creative Technology (LUCT)</div>
                                            <div className="university-item">MAHSA University</div>
                                            <div className="university-item">Malaysian Cooperative Entrepreneurship University</div>
                                            <div className="university-item">Malaysian Institute For Supply Chain Innovation (MISI)</div>
                                            <div className="university-item">Management and Science University (MSU)</div>
                                            <div className="university-item">Mila University</div>
                                            <div className="university-item">Multimedia University (MMU)</div>
                                            <div className="university-item">Netherlands Maritime Institute Of Technology (NMIT)</div>
                                            <div className="university-item">Nilai University</div>
                                            <div className="university-item">Open University Malaysia (OUM)</div>
                                            <div className="university-item">Perdana University</div>
                                            <div className="university-item">Quest International University (QIU)</div>
                                            <div className="university-item">Raffles University (RU)</div>
                                            <div className="university-item">SEGi University</div>
                                            <div className="university-item">Selangor Islamic University (UIS)</div>
                                            <div className="university-item">Sunway University</div>
                                            <div className="university-item">Taylor's University</div>
                                            <div className="university-item">Tunku Abdul Rahman University of Management and Technology (TARUMT), Main Campus</div>
                                            <div className="university-item">UCSI University</div>
                                            <div className="university-item">UNITAR International University</div>
                                            <div className="university-item">Universiti Kuala Lumpur (UniKL)</div>
                                            <div className="university-item">Universiti Malaya - Wales (UM-Wales)</div>
                                            <div className="university-item">Universiti Poly-Tech Malaysia-UPTM</div>
                                            <div className="university-item">Universiti Selangor (UNISEL) Shah Alam Campus</div>
                                            <div className="university-item">Universiti Teknologi Petronas (UTP)</div>
                                            <div className="university-item">Universiti Tenaga Nasional (UNITEN)</div>
                                            <div className="university-item">Universiti Tun Abdul Razak (UNIRAZAK)</div>
                                            <div className="university-item">Universiti Tunku Abdul Rahman (UTAR)</div>
                                            <div className="university-item">University Islam Melaka (UNIMEL)</div>
                                            <div className="university-item">University Malaysia of Computer Science & Engineering (UNIMY)</div>
                                            <div className="university-item">University of Cyberjaya (UoC)</div>
                                            <div className="university-item">University of Technology Sarawak (UTS)</div>
                                            <div className="university-item">University of Wollongong Malaysia</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>University Colleges</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Asian Women’s Leadership University College (AWLUC)</div>
                                            <div className="university-item">BERJAYA University College</div>
                                            <div className="university-item">First City University College</div>
                                            <div className="university-item">Han Chiang University College of Communication</div>
                                            <div className="university-item">i-CATS University College (i-CATS)</div>
                                            <div className="university-item">Kings University College</div>
                                            <div className="university-item">Kuala Lumpur Metropolitan University College (KLMU)</div>
                                            <div className="university-item">Lincoln University College</div>
                                            <div className="university-item">Manipal University College Malaysia (MUCM)</div>
                                            <div className="university-item">North Borneo University College (NBUC)</div>
                                            <div className="university-item">Saito University College</div>
                                            <div className="university-item">Southern University College</div>
                                            <div className="university-item">Twintech International University College of Technology (IUCTT)</div>
                                            <div className="university-item">University College MAIWP International (UCMI)</div>
                                            <div className="university-item">University College of Aviation Malaysia (UniCAM)</div>
                                            <div className="university-item">University College TATI (UC TATI)</div>
                                            <div className="university-item">Widad University College</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Foreign University Branch Campuses</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Curtin University Malaysia</div>
                                            <div className="university-item">Heriot-Watt University Malaysia</div>
                                            <div className="university-item">Monash University Malaysia</div>
                                            <div className="university-item">Newcastle University Medicine Malaysia (NUMed)</div>
                                            <div className="university-item">RCSI & UCD Malaysia Campus (RUMC)</div>
                                            <div className="university-item">Swinburne University of Technology Sarawak Campus</div>
                                            <div className="university-item">University of Nottingham Malaysia</div>
                                            <div className="university-item">University of Reading Malaysia</div>
                                            <div className="university-item">University of Southampton Malaysia (UoSM)</div>
                                            <div className="university-item">Xiamen University Malaysia (XMUM)</div>
                                        </div>
                                        <p className="partners__many">*Daftar ini menyoroti hanya sebagian kecil dari mitra universitas lengkap kami.</p>

                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Timeline Aplikasi</h2>
                                        <p>
                                            Perencanaan ke depan sangat penting. Malaysia menawarkan dua intake utama untuk sebagian besar universitas, tetapi ini dapat bervariasi.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Intake</th>
                                                        <th>Periode Aplikasi</th>
                                                        <th>Kelas Dimulai</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Fall Intake</td>
                                                        <td>Januari – Juni</td>
                                                        <td>September</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spring Intake</td>
                                                        <td>
                                                            September – Desember
                                                            (tahun sebelumnya)
                                                        </td>
                                                        <td>Maret</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p style={{ marginTop: "20px" }}>
                                            <strong>Tips Pro:</strong>
                                            <br />
                                            Selalu ajukan setidaknya 3–4 bulan sebelum tenggat untuk menghindari stres mendadak. Buffer ini membantu Anda mengamankan akomodasi, penerbangan, dan visa mahasiswa tepat waktu.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Belajar di Malaysia?</h2>
                        <p>
                            Biarkan konselor ahli kami memandu Anda melalui setiap langkah prosesnya.
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
    );
}
