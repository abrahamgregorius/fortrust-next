export const dynamic = "force-dynamic";

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { supabase } from "@/lib/supabaseClient"
import TagFilter from "@/components/TagFilter"

export default async function Blog() {
    const [{ data: posts, error }, { data: categories }] = await Promise.all([
        supabase.from("blogs").select("*"),
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
                    <h1>Dari Mimpi Jadi Kenyataan</h1>
                    <p>
                        Simak pengalaman yang telah sukses menjalani perjalanan studi mereka di luar negeri bersama kami.
                    </p>
                </div>
            </section>

            <TagFilter posts={posts || []} categories={categories || []} locale="id" />
            <Footer></Footer>
        </>
    )
}
