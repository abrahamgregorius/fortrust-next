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
    const [activeTab, setActiveTab] = useState("ielts");

    const tabs = [
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
                            {activeTab === "ielts" && (
                                <div id="ielts" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Your Complete Guide to IELTS</h2>
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/test-banner/ielts/desktop.webp" />
                                            <img src="/test-banner/ielts/desktop.webp" alt="IELTS Banner" className="content__banner" />
                                        </picture>
                                        <p>
                                            Proving your English proficiency is often a mandatory requirement when you plan to study or work overseas. <strong></strong> is one of the most recognized English language proficiency tests worldwide. It is accepted by over 11,000 institutions, including top-ranked universities and professional organizations.
                                        </p>
                                        <p>
                                            <strong></strong> IELTS evaluates your English skills through four sections: Listening, Reading, Writing, and Speaking. Offered in both Academic and General Training versions, IELTS is a top choice for university admissions, immigration, and professional registration in the <strong></strong>. Test-takers can choose between paper-based and computer-based formats.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Key Differences between IELTS & TOEFL</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Feature</th>
                                                        <th>IELTS</th>
                                                        <th>Benefits</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Speaking Section</td>
                                                        <td>Face-to-face with examiner</td>
                                                        <td>More natural & Personal</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Question Types</td>
                                                        <td>Varied formats</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Test Duration</td>
                                                        <td>Around 3 hours</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Test Result Availability</td>
                                                        <td>Results in 13 days</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Score Validity</td>
                                                        <td>Valid for two years</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>When should you take the IELTS?</h3>
                                        <p>
                                            You should plan to take the IELTS test in the first semester of your final year of high school, or several months before your university application deadlines. This timing gives you a comfortable window to receive your results, and, if needed, to retake the test to improve your score. Early preparation ensures you meet application requirements and gives you the best chance of achieving your desired results before important deadlines.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>IELTS Exam Format</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Feature / Section</th>
                                                        <th>Section</th>
                                                        <th>No of Questions</th>
                                                        <th>Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading</td>
                                                        <td>3 sections</td>
                                                        <td>40 questions</td>
                                                        <td>60 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>4 sections</td>
                                                        <td>40 questions</td>
                                                        <td>30 Minutes</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>2 tasks</td>
                                                        <td></td>
                                                        <td>60 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>3 parts</td>
                                                        <td>Face to face</td>
                                                        <td>11-14 mins</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>IELTS, TOEFL, Cambridge English Exam Equivalency</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>IELTS Band</th>
                                                        <th>TOEFL iBT</th>
                                                        <th>Cambridge English Scale</th>
                                                        <th>Cambridge Exam</th>
                                                        <th>General Entry Requirement for</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>9</td><td>118–120</td><td>200–230</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8.5</td><td>115–117</td><td>191–199</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td>8</td><td>110–114</td><td>185–190</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                    <tr><td><strong>7.5</strong></td><td><strong>102–109</strong></td><td><strong>176–184</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>7</strong></td><td><strong>94–101</strong></td><td><strong>169–175</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                    <tr><td><strong>6.5</strong></td><td><strong>79–93</strong></td><td><strong>162–168</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor / Master Degree, depend on the subject you choose</strong></td></tr>
                                                    <tr><td><strong>6</strong></td><td><strong>60–78</strong></td><td><strong>154–161</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor Degree</strong></td></tr>
                                                    <tr><td>5.5</td><td>46–59</td><td>147–153</td><td>B2 First (FCE)</td><td>Diploma</td></tr>
                                                    <tr><td>5</td><td>35–45</td><td>140–146</td><td>B1 Preliminary (PET)</td><td>Diploma</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p>
                                            *Good score range for IELTS, TOEFL and Cambridge English Test, is within the highlighted area.*
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Preparing for IELTS</h3>
                                        <p>
                                            Preparing for the IELTS doesn’t have to be overwhelming. At Fortrust, we specialize in helping students achieve their target IELTS scores with tailored coaching, mock tests, and 1-on-1 guidance or in a group format, online and offline. Don’t let English be a barrier — let it be your passport to the world.
                                        </p>
                                    </div>
                                    {/* Tombol ke WA disarankan ada di bagian CTA akhir */}
                                </div>
                            )}

                            {activeTab === "toefl" && (
                                <div id="toefl" className="tab-pane active">
                                    {/* --- Konten TOEFL dari Artikel Anda --- */}
                                    <div className="content-block">
                                        <h2>Your Complete Guide to TOEFL</h2>
                                        <p>
                                            Dreaming of studying in the <strong></strong> or a world-class university overseas? Your English skills can be your passport — and the TOEFL is your ticket. This test doesn’t just measure grammar or vocabulary; it measures your readiness to thrive in an English-speaking academic world. A strong TOEFL score can open direct pathways to universities abroad and special academic programs.
                                        </p>
                                        <p>
                                            <strong></strong> The Test of English as a Foreign Language (TOEFL) is among the most trusted English proficiency tests worldwide. While it’s required by all universities in the USA, it is also accepted by thousands of institutions in countries like <strong></strong>. The most popular version, <strong></strong>, evaluates Reading, Listening, Speaking, and Writing, giving universities a clear picture of your practical English skills.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Key Differences between TOEFL & IELTS</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Feature</th>
                                                        <th>TOEFL</th>
                                                        <th>Benefits</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Speaking Section</td>
                                                        <td>Spoken into a microphone</td>
                                                        <td>No face-to-face examiner stress</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Question Types</td>
                                                        <td>Mostly multiple-choice</td>
                                                        <td>Making it straightforward for test-takers</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Test Duration</td>
                                                        <td>Around 3 hours</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Test Result Availability</td>
                                                        <td>Results in 6 days</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Score Validity</td>
                                                        <td>Valid for two years</td>
                                                        <td></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>When should you take the TOEFL Test?</h3>
                                        <p>
                                            You should plan to take the TOEFL test in the first semester of your final year of high school, or several months before your university application deadlines. This timing gives you a comfortable window to receive your results, and, if needed, to retake the test to improve your score. Early preparation ensures you meet application requirements and gives you the best chance of achieving your desired results before important deadlines.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>TOEFL Exam Format (iBT)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Feature / Section</th>
                                                        <th>Sections</th>
                                                        <th>Questions</th>
                                                        <th>Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Reading</td>
                                                        <td>3 sections</td>
                                                        <td>36-56 questions</td>
                                                        <td>60-80 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Listening</td>
                                                        <td>4 sections</td>
                                                        <td>28-39 questions</td>
                                                        <td>41-57 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Writing</td>
                                                        <td>2 tasks</td>
                                                        <td></td>
                                                        <td>50 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Speaking</td>
                                                        <td>6 tasks</td>
                                                        <td>(recorded)</td>
                                                        <td>20 mins</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="content-block">
                                        <h3>TOEFL Score Equivalency</h3>
                                        <p>Lihat tabel di bagian IELTS untuk perbandingan skor lengkap antara IELTS, TOEFL, dan Cambridge English.</p>
                                        <table className="data-table">
                                            <thead>
                                                <tr>
                                                    <th>IELTS Band</th>
                                                    <th>TOEFL iBT</th>
                                                    <th>Cambridge English Scale</th>
                                                    <th>Cambridge Exam</th>
                                                    <th>General Entry Requirement for</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td>9</td><td>118–120</td><td>200–230</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                <tr><td>8.5</td><td>115–117</td><td>191–199</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                <tr><td>8</td><td>110–114</td><td>185–190</td><td>C2 Proficiency (CPE)</td><td></td></tr>
                                                <tr><td><strong>7.5</strong></td><td><strong>102–109</strong></td><td><strong>176–184</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                <tr><td><strong>7</strong></td><td><strong>94–101</strong></td><td><strong>169–175</strong></td><td><strong>C1 Advanced (CAE)</strong></td><td><strong>Master Degree</strong></td></tr>
                                                <tr><td><strong>6.5</strong></td><td><strong>79–93</strong></td><td><strong>162–168</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor / Master Degree, depend on the subject you choose</strong></td></tr>
                                                <tr><td><strong>6</strong></td><td><strong>60–78</strong></td><td><strong>154–161</strong></td><td><strong>B2 First (FCE)</strong></td><td><strong>Bachelor Degree</strong></td></tr>
                                                <tr><td>5.5</td><td>46–59</td><td>147–153</td><td>B2 First (FCE)</td><td>Diploma</td></tr>
                                                <tr><td>5</td><td>35–45</td><td>140–146</td><td>B1 Preliminary (PET)</td><td>Diploma</td></tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="content-block">
                                        <h3>Preparing for TOEFL</h3>
                                        <p>
                                            Preparing for TOEFL doesn’t have to be stressful. Take practice tests, focus on daily English use, and get guidance from experts. At Fortrust, we provide tailored study plans, mock exams, and feedback so you can reach your target score with confidence.
                                        </p>
                                    </div>
                                    {/* Tombol ke WA disarankan ada di bagian CTA akhir */}
                                </div>
                            )}

                            {activeTab === "hsk" && (
                                <div id="hsk" className="tab-pane active">
                                    {/* --- Konten HSK dari Artikel Anda --- */}
                                    <div className="content-block">
                                        <h2>Your Complete Guide to the HSK</h2>
                                        <p>
                                            If you’re learning Chinese and starting to think about studying, working, or living in China, you’ve probably heard of the <strong></strong>. Short for <strong></strong> it’s the official Chinese language proficiency test for non-native speakers. Getting a good HSK score can open up doors at Chinese universities, help you qualify for scholarships, or even boost your resume for jobs that require Mandarin.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>When Should You Take the HSK?</h3>
                                        <p>
                                            It’s a smart move to take the HSK a few months before any deadlines—like for university admissions or job applications—so you have time to get your results or retake the test if needed. Since each school or company might have different requirements, be sure to check exactly which HSK level you’ll need.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>HSK Level Structure</h3>
                                        <p>The HSK comes in six levels, from beginner (HSK 1) to advanced (HSK 6).</p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>HSK Level</th>
                                                        <th>Sections</th>
                                                        <th>Types of Questions</th>
                                                        <th>Test Time</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>HSK 1 & 2</td>
                                                        <td>Listening + Reading</td>
                                                        <td>Multiple choice</td>
                                                        <td>40–55 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 3 & 4</td>
                                                        <td>Listening, Reading, Writing</td>
                                                        <td>MCQ & writing short answers</td>
                                                        <td>90–105 mins</td>
                                                    </tr>
                                                    <tr>
                                                        <td>HSK 5 & 6</td>
                                                        <td>Listening, Reading, Writing</td>
                                                        <td>MCQ & essay writing</td>
                                                        <td>120–140 mins</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <ul>
                                            <li><strong></strong> You’ll hear recordings in Chinese and answer questions</li>
                                            <li><strong></strong> Read passages and pick the right answers</li>
                                            <li><strong></strong> Only on levels 3 and above – write words, sentences, or essays</li>
                                        </ul>
                                        <p>There’s also an optional HSK Speaking (HSKK) test if you want to show off your spoken Chinese.</p>
                                    </div>

                                    <div className="content-block">
                                        <h3>HSK Score & Cost Requirements</h3>
                                        <ul>
                                            <li><strong></strong>
                                                <ul>
                                                    <li><strong></strong> Required for undergraduate programs in China (Chinese-taught)</li>
                                                    <li><strong></strong> Required for graduate programs and Chinese language scholarships</li>
                                                </ul>
                                            </li>
                                            <li><strong></strong> HSK fees vary by country and test level but typically range from <strong></strong>.</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Top Tips for HSK Prep</h3>
                                        <ul>
                                            <li><strong></strong> Practice with real test papers so you know what to expect.</li>
                                            <li><strong></strong> Flashcards, quizzes, and mock exams are your friends!</li>
                                            <li><strong></strong> Download the official word list for your chosen level.</li>
                                            <li><strong></strong> Watch Chinese shows, listen to podcasts, or use HSK listening practice apps.</li>
                                            <li><strong></strong> Try reading news articles and writing short paragraphs in Chinese.</li>
                                            <li><strong></strong> Joining a class or finding a study buddy makes learning easier and more fun.</li>
                                            <li><strong></strong> Review previous HSK tests to spot trends in questions.</li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Preparing for HSK with Fortrust</h3>
                                        <p>
                                            Ready to take the next step in your Chinese language journey? If you need support preparing for your HSK, Fortrust is here to help you. Reach out to our team today—we’ll guide you with expert resources, personalized study plans, and proven exam strategies, so you can take the test with confidence and achieve your goals!
                                        </p>
                                    </div>
                                    {/* Tombol ke WA disarankan ada di bagian CTA akhir */}
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Ace Your Language Test?</h2>
                        <p>
                            Don’t let language be a barrier — let it be your passport to the world. Book your free trial class with Fortrust today!
                        </p>
                        <a
                            href="LINK_KE_WHATSAPP_ANDA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--primary btn--large"
                        >
                            Get Free Trial Class
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    );
}