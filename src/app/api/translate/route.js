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
// ---------------------------------------------------------------------------

export async function POST(request) {
    try {
        const { title, content } = await request.json();

        if (!title && !content) {
            return NextResponse.json({ error: "title or content required" }, { status: 400 });
        }

        const key = process.env.GEMINI_API_KEY;
        if (!key) {
            return NextResponse.json({ error: "GEMINI_API_KEY is not configured" }, { status: 500 });
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

        return NextResponse.json({ title_en, slug_en, content_en });
    } catch (err) {
        console.error("[/api/translate]", err);
        return NextResponse.json({ error: err.message || "Translation failed" }, { status: 500 });
    }
}
