// What each project links to and how it's shown. The words (title, kind,
// description) live in i18n/translations.ts under projects.items, matched by id.
//
// `shot` is a real screenshot of the live product (public/work/*.webp, 1440×900).
// Retake them when a product changes its landing page; a stale screenshot is
// worse than none.

export type WorkMeta = {
  href: string;
  host: string;
  tags: string[];
  /** The product's own brand color — used only for the small dot by its kind. */
  brand: string;
  shot?: string;
  logo?: string;
};

export const workMeta: Record<string, WorkMeta> = {
  kguess: {
    href: "https://kguess.com",
    host: "kguess.com",
    tags: ["JavaScript", "Three.js", "Cloudflare Pages", "D1", "Google OAuth"],
    brand: "#ff72d2",
    shot: "/work/kguess.webp",
  },
  careerup: {
    href: "https://careerup.me",
    host: "careerup.me",
    tags: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS", "TypeScript"],
    brand: "#7c3aed",
    shot: "/work/careerup.webp",
  },
  grimorio: {
    href: "https://grimorio.ericksuehiro.dev",
    host: "grimorio.ericksuehiro.dev",
    tags: ["Next.js 16", "Prisma", "DeepSeek AI", "NextAuth", "TypeScript"],
    brand: "#d4a843",
    shot: "/work/grimorio.webp",
  },
  aprendeai: {
    href: "https://aprendeai.ericksuehiro.dev",
    host: "aprendeai.ericksuehiro.dev",
    tags: ["Next.js", "Prisma", "OpenAI", "NextAuth", "CodeMirror", "TypeScript"],
    brand: "#22d3ee",
    shot: "/work/aprendeai.webp",
  },
  site: {
    href: "https://github.com/ericksuehiro/ericksuehiro.dev",
    host: "github.com/ericksuehiro/ericksuehiro.dev",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    brand: "#04d361",
    shot: "/work/site.webp",
  },
};
