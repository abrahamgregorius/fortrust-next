"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
    const [locale, setLocale] = useState("en");
    const [isInitialized, setIsInitialized] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Initialize locale from localStorage or pathname
    useEffect(() => {
        // Get saved preference from localStorage
        const savedLocale = localStorage.getItem("fortrust-locale");
        
        // Detect current locale from pathname
        const pathLocale = pathname?.startsWith("/id") ? "id" : pathname?.startsWith("/en") ? "en" : null;
        
        // Priority: pathname > localStorage > default (en)
        let initialLocale = pathLocale || savedLocale || "en";
        
        setLocale(initialLocale);
        setIsInitialized(true);
        
        // Save to localStorage if not already set
        if (!savedLocale) {
            localStorage.setItem("fortrust-locale", initialLocale);
        }
    }, []);

    // Update locale when pathname changes
    useEffect(() => {
        if (!isInitialized) return;
        
        const pathLocale = pathname?.startsWith("/id") ? "id" : pathname?.startsWith("/en") ? "en" : "en";
        
        if (pathLocale !== locale) {
            setLocale(pathLocale);
            localStorage.setItem("fortrust-locale", pathLocale);
        }
    }, [pathname, isInitialized]);

    const switchLocale = (newLocale) => {
        if (newLocale === locale) return;

        // Save to localStorage
        localStorage.setItem("fortrust-locale", newLocale);
        setLocale(newLocale);

        // Build new path
        let newPath = pathname;

        // Remove existing locale prefix if any
        if (pathname?.startsWith("/id")) {
            newPath = pathname.replace(/^\/id/, "");
        } else if (pathname?.startsWith("/en")) {
            newPath = pathname.replace(/^\/en/, "");
        }

        // Add new locale prefix (only if not 'en', since 'en' is default)
        if (newLocale === "id") {
            newPath = `/id${newPath || "/"}`;
        } else {
            // For 'en', use root path without prefix
            newPath = newPath || "/";
        }

        // Navigate to new path
        router.push(newPath);
    };

    const getLocalizedPath = (path) => {
        // Remove any existing locale prefix from the path
        let cleanPath = path;
        if (path.startsWith("/id") || path.startsWith("/en")) {
            cleanPath = path.replace(/^\/(id|en)/, "");
        }

        // Ensure path starts with /
        if (!cleanPath.startsWith("/")) {
            cleanPath = `/${cleanPath}`;
        }

        // Add locale prefix (only for 'id', 'en' is default/root)
        if (locale === "id") {
            return `/id${cleanPath}`;
        }
        return cleanPath;
    };

    return (
        <LocaleContext.Provider value={{ locale, switchLocale, getLocalizedPath, isInitialized }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within LocaleProvider");
    }
    return context;
}
