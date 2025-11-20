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

export default function USA() {
    const [activeTab, setActiveTab] = useState("overview");

    const tabs = [
        { id: "overview", label: "Overview", icon: <LayoutGrid /> },
        { id: "requirements", label: "Requirements", icon: <FileCheck2 /> },
        { id: "costs", label: "Costs", icon: <Wallet /> },
        { id: "work", label: "Work Rights", icon: <Briefcase /> },
        { id: "scholarships", label: "Scholarships", icon: <GraduationCap /> },
        { id: "partners", label: "Partners", icon: <Building2 /> },
        { id: "intakes", label: "Intakes", icon: <CalendarDays /> },
    ];

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            USA, Where the next BIG things invented.
                        </h1>
                        <p>
                            Discover the gateway to endless innovation, diversity,
                            and global opportunities.
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
                                            <h2>Why Study in the USA?</h2>
                                            <p>
                                                Imagine challenging the limits of
                                                innovation, becoming part of a melting pot
                                                of cultures, and unlocking powerful career
                                                opportunities—all at the heart of the
                                                world’s most influential nation. The USA
                                                stands out for its academic excellence,
                                                flexibility, diversity, research
                                                opportunities, and career prospects.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Key Benefits of Studying in the USA</h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >Access to Unmatched World-Class
                                                        Academic Institutions</strong
                                                    ><br />
                                                    The USA is home to the most universities
                                                    in the top 100 global rankings,
                                                    including Harvard, MIT, and Stanford.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Unrivaled Opportunities in Research
                                                        and Innovation</strong
                                                    ><br />
                                                    With billions invested annually,
                                                    American universities lead in scientific
                                                    breakthroughs, technology, and
                                                    entrepreneurship.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Vibrant Multicultural Life and
                                                        Inclusivity</strong
                                                    ><br />
                                                    America’s campuses are microcosms of the
                                                    globe, creating a lively, welcoming
                                                    atmosphere where your identity is
                                                    celebrated.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Personalized Academic Flexibility &
                                                        Double Majors</strong
                                                    ><br />
                                                    The liberal arts model allows you to
                                                    combine majors, customize minors, and
                                                    switch fields with ease.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Career Pathways Like Nowhere
                                                        Else</strong
                                                    ><br />
                                                    From Silicon Valley to Wall Street, the
                                                    world’s top employers recruit from US
                                                    universities. The Optional Practical
                                                    Training (OPT) program lets graduates
                                                    work up to three years.
                                                </li>
                                                <li>
                                                    <strong
                                                    >Hundreds of Scholarships &
                                                        Financial Aid Programs</strong
                                                    ><br />
                                                    The U.S. offers generous financial aid
                                                    for international students from
                                                    universities, the government, and
                                                    private organizations.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>Top 5 Cities to Study in the USA</h3>
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
                                                            <td>Boston</td>
                                                            <td>
                                                                Harvard University, MIT,
                                                                Boston University
                                                            </td>
                                                            <td>
                                                                Intellectual capital of the
                                                                USA; global hub for biotech,
                                                                healthcare, and startups.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>New York</td>
                                                            <td>
                                                                Columbia University, New
                                                                York University (NYU)
                                                            </td>
                                                            <td>
                                                                Unrivaled internships in
                                                                finance, arts, and tech;
                                                                multicultural neighborhoods.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>San Francisco Bay Area</td>
                                                            <td>
                                                                Stanford University, UC
                                                                Berkeley
                                                            </td>
                                                            <td>
                                                                Heart of Silicon Valley;
                                                                perfect for innovators and
                                                                entrepreneurs with a vibrant
                                                                startup culture.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Chicago</td>
                                                            <td>
                                                                University of Chicago,
                                                                Northwestern University
                                                            </td>
                                                            <td>
                                                                Vibrant arts scene and
                                                                affordable big-city living
                                                                compared to coastal metros.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>
                                                                University of Southern
                                                                California (USC), UCLA
                                                            </td>
                                                            <td>
                                                                Epicenter of creativity
                                                                where film, music, tech, and
                                                                business intersect.
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
                                                U.S. universities don’t just seek academic
                                                excellence—they want your passion for
                                                discovery, your courage to dream big, and
                                                your story.
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
                                                                High school
                                                                diploma/equivalent with a
                                                                minimum average of 70–80%.
                                                            </td>
                                                            <td>
                                                                Accredited bachelor’s degree
                                                                in a relevant field; minimum
                                                                GPA: 3.0/4.0.
                                                            </td>
                                                            <td>
                                                                Recognized master’s degree;
                                                                strong research record or
                                                                published works.
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
                                                                Transcripts, personal
                                                                statement, proof of
                                                                financial support, 1–2
                                                                recommendation letters.
                                                            </td>
                                                            <td>
                                                                Bachelor’s transcript,
                                                                CV/resume, 2–3
                                                                recommendation letters,
                                                                statement of purpose.
                                                            </td>
                                                            <td>
                                                                Master’s transcript,
                                                                comprehensive CV, research
                                                                proposal, 2–3 recommendation
                                                                letters.
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
                                            <h2>Tuition & Living Costs in the USA</h2>
                                            <p>
                                                Before you pack your bags, let’s break down
                                                the REAL costs, so you can plan smarter and
                                                dream bigger.
                                            </p>
                                        </div>
                                        <div className="content-block">
                                            <h3>
                                                Average Annual Tuition Fees (International)
                                            </h3>
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
                                                            <td>New York</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Boston</td>
                                                            <td>$22,000 – $54,000</td>
                                                            <td>$28,000 – $60,000</td>
                                                            <td>$15,000 – $24,000</td>
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
                                                            <th>Total Monthly Cost</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>New York</td>
                                                            <td>$1,200 – $2,600</td>
                                                            <td>$520 – $850</td>
                                                            <td>$1,720 – $3,450</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Los Angeles</td>
                                                            <td>$1,000 – $2,200</td>
                                                            <td>$425 – $710</td>
                                                            <td>$1,425 – $2,910</td>
                                                        </tr>
                                                        <tr>
                                                            <td>San Francisco</td>
                                                            <td>$1,300 – $2,700</td>
                                                            <td>$540 – $930</td>
                                                            <td>$1,840 – $3,630</td>
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
                                                Studying in the USA is about carving your
                                                future and gaining real-world experience.
                                                Here are your work rights as an
                                                international student.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Work Period</th>
                                                            <th>Allowed Work Types</th>
                                                            <th>
                                                                Official Limits &
                                                                Requirements
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >During Studies</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                On-campus jobs, paid
                                                                internships
                                                            </td>
                                                            <td>
                                                                Up to 20 hours/week
                                                                (academic period), full-time
                                                                in breaks.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Off-campus (while
                                                                    studying)</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                Curricular Practical
                                                                Training (CPT) internships
                                                            </td>
                                                            <td>
                                                                Must be related to your
                                                                major, eligible after the
                                                                first academic year.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >After
                                                                    Graduation</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                Optional Practical Training
                                                                (OPT), STEM OPT
                                                            </td>
                                                            <td>
                                                                Up to 12 months, or 36
                                                                months for STEM fields. Must
                                                                apply to USCIS.
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>After OPT</strong>
                                                            </td>
                                                            <td>H-1B Work Visa</td>
                                                            <td>
                                                                For full-time employment in
                                                                specialized fields.
                                                                Sponsorship by employer
                                                                required.
                                                            </td>
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
                                            <h2>Scholarships in the USA</h2>
                                            <p>
                                                Obtaining a scholarship in the USA can be
                                                competitive, but many opportunities exist
                                                for students with outstanding academic
                                                achievements, strong English skills, and
                                                extracurricular accomplishments.
                                            </p>
                                            <a
                                                href="/contact"
                                                className="btn btn--primary"
                                                style={{ marginTop: "20px" }}
                                            >Inquire About Scholarships</a
                                            >
                                        </div>
                                        <div className="content-block">
                                            <h3>Types of Scholarships</h3>
                                            <ul>
                                                <li>
                                                    <strong
                                                    >University Scholarships:</strong
                                                    >
                                                    Many top universities like Harvard, MIT,
                                                    and Stanford offer scholarships based on
                                                    merit and/or financial need.
                                                </li>
                                                <li>
                                                    <strong>Government Programs:</strong>
                                                    National programs, like Fulbright,
                                                    target international students pursuing
                                                    graduate studies.
                                                </li>
                                                <li>
                                                    <strong>Private Foundations:</strong>
                                                    Scholarships from organizations like The
                                                    Gates Scholarship and the Freeman Asian
                                                    Scholars program are available.
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
                                            <h2>All Institutions in USA</h2>
                                            <p>
                                                We partner with a wide range of
                                                world-renowned universities and colleges
                                                across the United States.
                                            </p>
                                            <ul>
                                                <li>Massachusetts Institute of Technology (MIT)</li>
                                                <li>Stanford University</li>
                                                <li>Harvard University</li>
                                                <li>Caltech</li>
                                                <li>University of Chicago</li>
                                                <li>Princeton University</li>
                                                <li>Columbia University</li>
                                                <li>Yale University</li>
                                                <li>University of Pennsylvania</li>
                                                <li>Cornell University</li>
                                                <li>University of California, Berkeley</li>
                                                <li>University of California, Los Angeles (UCLA)</li>
                                                <li>New York University (NYU)</li>
                                                <li>Johns Hopkins University</li>
                                                <li>University of Michigan</li>
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
                                                The best time to apply for your degree in
                                                the USA is typically between October and
                                                January of the year before you plan to
                                                start. The primary intake for all programs
                                                is the fall semester.
                                            </p>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Step</th>
                                                            <th>When to Begin</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Research
                                                                    Programs</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                12–15 months before intended
                                                                start
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Standardized
                                                                    Tests</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                11–14 months before (SAT,
                                                                ACT, GRE, TOEFL, etc.)
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Gather Documents &
                                                                    Write Essays</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                8–12 months before
                                                                application deadline
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Submit Online
                                                                    Application</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                6–9 months before program
                                                                start
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong
                                                                >Admission Results &
                                                                    Visa Application</strong
                                                                >
                                                            </td>
                                                            <td>
                                                                3–6 months before program
                                                                start
                                                            </td>
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
                        <h2>Ready to Study in USA?</h2>
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
