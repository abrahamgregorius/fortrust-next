import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { requireAdmin, generateAllArticles } from "@/lib/blogAi";

export async function POST(request) {
    // 1. Auth check
    const auth = await requireAdmin(request);
    if (auth.error) {
        return NextResponse.json({ error: auth.error }, { status: auth.status || 401 });
    }

    // 2. Parse request
    const body = await request.json().catch(() => ({}));
    const count = Math.min(parseInt(body.count) || 5, 5);

    try {
        // 3. Generate articles via AI
        const articles = await generateAllArticles(count);

        if (!articles.length) {
            return NextResponse.json(
                { error: "No articles generated. Check Gemini quota and try again." },
                { status: 500 }
            );
        }

        // 4. Save each to Supabase
        const saved = [];
        for (const article of articles) {
            const { data, error } = await supabase
                .from("blogs")
                .insert({
                    title: article.title,
                    title_en: article.title_en,
                    slug: article.slug || `${article.title_en?.toLowerCase().replace(/\s+/g, '-')}`,
                    slug_en: article.slug_en || `${article.title?.toLowerCase().replace(/\s+/g, '-')}`,
                    content: article.content,
                    content_en: article.content_en,
                    topic_notes: article.topic_notes,
                    status: "DRAFT",
                })
                .select("id, title, title_en, slug, slug_en, status, created_at")
                .single();

            if (error) {
                console.error("Supabase insert error:", error.message);
                continue;
            }
            saved.push(data);
        }

        return NextResponse.json({
            success: true,
            count: saved.length,
            articles: saved,
        });
    } catch (e) {
        console.error("generate-articles error:", e);
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
