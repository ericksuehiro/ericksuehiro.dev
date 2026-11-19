"use client";

import Work from "../components/work";
import { useI18n } from "../i18n/context";

export default function Projects() {
  const { t } = useI18n();

  return (
    <div className="flex flex-col">
      <section className="max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 md:pt-40 pb-16 md:pb-24">
        <p className="rise font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--faint)]">{t.projects.label}</p>
        <h1
          className="rise mt-6 text-[clamp(3.2rem,11vw,8rem)] font-semibold tracking-[-0.055em] leading-[0.88]"
          style={{ animationDelay: "80ms" }}
        >
          {t.projects.title}
        </h1>
        <p
          className="rise mt-8 max-w-xl text-[1.2rem] md:text-[1.4rem] leading-[1.4] tracking-[-0.01em] text-[var(--muted)]"
          style={{ animationDelay: "160ms" }}
        >
          {t.projects.description}
        </p>
      </section>
      <Work />
    </div>
  );
}
