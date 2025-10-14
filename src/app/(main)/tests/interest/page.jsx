import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Interest() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Interest and Aptitude Test</h1>
                        <p>Unlock Your Potential and Discover Your Ideal Career Path.</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Why Take an Interest and Aptitude Test?</h2>
                        <br />
                        <p>
                            Choosing a major is one of the most important decisions you'll make.
                            An Interest and Aptitude Test is a powerful tool designed to help
                            you understand your unique strengths, personality traits, and
                            passions. By analyzing these aspects, the test provides personalized
                            recommendations for university majors and future career paths that
                            align with who you are, ensuring you choose a field where you can
                            truly thrive.
                        </p>

                        <h3>Benefits of Our Test</h3>
                        <ul>
                            <li>
                                <strong>Personalized Recommendations:</strong> Receive a detailed
                                report with suggestions for majors and careers tailored to your
                                profile.
                            </li>
                            <li>
                                <strong>Increased Confidence:</strong> Make informed decisions
                                about your future with greater confidence and clarity.
                            </li>
                            <li>
                                <strong>Avoid Costly Mistakes:</strong> Reduce the risk of
                                choosing the wrong major, saving you time and money in the long
                                run.
                            </li>
                            <li>
                                <strong>Career Exploration:</strong> Discover potential career
                                paths you may not have considered before.
                            </li>
                        </ul>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Ready to Find Your Path?</h2>
                                <p>
                                    Take our test today and take the first step towards a fulfilling
                                    academic and professional journey.
                                </p>
                                <a href="contact.html" className="btn btn--primary btn--large"
                                >Schedule Your Test</a
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