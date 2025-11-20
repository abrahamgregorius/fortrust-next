"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    BookOpen,
    FileText,
    GraduationCap,
    LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function LanguagePrep() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: <LayoutGrid /> },
        { id: "ielts", label: "IELTS", icon: <BookOpen /> },
        { id: "toefl", label: "TOEFL", icon: <FileText /> },
        { id: "hsk", label: "HSK", icon: <GraduationCap /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Language Test Preparation: IELTS, TOEFL, HSK
                        </h1>
                        <p>
                            Master your language proficiency tests with expert guidance and comprehensive preparation programs.
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
                            {activeTab === "overview" && (
                                <div id="overview" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Language Test Preparation Overview</h2>
                                        <p>
                                            Language proficiency tests are essential requirements for international education and immigration. Our comprehensive preparation programs help you achieve your target scores in IELTS, TOEFL, and HSK examinations.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Why Choose Our Language Prep Programs?</h3>
                                        <ul>
                                            <li>
                                                <strong>Expert Instructors:</strong> Learn from certified trainers with years of teaching experience and proven track records.
                                            </li>
                                            <li>
                                                <strong>Comprehensive Materials:</strong> Access to up-to-date study materials, practice tests, and online resources.
                                            </li>
                                            <li>
                                                <strong>Flexible Schedules:</strong> Choose from intensive, regular, or weekend classes to fit your lifestyle.
                                            </li>
                                            <li>
                                                <strong>Small Class Sizes:</strong> Personalized attention with limited students per class for effective learning.
                                            </li>
                                            <li>
                                                <strong>Mock Tests:</strong> Regular practice tests under exam conditions to build confidence and track progress.
                                            </li>
                                            <li>
                                                <strong>Score Guarantee:</strong> Structured programs designed to help you achieve your target band/score.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Which Test Should You Take?</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Test</th>
                                                        <th>Best For</th>
                                                        <th>Accepted By</th>
                                                        <th>Format</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>IELTS</td>
                                                        <td>UK, Australia, Canada, NZ</td>
                                                        <td>10,000+ institutions worldwide</td>
                                                        <td>Paper-based or Computer-based</td>
                                                    </tr>
                                                    <tr>
                                                        <td>TOEFL</td>
                                                        <td>USA, Canada</td>
                                                        <td>11,500+ institutions</td>
                                                        <td>Internet-based (iBT)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK</td>
                                                        <td>China studies & work</td>
                                                        <td>Chinese universities & employers</td>
                                                        <td>Computer-based or Paper-based</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "ielts" && (
                                <div id="ielts" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>IELTS Preparation</h2>
                                        <p>
                                            The International English Language Testing System (IELTS) is the world's most popular English language test for higher education and global migration. We offer specialized preparation for both IELTS Academic and IELTS General Training.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>IELTS Test Structure</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Section</th>
                                                        <th>Duration</th>
                                                        <th>Questions</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>30 minutes</td>
                                                        <td>40 questions</td>
                                                        <td>4 recordings of native speakers</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Reading</td>
                                                        <td>60 minutes</td>
                                                        <td>40 questions</td>
                                                        <td>3 long passages with tasks</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>60 minutes</td>
                                                        <td>2 tasks</td>
                                                        <td>Task 1 (150 words) & Task 2 (250 words)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>11-14 minutes</td>
                                                        <td>3 parts</td>
                                                        <td>Face-to-face interview with examiner</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>IELTS Band Score Requirements</h3>
                                        <ul>
                                            <li><strong>Band 9:</strong> Expert user - Full operational command</li>
                                            <li><strong>Band 8:</strong> Very good user - Fully operational command</li>
                                            <li><strong>Band 7:</strong> Good user - Operational command (most universities require 6.5-7.0)</li>
                                            <li><strong>Band 6:</strong> Competent user - Effective command</li>
                                            <li><strong>Band 5:</strong> Modest user - Partial command</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our IELTS Preparation Program</h3>
                                        <p><strong>Course Duration:</strong> 4-12 weeks (depending on starting level)</p>
                                        <p><strong>Class Schedule:</strong> Weekday evening or weekend batches available</p>
                                        <p><strong>What You'll Get:</strong></p>
                                        <ul>
                                            <li>Comprehensive study materials and practice tests</li>
                                            <li>Speaking practice sessions with feedback</li>
                                            <li>Writing correction and improvement strategies</li>
                                            <li>Reading and listening skill development</li>
                                            <li>Full-length mock tests every week</li>
                                            <li>One-on-one counseling sessions</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "toefl" && (
                                <div id="toefl" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>TOEFL Preparation</h2>
                                        <p>
                                            The Test of English as a Foreign Language (TOEFL) iBT is widely accepted by universities in the USA and Canada. Our TOEFL preparation program focuses on academic English skills needed for university success.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>TOEFL iBT Test Structure</h3>
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
                                                        <td>Reading</td>
                                                        <td>54-72 minutes</td>
                                                        <td>30-40 questions</td>
                                                        <td>0-30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>41-57 minutes</td>
                                                        <td>28-39 questions</td>
                                                        <td>0-30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>17 minutes</td>
                                                        <td>4 tasks</td>
                                                        <td>0-30</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>50 minutes</td>
                                                        <td>2 tasks</td>
                                                        <td>0-30</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p><strong>Total Test Time:</strong> About 3 hours</p>
                                        <p><strong>Total Score Range:</strong> 0-120</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>TOEFL Score Requirements</h3>
                                        <ul>
                                            <li><strong>100-120:</strong> Highly competitive universities (Ivy League, top 20)</li>
                                            <li><strong>90-99:</strong> Good universities (top 50-100)</li>
                                            <li><strong>80-89:</strong> Most universities minimum requirement</li>
                                            <li><strong>70-79:</strong> Community colleges and some universities</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our TOEFL Preparation Program</h3>
                                        <p><strong>Course Duration:</strong> 6-10 weeks</p>
                                        <p><strong>Class Schedule:</strong> Flexible weekday and weekend options</p>
                                        <p><strong>Program Highlights:</strong></p>
                                        <ul>
                                            <li>Computer-based practice using official TOEFL software</li>
                                            <li>Note-taking strategies for listening section</li>
                                            <li>Integrated task preparation (Reading-Listening-Speaking/Writing)</li>
                                            <li>Academic vocabulary building</li>
                                            <li>Template-based writing approaches</li>
                                            <li>Weekly full-length mock tests</li>
                                            <li>Performance analysis and personalized feedback</li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "hsk" && (
                                <div id="hsk" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>HSK Preparation</h2>
                                        <p>
                                            The Hanyu Shuiping Kaoshi (HSK) is China's standardized test of Chinese language proficiency for non-native speakers. It's essential for studying in China or working with Chinese companies.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>HSK Level Structure</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Level</th>
                                                        <th>Vocabulary</th>
                                                        <th>Test Duration</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>HSK 1</td>
                                                        <td>150 words</td>
                                                        <td>40 minutes</td>
                                                        <td>Basic communication</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 2</td>
                                                        <td>300 words</td>
                                                        <td>55 minutes</td>
                                                        <td>Simple daily topics</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 3</td>
                                                        <td>600 words</td>
                                                        <td>90 minutes</td>
                                                        <td>Everyday situations</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 4</td>
                                                        <td>1,200 words</td>
                                                        <td>105 minutes</td>
                                                        <td>Intermediate fluency (university entry)</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 5</td>
                                                        <td>2,500 words</td>
                                                        <td>125 minutes</td>
                                                        <td>Advanced reading comprehension</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 6</td>
                                                        <td>5,000+ words</td>
                                                        <td>140 minutes</td>
                                                        <td>Professional proficiency</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>HSK Level Requirements</h3>
                                        <ul>
                                            <li><strong>HSK 4:</strong> Required for undergraduate programs in China (Chinese-taught)</li>
                                            <li><strong>HSK 5:</strong> Required for master's programs and Chinese language scholarships</li>
                                            <li><strong>HSK 6:</strong> Doctoral programs and professional work in China</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Our HSK Preparation Program</h3>
                                        <p><strong>Course Duration:</strong> Varies by level (3-6 months per level)</p>
                                        <p><strong>Class Schedule:</strong> Small group classes, 2-3 times per week</p>
                                        <p><strong>What's Included:</strong></p>
                                        <ul>
                                            <li>Pinyin and character recognition training</li>
                                            <li>Systematic vocabulary building with flashcards</li>
                                            <li>Grammar patterns and sentence structures</li>
                                            <li>Listening comprehension practice</li>
                                            <li>Reading comprehension strategies</li>
                                            <li>Writing practice (HSK 3 and above)</li>
                                            <li>Speaking practice (separate HSKK preparation available)</li>
                                            <li>Official HSK practice tests</li>
                                            <li>Cultural context and practical usage</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Why Study Chinese?</h3>
                                        <ul>
                                            <li>Access scholarships for studying in China</li>
                                            <li>Enhance career prospects with Chinese companies</li>
                                            <li>Communicate with 1.4 billion native speakers</li>
                                            <li>Understand Chinese culture and business practices</li>
                                            <li>Stand out in the global job market</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Ace Your Language Test?</h2>
                        <p>
                            Let our expert instructors guide you to achieve your target score.
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
