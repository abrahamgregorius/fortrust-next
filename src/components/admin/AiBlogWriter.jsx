"use client";

import { useState } from "react";
import { Sparkles, TrendingUp, PenLine, Loader2, AlertTriangle, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

/**
 * Finds what students are asking about studying abroad right now and has AI
 * draft an article answering one question. The draft fills the Create Post
 * form below it; nothing is saved until the admin presses Save Post.
 */
export default function AiBlogWriter({ onGenerated }) {
    const [open, setOpen] = useState(true);
    const [focus, setFocus] = useState("");
    const [ownQuestion, setOwnQuestion] = useState("");
    const [questions, setQuestions] = useState(null);
    const [trendSources, setTrendSources] = useState([]);
    const [searching, setSearching] = useState(false);
    const [writing, setWriting] = useState(null);
    const [error, setError] = useState(null);
    const [written, setWritten] = useState(null);

    const call = async (path, body) => {
        const { data } = await supabase.auth.getSession();
        const token = data?.session?.access_token;
        if (!token) throw new Error("Your session has ended. Please sign in again.");
        const res = await fetch(path, {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify(body),
        });
        const json = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(json.error || "Something went wrong. Try again.");
        return json;
    };

    const findTrending = async () => {
        setSearching(true);
        setError(null);
        try {
            const data = await call("/api/blog-ai/trending", { focus });
            setQuestions(data.questions || []);
            setTrendSources(data.sources || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setSearching(false);
        }
    };

    const write = async (question, whyNow = "", categoryId = null) => {
        if (!question.trim()) return;
        setWriting(question);
        setError(null);
        try {
            const article = await call("/api/blog-ai/write", {
                question, why_now: whyNow, category_id: categoryId,
            });
            onGenerated(article);
            setWritten({ question, sources: article.sources || [] });
            setQuestions((prev) => prev?.filter((q) => q.question !== question) ?? prev);
            setOwnQuestion("");
            setOpen(false);
        } catch (err) {
            setError(err.message);
        } finally {
            setWriting(null);
        }
    };

    const input = "px-3 py-2 w-full border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

    return (
        <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left"
            >
                <div>
                    <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
                        <Sparkles className="w-5 h-5 text-indigo-600" /> Write with AI
                    </h2>
                    <p className="text-sm text-gray-500">
                        Find what students are asking right now and let AI draft the article into the form below.
                    </p>
                </div>
                {open ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
            </button>

            {written && (
                <div className="mx-5 mb-5 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-900">
                    <p className="flex items-start gap-2 font-semibold">
                        <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
                        AI draft loaded below. Check every fee, date, score and visa rule against the official source before saving.
                    </p>
                    {written.sources.length > 0 && (
                        <details className="mt-2">
                            <summary className="cursor-pointer text-xs font-semibold">
                                Pages the AI read ({written.sources.length})
                            </summary>
                            <ul className="mt-1 space-y-1">
                                {written.sources.map((s) => (
                                    <li key={s.url}>
                                        <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-indigo-700 hover:underline">
                                            <ExternalLink className="w-3 h-3" /> {s.title || s.url}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    )}
                </div>
            )}

            {open && (
                <div className="px-5 pb-5 space-y-4">
                    {error && (
                        <div className="p-3 rounded-md bg-red-100 text-red-800 text-sm">{error}</div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Trending questions</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                className={input}
                                placeholder="Optional focus, e.g. Australia, scholarships, IELTS"
                                value={focus}
                                onChange={(e) => setFocus(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") { e.preventDefault(); if (!searching) findTrending(); }
                                }}
                            />
                            <button
                                type="button"
                                onClick={findTrending}
                                disabled={searching || writing !== null}
                                className="shrink-0 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 disabled:opacity-50"
                            >
                                {searching ? <Loader2 className="w-4 h-4 animate-spin" /> : <TrendingUp className="w-4 h-4" />}
                                {searching ? "Searching…" : "Find trending questions"}
                            </button>
                        </div>
                    </div>

                    {questions && (
                        <div className="space-y-2">
                            {questions.length === 0 && (
                                <p className="text-sm text-gray-500">Nothing came back. Try again or change the focus.</p>
                            )}
                            {questions.map((q) => (
                                <div key={q.question} className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg border border-gray-200 bg-gray-50">
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold text-gray-800">{q.question}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">{q.why_now}</p>
                                        <div className="flex flex-wrap gap-1.5 mt-1">
                                            {q.category && <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">{q.category}</span>}
                                            {q.audience && <span className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-700">{q.audience}</span>}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => write(q.question, q.why_now, q.category_id)}
                                        disabled={writing !== null}
                                        className="shrink-0 flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 disabled:opacity-50"
                                    >
                                        {writing === q.question ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <PenLine className="w-3.5 h-3.5" />}
                                        {writing === q.question ? "Writing… (about a minute)" : "Write article"}
                                    </button>
                                </div>
                            ))}
                            {trendSources.length > 0 && (
                                <details>
                                    <summary className="cursor-pointer text-xs text-gray-500">
                                        Where these came from ({trendSources.length} pages)
                                    </summary>
                                    <ul className="mt-1 space-y-0.5">
                                        {trendSources.map((s) => (
                                            <li key={s.url}>
                                                <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-indigo-700 hover:underline">
                                                    {s.title || s.url}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Or answer your own question</label>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                className={input}
                                placeholder="e.g. Berapa biaya hidup mahasiswa di Melbourne tahun ini?"
                                value={ownQuestion}
                                onChange={(e) => setOwnQuestion(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") { e.preventDefault(); if (writing === null) write(ownQuestion); }
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => write(ownQuestion)}
                                disabled={writing !== null || !ownQuestion.trim()}
                                className="shrink-0 flex items-center justify-center gap-1.5 px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                            >
                                {writing !== null && writing === ownQuestion ? <Loader2 className="w-4 h-4 animate-spin" /> : <PenLine className="w-4 h-4" />}
                                Write article
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
