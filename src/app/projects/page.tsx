"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "CareerUp.me",
    description:
      "A platform designed to help professionals level up their careers with smart tools and resources for job searching, resume building, and interview preparation.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "https://careerup.me",
    gradient: "from-emerald-400 to-cyan-500",
    icon: (
      <Image
        src="/careerupLogo.svg"
        alt="CareerUp Logo"
        width={32}
        height={32}
        className="w-8 h-8"
      />
    ),
  },
  {
    title: "ericksuehiro.dev",
    description:
      "My personal portfolio website, built from scratch to showcase my journey, skills, and projects. Features animated gradients, scroll-based animations, and a clean modern design.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    href: "https://ericksuehiro.dev",
    gradient: "from-[#04D361] to-purple-500",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
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

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 sm:px-6 pt-10 pb-20 max-w-5xl mx-auto">
      <div className="w-full mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="mt-3 text-lg opacity-50">
          Things I&apos;ve built and contributed to.
        </p>
      </div>

      <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
            />

            <div className="relative h-full border !border-[var(--header-border-color)] rounded-2xl p-6 bg-[var(--background)] transition-all duration-300 group-hover:shadow-lg flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  {project.icon}
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-5 h-5 opacity-30 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "opacity-70 translate-x-1 -translate-y-1"
                      : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm opacity-60 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t !border-t-[var(--header-border-color)]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border !border-[var(--header-border-color)] opacity-60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
