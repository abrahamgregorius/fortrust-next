import { NextResponse } from "next/server";

const TRANSLATE_API = "http://103.126.116.46:5000/translate";

export async function POST(request) {
    try {
        const { title, content } = await request.json();

        if (!title && !content) {
            return NextResponse.json({ error: "title or content required" }, { status: 400 });
        }

        const results = {};

        // Translate title (text format, then slugify)
        if (title) {
            const titleRes = await fetch(TRANSLATE_API, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    q: title,
                    source: "id",
                    target: "en",
                    format: "text",
                }),
            });
            const titleData = await titleRes.json();
            results.title_en = titleData.translatedText;

            // Slugify the translated title
            results.slug_en = titleData.translatedText
                .toString()
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^\w\-]+/g, "")
                .replace(/\-\-+/g, "-")
                || `blog-${Date.now()}`;
        }

        // Translate content (HTML format — preserves tags)
        if (content) {
            const contentRes = await fetch(TRANSLATE_API, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    q: content,
                    source: "id",
                    target: "en",
                    format: "html",
                }),
            });
            const contentData = await contentRes.json();
            results.content_en = contentData.translatedText;
        }

        return NextResponse.json(results);
    } catch (err) {
        console.error("Translate API error:", err);
        return NextResponse.json({ error: "Translation failed" }, { status: 500 });
    }
}