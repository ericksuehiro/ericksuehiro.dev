"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useI18n } from "../i18n/context";

export default function Header() {
  const path = usePathname();
  const { locale, setLocale, t } = useI18n();

  const [scrolled, setScrolled] = useState(false);
  const [isUtilsActive, setIsUtilsActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The utils page flags a full-screen tool view on <html>; the header then
  // becomes a flat full-width bar (3rem / 4rem) that the tool view sits under.
  useEffect(() => {
    const sync = () => setIsUtilsActive(document.documentElement.hasAttribute("data-utils-active"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-utils-active"] });
    return () => observer.disconnect();
  }, []);

  const solid = scrolled || isUtilsActive;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        solid ? "bg-[var(--background)] !border-[var(--line)]" : "bg-transparent !border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between gap-6 px-5 sm:px-8 ${
          isUtilsActive ? "h-12 md:h-16 max-w-none" : "h-14 md:h-16 max-w-6xl"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label={t.nav.home}>
          <Image
            src="/logo.svg"
            alt=""
            width={22}
            height={22}
            className="filter invert-[var(--filterInvert)] transition-transform duration-500 group-hover:rotate-180"
          />
          <span className="hidden sm:inline text-[15px] font-semibold tracking-tight">Erick Suehiro</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 text-[15px]">
          {[
            { name: t.nav.projects, href: "/projects" },
            { name: t.nav.utils, href: "/utils" },
          ].map((item) => {
            const active = path === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`px-2.5 py-1.5 rounded-md transition-colors duration-200 ${
                  active ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                }`}
              >
                {item.name}
                <span
                  className={`block h-px mt-0.5 transition-all duration-300 ${active ? "bg-[var(--accent)] w-full" : "w-0"}`}
                />
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "pt" : "en")}
            aria-label={t.nav.language}
            title={t.nav.language}
            className="ml-1 font-mono text-[12px] tracking-wider text-[var(--muted)] hover:text-[var(--foreground)] border !border-[var(--line)] hover:!border-[var(--faint)] px-2 py-1 rounded-md transition-colors"
          >
            {locale === "en" ? "PT" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
