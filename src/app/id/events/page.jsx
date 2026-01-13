import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";
import { Clock, MapPin, Newspaper } from "lucide-react";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function Events() {
    const { data: events, error } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false })

    if (error) {
        console.error(error)
        return <p>Error loading events.</p>
    }

    const formatTimeJakarta = (isoString) => {
        try {
            const d = new Date(isoString);
            const t = new Intl.DateTimeFormat("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Jakarta",
            }).format(d);
            // Convert 1:00 PM -> 1.00 PM
            return t.replace(":", ".");
        } catch (_) {
            return isoString;
        }
    };

    const getMonthDayJakarta = (isoString) => {
        try {
            const d = new Date(isoString);
            const month = new Intl.DateTimeFormat("en-US", {
                month: "short",
                timeZone: "Asia/Jakarta",
            })
                .format(d)
                .toUpperCase();
            const day = new Intl.DateTimeFormat("en-US", {
                day: "2-digit",
                timeZone: "Asia/Jakarta",
            }).format(d);
            return { month, day };
        } catch (_) {
            return { month: "---", day: "--" };
        }
    };
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
                            <h2>Event</h2>
                        </div>
                        <div className="events__list">
                            {
                                events?.length > 0 ? events.map((event, i) => {
                                    const { month, day } = getMonthDayJakarta(event.start_at);
                                    const timeStr = formatTimeJakarta(event.start_at);
                                    return (
                                    <div key={i} className="card event-card">
                                        <div className="event-card__date">
                                            <span className="month">{month}</span><span className="day">{day}</span>
                                        </div>
                                        <div className="event-card__info">
                                            {/* {event.image_url && (
                                                <img
                                                    src={event.image_url}
                                                    alt={event.name}
                                                    className="event-image"
                                                    style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1rem' }}
                                                />
                                            )} */}
                                            <h4>{event.name}</h4>
                                            <p><Clock></Clock> {timeStr} (Asia/Jakarta)</p>
                                            <p><MapPin></MapPin> {event?.location}</p>
                                        </div>
                                        <a
                                            href={event.registration_link}
                                            className="btn btn--secondary"
                                        >RSVP Sekarang</a>
                                    </div>
                                    );
                                }) : (
                                    <div className="no-events-message">
                                        <p>Belum ada event terdekat.</p>
                                    </div>
                                )
                            }

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
                            <div className="card event-card" style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                                <a href="/id/blog" className="btn btn--secondary-outline">Lihat Event Terbaru</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}