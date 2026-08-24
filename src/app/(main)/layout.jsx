import { Geist, Geist_Mono } from "next/font/google";
import { LocaleProvider } from "@/contexts/LocaleContext";
import PopupBanner from "@/components/PopupBanner";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-new.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />

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

        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LocaleProvider>
          <PopupBanner />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
