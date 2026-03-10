"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const experiences = [
  {
    company: "Santander",
    logo: "/santanderLogo.svg",
    period: "2022 — Present",
    role: "Developer",
    description:
      "Joined as a backend developer specializing in Java microservices with Spring. Transitioned to front-end development, delivering solutions with Angular as the primary framework.",
    gradient: "from-red-400 to-red-600",
    accentColor: "#f87171",
  },
  {
    company: "Accenture",
    logo: "/accentureLogo.svg",
    period: "2021 — 2022",
    role: "Analyst",
    description:
      "Backend developer focused on Java microservices using Camel and Spring. Led the migration from IIB to Camel, ensuring seamless transition and improved performance.",
    gradient: "from-purple-400 to-purple-600",
    accentColor: "#c084fc",
  },
];

export default function Journey() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full border-t !border-t-[var(--header-border-color)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        {/* Section Header */}
        <div
          className="mb-14"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-purple-400 to-transparent" />
            <span className="text-xs uppercase tracking-[0.3em] opacity-40 font-medium">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
            My Journey
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--header-border-color)] via-[var(--header-border-color)] to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.1}s`,
              }}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${exp.gradient} rounded-2xl transition-all duration-500 blur-xl`}
                style={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
              />

              {/* Border gradient */}
              <div
                className={`absolute -inset-px bg-gradient-to-r ${exp.gradient} rounded-2xl transition-all duration-500`}
                style={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
              />

              {/* Card */}
              <div className="relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-500 overflow-hidden">
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 h-px bg-gradient-to-r ${exp.gradient} transition-all duration-700 ease-out`}
                  style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                />

                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  {/* Timeline dot + Logo */}
                  <div className="flex items-center gap-5 shrink-0">
                    {/* Dot */}
                    <div
                      className={`hidden md:flex w-[14px] h-[14px] rounded-full border-2 transition-all duration-300 shrink-0`}
                      style={{
                        borderColor: hoveredIndex === index ? exp.accentColor : "var(--header-border-color)",
                        backgroundColor: hoveredIndex === index ? exp.accentColor : "transparent",
                        boxShadow: hoveredIndex === index ? `0 0 12px ${exp.accentColor}44` : "none",
                      }}
                    />

                    {/* Logo */}
                    <div className="w-[140px] h-14 rounded-xl bg-[var(--foreground)]/5 flex items-center justify-center px-4 shrink-0 border !border-[var(--header-border-color)] transition-all duration-300"
                      style={{
                        borderColor: hoveredIndex === index ? `${exp.accentColor}33` : undefined,
                      }}
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} Logo`}
                        width={120}
                        height={30}
                        className="filter invert-[var(--filterInvert)] opacity-60 transition-all duration-300 group-hover:opacity-90"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-xl font-bold tracking-tight">{exp.role}</h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full opacity-40 border !border-[var(--header-border-color)]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm opacity-45 leading-relaxed max-w-xl">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
