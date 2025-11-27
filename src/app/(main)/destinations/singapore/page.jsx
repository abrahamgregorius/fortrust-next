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
                                            <img src="./public/destinations/banners/Singapore.png" className="content__banner" alt="" />
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
                                                        Separate Work Visa:</strong
                                                    >
                                                    If you study at a government university,
                                                    you can work part-time (up to 16
                                                    hours/week) without applying for a
                                                    separate visa.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Direct Gateway to Asia’s
                                                        Fastest-Growing Job Market:</strong
                                                    >
                                                    With over 7,000 multinational
                                                    corporations, internships at Fortune 500
                                                    companies are easily accessible.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Degrees Recognized
                                                        Worldwide:</strong
                                                    >
                                                    Universities like NUS and NTU
                                                    consistently rank in the world’s top 15,
                                                    offering degrees valued in every major
                                                    economy.
                                                </li>
                                                <li>
                                                    <strong
                                                    >No Language Barriers in a
                                                        Multilingual Hub:</strong
                                                    >
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
                                            <h2>General Entry Requirements</h2>
                                            <p>
                                                Competition for top universities like NUS
                                                and NTU is fierce. Meeting these
                                                requirements strengthens your chances of
                                                admission.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Requirement</th>
                                                            <th>
                                                                Undergraduate (Bachelor)
                                                            </th>
                                                            <th>Graduate (Master)</th>
                                                            <th>
                                                                Postgraduate (PhD/Doctorate)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Academic
                                                                    Requirements</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                High school graduation with
                                                                a 70–80% average.
                                                            </td>
                                                            <td>
                                                                A Bachelor’s degree in a
                                                                related field with a min.
                                                                GPA of 3.0/4.0.
                                                            </td>
                                                            <td>
                                                                A Master’s degree in a
                                                                relevant discipline with a
                                                                strong research background.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Language
                                                                    Proficiency</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                IELTS 5.5–6.0 or TOEFL iBT
                                                                60–78.
                                                            </td>
                                                            <td>
                                                                IELTS 6.0–6.5 or TOEFL iBT
                                                                79–90.
                                                            </td>
                                                            <td>
                                                                IELTS 6.5+ or TOEFL iBT 90+.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Supporting
                                                                    Documents</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                Passport, transcripts,
                                                                personal statement,
                                                                financial proof.
                                                            </td>
                                                            <td>
                                                                Passport, transcripts, CV,
                                                                2-3 recommendation letters,
                                                                statement of purpose.
                                                            </td>
                                                            <td>
                                                                Transcripts, research
                                                                proposal, CV, 2-3 academic
                                                                references, publications.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "costs" && (
                                <>
                                    <div id="costs" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Tuition & Living Costs in Singapore</h2>
                                            <p>
                                                Understanding the costs is the first step to
                                                making an informed decision. Here’s a
                                                breakdown of verified tuition fees and
                                                living expenses.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Tuition Fees (Per Year)</h3>
                                            <ul>
                                                <li>
                                                    <strong>Undergraduate Programs:</strong>
                                                    Approx. SGD 17,000 – 25,000/year after
                                                    the MOE tuition grant.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Graduate (Master’s)
                                                        Programs:</strong
                                                    >
                                                    SGD 18,000 – 35,000/year. Business and
                                                    finance programs may exceed SGD 40,000.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Postgraduate (PhD)
                                                        Programs:</strong
                                                    >
                                                    SGD 18,000 – 25,000/year, often
                                                    subsidized and many students receive
                                                    full funding.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Note:</strong> Students receiving
                                                the MOE Tuition Grant must commit to working
                                                in Singapore for 3 years after graduation.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Estimated Monthly Living Costs</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Expense Category</th>
                                                            <th>
                                                                Estimated Cost (per month)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Housing (shared flat or
                                                                dorm)
                                                            </td>
                                                            <td>SGD 400 – 1,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Food</td>
                                                            <td>SGD 300 – 600</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Transport (EZ-Link pass)
                                                            </td>
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
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Total Monthly
                                                                    Budget</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                <strong
                                                                >SGD 1,200 –
                                                                    2,500</strong
                                                                >
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "work" && (
                                <>
                                    <div id="work" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Work Rights for Students</h2>
                                            <p>
                                                Combining study with legal work experience
                                                in Singapore not only helps you financially
                                                but also strengthens your professional
                                                network in one of the world’s most
                                                competitive economies.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >Part-Time Work During
                                                        Studies:</strong
                                                    >
                                                    If you hold a Student Pass at an
                                                    approved institution, you may work
                                                    part-time up to 16 hours per week during
                                                    the academic term without a separate
                                                    work pass.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Full-Time During Vacation:</strong
                                                    >
                                                    During scheduled university breaks, you
                                                    can work full-time without a separate
                                                    permit.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Post-Study Work
                                                        Opportunities:</strong
                                                    >
                                                    Graduates may be eligible for a
                                                    Long-Term Visit Pass (LTVP) for up to 1
                                                    year while seeking employment, or an
                                                    Employment Pass (EP) once a qualifying
                                                    job offer is secured.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Scholarships in Singapore</h2>
                                            <p>
                                                Singapore offers a wealth of scholarships
                                                for international students, backed by the
                                                Ministry of Education and top universities
                                                like NUS and NTU. With the right funding,
                                                your academic journey can be inspiring and
                                                affordable.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
                                        </div>
                                        <div className="content-block">
                                            <h3>Key Types of Scholarships</h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >Singapore International Graduate
                                                        Award (SINGA):</strong
                                                    >
                                                    For outstanding PhD graduates in science
                                                    or engineering, covering full tuition
                                                    and a generous monthly stipend.
                                                </li>
                                                <li>
                                                    <strong>Tuition Grant Scheme:</strong> A
                                                    significant government subsidy on
                                                    tuition fees for undergraduate students,
                                                    with a 3-year work bond in Singapore
                                                    post-graduation.
                                                </li>
                                                <li>
                                                    <strong
                                                    >University Scholarships:</strong
                                                    >
                                                    Top universities like NUS, NTU, and SMU
                                                    offer merit-based scholarships covering
                                                    tuition and living allowances for both
                                                    undergraduate and graduate students.
                                                </li>
                                            </ul>
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
                                            <ul>
                                                <li>National University of Singapore (NUS)</li>
                                                <li>Nanyang Technological University (NTU)</li>
                                                <li>Singapore Management University (SMU)</li>
                                                <li>Singapore University of Technology and Design (SUTD)</li>
                                                <li>Singapore Institute of Technology (SIT)</li>
                                                <li>LASALLE College of the Arts</li>
                                                <li>Nanyang Academy of Fine Arts (NAFA)</li>
                                                <li>Duke–NUS Medical School</li>
                                                <li>INSEAD Asia Campus</li>
                                                <li>ESSEC Business School Asia-Pacific</li>
                                                <li>James Cook University Singapore</li>
                                                <li>Kaplan Singapore</li>
                                                <li>PSB Academy</li>
                                                <li>Management Development Institute of Singapore (MDIS)</li>
                                                <li>SP Jain School of Global Management</li>
                                            </ul>

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
                                                    >August Intake (Primary):</strong
                                                    >
                                                    The main intake with the broadest
                                                    selection of courses. Applications
                                                    typically run from October to March of
                                                    the preceding year.
                                                </li>
                                                <li>
                                                    <strong
                                                    >January Intake (Limited):</strong
                                                    >
                                                    A smaller intake with a limited range of
                                                    courses, typically in Business, IT, and
                                                    Hospitality. Applications run from June
                                                    to September of the previous year.
                                                </li>
                                            </ul>
                                            <p>
                                                <strong>Pro Tip:</strong> Apply early!
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
