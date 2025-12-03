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

export default function Switzerland() {
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
                            Study in Switzerland, where multilingualism, Global Connections
                            and Innovation Converge.
                        </h1>
                        <p>
                            Excellence in hospitality and International Diplomacy
                            and hosts groundbreaking Innovation in Finance.
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
                                            <img
                                                src="/destinations/banners/Switzerland.png"
                                                className="content__banner"
                                                alt="Switzerland Banner"
                                            />
                                            <h2>Why Study in Switzerland?</h2>
                                            <p>
                                                Welcome to Switzerland—an academic haven
                                                where your dreams cross paths with global
                                                opportunities and unmatched advantages
                                                others can only wish for. Imagine studying
                                                in a country where you wake up to the
                                                stunning Alps, interact daily with cultures
                                                from every corner of the world, and build a
                                                future at some of the most prestigious
                                                universities in existence.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Key Benefits of Studying in Switzerland</h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >World-Class Education a Cut Above
                                                        the Rest:</strong
                                                    >
                                                    Home to universities consistently ranked
                                                    among the world’s best—like ETH Zurich
                                                    and EPFL Lausanne—Swiss education is
                                                    synonymous with rigor and innovation.
                                                </li>
                                                <li>
                                                    <strong
                                                    >True Multilingual
                                                        Immersion:</strong
                                                    >
                                                    No other country offers the chance to
                                                    live and learn in a society with four
                                                    national languages, opening doors to
                                                    international job markets.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Unmatched Research & Innovation in
                                                        Finance:</strong
                                                    >
                                                    Switzerland leads the world in research
                                                    output per capita and hosts
                                                    groundbreaking innovation, especially in
                                                    finance.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Global Networking in the Heart of
                                                        International Diplomacy:</strong
                                                    >
                                                    With cities like Geneva hosting
                                                    organizations like the UN, WTO, and WHO,
                                                    your classroom extends to the world’s
                                                    most influential boardrooms.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Exceptional Quality of Life &
                                                        Safety:</strong
                                                    >
                                                    Consistently ranked among the safest,
                                                    cleanest, and most liveable countries on
                                                    earth.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Generous Scholarships for
                                                        You:</strong
                                                    >
                                                    The Swiss government and universities
                                                    offer dedicated scholarships for
                                                    international students, making
                                                    world-class education attainable.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>Top 5 Cities to Study in Switzerland</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>Key Institutions</th>
                                                            <th>City Highlights</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Zurich</td>
                                                            <td>
                                                                ETH Zurich, University of
                                                                Zurich (UZH)
                                                            </td>
                                                            <td>
                                                                Hub of innovation & finance,
                                                                breathtaking lakeside
                                                                setting, global networking.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Geneva</td>
                                                            <td>University of Geneva</td>
                                                            <td>
                                                                Cultural melting pot;
                                                                diplomacy HQ; gateway to the
                                                                world’s NGOs.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bern</td>
                                                            <td>University of Bern</td>
                                                            <td>
                                                                Heart of Swiss heritage,
                                                                peaceful yet powerful city,
                                                                excellent research
                                                                ecosystem.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lausanne</td>
                                                            <td>
                                                                EPFL, University of Lausanne
                                                                (UNIL), EHL
                                                            </td>
                                                            <td>
                                                                A leading center for
                                                                science, engineering, and
                                                                home to the world’s top
                                                                hospitality school.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Basel</td>
                                                            <td>University of Basel</td>
                                                            <td>
                                                                Home to world-class art,
                                                                pharmaceutical innovation,
                                                                and historic charm.
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
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
                                                Applying to universities in Switzerland can
                                                be highly competitive, but a well-prepared
                                                approach will set you apart.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Requirement Type</th>
                                                            <th>Undergraduate</th>
                                                            <th>Graduate (Master's)</th>
                                                            <th>Postgraduate (PhD)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Academic
                                                                    Requirement</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                High school diploma or
                                                                equivalent; minimum average
                                                                70–80%.
                                                            </td>
                                                            <td>
                                                                Recognized bachelor’s
                                                                degree; minimum GPA 3.0/4.0.
                                                            </td>
                                                            <td>
                                                                Master’s degree; proven
                                                                research experience.
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
                                                                IELTS 5.5–6.0, TOEFL iBT
                                                                60–78.
                                                            </td>
                                                            <td>
                                                                IELTS 6.0–6.5, TOEFL iBT
                                                                79–90.
                                                            </td>
                                                            <td>
                                                                IELTS 6.5+, TOEFL iBT 90+.
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
                                                                Certified transcripts,
                                                                passport, personal
                                                                statement, financial proof,
                                                                recommendation letters.
                                                            </td>
                                                            <td>
                                                                Bachelor’s transcript, CV,
                                                                recommendation letters,
                                                                statement of purpose.
                                                            </td>
                                                            <td>
                                                                Master’s transcript, CV,
                                                                research proposal,
                                                                recommendation letters.
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
                                            <h2>Tuition & Living Costs in Switzerland</h2>
                                        </div>
                                        <div className="content-block">
                                            <h3>Annual Tuition Fees</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Program</th>
                                                            <th>Annual Tuition (CHF)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Undergraduate
                                                                (Arts/Business)
                                                            </td>
                                                            <td>CHF 1,000 – 2,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Undergraduate
                                                                (Science/Engineering)
                                                            </td>
                                                            <td>CHF 1,500 – 3,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Graduate (Arts/Business)
                                                            </td>
                                                            <td>CHF 1,500 – 3,200</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Graduate
                                                                (Science/Engineering)
                                                            </td>
                                                            <td>CHF 1,800 – 4,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                College Diploma/Advanced
                                                                Studies
                                                            </td>
                                                            <td>CHF 3,000 – 8,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Average Monthly Living Costs</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>Housing</th>
                                                            <th>Food & Transport</th>
                                                            <th>
                                                                Total Monthly Cost (CHF)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Zurich</td>
                                                            <td>CHF 800–1,500</td>
                                                            <td>CHF 470–710</td>
                                                            <td>CHF 1,500–2,500</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Geneva</td>
                                                            <td>CHF 700–1,400</td>
                                                            <td>CHF 410–600</td>
                                                            <td>CHF 1,400–2,300</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Bern</td>
                                                            <td>CHF 650–1,250</td>
                                                            <td>CHF 405–540</td>
                                                            <td>CHF 1,300–2,200</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Lausanne</td>
                                                            <td>CHF 600–1,200</td>
                                                            <td>CHF 370–530</td>
                                                            <td>CHF 1,200–2,100</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Basel</td>
                                                            <td>CHF 600–1,100</td>
                                                            <td>CHF 350–470</td>
                                                            <td>CHF 1,200–2,000</td>
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
                                                During studies, International students in
                                                Switzerland can work up to 15 hours per week
                                                during the semester. During official
                                                university breaks or holidays, you can work
                                                full-time—a rare bonus compared to many
                                                other countries.
                                            </p>
                                            <p>
                                                After you finish your degree, you can apply
                                                for a special residence permit to search for
                                                a job or undertake internships for up to 18
                                                months. During this period, you have the
                                                right to earn an income and kickstart your
                                                career.
                                            </p>
                                        </div>
                                    </div>

                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Scholarships in Switzerland</h2>
                                            <p>
                                                Scholarships in Switzerland are available
                                                from the government, top universities, and
                                                private foundations for students who are
                                                genuine, specific, and proactive.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
                                        </div>
                                        <div className="content-block">
                                            <h3>Tips for Winning a Swiss Scholarship</h3>
                                            <ol>
                                                <li>
                                                    Make Personal Contacts Early:
                                                    Proactively contact professors or
                                                    department coordinators with genuine
                                                    questions.
                                                </li>
                                                <li>
                                                    Customize Your Documents: Craft unique
                                                    motivation letters for every
                                                    institution, highlighting your match
                                                    with their specific values and projects.
                                                </li>
                                                <li>
                                                    Showcase Your International Mindset: Use
                                                    concrete examples of your experience in
                                                    multicultural environments.
                                                </li>
                                                <li>
                                                    Align Your Project With Swiss
                                                    Priorities: Tie your research interests
                                                    to Swiss priorities like sustainability,
                                                    technology, or finance.
                                                </li>
                                                <li>
                                                    Apply for Multiple Scholarships: Don’t
                                                    rely on one application; apply to
                                                    several programs in parallel.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>

                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>All Institutions in Switzerland</h2>
                                            <p>
                                                Study in Switzerland's world-leading
                                                institutions in technology, hospitality, and
                                                research.
                                            </p>
                                            <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">ETH Zurich</div>
                                                <div className="university-item">École Polytechnique Fédérale de Lausanne (EPFL)</div>
                                                <div className="university-item">University of Zurich</div>
                                                <div className="university-item">University of Geneva</div>
                                                <div className="university-item">University of Bern</div>
                                                <div className="university-item">University of Basel</div>
                                                <div className="university-item">University of Lausanne</div>
                                                <div className="university-item">University of Fribourg</div>
                                                <div className="university-item">University of St. Gallen</div>
                                                <div className="university-item">University of Neuchâtel</div>
                                                <div className="university-item">Zurich University of Applied Sciences</div>
                                                <div className="university-item">Lucerne University of Applied Sciences & Arts</div>
                                                <div className="university-item">University of Applied Sciences and Arts Western Switzerland</div>
                                                <div className="university-item">University of Applied Sciences of Eastern Switzerland</div>
                                                <div className="university-item">FernUni Schweiz (Swiss Distance University)</div>
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
                                                The main intake for universities in
                                                Switzerland is typically during the fall
                                                semester (starting in September). Some
                                                universities also offer a spring intake
                                                (starting in January).
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Application Stage</th>
                                                            <th>
                                                                Timeline Before Enrollment
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Research & Standardized
                                                                    Tests</strong
                                                                >
                                                            </td>
                                                            <td>11–15 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Gather Documents &
                                                                    Prepare Essays</strong
                                                                >
                                                            </td>
                                                            <td>8–12 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Submit Online
                                                                    Application &
                                                                    Scholarships</strong
                                                                >
                                                            </td>
                                                            <td>6–9 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Interviews & Admission
                                                                    Results</strong
                                                                >
                                                            </td>
                                                            <td>4–7 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Student Visa &
                                                                    Pre-Departure</strong
                                                                >
                                                            </td>
                                                            <td>2–5 months</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Study in Switzerland?</h2>
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