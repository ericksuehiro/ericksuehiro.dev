"use client";

import { usePathname } from "next/navigation";
import { useI18n } from "../i18n/context";

const LINKEDIN = "https://www.linkedin.com/in/ericksuehiro/";
const GITHUB = "https://github.com/ericksuehiro";

export default function Footer() {
  const { t } = useI18n();
  const path = usePathname();
  // The utils index keeps a quiet footer; the big call to action belongs to
  // the pages that are about the work.
  const showCta = path !== "/utils";

  return (
    <footer className="w-full border-t !border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {showCta && (
          <div className="py-16 md:py-24 grid md:grid-cols-12 gap-6 md:gap-8 items-end">
            <h2 className="md:col-span-7 text-[clamp(2.5rem,7vw,5.5rem)] font-semibold tracking-[-0.045em] leading-[0.95]">
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="ink-link">
                {t.footer.cta}
              </a>
            </h2>
            <p className="md:col-span-4 md:col-start-9 text-[var(--muted)] leading-relaxed">{t.footer.ctaText}</p>
          </div>
        )}

        <div
          className={`py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 font-mono text-[12px] text-[var(--faint)] ${
            showCta ? "border-t !border-[var(--line)]" : ""
          }`}
        >
          <span>
            © {new Date().getFullYear()} Erick Suehiro · {t.footer.built}
          </span>
          <span className="flex items-center gap-5">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
              GitHub ↗
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--foreground)] transition-colors">
              LinkedIn ↗
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
