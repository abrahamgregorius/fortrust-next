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
    default: "Fortrust | Study Abroad, Simplified",
    template: "%s | Fortrust | Study Abroad, Simplified",
  },
  description:
    "FORTRUST Education Services — konsultan dan agensi pendidikan internasional sejak 1994. Urus apply university, visa, akomodasi. Anda tinggal berangkat. Konsultasi gratis.",
  keywords: [
    "agen kuliah luar negeri",
    "agen kuliah luar negeri terbaik",
    "konsultan pendidikan internasional jakarta",
    "study abroad agent jakarta",
    "apply university overseas",
    "student visa agent",
    "fortrust education services",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: "en_US",
    url: "https://fortrust.edu",
    siteName: "FORTRUST Education Services",
    title: "FORTRUST Education Services — Agen Kuliah ke Luar Negeri",
    description: "Konsultan dan agensi pendidikan internasional sejak 1994. Apply, visa, akomodasi — semua kami urus. Anda tinggal berangkat.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FORTRUST Education Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORTRUST Education Services",
    description: "Agen kuliah ke luar negeri. Apply, visa, akomodasi — semua kami urus.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://fortrust.edu",
    languages: {
      "en-US": "https://fortrust.edu/en",
      "id-ID": "https://fortrust.edu/id",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-TJ13MS774N",
  },
};

export default function RootLayout({ children }) {
  return (
    // next/font variable must sit on <html>, not <body>: the :root-scoped
    // --font-primary chain in globals.css resolves var(--font-montserrat)
    // at :root, so the variable must exist there.
    <html lang="id" className={`${montserrat.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-new.ico" />

        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJ13MS774N"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TJ13MS774N');
          `
        }} />

        {/* Organization Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FORTRUST Education Services",
              "description": "Lembaga konsultan dan agensi pendidikan internasional sejak 1994. Membantu siswa Indonesia apply university overseas — apply, visa, akomodasi. Anda tinggal berangkat.",
              "url": "https://fortrust.edu",
              "logo": "https://fortrust.edu/logo-fortrust.png",
              "telephone": "+622112345678",
              "email": "info@fortrust.edu",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Jakarta",
                "addressCountry": "ID"
              },
              "sameAs": [
                "https://instagram.com/fortrustid"
              ],
              "foundingDate": "1994"
            })
          }}
        />
      </head>
      <body>

        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
