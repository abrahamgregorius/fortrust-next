import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HSK() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Your Complete Guide to the HSK</h1>
                        <p>
                            Everything students need to know before taking the exam.
                        </p>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">
                        <h2>Understanding the HSK (Hanyu Shuiping Kaoshi)</h2>
                        <p>
                            If you’re learning Chinese and starting to think about studying, working, or living in China, you’ve probably heard of the HSK. Short for “Hanyu Shuiping Kaoshi,” it’s the official Chinese language proficiency test for non-native speakers. Getting a good HSK score can open up doors at Chinese universities, help you qualify for scholarships, or even boost your resume for jobs that require Mandarin.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>When Should You Take the HSK?</h3>
                        <p>
                            It’s a smart move to take the HSK a few months before any deadlines—like for university admissions or job applications—so you have time to get your results or retake the test if needed. If you’ve just finished a level of Chinese study, taking the HSK is also a great way to see how much you’ve improved.
                        </p>
                        <p>
                            Since each school or company might have different requirements, be sure to check exactly which HSK level you’ll need.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>How Is the HSK Structured?</h3>
                        <p>The HSK comes in six levels, from beginner (HSK 1) to advanced (HSK 6). Here’s how the test is broken down:</p>
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
                            <li><strong>Listening:</strong> You’ll hear recordings in Chinese and answer questions.</li>
                            <li><strong>Reading:</strong> Read passages and pick the right answers.</li>
                            <li><strong>Writing:</strong> Only on levels 3 and above – write words, sentences, or essays.</li>
                        </ul>
                        <p>There’s also an optional HSK Speaking (HSKK) test if you want to show off your spoken Chinese.</p>


                        <h3 style={{ marginTop: 'var(--space-8)' }}>How Much Does the HSK Cost?</h3>
                        <p>
                            HSK fees vary by country and test level but typically range from $20 to $100 USD. Higher-level exams are pricier. Double-check with your local test center so you’re prepared for any extra charges.
                        </p>

                        <h3 style={{ marginTop: 'var(--space-8)' }}>What Score Do You Need?</h3>
                        <ul>
                            <li>For undergrad programs in China, HSK Level 4 is usually enough.</li>
                            <li>For graduate programs, aim for Level 5 or 6.</li>
                        </ul>
                        <p>Each university or employer can set their own standards, so always confirm before you register.</p>


                        <h3 style={{ marginTop: 'var(--space-8)' }}>Top Tips for HSK Prep</h3>
                        <ul>
                            <li><strong>Get Familiar</strong><br /> Practice with real test papers so you know what to expect.</li>
                            <li><strong>Keep Practicing</strong><br /> Flashcards, quizzes, and mock exams are your friends!</li>
                            <li><strong>Master the Vocabulary</strong><br /> Download the official word list for your chosen level.</li>
                            <li><strong>Listen Up</strong><br /> Watch Chinese shows, listen to podcasts, or use HSK listening practice apps.</li>
                            <li><strong>Read & Write Every Day</strong><br /> Try reading news articles and writing short paragraphs in Chinese.</li>
                            <li><strong>Study With Others</strong><br /> Joining a class or finding a study buddy makes learning easier and more fun.</li>
                            <li><strong>Check Past Exams</strong><br /> Review previous HSK tests to spot trends in questions.</li>
                        </ul>

                        <p style={{ marginTop: 'var(--space-8)' }}>
                            Ready to take the next step in your Chinese language journey? Whether you’re aiming for university admission, looking to boost your career, or simply want to see how far your skills have come, the HSK is your gateway. If you need support preparing for your HSK, Fortrust is here to help you. Reach out to our team today—we’ll guide you with expert resources, personalized study plans, and proven exam strategies, so you can take the test with confidence and achieve your goals!
                        </p>

                        <div style={{ textAlign: 'center', marginTop: 'var(--space-12)' }}>
                            <Link href="/contact" className="btn btn--primary btn--large">Get Free Consultation</Link>
                        </div>

                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}