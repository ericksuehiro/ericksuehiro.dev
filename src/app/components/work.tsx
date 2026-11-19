"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "../i18n/context";
import { workMeta } from "../data/work";
import { SectionHead } from "./section";

/**
 * The work, as an index: number, name, what it is, what it's made of, and a
 * real screenshot of it running. `selected` keeps only projects that have a
 * screenshot (the home page); the projects page shows everything.
 */
export default function Work({ selected = false }: { selected?: boolean }) {
  const { t } = useI18n();
  const items = t.projects.items.filter((p) => workMeta[p.id] && (!selected || workMeta[p.id].shot));

  return (
    <section className="max-w-6xl mx-auto w-full px-5 sm:px-8 pb-20 md:pb-28">
      <SectionHead
        label={selected ? t.sections.work : t.sections.seeAll}
        aside={
          selected ? (
            <Link href="/projects" className="normal-case tracking-normal text-[13px] font-sans text-[var(--muted)] hover:text-[var(--foreground)] ink-link">
              {t.sections.seeAll} →
            </Link>
          ) : (
            <span>{String(items.length).padStart(2, "0")}</span>
          )
        }
      />

      <ol className="flex flex-col gap-16 md:gap-24">
        {items.map((p, i) => {
          const meta = workMeta[p.id];
          return (
            <li key={p.id} className="rise" style={{ animationDelay: `${120 + i * 70}ms` }}>
              <a
                href={meta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid md:grid-cols-12 gap-6 md:gap-8 items-start"
              >
                {/* Screenshot (or the mark, for projects without one) */}
                <div className="md:col-span-7 md:order-2 relative aspect-[16/10] overflow-hidden rounded-lg border !border-[var(--line)] bg-[var(--surface)]">
                  {meta.shot ? (
                    <Image
                      src={meta.shot}
                      alt={`${p.title} — ${meta.host}`}
                      fill
                      sizes="(min-width: 768px) 640px, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                      priority={i === 0}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image src={meta.logo ?? "/logo.svg"} alt="" width={72} height={72} className="filter invert-[var(--filterInvert)] opacity-80" />
                    </div>
                  )}
                </div>

                {/* Words */}
                <div className="md:col-span-5 md:order-1 flex flex-col md:pt-1">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] text-[var(--faint)] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-[1.9rem] md:text-[2.4rem] font-semibold tracking-[-0.035em] leading-none">
                      <span className="bg-[linear-gradient(var(--accent),var(--accent))] bg-no-repeat bg-[length:0%_2px] bg-[position:0_100%] group-hover:bg-[length:100%_2px] transition-[background-size] duration-500 pb-1">
                        {p.title}
                      </span>
                    </h3>
                  </div>

                  <p className="mt-4 flex items-center gap-2 text-[14px] text-[var(--muted)]">
                    <span className="h-2 w-2 rounded-full shrink-0" style={{ background: meta.brand }} aria-hidden />
                    {p.kind}
                  </p>

                  <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)] max-w-prose">{p.description}</p>

                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-[12px] text-[var(--faint)]">
                    {meta.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>

                  <span className="mt-7 inline-flex items-center gap-2 text-[14px] text-[var(--foreground)]">
                    <span className="truncate">{meta.host}</span>
                    <span className="font-mono text-[var(--faint)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-ink)]">
                      ↗
                    </span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
