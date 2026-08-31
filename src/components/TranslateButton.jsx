"use client";

import { useState } from "react";

export default function TranslateButton({ title, content, onTranslated }) {
    const [translating, setTranslating] = useState(false);
    const [error, setError] = useState(null);

    const handleTranslate = async () => {
        if (!title && !content) return;
        setTranslating(true);
        setError(null);

        try {
            const res = await fetch("/api/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            if (!res.ok) throw new Error("Translation failed");

            const data = await res.json();
            onTranslated(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setTranslating(false);
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <button
                type="button"
                onClick={handleTranslate}
                disabled={translating || (!title && !content)}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
                {translating ? (
                    <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.878 3 8.291l2-2.291z"></path>
                        </svg>
                        Translating...
                    </>
                ) : (
                    "Translate to English"
                )}
            </button>
            {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
    );
}