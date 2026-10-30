export const dynamic = "force-dynamic";

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import TagFilter from "@/components/TagFilter"
import BlogSearch from "@/components/BlogSearch"

export default async function Blog() {
    const [{ data: posts, error }, { data: categories }] = await Promise.all([
        supabase.from("blogs").select("*").eq("status", "PUBLISHED")
            .order("featured_rank", { ascending: true, nullsFirst: false })
            .order("created_at", { ascending: false }),
        supabase.from("categories").select("id, name").order("name"),
    ]);

    if (error) {
        console.error(error);
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
                    <a href="/id/blog" className="lang-toggle-btn">Baca dalam Bahasa Indonesia</a>
                    <BlogSearch posts={posts || []} categories={categories || []} locale="en" />
                    </div>
            </section>

            <TagFilter posts={posts || []} categories={categories || []} locale="en" />
            <Footer></Footer>
        </>
    )
}
