import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CheckCircle } from "lucide-react";

export default function University() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>University Placement</h1>
                        <p>
                            From choosing the right course to accepting your offer, we guide you
                            every step of the way.
                        </p>
                    </div>
                </section>

                <section className="process-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Your Journey to University, Simplified</h2>
                            <p>
                                Follow our proven 6-step process for a smooth and successful
                                application experience.
                            </p>
                        </div>
                        <div className="stepper">
                            <div className="step">
                                <div className="step-icon">1</div>
                                <h3>Free Counselling</h3>
                                <p>
                                    We discuss your academic background, career goals, and budget to
                                    find the best-fit country, university, and major for you.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">2</div>
                                <h3>Application Submission</h3>
                                <p>
                                    We help you prepare and submit a strong application, ensuring
                                    all required documents are correct, complete, and meet
                                    university standards.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">3</div>
                                <h3>Offer Letter & Acceptance</h3>
                                <p>
                                    Once you receive an offer letter, we help you understand the
                                    terms and conditions, and guide you through the acceptance
                                    process.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">4</div>
                                <h3>Visa Application</h3>
                                <p>
                                    We provide expert guidance for your student visa application,
                                    ensuring your documents are in order to maximize your chances of
                                    approval.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">5</div>
                                <h3>Pre-Departure Briefing</h3>
                                <p>
                                    We assist with accommodation, insurance, and provide a
                                    comprehensive pre-departure briefing to prepare you for your new
                                    life abroad.
                                </p>
                            </div>
                            <div className="step">
                                <div className="step-icon">6</div>
                                <h3>Ongoing Study Support</h3>
                                <p>
                                    Even after you arrive, if you're ever unsure what to do, just
                                    contact us. We will help you to find a solution and connect you
                                    with our alumni network.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="documents-section">
                    <div className="container documents-section__container">
                        <div className="documents-info">
                            <h2>Required Documents</h2>
                            <p>
                                Having these documents ready will speed up your application
                                process.
                            </p>
                            <ul className="checklist">
                                <li><CheckCircle></CheckCircle> Valid Passport</li>
                                <li>
                                    <CheckCircle></CheckCircle> Academic Transcripts &
                                    Certificates
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> English Proficiency Test
                                    Results (IELTS/TOEFL)
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> Statement of Purpose (SOP) or
                                    Personal Essay
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> Letters of Recommendation (if
                                    required)
                                </li>
                                <li>
                                    <CheckCircle></CheckCircle> CV/Resume (for postgraduate
                                    applicants)
                                </li>
                            </ul>
                        </div>
                        <div className="fees-info card">
                            <h3><i data-lucide="info"></i> Our Fees</h3>
                            <p>
                                <strong
                                >Our counselling and university placement services are
                                    completely free.</strong
                                >
                                We are officially partnered with and funded by our partner
                                institutions, so you get expert guidance without any cost.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Start Your Application?</h2>
                        <p>
                            Let our expert counsellors turn your study abroad dream into a
                            reality.
                        </p>
                        <a href="contact.html" className="btn btn--primary btn--large"
                        >Book Your Free Consultation</a
                        >
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}