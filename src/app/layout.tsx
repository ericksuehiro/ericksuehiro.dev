import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
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
        <div className="w-full sticky !top-0 z-30">
          <Header />
        </div>
        <div className="w-full flex justify-center">
          <div className="w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
