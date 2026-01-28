"use client"

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
    Briefcase,
    Building2,
    CalendarDays,
    FileCheck2,
    GraduationCap,
    LayoutGrid,
    Wallet,
} from "lucide-react";

export default function Singapore() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: <LayoutGrid /> },
        { id: "requirements", label: "Requirements", icon: <FileCheck2 /> },
        { id: "costs", label: "Costs", icon: <Wallet /> },
        { id: "work", label: "Work Rights", icon: <Briefcase /> },
        { id: "scholarships", label: "Scholarships", icon: <GraduationCap /> },
        { id: "partners", label: "Institutions", icon: <Building2 /> },
        { id: "intakes", label: "Intakes", icon: <CalendarDays /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Study in Singapore, The Smartest Move for Your Future
                        </h1>
                        <p>
                            Where world-class education meets career-defining
                            opportunities.
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
                                <>
                                    <div id="overview" className="tab-pane active">
                                        <div className="content-block">
                                            <picture><source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Singapore.webp" /><img src="/destinations/banners/Browser/Singapore.webp" alt="" className="content__banner" /></picture>
                                            <h2>Why Study in Singapore?</h2>
                                            <p>
                                                Singapore offers a unique combination of
                                                world-class education, career-defining
                                                opportunities, and a vibrant multicultural
                                                environment.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>
                                                Unique Benefits of Studying in Singapore
                                            </h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >Work While You Study Without a
                                                        Separate Work Visa</strong
                                                    ><br />
                                                    If you study at a government university,
                                                    you can work part-time (up to 16
                                                    hours/week) without applying for a
                                                    separate visa.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Direct Gateway to Asia’s
                                                        Fastest-Growing Job Market</strong
                                                    ><br />
                                                    With over 7,000 multinational
                                                    corporations, internships at Fortune 500
                                                    companies are easily accessible.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Degrees Recognized
                                                        Worldwide</strong
                                                    ><br />
                                                    Universities like NUS and NTU
                                                    consistently rank in the world’s top 15,
                                                    offering degrees valued in every major
                                                    economy.
                                                </li>
                                                <li>
                                                    <strong
                                                    >No Language Barriers in a
                                                        Multilingual Hub</strong
                                                    ><br />
                                                    English is the main language of
                                                    instruction, but you’ll also pick up
                                                    Mandarin and Malay, boosting your
                                                    professional edge in Asia.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "requirements" && (
                                <>
                                    <div id="requirements" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Entry Requirement</h2>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Requirement</th>
                                                            <th>Undergraduate (Bachelor)</th>
                                                            <th>Graduate (Master)</th>
                                                            <th>Postgraduate (PhD/Doctorate)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Academic Requirements</strong></td>
                                                            <td>High school graduation or equivalent (A-Levels, IB, or Foundation) <br /> Minimum average 70–80%</td>
                                                            <td>Bachelor’s degree in a related field<br />Minimum GPA 3.0/4.0</td>
                                                            <td>Master’s degree in a relevant field<br />Strong research background<br />Prior research (advantageous)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Language Proficiency</strong></td>
                                                            <td>IELTS 5.5–6.0<br /> TOEFL iBT 60–78 </td>
                                                            <td> IELTS 6.0–6.5 <br />TOEFL iBT 79–90 </td>
                                                            <td>IELTS 6.5+<br />TOEFL iBT 90+ </td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Supporting Documents</strong></td>
                                                            <td>Passport Copy <br />Certified transcripts<br />School Leaving Certificates <br />Personal statement <br />Financial proof <br />Recommendation letters</td>
                                                            <td>Copy of passport <br />Certified bachelor transcripts<br />CV/resume<br />2–3 recommendation letters<br />Statement of purpose<br />Research Proposal (if applying for research Based Program)</td>
                                                            <td>Certified master’s transcripts<br />Research proposal aligning with faculty expertise <br />CV/resume<br />2–3 recommendation letters from supervisors or Lecturers<br />Personal statement<br />Academic Publications (if available)</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Additional Processing</strong></td>
                                                            <td>Some programs: Interview/test (for elite programs, architecture, design, etc.)</td>
                                                            <td>May include interviews/test<br /> Portfolio (for art/design)</td>
                                                            <td>Interview with supervisor/research committee<br />Submitted research proposal</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Why Meeting These Requirements Matters</h3>
                                            <p>Singapore’s top universities like NUS and NTU attract global talent every year — but competition is fierce. Meeting (and exceeding) entry requirements not only strengthens your chances of admission but also helps you prepare for academic success from day one.</p>
                                        </div>
                                        <div className="content-block">
                                            <h2>Application Timeline</h2>
                                            <p>Singaporean universities offer two principal intakes each year. The primary intake occurs in August or September and is the most popular among students, as it conveniently aligns with the conclusion of school years in many countries, ensuring a smooth transition into higher education. Application deadlines for this main intake typically fall in May or June, and students benefit from a wider array of program options and greater opportunities for financial support, including scholarships.</p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Intake</th>
                                                            <th>Start of Semester</th>
                                                            <th>Application Window</th>
                                                            <th>When to Start Preparing</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>August Intake (Primary)</td>
                                                            <td>Early to mid-August</td>
                                                            <td>Typically October to March of the preceding year</td>
                                                            <td>Most degree programs, particularly in highly sought-after fields such as Computer Science, Engineering, and Business, begin during this intake, offering the broadest selection of courses.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>January Intake (Limited)</td>
                                                            <td>Early January</td>
                                                            <td>June to September of the previous year</td>
                                                            <td>This intake presents a limited range of courses, typically in areas like Business, IT, Hospitality, and select Engineering programs.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <br />
                                            <h3>Pro Tips for Success:</h3>
                                            <ul>
                                                <li><strong>Apply Early</strong><br /> Singapore’s top universities have competitive admissions; early submissions show preparedness and increase your odds.</li>
                                                <li><strong>Check Specific Requirements</strong><br /> Each university may differ slightly in grades, documents, or deadlines.</li>
                                                <li><strong>Leverage January Intake Wisely</strong><br /> If you miss August, don’t give up — January can be your second chance.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "costs" && (
                                <>
                                    <div id="costs" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Tuition & Living Cost</h2>
                                            <p>Singapore is not only one of the safest and most dynamic cities in the world, but also a top global education hub. For international students, understanding how much it really costs to study here — including verified tuition fees and living expenses — is the first step to making informed decisions.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Tuition Fees</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Program Level</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Undergraduate Programs</td>
                                                            <td>Public Universities (NUS, NTU, SMU): Approx. SGD 17,000 – 25,000/year after MOE tuition grant.<br />Non-subsidized fees: SGD 30,000 – 50,000/year depending on course (Medicine, Law, and Engineering are higher).<br />Private Institutions: SGD 20,000 – 42,000/year.<br /><br />Tip: Students receiving the MOE Tuition Grant must commit to working in Singapore for 3 years after graduation.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Graduate (Master’s) Programs</td>
                                                            <td>Coursework Master’s: SGD 18,000 – 35,000/year (Business, Finance, and specialized programs may exceed SGD 40,000).<br />Research Master’s: Usually SGD 18,000 – 28,000/year.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Postgraduate (PhD) Programs</td>
                                                            <td>Tuition: SGD 18,000 – 25,000/year (often subsidized for research students).<br />Many PhD students receive full funding with monthly stipends of SGD 2,200 – 3,000.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Living Costs in Singapore</h3>
                                            <p>For a comfortable student lifestyle, budget between SGD 1,200 – 2,500/month, depending on accommodation and lifestyle.</p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Expense Category</th>
                                                            <th>Estimated Cost (per month)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Housing (shared flat or dorm)</td>
                                                            <td>SGD 400 – 1,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food</td>
                                                            <td>SGD 300 – 600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Transport (EZ-Link pass)</td>
                                                            <td>SGD 100 – 150</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Utilities & Internet</td>
                                                            <td>SGD 50 – 150</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Personal & Leisure</td>
                                                            <td>SGD 200 – 400</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Why It’s Still Worth It</h3>
                                            <p>While Singapore can be more expensive than some Asian destinations, shorter degree durations (3 years for most bachelor’s, 1–1.5 for master’s) and worldwide degree recognition mean you can graduate faster and start earning sooner.</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "work" && (
                                <>
                                    <div id="work" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Work Rights</h2>
                                            <p>Combining study with legal work experience in Singapore not only helps you financially but also strengthens your professional network in one of the world's most competitive economies. Thanks to clear regulations from the Ministry of Manpower (MOM) and Immigration & Checkpoints Authority (ICA), international students can work legally under certain conditions — giving you a chance to build your resume while studying in one of Asia's top economies.</p>
                                        </div>
                                        <div className="content-block">
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Category</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Working Part-Time During Studies</strong></td>
                                                            <td>If you hold a Student Pass issued by ICA and are enrolled in a full-time program at an approved institution (like NUS, NTU, SMU, or polytechnics), you may work part-time up to 16 hours per week during the academic term without applying for a separate work pass.<br /><br />During vacation periods scheduled by your school, you can work full-time, also without a separate work permit — as long as you remain a registered student.<br /><br /><strong>Eligible Work Includes:</strong><br />On-campus jobs (library assistant, lab aide, admin support)<br />Paid internships aligned with your course<br />Part-time roles in hospitality, events, or retail</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Conditions You Must Follow</strong></td>
                                                            <td>Your university or institution must be on ICA's approved list<br />You must not be self-employed or work in prohibited sectors (e.g., massage parlors)<br />Your work must not interfere with your studies or attendance requirements</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Internships and Industrial Attachments</strong></td>
                                                            <td>If your internship is part of your course requirements, you can participate under the Training Employment Pass or Work Holiday Pass, depending on duration and salary. Many institutions arrange these placements for you</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Post-Study Work Opportunities</strong></td>
                                                            <td>Graduates may be eligible for:<br />Long-Term Visit Pass (LTVP): For up to 1 year while seeking employment<br />Employment Pass (EP) or S Pass: Once you secure a qualifying job offer<br /><br />Because Singapore hosts over 7,000 multinational corporations, job prospects for skilled graduates are strong</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>SCHOLARSHIPS</h2>
                                            <p>Singapore offers a wealth of scholarships for international students, backed by the Education Ministry and top universities like NUS and NTU. With the right funding, your academic journey in Singapore can be inspiring, affordable, and life-transforming.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Scholarships from Singapore's Government and Ministry of Education</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Scholarship</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>Singapore International Graduate Award (SINGA)</strong></td>
                                                            <td>Who can apply? Outstanding graduates worldwide aiming for PhDs in science or engineering.<br />Coverage: Full tuition, generous monthly stipend (SGD 2,000–2,500), airfare, and settlement allowance.<br />Host Institutions: NUS, NTU, SMU, SUTD.<br />How to apply: Online, directly at SINGA official page.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>ASEAN Scholarships</strong></td>
                                                            <td>Who can apply? Students from ASEAN countries pursuing secondary or pre-university studies.<br />Coverage: Tuition, accommodation, allowance, and return airfare.<br />Apply via: MOE ASEAN Scholarships.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Tuition Grant Scheme</strong></td>
                                                            <td>Who can apply? International undergraduate students admitted to Singapore's public universities (NUS, NTU, SMU, SUTD).<br />Coverage: Significant subsidy on tuition fees (often reduces costs by over 50%).<br />Condition: 3-year bond to work in Singapore post-graduation.<br />Details: MOE Tuition Grant Scheme.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Scholarships from Singapore Universities</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Scholarship</th>
                                                            <th>Details</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td><strong>National University of Singapore (NUS) Scholarships</strong></td>
                                                            <td>NUS Global Merit Scholarship: For high-achieving international undergraduates. Covers tuition and living allowance.<br />NUS Research Scholarships: For graduate students, with full tuition and monthly stipend.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Nanyang Technological University (NTU) Scholarships</strong></td>
                                                            <td>NTU Undergraduate Scholarship: Merit-based, covers tuition and living allowance.<br />NTU Graduate Scholarships: For master's and PhD students, especially in engineering and science.</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Singapore Management University (SMU) Scholarships</strong></td>
                                                            <td>SMU Merit and Financial Scholarships: For outstanding international students in undergraduate and postgraduate programs.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Application Process & Success Tips</h3>
                                            <p>Partial scholarships from private institutions in Singapore are also available.</p>
                                            <ul>
                                                <li><strong>Start Early:</strong> Scholarships have strict deadlines — usually 4–8 months before your intended enrollment.</li>
                                                <li><strong>Prepare Strong Documents:</strong> Certified transcripts, recommendation letters, personal statement, and often proof of extracurricular involvement.</li>
                                                <li><strong>Meet the Standards:</strong> Maintain excellent academic records and highlight leadership/volunteer experiences.</li>
                                                <li><strong>Double-check Eligibility:</strong> Requirements differ by scholarship and university.</li>
                                            </ul>
                                            <p>Imagine graduating without debt and being part of a global community in one of the world's safest, most innovative nations. Scholarships aren't just about money — they're about launching your potential!</p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>All Institutions in Singapore</h2>
                                            <p>
                                                Study in Singapore's world-renowned
                                                public and private universities,
                                                consistently ranked among the best in Asia
                                                and the world.
                                            </p>
                                            <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">National University of Singapore</div>
                                                <div className="university-item">Nanyang Technological University</div>
                                                <div className="university-item">Singapore Management University</div>
                                                <div className="university-item">Singapore University of Social Sciences</div>
                                                <div className="university-item">Singapore Institute of Technology</div>
                                                <div className="university-item">Singapore University of Technology and Design</div>
                                                <div className="university-item">University of the Arts Singapore</div>
                                                <div className="university-item">Curtin University</div>
                                                <div className="university-item">James Cook University</div>
                                                <div className="university-item">The University of Newcastle</div>
                                                <div className="university-item">Paris-Panthéon-Assas University</div>
                                                <div className="university-item">Amity Global Institute</div>
                                                <div className="university-item">Auston Institute of Management</div>
                                                <div className="university-item">BAC College (Singapore)</div>
                                                <div className="university-item">Beacon International College</div>
                                                <div className="university-item">DIMENSIONS International College</div>
                                                <div className="university-item">East Asia Institute of Management (EAIM)</div>
                                                <div className="university-item">ERC Institute</div>
                                                <div className="university-item">Kaplan Higher Education Academy</div>
                                                <div className="university-item">London School of Business & Finance</div>
                                                <div className="university-item">Management Development Institute of Singapore</div>
                                                <div className="university-item">Nanyang Institute of Management</div>
                                                <div className="university-item">PSB Academy</div>
                                                <div className="university-item">Raffles College of Higher Education</div>
                                                <div className="university-item">SISH Institute</div>
                                                <div className="university-item">Singapore Institute of Management</div>
                                                <div className="university-item">Singapore Raffles Music College</div>
                                                <div className="university-item">TMC Academy</div>
                                            </div>

                                            <p className="partners__many">*This list highlights just a fraction of our full university partners.</p>

                                        </div>
                                    </div>

                                </>
                            )}

                            {activeTab === "intakes" && (
                                <>
                                    <div id="intakes" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Application Timeline</h2>
                                            <p>
                                                Singaporean universities offer two principal
                                                intakes each year, with the August intake
                                                being the most popular.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >August Intake (Primary)</strong
                                                    ><br />
                                                    The main intake with the broadest
                                                    selection of courses. Applications
                                                    typically run from October to March of
                                                    the preceding year.
                                                </li>
                                                <li>
                                                    <strong
                                                    >January Intake (Limited)</strong
                                                    ><br />
                                                    A smaller intake with a limited range of
                                                    courses, typically in Business, IT, and
                                                    Hospitality. Applications run from June
                                                    to September of the previous year.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Pro Tip</strong><br /> Apply early!
                                                Singapore’s top universities have
                                                competitive admissions, so early submissions
                                                show preparedness and increase your odds.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Study in Singapore?</h2>
                        <p>
                            Let our expert counsellors guide you through every
                            step of the process.
                        </p>
                        <a
                            href="/contact"
                            className="btn btn--primary btn--large"
                        >
                            Talk to a Counsellor for Free
                        </a>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}
