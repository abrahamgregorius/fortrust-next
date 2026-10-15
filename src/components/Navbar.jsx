"use client";

import {
    ChevronDown,
    Menu,
    X,
    Globe,
    MapPin,
    Compass,
    Languages,
    GraduationCap,
    ClipboardList,
    Building2,
    Plane,
    Users,
    Heart,
    Calendar,
    BookOpen,
    Info,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/contexts/LocaleContext";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();
    const { locale, switchLocale, getLocalizedPath } = useLocale();

    // Detect if we're on Indonesian locale pages
    const isIndonesian = locale === "id";
    const localePrefix = isIndonesian ? "/id" : "";

    // Toggle hamburger menu
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setActiveDropdown(null); // close dropdowns if menu closed
    };

    // Handle dropdown toggle
    const toggleDropdown = (index) => {
        if (window.innerWidth <= 1024) {
            setActiveDropdown((prev) => (prev === index ? null : index));
        }
    };

    // Close menu on normal link click (not dropdown parent)
    const closeMenu = () => {
        setMenuOpen(false);
        setActiveDropdown(null);
    }; 

    return (
        <>
            <header className="header">
                <div className="container header__container">
                    <Link href={localePrefix || "/"} className="header__logo">
                        <img
                            src="/logo-fortrust.png"
                            className="logo-light"
                            height="45"
                            alt=""
                        />
                        <img
                            src="/logo-white.png"
                            className="logo-dark"
                            height="45"
                            alt=""
                        />
                    </Link>

                    <nav className={`nav ${menuOpen ? "active" : ""}`} id="main-nav">
                        <ul className="nav__list">
                            {/* Dropdown 1 - Destinations */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 0 ? "active" : ""}`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link nav__link--icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(0);
                                    }}
                                >
                                    <Globe size={15} />
                                    Destinations
                                    <ChevronDown size={12} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu--grid">
                                    <Link href={`${localePrefix}/destinations/australia`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>Australia</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/canada`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>Canada</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/china`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>China</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/malaysia`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>Malaysia</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/newzealand`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>New Zealand</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/singapore`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>Singapore</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/switzerland`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>Switzerland</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/uk`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>United Kingdom</span>
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/usa`} onClick={closeMenu} className="dropdown-item">
                                        <MapPin size={14} />
                                        <span>USA</span>
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 2 - Test-Prep */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 1 ? "active" : ""}`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link nav__link--icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(1);
                                    }}
                                >
                                    <GraduationCap size={15} />
                                    Test-Prep
                                    <ChevronDown size={12} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu--grid">
                                    <Link href={`${localePrefix}/tests/interest`} onClick={closeMenu} className="dropdown-item">
                                        <Compass size={14} />
                                        <span>Interest and Aptitude Test</span>
                                    </Link>
                                    <Link href={`${localePrefix}/tests/language-prep`} onClick={closeMenu} className="dropdown-item">
                                        <Languages size={14} />
                                        <span>Language Prep (IELTS, TOEFL, HSK)</span>
                                    </Link>
                                    <Link href={`${localePrefix}/tests/standardized`} onClick={closeMenu} className="dropdown-item">
                                        <GraduationCap size={14} />
                                        <span>Standardized Test Prep (SAT, GMAT, CSCA)</span>
                                    </Link>
                                    <Link href={`${localePrefix}/tests/paket`} onClick={closeMenu} className="dropdown-item">
                                        <ClipboardList size={14} />
                                        <span>Paket A, B, C</span>
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 3 - Services */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 2 ? "active" : ""}`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link nav__link--icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(2);
                                    }}
                                >
                                    <Building2 size={15} />
                                    Services
                                    <ChevronDown size={12} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu--grid">
                                    <Link href={`${localePrefix}/services/university`} onClick={closeMenu} className="dropdown-item">
                                        <Building2 size={14} />
                                        <span>University Placement</span>
                                    </Link>
                                    <Link href={`${localePrefix}/services/study-tour`} onClick={closeMenu} className="dropdown-item">
                                        <Plane size={14} />
                                        <span>Study Tour</span>
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 4 - Alumni */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 3 ? "active" : ""}`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link nav__link--icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(3);
                                    }}
                                >
                                    <Users size={15} />
                                    Alumni
                                    <ChevronDown size={12} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu--grid">
                                    <Link href={`${localePrefix}/alumni/success-stories`} onClick={closeMenu} className="dropdown-item">
                                        <Heart size={14} />
                                        <span>Success Stories</span>
                                    </Link>
                                    <Link href="#" onClick={closeMenu} className="dropdown-item">
                                        <Users size={14} />
                                        <span>Join Our Community</span>
                                    </Link>
                                </div>
                            </li>

                            {/* Normal Links */}
                            <li>
                                <Link href={`${localePrefix}/events`} className="nav__link nav__link--icon" onClick={closeMenu}>
                                    <Calendar size={15} />
                                    Events
                                </Link>
                            </li>

                            {/* Dropdown 5 - Why Us? */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 4 ? "active" : ""}`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link nav__link--icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(4);
                                    }}
                                >
                                    <Info size={15} />
                                    Why Us?
                                    <ChevronDown size={12} />
                                </Link>
                                <div className="dropdown-menu dropdown-menu--grid">
                                    <Link href={`${localePrefix}/about`} onClick={closeMenu} className="dropdown-item">
                                        <Building2 size={14} />
                                        <span>About</span>
                                    </Link>
                                    <Link href={`${localePrefix}/blog`} onClick={closeMenu} className="dropdown-item">
                                        <BookOpen size={14} />
                                        <span>Blog</span>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        {!pathname.startsWith("/blog") && !pathname.startsWith("/id/blog") && (
                            <div className="lang-switcher">
                            <button
                                onClick={() => switchLocale("en")}
                                className={locale === "en" ? "active" : ""}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontWeight: locale === "en" ? "bold" : "normal",
                                    color: locale === "en" ? "var(--color-primary)" : "inherit"
                                }}
                            >
                                EN
                            </button>
                            <span style={{ margin: "0 8px" }}>|</span>
                            <button
                                onClick={() => {
                                    // Prevent switching to ID if on contact page
                                    if (pathname.includes('/contact')) return;
                                    switchLocale("id");
                                }}
                                className={locale === "id" ? "active" : ""}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: pathname.includes('/contact') ? "not-allowed" : "pointer",
                                    fontWeight: locale === "id" ? "bold" : "normal",
                                    color: locale === "id" ? "var(--color-primary)" : "inherit",
                                    opacity: pathname.includes('/contact') ? 0.5 : 1
                                }}
                                disabled={pathname.includes('/contact')}
                            >
                                ID
                            </button>
                        </div>
                        )}
                        <Link href={`${localePrefix}/contact`} className="btn btn--primary">
                            Free Consultation
                        </Link>
                        <button
                            className="hamburger"
                            id="hamburger-btn"
                            aria-label="Toggle Menu"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}
