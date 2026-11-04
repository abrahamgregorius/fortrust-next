"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

// next/image (fill) with a shimmer placeholder that covers the container
// until the image has finished loading. Pass `sizes` so the optimizer can
// pick the right width for the viewport.
export default function SkeletonImage({ src, alt = "", sizes }) {
    const [loaded, setLoaded] = useState(false);
    const ref = useCallback((node) => {
        // Cached images can finish before hydration, in which case onLoad
        // never fires — complete images are revealed immediately instead.
        if (node?.complete) setLoaded(true);
    }, []);
    return (
        <>
            {!loaded && <span className="img-skeleton" aria-hidden="true" />}
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
        </>
    );
}
