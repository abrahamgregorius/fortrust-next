import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function StudyTour() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Study Tour & Immersion Programs</h1>
                        <p>
                            Experience your future before you commit. A journey of discovery
                            awaits.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Why Join a Study Tour?</h2>
                        <p>
                            Choosing to study abroad is a big decision. A study tour is the
                            perfect way to experience the academic and cultural life of your
                            dream destination firsthand. It's more than a holiday; it's a short,
                            intensive program designed to give you the clarity and confidence
                            you need to make the right choice for your future.
                        </p>
                    </div>
                </section>

                <section className="about-story" style={{ backgroundColor: "var(--neutral-100)" }}>
                    <div className="container about-story__container">
                        <div className="about-story__text">
                            <h2 style={{ color: "var(--accent)", marginBottom: ".4rem" }}>
                                Our Premier UCCE Immersion Program
                            </h2>
                            <p>
                                The
                                <strong>University, College, Career Experience (UCCE)</strong>
                                program is our flagship immersion experience. It's meticulously
                                designed to give you a comprehensive preview of your potential
                                future, combining academic insights with real-world career
                                exposure.
                            </p>
                            <ul>
                                <li>
                                    <i data-lucide="check-circle"></i> Visit the campuses of
                                    world-renowned universities.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Attend workshops and sample
                                    lectures.
                                </li>
                                <li>
                                    <i data-lucide="check-circle"></i> Meet with industry
                                    professionals and explore potential career paths.
                                </li>
                            </ul>
                        </div>
                        <div className="about-story__image">
                            <img
                                src="https://via.placeholder.com/500x350/cccccc/000000?text=Students+on+Campus+Tour"
                                alt="A group of students on a university campus tour"
                            />
                        </div>
                    </div>
                </section>

                <section className="pillars">
                    <div className="container">
                        <div className="section-header">
                            <h2>What You Will Experience</h2>
                        </div>
                        <div className="pillars__container">
                            <div className="pillar">
                                <i data-lucide="university"></i>
                                <h3>University Campus Tours</h3>
                                <p>
                                    Walk the grounds of top universities, explore the facilities,
                                    and feel the campus atmosphere before you apply.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="briefcase"></i>
                                <h3>Career Workshops</h3>
                                <p>
                                    Engage with industry leaders and gain insights into the career
                                    opportunities that await you after graduation.
                                </p>
                            </div>
                            <div className="pillar">
                                <i data-lucide="globe"></i>
                                <h3>Cultural Exploration</h3>
                                <p>
                                    Immerse yourself in the local culture, visit iconic landmarks,
                                    and understand what it's truly like to live and study in a new
                                    country.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Explore Our Upcoming Tours</h2>
                        <p>
                            We have curated study tour programs to top destinations. Find the
                            one that's right for you.
                        </p>
                        <a href="/contact" className="btn btn--primary btn--large"
                        >Inquire About Study Tours</a
                        >
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}