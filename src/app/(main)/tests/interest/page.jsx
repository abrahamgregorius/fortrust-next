import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Interest() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>IQ, Interest & Aptitude Test</h1>
                        <p>Clear Steps for Maximum Potential</p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <div className="content-block">
                            <p>
                                Effective child future planning starts with a clear direction, ensuring children achieve their highest potential. Today, strategies like profiling tests, IQ assessments, and interest talent evaluations help parents uncover each child's strengths, needs, and interests from an early age.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>The Importance of Profiling Tests in Children's Future Planning</h2>
                            <p>
                                Profiling tests reveal a child's personality, learning style, and thought patterns. It assesses if your child is ready for new challenges. How can they thrive on their chosen path? This key information allows parents to select the best learning environment, boosting confidence and productivity.
                            </p>
                        </div>

                        <div className="content-block">
                            <p>
                                IQ assessments accurately measure cognitive abilities such as logic, problem-solving, and understanding. Results empower parents to provide optimal academic support, nurturing each child's potential.
                            </p>
                        </div>

                        <div className="content-block">
                            <p>
                                Interest talent evaluations help children discover passions and talents early. Parents can then steer education and activities to leverage these strengths.
                            </p>
                        </div>

                        <div className="content-block">
                            <h2>What Makes Our Profiling Test Stands Out?</h2>
                            <h3>1. Comprehensive Psychological Evaluation:</h3>
                            <p>
                                A dedicated 45-minute session with a certified psychologist bridges gaps between written tests and real-life behaviors, identifying mental health and study challenges unique to each child.
                            </p>
                            
                            <h3>2. Focused Educational Consultation:</h3>
                            <p>
                                Specialized guidance from an educational consultant focuses children on future-proof subjects and skills tailored to global trends and individual interests.
                            </p>

                            <h3>3. Created by the Expert psychologists with high assessment accuracy</h3>
                            <p>
                                This profiling test is created by psychologists with experience in talent planning, recruitment, and leadership development for clients across government, education, media, finance, real estate, transportation, and more.
                            </p>

                            <p style={{ marginTop: "var(--space-8)" }}>
                                Combining professional psychological insight and targeted educational guidance, our holistic assessment empowers parents to plan confidently for a child's bright future.
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