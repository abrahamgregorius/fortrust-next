"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    Award,
    BookOpen,
    Calculator,
    LayoutGrid,
    Star,
} from "lucide-react";
import { useState } from "react";

export default function Standardized() {
    const [activeTab, setActiveTab] = useState("sat");

    const tabs = [
        { id: "sat", label: "SAT", icon: <BookOpen /> },
        { id: "gmat", label: "GMAT", icon: <Calculator /> },
        { id: "cambridge", label: "IGCSE", icon: <Award /> },
        { id: "csca", label: "CSCA", icon: <Star /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Standardized Test Preparation: SAT, GMAT, IGCSE, CSCA
                        </h1>
                        <p>
                            Achieve competitive scores on standardized tests with our proven preparation strategies and expert guidance.
                        </p>
                    </div>
                </section>

                <section className="destination-details">
                    <div className="container destination-details__container">
                        {/* Tabs Nav */}
                        <div className="tabs-nav">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`tab-link ${activeTab === tab.id ? "active" : ""
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.icon} {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Tabs Content */}
                        <div className="tab-content">
                            {activeTab === "sat" && (
                                <div id="sat" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>SAT Preparation</h2>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/test-banner/sat/desktop.webp" />
                                            <img src="/test-banner/sat/desktop.webp" className="content__banner" />
                                        </picture>
                                        <p>
                                            The SAT (Scholastic Assessment Test) is a standardized test widely used for college admissions in the United States and increasingly accepted by universities worldwide. A strong SAT score can open doors to top universities and significant scholarship opportunities.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>SAT Test Structure (Digital SAT)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Section</th>
                                                        <th>Duration</th>
                                                        <th>Questions</th>
                                                        <th>Score Range</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading and Writing</td>
                                                        <td>64 minutes (2 modules)</td>
                                                        <td>54 questions</td>
                                                        <td>200-800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Math</td>
                                                        <td>70 minutes (2 modules)</td>
                                                        <td>44 questions</td>
                                                        <td>200-800</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p><strong>Total Test Time:</strong> 2 hours 14 minutes</p>
                                        <p><strong>Total Score Range:</strong> 400-1600</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>SAT Score Benchmarks</h3>
                                        <ul>
                                            <li><strong>1500-1600:</strong> Ivy League and top 10 universities</li>
                                            <li><strong>1400-1490:</strong> Top 20-50 universities</li>
                                            <li><strong>1300-1390:</strong> Good universities, merit scholarships</li>
                                            <li><strong>1200-1290:</strong> Most state universities</li>
                                            <li><strong>1000-1190:</strong> Community colleges, some universities</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>What's Tested on the SAT?</h3>
                                        <p><strong>Reading and Writing:</strong></p>
                                        <ul>
                                            <li>Reading comprehension of various text types</li>
                                            <li>Vocabulary in context</li>
                                            <li>Grammar and usage</li>
                                            <li>Rhetoric and argumentation</li>
                                            <li>Data interpretation from tables and graphs</li>
                                        </ul>

                                        <p><strong>Math:</strong></p>
                                        <ul>
                                            <li>Algebra (linear equations, systems, functions)</li>
                                            <li>Advanced Math (quadratics, exponentials, complex equations)</li>
                                            <li>Problem-Solving and Data Analysis (ratios, percentages, statistics)</li>
                                            <li>Geometry and Trigonometry</li>
                                            <li>Calculator allowed for some sections</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our SAT Preparation Program</h3>
                                        <p><strong>Course Duration:</strong> 8-12 weeks</p>
                                        <p><strong>Class Schedule:</strong> Weekend and weekday batches available</p>
                                        <p><strong>Program Features:</strong></p>
                                        <ul>
                                            <li>Diagnostic test to assess current level</li>
                                            <li>Comprehensive coverage of all test sections</li>
                                            <li>Official College Board practice materials</li>
                                            <li>Math formula sheets and quick reference guides</li>
                                            <li>Reading speed and comprehension techniques</li>
                                            <li>Grammar rules and writing strategies</li>
                                            <li>Weekly full-length practice tests</li>
                                            <li>Score improvement guarantee (conditions apply)</li>
                                            <li>University application guidance</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>When Should You Take the SAT?</h3>
                                        <p>
                                            Ideally, students should take the SAT in their junior year (11th grade) with the option to retake in senior year (12th grade). The test is offered 7 times per year internationally. We recommend:
                                        </p>
                                        <ul>
                                            <li>First attempt: March or May of junior year</li>
                                            <li>Second attempt: August or October of senior year (if needed)</li>
                                            <li>Allow 3-6 months of preparation before test date</li>
                                            <li>Register 6-8 weeks before the test date</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "gmat" && (
                                <div id="gmat" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>GMAT Preparation</h2>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/test-banner/gmat/desktop.webp" />
                                            <img src="/test-banner/gmat/desktop.webp" className="content__banner" />
                                        </picture>
                                        <p>
                                            The Graduate Management Admission Test (GMAT) is required for admission to most MBA and business master's programs worldwide. A competitive GMAT score is essential for top business schools and can significantly increase scholarship opportunities.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>GMAT Focus Edition Structure</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Section</th>
                                                        <th>Duration</th>
                                                        <th>Questions</th>
                                                        <th>Score Range</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Quantitative Reasoning</td>
                                                        <td>45 minutes</td>
                                                        <td>21 questions</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Verbal Reasoning</td>
                                                        <td>45 minutes</td>
                                                        <td>23 questions</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Data Insights</td>
                                                        <td>45 minutes</td>
                                                        <td>20 questions</td>
                                                        <td>60-90</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p><strong>Total Test Time:</strong> 2 hours 15 minutes (plus breaks)</p>
                                        <p><strong>Total Score Range:</strong> 205-805</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>GMAT Score Benchmarks</h3>
                                        <ul>
                                            <li><strong>705-805:</strong> Harvard, Stanford, Wharton (top 5 MBA programs)</li>
                                            <li><strong>655-704:</strong> Top 10-20 business schools</li>
                                            <li><strong>605-654:</strong> Top 30-50 business schools</li>
                                            <li><strong>555-604:</strong> Good business schools, regional programs</li>
                                            <li><strong>505-554:</strong> Most business schools minimum requirement</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>GMAT Test Content</h3>
                                        <p><strong>Quantitative Reasoning:</strong></p>
                                        <ul>
                                            <li>Problem Solving</li>
                                            <li>Data Sufficiency (unique to GMAT)</li>
                                            <li>Arithmetic, Algebra, Geometry</li>
                                            <li>No calculator allowed</li>
                                        </ul>

                                        <p><strong>Verbal Reasoning:</strong></p>
                                        <ul>
                                            <li>Reading Comprehension</li>
                                            <li>Critical Reasoning (logical arguments)</li>
                                            <li>Sentence Correction (grammar)</li>
                                        </ul>

                                        <p><strong>Data Insights:</strong></p>
                                        <ul>
                                            <li>Data Sufficiency</li>
                                            <li>Multi-Source Reasoning</li>
                                            <li>Table Analysis</li>
                                            <li>Graphics Interpretation</li>
                                            <li>Two-Part Analysis</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our GMAT Preparation Program</h3>
                                        <p><strong>Course Duration:</strong> 10-16 weeks</p>
                                        <p><strong>Class Schedule:</strong> Evening and weekend options for working professionals</p>
                                        <p><strong>What You'll Get:</strong></p>
                                        <ul>
                                            <li>Official GMAT practice materials and software</li>
                                            <li>Comprehensive concept review for all sections</li>
                                            <li>Specialized Data Sufficiency training</li>
                                            <li>Mental math techniques (no calculator strategies)</li>
                                            <li>Critical reasoning frameworks</li>
                                            <li>Sentence correction grammar rules</li>
                                            <li>Computer-adaptive test strategies</li>
                                            <li>6+ full-length adaptive mock tests</li>
                                            <li>Performance tracking and analytics</li>
                                            <li>MBA application guidance</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Who Should Take the GMAT?</h3>
                                        <ul>
                                            <li>Professionals seeking MBA degrees</li>
                                            <li>Those applying to Master in Management programs</li>
                                            <li>Candidates for specialized business master's (Finance, Marketing, etc.)</li>
                                            <li>Typically 2-5 years work experience recommended</li>
                                            <li>Valid for 5 years from test date</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "cambridge" && (
                                <div id="cambridge" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>IGCSE Preparation</h2>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/test-banner/igcse/desktop.webp" />
                                            <img src="/test-banner/igcse/desktop.webp" className="content__banner" />
                                        </picture>
                                        <p>
                                            Cambridge International Examinations offer a comprehensive curriculum and assessment pathway that is recognized by universities and employers worldwide. From Primary to Pre-University levels, Cambridge qualifications provide a solid foundation for academic success and global opportunities.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Cambridge Assessment Levels</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Level</th>
                                                        <th>Age Group</th>
                                                        <th>Stage</th>
                                                        <th>Key Subjects</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Primary Checkpoint</td>
                                                        <td>11 years (Grade 6)</td>
                                                        <td>End of Primary</td>
                                                        <td>English, Math, Science</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lower Secondary Checkpoint</td>
                                                        <td>14 years (Grade 9)</td>
                                                        <td>End of Lower Secondary</td>
                                                        <td>English, Math, Science</td>
                                                    </tr>
                                                    <tr>
                                                        <td>IGCSE (O-Level)</td>
                                                        <td>16 years (Grade 10-11)</td>
                                                        <td>Secondary</td>
                                                        <td>8-10 subjects</td>
                                                    </tr>
                                                    <tr>
                                                        <td>A-Level</td>
                                                        <td>18 years (Grade 12-13)</td>
                                                        <td>Pre-University</td>
                                                        <td>3-4 subjects</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>Why Choose Cambridge Curriculum?</h3>
                                        <ul>
                                            <li>
                                                <strong>International Recognition:</strong> Accepted by universities worldwide
                                            </li>
                                            <li>
                                                <strong>Rigorous Standards:</strong> Globally consistent academic benchmarks
                                            </li>
                                            <li>
                                                <strong>Pathway to A-Levels:</strong> Direct route to university preparation
                                            </li>
                                            <li>
                                                <strong>Skills Development:</strong> Focus on critical thinking and problem-solving
                                            </li>
                                            <li>
                                                <strong>University Admission:</strong> A-Level results used for direct university entry
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Cambridge Exam Structure</h3>
                                        <p><strong>English:</strong></p>
                                        <ul>
                                            <li>Reading comprehension</li>
                                            <li>Writing (narrative, persuasive, informative)</li>
                                            <li>Usage and grammar in context</li>
                                        </ul>

                                        <p><strong>Mathematics:</strong></p>
                                        <ul>
                                            <li>Number and calculation</li>
                                            <li>Algebra and sequences</li>
                                            <li>Geometry and measures</li>
                                            <li>Data handling and probability</li>
                                        </ul>

                                        <p><strong>Science:</strong></p>
                                        <ul>
                                            <li>Biology (life processes, cells, ecosystems)</li>
                                            <li>Chemistry (matter, reactions, periodic table)</li>
                                            <li>Physics (forces, energy, electricity)</li>
                                            <li>Scientific inquiry and investigation</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our Cambridge Curriculum Preparation</h3>
                                        <p><strong>Available Programs:</strong></p>
                                        <ul>
                                            <li>Primary Checkpoint Preparation (Grade 5-6)</li>
                                            <li>Lower Secondary Checkpoint (Grade 8-9)</li>
                                            <li>IGCSE Preparation (Grade 9-11)</li>
                                            <li>A-Level Preparation (Grade 11-13)</li>
                                        </ul>

                                        <p><strong>Program Features:</strong></p>
                                        <ul>
                                            <li>Curriculum-aligned lesson plans</li>
                                            <li>Past papers and mark schemes</li>
                                            <li>Subject-specific study materials</li>
                                            <li>Regular progress assessments</li>
                                            <li>Exam technique and time management</li>
                                            <li>Individual subject tutoring available</li>
                                            <li>Mock examinations under exam conditions</li>
                                            <li>Revision workshops before actual exams</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>University Recognition</h3>
                                        <p>
                                            Cambridge A-Levels are recognized by universities worldwide and are often considered equivalent to:
                                        </p>
                                        <ul>
                                            <li>US High School Diploma + AP courses</li>
                                            <li>International Baccalaureate (IB) Diploma</li>
                                            <li>Various national secondary school qualifications</li>
                                        </ul>
                                        <p>
                                            Students with strong A-Level results (A*-B grades) can gain admission to top universities including Oxford, Cambridge, Imperial, UCL, US Ivy League schools, and other prestigious institutions worldwide.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "csca" && (
                                <div id="csca" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>The CSCA Undergraduate Academic Competency Test</h2>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/test-banner/csca/desktop.webp" />
                                            <img src="/test-banner/csca/desktop.webp" className="content__banner" />
                                        </picture>
                                        <p>
                                            Effective October 25, 2025, the Chinese government has introduced a new policy requiring all international students to take the CSCA as a mandatory part of the admission process. In this friendly guide, you'll learn everything you need to know about the CSCA, why it matters, and how to prepare.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>What is CSCA?</h3>
                                        <p>
                                            The CSCA is a standardized test designed by the China Scholarship Council (CSC) and university experts to assess both your academic foundation and language proficiency. It's widely recognized and trusted by Chinese universities for undergraduate admissions and scholarship evaluations, helping you showcase your readiness for academic life in China.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Why Should You Take the CSCA?</h3>
                                        <p><strong>Widely Accepted</strong><br />
                                            The CSCA is honored by top universities across China—your score opens more doors.</p>
                                        <p><strong>Academic Focus</strong><br />
                                            It tests key subjects—Mathematics, Physics, Chemistry, and Professional Chinese—all offered in both Chinese and English.</p>
                                        <p><strong>Tailored Application Support</strong><br />
                                            Your results strengthen your application and help you secure scholarships.</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>How to Choose Your Subjects?</h3>
                                        <p>
                                            Your chosen university and the type of program determine which CSCA subjects to take.
                                        </p>
                                        <p><strong>For Chinese Government Scholarships:</strong><br />
                                            Mathematics and Professional Chinese are required; Physics and Chemistry may also be needed, so double-check your target major.</p>
                                        <p><strong>For Non-Scholarship Programs:</strong><br />
                                            Mathematics and, if your program is in Chinese, Professional Chinese are mandatory. Optional subject needs depend on your desired major.</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Exam Dates & Format</h3>
                                        <p>
                                            CSCA exams are held five times in 2026: January, March, April, June, and December. You can choose between online testing, convenient for global applicants, and offline centers, now available in Vietnam and Thailand with more on the way.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Scoring & Fees</h3>
                                        <p>
                                            All subjects are graded out of 100 points. Results for online and computer-based exams arrive within 7 business days; paper exams within 14. The fee is 450 RMB for one subject, and 700 RMB for two or more.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Need Help Choosing Your CSCA Subjects?</h3>
                                        <p>
                                            Not sure which CSCA subjects are right for your chosen university or faculty? Fortrust is here to guide you every step of the way! Our expert counselors can help you determine the perfect subject combination for your application and provide tailored preparation resources to ensure you excel on the test.
                                        </p>
                                        <p>
                                            Reach out to Fortrust today for personalized advice and comprehensive CSCA preparation support. Take the stress out of your application—let us help you unlock your academic future in China!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Excel in Your Standardized Tests?</h2>
                        <p>
                            Let our proven strategies and expert guidance help you achieve your target score.
                        </p>
                        <a
                            href="/contact"
                            className="btn btn--primary btn--large"
                        >
                            Book Your Free Consultation
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}