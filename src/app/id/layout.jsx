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
      </head>
      <body className={`${montserrat.variable}`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
