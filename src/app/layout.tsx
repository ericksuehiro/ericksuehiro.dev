import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header";
import { I18nProvider } from "./i18n/context";
import Footer from "./components/footer";

const SITE_URL = "https://ericksuehiro.dev";
const SITE_TITLE = "Erick Suehiro | Software Engineer";
const SITE_DESCRIPTION =
  "Portfolio de Erick Suehiro com projetos, experiência e ferramentas web construídas com foco em performance, produto e código limpo.";

// Geist and Geist Mono ship with the repo (src/app/fonts) — no network at build
// or at runtime, and no flash of Arial.
const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0e0d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Erick Suehiro",
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Erick Suehiro" }],
  creator: "Erick Suehiro",
  publisher: "Erick Suehiro",
  keywords: [
    "Erick Suehiro",
    "Software Engineer",
    "Portfolio",
    "Full Stack Developer",
    "Frontend",
    "Backend",
    "Web Development",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Erick Suehiro",
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Erick Suehiro portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="w-full min-h-screen flex flex-col">
        <I18nProvider>
          <Header />
          <div className="w-full flex justify-center">
            <div className="w-full">{children}</div>
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
