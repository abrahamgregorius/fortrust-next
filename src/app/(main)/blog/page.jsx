import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export default async function Blog() {
    const { data, error } = await supabase.from("blogs").select("*")
    if (error) {
        alert(error)
    } else {
        console.log(data)
    }


    return (
        <>
            <Navbar></Navbar>
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
                        {data?.map((t) => (
                            <Link
                                href={`/blog/${t.id}`}
                                key={t.id}
                                className="card story-card rounded-2xl shadow-md overflow-hidden"
                            >
                                <img
                                    src={t.image_urls[0] || "/placeholder.jpg"}
                                    alt={`Photo of ${t.person_name}`}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="card__content p-4">
                                    <p className="author font-semibold text-sm text-gray-900">
                                        {t.title}
                                    </p>
                                    by {t.author}
                                    <div className="tags"><span>{t.category}</span></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </>
    )
}