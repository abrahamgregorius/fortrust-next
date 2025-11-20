import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MapPinned, School, Users2 } from "lucide-react";

export default function About() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>30 Tahun Memberdayakan Warga Global</h1>
                        <p>
                            Perjalanan kami dimulai dengan misi sederhana: memperkaya kehidupan mahasiswa dengan membantu mereka mencapai potensi penuh.
                        </p>
                    </div>
                </section>

                <section className="about-story">
                    <div className="container about-story__container">
                        <div className="about-story__image">
                            <img
                                src="https://placehold.co/600x400/2a3a6a/white?text=Our+Team"
                                alt="The Fortrust team in a meeting"
                            />
                        </div>
                        <div className="about-story__content">
                            <h2>Asal & Misi Kami</h2>
                            <p>
                                Didirikan tahun 1994 di Sydney, Australia, Fortrust lahir dari passion terhadap pendidikan global. Selama lebih dari tiga dekade, kami berdedikasi menyediakan solusi layanan inovatif untuk mahasiswa dan mitra pendidikan kami.
                            </p>
                            <p>
                                Misi kami adalah menginspirasi dan memperkaya kehidupan mahasiswa, membantu mereka mewujudkan potensi sambil membangun jaringan persahabatan dan kemitraan global. Kami menantang konvensi, terbuka pada ide baru, dan memberikan perhatian profesional namun personal untuk kesejahteraan setiap mahasiswa.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="our-values" style={{backgroundColor: "var(--neutral-100)"}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>Keunggulan Fortrust</h2>
                            <p>
                                Tim kami adalah aset terbesar. Kami dibangun atas prinsip yang memastikan Anda mendapat bimbingan terbaik.
                            </p>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="heart-handshake"></i>
                                <h3>Pengertian</h3>
                                <p>
                                    Sebagian besar konselor kami pernah kuliah di luar negeri. Mereka memahami kekhawatiran Anda dan menawarkan bimbingan yang sensitif, sabar, dan andal.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="award"></i>
                                <h3>Pelatihan Ahli</h3>
                                <p>
                                    Tim kami menjalani pelatihan komprehensif agar selalu update dengan persyaratan terbaru dari universitas, kantor visa, dan otoritas imigrasi.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="globe"></i>
                                <h3>Pengetahuan Global</h3>
                                <p>
                                    Dengan lebih dari 50 konselor yang fasih berbagai bahasa, kami berkomunikasi efektif dan memberi saran tepat sesuai kebutuhan dan ambisi unik Anda.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="awards-timeline">
                    <div className="container">
                        <div className="section-header">
                            <h2>Tonggak Penting Kami</h2>
                            <p>Lini masa perjalanan kami dalam pendidikan internasional.</p>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>1994 - Didirikan di Sydney</h3>
                                    <p>
                                        Fortrust memulai perjalanan dengan tim kecil beranggota tiga orang, meletakkan fondasi keunggulan penempatan mahasiswa selama puluhan tahun.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>1996 - Ekspansi ke Indonesia</h3>
                                    <p>
                                        Kami membuka kantor internasional pertama di Jakarta, Bandung, dan Semarang, menjadi perwakilan resmi lebih dari 100 institusi Australia.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2006 - Peluncuran Program UCCE</h3>
                                    <p>
                                        Program inovatif University Course & Career Experience (UCCE) untuk siswa SMA berhasil diluncurkan.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2014 - 20 Tahun Pelayanan</h3>
                                    <p>
                                        Kami merayakan dua dekade sukses membimbing mahasiswa dalam perjalanan pendidikan internasional mereka.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2022 - Tersertifikasi Selandia Baru & Kanada</h3>
                                    <p>
                                        Diakui sebagai New Zealand Education Certified Agent dan menerima Maple Agent Partner Certificate dari Canadian International Education.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="global-network"
                    style={{backgroundColor: "var(--neutral-100)"}}
                >
                    <div className="container text-center">
                        <div className="section-header">
                            <h2>Jaringan Global Kami</h2>
                            <p>
                                Dari kantor pusat di Australia, kami berkembang mendukung mahasiswa dari seluruh dunia.
                            </p>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <MapPinned></MapPinned>
                                <h3>13+ Kota Kantor</h3>
                                <p>
                                    Kantor berlokasi strategis di 5 negara untuk memberi dukungan lokal berkelanjutan bagi mahasiswa kami.
                                </p>
                            </div>
                            <div className="pillar">
                                <Users2></Users2>
                                <h3>20.000+ Mahasiswa Ditempatkan</h3>
                                <p>
                                    Selama dua dekade, kami berhasil membimbing lebih dari 20.000 mahasiswa ke institusi impian mereka.
                                </p>
                            </div>
                            <div className="pillar">
                                <School></School>
                                <h3>300+ Institusi Mitra</h3>
                                <p>
                                    Kami mewakili berbagai institusi global, dari SMA hingga universitas ternama dunia.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}