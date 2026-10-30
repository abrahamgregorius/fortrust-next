"use client";

import { useEffect, useRef, useState } from "react";

// Dropdown with checkboxes so a post can belong to multiple categories.
// `value` is an array of category ids, `onChange` receives the new array.
export default function MultiCategorySelect({
    categories,
    value = [],
    onChange,
    placeholder = "Select categories…",
}) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);

    // Close the dropdown when clicking outside.
    useEffect(() => {
        const onClickOutside = (e) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, []);

    const toggle = (id) =>
        onChange(value.includes(id) ? value.filter((v) => v !== id) : [...value, id]);

    const selectedNames = categories
        .filter((c) => value.includes(c.id))
        .map((c) => c.name);

    return (
        <div className="relative" ref={wrapRef}>
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="pl-10 pr-3 py-2 w-full text-left border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-between gap-2"
            >
                <span className={`truncate text-sm ${selectedNames.length ? "text-gray-800" : "text-gray-400"}`}>
                    {selectedNames.length ? selectedNames.join(", ") : placeholder}
                </span>
                <svg
                    className={`w-4 h-4 shrink-0 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {open && (
                <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {categories.map((cat) => (
                        <label
                            key={cat.id}
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 cursor-pointer text-sm text-gray-700"
                        >
                            <input
                                type="checkbox"
                                checked={value.includes(cat.id)}
                                onChange={() => toggle(cat.id)}
                                className="accent-indigo-600"
                            />
                            {cat.name}
                        </label>
                    ))}
                    {value.length > 0 && (
                        <div className="border-t border-gray-100 px-3 py-2">
                            <button
                                type="button"
                                onClick={() => onChange([])}
                                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                            >
                                Clear selection
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
