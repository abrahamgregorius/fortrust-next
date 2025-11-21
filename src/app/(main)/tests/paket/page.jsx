import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Paket() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Paket A, B, & C Equivalency Programs</h1>
                        <p>Your Pathway to Formal Education and a Brighter Future.</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <div className="content-block">
                            <h2>What is Paket A, B, C?</h2>
                            <p>
                                Not everyone follows the traditional path through formal schooling — and that's perfectly okay. Life circumstances can interrupt education, but opportunities for growth shouldn't stop. That's where <strong>Paket A, B, and C</strong> come in: Indonesia's government-approved equivalency programs that give you a second chance to complete your education and move forward with your life.
                            </p>
                            <p>
                                Whether you left school early, worked to support your family, or simply faced challenges that made formal education difficult, these programs offer you a flexible, recognized pathway to achieve your academic goals — and even open doors to universities around the world.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>Understanding the 3 Levels</h3>
                            <p>The Paket programs are designed to mirror the structure of formal Indonesian education, providing officially recognized certifications:</p>
                            <ul>
                                <li>
                                    <strong>Paket A:</strong> Equivalent to elementary school (SD / Sekolah Dasar)
                                    <br/>Ideal for those who did not complete primary education.
                                </li>
                                <li>
                                    <strong>Paket B:</strong> Equivalent to junior high school (SMP / Sekolah Menengah Pertama)
                                    <br/>Suitable for learners who completed primary school but didn't continue to junior high, or those looking to re-enter the education system.
                                </li>
                                <li>
                                    <strong>Paket C:</strong> Equivalent to senior high school (SMA / Sekolah Menengah Atas)
                                    <br/>For students who want to complete their high school education and gain eligibility for university applications — both in Indonesia and abroad.
                                </li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>Is Paket C Recognized by Universities?</h3>
                            <p>
                                <strong>Yes — both in Indonesia and internationally.</strong>
                            </p>
                            <p>
                                Paket C is recognized by Indonesian universities and is also accepted by many international institutions, especially when paired with the right supporting documents (like English proficiency tests, standardized tests such as the SAT or IB, and strong recommendation letters).
                            </p>
                            <p>
                                Many students who complete Paket C successfully go on to study at universities in countries like Australia, the UK, the US, Malaysia, and beyond. It's not just a "backup plan" — it's a real opportunity.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>Who Should Consider Paket Programs?</h3>
                            <ul>
                                <li>Students who dropped out of formal schooling</li>
                                <li>Working individuals who want to continue their education</li>
                                <li>Parents returning to education</li>
                                <li>Anyone seeking a high school certificate to apply for university or vocational programs</li>
                                <li>Students planning to study abroad who need their Indonesian high school equivalency</li>
                            </ul>
                        </div>

                        <div className="content-block">
                            <h3>How to Get Started</h3>
                            <p>
                                Paket programs are administered through <strong>PKBM (Pusat Kegiatan Belajar Masyarakat)</strong> or Community Learning Centers throughout Indonesia. Registration is typically open twice a year, and students attend classes either in person or through flexible learning models.
                            </p>
                            <p>
                                At <strong>Fortrust</strong>, we help students navigate the Paket C registration process, prepare for exams, and even plan their next steps — whether that's applying to Indonesian universities or aiming for scholarships abroad.
                            </p>
                        </div>

                        <div className="content-block">
                            <h3>What Comes After Paket C?</h3>
                            <p>
                                With a Paket C certificate, you can:
                            </p>
                            <ul>
                                <li><strong>Apply to Indonesian universities</strong> (both public and private)</li>
                                <li><strong>Apply to international universities</strong> (with additional requirements like IELTS, TOEFL, or SAT)</li>
                                <li><strong>Pursue vocational training or diploma programs</strong></li>
                                <li><strong>Qualify for job opportunities that require a high school diploma</strong></li>
                                <li><strong>Continue to higher education pathways like Foundation or Diploma programs abroad</strong></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Continue Your Education?</h2>
                        <p>
                            Your past doesn't define your future. Whether you're completing your education for personal growth, career advancement, or university applications — Paket programs can help you get there.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large">
                            Learn More About Paket Programs
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}