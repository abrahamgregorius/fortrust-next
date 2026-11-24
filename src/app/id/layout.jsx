import { Montserrat } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import "./globals.css"

// Self-hosted via next/font: no render-blocking Google Fonts requests, no
// duplicate downloads, and no reliance on unpkg/font CDNs.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://fortrust.edu"),
  title: {
    default: "Fortrust | Studi ke Luar Negeri, Disederhanakan",
    template: "%s | Fortrust | Studi ke Luar Negeri, Disederhanakan",
  },
  description:
    "Dapatkan konsultasi ahli, aplikasi, visa, dan dukungan pra-keberangkatan untuk studi ke luar negeri di Australia, UK, dan lainnya.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    siteName: "FORTRUST Education Services",
  },
};

export default function IndonesianLayout({ children }) {
  return (
    // next/font variable must sit on <html>, not <body>: the :root-scoped
    // --font-primary chain in globals.css resolves var(--font-montserrat)
    // at :root, so the variable must exist there.
    <html lang="id" className={`${montserrat.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Title + description come from the metadata export above — a
            hardcoded <title> here would duplicate (and shadow) the
            per-page titles from the metadata system. */}
        <link rel="icon" href="/favicon-new.ico" />
      </head>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
