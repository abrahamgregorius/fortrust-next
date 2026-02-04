import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function SuccessStories() {
    const { data: testimonials, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("display_order", { ascending: true })

    if (error) {
        console.error(error)
        return <p>Error loading testimonials.</p>
    }


    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>Dari Mimpi Menjadi Kenyataan</h1>
                        <p>
                            Dengarkan kisah mahasiswa yang berhasil menempuh perjalanan studi mereka bersama kami.
                        </p>
                    </div>
                </section>

                <section className="stories-section">
                    <div className="container">
                        <div className="story-filters">
                            <button className="filter-tag active" data-filter="all">
                                Semua Cerita
                            </button>
                        </div>

                        <div className="story-grid">
                            {testimonials?.map((t) => (
                                <div
                                    key={t.id}
                                    className="flip-card"
                                    data-tags={t.person_institution?.toLowerCase() || ""}
                                >
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img
                                                src={t.image_url || "/placeholder.jpg"}
                                                alt={`Photo of ${t.person_name}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flip-card-back">
                                            <div className="testimonial-content">
                                                <p>
                                                    "{t.testimonial}"
                                                </p>
                                                <div className="testimonial-meta">
                                                    <p className="author">
                                                        {t.person_name}
                                                        {t.person_institution && (
                                                            <span className="institution">{t.person_institution}</span>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}