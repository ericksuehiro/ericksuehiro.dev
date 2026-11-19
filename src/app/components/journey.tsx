"use client";

import { useI18n } from "../i18n/context";
import { SectionHead } from "./section";

/** Experience as a plain table: when, what and where, what I did. */
export default function Journey() {
  const { t } = useI18n();

  return (
    <section className="max-w-6xl mx-auto w-full px-5 sm:px-8 pb-20 md:pb-28">
      <SectionHead label={t.sections.experience} />

      <ol className="flex flex-col">
        {t.journey.experiences.map((exp) => (
          <li
            key={exp.company}
            className="grid md:grid-cols-12 gap-2 md:gap-8 py-7 md:py-9 border-b !border-[var(--line)] first:pt-0"
          >
            <span className="md:col-span-3 font-mono text-[13px] text-[var(--faint)] tabular-nums md:pt-1.5">{exp.period}</span>
            <h3 className="md:col-span-4 text-[1.35rem] md:text-[1.5rem] font-semibold tracking-[-0.025em] leading-tight">
              {exp.role}
              <span className="block text-[var(--muted)] font-normal">{exp.company}</span>
            </h3>
            <p className="md:col-span-5 mt-2 md:mt-0 text-[15px] leading-relaxed text-[var(--muted)]">{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
