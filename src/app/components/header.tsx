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

  useEffect(() => {
    const handleScroll = () => {
      setIsNotAtTop(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-14 md:h-20 flex justify-center items-end px-4">
      <div
        className={`relative h-12 md:h-16 max-w-5xl w-full mx-auto px-5 border transition-all ease-in-out rounded-lg backdrop-blur-xl flex items-center
        ${
          isNotAtTop
            ? "!border-[var(--header-border-color)] shadow-md bg-[var(--background)]/80"
            : "!border-transparent"
        }
        `}
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
