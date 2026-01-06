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
  title: "Fortrust | Studi ke Luar Negeri, Disederhanakan",
  description: "Fortrust: Studi ke Luar Negeri, Disederhanakan",
};

export default function IndonesianLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fortrust: Studi ke Luar Negeri, Disederhanakan</title>
        <meta
          name="description"
          content="Dapatkan konsultasi ahli, aplikasi, visa, dan dukungan pra-keberangkatan untuk studi ke luar negeri di Australia, UK, dan lainnya."
        />
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

        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
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
