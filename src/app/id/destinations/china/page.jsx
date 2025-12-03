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
import { useEffect, useState } from "react";

export default function China() {
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
                        <h1>Belajar di Cina, Pelajari Tempat Ekonomi Dunia Memimpin</h1>
                        <p>
                            Rasakan beasiswa kelas dunia, imersi ekonomi, dan penemuan budaya—semua dalam satu perjalanan transformatif yang hanya ditemukan di Cina.
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
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <img src="../../destinations/banners/China.jpg" className="content__banner" alt="" />
                                        <h2>Mengapa Belajar di Cina?</h2>
                                        <p>
                                            Dengan peluang beasiswa yang tak tertandingi, imersi di ekonomi terbesar dunia, keunggulan bahasa, dan pembelajaran budaya aktif, Cina menawarkan pengalaman transformatif kepada mahasiswa internasional yang jauh melampaui opsi studi luar negeri konvensional.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Manfaat Utama Belajar di Cina</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Akses ke Ekonomi Terbesar dan Tumbuh Tercepat di Dunia</strong>
                                                Paparan langsung ke ekonomi terbesar kedua di dunia, dengan wawasan langsung ke manufaktur global, teknologi, dan jaringan bisnis internasional.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Kelas Dunia untuk Semua Jurusan</strong><br />
                                                Cina menawarkan persentase beasiswa penuh yang lebih tinggi—bahkan untuk jurusan STEM dan bisnis—tanpa persaingan intens yang sama seperti di negara Barat.
                                            </li>
                                            <li>
                                                <strong>Keunggulan Bahasa Mandarin</strong><br /> Dapatkan keunggulan langka di pasar kerja internasional dengan pelatihan bahasa imersif, sering disubsidi oleh universitas.
                                            </li>
                                            <li>
                                                <strong>Imersi Budaya Unik</strong><br /> Rasakan peradaban 5.000 tahun dengan tradisi aktif di bidang kedokteran, filsafat, dan sains yang terintegrasi ke dalam kehidupan mahasiswa sehari-hari.
                                            </li>
                                            <li>
                                                <strong
                                                >Program STEM, AI, dan Teknik Pionir</strong
                                                ><br />
                                                Universitas bermitra langsung dengan perusahaan teknologi terkemuka seperti Baidu, ByteDance, dan DJI, memberikan mahasiswa akses ke lab yang membentuk dunia masa depan.
                                            </li>
                                            <li>
                                                <strong>Biaya Kuliah Terjangkau dan Biaya Hidup Rendah</strong><br />
                                                Biaya belajar dan hidup di Cina sering kurang dari setengah program setara di negara Barat.
                                            </li>
                                            <li>
                                                <strong>Gerbang ke Karir Asia-Pasifik</strong><br /> Jadilah bagian dari jaringan pendidikan dan bisnis lintas batas yang luas di pusat ekonomi abad ke-21.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>
                                            Memahami Tingkatan Universitas: 211, 985, dan Double First Class
                                        </h3>
                                        <p>
                                            Kategori ini mewakili kualitas, prestise, dan inisiatif strategis pemerintah yang bertujuan meningkatkan daya saing pendidikan tinggi Cina.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Universitas 211</strong><br /> Kelompok ~100 universitas teratas yang menerima pendanaan khusus pemerintah untuk meningkatkan kualitas pendidikan dan penelitian.
                                            </li>
                                            <li>
                                                <strong>Universitas 985</strong><br /> Subkelompok elit universitas 211 yang ditargetkan untuk mencapai standar institusi terkenal dunia seperti Harvard atau MIT.
                                            </li>
                                            <li>
                                                <strong>Double First Class</strong><br /> Inisiatif terbaru untuk menciptakan universitas kelas dunia dan disiplin kelas dunia, membuat pemilihan lebih tepat dan dinamis.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>5 Kota Terbaik untuk Belajar di Cina</h3>
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
                                                        <td>Beijing</td>
                                                        <td>Tsinghua University, Peking University</td>
                                                        <td>
                                                            Warisan sejarah dan budaya yang kaya, pusat teknologi yang dinamis
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>Fudan University, Shanghai Jiao Tong University</td>
                                                        <td>Vibe kota internasional, jaringan global</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>Sun Yat-sen University</td>
                                                        <td>Gerbang ke Asia Tenggara, biaya hidup terjangkau</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>Zhejiang University</td>
                                                        <td>Lingkungan indah, industri teknologi kuat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>Sichuan University</td>
                                                        <td>Masakan unik, gaya hidup santai, berkembang pesat</td>
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
                                    </div>
                                    <div className="content-block">
                                        <h3>Gelar Sarjana</h3>
                                        <ul>
                                            <li>
                                                <strong>Persyaratan Akademik</strong> <br /> Transkrip resmi pendidikan menengah dengan prestasi akademik baik (minimum 60-80% tergantung tingkatan universitas).
                                            </li>
                                            <li>
                                                <strong>Kemahiran Bahasa</strong> <br /> Untuk program bahasa Inggris, IELTS 6.5+ atau TOEFL 80-90+. Untuk program bahasa Mandarin, HSK Level 4.
                                            </li>
                                            <li>
                                                <strong>Lainnya</strong> <br /> Ujian masuk atau wawancara mungkin diperlukan untuk program kompetitif.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Gelar Magister</h3>
                                        <ul>
                                            <li>
                                                <strong>Persyaratan Akademik</strong> <br /> Gelar Sarjana relevan dengan IPK minimum 3.0/4.0 atau setara.
                                            </li>
                                            <li>
                                                <strong>Kemahiran Bahasa</strong> <br /> Untuk program bahasa Inggris, IELTS 6.5–7.0 atau TOEFL 90–100+. Untuk program bahasa Mandarin, HSK Level 5.
                                            </li>
                                            <li>
                                                <strong>Dokumen Pendukung</strong> <br /> 2+ surat rekomendasi, Pernyataan Tujuan (SOP), dan proposal penelitian untuk program berbasis penelitian.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Gelar PhD (Doktor)</h3>
                                        <ul>
                                            <li>
                                                <strong>Persyaratan Akademik</strong> <br /> Gelar Magister di bidang terkait dengan latar belakang penelitian kuat.
                                            </li>
                                            <li>
                                                <strong>Kemahiran Bahasa</strong> <br /> IELTS 6.5–7.0+ atau TOEFL 90–100+ untuk program bahasa Inggris. HSK Level 5 atau lebih tinggi untuk program bahasa Mandarin.
                                            </li>
                                            <li>
                                                <strong>Dokumen Pendukung</strong> <br /> Proposal penelitian detail, 3 surat rekomendasi, dan bukti publikasi penelitian.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Biaya Kuliah & Hidup di Cina</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Rata-rata Biaya Kuliah Tahunan & Biaya Hidup Bulanan</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Kota</th>
                                                        <th>Biaya Kuliah Sarjana (p.a.)</th>
                                                        <th>Biaya Kuliah Pascasarjana (p.a.)</th>
                                                        <th>Biaya Hidup (p.m.)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Beijing</td>
                                                        <td>$3,500 – $5,000</td>
                                                        <td>$4,000 – $7,500</td>
                                                        <td>$700 – $1,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$4,500 – $8,000</td>
                                                        <td>$800 – $1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>$2,500 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$500 – $1,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$600 – $1,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>$2,200 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$400 – $900</td>
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
                                            Kebijakan yang berkembang semakin memungkinkan mahasiswa internasional untuk melengkapi pendidikan mereka dengan pekerjaan paruh waktu dan mengeksplorasi opsi karir pasca-studi.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Pekerjaan Paruh Waktu</strong> <br /> Mahasiswa dapat bekerja hingga 20 jam per minggu selama semester (dan penuh waktu selama liburan) setelah mendapatkan persetujuan dari universitas dan Biro Keamanan Publik (PSB) setempat.
                                            </li>
                                            <li>
                                                <strong>Pekerjaan Pasca-Studi</strong> <br /> Lulusan yang mendapatkan kontrak kerja dengan pemberi kerja Cina dapat mengubah visa mahasiswa mereka menjadi visa Z (visa kerja) untuk bekerja secara legal di Cina.
                                            </li>
                                        </ul>
                                        <p>
                                            Lulusan dari institusi Cina sering menerima pertimbangan preferensial karena kualifikasi yang diakui dan kemahiran bahasa Mandarin.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Beasiswa di Cina</h2>
                                        <p>
                                            Cina menawarkan peluang pendanaan yang luas yang membuat pendidikan berkualitas tinggi lebih mudah diakses dari sebelumnya. Bahasa Mandarin tidak diperlukan untuk sebagian besar program bahasa Inggris, membuat proses aplikasi dapat diakses oleh mahasiswa di seluruh dunia.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >Tanyakan Tentang Beasiswa</a
                                        >
                                    </div>
                                    <div className="content-block">
                                        <h3>Jenis Beasiswa yang Tersedia</h3>
                                        <ul>
                                            <li>
                                                <strong>Beasiswa Pemerintah Cina (CSC)</strong> <br /> Program paling komprehensif, mencakup biaya kuliah penuh, akomodasi, tunjangan hidup, dan asuransi kesehatan untuk semua tingkat gelar.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Confucius Institute</strong> <br /> Dirancang untuk mahasiswa yang tertarik dengan bahasa dan studi budaya Cina, memberikan pendanaan yang murah hati untuk program bahasa.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Pemerintah Lokal</strong> <br /> Kota-kota besar seperti Beijing dan Shanghai menawarkan beasiswa untuk menarik talenta global teratas, sering termasuk pembebasan biaya kuliah dan biaya hidup.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Khusus Universitas</strong> <br /> Institusi terkemuka seperti Tsinghua dan Peking University memberikan penghargaan berbasis prestasi untuk keunggulan akademik dan potensi penelitian.
                                            </li>
                                            <li>
                                                <strong>Beasiswa Belt and Road</strong> <br /> Beasiswa khusus untuk mahasiswa dari negara peserta untuk mempromosikan pertukaran pendidikan dan kerja sama global.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Semua Institusi di Cina</h2>
                                        <p>
                                            Belajar di universitas elit Cina, termasuk anggota inisiatif 211, 985, dan Double First Class yang bergengsi.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Featured Universities</h3>
                                        <div className="featured-uni-grid">

                                            <div className="featured-uni-item">
                                                <img src="../../universities/China/BIoT.svg" alt="" />
                                                <p>
                                                    Beijing Institute of Technology
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/China/HIoT.gif" alt="" />
                                                <p>
                                                    Harbin Institute of Technology
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/China/UShanghai.svg" alt="" />
                                                <p>
                                                    Shanghai University
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../../universities/China/Xian.png" alt="" />
                                                <p>
                                                    Xi-An JiaoTong - Liverpool University
                                                </p>
                                            </div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Beihang University</div>
                                            <div className="university-item">Beijing Institute of Technology</div>
                                            <div className="university-item">Beijing University of Posts and Telecomunication (BUPT)</div>
                                            <div className="university-item">Beijing Normal University</div>
                                            <div className="university-item">Fudan University</div>
                                            <div className="university-item">Harbin Institute of Technology</div>
                                            <div className="university-item">Harbin Institute of Technology, Shenzhen</div>
                                            <div className="university-item">Hefei University of Technology</div>
                                            <div className="university-item">Huazhong University of Science and Technology (HUST)</div>
                                            <div className="university-item">Nanjing University</div>
                                            <div className="university-item">Nanjing University of Science and Technology</div>
                                            <div className="university-item">Nankai University</div>
                                            <div className="university-item">Ningbo University</div>
                                            <div className="university-item">Northwestern Polytechnical University, Xi'an, Shaanxi, China</div>
                                            <div className="university-item">Peking Union Medical College</div>
                                            <div className="university-item">Peking University</div>
                                            <div className="university-item">Renmin University of China</div>
                                            <div className="university-item">Shandong University</div>
                                            <div className="university-item">Shang Hai International Studies University (SISU)</div>
                                            <div className="university-item">Shanghai Jiao Tong University</div>
                                            <div className="university-item">Shanghai Polytechnic University, Xi'an, Shaanxi</div>
                                            <div className="university-item">Shanghai University</div>
                                            <div className="university-item">Sichuan Agricultural University</div>
                                            <div className="university-item">Sichuan University</div>
                                            <div className="university-item">South China Normal University</div>
                                            <div className="university-item">South China University of Technology</div>
                                            <div className="university-item">Southern University of Science and Technology (SUStech)</div>
                                            <div className="university-item">Sun Yat Sen University (SYSU)</div>
                                            <div className="university-item">TianJin University</div>
                                            <div className="university-item">TongJi University (Shanghai)</div>
                                            <div className="university-item">University of Science and Technology of China</div>
                                            <div className="university-item">Wuhan University</div>
                                            <div className="university-item">Xi-An JiaoTong - Liverpool University</div>
                                            <div className="university-item">Zhejiang University</div>
                                            <div className="university-item">Zhejiang University of Finance and Economics (ZUFE)</div>
                                            <div className="university-item">Zhejiang University of Science and Technology</div>
                                            <div className="university-item">Zhejiang University of Technology</div>
                                        </div>

                                        <p className="partners__many">*Daftar ini menyoroti hanya sebagian kecil dari mitra universitas lengkap kami.</p>

                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Jadwal Masuk Universitas Utama</h2>
                                        <p>
                                            Universitas Cina umumnya menawarkan dua jadwal masuk utama setiap tahun, dengan jadwal masuk Musim Gugur sebagai yang paling populer untuk program gelar penuh.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Jadwal Masuk Musim Gugur (Jadwal Masuk Utama)</strong> <br /> Dimulai pada September. Aplikasi biasanya dibuka dari Januari hingga Juni. Ini menawarkan pilihan kursus terluas.
                                            </li>
                                            <li>
                                                <strong>Jadwal Masuk Musim Semi</strong> <br /> Dimulai pada Maret. Aplikasi biasanya dibuka dari September hingga Desember tahun sebelumnya. Opsi ini kurang umum dan terbaik untuk mereka yang melewatkan tenggat musim gugur.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Belajar di Cina?</h2>
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
