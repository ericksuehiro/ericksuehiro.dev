"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/context";

export default function Header() {
  const path = usePathname();
  const { locale, setLocale, t } = useI18n();

  const [isNotAtTop, setIsNotAtTop] = useState(false);
  const [isUtilsActive, setIsUtilsActive] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNotAtTop(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsMd(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMd(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Watch for data-utils-active attribute changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsUtilsActive(document.documentElement.hasAttribute("data-utils-active"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-utils-active"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-end"
      style={{
        height: isUtilsActive ? (isMd ? "4rem" : "3rem") : (isMd ? "5rem" : "3.5rem"),
        padding: isUtilsActive ? "0" : "0 1rem",
        transition: "padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), height 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className={`relative w-full mx-auto md:px-5 border backdrop-blur-xl flex items-center h-12 md:h-16
        ${
          isUtilsActive
            ? "!border-transparent !border-b-[var(--header-border-color)] bg-[var(--background)] px-5"
            : isNotAtTop
              ? "!border-[var(--header-border-color)] shadow-md bg-[var(--background)]/80 px-5"
              : "!border-transparent px-0"
        }
        `}
        style={{
          maxWidth: isUtilsActive ? "100%" : "64rem",
          borderRadius: isUtilsActive ? "0" : "0.5rem",
          transition: "max-width 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease",
        }}
      >
        <Link href="/" className=" md:flex">
          <Image
            src="/logo.svg"
            alt="Erick Suehiro Logo"
            width={30}
            height={30}
            className={`filter invert-[var(--filterInvert)] transition-all ease-in-out scale-75 md:scale-100 ${
              isNotAtTop && "rotate-180"
            }`}
          />
        </Link>

        <div className="w-full flex justify-end md:justify-end gap-5 items-center">
          {[
            { name: t.nav.projects, href: "/projects" },
            { name: t.nav.utils, href: "/utils" },
          ].map((item) => (
            <Link
              key={item.href}
              className={`transition-all ease-in-out hover:opacity-100 p-1 md:p-3 ${
                item.href === path ? "!opacity-100" : ""
              } active:scale-95 cursor-pointer opacity-50`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            className="text-[11px] uppercase tracking-wider opacity-30 hover:opacity-70 transition-opacity duration-300 border !border-[var(--header-border-color)] px-2 py-1 rounded-md"
          >
            {locale === "en" ? "PT" : "EN"}
          </button>
        </div>
      </div>
    </div>
  );
}
