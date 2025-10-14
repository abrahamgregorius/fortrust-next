import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabaseClient";

export default async function SuccessStories() {
    const { data: testimonials, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false })

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
                            <div className="card story-card" data-tags="uk,business">
                                <img
                                    src="./public/people/Charlotte-Erika-Javly.jpg"
                                    alt="Photo of Charlotte Erika Javly"
                                />
                                <div className="card__content">
                                    <blockquote>
                                        "Sangat membantu dalam memilih jurusan dan sekolah yang cocok
                                        berdasarkan dengan jurusannya. Counsellor juga sangat membantu
                                        sepanjang proses registrasi ke sekolah tersebut juga
                                        memberikan informasi yang detail."
                                    </blockquote>
                                    <p className="author">- Charlotte Erika Javly, Amity Global Institute - Finance and Accounting</p>
                                    <div className="tags"><span>Singapore</span><span>Finance</span></div>
                                </div>
                            </div>
                            <div className="card story-card" data-tags="australia,engineering">
                                <img src="./public/people/Joshua-Moshe-Djuandi.jpg" alt="Photo" />
                                <div className="card__content">
                                    <blockquote>
                                        "Fortrust made the whole process of deciding on a career that
                                        future proof and picking the right university program super
                                        easy. Not only did they consider what I wanted to study, but
                                        they also made sure it fit our budget."
                                    </blockquote>
                                    <p className="author">
                                        - Joshua Moshe Djuandi, Teesside University - Bachelor of
                                        Artificial Intelligence
                                    </p>
                                    <div className="tags">
                                        <span>UK</span><span>Artificial Intelligence</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card story-card" data-tags="australia,business">
                                <img src="./public/people/Listiawati.jpg" alt="Photo" />
                                <div className="card__content">
                                    <blockquote>
                                        "Fortrust provided excellent support throughout my University
                                        of Melbourne application process. Their quick responses and
                                        insightfuil guidance made the entire experience smooth and
                                        stress-free. They were always available to answer questions,
                                        offering personalized advice and ensuring I understood each
                                        step. Highly recommend their efficient and professional
                                        service!"
                                    </blockquote>
                                    <p className="author">
                                        - Listiawati, University of Melbourne - Bachelor of Commerce
                                    </p>
                                    <div className="tags">
                                        <span>Australia</span><span>Commerce</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card story-card" data-tags="australia,business">
                                <img
                                    src="./public/people/Oltariani-Laswinta-Fitri.jpg"
                                    alt="Photo"
                                />
                                <div className="card__content">
                                    <blockquote>
                                        "All good with Fortrust, I got advice and suggestions that I
                                        needed during application to NZ universities. Fortrust staff,
                                        mbak Sarah also have assisted me throughout my application
                                        journey to several universities until I decided AIS is the
                                        most suitable for me. I'm thankful to be given the opportunity
                                        to live my NZ dreams with my family. Thank you, Fortrust!"
                                    </blockquote>
                                    <p className="author">
                                        - Oltariani Laswinta Fitri, Auckland Institute of Studies -
                                        Master of Business
                                    </p>
                                    <div className="tags">
                                        <span>Australia</span><span>Business</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer></Footer>

        </>
    )
}