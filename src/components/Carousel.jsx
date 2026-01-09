"use client";

import { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Carousel({ data, renderItem, className = "" }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % data.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);

    if (!data || data.length === 0) return null;

    return (
        <div className={`carousel-mobile ${className}`}>
            <div className="carousel">
                <div className="card">
                    {renderItem(data[currentIndex], currentIndex)}
                </div>
                <div className="controls">
                    <button className="arrow prev" onClick={prev}>
                        <ArrowLeftIcon />
                    </button>
                    <button className="arrow next" onClick={next}>
                        <ArrowRightIcon />
                    </button>
                </div>
                <div className="indicators">
                    {data.map((_, idx) => (
                        <div
                            key={idx}
                            className={`dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(idx)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}