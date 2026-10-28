import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { requireAdmin, generateAllArticles } from "@/lib/blogAi";

/**
 * Cron / automation auth.
 *
 * A scheduled job has no Supabase session, so it cannot send an admin
 * Bearer token. It can instead send the shared secret from
 * CRON_SECRET in the x-cron-secret header.
 */
function isCronRequest(request) {
    const secret = process.env.CRON_SECRET;
    if (!secret) return false;
    const provided = request.headers.get("x-cron-secret") || "";
    return provided.length > 0 && provided === secret;
}

/** How many articles have already been created today (server timezone). */
async function countCreatedToday() {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const { count, error } = await supabase
        .from("blogs")
        .select("id", { count: "exact", head: true })
        .gte("created_at", startOfDay.toISOString());
    if (error) {
        console.error("countCreatedToday error:", error.message);
        return null;
    }
    return count || 0;
}

export async function POST(request) {
    // 1. Auth check — admin session OR cron shared secret
    if (!isCronRequest(request)) {
        const auth = await requireAdmin(request);
        if (auth.error) {
            return NextResponse.json({ error: auth.error }, { status: auth.status || 401 });
        }
    }

    // 2. Parse request
    const body = await request.json().catch(() => ({}));
    const count = Math.min(parseInt(body.count) || 5, 5);

    // 3. Guard — never exceed 5 articles per day
    const createdToday = await countCreatedToday();
    if (createdToday !== null && createdToday >= count) {
        return NextResponse.json({
            success: true,
            skipped: true,
            reason: "Daily limit reached",
            createdToday,
            count: 0,
            articles: [],
        });
    }

    try {
        // 4. Generate articles via AI
        const articles = await generateAllArticles(count);

        if (!articles.length) {
            return NextResponse.json(
                { error: "No articles generated. Check Gemini quota and try again." },
                { status: 500 }
            );
        }

        // 5. Save each to Supabase
        const saved = [];
        for (const article of articles) {
            const { data, error } = await supabase
                .from("blogs")
                .insert({
                    title: article.title,
                    title_en: article.title_en,
                    slug: article.slug || `${article.title_en?.toLowerCase().replace(/\s+/g, "-")}`,
                    slug_en: article.slug_en || `${article.title?.toLowerCase().replace(/\s+/g, "-")}`,
                    content: article.content,
                    content_en: article.content_en,
                    image_prompt: article.image_prompt || null,
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
