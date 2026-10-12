import { NextResponse } from "next/server";
import { requireAdmin, askGeminiWithSearch, parseModelJson } from "@/lib/blogAi";

// A search-grounded call can take most of a minute.
export const maxDuration = 120;

/**
 * Questions Indonesian students and parents are asking about studying abroad
 * this month, each a candidate article.
 *
 * Google Trends, AnswerThePublic and TikTok have no API we can call without a
 * paid account, so the model searches the web for what is being asked and
 * reported now. It is a list of suggestions for a person to pick from.
 */
export async function POST(request) {
    const auth = await requireAdmin(request);
    if (auth.error) return NextResponse.json({ error: auth.error }, { status: auth.status });

    let focus = "";
    try {
        focus = String((await request.json())?.focus || "").trim().slice(0, 200);
    } catch {
        // No body is fine: no focus.
    }

    const [{ data: categories }, { data: posts }] = await Promise.all([
        auth.db.from("categories").select("id, name").order("id"),
        auth.db.from("blogs").select("title").order("created_at", { ascending: false }).limit(80),
    ]);
    const categoryNames = (categories || []).map((c) => c.name).join(", ");
    const already = (posts || []).map((p) => `- ${p.title}`).join("\n") || "- (none yet)";
    const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

    const prompt = `
You are the content strategist for Fortrust, an Indonesian study-abroad
consultancy (university placement in Australia, the UK, the USA, Canada, New
Zealand, Singapore, Malaysia and elsewhere; IELTS/TOEFL/SAT prep). Today is ${today}.

Use Google Search to find what Indonesian high-school students, university
students and their parents are searching for and asking about studying abroad
RIGHT NOW, in the last 30 days. Look for: student-visa policy changes,
scholarship rounds opening or closing (LPDP, AAS, Chevening, ASEAN, university
scholarships), new university rankings, changes to English tests, cost of
living and tuition news, intake deadlines, part-time and post-study work rules,
and education topics trending on Google Trends Indonesia, TikTok and Instagram.
${focus ? `Focus especially on: ${focus}` : ""}

Already on the blog. Do NOT suggest these again:
${already}

Return ONLY a JSON array of 8 objects, most timely first. No markdown.
[{
  "question": "the question in Indonesian, phrased the way a student would type it into Google",
  "why_now": "one sentence in Indonesian: what happened recently that makes this timely, with the date",
  "category": "exactly one of: ${categoryNames}",
  "audience": "Siswa SMA | Mahasiswa | Orang tua"
}]`;

    try {
        const { text, sources } = await askGeminiWithSearch(prompt);
        const items = parseModelJson(text);
        if (!Array.isArray(items)) throw new Error("expected a list");

        const idByName = new Map((categories || []).map((c) => [c.name.toLowerCase(), c.id]));
        const questions = items
            .filter((q) => q && String(q.question || "").trim())
            .slice(0, 10)
            .map((q) => {
                const category = String(q.category || "").trim();
                return {
                    question: String(q.question).trim().slice(0, 300),
                    why_now: String(q.why_now || "").trim().slice(0, 400),
                    category,
                    category_id: idByName.get(category.toLowerCase()) ?? null,
                    audience: String(q.audience || "").trim().slice(0, 60),
                };
            });
        return NextResponse.json({ questions, sources });
    } catch (err) {
        console.error("[blog-ai] trending failed:", err);
        return NextResponse.json(
            { error: "Could not find trending topics just now. Try again." },
            { status: 502 }
        );
    }
}
