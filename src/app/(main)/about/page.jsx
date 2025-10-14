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
                        <h1>30 Years of Empowering Global Citizens</h1>
                        <p>
                            Our journey began with a simple mission: to enrich students' lives
                            by helping them achieve their potential.
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
                            <h2>Our Origin & Mission</h2>
                            <p>
                                Founded in 1994 in Sydney, Australia, Fortrust was born from a
                                passion for global education. For over three decades, we have been
                                dedicated to providing innovative service solutions for students
                                and our esteemed education partners.
                            </p>
                            <p>
                                Our mission is to inspire and enrich students' lives, helping
                                them realize their potential while building a global network of
                                friendship and partnership. We challenge convention, stay open to
                                new ideas, and provide professional yet personal care for every
                                student's welfare.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="our-values" style={{backgroundColor: "var(--neutral-100)"}}>
                    <div className="container">
                        <div className="section-header">
                            <h2>The Fortrust Difference</h2>
                            <p>
                                Our team is our greatest asset. We are built on principles that
                                ensure you receive the best possible guidance.
                            </p>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="heart-handshake"></i>
                                <h3>Understanding</h3>
                                <p>
                                    Most of our counselors have studied abroad themselves. They
                                    understand your concerns and anxieties, offering sensitive,
                                    patient, and reliable guidance.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="award"></i>
                                <h3>Expert Training</h3>
                                <p>
                                    Our team undergoes comprehensive training to stay updated on the
                                    latest requirements from universities, visa offices, and
                                    immigration authorities.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="globe"></i>
                                <h3>Global Knowledge</h3>
                                <p>
                                    With over 50 counselors fluent in multiple languages, we
                                    effectively communicate and provide the right advice to match
                                    your unique needs and ambitions.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="awards-timeline">
                    <div className="container">
                        <div className="section-header">
                            <h2>Our Key Milestones</h2>
                            <p>A timeline of our journey in international education.</p>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>1994 - Founded in Sydney</h3>
                                    <p>
                                        Fortrust begins its journey with a small team of three, laying
                                        the foundation for decades of student placement excellence.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>1996 - Expansion to Indonesia</h3>
                                    <p>
                                        We opened our first international offices in Jakarta, Bandung,
                                        and Semarang, becoming official representatives for over 100
                                        Australian institutions.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2006 - UCCE Program Launch</h3>
                                    <p>
                                        The innovative University Course & Career Experience (UCCE)
                                        program for high school students was successfully launched.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2014 - 20 Years of Service</h3>
                                    <p>
                                        We celebrated two decades of successfully guiding students on
                                        their international education journeys.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3>2022 - New Zealand & Canada Certified</h3>
                                    <p>
                                        Recognized as a New Zealand Education Certified Agent and
                                        received the Maple Agent Partner Certificate from Canadian
                                        International Education.
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
                            <h2>Our Global Network</h2>
                            <p>
                                From our headquarters in Australia, we've grown to support
                                students from all over the world.
                            </p>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <MapPinned></MapPinned>
                                <h3>13+ Office Cities</h3>
                                <p>
                                    Strategically located offices across 5 countries to provide
                                    localized, continuous support for our students.
                                </p>
                            </div>
                            <div className="pillar">
                                <Users2></Users2>
                                <h3>20,000+ Students Placed</h3>
                                <p>
                                    Over two decades, we have successfully guided more than 20,000
                                    students to their dream institutions.
                                </p>
                            </div>
                            <div className="pillar">
                                <School></School>
                                <h3>300+ Partner Institutions</h3>
                                <p>
                                    We represent a wide range of institutions globally, from high
                                    schools to world-renowned universities.
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