"use client"

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import {
    Briefcase,
    Building2,
    CalendarDays,
    FileCheck2,
    GraduationCap,
    LayoutGrid,
    Wallet,
} from "lucide-react";

export default function Canada() {
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
                        <h1>Study in Canada, Unlock Your Potential</h1>
                        <p>
                            Discover top education, paid work experience, wellness, and a clear
                            path to immigration — all in one package.
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
                                        <img src="/destinations/banners/Canada.png" className="content__banner" alt="" />
                                        <h2>Why Study in Canada</h2>
                                        <p>
                                            Studying in Canada offers more than just a world-class
                                            education. Here, international students enjoy paid work
                                            experience, robust health care, and clear routes to permanent
                                            residency, making Canada the most all-inclusive destination
                                            for ambitious learners seeking brighter futures.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Key Benefits of Studying in Canada</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Canada’s 3-Year Open Post-Graduation Work Permit
                                                    (PGWP)</strong
                                                > <br />
                                                Get up to a 3-year open work permit after graduation with no
                                                employer restrictions, and access direct pathways to
                                                Permanent Residency (PR) via Express Entry and Provincial
                                                Nominee Programs (PNPs).
                                            </li>
                                            <li>
                                                <strong
                                                >Education Fast-Tracks Your Immigration Points</strong
                                                > <br />
                                                Canadian education adds up to 30 bonus points in the Express
                                                Entry CRS, directly improving your PR prospects. Graduates
                                                qualify for the Canadian Experience Class (CEC) stream
                                                without employer sponsorship.
                                            </li>
                                            <li>
                                                <strong>Paid Co-op & Internship Programs</strong> <br />
                                                Structured co-op programs alternate academic semesters with
                                                paid, full-time work terms, providing 8–20 months of
                                                guaranteed industry experience before graduation.
                                            </li>
                                            <li>
                                                <strong>Global Research Leadership</strong> <br /> Canada leads in
                                                AI, climate science, and clean tech, home to world-renowned
                                                institutes like the Vector Institute (Toronto) and MILA
                                                (Montreal).
                                            </li>
                                            <li>
                                                <strong
                                                >Provincial Health Insurance for International
                                                    Students</strong
                                                > <br />
                                                Provinces like British Columbia, Alberta, and Saskatchewan
                                                offer free or subsidized health insurance to international
                                                students after a short waiting period.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Top 5 Cities to Study in Canada</h3>
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
                                                        <td>Toronto</td>
                                                        <td>University of Toronto, York University</td>
                                                        <td>Multicultural hub, diverse jobs, networking</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>UBC, Simon Fraser University</td>
                                                        <td>
                                                            Green economy, major tech and film industry, high
                                                            quality of life
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>McGill, Université de Montréal</td>
                                                        <td>
                                                            Affordable tuition, bilingual advantage, vibrant
                                                            culture
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>University of Ottawa, Carleton University</td>
                                                        <td>Safe, government internships, bilingual city</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>University of Calgary, SAIT</td>
                                                        <td>
                                                            High starting salaries, affordable rent, no provincial
                                                            sales tax
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "requirements" && (
                                <div id="requirements" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>General Entry Requirements</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Bachelor’s Degree (Undergraduate)</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> Completion of
                                                secondary/high school (Grade 12 or equivalent) with a
                                                minimum average of 65–75%+.
                                            </li>
                                            <li>
                                                <strong>Language Proficiency</strong> <br /> English (IELTS 6.5+,
                                                TOEFL 80-90+) or French (TEF, TCF).
                                            </li>
                                            <li>
                                                <strong>Other</strong> <br /> Portfolios or supplementary essays
                                                may be required for competitive programs.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Master’s Degree (Graduate)</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> A relevant
                                                Bachelor’s degree with a minimum GPA of 3.0/4.0 (~B
                                                average).
                                            </li>
                                            <li>
                                                <strong>Supporting Documents</strong> <br /> 2+ letters of
                                                recommendation, Statement of Purpose (SOP), and a research
                                                proposal for thesis-based programs.
                                            </li>
                                            <li>
                                                <strong>Language Proficiency</strong> <br /> English (IELTS
                                                6.5–7.0, TOEFL 90–100+) or French equivalent.
                                            </li>
                                            <li>
                                                <strong>Other</strong> <br /> GRE or GMAT scores may be required
                                                for business or economics programs.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Doctoral (PhD) Degree</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> A Master’s degree in
                                                a related field with a strong academic and research
                                                background.
                                            </li>
                                            <li>
                                                <strong>Supporting Documents</strong> <br /> Detailed research
                                                proposal, 3 letters of recommendation, and complete academic
                                                transcripts.
                                            </li>
                                            <li>
                                                <strong>Other</strong> <br /> Evidence of research publications is
                                                highly advantageous, and a confirmed faculty supervisor is
                                                often required before applying.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Tuition & Living Cost in Canada</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Average Annual Tuition Fees (International)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>Undergraduate</th>
                                                        <th>Graduate</th>
                                                        <th>College Diploma</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Toronto</td>
                                                        <td>C$25,000 – C$35,000</td>
                                                        <td>C$20,000 – C$40,000+</td>
                                                        <td>C$14,000 – C$20,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>C$23,000 – C$35,000</td>
                                                        <td>C$20,000 – C$38,000</td>
                                                        <td>C$13,000 – C$18,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>C$20,000 – C$27,000</td>
                                                        <td>C$18,000 – C$30,000</td>
                                                        <td>C$12,000 – C$17,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>C$22,000 – C$30,000</td>
                                                        <td>C$18,000 – C$32,000</td>
                                                        <td>C$13,000 – C$18,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>C$20,000 – C$28,000</td>
                                                        <td>C$17,000 – C$30,000</td>
                                                        <td>C$12,000 – C$17,000</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="content-block">
                                        <h3>Average Monthly Living Cost</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>Housing (Shared)</th>
                                                        <th>Food, Transport, Utilities</th>
                                                        <th>Total Monthly Estimate</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Toronto</td>
                                                        <td>C$900 – C$1,500</td>
                                                        <td>C$600 – C$800</td>
                                                        <td>C$1,500 – C$2,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Vancouver</td>
                                                        <td>C$850 – C$1,400</td>
                                                        <td>C$550 – C$700</td>
                                                        <td>C$1,400 – C$2,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Montreal</td>
                                                        <td>C$500 – C$900</td>
                                                        <td>C$500 – C$600</td>
                                                        <td>C$1,000 – C$1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ottawa</td>
                                                        <td>C$700 – C$1,100</td>
                                                        <td>C$500 – C$700</td>
                                                        <td>C$1,200 – C$1,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Calgary</td>
                                                        <td>C$600 – C$1,000</td>
                                                        <td>C$500 – C$600</td>
                                                        <td>C$1,100 – C$1,600</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "work" && (
                                <div id="work" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Work Rights for Students</h2>
                                        <p>
                                            Recent changes have made studying in Canada even more
                                            attractive:
                                        </p>
                                        <ul>
                                            <li>
                                                International students can work up to
                                                <strong>24 hours per week</strong> during semesters
                                                (increased from 20 hours).
                                            </li>
                                            <li>
                                                <strong>Full-time work</strong> is permitted during
                                                scheduled academic breaks.
                                            </li>
                                        </ul>
                                        <p>
                                            Thanks to lower average tuition fees and robust minimum wages
                                            (between C$15–17/hour in most provinces), many international
                                            students can cover a significant portion of their living
                                            expenses through part-time work.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Scholarships in Canada</h2>
                                        <p>
                                            Canada offers a wealth of scholarship opportunities for
                                            ambitious students from around the globe, available for all
                                            academic levels. Because many scholarships close 8 to 12
                                            months before the program begins, early planning is essential!
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >Inquire About Scholarships</a
                                        >
                                    </div>
                                    <div className="content-block">
                                        <h3>Notable Scholarships for 2026 Intake</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Provider / University</th>
                                                        <th>Scholarship Name</th>
                                                        <th>Level</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>University of Toronto</td>
                                                        <td>Lester B. Pearson International Scholarship</td>
                                                        <td>Bachelor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of British Columbia</td>
                                                        <td>UBC International Scholars Program</td>
                                                        <td>Bachelor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>McGill University</td>
                                                        <td>McGill Entrance Scholarships</td>
                                                        <td>Bachelor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>University of Waterloo</td>
                                                        <td>International Master’s and Doctoral Awards</td>
                                                        <td>Master / PhD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Government of Canada</td>
                                                        <td>Vanier Canada Graduate Scholarships</td>
                                                        <td>PhD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ontario Government</td>
                                                        <td>Ontario Graduate Scholarship (OGS)</td>
                                                        <td>Master / PhD</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>All Institutions in Canada</h2>
                                        <p>
                                            Study in Canada's most prestigious universities and colleges.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Brock University</div>
                                            <div className="university-item">Cape Breton University</div>
                                            <div className="university-item">Concordia University</div>
                                            <div className="university-item">Dalhousie University</div>
                                            <div className="university-item">Emily Carr University of Art and Design</div>
                                            <div className="university-item">Lakehead University</div>
                                            <div className="university-item">MacEwan University</div>
                                            <div className="university-item">McGill University</div>
                                            <div className="university-item">Memorial University of Newfoundland</div>
                                            <div className="university-item">Mount Saint Vincent University</div>
                                            <div className="university-item">Simon Fraser University</div>
                                            <div className="university-item">Thompson Rivers University</div>
                                            <div className="university-item">Toronto Metropolitan University</div>
                                            <div className="university-item">Trent University</div>
                                            <div className="university-item">University of Alberta</div>
                                            <div className="university-item">University of Canada West</div>
                                            <div className="university-item">University of Lethbridge</div>
                                            <div className="university-item">University of Manitoba</div>
                                            <div className="university-item">University of New Brunswick</div>
                                            <div className="university-item">University of Regina</div>
                                            <div className="university-item">University of Saskatchewan</div>
                                            <div className="university-item">University of the Fraser Valley</div>
                                            <div className="university-item">University of Victoria</div>
                                            <div className="university-item">University of Waterloo</div>
                                            <div className="university-item">University of Windsor</div>
                                            <div className="university-item">Wilfrid Laurier University</div>
                                            <div className="university-item">York University</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>College/Foundation</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Algonquin college</div>
                                            <div className="university-item">Bronte College</div>
                                            <div className="university-item">Bow Valley College</div>
                                            <div className="university-item">Cambrian College of Applied Arts and Technology</div>
                                            <div className="university-item">Career College, Vancouver</div>
                                            <div className="university-item">Canadore College</div>
                                            <div className="university-item">Centenial College</div>
                                            <div className="university-item">Columbia College</div>
                                            <div className="university-item">Coquitlam College</div>
                                            <div className="university-item">Fanshawe College</div>
                                            <div className="university-item">Fleming College</div>
                                            <div className="university-item">Fraser International College</div>
                                            <div className="university-item">George Brown College</div>
                                            <div className="university-item">Georgian College</div>
                                            <div className="university-item">Humber College</div>
                                            <div className="university-item">ICM</div>
                                            <div className="university-item">Langgara College</div>
                                            <div className="university-item">Lambton College</div>
                                            <div className="university-item">Mohawk College</div>
                                            <div className="university-item">Oxford International College - Halifax</div>
                                            <div className="university-item">Oxford International College - Toronto</div>
                                            <div className="university-item">SAE Institute Canada</div>
                                            <div className="university-item">Sasketchewan Polytechic</div>
                                            <div className="university-item">Seneca College</div>
                                            <div className="university-item">Sault College</div>
                                            <div className="university-item">Sheridan College</div>
                                            <div className="university-item">Southern Alberta Institute of Technology</div>
                                            <div className="university-item">The Confederation College of Applied Arts and Technology</div>
                                            <div className="university-item">Toronto Film School</div>
                                            <div className="university-item">Toronto Metropolitan International College</div>
                                            <div className="university-item">Ulethbridge International College</div>
                                            <div className="university-item">Upper Madison College</div>
                                            <div className="university-item">Vancouver Community College</div>
                                            <div className="university-item">Western International College</div>
                                            <div className="university-item">Wilfrid Laurier International Colelge</div>
                                            <div className="university-item">UMC High Schools</div>
                                            <div className="university-item">Delta School District</div>
                                        </div>

                                        <p className="partners__many">*This list highlights just a fraction of our full university partners.</p>

                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Application Timeline & Intakes</h2>
                                        <p>
                                            Plan your application according to your desired start date.
                                            The Fall (September) intake is the most common.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Stage</th>
                                                        <th>Fall Intake (Sep Start)</th>
                                                        <th>Winter Intake (Jan Start)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><strong>18–24 months before</strong></td>
                                                        <td>Research programs & universities.</td>
                                                        <td>Start research (fewer programs available).</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>12–16 months before</strong></td>
                                                        <td>
                                                            Prepare for language tests and gather documents.
                                                        </td>
                                                        <td>-</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>8–12 months before</strong></td>
                                                        <td>Submit applications (Oct–Feb).</td>
                                                        <td>
                                                            Apply (Mar–Sep for Bachelor's, Jun-Oct for
                                                            Master's/PhD).
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>4–6 months before</strong></td>
                                                        <td>Accept offers and apply for your study permit.</td>
                                                        <td>Finalize visa and arrangements.</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Study in Canada?</h2>
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