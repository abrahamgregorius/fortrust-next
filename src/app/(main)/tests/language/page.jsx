import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Language() {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Language Test Preparation</h1>
                        <p>
                            Achieve Your Target Score and Secure Your Place at Your Dream
                            University.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Master Your Language Test</h2>
                        <p>
                            A high score on your language proficiency test is a crucial
                            requirement for admission to top universities abroad. Our
                            preparation programs for IELTS, TOEFL, and HSK are designed to equip
                            you with the skills, strategies, and confidence needed to excel.
                        </p>

                        <div className="program-format">
                            <h3>Program Format</h3>
                            <p>
                                Our courses focus on a comprehensive curriculum covering all
                                sections of the exam: Reading, Writing, Listening, and Speaking.
                                We offer:
                            </p>
                            <ul>
                                <li>
                                    <strong>Diagnostic Pre-Test:</strong> To assess your current
                                    skill level and identify areas for improvement.
                                </li>
                                <li>
                                    <strong>Expert Instructors:</strong> Learn from experienced
                                    teachers who specialize in test preparation.
                                </li>
                                <li>
                                    <strong>Strategic Workshops:</strong> Master proven techniques
                                    for time management and question-answering.
                                </li>
                                <li>
                                    <strong>Regular Mock Tests:</strong> Simulate real exam
                                    conditions to track your progress and build confidence.
                                </li>
                                <li>
                                    <strong>Personalized Feedback:</strong> Receive one-on-one
                                    feedback to target your specific weaknesses.
                                </li>
                            </ul>
                        </div>

                        <div className="pricing-table-container">
                            <br />
                            <h3>Program Details & Pricing</h3>
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>Program</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>IELTS Preparation</strong> (Academic & General)
                                        </td>
                                        <td>8 Weeks (48 Hours)</td>
                                        <td>IDR 4,500,000</td>
                                    </tr>
                                    <tr>
                                        <td><strong>TOEFL iBT Preparation</strong></td>
                                        <td>8 Weeks (48 Hours)</td>
                                        <td>IDR 4,500,000</td>
                                    </tr>
                                    <tr>
                                        <td><strong>HSK Preparation</strong> (Levels 1-4)</td>
                                        <td>12 Weeks (72 Hours)</td>
                                        <td>IDR 6,000,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div
                            className="final-cta"
                            style={{ padding: "var(--space-12) 0", marginTop: "var(--space-8)", borderRadius: "var(--radius-card)" }}
                        >
                            <div className="container final-cta__container">
                                <h2>Ready to Start Preparing?</h2>
                                <p>
                                    Enroll in one of our programs today and get one step closer to
                                    your study abroad dream.
                                </p>
                                <a href="contact.html" className="btn btn--primary btn--large"
                                >Enroll Now</a
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