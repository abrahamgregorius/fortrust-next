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

export default function UK() {
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
                            Study in UK, A Tradition of Excellence, A Future of Opportunity
                        </h1>
                        <p>
                            Join a legacy of world-class education where historic
                            tradition meets cutting-edge innovation.
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
                                                src="/destinations/banners/UK.png"
                                                className="content__banner"
                                                alt="UK Banner"
                                            />
                                            <h2>Why Study in the UK?</h2>
                                            <p>
                                                Imagine pursuing your dreams in a place
                                                where centuries-old tradition meets
                                                cutting-edge innovation, where historic
                                                streets buzz with the energy of future
                                                thinkers. Studying in the United Kingdom
                                                gives you more than a qualification—it
                                                offers you an experience that shapes your
                                                personal, academic, and professional future
                                                in deeply meaningful ways.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Key Benefits of Studying in the UK</h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >Globally Recognized
                                                        Education:</strong
                                                    >
                                                    UK universities like Oxford, Cambridge,
                                                    and UCL consistently rank among the
                                                    world’s best. Their degrees are
                                                    respected worldwide, opening doors to
                                                    global careers.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Shorter & Flexible Courses:</strong
                                                    >
                                                    Undergraduate degrees usually take only
                                                    three years and Master’s just one,
                                                    saving you time and money without
                                                    sacrificing quality.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Rich Cultural Experience:</strong
                                                    >
                                                    From historic castles to vibrant music
                                                    scenes and multicultural cities, every
                                                    day in the UK is an adventure with
                                                    students from over 200 countries.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Generous Work Rights &
                                                        Scholarships:</strong
                                                    >
                                                    International students can work up to 20
                                                    hours per week during term and full-time
                                                    on holidays. Hundreds of scholarships
                                                    are available.
                                                </li>
                                                <li>
                                                    <strong>Career Opportunities:</strong>
                                                    The UK is a global hub for finance,
                                                    technology, creative industries, and
                                                    law, with strong university links to
                                                    leading employers.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>Top 5 Cities to Study in the UK</h3>
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
                                                            <td>London</td>
                                                            <td>
                                                                UCL, Imperial, LSE, King’s
                                                                College
                                                            </td>
                                                            <td>
                                                                Global center for finance
                                                                and culture; endless
                                                                internship opportunities.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manchester</td>
                                                            <td>
                                                                University of Manchester,
                                                                MMU
                                                            </td>
                                                            <td>
                                                                Student-friendly city known
                                                                for music & football;
                                                                affordable living.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Edinburgh</td>
                                                            <td>
                                                                University of Edinburgh,
                                                                Heriot-Watt
                                                            </td>
                                                            <td>
                                                                Historic beauty, famous
                                                                international festivals, and
                                                                innovative programs.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Glasgow</td>
                                                            <td>
                                                                University of Glasgow,
                                                                Strathclyde
                                                            </td>
                                                            <td>
                                                                Vibrant arts and culture
                                                                scene; world-class research
                                                                and low living costs.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Birmingham</td>
                                                            <td>
                                                                University of Birmingham,
                                                                Aston
                                                            </td>
                                                            <td>
                                                                Strategic central location
                                                                with a major industry
                                                                network and inclusive
                                                                campus.
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
                                                Embarking on a journey to study in the UK is
                                                an exciting step toward a world-class
                                                education. These requirements are your
                                                gateway to a vibrant academic life.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Requirement</th>
                                                            <th>
                                                                Undergraduate (Bachelor’s)
                                                            </th>
                                                            <th>
                                                                Postgraduate (Master’s/PhD)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Academic
                                                                    Qualifications</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                Completion of high school
                                                                with A-levels, IB, or
                                                                equivalent. Grades between
                                                                ABB and AAA (or GPA 3.0–3.7)
                                                                are common.
                                                            </td>
                                                            <td>
                                                                Bachelor’s degree with at
                                                                least UK 2:1 equivalent (GPA
                                                                3.0+). A research proposal
                                                                is often required for PhDs.
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
                                                                IELTS: 6.0–6.5 (no band
                                                                below 5.5); TOEFL: 80–92.
                                                                Top universities may require
                                                                higher scores.
                                                            </td>
                                                            <td>
                                                                IELTS 6.5–7.0 (no band below
                                                                6.0); TOEFL: 92–100.
                                                                Research degrees may require
                                                                higher scores.
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
                                                                Academic transcripts,
                                                                reference letters, personal
                                                                statement, and proof of
                                                                finances.
                                                            </td>
                                                            <td>
                                                                Bachelor’s transcript,
                                                                academic references,
                                                                motivation letter or
                                                                research proposal, and
                                                                CV/resume.
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
                                            <h2>Tuition & Living Costs in the UK</h2>
                                            <p>
                                                While costs vary by location and university,
                                                here is a general estimate to help you plan
                                                your budget.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Average Annual Tuition Fees</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Program Level</th>
                                                            <th>
                                                                Average Annual Tuition (GBP)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Undergraduate</td>
                                                            <td>£15,000 – £28,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Postgraduate (Master's)</td>
                                                            <td>£16,000 – £30,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PhD</td>
                                                            <td>£18,000 – £32,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Estimated Monthly Living Costs</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>
                                                                Total Monthly Estimate (GBP)
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>London</td>
                                                            <td>£1,300 – £1,700</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Manchester / Edinburgh</td>
                                                            <td>£900 – £1,300</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Other Cities</td>
                                                            <td>£800 – £1,200</td>
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
                                                The UK provides clear opportunities for
                                                international students to gain work
                                                experience both during and after their
                                                studies.
                                            </p>
                                            <ul>
                                                <li>
                                                    <strong>During Studies:</strong> You can
                                                    work up to 20 hours per week during term
                                                    time and full-time during scheduled
                                                    holidays. This allows you to gain
                                                    valuable experience and support your
                                                    living expenses.
                                                </li>
                                                <li>
                                                    <strong
                                                    >After Graduation (Graduate
                                                        Route):</strong
                                                    >
                                                    Upon successful completion of your
                                                    degree, you can apply for the Graduate
                                                    Route visa. This allows you to stay and
                                                    work in the UK for two years (three
                                                    years for PhD graduates) without needing
                                                    a sponsor. It is an excellent
                                                    opportunity to launch your professional
                                                    career.
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
                                            <h2>Scholarships in the UK</h2>
                                            <p>
                                                The UK offers a wide range of scholarships
                                                for international students. These are highly
                                                competitive, so early preparation is key.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
                                        </div>
                                        <div className="content-block">
                                            <h3>Major Scholarship Programs</h3>
                                            <ul>
                                                <li>
                                                    <strong>Chevening Scholarships:</strong>
                                                    The UK government’s global scholarship
                                                    program, offering full funding for a
                                                    one-year Master’s degree.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Commonwealth Scholarships:</strong
                                                    >
                                                    For students from Commonwealth countries
                                                    pursuing Master’s and PhD programs.
                                                </li>
                                                <li>
                                                    <strong
                                                    >University-Specific
                                                        Scholarships:</strong
                                                    >
                                                    Nearly all UK universities offer their
                                                    own scholarships based on academic
                                                    merit, field of study, or nationality.
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
                                            <h2>All Institutions in UK</h2>
                                            <p>
                                                Study in UK's most respected universities.
                                            </p>
                                            <div className="universities-grid">
                                                <div className="university-item">Aberystwyth University</div>
                                                <div className="university-item">Anglia Ruskin University</div>
                                                <div className="university-item">Aston University</div>
                                                <div className="university-item">Bath Spa University</div>
                                                <div className="university-item">Birkbeck, University of London</div>
                                                <div className="university-item">Birmingham City University</div>
                                                <div className="university-item">Brunel University of London</div>
                                                <div className="university-item">Buckinghamshire New University</div>
                                                <div className="university-item">Cardiff University</div>
                                                <div className="university-item">City St George's, University of London</div>
                                                <div className="university-item">City, University of London</div>
                                                <div className="university-item">Coventry University</div>
                                                <div className="university-item">Cranfield University</div>
                                                <div className="university-item">De Montfort University</div>
                                                <div className="university-item">Durham University</div>
                                                <div className="university-item">Falmouth University</div>
                                                <div className="university-item">Goldsmiths, University of London</div>
                                                <div className="university-item">Heriot-Watt University</div>
                                                <div className="university-item">Imperial College London</div>
                                                <div className="university-item">King's College London</div>
                                                <div className="university-item">Kingston University</div>
                                                <div className="university-item">Lancaster University</div>
                                                <div className="university-item">Leeds Becket University</div>
                                                <div className="university-item">Leicester University</div>
                                                <div className="university-item">Lincoln Bishop University</div>
                                                <div className="university-item">Liverpool John Moores University</div>
                                                <div className="university-item">London Metropolitan University</div>
                                                <div className="university-item">London South Bank University</div>
                                                <div className="university-item">Loughborough University</div>
                                                <div className="university-item">Manchester Metropolitan University</div>
                                                <div className="university-item">Middlesex University</div>
                                                <div className="university-item">Newcastle University</div>
                                                <div className="university-item">Northumbria University</div>
                                                <div className="university-item">Oxford Brookes University</div>
                                                <div className="university-item">Queen Mary University of London</div>
                                                <div className="university-item">Queen's University Belfast</div>
                                                <div className="university-item">Royal Holloway, University of London[16]</div>
                                                <div className="university-item">Royal Veterinary College</div>
                                                <div className="university-item">Sheffield Hallam University</div>
                                                <div className="university-item">Southampton Solent University</div>
                                                <div className="university-item">Swansea University</div>
                                                <div className="university-item">Teesside University</div>
                                                <div className="university-item">Ulster University</div>
                                                <div className="university-item">University of Aberdeen</div>
                                                <div className="university-item">University of Bath</div>
                                                <div className="university-item">University of Bradford</div>
                                                <div className="university-item">University of Brighton</div>
                                                <div className="university-item">University of Central Lancashier</div>
                                                <div className="university-item">University of Chester</div>
                                                <div className="university-item">University of East Anglia - Norwich</div>
                                                <div className="university-item">University of East London (UEL)</div>
                                                <div className="university-item">University of Exeter</div>
                                                <div className="university-item">University of Hertfordshire</div>
                                                <div className="university-item">University of Huddersfield</div>
                                                <div className="university-item">University of Hull</div>
                                                <div className="university-item">University of Kent</div>
                                                <div className="university-item">University of Lancashire</div>
                                                <div className="university-item">University of Law</div>
                                                <div className="university-item">University of Leeds</div>
                                                <div className="university-item">University of Lincoln</div>
                                                <div className="university-item">University of Manchester</div>
                                                <div className="university-item">University of Northampton</div>
                                                <div className="university-item">University of Plymouth</div>
                                                <div className="university-item">University of Portsmouth</div>
                                                <div className="university-item">University of Reading</div>
                                                <div className="university-item">University of Roehampton London</div>
                                                <div className="university-item">University of Sheffield</div>
                                                <div className="university-item">University of South Wales</div>
                                                <div className="university-item">University of Southampton</div>
                                                <div className="university-item">University of Stirling</div>
                                                <div className="university-item">University of Strathclyde</div>
                                                <div className="university-item">University of Sunderland</div>
                                                <div className="university-item">University of Surrey</div>
                                                <div className="university-item">University of Sussex</div>
                                                <div className="university-item">University of the West of England - Bristol</div>
                                                <div className="university-item">University of Warwick</div>
                                                <div className="university-item">York St John University</div>
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
                                                The main intake for UK universities is in
                                                September. It is crucial to pay close
                                                attention to deadlines, especially for
                                                undergraduate applications via UCAS.
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
                                                                >Research & Course
                                                                    Selection</strong
                                                                >
                                                            </td>
                                                            <td>12–15 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Prepare Personal
                                                                    Statement & Gather
                                                                    Documents</strong
                                                                >
                                                            </td>
                                                            <td>8–12 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Submit UCAS Application
                                                                    (Undergraduate)</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                By January (or October for
                                                                Oxbridge/Medicine)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Submit Direct
                                                                    Application
                                                                    (Postgraduate)</strong
                                                                >
                                                            </td>
                                                            <td>6–9 months</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Receive Offers & Apply
                                                                    for Visa</strong
                                                                >
                                                            </td>
                                                            <td>3–6 months</td>
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
                        <h2>Ready to Study in UK?</h2>
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