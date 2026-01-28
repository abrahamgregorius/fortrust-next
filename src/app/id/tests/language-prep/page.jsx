"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    BookOpen,
    FileText,
    GraduationCap,
    LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function LanguagePrepID() {
    const [activeTab, setActiveTab] = useState("ielts");

    const tabs = [
        { id: "ielts", label: "IELTS", icon: <BookOpen /> },
        { id: "toefl", label: "TOEFL", icon: <FileText /> },
        { id: "hsk", label: "HSK", icon: <GraduationCap /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Persiapan Tes Bahasa
                        </h1>
                        <h2 className="dark-text">IELTS, TOEFL, HSK</h2>
                        <p>
                            Kuasai tes kemampuan bahasa Anda dengan bimbingan ahli dan program persiapan yang komprehensif.
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
                            {activeTab === "ielts" && (
                                <div id="ielts" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Panduan Lengkap untuk IELTS</h2>
                                        <p>
                                            Membuktikan kemampuan bahasa Inggris Anda sering kali merupakan persyaratan wajib ketika Anda berencana untuk belajar atau bekerja di luar negeri. <strong></strong> adalah salah satu tes kemampuan bahasa Inggris yang paling diakui di seluruh dunia. Diterima oleh lebih dari 11.000 institusi, termasuk universitas peringkat teratas dan organisasi profesional.
                                        </p>
                                        <p>
                                            <strong></strong> IELTS mengevaluasi keterampilan bahasa Inggris Anda melalui empat bagian: Mendengarkan, Membaca, Menulis, dan Berbicara. Ditawarkan dalam versi Academic dan General Training, IELTS adalah pilihan utama untuk penerimaan universitas, imigrasi, dan registrasi profesional di <strong></strong>. Peserta tes dapat memilih antara format berbasis kertas dan berbasis komputer.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Perbedaan Utama antara IELTS & TOEFL</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Fitur</th>
                                                        <th>IELTS</th>
                                                        <th>Keuntungan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Bagian Speaking</td>
                                                        <td>Tatap muka dengan penguji</td>
                                                        <td>Lebih alami & Personal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenis Pertanyaan</td>
                                                        <td>Format yang bervariasi</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Durasi Tes</td>
                                                        <td>Sekitar 3 jam</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ketersediaan Hasil Tes</td>
                                                        <td>Hasil dalam 13 hari</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Validitas Skor</td>
                                                        <td>Berlaku selama dua tahun</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Kapan Anda Harus Mengambil IELTS?</h3>
                                        <p>
                                            Anda harus merencanakan untuk mengambil tes IELTS pada semester pertama tahun terakhir sekolah menengah Anda, atau beberapa bulan sebelum batas waktu aplikasi universitas. Waktu ini memberi Anda jendela yang nyaman untuk menerima hasil Anda, dan jika diperlukan, untuk mengambil tes ulang untuk meningkatkan skor Anda. Persiapan awal memastikan Anda memenuhi persyaratan aplikasi dan memberi Anda peluang terbaik untuk mencapai hasil yang diinginkan sebelum tenggat waktu penting.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Format Ujian IELTS</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Fitur / Bagian</th>
                                                        <th>Bagian</th>
                                                        <th>Jumlah Pertanyaan</th>
                                                        <th>Durasi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading</td>
                                                        <td>3 bagian</td>
                                                        <td>40 pertanyaan</td>
                                                        <td>60 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>4 bagian</td>
                                                        <td>40 pertanyaan</td>
                                                        <td>30 Menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>2 tugas</td>
                                                        <td></td>
                                                        <td>60 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>3 bagian</td>
                                                        <td>Tatap muka</td>
                                                        <td>11-14 menit</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Ekuivalensi Ujian IELTS, TOEFL, Cambridge English</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Band IELTS</th>
                                                        <th>TOEFL iBT</th>
                                                        <th>Cambridge English Scale</th>
                                                        <th>Ujian Cambridge</th>
                                                        <th>Persyaratan Masuk Umum untuk</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>9</td><td>118–120</td><td>200–230</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8.5</td><td>115–117</td><td>191–199</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8</td><td>110–114</td><td>185–190</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td><strong>7.5</strong></td><td><strong>102–109</strong></td><td><strong>176–184</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>7</strong></td><td><strong>94–101</strong></td><td><strong>169–175</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>6.5</strong></td><td><strong>79–93</strong></td><td><strong>162–168</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor / Master Degree, depend on the subject you choose</strong></td></tr>
                                                    <tr><td><strong>6</strong></td><td><strong>60–78</strong></td><td><strong>154–161</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor Degree</strong></td></tr>
                                                    <tr><td>5.5</td><td>46–59</td><td>147–153</td><td>B2 First (FCE)</td><td>Diploma</td></tr>
                                                    <tr><td>5</td><td>35–45</td><td>140–146</td><td>B1 Preliminary (PET)</td><td>Diploma</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>
                                            <strong>
                                                Rentang skor yang baik untuk IELTS, TOEFL dan Cambridge English Test, berada dalam area yang disorot.
                                            </strong>
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Mempersiapkan IELTS</h3>
                                        <p>
                                            Mempersiapkan IELTS tidak harus membebani. Di Fortrust, kami mengkhususkan diri dalam membantu siswa mencapai skor IELTS target mereka dengan coaching yang disesuaikan, tes simulasi, dan bimbingan 1-on-1 atau dalam format grup, online dan offline. Jangan biarkan bahasa Inggris menjadi penghalang — jadikan itu paspor Anda ke dunia.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "toefl" && (
                                <div id="toefl" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Panduan Lengkap untuk TOEFL</h2>
                                        <p>
                                            Bermimpi belajar di <strong></strong> atau universitas kelas dunia di luar negeri? Keterampilan bahasa Inggris Anda bisa menjadi paspor Anda — dan TOEFL adalah tiket Anda. Tes ini tidak hanya mengukur tata bahasa atau kosakata; tes ini mengukur kesiapan Anda untuk berkembang dalam dunia akademik berbahasa Inggris. Skor TOEFL yang kuat dapat membuka jalur langsung ke universitas di luar negeri dan program akademik khusus.
                                        </p>
                                        <p>
                                            <strong></strong> Test of English as a Foreign Language (TOEFL) adalah salah satu tes kemampuan bahasa Inggris yang paling dipercaya di seluruh dunia. Meskipun diperlukan oleh semua universitas di AS, tes ini juga diterima oleh ribuan institusi di negara-negara seperti <strong></strong>. Versi paling populer, <strong></strong>, mengevaluasi Membaca, Mendengarkan, Berbicara, dan Menulis, memberikan universitas gambaran yang jelas tentang keterampilan bahasa Inggris praktis Anda.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Perbedaan Utama antara TOEFL & IELTS</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Fitur</th>
                                                        <th>TOEFL</th>
                                                        <th>Keuntungan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Bagian Speaking</td>
                                                        <td>Direkam ke mikrofon</td>
                                                        <td>Tidak ada tekanan penguji tatap muka</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jenis Pertanyaan</td>
                                                        <td>Kebanyakan pilihan ganda</td>
                                                        <td>Membuatnya mudah bagi peserta tes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Durasi Tes</td>
                                                        <td>Sekitar 3 jam</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ketersediaan Hasil Tes</td>
                                                        <td>Hasil dalam 6 hari</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Validitas Skor</td>
                                                        <td>Berlaku selama dua tahun</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Kapan Anda Harus Mengambil Tes TOEFL?</h3>
                                        <p>
                                            Anda harus merencanakan untuk mengambil tes TOEFL pada semester pertama tahun terakhir sekolah menengah Anda, atau beberapa bulan sebelum batas waktu aplikasi universitas. Waktu ini memberi Anda jendela yang nyaman untuk menerima hasil Anda, dan jika diperlukan, untuk mengambil tes ulang untuk meningkatkan skor Anda. Persiapan awal memastikan Anda memenuhi persyaratan aplikasi dan memberi Anda peluang terbaik untuk mencapai hasil yang diinginkan sebelum tenggat waktu penting.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Format Ujian TOEFL (iBT)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Fitur / Bagian</th>
                                                        <th>Bagian</th>
                                                        <th>Pertanyaan</th>
                                                        <th>Durasi</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading</td>
                                                        <td>3 bagian</td>
                                                        <td>36-56 pertanyaan</td>
                                                        <td>60-80 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>4 bagian</td>
                                                        <td>28-39 pertanyaan</td>
                                                        <td>41-57 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>2 tugas</td>
                                                        <td></td>
                                                        <td>50 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>6 tugas</td>
                                                        <td>(direkam)</td>
                                                        <td>20 menit</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Ekuivalensi Skor TOEFL</h3>
                                        <p>Lihat tabel di bawah ini untuk perbandingan skor lengkap antara IELTS, TOEFL, dan Cambridge English.</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>IELTS Band</th>
                                                        <th>TOEFL iBT</th>
                                                        <th>Cambridge English Scale</th>
                                                        <th>Cambridge Exam</th>
                                                        <th>General Entry Requirement for</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>9</td><td>118–120</td><td>200–230</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8.5</td><td>115–117</td><td>191–199</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8</td><td>110–114</td><td>185–190</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td><strong>7.5</strong></td><td><strong>102–109</strong></td><td><strong>176–184</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>7</strong></td><td><strong>94–101</strong></td><td><strong>169–175</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>6.5</strong></td><td><strong>79–93</strong></td><td><strong>162–168</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor / Master Degree, depend on the subject you choose</strong></td></tr>
                                                    <tr><td><strong>6</strong></td><td><strong>60–78</strong></td><td><strong>154–161</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor Degree</strong></td></tr>
                                                    <tr><td>5.5</td><td>46–59</td><td>147–153</td><td>B2 First (FCE)</td><td>Diploma</td></tr>
                                                    <tr><td>5</td><td>35–45</td><td>140–146</td><td>B1 Preliminary (PET)</td><td>Diploma</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Mempersiapkan TOEFL</h3>
                                        <p>
                                            Mempersiapkan TOEFL tidak harus membuat stres. Ikuti tes latihan, fokus pada penggunaan bahasa Inggris sehari-hari, dan dapatkan bimbingan dari para ahli. Di Fortrust, kami menyediakan rencana belajar yang disesuaikan, ujian simulasi, dan umpan balik sehingga Anda dapat mencapai skor target dengan percaya diri.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "hsk" && (
                                <div id="hsk" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Panduan Lengkap untuk HSK</h2>
                                        <p>
                                            Jika Anda belajar bahasa Mandarin dan mulai berpikir tentang belajar, bekerja, atau tinggal di China, Anda mungkin pernah mendengar tentang <strong></strong>. Singkatan dari <strong></strong> ini adalah tes kemampuan bahasa Mandarin resmi untuk penutur non-asli. Mendapatkan skor HSK yang baik dapat membuka pintu di universitas China, membantu Anda memenuhi syarat untuk beasiswa, atau bahkan meningkatkan resume Anda untuk pekerjaan yang membutuhkan kemampuan Mandarin.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Kapan Anda Harus Mengambil HSK?</h3>
                                        <p>
                                            Ini adalah langkah cerdas untuk mengambil HSK beberapa bulan sebelum tenggat waktu—seperti untuk penerimaan universitas atau aplikasi pekerjaan—sehingga Anda memiliki waktu untuk mendapatkan hasil Anda atau mengambil tes ulang jika diperlukan. Karena setiap sekolah atau perusahaan mungkin memiliki persyaratan yang berbeda, pastikan untuk memeriksa dengan tepat level HSK mana yang Anda perlukan.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Struktur Level HSK</h3>
                                        <p>HSK terdiri dari enam level, dari pemula (HSK 1) hingga lanjutan (HSK 6).</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Level HSK</th>
                                                        <th>Bagian</th>
                                                        <th>Jenis Pertanyaan</th>
                                                        <th>Waktu Tes</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>HSK 1 & 2</td>
                                                        <td>Mendengarkan + Membaca</td>
                                                        <td>Pilihan ganda</td>
                                                        <td>40–55 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 3 & 4</td>
                                                        <td>Mendengarkan, Membaca, Menulis</td>
                                                        <td>Pilihan ganda & menulis jawaban singkat</td>
                                                        <td>90–105 menit</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 5 & 6</td>
                                                        <td>Mendengarkan, Membaca, Menulis</td>
                                                        <td>Pilihan ganda & menulis esai</td>
                                                        <td>120–140 menit</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <br />
                                        <ul>
                                            <li><strong></strong> Anda akan mendengar rekaman dalam bahasa Mandarin dan menjawab pertanyaan</li>
                                            <li><strong></strong> Membaca passage dan memilih jawaban yang benar</li>
                                            <li><strong></strong> Hanya pada level 3 ke atas – menulis kata, kalimat, atau esai</li>
                                        </ul>
                                        <p>Ada juga tes opsional HSK Speaking (HSKK) jika Anda ingin menunjukkan kemampuan berbicara bahasa Mandarin Anda.</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Persyaratan Skor & Biaya HSK</h3>
                                        <ul>
                                            <li><strong></strong> Diperlukan untuk program sarjana di China (diajarkan dalam bahasa Mandarin)</li>
                                            <li><strong></strong> Diperlukan untuk program pascasarjana dan beasiswa bahasa Mandarin</li>
                                            <li><strong></strong> Biaya HSK bervariasi menurut negara dan level tes tetapi biasanya berkisar dari <strong></strong>.</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Tips Utama untuk Persiapan HSK</h3>
                                        <ul>
                                            <li><strong></strong> Latihan dengan soal tes asli sehingga Anda tahu apa yang diharapkan.</li>
                                            <li><strong></strong> Flashcard, kuis, dan ujian simulasi adalah teman Anda!</li>
                                            <li><strong></strong> Unduh daftar kata resmi untuk level yang Anda pilih.</li>
                                            <li><strong></strong> Tonton acara Mandarin, dengarkan podcast, atau gunakan aplikasi latihan mendengarkan HSK.</li>
                                            <li><strong></strong> Coba baca artikel berita dan tulis paragraf pendek dalam bahasa Mandarin.</li>
                                            <li><strong></strong> Bergabung dengan kelas atau menemukan teman belajar membuat pembelajaran lebih mudah dan menyenangkan.</li>
                                            <li><strong></strong> Tinjau tes HSK sebelumnya untuk melihat tren dalam pertanyaan.</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Mempersiapkan HSK dengan Fortrust</h3>
                                        <p>
                                            Siap untuk mengambil langkah berikutnya dalam perjalanan bahasa Mandarin Anda? Jika Anda memerlukan dukungan untuk mempersiapkan HSK Anda, Fortrust di sini untuk membantu Anda. Hubungi tim kami hari ini—kami akan membimbing Anda dengan sumber daya ahli, rencana belajar yang dipersonalisasi, dan strategi ujian yang terbukti, sehingga Anda dapat mengikuti tes dengan percaya diri dan mencapai tujuan Anda!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Menghadapi Tes Bahasa Anda?</h2>
                        <p>
                            Jangan biarkan bahasa menjadi penghalang — jadikan itu paspor Anda ke dunia. Pesan kelas percobaan gratis Anda dengan Fortrust hari ini!
                        </p>
                        <a
                            href="/id/contact"
                            className="btn btn--primary btn--large"
                        >
                            Dapatkan Kelas Percobaan Gratis
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}
