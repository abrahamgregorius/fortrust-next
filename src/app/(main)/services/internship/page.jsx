import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Internship() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Internship Programs for High School Students</h1>
                        <p>
                            Step into the professional world and gain a competitive edge before
                            you even start university.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Why an Internship in High School?</h2>
                        <p>
                            An internship is no longer just for university students. Gaining
                            professional experience early on is a powerful way to explore career
                            interests, build valuable skills, and create a standout university
                            application. Our 1-month program is specifically designed to place
                            ambitious high school students in leading multinational companies,
                            providing a structured and impactful first taste of the corporate
                            world.
                        </p>
                    </div>
                </section>
                <section className="about-story" style={{ backgroundColor: "var(--neutral-100)" }}>
                    <div className="container about-story__container">
                        <div className="about-story__text">
                            <h2 style={{ color: "var(--accent)" }}>
                                1-Month Placement at a Multinational Company
                            </h2>
                            <p>
                                We partner with top-tier multinational companies in Indonesia to
                                offer you an exclusive 1-month internship. You won't be just
                                making coffee; you will be assigned a real project, guided by a
                                dedicated mentor, and contribute to meaningful work within a
                                professional team.
                            </p>
                            <ul>
                                <li>
                                    <i data-lucide="check-circle"></i> Work on real projects and
                                    solve real business challenges.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Receive mentorship from
                                    experienced industry professionals.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Earn a professional
                                    certificate of completion to boost your CV.
                                </li>
                            </ul>
                        </div>
                        <div className="about-story__image">
                            <img
                                src="https://via.placeholder.com/500x350/cccccc/000000?text=Student+in+Office+Meeting"
                                alt="A high school student participating in a professional office meeting"
                            />
                        </div>
                    </div>
                </section>

                <section className="pillars" style={{ backgroundColor: "var(--accent)" }}>
                    <div className="container">
                        <div className="section-header">
                            <h2>What You Will Gain</h2>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="award"></i>
                                <h3>Professional Skills</h3>
                                <p>
                                    Develop essential soft skills like communication, teamwork, and
                                    problem-solving in a real corporate environment.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="users"></i>
                                <h3>Build Your Network</h3>
                                <p>
                                    Connect with professionals and mentors who can guide your career
                                    choices and potentially write recommendation letters.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="file-text"></i>
                                <h3>Strengthen Your CV</h3>
                                <p>
                                    An internship at a multinational company will make your
                                    university and scholarship applications stand out from the
                                    crowd.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready for a Head Start?</h2>
                        <p>
                            Limited slots are available for our exclusive internship program.
                            Secure your place today.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large"
                        >Apply for Internship</a
                        >
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}