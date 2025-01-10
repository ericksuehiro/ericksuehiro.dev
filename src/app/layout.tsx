import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";

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
        <footer className="h-14 md:h-24 w-full bg-[var(--background)] border-t !border-t-[var(--header-border-color)] flex justify-center items-center">
          Erick Suehiro ©
        </footer>
      </body>
    </html>
  );
}
