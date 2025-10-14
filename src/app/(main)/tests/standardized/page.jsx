import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Standardized() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Standardized Test Preparation</h1>
                        <p>
                            Build a strong academic foundation and achieve top scores on your
                            standardized tests.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Excel in Your Standardized Tests</h2>
                        <p>
                            Standardized tests like the GMAT, SAT, and Cambridge Levels are
                            critical components of your application to top universities and
                            business schools. Our preparation programs are designed to provide
                            you with a deep understanding of the test content, effective
                            strategies, and the practice needed to achieve a competitive score.
                        </p>

                        <h3>Our Programs Cover:</h3>
                        <ul>
                            <li>
                                <strong>GMAT/SAT:</strong> Comprehensive review of quantitative,
                                verbal, and analytical writing sections with a focus on
                                problem-solving strategies.
                            </li>
                            <li>
                                <strong>Cambridge O'level & A'level:</strong> In-depth subject
                                tutoring aligned with the Cambridge curriculum to ensure you
                                master the core concepts.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}

                        >
                            <div className="container final-cta__container">
                                <h2>Ready to Ace Your Test?</h2>
                                <p>
                                    Join our preparation courses and build the skills you need for
                                    success.
                                </p>
                                <a href="contact.html" className="btn btn--primary btn--large"
                                >Inquire About Programs</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}