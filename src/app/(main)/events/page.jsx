import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkeletonImage from "@/components/SkeletonImage";
import { supabase } from "@/lib/supabaseClient";
import { ArrowRight, Clock, MapPin, Mic } from "lucide-react";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function Events() {
    const now = new Date().toISOString();
    const { data: events, error } = await supabase
        .from("events")
        .select("*")
        .gte("start_at", now)
        .order("start_at", { ascending: true })

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

    // ---- Events (editorial showcase) helpers — same as the homepage ----
    // The events table has no type column; webinars are recognised from the
    // event name/topics so the editorial meta row can label them correctly.
    const eventTypeLabel = (e) => {
        const hay = `${e.name || ""} ${e.topics || ""}`;
        return /webinar/i.test(hay) ? "WEBINAR" : "EVENT";
    };

    const eventDateLabel = (e) => {
        try {
            return new Intl.DateTimeFormat("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "Asia/Jakarta",
            })
                .format(new Date(e.start_at))
                .toUpperCase();
        } catch (_) {
            return "";
        }
    };

    // Full time range in WIB when end_at is available.
    const eventTimeRangeLabel = (e) => {
        let end = "";
        if (e.end_at) {
            try {
                if (new Date(e.end_at) > new Date(e.start_at)) {
                    end = formatTimeJakarta(e.end_at);
                }
            } catch (_) {
                /* ignore malformed end_at */
            }
        }
        const start = formatTimeJakarta(e.start_at);
        return end ? `${start} \u2013 ${end} WIB` : `${start} WIB`;
    };

    // Online events show "Online"; physical venues keep the full address
    // (wrapped to two lines by CSS) since it carries useful detail.
    const eventVenueLabel = (e) => {
        const loc = (e.location || "").trim();
        if (!loc || /^online\b/i.test(loc)) return "Online";
        return loc;
    };

    // Topic chips from the comma-separated topics field, capitalized and
    // capped at three so the cards never overflow.
    const eventTopics = (e) =>
        (e.topics || "")
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
            .slice(0, 3)
            .map((t) => t.charAt(0).toUpperCase() + t.slice(1));

    const eventDescription = (e) =>
        (e.description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

    // Duplicate rows (the same event name entered twice) would make the
    // featured headline reappear in the upcoming grid, so only the first
    // (earliest) row of each name is kept.
    const seenNames = new Set();
    const uniqueEvents = (events || []).filter((e) => {
        const key = (e.name || "").trim().toLowerCase();
        if (!key || seenNames.has(key)) return false;
        seenNames.add(key);
        return true;
    });

    // Nearest upcoming event is the featured one; the rest are compact cards.
    const featured = uniqueEvents[0] || null;
    const secondary = uniqueEvents.slice(1);

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Events &amp; Webinars</h1>
                        <p>
                            Connect with us and our university partners at our free online and
                            in-person events.
                        </p>
                    </div>
                </section>

                <section className="events-page-section">
                    <div className="container">
                        {events?.length > 0 && featured ? (
                            <>
                                {/* Featured event: nearest upcoming, full-width */}
                                <article className="event-feature">
                                    {featured.image_url && (
                                        <div className="event-feature__media">
                                            <SkeletonImage
                                                src={featured.image_url}
                                                alt={featured.name}
                                                sizes="(max-width: 767px) 100vw, 40vw"
                                            />
                                        </div>
                                    )}
                                    <div className="event-feature__info">
                                        <span className="event-feature__meta">
                                            <span className="event-feature__type">{eventTypeLabel(featured)}</span>
                                            <span>{eventDateLabel(featured)}</span>
                                        </span>
                                        <h3 className="event-feature__title">{featured.name}</h3>
                                        <div className="event-info event-info--lg">
                                            <span className="event-info__row">
                                                <MapPin size={15} />
                                                <span className="event-info__text">{eventVenueLabel(featured)}</span>
                                            </span>
                                            <span className="event-info__row">
                                                <Clock size={15} />
                                                <span className="event-info__text">{eventTimeRangeLabel(featured)}</span>
                                            </span>
                                            {featured.speaker && (
                                                <span className="event-info__row">
                                                    <Mic size={15} />
                                                    <span className="event-info__text">{featured.speaker}</span>
                                                </span>
                                            )}
                                            {eventTopics(featured).length > 0 && (
                                                <span className="event-info__chips">
                                                    {eventTopics(featured).map((topic) => (
                                                        <span key={topic} className="event-info__chip">{topic}</span>
                                                    ))}
                                                </span>
                                            )}
                                        </div>
                                        {eventDescription(featured) && (
                                            <p className="event-feature__desc">{eventDescription(featured)}</p>
                                        )}
                                        <div className="event-action-row">
                                            <a
                                                href={featured.registration_link}
                                                className="event-rsvp"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                RSVP Now <ArrowRight size={15} />
                                            </a>
                                        </div>
                                    </div>
                                </article>

                                {secondary.length > 0 && (
                                    <>
                                        <div className="events__subheading">
                                            <h3>Upcoming Events</h3>
                                        </div>
                                        <div className="events__grid">
                                            {secondary.map((event, i) => (
                                                <article key={i} className="event-compact">
                                                    {event.image_url && (
                                                        <div className="event-compact__media">
                                                            <SkeletonImage
                                                                src={event.image_url}
                                                                alt={event.name}
                                                                sizes="(max-width: 767px) 38vw, 240px"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="event-compact__info">
                                                        <span className="event-compact__meta">
                                                            <span className="event-compact__type">{eventTypeLabel(event)}</span>
                                                            <span>{eventDateLabel(event)}</span>
                                                        </span>
                                                        <h4 className="event-compact__title">{event.name}</h4>
                                                        <div className="event-info">
                                                            <span className="event-info__row">
                                                                <MapPin size={14} />
                                                                <span className="event-info__text">{eventVenueLabel(event)}</span>
                                                            </span>
                                                            <span className="event-info__row">
                                                                <Clock size={14} />
                                                                <span className="event-info__text">{eventTimeRangeLabel(event)}</span>
                                                            </span>
                                                            {event.speaker && (
                                                                <span className="event-info__row">
                                                                    <Mic size={14} />
                                                                    <span className="event-info__text">{event.speaker}</span>
                                                                </span>
                                                            )}
                                                            {eventTopics(event).length > 0 && (
                                                                <span className="event-info__chips">
                                                                    {eventTopics(event).map((topic) => (
                                                                        <span key={topic} className="event-info__chip">{topic}</span>
                                                                    ))}
                                                                </span>
                                                            )}
                                                        </div>
                                                        {eventDescription(event) && (
                                                            <p className="event-compact__desc">{eventDescription(event)}</p>
                                                        )}
                                                        <div className="event-action-row">
                                                            <a
                                                                href={event.registration_link}
                                                                className="event-rsvp event-rsvp--compact"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                RSVP Now <ArrowRight size={14} />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </article>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </>
                        ) : (
                            <div className="no-events-message">
                                <p>No upcoming events at the moment.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}
