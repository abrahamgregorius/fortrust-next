import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkeletonImage from "@/components/SkeletonImage";
import { supabase } from "@/lib/supabaseClient";
import { ArrowRight, MapPin } from "lucide-react";

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
        return /webinar/i.test(hay) ? "WEBINAR" : "ACARA";
    };

    const eventDateLabel = (e) => {
        try {
            return new Intl.DateTimeFormat("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
                timeZone: "Asia/Jakarta",
            }).format(new Date(e.start_at));
        } catch (_) {
            return "";
        }
    };

    const eventTimeLabel = (e) => `${formatTimeJakarta(e.start_at)} WIB`;

    // Online events show "Online"; physical venues are shortened to the
    // building/area before the first comma (full addresses are too long).
    const eventVenueLabel = (e) => {
        const loc = (e.location || "").trim();
        if (!loc || /^online\b/i.test(loc)) return "Online";
        return loc.split(",")[0].trim();
    };

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
                        <h1>Acara &amp; Webinar</h1>
                        <p>
                            Terhubung dengan kami dan mitra universitas kami di event online atau tatap muka gratis.
                        </p>
                    </div>
                </section>

                <section className="events-page-section">
                    <div className="container">
                        {events?.length > 0 && featured ? (
                            <>
                                {/* Acara unggulan: yang paling dekat, lebar penuh */}
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
                                            <span>{eventTimeLabel(featured)}</span>
                                        </span>
                                        <h3 className="event-feature__title">{featured.name}</h3>
                                        <span className="event-venue event-venue--lg">
                                            <MapPin size={15} /> {eventVenueLabel(featured)}
                                        </span>
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
                                                Daftar Sekarang <ArrowRight size={15} />
                                            </a>
                                        </div>
                                    </div>
                                </article>

                                {secondary.length > 0 && (
                                    <>
                                        <div className="events__subheading">
                                            <h3>Event Mendatang</h3>
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
                                                            <span>{eventTimeLabel(event)}</span>
                                                        </span>
                                                        <h4 className="event-compact__title">{event.name}</h4>
                                                        <span className="event-venue">
                                                            <MapPin size={14} /> {eventVenueLabel(event)}
                                                        </span>
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
                                                                Daftar Sekarang <ArrowRight size={14} />
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
                                <p>Belum ada event terdekat.</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer></Footer>
        </>
    )
}
