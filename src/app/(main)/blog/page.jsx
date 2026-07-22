export const dynamic = "force-dynamic";

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

export default async function Blog() {
    const { data, error } = await supabase.from("blogs").select("*");

    if (error) {
        console.error(error);
    }

    const [featured, ...rest] = data || [];

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

            <section className="blog-magazine">
                <div className="container">
                    {featured && (
                        <Link href={`/blog/${featured.id}`} className="magazine-hero">
                            <div className="hero-image-wrap">
                                <img
                                    src={featured.image_urls?.[0] || "/placeholder.jpg"}
                                    alt={featured.title}
                                />
                                <div className="hero-overlay">
                                    <span className="hero-category">{featured.category}</span>
                                    <h2 className="hero-title">{featured.title}</h2>
                                    <p className="hero-author">by {featured.author}</p>
                                </div>
                            </div>
                        </Link>
                    )}

                    {rest.length > 0 && (
                        <div className="magazine-grid">
                            {rest.map((post) => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="magazine-card">
                                    <div className="card-image-wrap">
                                        <img
                                            src={post.image_urls?.[0] || "/placeholder.jpg"}
                                            alt={post.title}
                                        />
                                    </div>
                                    <div className="card-body">
                                        <span className="card-category">{post.category}</span>
                                        <h3 className="card-title">{post.title}</h3>
                                        <p className="card-author">by {post.author}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}

                    {data?.length === 0 && (
                        <div className="empty-state">
                            <p>No blog posts yet.</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer></Footer>
        </>
    )
}
