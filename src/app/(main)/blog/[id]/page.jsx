import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import Link from "next/link"

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }) {
    const { id } = params;
    const { data, error } = await supabase.from("blogs").select("*").eq("id", id).single()

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };


    return (
        <>
            <Navbar></Navbar>
            <main>
                <section className="page-header">
                    <div className="container">
                        <h1>{data.title}</h1>
                        <p>
                            {data.author}, {formatDate(data.created_at)}
                        </p>
                        <div className="story-grid">
                            <div className="story-card">
                                <div className="tags tags-blog"><span>{data.category}</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-content-section">
                    <div className="container text-content-container">

                        <div className="content-block">
                            {
                                data.image_urls && data.image_urls.length > 0 ? (
                                    <img src={data.image_urls[0]} alt={`Image 1`} style={{ maxWidth: '100%' }} />
                                ) : (
                                    <p>No images available.</p>
                                )
                            }
                        </div>

                        <p dangerouslySetInnerHTML={{ __html: data.content }}></p>

                        <div className="content-block">
                            {
                                data.image_urls && data.image_urls.length > 1 ? (
                                    data.image_urls.slice(1).map((url, index) => (
                                        <div key={index} style={{ marginBottom: '1rem' }}>
                                            <img src={url} alt={`Image ${index + 2}`} style={{ maxWidth: '100%' }} />
                                        </div>
                                    ))
                                ) : null
                            }
                        </div>

                        {data?.youtube_url && (
                            <div className="content-block">
                                <div style={{
                                    position: 'relative',
                                    paddingBottom: '56.25%',
                                    height: 0,
                                    overflow: 'hidden',
                                    marginBottom: '1rem'
                                }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${data.youtube_url}?rel=0`}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


            </main>
            <Footer></Footer>

        </>
    )
}