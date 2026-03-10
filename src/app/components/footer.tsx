"use client";

import { useI18n } from "../i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-[var(--background)] border-t !border-t-[var(--header-border-color)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold tracking-tight">Erick Suehiro</span>
            <span className="text-xs opacity-30">{t.footer.role}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/ericksuehiro" target="_blank" rel="noopener noreferrer" className="text-xs opacity-30 hover:opacity-70 transition-opacity duration-300">GitHub</a>
            <a href="https://www.linkedin.com/in/ericksuehiro/" target="_blank" rel="noopener noreferrer" className="text-xs opacity-30 hover:opacity-70 transition-opacity duration-300">LinkedIn</a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t !border-t-[var(--header-border-color)]">
          <span className="text-[11px] opacity-20">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
