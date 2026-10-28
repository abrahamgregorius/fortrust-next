// Server-only helpers for the AI blog writer (/api/blog-ai/*).
//
// The model drafts; a person reviews the draft in the normal Create Post form
// and saves it. Nothing here writes to the `blogs` table.

import { createClient } from "@supabase/supabase-js";

const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// ---------------------------------------------------------------------------
// Who is asking
// ---------------------------------------------------------------------------

/**
 * The signed-in admin, from the Supabase access token in the Authorization
 * header. Returns { user, db } or { error, status }.
 *
 * Every call costs Gemini credit, so these routes are never open the way
 * /api/translate is. If BLOG_AI_ALLOWED_EMAILS is set, only those accounts
 * may use them.
 */
export async function requireAdmin(request) {
    const header = request.headers.get("authorization") || "";
    const token = header.startsWith("Bearer ") ? header.slice(7) : "";
    if (!token) return { error: "Please sign in again.", status: 401 };

    const db = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        { global: { headers: { Authorization: `Bearer ${token}` } } }
    );
    const { data, error } = await db.auth.getUser(token);
    if (error || !data?.user) return { error: "Please sign in again.", status: 401 };

    const allowed = (process.env.BLOG_AI_ALLOWED_EMAILS || "")
        .split(",").map((e) => e.trim().toLowerCase()).filter(Boolean);
    if (allowed.length && !allowed.includes((data.user.email || "").toLowerCase())) {
        return { error: "Your account cannot use the AI writer.", status: 403 };
    }
    return { user: data.user, db };
}

// ---------------------------------------------------------------------------
// Gemini, with Google Search
// ---------------------------------------------------------------------------

/** Calls Gemini with Google Search switched on. Returns { text, sources }. */
export async function askGeminiWithSearch(prompt) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("GEMINI_API_KEY is not set");

    const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            tools: [{ google_search: {} }],
        }),
    });
    if (!res.ok) {
        throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    const data = await res.json();
    const candidate = data.candidates?.[0];
    const text = (candidate?.content?.parts || []).map((p) => p.text || "").join("");

    // The pages Google Search returned to the model, for the reviewer to check
    // the draft against. Not put into the article: they are redirect links
    // that stop working after a while.
    const seen = new Set();
    const sources = [];
    for (const chunk of candidate?.groundingMetadata?.groundingChunks || []) {
        const uri = chunk.web?.uri;
        if (uri && !seen.has(uri)) {
            seen.add(uri);
            sources.push({ title: chunk.web.title || "", url: uri });
        }
    }
    return { text, sources: sources.slice(0, 12) };
}

/** JSON out of a model reply. Search-grounded calls cannot use JSON mode, so
 *  the reply may arrive in a code fence or with a sentence around it. */
export function parseModelJson(text) {
    const t = (text || "").replace(/```json/g, "").replace(/```/g, "").trim();
    const starts = [t.indexOf("{"), t.indexOf("[")].filter((i) => i !== -1);
    if (!starts.length) throw new Error("no JSON in the reply");
    const start = Math.min(...starts);
    const end = Math.max(t.lastIndexOf("}"), t.lastIndexOf("]"));
    return JSON.parse(t.slice(start, end + 1));
}

// ---------------------------------------------------------------------------
// What an article may contain
// ---------------------------------------------------------------------------

// The blog page renders `content` with dangerouslySetInnerHTML, so whatever the
// model writes would run for every visitor. It is reduced to these tags, with
// no attributes except a link's http(s) address, before it reaches the form.
const ALLOWED_TAGS = new Set([
    "p", "br", "h2", "h3", "h4", "strong", "b", "em", "i", "u",
    "ul", "ol", "li", "a", "blockquote",
]);
// Removed together with everything inside them.
const DROP_WITH_CONTENT = new Set([
    "script", "style", "iframe", "object", "embed", "noscript", "template",
    "svg", "math", "head", "title", "textarea", "select",
]);
const TOKEN = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][\w-]*)((?:[^>"']|"[^"]*"|'[^']*')*)>/g;
const HREF = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i;

export function cleanBlogHtml(raw) {
    const html = String(raw || "");
    const out = [];
    const open = [];
    let skipping = null;
    let last = 0;

    const text = (s) => s.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    for (const m of html.matchAll(TOKEN)) {
        if (!skipping) out.push(text(html.slice(last, m.index)));
        last = m.index + m[0].length;

        const [whole, closing, rawName, attrs] = m;
        if (whole.startsWith("<!--")) continue;
        const name = rawName.toLowerCase();

        if (skipping) {
            if (closing && name === skipping) skipping = null;
            continue;
        }
        if (DROP_WITH_CONTENT.has(name)) {
            if (!closing && !/\/\s*$/.test(attrs)) skipping = name;
            continue;
        }
        if (!ALLOWED_TAGS.has(name)) continue;

        if (closing) {
            if (!open.includes(name)) continue;
            while (open.length) {
                const tag = open.pop();
                out.push(`</${tag}>`);
                if (tag === name) break;
            }
            continue;
        }
        if (name === "br") {
            out.push("<br>");
            continue;
        }
        if (name === "a") {
            const href = (attrs.match(HREF)?.slice(1).find((v) => v !== undefined) || "").trim();
            // javascript:, data: and relative links lose the link; the text stays.
            if (!/^https?:\/\//i.test(href)) continue;
            const safe = href.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            out.push(`<a href="${safe}" target="_blank" rel="noopener noreferrer">`);
        } else {
            out.push(`<${name}>`);
        }
        open.push(name);
    }
    if (!skipping) out.push(text(html.slice(last)));
    while (open.length) out.push(`</${open.pop()}>`);
    return out.join("").trim();
}

// ---------------------------------------------------------------------------
// AI Article Generator — research topics + write articles
// ---------------------------------------------------------------------------

import { RESEARCH_SYSTEM_PROMPT, RESEARCH_USER_PROMPT } from "./prompts/researchPrompt";
import { ARTICLE_SYSTEM_PROMPT, ARTICLE_USER_PROMPT } from "./prompts/articlePrompt";

const GEMINI_URL_GEN = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

/** Generate content without Google Search (plain generation) */
async function askGemini(prompt, systemPrompt = null) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("GEMINI_API_KEY is not set");

    const contents = [{ role: "user", parts: [{ text: prompt }] }];
    if (systemPrompt) {
        contents.unshift({ role: "model", parts: [{ text: systemPrompt }] });
    }

    const res = await fetch(GEMINI_URL_GEN, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": key },
        body: JSON.stringify({ contents }),
    });
    if (!res.ok) {
        throw new Error(`Gemini ${res.status}: ${(await res.text()).slice(0, 300)}`);
    }
    const data = await res.json();
    const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("");
    return text;
}

/** Research trending topics using Gemini with Google Search grounding */
export async function researchTopics(count = 5) {
    const fullPrompt = `${RESEARCH_USER_PROMPT}\n\nReturn exactly ${count} topics.`;
    const { text } = await askGeminiWithSearch(`${RESEARCH_SYSTEM_PROMPT}\n\n${fullPrompt}`);
    const cleaned = (text || "").replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const topics = parseModelJson(cleaned);
    return (Array.isArray(topics) ? topics : []).slice(0, count);
}

/** Generate a single article for a given topic */
export async function generateArticle(topic) {
    const prompt = ARTICLE_USER_PROMPT(topic);
    const text = await askGemini(prompt, ARTICLE_SYSTEM_PROMPT);
    const cleaned = (text || "").replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    const article = parseModelJson(cleaned);

    return {
        title: article.title || topic.title,
        title_en: article.title_en || topic.title_en,
        slug: article.slug || "",
        slug_en: article.slug_en || "",
        content: cleanBlogHtml(article.content || ""),
        content_en: cleanBlogHtml(article.content_en || ""),
        image_prompt: String(article.image_prompt || "").trim(),
        topic_notes: topic.topic_notes || "",
        keywords: topic.keywords || [],
    };
}

/** Generate multiple articles (default 5) */
export async function generateAllArticles(count = 5) {
    // Step 1: Research topics
    const topics = await researchTopics(count);
    if (!topics.length) throw new Error("No topics generated");

    // Step 2: Generate each article
    const articles = [];
    for (const topic of topics) {
        try {
            const article = await generateArticle(topic);
            articles.push({
                ...article,
                status: "DRAFT",
            });
        } catch (e) {
            console.error(`Failed to generate article for topic: ${topic.title}`, e.message);
            // Continue with other articles
        }
    }

    return articles;
}
