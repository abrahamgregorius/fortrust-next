"use client";

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
import { useState } from "react";

export default function Australia() {
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
                            Study in Australia, Your Fast-Track to a Global
                            Career
                        </h1>
                        <p>
                            Gain the world’s longest post‑study work rights, a
                            globally respected degree, and a direct pathway to
                            Permanent Residence.
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
                                        <img
                                            src="/destinations/banners/Australia.png"
                                            className="content__banner"
                                            alt="Australia Banner"
                                        />
                                        <h2>Why Study in Australia?</h2>
                                        <p>
                                            Australia stands out as a leading
                                            destination for international
                                            students who seek exceptional
                                            post-study work rights, a globally
                                            recognized qualification system, and
                                            unmatched pathways to permanent
                                            residency (PR). This article
                                            explores why "Study in Australia" is
                                            an unbeatable choice for aspiring
                                            scholars worldwide.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>
                                            Key Benefits of Studying in
                                            Australia
                                        </h3>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Longest Post-Study Work
                                                    Rights in the World:
                                                </strong>{" "}
                                                Australia offers the most
                                                generous post-study work rights,
                                                allowing graduates to work for
                                                up to six years—more than
                                                Canada, the UK, or the US.
                                            </li>
                                            <li>
                                                <strong>
                                                    Australian Qualifications
                                                    Framework (AQF):
                                                </strong>{" "}
                                                This unique system standardizes
                                                education levels, ensuring your
                                                degree is instantly recognized
                                                overseas and allows for smooth
                                                transitions between fields.
                                            </li>
                                            <li>
                                                <strong>
                                                    Flexible Work Options for
                                                    Students:
                                                </strong>{" "}
                                                Unlike other countries,
                                                Australia lets students work
                                                unlimited hours during official
                                                semester breaks.
                                            </li>
                                            <li>
                                                <strong>
                                                    Regional Study Incentives:
                                                </strong>{" "}
                                                Studying in regional areas
                                                provides extra points toward PR,
                                                lower costs, and an extended
                                                post-study work visa.
                                            </li>
                                            <li>
                                                <strong>
                                                    Study-Migration Alignment:
                                                </strong>{" "}
                                                Australia's skills lists
                                                directly link academic programs
                                                with migration needs, boosting
                                                your chances of PR.
                                            </li>
                                            <li>
                                                <strong>
                                                    Government Loans (HECS-HELP)
                                                    for Eligible Residents:
                                                </strong>{" "}
                                                Certain permanent residents can
                                                use HECS-HELP loans to cover
                                                tuition with no upfront payment.
                                            </li>
                                            <li>
                                                <strong>
                                                    Unmatched Climate and
                                                    Cultural Diversity:
                                                </strong>{" "}
                                                Australia offers a wide range of
                                                lifestyle choices and seamless
                                                cultural integration for
                                                students.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>
                                            Top 5 Cities to Study in Australia
                                        </h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>
                                                            Key Institutions
                                                        </th>
                                                        <th>City Highlights</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Melbourne</td>
                                                        <td>
                                                            University of
                                                            Melbourne, Monash
                                                            University
                                                        </td>
                                                        <td>
                                                            Renowned for
                                                            culture, arts, and
                                                            diversity. Excellent
                                                            job market.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>
                                                            University of Sydney
                                                            (USYD), University
                                                            of New South Wales
                                                            (UNSW)
                                                        </td>
                                                        <td>
                                                            Global business hub,
                                                            stunning beaches,
                                                            and unmatched career
                                                            acceleration.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>
                                                            University of
                                                            Queensland (UQ),
                                                            QUT, Griffith
                                                            University
                                                        </td>
                                                        <td>
                                                            Affordable living,
                                                            subtropical climate,
                                                            and innovation in
                                                            research.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>
                                                            University of
                                                            Western Australia
                                                            (UWA), Curtin
                                                            University
                                                        </td>
                                                        <td>
                                                            Gateway to Asia,
                                                            strong in
                                                            mining/energy, with
                                                            a relaxed lifestyle.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>
                                                            University of
                                                            Adelaide, Flinders
                                                            University
                                                        </td>
                                                        <td>
                                                            Spacious,
                                                            affordable, and
                                                            excellent for
                                                            defense and health
                                                            sciences.
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
                                        <h2>Entry Requirements & Timeline</h2>
                                        <p>
                                            Understanding the entry requirements
                                            and application timeline is key to
                                            securing your future in Australia.
                                        </p>
                                    </div>
                                    <div className="content-block">
                                        <h3>
                                            Bachelor’s Degree (Undergraduate)
                                        </h3>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Academic Requirements:
                                                </strong>
                                                Completion of secondary/high
                                                school equivalent to Australian
                                                Year 12, with a minimum average
                                                of 65–75%+.
                                            </li>
                                            <li>
                                                <strong>
                                                    English Language
                                                    Proficiency:
                                                </strong>
                                                IELTS Academic score of 6.5
                                                overall (no band below 6.0) or
                                                equivalent.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Master’s Degree (Postgraduate)</h3>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Academic Requirements:
                                                </strong>
                                                A completed Bachelor’s degree in
                                                a relevant field with a minimum
                                                GPA of 3.0/4.0 or equivalent.
                                            </li>
                                            <li>
                                                <strong>
                                                    Supporting Documents:
                                                </strong>
                                                Statement of Purpose (SOP), 2–3
                                                letters of recommendation, and
                                                certified academic transcripts.
                                            </li>
                                            <li>
                                                <strong>
                                                    English Language
                                                    Proficiency:
                                                </strong>
                                                IELTS Academic score of 6.5–7.0
                                                overall or equivalent.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>PhD (Doctoral)</h3>
                                        <ul>
                                            <li>
                                                <strong>
                                                    Academic Requirements:
                                                </strong>
                                                Completion of a Master’s degree
                                                by research or an honors-level
                                                Bachelor’s degree with strong
                                                academic performance.
                                            </li>
                                            <li>
                                                <strong>
                                                    Supporting Documents:
                                                </strong>{" "}
                                                A detailed research proposal, 3
                                                strong recommendation letters,
                                                and academic transcripts.
                                            </li>
                                            <li>
                                                <strong>
                                                    Other Requirements:
                                                </strong>
                                                Identify and secure a professor
                                                willing to supervise your
                                                research.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>
                                            Tuition & Living Costs in Australia
                                        </h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>
                                            Average Annual Tuition Fees
                                            (International Students)
                                        </h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>
                                                            University
                                                            (Undergraduate)
                                                        </th>
                                                        <th>
                                                            University
                                                            (Graduate)
                                                        </th>
                                                        <th>
                                                            College Diploma /
                                                            Certificate
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Melbourne</td>
                                                        <td>
                                                            AUD $25,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $30,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $6,000 – $18,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>
                                                            AUD $25,000 –
                                                            $50,000
                                                        </td>
                                                        <td>
                                                            AUD $30,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $8,000 – $20,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>
                                                            AUD $25,000 –
                                                            $50,000
                                                        </td>
                                                        <td>
                                                            AUD $30,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $6,000 – $17,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>
                                                            AUD $25,000 –
                                                            $50,000
                                                        </td>
                                                        <td>
                                                            AUD $30,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $5,000 – $15,000
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>
                                                            AUD $20,000 –
                                                            $27,000
                                                        </td>
                                                        <td>
                                                            AUD $30,000 –
                                                            $55,000
                                                        </td>
                                                        <td>
                                                            AUD $5,000 – $15,000
                                                        </td>
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
                                                        <th>
                                                            Housing (Shared)
                                                        </th>
                                                        <th>
                                                            Food, Transport,
                                                            Utilities
                                                        </th>
                                                        <th>
                                                            Total Monthly
                                                            Estimate
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Melbourne</td>
                                                        <td>
                                                            AUD $900 – $1,500
                                                        </td>
                                                        <td>AUD $600 – $800</td>
                                                        <td>
                                                            AUD $1,500 – $2,200
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sydney</td>
                                                        <td>
                                                            AUD $1,000 – $1,800
                                                        </td>
                                                        <td>AUD $600 – $700</td>
                                                        <td>
                                                            AUD $1,600 – $2,500
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Brisbane</td>
                                                        <td>
                                                            AUD $800 – $1,200
                                                        </td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>
                                                            AUD $1,200 – $1,800
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Perth</td>
                                                        <td>
                                                            AUD $600 – $1,000
                                                        </td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>
                                                            AUD $1,100 – $1,600
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Adelaide</td>
                                                        <td>AUD $500 – $900</td>
                                                        <td>AUD $400 – $600</td>
                                                        <td>
                                                            AUD $1,000 – $1,500
                                                        </td>
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
                                            International students in Australia
                                            enjoy generous work rights,
                                            supporting both financial stability
                                            and invaluable work experience:
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>
                                                    During academic semesters:
                                                </strong>
                                                Students are permitted to work
                                                up to 40 hours per fortnight
                                                (every two weeks).
                                            </li>
                                            <li>
                                                <strong>
                                                    During official course
                                                    breaks:
                                                </strong>
                                                Students can work unlimited
                                                hours.
                                            </li>
                                            <li>
                                                <strong>
                                                    Special provision for aged
                                                    care:
                                                </strong>
                                                Those employed in the aged care
                                                sector have no cap on work hours
                                                until at least mid-2025.
                                            </li>
                                        </ul>
                                        <p>
                                            Upon graduation, you may qualify for
                                            the Temporary Graduate Visa
                                            (subclass 485), granting you the
                                            chance to work and live in Australia
                                            for up to six years, depending on
                                            your degree and region of study.
                                            This visa provides a critical path
                                            to gain professional experience and
                                            explore routes to permanent
                                            residency.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div
                                    id="scholarships"
                                    className="tab-pane active"
                                >
                                    <div className="content-block">
                                        <h2>Scholarships in Australia</h2>
                                        <p>
                                            Australia is committed to supporting
                                            exceptional talent through a broad
                                            range of national and
                                            university-specific scholarships.
                                            Early preparation is essential, as
                                            many scholarship deadlines fall 8–12
                                            months before the academic year
                                            begins.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >
                                            Inquire About Scholarships
                                        </a>
                                    </div>
                                    <div className="content-block">
                                        <h3>
                                            2026 Scholarships Directory for
                                            Australia
                                        </h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            University /
                                                            Provider
                                                        </th>
                                                        <th>
                                                            Scholarship Name
                                                        </th>
                                                        <th>Level of Study</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            Australian
                                                            Government
                                                        </td>
                                                        <td>
                                                            Australia Awards
                                                            Scholarships (AAS)
                                                        </td>
                                                        <td>
                                                            Bachelor / Master /
                                                            PhD
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Australian
                                                            Government
                                                        </td>
                                                        <td>
                                                            Research Training
                                                            Program (RTP)
                                                            Scholarships
                                                        </td>
                                                        <td>Master / PhD</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            University of
                                                            Melbourne
                                                        </td>
                                                        <td>
                                                            Melbourne
                                                            International
                                                            Undergraduate
                                                            Scholarship
                                                        </td>
                                                        <td>Bachelor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            University of Sydney
                                                        </td>
                                                        <td>
                                                            Sydney Scholars
                                                            Awards
                                                        </td>
                                                        <td>Bachelor</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Monash University
                                                        </td>
                                                        <td>
                                                            Monash International
                                                            Merit Scholarship
                                                        </td>
                                                        <td>
                                                            Bachelor / Master
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Deakin University
                                                        </td>
                                                        <td>
                                                            Deakin
                                                            Vice-Chancellor’s
                                                            International
                                                            Scholarship
                                                        </td>
                                                        <td>
                                                            Bachelor / Master
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            Australian
                                                            Government
                                                        </td>
                                                        <td>
                                                            Destination
                                                            Australia
                                                            Scholarships (VET
                                                            stream)
                                                        </td>
                                                        <td>Diploma</td>
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
                                        <h2>All Institutions in Australia</h2>
                                        <p>
                                            Study in Australia's
                                            most prestigious universities and
                                            TAFEs.
                                        </p>
                                        <h3>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Australian Catholic University</div>
                                            <div className="university-item">Australian University of Theology</div>
                                            <div className="university-item">Australian National University</div>
                                            <div className="university-item">Avondale University</div>
                                            <div className="university-item">Bond University</div>
                                            <div className="university-item">Charles Darwin University</div>
                                            <div className="university-item">Charles Sturt University</div>
                                            <div className="university-item">CQ University</div>
                                            <div className="university-item">Curtin University</div>
                                            <div className="university-item">Deakin University</div>
                                            <div className="university-item">Edith Cowan University</div>
                                            <div className="university-item">Federation University of Australia</div>
                                            <div className="university-item">Flinders University</div>
                                            <div className="university-item">Griffith University</div>
                                            <div className="university-item">James Cook University</div>
                                            <div className="university-item">La Trobe University</div>
                                            <div className="university-item">Macquarie University</div>
                                            <div className="university-item">Monash University</div>
                                            <div className="university-item">Murdoch University</div>
                                            <div className="university-item">Queensland University of Technology</div>
                                            <div className="university-item">RMIT University</div>
                                            <div className="university-item">Southern Cross University</div>
                                            <div className="university-item">Swinburne University of Technology</div>
                                            <div className="university-item">Torrens University Australia</div>
                                            <div className="university-item">University of Adelaide</div>
                                            <div className="university-item">University of Canberra</div>
                                            <div className="university-item">University of Divinity</div>
                                            <div className="university-item">University of Melbourne</div>
                                            <div className="university-item">University of New England</div>
                                            <div className="university-item">University of New South Wales</div>
                                            <div className="university-item">University of Newcastle</div>
                                            <div className="university-item">University of Notre Dame Australia</div>
                                            <div className="university-item">University of Queensland</div>
                                            <div className="university-item">University of South Australia</div>
                                            <div className="university-item">University of Southern Queensland</div>
                                            <div className="university-item">University of Sydney</div>
                                            <div className="university-item">University of Tasmania</div>
                                            <div className="university-item">University of Technology Sydney</div>
                                            <div className="university-item">University of the Sunshine Coast</div>
                                            <div className="university-item">University of Western Australia</div>
                                            <div className="university-item">University of Wollongong</div>
                                            <div className="university-item">Victoria University</div>
                                            <div className="university-item">Western Sydney University</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>TAFE and VET</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Blue Mountains International Hotel Management School</div>
                                            <div className="university-item">Box Hill Institute</div>
                                            <div className="university-item">Gordon Institute of TAFE</div>
                                            <div className="university-item">Le Cordon Bleu (Adelaide)</div>
                                            <div className="university-item">Study Group International</div>
                                            <div className="university-item">Melbourne Polytechnic</div>
                                            <div className="university-item">Navitas Limited</div>
                                            <div className="university-item">Sunraysia Institute of TAFE</div>
                                            <div className="university-item">TAFE Queensland</div>
                                            <div className="university-item">TAFE Queensland SkillsTech</div>
                                            <div className="university-item">Think Education</div>
                                            <div className="university-item">William Blue College of Hospitality Management</div>
                                        </div>

                                        <p className="partners__many">
                                            ...and many more
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Application Timeline</h2>
                                        <p>
                                            Plan ahead for either the major
                                            February intake or the mid-year July
                                            intake. February is the main intake
                                            for most universities with the
                                            widest choice of courses.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Stage</th>
                                                        <th>Timeline</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>
                                                            18-24 months before
                                                        </td>
                                                        <td>
                                                            Research programs &
                                                            universities.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>
                                                            12-16 months before
                                                        </td>
                                                        <td>
                                                            Take English tests
                                                            and gather required
                                                            documents.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>
                                                            8-12 months before
                                                        </td>
                                                        <td>
                                                            Submit applications
                                                            (typically between
                                                            Oct–Feb).
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>4</td>
                                                        <td>
                                                            4-6 months before
                                                        </td>
                                                        <td>
                                                            Accept your offer
                                                            and apply for your
                                                            student visa
                                                            (subclass 500).
                                                        </td>
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
                        <h2>Ready to Study in Australia?</h2>
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
    );
}
