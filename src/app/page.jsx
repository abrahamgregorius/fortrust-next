import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header__container">
          <Link href="index.html" className="header__logo">
            <img
              src="/logo-fortrust.png"
              class="logo-light"
              height="45"
              alt=""
            />
            <img
              src="/logo-white.png"
              class="logo-dark"
              height="45"
              alt=""
            />
          </Link>
          <nav className="nav" id="main-nav">
            <ul className="nav__list">
              <li className="nav-item--dropdown">
                <Link href="#" className="nav__link">
                  Destinations
                  <i data-lucide="chevron-down" className="dropdown-icon"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link href="destination-australia.html">Australia</Link>
                  <Link href="destination-canada.html">Canada</Link>
                  <Link href="destination-china.html">China</Link>
                  <Link href="destination-malaysia.html">Malaysia</Link>
                  <Link href="destination-newzealand.html">New Zealand</Link>
                  <Link href="destination-singapore.html">Singapore</Link>
                  <Link href="destination-switzerland.html">Switzerland</Link>
                  <Link href="destination-uk.html">United Kingdom</Link>
                  <Link href="destination-usa.html">USA</Link>
                </div>
              </li>
              <li className="nav-item--dropdown">
                <Link href="#" className="nav__link">
                  Test-Prep
                  <i data-lucide="chevron-down" className="dropdown-icon"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link href="tests-interest.html">
                    Interest and Aptitude Test
                  </Link>
                  <Link href="tests-language.html">
                    Language Test Preparation
                  </Link>
                  <Link href="tests-standardized.html">
                    Standardized Test Preparation
                  </Link>
                  <Link href="tests-paket.html">Paket A, B, C</Link>
                </div>
              </li>
              <li className="nav-item--dropdown">
                <Link href="#" className="nav__link">
                  Services
                  <i data-lucide="chevron-down" className="dropdown-icon"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link href="services-university.html">
                    University Placement
                  </Link>
                  <Link href="services-studytour.html">Study Tour</Link>
                  <Link href="services-internship.html">
                    Internship Program
                  </Link>
                </div>
              </li>
              <li className="nav-item--dropdown">
                <Link href="community.html" className="nav__link">
                  Alumni
                  <i data-lucide="chevron-down" className="dropdown-icon"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link href="success.html">Success story</Link>
                  <Link href="#">Work Placements</Link>
                  <Link href="#">Join Our Community</Link>
                </div>
              </li>
              <li>
                <Link href="events.html" className="nav__link">
                  Events
                </Link>
              </li>
              <li>
                <Link href="about.html" className="nav__link">
                  Why Us?
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__actions">
            <div className="lang-switcher">
              <span>EN</span> | <Link href="#">ID</Link>
            </div>
            <Link href="contact.html" className="btn btn--primary">
              Free Consultation
            </Link>
            <button
              className="hamburger"
              id="hamburger-btn"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
