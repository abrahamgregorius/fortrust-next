import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Clock, MapPin, Newspaper } from "lucide-react";

export default function Events() {
    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Event & Webinar</h1>
                        <p>
                            Terhubung dengan kami dan mitra universitas kami di event online atau tatap muka gratis.
                        </p>
                    </div>
                </section>

                <section className="events-page-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Event Mendatang</h2>
                        </div>
                        <div className="events__list">
                            <div className="card event-card">
                                <div className="event-card__date">
                                    <span className="month">SEP</span><span className="day">28</span>
                                </div>
                                <div className="event-card__info">
                                    <h4>Fortrust International Edu Expo 2025</h4>
                                    <p><Clock></Clock> 1:00 PM (Asia/Jakarta)</p>
                                    <p><MapPin></MapPin> Atria Hotel Gading Serpong</p>
                                </div>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLScb58C3bbmq0-j1GfWilomVgXG5bQ_MgS4bUfFFJprhKBys3w/viewform?usp=header"
                                    className="btn btn--secondary"
                                >RSVP Now</a
                                >
                            </div>

                        </div>
                    </div>
                </section>

                <section
                    className="events-page-section"
                    style={{ backgroundColor: "var(--neutral-100)" }}
                >
                    <div className="container">
                        <div className="section-header">
                            <h2>Artikel Event</h2>
                        </div>
                        <div className="events__list">
                            <div className="card event-card">
                                <div className="event-card__date">
                                    <span className="month">AUG</span><span className="day">20</span>
                                </div>
                                <div className="event-card__info">
                                    <h4>Australia Scholarship Workshop</h4>
                                    <p><Newspaper></Newspaper> Kompas.com</p>
                                </div>
                                <a href="#" className="btn btn--secondary-outline">Lihat Artikel</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}