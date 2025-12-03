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
import { useEffect, useState } from "react";

export default function China() {
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
                        <h1>Study in China, Learn Where the World's Economy Leads</h1>
                        <p>
                            Experience world-class scholarships, economic
                            immersion, and cultural discovery—all in one
                            transformative journey found only in China.
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
                                        <img src="/destinations/banners/China.jpg" className="content__banner" alt="" />
                                        <h2>Why Study in China?</h2>
                                        <p>
                                            With unmatched scholarship opportunities, immersion in the
                                            world’s largest economy, language advantages, and active
                                            cultural learning, China offers international students a
                                            transformative experience that goes far beyond conventional
                                            study abroad options.
                                        </p>
                                    </div>

                                    <div className="content-block">
                                        <h3>Key Benefits of Studying in China</h3>
                                        <ul>
                                            <li>
                                                <strong
                                                >Access to the World’s Largest, Fastest-Growing
                                                    Economy</strong>
                                                Direct exposure to the world’s second-largest economy, with
                                                immediate insight into global manufacturing, technology, and
                                                international business networks.
                                            </li>
                                            <li>
                                                <strong>World-Class Scholarships for All Majors</strong><br />
                                                China offers a higher percentage of full funding
                                                scholarships—even for STEM and business majors—without the
                                                same intense competition found in Western countries.
                                            </li>
                                            <li>
                                                <strong>Mandarin Language Advantage</strong><br /> Gain a rare
                                                edge in the international job market with immersive language
                                                training, often subsidized by universities.
                                            </li>
                                            <li>
                                                <strong>Unique Cultural Immersion</strong><br /> Experience a
                                                5,000-year-old civilization with active traditions in
                                                medicine, philosophy, and science integrated into daily
                                                student life.
                                            </li>
                                            <li>
                                                <strong
                                                >Pioneering STEM, AI, and Engineering Programs</strong
                                                ><br />
                                                Universities directly partner with top tech firms like
                                                Baidu, ByteDance, and DJI, giving students access to labs
                                                shaping tomorrow’s world.
                                            </li>
                                            <li>
                                                <strong>Affordable Tuition and Low Cost of Living</strong><br />
                                                The cost of studying and living in China is often less than
                                                half of equivalent programs in Western countries.
                                            </li>
                                            <li>
                                                <strong>Gateway to Asia-Pacific Careers</strong><br /> Be part of
                                                extensive, cross-border education and business networks at
                                                the hub of the 21st-century economy.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>
                                            Understanding University Tiers: 211, 985, and Double First
                                            Class
                                        </h3>
                                        <p>
                                            These categories represent quality, prestige, and strategic
                                            government initiatives aimed at enhancing the competitiveness
                                            of Chinese higher education.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>211 Universities</strong><br /> A group of ~100 top
                                                universities receiving special government funding to raise
                                                the quality of education and research.
                                            </li>
                                            <li>
                                                <strong>985 Universities</strong><br /> An elite subgroup of 211
                                                universities targeted to reach the standards of
                                                world-renowned institutions like Harvard or MIT.
                                            </li>
                                            <li>
                                                <strong>Double First Class</strong><br /> The latest initiative
                                                to create world-class universities and world-class
                                                disciplines, making the selection more precise and dynamic.
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="content-block">
                                        <h3>Top 5 Cities to Study in China</h3>
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
                                                        <td>Beijing</td>
                                                        <td>Tsinghua University, Peking University</td>
                                                        <td>
                                                            Rich historical & cultural heritage, vibrant tech hub
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>Fudan University, Shanghai Jiao Tong University</td>
                                                        <td>International city vibe, global networking</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>Sun Yat-sen University</td>
                                                        <td>Gateway to Southeast Asia, affordable living</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>Zhejiang University</td>
                                                        <td>Picturesque environment, strong tech industry</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>Sichuan University</td>
                                                        <td>Unique cuisine, relaxed lifestyle, fast-growing</td>
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
                                        <h3>Bachelor's Degree</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> Official transcript
                                                of secondary education with good academic standing (minimum
                                                60-80% depending on university tier).
                                            </li>
                                            <li>
                                                <strong>Language Proficiency</strong> <br /> For English-taught
                                                programs, IELTS 6.5+ or TOEFL 80-90+. For Mandarin-taught
                                                programs, HSK Level 4.
                                            </li>
                                            <li>
                                                <strong>Other</strong> <br /> Entrance exams or interviews may be
                                                required for competitive programs.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>Master's Degree</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> A relevant
                                                Bachelor’s degree with a minimum GPA of 3.0/4.0 or
                                                equivalent.
                                            </li>
                                            <li>
                                                <strong>Language Proficiency</strong> <br /> For English-taught
                                                programs, IELTS 6.5–7.0 or TOEFL 90–100+. For
                                                Mandarin-taught programs, HSK Level 5.
                                            </li>
                                            <li>
                                                <strong>Supporting Documents</strong> <br /> 2+ letters of
                                                recommendation, Statement of Purpose (SOP), and a research
                                                proposal for research-based programs.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="content-block">
                                        <h3>PhD (Doctoral) Degree</h3>
                                        <ul>
                                            <li>
                                                <strong>Academic Requirements</strong> <br /> A Master’s degree in
                                                a related field with a strong research background.
                                            </li>
                                            <li>
                                                <strong>Language Proficiency</strong> <br /> IELTS 6.5–7.0+ or
                                                TOEFL 90–100+ for English programs. HSK Level 5 or higher
                                                for Mandarin programs.
                                            </li>
                                            <li>
                                                <strong>Supporting Documents</strong> <br /> Detailed research
                                                proposal, 3 letters of recommendation, and evidence of
                                                research publications.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "costs" && (
                                <div id="costs" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Tuition & Living Costs in China</h2>
                                    </div>
                                    <div className="content-block">
                                        <h3>Average Annual Tuition & Monthly Living Costs</h3>
                                        <div className="table-responsive">
                                            <table className="data-table">
                                                <thead>
                                                    <tr>
                                                        <th>City</th>
                                                        <th>Undergraduate Tuition (p.a.)</th>
                                                        <th>Graduate Tuition (p.a.)</th>
                                                        <th>Living Costs (p.m.)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Beijing</td>
                                                        <td>$3,500 – $5,000</td>
                                                        <td>$4,000 – $7,500</td>
                                                        <td>$700 – $1,200</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Shanghai</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$4,500 – $8,000</td>
                                                        <td>$800 – $1,500</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Guangzhou</td>
                                                        <td>$2,500 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$500 – $1,000</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Hangzhou</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$3,500 – $6,000</td>
                                                        <td>$600 – $1,100</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Chengdu</td>
                                                        <td>$2,200 – $4,000</td>
                                                        <td>$3,000 – $5,000</td>
                                                        <td>$400 – $900</td>
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
                                            Evolving policies increasingly allow international students to
                                            supplement their education with part-time work and explore
                                            post-study career options.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Part-time Work</strong> <br /> Students can work up to 20
                                                hours per week during semesters (and full-time during
                                                breaks) after obtaining approval from their university and
                                                the local Public Security Bureau (PSB).
                                            </li>
                                            <li>
                                                <strong>Post-Study Work</strong> <br /> Graduates who secure a job
                                                contract with a Chinese employer can convert their student
                                                visa to a Z visa (work visa) to be legally employed in
                                                China.
                                            </li>
                                        </ul>
                                        <p>
                                            Graduates from Chinese institutions often receive preferential
                                            consideration due to recognized qualifications and Mandarin
                                            language proficiency.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {activeTab === "scholarships" && (
                                <div id="scholarships" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Scholarships in China</h2>
                                        <p>
                                            China offers extensive funding opportunities that make
                                            high-quality education more accessible than ever. Mandarin is
                                            not required for most English-taught programs, making the
                                            application process accessible to students worldwide.
                                        </p>
                                        <a
                                            href="/contact"
                                            className="btn btn--primary"
                                            style={{ marginTop: "20px" }}
                                        >Inquire About Scholarships</a
                                        >
                                    </div>
                                    <div className="content-block">
                                        <h3>Types of Scholarships Available</h3>
                                        <ul>
                                            <li>
                                                <strong>Chinese Government Scholarship (CSC)</strong> <br /> The
                                                most comprehensive program, covering full tuition,
                                                accommodation, a living stipend, and medical insurance for
                                                all degree levels.
                                            </li>
                                            <li>
                                                <strong>Confucius Institute Scholarship</strong> <br /> Designed
                                                for students interested in Chinese language and cultural
                                                studies, providing generous funding for language programs.
                                            </li>
                                            <li>
                                                <strong>Local Government Scholarships</strong> <br /> Major cities
                                                like Beijing and Shanghai offer scholarships to attract top
                                                global talent, often including tuition waivers and living
                                                expenses.
                                            </li>
                                            <li>
                                                <strong>University-Specific Scholarships</strong> <br /> Top
                                                institutions like Tsinghua and Peking University provide
                                                merit-based awards for academic excellence and research
                                                potential.
                                            </li>
                                            <li>
                                                <strong>Belt and Road Scholarship</strong> <br /> Designated
                                                scholarships for students from participating countries to
                                                foster educational exchange and global cooperation.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}

                            {activeTab === "partners" && (
                                <div id="partners" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>All Institutions in China</h2>
                                        <p>
                                            Study in China's most elite universities, including
                                            members of the prestigious 211, 985, and Double First Class
                                            initiatives.
                                        </p>
                                        <h3 style={{ marginTop: "2rem" }}>Featured Universities</h3>
                                        <div className="featured-uni-grid">

                                            <div className="featured-uni-item">
                                                <img src="../universities/China/BIoT.svg" alt="" />
                                                <p>
                                                    Beijing Institute of Technology
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../universities/China/HIoT.gif" alt="" />
                                                <p>
                                                    Harbin Institute of Technology
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../universities/China/UShanghai.svg" alt="" />
                                                <p>
                                                    Shanghai University
                                                </p>
                                            </div>
                                            <div className="featured-uni-item">
                                                <img src="../universities/China/Xian.png" alt="" />
                                                <p>
                                                    Xi-An JiaoTong - Liverpool University
                                                </p>
                                            </div>
                                        </div>
                                        <h3 style={{ marginTop: "2rem" }}>Universities</h3>
                                        <div className="universities-grid">
                                            <div className="university-item">Beihang University</div>
                                            <div className="university-item">Beijing Institute of Technology</div>
                                            <div className="university-item">Beijing University of Posts and Telecomunication (BUPT)</div>
                                            <div className="university-item">Beijing Normal University</div>
                                            <div className="university-item">Fudan University</div>
                                            <div className="university-item">Harbin Institute of Technology</div>
                                            <div className="university-item">Harbin Institute of Technology, Shenzhen</div>
                                            <div className="university-item">Hefei University of Technology</div>
                                            <div className="university-item">Huazhong University of Science and Technology (HUST)</div>
                                            <div className="university-item">Nanjing University</div>
                                            <div className="university-item">Nanjing University of Science and Technology</div>
                                            <div className="university-item">Nankai University</div>
                                            <div className="university-item">Ningbo University</div>
                                            <div className="university-item">Northwestern Polytechnical University, Xi'an, Shaanxi, China</div>
                                            <div className="university-item">Peking Union Medical College</div>
                                            <div className="university-item">Peking University</div>
                                            <div className="university-item">Renmin University of China</div>
                                            <div className="university-item">Shandong University</div>
                                            <div className="university-item">Shang Hai International Studies University (SISU)</div>
                                            <div className="university-item">Shanghai Jiao Tong University</div>
                                            <div className="university-item">Shanghai Polytechnic University, Xi'an, Shaanxi</div>
                                            <div className="university-item">Shanghai University</div>
                                            <div className="university-item">Sichuan Agricultural University</div>
                                            <div className="university-item">Sichuan University</div>
                                            <div className="university-item">South China Normal University</div>
                                            <div className="university-item">South China University of Technology</div>
                                            <div className="university-item">Southern University of Science and Technology (SUStech)</div>
                                            <div className="university-item">Sun Yat Sen University (SYSU)</div>
                                            <div className="university-item">TianJin University</div>
                                            <div className="university-item">TongJi University (Shanghai)</div>
                                            <div className="university-item">University of Science and Technology of China</div>
                                            <div className="university-item">Wuhan University</div>
                                            <div className="university-item">Xi-An JiaoTong - Liverpool University</div>
                                            <div className="university-item">Zhejiang University</div>
                                            <div className="university-item">Zhejiang University of Finance and Economics (ZUFE)</div>
                                            <div className="university-item">Zhejiang University of Science and Technology</div>
                                            <div className="university-item">Zhejiang University of Technology</div>
                                        </div>
                                        <p className="partners__many">*This list highlights just a fraction of our full university partners.</p>

                                    </div>
                                </div>
                            )}

                            {activeTab === "intakes" && (
                                <div id="intakes" className="tab-pane active">
                                    <div className="content-block">
                                        <h2>Main University Intakes</h2>
                                        <p>
                                            Chinese universities generally offer two main intakes each
                                            year, with the Fall intake being the most popular for
                                            full-degree programs.
                                        </p>
                                        <ul>
                                            <li>
                                                <strong>Fall Intake (Main Intake)</strong> <br /> Commences in
                                                September. Applications are usually open from January to
                                                June. This offers the widest selection of courses.
                                            </li>
                                            <li>
                                                <strong>Spring Intake</strong> <br /> Commences in March.
                                                Applications are typically open from September to December
                                                of the previous year. This option is less common and best
                                                for those who missed the fall deadline.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Study in China?</h2>
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
