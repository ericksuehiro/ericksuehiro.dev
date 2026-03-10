import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import { I18nProvider } from "./i18n/context";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Erick Suehiro | Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col">
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
