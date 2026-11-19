import type { ReactNode } from "react";

/** A section opens with a hairline, a small mono label and, optionally, a count. */
export function SectionHead({ label, count, aside }: { label: string; count?: number; aside?: ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t !border-[var(--line)] pt-4 mb-10 md:mb-14 font-mono text-[12px] uppercase tracking-[0.14em] text-[var(--faint)]">
      <h2>{label}</h2>
      {aside ?? (count !== undefined && <span>{String(count).padStart(2, "0")}</span>)}
    </div>
  );
}
