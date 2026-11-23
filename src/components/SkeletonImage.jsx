"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

// next/image (fill) with a shimmer placeholder that covers the container
// until the image has finished loading. Pass `sizes` so the optimizer can
// pick the right width for the viewport.
//
// Pass `mobileSrc` to serve a separate mobile crop, hero-banner style:
// a <picture><source media> element swaps the source client-side so only
// the variant matching the viewport is downloaded. When `mobileSrc` is
// omitted the component behaves exactly as before (desktop image only).
export default function SkeletonImage({ src, mobileSrc, alt = "", sizes }) {
    const [loaded, setLoaded] = useState(false);
    const ref = useCallback((node) => {
        // Cached images can finish before hydration, in which case onLoad
        // never fires — complete images are revealed immediately instead.
        if (node?.complete) setLoaded(true);
    }, []);
    const image = (
        <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            ref={ref}
            className="skeleton-img"
        />
    );
    if (mobileSrc) {
        return (
            <>
                {!loaded && <span className="img-skeleton" aria-hidden="true" />}
                {/* 767px matches the events/content mobile breakpoint in globals.css */}
                <picture>
                    <source media="(max-width: 767px)" srcSet={mobileSrc} />
                    {image}
                </picture>
            </>
        );
    }
    return (
        <>
            {!loaded && <span className="img-skeleton" aria-hidden="true" />}
            {image}
        </>
    );
}
