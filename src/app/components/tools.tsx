"use client";

import Link from "next/link";
import { useI18n } from "../i18n/context";
import { SectionHead } from "./section";

/** The toolbox, as a short index on the home page. Each row opens the tool. */
export default function Tools() {
  const { t } = useI18n();
  const u = t.utils;
  const tools = [
    { id: "pdf-to-text", ...u.pdfToText },
    { id: "html-preview", ...u.htmlPreview },
    { id: "text-diff", ...u.textDiff },
    { id: "api-tester", ...u.apiTester },
    { id: "base64", ...u.base64 },
  ];

  return (
    <section className="max-w-6xl mx-auto w-full px-5 sm:px-8 pb-20 md:pb-28">
      <SectionHead label={t.sections.tools} count={tools.length} />
      <div className="grid md:grid-cols-12 gap-8">
        <p className="md:col-span-4 text-[15px] leading-relaxed text-[var(--muted)]">{t.sections.toolsNote}</p>
        <ul className="md:col-span-8 border-t !border-[var(--line)]">
          {tools.map((tool) => (
            <li key={tool.id} className="border-b !border-[var(--line)]">
              <Link href={`/utils?tool=${tool.id}`} className="group flex items-center gap-6 py-4">
                <span className="w-40 shrink-0 text-[16px] font-medium group-hover:text-[var(--accent-ink)] transition-colors">{tool.title}</span>
                <span className="hidden sm:block flex-1 min-w-0 truncate text-[14px] text-[var(--faint)]">{tool.description}</span>
                <span className="ml-auto font-mono text-[var(--faint)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent-ink)]">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
