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
        return <p>Error loading testimonials.</p>
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
                        <h1>Events & Webinars</h1>
                        <p>
                            Connect with us and our university partners at our free online and
                            in-person events.
                        </p>
                    </div>
                </section>

                <section className="events-page-section">
                    <div className="container">
                        <div className="section-header">
                            <h2>Events</h2>
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
                                            <h4>{event.name}</h4>
                                            <p><Clock></Clock> {timeStr} (Asia/Jakarta)</p>
                                            <p><MapPin></MapPin> At {event?.metadata?.venue}</p>
                                        </div>
                                        <a
                                            href={event.registration_link}
                                            className="btn btn--secondary"
                                        >RSVP Now</a>
                                    </div>

                                    // id, name, description, start_at, end_at, is_public, metadata, created_at, updated_at, deleted_at, registration_link, status
                                    );
                                }) : (
                                    <div className="no-events-message">
                                        <p>No upcoming events at the moment.</p>
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
                            <h2>Events Articles</h2>
                        </div>
                        <div className="events__list">
                            <div className="card event-card" style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                                <a href="/blog" className="btn btn--secondary-outline">View Latest Events</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}