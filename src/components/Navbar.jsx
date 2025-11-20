"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const pathname = usePathname();

    // Detect if we're on Indonesian locale pages
    const isIndonesian = pathname?.startsWith("/id");
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
                            {/* Dropdown 1 */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 0 ? "active" : ""
                                    }`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(0);
                                    }}
                                >
                                    Destinations
                                    <ChevronDown style={{ margin: "0 5px" }} size={13} />
                                </Link>
                                <div className="dropdown-menu">
                                    <Link href={`${localePrefix}/destinations/australia`} onClick={closeMenu}>
                                        Australia
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/canada`} onClick={closeMenu}>
                                        Canada
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/china`} onClick={closeMenu}>
                                        China
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/malaysia`} onClick={closeMenu}>
                                        Malaysia
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/newzealand`} onClick={closeMenu}>
                                        New Zealand
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/singapore`} onClick={closeMenu}>
                                        Singapore
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/switzerland`} onClick={closeMenu}>
                                        Switzerland
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/uk`} onClick={closeMenu}>
                                        United Kingdom
                                    </Link>
                                    <Link href={`${localePrefix}/destinations/usa`} onClick={closeMenu}>
                                        USA
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 2 */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 1 ? "active" : ""
                                    }`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(1);
                                    }}
                                >
                                    Test-Prep
                                    <ChevronDown style={{ margin: "0 5px" }} size={13} />
                                </Link>
                                <div className="dropdown-menu">
                                    <Link href={`${localePrefix}/tests/interest`} onClick={closeMenu}>
                                        Interest and Aptitude Test
                                    </Link>
                                    <Link href={`${localePrefix}/tests/language-prep`} onClick={closeMenu}>
                                        Language Prep (IELTS, TOEFL, HSK)
                                    </Link>
                                    <Link href={`${localePrefix}/tests/standardized`} onClick={closeMenu}>
                                        Standardized Test Prep (SAT, GMAT, CSCA)
                                    </Link>
                                    <Link href={`${localePrefix}/tests/paket`} onClick={closeMenu}>
                                        Paket A, B, C
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 3 */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 2 ? "active" : ""
                                    }`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(2);
                                    }}
                                >
                                    Services
                                    <ChevronDown style={{ margin: "0 5px" }} size={13} />
                                </Link>
                                <div className="dropdown-menu">
                                    <Link href={`${localePrefix}/services/university`} onClick={closeMenu}>
                                        University Placement
                                    </Link>
                                    <Link href={`${localePrefix}/services/study-tour`} onClick={closeMenu}>
                                        Study Tour
                                    </Link>
                                    <Link href={`${localePrefix}/services/internship`} onClick={closeMenu}>
                                        Internship Program
                                    </Link>
                                </div>
                            </li>

                            {/* Dropdown 4 */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 3 ? "active" : ""
                                    }`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(3);
                                    }}
                                >
                                    Alumni
                                    <ChevronDown style={{ margin: "0 5px" }} size={13} />
                                </Link>
                                <div className="dropdown-menu">
                                    <Link href={`${localePrefix}/alumni/success-stories`} onClick={closeMenu}>
                                        Success story
                                    </Link>
                                    <Link href="#" onClick={closeMenu}>
                                        Work Placements
                                    </Link>
                                    <Link href="#" onClick={closeMenu}>
                                        Join Our Community
                                    </Link>
                                </div>
                            </li>

                            {/* Normal Links */}
                            <li>
                                <Link href={`${localePrefix}/events`} className="nav__link" onClick={closeMenu}>
                                    Events
                                </Link>
                            </li>

                            {/* Dropdown 5 - Why Us? */}
                            <li
                                className={`nav-item--dropdown ${activeDropdown === 4 ? "active" : ""
                                    }`}
                            >
                                <Link
                                    href="#"
                                    className="nav__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown(4);
                                    }}
                                >
                                    Why Us?
                                    <ChevronDown style={{ margin: "0 5px" }} size={13} />
                                </Link>
                                <div className="dropdown-menu">
                                    <Link href={`${localePrefix}/about`} onClick={closeMenu}>
                                        About
                                    </Link>
                                    <Link href={`${localePrefix}/blog`} onClick={closeMenu}>
                                        Blog
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    <div className="header__actions">
                        <div className="lang-switcher">
                            {isIndonesian ? (
                                <>
                                    <Link href={pathname.replace(/^\/id/, "") || "/"}>EN</Link> | <span>ID</span>
                                </>
                            ) : (
                                <>
                                    <span>EN</span> | <Link href={`/id${pathname}`}>ID</Link>
                                </>
                            )}
                        </div>
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
