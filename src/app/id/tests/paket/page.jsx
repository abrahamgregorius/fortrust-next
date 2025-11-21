import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Paket() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Program Kesetaraan Paket A, B, & C</h1>
                        <p>Jalur Menuju Pendidikan Formal dan Masa Depan yang Lebih Cerah.</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <div className="content-block">
                            <h2>Apa itu Paket A, B, C?</h2>
                            <p>
                                Tidak semua orang mengikuti jalur tradisional pendidikan formal — dan itu tidak masalah. Keadaan hidup bisa mengganggu pendidikan, tetapi peluang untuk berkembang tidak boleh berhenti. Di sinilah <strong>Paket A, B, dan C</strong> berperan: program kesetaraan yang disetujui pemerintah Indonesia yang memberi Anda kesempatan kedua untuk menyelesaikan pendidikan dan melangkah maju dalam hidup.
                            </p>
                            <p>
                                Apakah Anda meninggalkan sekolah lebih awal, bekerja untuk menghidupi keluarga, atau sekadar menghadapi tantangan yang membuat pendidikan formal sulit, program-program ini menawarkan jalur yang fleksibel dan diakui untuk mencapai tujuan akademik Anda — bahkan membuka pintu ke universitas di seluruh dunia.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>Memahami 3 Tingkat</h3>
                            <p>Program Paket dirancang untuk mencerminkan struktur pendidikan formal Indonesia, memberikan sertifikasi yang diakui secara resmi:</p>
                            <ul>
                                <li>
                                    <strong>Paket A:</strong> Setara dengan Sekolah Dasar (SD)
                                    <br/>Ideal bagi mereka yang tidak menyelesaikan pendidikan dasar.
                                </li>
                                <li>
                                    <strong>Paket B:</strong> Setara dengan Sekolah Menengah Pertama (SMP)
                                    <br/>Cocok untuk pelajar yang menyelesaikan sekolah dasar tetapi tidak melanjutkan ke SMP, atau mereka yang ingin kembali ke sistem pendidikan.
                                </li>
                                <li>
                                    <strong>Paket C:</strong> Setara dengan Sekolah Menengah Atas (SMA)
                                    <br/>Untuk siswa yang ingin menyelesaikan pendidikan sekolah menengah dan memperoleh kelayakan untuk aplikasi universitas — baik di Indonesia maupun luar negeri.
                                </li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Apakah Paket C Diakui oleh Universitas?</h3>
                            <p>
                                <strong>Ya — baik di Indonesia maupun internasional.</strong>
                            </p>
                            <p>
                                Paket C diakui oleh universitas Indonesia dan juga diterima oleh banyak institusi internasional, terutama ketika dipasangkan dengan dokumen pendukung yang tepat (seperti tes kemampuan bahasa Inggris, tes standar seperti SAT atau IB, dan surat rekomendasi yang kuat).
                            </p>
                            <p>
                                Banyak siswa yang menyelesaikan Paket C berhasil melanjutkan studi di universitas di negara-negara seperti Australia, Inggris, AS, Malaysia, dan lainnya. Ini bukan hanya "rencana cadangan" — ini adalah peluang nyata.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>Siapa yang Harus Mempertimbangkan Program Paket?</h3>
                            <ul>
                                <li>Siswa yang keluar dari sekolah formal</li>
                                <li>Individu yang bekerja yang ingin melanjutkan pendidikan mereka</li>
                                <li>Orang tua yang kembali ke pendidikan</li>
                                <li>Siapa pun yang mencari sertifikat sekolah menengah untuk melamar universitas atau program kejuruan</li>
                                <li>Siswa yang berencana belajar di luar negeri yang memerlukan kesetaraan SMA Indonesia mereka</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Cara Memulai</h3>
                            <p>
                                Program Paket dikelola melalui <strong>PKBM (Pusat Kegiatan Belajar Masyarakat)</strong> di seluruh Indonesia. Pendaftaran biasanya dibuka dua kali setahun, dan siswa menghadiri kelas baik secara langsung atau melalui model pembelajaran fleksibel.
                            </p>
                            <p>
                                Di <strong>Fortrust</strong>, kami membantu siswa menavigasi proses pendaftaran Paket C, mempersiapkan ujian, dan bahkan merencanakan langkah selanjutnya — baik itu melamar ke universitas Indonesia atau bertujuan untuk beasiswa di luar negeri.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>Apa yang Terjadi Setelah Paket C?</h3>
                            <p>
                                Dengan sertifikat Paket C, Anda dapat:
                            </p>
                            <ul>
                                <li><strong>Melamar ke universitas Indonesia</strong> (baik negeri maupun swasta)</li>
                                <li><strong>Melamar ke universitas internasional</strong> (dengan persyaratan tambahan seperti IELTS, TOEFL, atau SAT)</li>
                                <li><strong>Mengikuti pelatihan kejuruan atau program diploma</strong></li>
                                <li><strong>Memenuhi syarat untuk peluang pekerjaan yang memerlukan ijazah SMA</strong></li>
                                <li><strong>Melanjutkan ke jalur pendidikan tinggi seperti program Foundation atau Diploma di luar negeri</strong></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Siap Melanjutkan Pendidikan Anda?</h2>
                        <p>
                            Masa lalu Anda tidak menentukan masa depan Anda. Apakah Anda menyelesaikan pendidikan untuk pertumbuhan pribadi, kemajuan karier, atau aplikasi universitas — program Paket dapat membantu Anda mencapainya.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large">
                            Pelajari Lebih Lanjut Tentang Program Paket
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}