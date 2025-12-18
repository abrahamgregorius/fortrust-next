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

export default function Malaysia() {
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
                            Study in Malaysia, Affordable and Globally Recognized Education
                        </h1>
                        <p>
                            Dynamic education hubs, offering a rare combination of
                            high-quality degrees, and affordable lifestyle.
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
                                        <picture>
                                            <source media="(max-width: 768px)" srcSet="/destinations/banners/Mobile/Malaysia.png" />
                                            <img src="/destinations/banners/Browser/Malaysia.png" alt="Australia Banner" className="content__banner" />
                                        </picture>
                                        <h2>Why Study in Malaysia?</h2>
                                        <p>
                                            Malaysia offers advantages that are harder
                                            to find elsewhere — especially for students
                                            who value both quality and practicality.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Key Benefits of Studying in Malaysia</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Dual Degrees from World-Class
                                                    Universities:</strong
                                                >
                                                Earn a degree from top UK or Australian
                                                universities like Monash or Nottingham
                                                at a fraction of the cost, without
                                                leaving Malaysia.
                                            </li>
                                            <li>
                                                <strong
                                                >Affordable World-Class
                                                    Education:</strong
                                                >
                                                With tuition fees around
                                                $4,000–$7,000/year and low living costs,
                                                you can graduate with a respected degree
                                                debt-free.
                                            </li>
                                            <li>
                                                <strong
                                                >English as a Main Language of
                                                    Instruction:</strong
                                                >
                                                English is widely used in universities,
                                                removing language barriers while
                                                allowing you to learn strategic Asian
                                                languages like Malay and Mandarin.
                                            </li>
                                            <li>
                                                <strong
                                                >Multicultural Environment:</strong
                                                >
                                                Malaysia’s unique blend of Malay,
                                                Chinese, and Indian cultures provides an
                                                edge in cross-cultural communication
                                                skills.
                                            </li>
                                            <li>
                                                <strong
                                                >Strategic Location for Exploring
                                                    Asia:</strong
                                                >
                                                Situated in the heart of Southeast Asia,
                                                Malaysia is a budget airline hub,
                                                perfect for networking and cultural
                                                exploration.
                                            </li>
                                            <li>
                                                <strong
                                                >Growing Opportunities in
                                                    Fast-Developing Sectors:</strong
                                                >
                                                Find internship and job opportunities in
                                                tech, healthcare, and sustainable
                                                industries.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Top 5 Cities to Study in Malaysia</h3>
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
                                                        <td>Kuala Lumpur</td>
                                                        <td>
                                                            University of Nottingham
                                                            Malaysia, Sunway University
                                                        </td>
                                                        <td>
                                                            The buzzing capital with
                                                            modern skyscrapers, rich
                                                            cultural diversity, and
                                                            endless career networking
                                                            opportunities.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Putrajaya</td>
                                                        <td>
                                                            Heriot-Watt University
                                                            Malaysia
                                                        </td>
                                                        <td>
                                                            Safe and affordable
                                                            environment with unique
                                                            modern architecture and
                                                            green spaces.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>
                                                            Newcastle University
                                                            Medicine Malaysia (NUMed)
                                                        </td>
                                                        <td>
                                                            Affordable living with quick
                                                            access to Singapore for
                                                            cross-border internships.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Sarawak</td>
                                                        <td>
                                                            Curtin University, Swinburne
                                                            University
                                                        </td>
                                                        <td>
                                                            Rich, diverse culture and
                                                            incredible natural
                                                            environment for hands-on
                                                            learning.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Selangor</td>
                                                        <td>
                                                            Monash University Malaysia,
                                                            Xiamen University
                                                        </td>
                                                        <td>
                                                            A student-friendly state
                                                            with a dynamic environment
                                                            and gateway to the capital.
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
                                        <h2>Entry Requirements</h2>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Program</th>
                                                        <th>Academic Requirements</th>
                                                        <th>Language Requirements</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <strong
                                                            >Bachelor’s
                                                                Degree</strong
                                                            >
                                                        </td>
                                                        <td>
                                                            Completed secondary/high
                                                            school with at least 70–80%
                                                            average.
                                                        </td>
                                                        <td>
                                                            IELTS 5.5–6.0 or TOEFL iBT
                                                            60–78.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong
                                                            >Master’s Degree</strong
                                                            >
                                                        </td>
                                                        <td>
                                                            A Bachelor’s degree in a
                                                            related field with min. GPA
                                                            3.0/4.0.
                                                        </td>
                                                        <td>
                                                            IELTS 6.0–6.5 or TOEFL iBT
                                                            79–90.
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <strong>PhD Degree</strong>
                                                        </td>
                                                        <td>
                                                            Master’s degree in a
                                                            relevant discipline with a
                                                            strong research background.
                                                        </td>
                                                        <td>
                                                            IELTS 6.5+ or TOEFL iBT 90+.
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Tuition & Living Costs in Malaysia</h2>
                                        <p>
                                            Malaysia is known for offering some of the
                                            most affordable tuition fees and living
                                            costs in Asia. Here’s a breakdown to help
                                            you plan your budget.
                                        </p>
                                    </div>
                                    <div className="content-block">
                                        <h3>Tuition Fees (per year)</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>Undergraduate</th>
                                                        <th>Graduate</th>
                                                        <th>College/Diploma</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 5,000 – 8,000</td>
                                                        <td>USD 2,500 – 4,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 3,500 – 6,000</td>
                                                        <td>USD 4,500 – 7,000</td>
                                                        <td>USD 2,200 – 3,800</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 3,200 – 5,500</td>
                                                        <td>USD 4,000 – 6,500</td>
                                                        <td>USD 2,000 – 3,500</td>
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
                                                        <th>Housing (Shared)</th>
                                                        <th>
                                                            Food, Transport & Utilities
                                                        </th>
                                                        <th>Total Monthly Cost</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Kuala Lumpur</td>
                                                        <td>USD 150 – 250</td>
                                                        <td>USD 215 - 340</td>
                                                        <td>USD 365 – 590</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Penang</td>
                                                        <td>USD 130 – 200</td>
                                                        <td>USD 195 - 300</td>
                                                        <td>USD 325 – 500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Johor Bahru</td>
                                                        <td>USD 120 – 180</td>
                                                        <td>USD 185 - 285</td>
                                                        <td>USD 305 – 465</td>
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
                                        <ul>
                                            <li>
                                                <strong
                                                >Part-Time Work During
                                                    Studies:</strong
                                                >
                                                International students are allowed to
                                                work part-time for up to 20 hours per
                                                week during semester breaks or holidays
                                                of more than 7 days.
                                            </li>
                                            <li>
                                                <strong
                                                >Work Permit Requirements:</strong
                                                >
                                                You must apply for approval through the
                                                Immigration Department of Malaysia with
                                                the help of your university before
                                                starting work.
                                            </li>
                                            <li>
                                                <strong
                                                >Post-Study Work
                                                    Opportunities:</strong
                                                >
                                                While Malaysia doesn’t have an open
                                                post-study work visa, you can secure an
                                                Employment Pass if you receive a
                                                full-time job offer from a Malaysian
                                                company.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Scholarships in Malaysia</h2>
                                        <p>
                                            Malaysia offers numerous scholarships that
                                            can make your education even more
                                            accessible. From government awards to
                                            university-specific funding, Malaysia is
                                            opening doors for talented students from all
                                            over the world.
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
                                                >Malaysia International Scholarship
                                                    (MIS):</strong
                                                >
                                                Offered by the Malaysian Ministry of
                                                Education, this scholarship supports
                                                outstanding postgraduate students and
                                                often covers tuition fees and a living
                                                allowance.
                                            </li>
                                            <li>
                                                <strong
                                                >University-Specific
                                                    Scholarships:</strong
                                                >
                                                Most Malaysian universities have their
                                                own merit-based scholarships, such as
                                                the University of Malaya Excellence
                                                Award and Monash University Malaysia
                                                Scholarships.
                                            </li>
                                            <li>
                                                <strong
                                                >Belt and Road Scholarship:</strong
                                                >
                                                For students from Belt and Road
                                                Initiative countries, Malaysia
                                                participates in collaborative programs
                                                that cover tuition and living expenses.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>All Institutions in Malaysia</h2>
                                        <p>
                                            Study in Malaysia's top private
                                            universities and international branch
                                            campuses.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Public Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">International Islamic University Malaysia (IIUM)</div>
                                            <div className="university-item">Islamic Science University of Malaysia (USIM)</div>
                                            <div className="university-item">Universiti Kebangsaan Malaysia (UKM) / The National University of Malaysia</div>
                                            <div className="university-item">Universiti Malaysia Kelantan (UMK)</div>
                                            <div className="university-item">Universiti Malaysia Pahang (UMP)</div>
                                            <div className="university-item">Universiti Malaysia Perlis (UniMAP)</div>
                                            <div className="university-item">Universiti Malaysia Sabah (UMS)</div>
                                            <div className="university-item">Universiti Malaysia Sarawak (UNIMAS)</div>
                                            <div className="university-item">Universiti Malaysia Terengganu (UMT)</div>
                                            <div className="university-item">Universiti Pendidikan Sultan Idris (UPSI)</div>
                                            <div className="university-item">Universiti Pertahanan Nasional Malaysia</div>
                                            <div className="university-item">Universiti Putra Malaysia (UPM)</div>
                                            <div className="university-item">Universiti Sains Malaysia (USM)</div>
                                            <div className="university-item">Universiti Sultan Zainal Abidin (UNiSZA)</div>
                                            <div className="university-item">Universiti Teknikal Malaysia Melaka</div>
                                            <div className="university-item">Universiti Teknologi Malaysia (UTM)</div>
                                            <div className="university-item">University of Malaya (UM)</div>
                                            <div className="university-item">Universiti Teknologi MARA (UiTM)</div>
                                            <div className="university-item">Universiti Tun Hussein Onn Malaysia (UTHM)</div>
                                            <div className="university-item">Universiti Utara Malaysia (UUM)</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Private Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">AIMST University</div>
                                            <div className="university-item">Al-Madinah International University (MEDIU)</div>
                                            <div className="university-item">Asia e University (AeU)</div>
                                            <div className="university-item">Asia Metropolitan University (AMU)</div>
                                            <div className="university-item">Asia Pacific University of Technology & Innovation (APU)</div>
                                            <div className="university-item">Asia School Of Business (ASB)</div>
                                            <div className="university-item">Binary University of Management & Entrepreneurship (BUME)</div>
                                            <div className="university-item">City University Malaysia</div>
                                            <div className="university-item">DRB-HICOM University Of Automotive Malaysia</div>
                                            <div className="university-item">Enforcement, Leadership and Management University (ELMU)</div>
                                            <div className="university-item">HELP University - Damansara Heights Campus</div>
                                            <div className="university-item">INCEIF University</div>
                                            <div className="university-item">Infrastructure University Kuala Lumpur (IUKL)</div>
                                            <div className="university-item">International Medical University (IMU)</div>
                                            <div className="university-item">INTI International University</div>
                                            <div className="university-item">KPJ Healthcare University</div>
                                            <div className="university-item">Limkokwing University of Creative Technology (LUCT)</div>
                                            <div className="university-item">MAHSA University</div>
                                            <div className="university-item">Malaysian Cooperative Entrepreneurship University</div>
                                            <div className="university-item">Malaysian Institute For Supply Chain Innovation (MISI)</div>
                                            <div className="university-item">Management and Science University (MSU)</div>
                                            <div className="university-item">Mila University</div>
                                            <div className="university-item">Multimedia University (MMU)</div>
                                            <div className="university-item">Netherlands Maritime Institute Of Technology (NMIT)</div>
                                            <div className="university-item">Nilai University</div>
                                            <div className="university-item">Open University Malaysia (OUM)</div>
                                            <div className="university-item">Perdana University</div>
                                            <div className="university-item">Quest International University (QIU)</div>
                                            <div className="university-item">Raffles University (RU)</div>
                                            <div className="university-item">SEGi University</div>
                                            <div className="university-item">Selangor Islamic University (UIS)</div>
                                            <div className="university-item">Sunway University</div>
                                            <div className="university-item">Taylor's University</div>
                                            <div className="university-item">Tunku Abdul Rahman University of Management and Technology (TARUMT), Main Campus</div>
                                            <div className="university-item">UCSI University</div>
                                            <div className="university-item">UNITAR International University</div>
                                            <div className="university-item">Universiti Kuala Lumpur (UniKL)</div>
                                            <div className="university-item">Universiti Malaya - Wales (UM-Wales)</div>
                                            <div className="university-item">Universiti Poly-Tech Malaysia-UPTM</div>
                                            <div className="university-item">Universiti Selangor (UNISEL) Shah Alam Campus</div>
                                            <div className="university-item">Universiti Teknologi Petronas (UTP)</div>
                                            <div className="university-item">Universiti Tenaga Nasional (UNITEN)</div>
                                            <div className="university-item">Universiti Tun Abdul Razak (UNIRAZAK)</div>
                                            <div className="university-item">Universiti Tunku Abdul Rahman (UTAR)</div>
                                            <div className="university-item">University Islam Melaka (UNIMEL)</div>
                                            <div className="university-item">University Malaysia of Computer Science & Engineering (UNIMY)</div>
                                            <div className="university-item">University of Cyberjaya (UoC)</div>
                                            <div className="university-item">University of Technology Sarawak (UTS)</div>
                                            <div className="university-item">University of Wollongong Malaysia</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>University Colleges</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Asian Women’s Leadership University College (AWLUC)</div>
                                            <div className="university-item">BERJAYA University College</div>
                                            <div className="university-item">First City University College</div>
                                            <div className="university-item">Han Chiang University College of Communication</div>
                                            <div className="university-item">i-CATS University College (i-CATS)</div>
                                            <div className="university-item">Kings University College</div>
                                            <div className="university-item">Kuala Lumpur Metropolitan University College (KLMU)</div>
                                            <div className="university-item">Lincoln University College</div>
                                            <div className="university-item">Manipal University College Malaysia (MUCM)</div>
                                            <div className="university-item">North Borneo University College (NBUC)</div>
                                            <div className="university-item">Saito University College</div>
                                            <div className="university-item">Southern University College</div>
                                            <div className="university-item">Twintech International University College of Technology (IUCTT)</div>
                                            <div className="university-item">University College MAIWP International (UCMI)</div>
                                            <div className="university-item">University College of Aviation Malaysia (UniCAM)</div>
                                            <div className="university-item">University College TATI (UC TATI)</div>
                                            <div className="university-item">Widad University College</div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Foreign University Branch Campuses</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Curtin University Malaysia</div>
                                            <div className="university-item">Heriot-Watt University Malaysia</div>
                                            <div className="university-item">Monash University Malaysia</div>
                                            <div className="university-item">Newcastle University Medicine Malaysia (NUMed)</div>
                                            <div className="university-item">RCSI & UCD Malaysia Campus (RUMC)</div>
                                            <div className="university-item">Swinburne University of Technology Sarawak Campus</div>
                                            <div className="university-item">University of Nottingham Malaysia</div>
                                            <div className="university-item">University of Reading Malaysia</div>
                                            <div className="university-item">University of Southampton Malaysia (UoSM)</div>
                                            <div className="university-item">Xiamen University Malaysia (XMUM)</div>
                                        </div>
                                        <p className="partners__many">*This list highlights just a fraction of our full university partners.</p>

                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Application Timeline</h2>
                                        <p>
                                            Planning ahead is essential. Malaysia offers
                                            two main intakes for most universities, but
                                            this can vary.
                                        </p>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>Intake</th>
                                                        <th>Application Period</th>
                                                        <th>Classes Begin</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Fall Intake</td>
                                                        <td>January – June</td>
                                                        <td>September</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Spring Intake</td>
                                                        <td>
                                                            September – December
                                                            (previous year)
                                                        </td>
                                                        <td>March</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p style={{ marginTop: "20px" }}>
                                            <strong>Pro Tip:</strong> Always apply at
                                            least 3–4 months before the deadline to
                                            avoid last-minute stress. This buffer helps
                                            you secure accommodation, flights, and your
                                            student visa on time.
                                        </p>
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
