import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function SuccessStories() {
    const { data: testimonials, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false })

    if (error) {
        console.error("❌ Error loading testimonials:", error)
        return <p>Error loading testimonials.</p>
    }

    return (
        <>
            <Navbar></Navbar>

            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>From Dream to Reality</h1>
                        <p>
                            Hear from students who have successfully navigated their study
                            abroad journey with us.
                        </p>
                    </div>
                </section>

                <section className="stories-section">
                    <div className="container">
                        <div className="story-filters">
                            <button className="filter-tag active" data-filter="all">
                                All Stories
                            </button>
                        </div>

                        <div className="story-grid">
                            {testimonials?.map((t) => (
                                <div
                                    key={t.id}
                                    className="card story-card rounded-2xl shadow-md overflow-hidden"
                                    data-tags={t.person_institution?.toLowerCase() || ""}
                                >
                                    <img
                                        src={t.image_url || "/placeholder.jpg"}
                                        alt={`Photo of ${t.person_name}`}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="card__content p-4">
                                        <blockquote className="italic mb-3 text-gray-700">
                                            “{t.testimonial}”
                                        </blockquote>
                                        <p className="author font-semibold text-sm text-gray-900">
                                            - {t.person_name}, {t.person_institution}
                                        </p>
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