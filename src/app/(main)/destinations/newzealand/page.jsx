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

export default function NewZealand() {
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
                            Study in New Zealand, Where Education Meets Adventure
                        </h1>
                        <p>
                            Gain a globally recognized qualification while exploring stunning natural beauty and vibrant cultures.
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
                                            <img src="./public/destinations/banners/New Zealand.png" className="content__banner" alt="" />
                                            <h2>Why Study in New Zealand?</h2>
                                            <p>
                                                New Zealand stands alone for study destination that delivers unforgettable experiences alongside global qualification.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <h3>Key Benefits of Studying in New Zealand</h3>
                                            <ul>
                                                <li><strong>Study in Small, Supportive Classes:</strong> With average class sizes of 10-25 students, professors know you by name and offer tailored mentoring.</li>
                                                <li><strong>Unique Work Rights:</strong> Work up to 20 hours per week during the semester and full-time during holidays. The Post-Study Work Visa lets you stay and work for up to three years in any sector.</li>
                                                <li><strong>Live in a Safe and Friendly Society:</strong> New Zealand consistently ranks in the top ten for global safety. The culture emphasizes kindness ("manaakitanga"), making international students feel truly welcomed.</li>
                                                <li><strong>Easy Pathway to Permanent Residency:</strong> Graduates in skill shortage areas (tech, engineering, healthcare) are eligible for direct residency pathways.</li>
                                                <li><strong>Study in the Heart of Nature:</strong> Many campuses are framed by mountains, fiords, and beaches, offering a learning experience impossible to duplicate anywhere else.</li>
                                                <li><strong>Indigenous Perspectives That Enrich Every Course:</strong> Māori culture is interwoven into higher education, teaching indigenous values and innovative worldviews that boost global employability.</li>
                                            </ul>
                                        </div>

                                        <div className="content-block">
                                            <h3>Top 5 Cities to Study in New Zealand</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>Key Institution</th>
                                                            <th>City Highlights</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Auckland</td>
                                                            <td>University of Auckland</td>
                                                            <td>A vibrant, multicultural community with access to world-class programs and dynamic job opportunities.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wellington</td>
                                                            <td>Victoria University of Wellington</td>
                                                            <td>Dazzles with its cosmopolitan energy, thriving arts scene, and close-knit student networks.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Christchurch</td>
                                                            <td>University of Canterbury</td>
                                                            <td>Offers affordable living, beautiful parks, and a forward-thinking spirit, celebrated for engineering and tech.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dunedin</td>
                                                            <td>University of Otago</td>
                                                            <td>A true student city with New Zealand’s oldest university, a lively culture, and breathtaking coastlines.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hamilton</td>
                                                            <td>University of Waikato</td>
                                                            <td>A friendly, green oasis with a modern campus and flexible study pathways in business, IT, and science.</td>
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
                                                            <td>High school graduation with minimum average 70–80%</td>
                                                            <td>Bachelor’s degree in a related field with min. GPA 3.0/4.0</td>
                                                            <td>Master’s degree in a relevant field with strong research background</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Language Proficiency</strong></td>
                                                            <td>IELTS 5.5–6.0 or TOEFL iBT 60–78</td>
                                                            <td>IELTS 6.0–6.5 or TOEFL iBT 79–90</td>
                                                            <td>IELTS 6.5+ or TOEFL iBT 90+</td>
                                                        </tr>
                                                        <tr>
                                                            <td><strong>Supporting Documents</strong></td>
                                                            <td>Passport, transcripts, personal statement, financial proof</td>
                                                            <td>Passport, transcripts, CV, 2-3 recommendation letters, statement of purpose</td>
                                                            <td>Transcripts, research proposal, CV, 2-3 academic references, personal statement</td>
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
                                            <h2>Tuition & Living Cost in New Zealand</h2>
                                            <p>Every NZ dollar spent is not just for a life-changing education, but for memories and friendships in a country where you matter.</p>
                                        </div>
                                        <div className="content-block">
                                            <h3>Annual Tuition Fees (NZD)</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>Program Type</th>
                                                            <th>Public Universities</th>
                                                            <th>Private Colleges</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Undergraduate (Arts/Business)</td>
                                                            <td>22,000 – 32,000</td>
                                                            <td>20,000 – 40,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Undergraduate (Science/Engineering)</td>
                                                            <td>33,000 – 50,000</td>
                                                            <td>25,000 – 42,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Graduate (Master’s Coursework)</td>
                                                            <td>26,000 – 37,000</td>
                                                            <td>22,000 – 39,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>PhD/Postgraduate</td>
                                                            <td>18,000 – 25,000 (subsidized)</td>
                                                            <td>19,000 – 28,000</td>
                                                        </tr>
                                                        <tr>
                                                            <td>College Diploma</td>
                                                            <td>15,000 – 22,000</td>
                                                            <td>16,000 – 24,000</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="content-block">
                                            <h3>Average Monthly Living Costs (NZD)</h3>
                                            <div className="table-responsive">
                                                <table className="data-table">
                                                    <thead>
                                                        <tr>
                                                            <th>City</th>
                                                            <th>Housing</th>
                                                            <th>Food</th>
                                                            <th>Transport</th>
                                                            <th>Total Estimate</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Auckland</td>
                                                            <td>700 – 1,500</td>
                                                            <td>400 – 600</td>
                                                            <td>130 – 170</td>
                                                            <td><strong>1,570 – 2,890</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Wellington</td>
                                                            <td>650 – 1,230</td>
                                                            <td>350 – 580</td>
                                                            <td>100 – 140</td>
                                                            <td><strong>1,390 – 2,500</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Christchurch</td>
                                                            <td>500 – 1,100</td>
                                                            <td>320 – 550</td>
                                                            <td>90 – 120</td>
                                                            <td><strong>1,170 – 2,190</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Dunedin</td>
                                                            <td>400 – 950</td>
                                                            <td>300 – 500</td>
                                                            <td>80 – 110</td>
                                                            <td><strong>1,010 – 2,000</strong></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Hamilton</td>
                                                            <td>480 – 980</td>
                                                            <td>320 – 520</td>
                                                            <td>90 – 130</td>
                                                            <td><strong>1,150 – 2,100</strong></td>
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
                                            <p>From the moment you begin your academic journey in New Zealand, you are supported not just as a student, but as a future leader.</p>
                                            <ul>
                                                <li><strong>Work While Studying:</strong> Your student visa generally allows you to work up to 20 hours per week during teaching periods and full-time during scheduled university breaks.</li>
                                                <li><strong>Launch Your Career:</strong> Upon graduation, you can apply for a Post-Study Work Visa, which allows you to work in New Zealand for up to three years, in any field of your choice.</li>
                                            </ul>
                                            <p>Imagine earning extra pocket money, gaining real-world skills, and making valuable professional connections—all while balancing your studies.</p>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "scholarships" && (
                                <>
                                    <div id="scholarships" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>Scholarships in New Zealand</h2>
                                            <p>Discover your future in New Zealand, where Indonesian students can access a variety of scholarships at top-ranked universities for an exceptional and affordable education. Both university and government scholarships are available, including the fully funded New Zealand Government Scholarship, which covers tuition, living expenses, and accommodation.</p>
                                            <a href="/contact" className="btn btn--primary" style={{ marginTop: "20px" }}>Yes, I need help getting a scholarship</a>
                                        </div>
                                        <div className="content-block">
                                            <h3>Key Types of Scholarships</h3>
                                            <ul>
                                                <li><strong>Merit-Based Scholarships:</strong> Awarded to students with outstanding academic achievements, leadership skills, or special talents.</li>
                                                <li><strong>Research Scholarships:</strong> Given to students with strong academic or research potential, such as the NZIDRS (New Zealand International Doctoral Research Scholarships).</li>
                                                <li><strong>Government Scholarships:</strong> Include awards like the New Zealand ASEAN Scholarships (NZAS), opening doors to undergraduate and postgraduate studies.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            )}

                            {activeTab === "partners" && (
                                <>
                                    <div id="partners" className="tab-pane active">
                                        <div className="content-block">
                                            <h2>All Institutions in New Zealand</h2>
                                            <p>Study in New Zealand's world-class universities, known for their research excellence and supportive learning environments.</p>
                                            <div className="universities-grid">
                                                <div className="university-item">Auckland University of Technology (AUT)</div>
                                                <div className="university-item">Lincoln University</div>
                                                <div className="university-item">Massey University</div>
                                                <div className="university-item">The University of Auckland</div>
                                                <div className="university-item">University of Canterbury</div>
                                                <div className="university-item">University of Otago</div>
                                                <div className="university-item">University of Waikato</div>
                                                <div className="university-item">Victoria University of Wellington</div>
                                                <div className="university-item">Ara Institute of Canterbury</div>
                                                <div className="university-item">Eastern Institute of Technology (EIT)</div>
                                                <div className="university-item">Manukau Institute of Technology (MIT)</div>
                                                <div className="university-item">Nelson Marlborough Institute of Technology (NMIT)</div>
                                                <div className="university-item">NorthTec (also known as Tai Tokerau Wānanga)</div>
                                                <div className="university-item">Otago Polytechnic</div>
                                                <div className="university-item">Southern Institute of Technology (SIT)</div>
                                                <div className="university-item">Tai Poutini Polytechnic</div>
                                                <div className="university-item">The Open Polytechnic of New Zealand</div>
                                                <div className="university-item">Toi Ohomai Institute of Technology</div>
                                                <div className="university-item">Unitec Institute of Technology</div>
                                                <div className="university-item">Universal College of Learning (UCOL)</div>
                                                <div className="university-item">Waikato Institute of Technology (Wintec)</div>
                                                <div className="university-item">Wellington Institute of Technology (WelTec)</div>
                                                <div className="university-item">Western Institute of Technology at Taranaki (WITT)</div>
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
                                            <p>In New Zealand, students can apply for either the February or July intake. For the February start, applications are usually due between August and October. If aiming for the July intake, submit your applications between February and May.</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>

                <section className="final-cta">
                    <div className="container final-cta__container">
                        <h2>Ready to Study in New Zealand?</h2>
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