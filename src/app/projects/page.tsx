"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "../i18n/context";

const projectsMeta = [
  {
    tags: ["Next.js", "Prisma", "NextAuth", "Tailwind CSS", "TypeScript"],
    href: "https://careerup.me",
    gradient: "from-purple-400 via-white to-purple-500",
    accentColor: "#a855f7",
    logo: "/careerupLogo.svg",
    logoBg: "linear-gradient(135deg, #ffffff 0%, #f3eaff 50%, #e9d5ff 100%)",
  },
  {
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    href: "https://ericksuehiro.dev",
    gradient: "from-[#04D361] via-emerald-400 to-purple-500",
    accentColor: "#04D361",
    logo: "/logo.svg",
  },
  {
    tags: ["Next.js 16", "Prisma", "DeepSeek AI", "NextAuth", "TypeScript"],
    href: "https://grimorio.ericksuehiro.dev",
    gradient: "from-[#d4a843] via-[#f0d78c] to-[#8b7536]",
    accentColor: "#d4a843",
    logo: "/grimorioLogo.svg",
    logoBg: "linear-gradient(135deg, #1c1917 0%, #292524 50%, #1c1917 100%)",
  },
  {
    tags: ["Next.js", "Prisma", "OpenAI", "NextAuth", "CodeMirror", "TypeScript"],
    href: "https://aprendeai.ericksuehiro.dev",
    gradient: "from-cyan-400 via-blue-500 to-purple-500",
    accentColor: "#22d3ee",
    logo: "/aprendeaiLogo.svg",
    logoBg: "linear-gradient(135deg, #080c15 0%, #111827 50%, #080c15 100%)",
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 sm:px-6 pt-24 md:pt-32 pb-20 max-w-5xl mx-auto">
      <div
        className="w-full mb-16"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-emerald-400 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] opacity-40 font-medium">
            {t.projects.label}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          {t.projects.title}
        </h1>
        <p className="mt-4 text-base opacity-40 max-w-md">
          {t.projects.description}
        </p>
      </div>

      <div className="w-full flex flex-col gap-6">
        {t.projects.items.map((project, index) => {
          const meta = projectsMeta[index];
          return (
            <Link
              key={project.title}
              href={meta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.1}s`,
              }}
            >
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${meta.gradient} rounded-2xl transition-all duration-500 blur-xl`}
                style={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
              />
              <div
                className={`absolute -inset-px bg-gradient-to-r ${meta.gradient} rounded-2xl transition-all duration-500`}
                style={{ opacity: hoveredIndex === index ? 0.6 : 0 }}
              />

              <div className="relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-500 overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.015] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                <div
                  className={`absolute top-0 left-0 h-px bg-gradient-to-r ${meta.gradient} transition-all duration-700 ease-out`}
                  style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-xl ${!meta.logoBg ? `bg-gradient-to-br ${meta.gradient}` : ""} flex items-center justify-center shadow-lg transition-all duration-500 overflow-hidden`}
                    style={{
                      transform: hoveredIndex === index ? "scale(1.1) rotate(-3deg)" : "scale(1) rotate(0deg)",
                      boxShadow: hoveredIndex === index ? `0 8px 30px ${meta.accentColor}33` : "0 4px 12px rgba(0,0,0,0.1)",
                      ...(meta.logoBg ? { background: meta.logoBg, backgroundSize: "200% 200%", animation: "gradient-wave 5s ease infinite" } : {}),
                    }}
                  >
                    <Image
                      src={meta.logo}
                      alt={project.title}
                      width={36}
                      height={36}
                      className={`object-contain ${!meta.logoBg ? "brightness-0 invert" : ""}`}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                        {project.title}
                      </h2>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                    <p className="text-sm opacity-45 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
                    {meta.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="text-[11px] px-3 py-1 rounded-full border !border-[var(--header-border-color)] opacity-40 transition-all duration-300 whitespace-nowrap"
                        style={{
                          opacity: hoveredIndex === index ? 0.7 : 0.4,
                          transitionDelay: `${tagIndex * 30}ms`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div
        className="mt-20 flex items-center gap-4 opacity-20"
        style={{
          opacity: mounted ? 0.2 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-current" />
        <span className="text-[10px] uppercase tracking-[0.4em]">
          {t.projects.moreComingSoon}
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-current" />
      </div>
    </div>
  );
}
