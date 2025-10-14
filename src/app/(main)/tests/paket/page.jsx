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
                        <h2>Flexible Education for Everyone</h2>
                        <p>
                            Our Paket A, B, and C programs provide a flexible and recognized
                            alternative to formal schooling. These equivalency programs are
                            designed for students who need to complete their primary or
                            secondary education, opening doors to higher education and better
                            career opportunities.
                        </p>

                        <h3>Program Levels:</h3>
                        <ul>
                            <li>
                                <strong>Paket A:</strong> Equivalent to elementary school (SD).
                            </li>
                            <li>
                                <strong>Paket B:</strong> Equivalent to junior high school (SMP).
                            </li>
                            <li>
                                <strong>Paket C:</strong> Equivalent to senior high school (SMA),
                                providing eligibility for university entrance.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Ready to Continue Your Education?</h2>
                                <p>
                                    Contact us to learn more about enrollment and how we can support
                                    your academic journey.
                                </p>
                                <a href="contact.html" className="btn btn--primary btn--large"
                                >Learn More</a
                                >
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}