import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Get in Touch</h1>
                        <p>
                            We're here to help. Reach out to us via the form below,
                            or contact one of our offices directly.
                        </p>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="container contact-section__container">
                        <div className="contact-form-wrapper">
                            <h3>Send us a Message</h3>
                            <form className="contact-form">
                                <div className="form-group">
                                    <label for="name">Full Name</label>
                                    <input type="text" id="name" required />
                                </div>
                                <div className="form-group">
                                    <label for="email">Email Address</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="phone" id="phone" required />
                                </div>
                                <div className="form-group">
                                    <label for="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn--primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="contact-details-wrapper">
                            <h3>Contact Information</h3>
                            <div className="contact-info-item">
                                <Mail></Mail>
                                <div>
                                    <h4>General Enquiries</h4>
                                    <p>info@fortrust.com</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                    />
                                </svg>

                                <div>
                                    <h4>WhatsApp</h4>
                                    <p>+62 818 2828 17</p>
                                </div>
                            </div>
                            <hr />
                            <h3>Our Offices</h3>
                            <div className="office-location">
                                <h4>Central Jakarta, ID</h4>
                                <p>
                                    Menara BCA, Jl. MH Thamrin No. 1 Level 50, Rm
                                    5005, Jakarta Pusat, 10310, Indonesia
                                    <br />Phone: +6221 2358 5686
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>West Jakarta, ID</h4>
                                <p>
                                    Rukan Wallstreet, Jl. GreenLake City Boulevard
                                    No. B-61, Duri Kosambi, Kecamatan Cengkareng,
                                    Jakarta Barat, 11720, Indonesia
                                    <br />Mobile: +62815 1329 1991
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Gading Serpong, ID</h4>
                                <p>
                                    South Tangerang Ruko Graha Boulevard Blok A No
                                    16, Gading Serpong, Banten 15810
                                    <br />Phone: +6221 3529 3447 <br />Mobile:
                                    +62811 158 1818
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Palembang, ID</h4>
                                <p>
                                    Kompleks Rajawali Centre Point, Jl. Bangau No
                                    171A (Depan gerbang Universitas Musi Charitas)
                                    Palembang, 30113, Indonesia
                                    <br />Phone: +6271 1555 6501 <br />Mobile:
                                    +62811 730 686
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Semarang, ID</h4>
                                <p>
                                    Perumahan Puri Delta Asri 3 blok A2 no.20.
                                    Cangkiran. Semarang <br />
                                    Mobile: +62813 2504 7973
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Surabaya, ID</h4>
                                <p>
                                    Ciputra World office tower Lt 15, Unit 15-16 Jl
                                    Mayjend Sungkono No.89, Surabaya 60225
                                    <br />Mobile: +62877 7778 4932
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Philippines</h4>
                                <p>
                                    Makati City   <br />
                                    Cebu City   <br />
                                    Davao City   <br />
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>Malaysia</h4>
                                <p>
                                    Johor Baru   <br />
                                    Shah Alam   <br />
                                </p>
                            </div>
                            <div className="office-location">
                                <h4>India</h4>
                                <p>
                                    Panchukula  <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}