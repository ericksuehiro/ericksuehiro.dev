"use client";

import { useI18n } from "../i18n/context";

const links = [
  { name: "GitHub", href: "https://github.com/ericksuehiro" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ericksuehiro/" },
];

/** The opening: who, what now, where to find me. Type does the work. */
export default function Main() {
  const { t } = useI18n();

  return (
    <section className="max-w-6xl mx-auto w-full px-5 sm:px-8 pt-28 md:pt-44 pb-20 md:pb-32">
      <p className="rise font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--faint)]">{t.hero.kicker}</p>

      <h1
        className="rise mt-6 md:mt-8 text-[clamp(3.6rem,21vw,11.5rem)] font-semibold tracking-[-0.06em] leading-[0.84]"
        style={{ animationDelay: "80ms" }}
      >
        Erick
        <br />
        Suehiro<span className="text-[var(--accent)]">.</span>
      </h1>

      <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-8">
        <p
          className="rise md:col-span-7 text-[1.3rem] md:text-[1.6rem] leading-[1.35] tracking-[-0.015em] text-[var(--muted)]"
          style={{ animationDelay: "180ms" }}
        >
          {t.hero.statement}
        </p>

        <div
          className="rise md:col-span-4 md:col-start-9 flex flex-col gap-6 md:pt-2"
          style={{ animationDelay: "260ms" }}
        >
          <p className="flex items-center gap-3 text-[15px]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="led absolute inset-0 rounded-full bg-[var(--accent)]" />
            </span>
            {t.hero.now}
          </p>
          <ul className="flex flex-col border-t !border-[var(--line)]">
            {links.map((l) => (
              <li key={l.name} className="border-b !border-[var(--line)]">
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 text-[15px] hover:text-[var(--accent-ink)] transition-colors"
                >
                  {l.name}
                  <span className="font-mono text-[var(--faint)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-ink)]">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
