"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "CareerUp.me",
    description:
      "A platform designed to help professionals level up their careers with smart tools and resources for job searching, resume building, and interview preparation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://careerup.me",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    accentColor: "#2dd4bf",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    title: "ericksuehiro.dev",
    description:
      "My personal portfolio website, built from scratch to showcase my journey, skills, and projects. Features animated gradients, scroll-based animations, and a clean modern design.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    href: "https://ericksuehiro.dev",
    gradient: "from-[#04D361] via-emerald-400 to-purple-500",
    accentColor: "#04D361",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 sm:px-6 pt-10 pb-20 max-w-5xl mx-auto">
      {/* Header */}
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
            Portfolio
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          Projects
        </h1>
        <p className="mt-4 text-base opacity-40 max-w-md">
          Things I&apos;ve built and contributed to.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="w-full flex flex-col gap-6">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
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
            {/* Glow effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl transition-all duration-500 blur-xl`}
              style={{
                opacity: hoveredIndex === index ? 0.15 : 0,
              }}
            />

            {/* Border gradient */}
            <div
              className={`absolute -inset-px bg-gradient-to-r ${project.gradient} rounded-2xl transition-all duration-500`}
              style={{
                opacity: hoveredIndex === index ? 0.6 : 0,
              }}
            />

            {/* Card */}
            <div className="relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-500 overflow-hidden">
              {/* Subtle noise texture overlay */}
              <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 h-px bg-gradient-to-r ${project.gradient} transition-all duration-700 ease-out`}
                style={{
                  width: hoveredIndex === index ? "100%" : "0%",
                }}
              />

              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div
                  className={`shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} text-white flex items-center justify-center shadow-lg transition-all duration-500`}
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "scale(1.1) rotate(-3deg)"
                        : "scale(1) rotate(0deg)",
                    boxShadow:
                      hoveredIndex === index
                        ? `0 8px 30px ${project.accentColor}33`
                        : "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                >
                  {project.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                      {project.title}
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 opacity-0 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                  <p className="text-sm opacity-45 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
                  {project.tags.map((tag, tagIndex) => (
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
        ))}
      </div>

      {/* Bottom decoration */}
      <div
        className="mt-20 flex items-center gap-4 opacity-20"
        style={{
          opacity: mounted ? 0.2 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-current" />
        <span className="text-[10px] uppercase tracking-[0.4em]">
          More coming soon
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-current" />
      </div>
    </div>
  );
}
