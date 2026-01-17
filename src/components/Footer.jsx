import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container footer__container">
                    <div className="footer__main">
                        <div className="footer__about">
                            <h4>
                                <img
                                    src="/logo-fortrust.png"
                                    className="logo-dark"
                                    height="50"
                                    alt=""
                                />
                                <img
                                    src="/logo-white.png"
                                    className="logo-light"
                                    height="50"
                                    alt=""
                                />
                            </h4>
                            <p>
                                Your trusted partner in international education
                                for over 30 years.
                            </p>
                            <div className="footer__socials">
                                <Link href="https://www.facebook.com/FortrustId" aria-label="Facebook">
                                    <Facebook></Facebook>
                                </Link>
                                <Link href="https://www.instagram.com/fortrusteducation" aria-label="Instagram">
                                    <Instagram></Instagram>
                                </Link>
                                <Link href="http://tiktok.com/@Fortrustid" aria-label="Tiktok">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 7.917v4.034A9.95 9.95 0 0 1 16 10v4.5a6.5 6.5 0 1 1-8-6.326V12.5a2.5 2.5 0 1 0 4 2V3h4.083A6.005 6.005 0 0 0 21 7.917"
                                        />
                                    </svg>
                                </Link>
                                <Link href="#" aria-label="Youtube">
                                    <Youtube></Youtube>
                                </Link>
                            </div>
                        </div>
                        <div className="footer__links">
                            <h4>Quick Links</h4>
                            <ul>
                                <li>
                                    <Link href="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Offices</Link>
                                </li>
                                <li>
                                    <Link href="/events">Events</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__links">
                            <h4>Destinations</h4>
                            <ul>
                                <li>
                                    <Link href="/destinations/australia">
                                        Australia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/canada">Canada</Link>
                                </li>
                                <li>
                                    <Link href="/destinations/china">China</Link>
                                </li>
                                <li>
                                    <Link href="/destinations/malaysia">
                                        Malaysia
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/newzealand">
                                        New Zealand
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/uk">
                                        United Kingdom
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/switzerland">
                                        Switzerland
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/singapore">
                                        Singapore
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/destinations/usa">USA</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footer__contact">
                            <h4>Contact Us</h4>
                            <p>
                                <Mail></Mail> info@fortrust.com
                            </p>
                            <p>
                                <Phone></Phone> 021-2358 5686
                            </p>
                            <p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                    />
                                </svg>
                                +62 818 282 817 (24/7)
                            </p>
                        </div>
                    </div>
                    <div className="footer__bottom">
                        <p>
                            &copy; <span id="current-year"></span> Fortrust. All
                            rights reserved.
                        </p>
                        <div className="footer__legal">
                            <Link href="/policy/privacy">Privacy Policy</Link>
                            <span>|</span>
                            <Link href="/policy/cookie">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
                <FloatingWhatsApp />
            </footer>
        </>
    );
}
