"use client"

import { useState, useRef, useEffect } from "react";
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
    const [isMobile, setIsMobile] = useState(false);
    const navRef = useRef(null);

    const tabs = [
        { id: "overview", label: "Overview", icon: <LayoutGrid /> },
        { id: "requirements", label: "Requirements", icon: <FileCheck2 /> },
        { id: "costs", label: "Costs", icon: <Wallet /> },
        { id: "work", label: "Work Rights", icon: <Briefcase /> },
        { id: "scholarships", label: "Scholarships", icon: <GraduationCap /> },
        { id: "partners", label: "Institutions", icon: <Building2 /> },
        { id: "intakes", label: "Intakes", icon: <CalendarDays /> },
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>
                            Study in the USA, Where the next BIG things invented.
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
                        <div className="tabs-nav-container">
                            {isMobile && <button className="nav-arrow left-arrow" onClick={scrollLeft}>‹</button>}
                            <div className="tabs-nav" ref={navRef}>
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
                            {isMobile && <button className="nav-arrow right-arrow" onClick={scrollRight}>›</button>}
                        </div>

                        {/* Tabs Content */}
                        <div className="tab-content">
                            {activeTab === "overview" && (
                                <>
                                    <div id="overview" className="tab-pane active">
                                        <div className="content-block">
                                            <picture>
                                                <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/USA.webp" />
                                                <img src="/destinations/banners/Browser/USA.webp" alt="USA Banner" className="content__banner" />
                                            </picture>
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

                                            {/* Mobile Card Layout for Tuition */}
                                            <div className="cost-cards-mobile">
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>New York</h4>
                                                        <div className="cost-details">
                                                            <span>Undergraduate: $22,000 – $54,000</span>
                                                            <span>Graduate: $28,000 – $60,000</span>
                                                            <span>College Diploma: $15,000 – $24,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>Los Angeles</h4>
                                                        <div className="cost-details">
                                                            <span>Undergraduate: $22,000 – $54,000</span>
                                                            <span>Graduate: $28,000 – $60,000</span>
                                                            <span>College Diploma: $15,000 – $24,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>Boston</h4>
                                                        <div className="cost-details">
                                                            <span>Undergraduate: $22,000 – $54,000</span>
                                                            <span>Graduate: $28,000 – $60,000</span>
                                                            <span>College Diploma: $15,000 – $24,000</span>
                                                        </div>
                                                    </div>
                                                </div>
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

                                            {/* Mobile Card Layout for Living Costs */}
                                            <div className="cost-cards-mobile">
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>New York</h4>
                                                        <div className="cost-details">
                                                            <span>Housing: $1,200 – $2,600</span>
                                                            <span>Food & Transport: $520 – $850</span>
                                                            <span>Total: $1,720 – $3,450</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>Los Angeles</h4>
                                                        <div className="cost-details">
                                                            <span>Housing: $1,000 – $2,200</span>
                                                            <span>Food & Transport: $425 – $710</span>
                                                            <span>Total: $1,425 – $2,910</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cost-card">
                                                    <div className="cost-card-header">
                                                        <h4>San Francisco</h4>
                                                        <div className="cost-details">
                                                            <span>Housing: $1,300 – $2,700</span>
                                                            <span>Food & Transport: $540 – $930</span>
                                                            <span>Total: $1,840 – $3,630</span>
                                                        </div>
                                                    </div>
                                                </div>
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
                                                Study in world-renowned universities and colleges
                                                across the United States.
                                            </p>
                                            <h3 style={{ marginTop: "2rem" }}>Featured Universities</h3>
                                            <div className="featured-uni-grid">
                                                <div className="featured-uni-item">
                                                    <img src="../../universities/USA/UCB.png" alt="" />
                                                    <p>
                                                        UCBerkeley - UBridge
                                                    </p>
                                                </div>
                                                <div className="featured-uni-item">
                                                    <img src="../../universities/USA/CSU.png" alt="" />
                                                    <p>
                                                        California State University , Monterey Bay - Study Group
                                                    </p>
                                                </div>
                                                <div className="featured-uni-item">
                                                    <img src="../../universities/USA/WWU.png" alt="" />
                                                    <p>
                                                        Western Washington University - Study Group
                                                    </p>
                                                </div>
                                                <div className="featured-uni-item">
                                                    <img src="../../universities/USA/GIT.png" alt="" />
                                                    <p>
                                                        Georgia Institute of Technology - UIC
                                                    </p>
                                                </div>

                                            </div>
                                            <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">Arizona State University</div>
                                                <div className="university-item">Bay Atlantic University</div>
                                                <div className="university-item">California State University , Fresno</div>
                                                <div className="university-item">California State University , San Marcos</div>
                                                <div className="university-item">California State University , Monterey Bay</div>
                                                <div className="university-item">California State University , North County San Diego</div>
                                                <div className="university-item">Colorado State University</div>
                                                <div className="university-item">De Paul University</div>
                                                <div className="university-item">Drew University</div>
                                                <div className="university-item">Fisher College</div>
                                                <div className="university-item">Florida Atlantic University</div>
                                                <div className="university-item">George mason University</div>
                                                <div className="university-item">Georgia Institute of Technology</div>
                                                <div className="university-item">Hofstra University</div>
                                                <div className="university-item">Illinois State University</div>
                                                <div className="university-item">Iowa State University</div>
                                                <div className="university-item">james Madison University</div>
                                                <div className="university-item">Kent State University</div>
                                                <div className="university-item">Long Island University</div>
                                                <div className="university-item">Long Island University Brooklyn</div>
                                                <div className="university-item">Lousiana State University</div>
                                                <div className="university-item">Mercer University</div>
                                                <div className="university-item">Mercy University</div>
                                                <div className="university-item">Montclair State University</div>
                                                <div className="university-item">Oregon State University</div>
                                                <div className="university-item">San Fransisco State University</div>
                                                <div className="university-item">Southern Illinois University</div>
                                                <div className="university-item">St Louis University</div>
                                                <div className="university-item">Suffolk University Boston</div>
                                                <div className="university-item">Syracuse University</div>
                                                <div className="university-item">Texas A&M University</div>
                                                <div className="university-item">Texas State University</div>
                                                <div className="university-item">The Ohio State University</div>
                                                <div className="university-item">The University of Arizona</div>
                                                <div className="university-item">Thomas Jefferson University</div>
                                                <div className="university-item">Towson University</div>
                                                <div className="university-item">Trine University</div>
                                                <div className="university-item">UC BERKELEY</div>
                                                <div className="university-item">UC DAVIS</div>
                                                <div className="university-item">UC IRVINE</div>
                                                <div className="university-item">UC SANTA BARBARA</div>
                                                <div className="university-item">UCD</div>
                                                <div className="university-item">UCLA</div>
                                                <div className="university-item">University of Alabama at Birmingham</div>
                                                <div className="university-item">University of Hartford</div>
                                                <div className="university-item">University of Iowa</div>
                                                <div className="university-item">University of Kansas</div>
                                                <div className="university-item">University of Louisville</div>
                                                <div className="university-item">University of Massachusett Boston</div>
                                                <div className="university-item">University of Massachusetts Amherst</div>
                                                <div className="university-item">University of Michigan - Ann Arbour</div>
                                                <div className="university-item">University of Nebraska - Lincoln</div>
                                                <div className="university-item">University Of Nebraska Omaha</div>
                                                <div className="university-item">University of Oklahoma</div>
                                                <div className="university-item">University of Rochester</div>
                                                <div className="university-item">University of San Francisco</div>
                                                <div className="university-item">UNIVERSITY OF SOUTHERN CALIFORNIA</div>
                                                <div className="university-item">UNIVERSITY OF VIRGINIA</div>
                                                <div className="university-item">UNIVERSITY OF WASHINGTON , Seattle</div>
                                                <div className="university-item">University of Wisconsin - Madison</div>
                                                <div className="university-item">Virginia Tech</div>
                                                <div className="university-item">West Virginia University</div>
                                                <div className="university-item">Western Michigan University</div>
                                                <div className="university-item">Western Washington University</div>
                                            </div>
                                            <h3 style={{ marginTop: "2rem" }}>College/Foundation</h3>
                                            <div className="universities-grid">
                                                <div className="university-item">Kings Education College</div>
                                                <div className="university-item">New England College</div>
                                                <div className="university-item">Santa Monica College</div>
                                                <div className="university-item">Shoreline Community College</div>
                                                <div className="university-item">UBridge</div>
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
