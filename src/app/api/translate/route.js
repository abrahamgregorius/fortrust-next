import { NextResponse } from "next/server";
import { cleanBlogHtml } from "@/lib/blogAi";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** JSON out of a model reply, same approach as blogAi.js */
function parseModelJson(text) {
    const t = (text || "").replace(/```json/g, "").replace(/```/g, "").trim();
    const starts = [t.indexOf("{"), t.indexOf("[")].filter((i) => i !== -1);
    if (!starts.length) throw new Error("no JSON in the reply");
    const start = Math.min(...starts);
    const end = Math.max(t.lastIndexOf("}"), t.lastIndexOf("]"));
    return JSON.parse(t.slice(start, end + 1));
}

// ---------------------------------------------------------------------------
// POST /api/translate
// Translates Indonesian title + HTML content to English using Gemini.
// Keeps the HTML structure intact in the content field.
// Also accepts { tags: [...] } to translate SEO keywords only (used when a
// post is saved with tags but no English translation of them yet).
// ---------------------------------------------------------------------------

export async function POST(request) {
    try {
        const { title, content, tags } = await request.json();

        const hasArticle = Boolean(title || content);
        const hasTags = Array.isArray(tags) && tags.length > 0;

        if (!hasArticle && !hasTags) {
            return NextResponse.json({ error: "title, content or tags required" }, { status: 400 });
        }

        const key = process.env.GEMINI_API_KEY;
        if (!key) {
            return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
        }

        // --- SEO keywords only: a small, cheap call -----------------------
        let tag_en;
        if (hasTags) {
            const tagsPrompt = `
You are a professional translator. Translate the following Indonesian SEO keywords to English.

Rules:
- Translate EACH keyword below to its natural English equivalent.
- Keep the SAME NUMBER of keywords, in the SAME ORDER.
- Keep them short (max 5 words each); these are blog tags/keywords.
- Do NOT add, merge or drop keywords.
- Return ONLY a JSON object, no markdown, no explanation:
{ "tag_en": ["keyword 1", "keyword 2", ...] }

Input keywords:
<tags>
${tags.join("\n")}
</tags>
`.trim();

            const res = await fetch(GEMINI_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json", "x-goog-api-key": key },
                body: JSON.stringify({
                    contents: [{ role: "user", parts: [{ text: tagsPrompt }] }],
                }),
            });

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`Gemini ${res.status}: ${errText.slice(0, 300)}`);
            }

            const data = await res.json();
            const rawText = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
            const parsed = parseModelJson(rawText);

            // Same normalization as the AI writer: trim, cap length, cap count.
            tag_en = (Array.isArray(parsed.tag_en) ? parsed.tag_en : [])
                .map((t) => String(t).trim().slice(0, 50))
                .filter(Boolean)
                .slice(0, 8);

            if (!tag_en.length) throw new Error("model returned no tags");
        }

        // --- Article body (existing behaviour) ----------------------------
        if (!hasArticle) {
            return NextResponse.json({ tag_en });
        }

        // Build a prompt that tells Gemini to translate both fields and return clean JSON.
        const prompt = `
You are a professional translator. Translate the following Indonesian text to English.

Rules:
- Translate the title (in <title> tags) and content (in <content> tags) below.
- The content is HTML; preserve all tags (<p>, <h2>, <h3>, <ul>, <ol>, <li>, <strong>, <em>, <a>, <br>, <blockquote>) and their structure.
- For <a> tags, translate the link text but keep the href attribute unchanged.
- Do NOT invent or add any new content — translate only what is given.
- Return ONLY a JSON object, no markdown, no explanation:
{
  "title_en": "the English title, max 200 chars",
  "content_en": "the English content as HTML"
}

Input:
<title>${title || "(no title)"}</title>
<content>${content || ""}</content>
`.trim();

        const res = await fetch(GEMINI_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-goog-api-key": key },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: prompt }] }],
            }),
        });

        if (!res.ok) {
            const errText = await res.text();
            throw new Error(`Gemini ${res.status}: ${errText.slice(0, 300)}`);
        }

        const data = await res.json();
        const rawText = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
        const parsed = parseModelJson(rawText);

        const title_en = String(parsed.title_en || "").trim().slice(0, 200);
        const content_en = cleanBlogHtml(parsed.content_en || "");

        // Slugify the translated title
        const slug_en = title_en
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            || `blog-${Date.now()}`;

        return NextResponse.json({ title_en, slug_en, content_en, ...(tag_en ? { tag_en } : {}) });
    } catch (err) {
        console.error("[/api/translate]", err);
        return NextResponse.json({ error: err.message || "Translation failed" }, { status: 500 });
    }
}
