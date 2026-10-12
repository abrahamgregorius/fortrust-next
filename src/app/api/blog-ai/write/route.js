import { NextResponse } from "next/server";
import { requireAdmin, askGeminiWithSearch, parseModelJson, cleanBlogHtml } from "@/lib/blogAi";

// Research plus two ~900-word articles: allow well over a minute.
export const maxDuration = 180;

/**
 * Researches and writes an article answering one question, in Indonesian and
 * English. Returns it to the Create Post form; it is saved only when the admin
 * presses Save Post there.
 */
export async function POST(request) {
    const auth = await requireAdmin(request);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

    let body = {};
    try {
        body = (await request.json()) || {};
    } catch {
        return NextResponse.json({ error: "Say which question to answer." }, { status: 400 });
    }
    const question = String(body.question || "").trim().slice(0, 300);
    const whyNow = String(body.why_now || "").trim().slice(0, 400);
    if (!question) {
        return NextResponse.json({ error: "Say which question to answer." }, { status: 400 });
    }

    const { data: categories } = await auth.db.from("categories").select("id, name").order("id");
    const categoryNames = (categories || []).map((c) => c.name).join(", ");
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    const prompt = `
You write for the blog of Fortrust Education Services, an Indonesian
study-abroad consultancy. Today is ${today}.

Write an article that answers this question for Indonesian students and parents:
"${question}"
${whyNow ? `Why it is timely: ${whyNow}` : ""}

Research it with Google Search first and use only what the sources say.

Rules:
- Indonesian version: friendly but professional, address the reader as "kamu",
  700 to 1000 words. Then a faithful English version of the same article.
- Start with a short intro paragraph that answers the question directly.
- Structure with <h2>/<h3> headings, <p> paragraphs, <ul>/<ol> lists and
  <strong>. No <h1>, no images, no links, no inline styles, no tables.
- Every figure (fees, living costs, deadlines, scores, visa rules) must come
  from the sources and say which year or intake it applies to. Tell the reader
  to confirm it on the official website, since these change.
- Do not invent Fortrust events, statistics, testimonials or promises.
- End with one short paragraph inviting the reader to consult Fortrust for
  personal guidance. No hard selling.

Return ONLY one JSON object, no markdown:
{
  "title": "Indonesian title, max 90 characters, contains the main search keyword",
  "title_en": "English title",
  "content": "Indonesian article as HTML",
  "content_en": "English article as HTML",
  "tags": ["3 to 6 short tags"],
  "category": "exactly one of: ${categoryNames}"
}`;

    try {
        const { text, sources } = await askGeminiWithSearch(prompt);
        const article = parseModelJson(text);
        if (!article || Array.isArray(article)) throw new Error("expected an object");

        const content = cleanBlogHtml(article.content);
        const title = String(article.title || "").trim().slice(0, 200);
        if (!title || !content) throw new Error("empty article");

        let categoryId = body.category_id ?? null;
        if (categoryId == null) {
            const wanted = String(article.category || "").trim().toLowerCase();
            categoryId = (categories || []).find((c) => c.name.toLowerCase() === wanted)?.id ?? null;
        }

        return NextResponse.json({
            title,
            title_en: String(article.title_en || "").trim().slice(0, 200),
            content,
            content_en: cleanBlogHtml(article.content_en),
            tags: (Array.isArray(article.tags) ? article.tags : [])
                .map((t) => String(t).trim().slice(0, 50))
                .filter(Boolean)
                .slice(0, 8),
            category_id: categoryId,
            sources,
        });
    } catch (err) {
        console.error("[blog-ai] write failed:", err);
        return NextResponse.json(
            { error: "Could not write the article just now. Try again." },
            { status: 502 }
        );
    }
}
