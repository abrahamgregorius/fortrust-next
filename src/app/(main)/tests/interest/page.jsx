import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Interest() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Interest & Aptitude Test</h1>
                        <p>Clear Steps for Maximum Potential</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <div className="content-block">
                            <p>
                                Effective child future planning starts with a clear direction, ensuring children achieve their
                                highest potential. Today, strategies like profiling tests, IQ assessments, and interest talent
                                evaluations help parents uncover each child's strengths, needs, and interests from an early age.
                            </p>
                        </div>

                        <div className="content-block">
                            <p>
                                Profiling tests reveal a child's personality, learning style, and thought patterns. This key
                                information allows parents to select the best learning environment, boosting confidence and
                                productivity. The Fortrust Student Profiling test also maximizes potential with IQ Assessments.
                            </p>
                            <p>
                                IQ assessments accurately measure cognitive abilities such as logic, problem-solving, and
                                understanding. Results empower parents to provide optimal academic support, nurturing each
                                child's potential.
                            </p>
                            <p>
                                The profiling test is assessing If your child is ready for new challenges. How can they thrive on
                                their chosen path? Our expert assessment guides children with clarity, minimizing confusion and
                                preparing them for success.
                            </p>
                            <p>
                                Interest talent evaluations help children discover passions and talents early. Parents can then
                                steer education and activities to leverage these strengths.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>Why does our Potential Assessment Stands Out?</h2>
                            <h3>1. Comprehensive Psychological Evaluation:</h3>
                            <p>
                                A dedicated 45-minute session with a certified psychologist bridges gaps between written tests
                                and real-life behaviors, identifying mental health and study challenges unique to each child.
                            </p>
                            
                            <h3>2. Focused Educational Consultation:</h3>
                            <p>
                                Specialized guidance from an educational consultant focuses children on future-proof subjects
                                and skills tailored to global trends and individual interests.
                            </p>

                            <p style={{ marginTop: "var(--space-8)" }}>
                                Combining professional psychological insight and targeted educational guidance, our holistic
                                assessment empowers parents to plan confidently for a child's bright future.
                            </p>
                        </div>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container" style={{ textAlign: 'center' }}>
                                <h2>Take the Guesswork Out of Your Child's Future</h2>
                                <p>
                                    Get Expert Guidance with Fortrust's Complete Profiling Test.
                                </p>
                                <a href="/contact" className="btn btn--primary btn--large"
                                >Start the test now!</a
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