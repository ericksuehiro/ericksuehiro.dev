"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "../i18n/context";

const experiencesMeta = [
  {
    logo: "/santanderLogo.svg",
    gradient: "from-red-400 to-red-600",
    accentColor: "#f87171",
  },
  {
    logo: "/accentureLogo.svg",
    gradient: "from-purple-400 to-purple-600",
    accentColor: "#c084fc",
  },
];

export default function Journey() {
  const [mounted, setMounted] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useI18n();

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
              {t.journey.label}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-none">
            {t.journey.title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6">
          {/* Vertical line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-[var(--header-border-color)] via-[var(--header-border-color)] to-transparent hidden md:block" />

          {t.journey.experiences.map((exp, index) => {
            const meta = experiencesMeta[index];
            return (
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
                  className={`absolute -inset-1 bg-gradient-to-r ${meta.gradient} rounded-2xl transition-all duration-500 blur-xl`}
                  style={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                />

                {/* Border gradient */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${meta.gradient} rounded-2xl transition-all duration-500`}
                  style={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
                />

                {/* Card */}
                <div className="relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-500 overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 h-px bg-gradient-to-r ${meta.gradient} transition-all duration-700 ease-out`}
                    style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  />

                  <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                    {/* Timeline dot + Logo */}
                    <div className="flex items-center gap-5 shrink-0">
                      <div
                        className="hidden md:flex w-[14px] h-[14px] rounded-full border-2 transition-all duration-300 shrink-0"
                        style={{
                          borderColor: hoveredIndex === index ? meta.accentColor : "var(--header-border-color)",
                          backgroundColor: hoveredIndex === index ? meta.accentColor : "transparent",
                          boxShadow: hoveredIndex === index ? `0 0 12px ${meta.accentColor}44` : "none",
                        }}
                      />

                      <div
                        className="w-[140px] h-14 rounded-xl bg-[var(--foreground)]/5 flex items-center justify-center px-4 shrink-0 border !border-[var(--header-border-color)] transition-all duration-300"
                        style={{
                          borderColor: hoveredIndex === index ? `${meta.accentColor}33` : undefined,
                        }}
                      >
                        <Image
                          src={meta.logo}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
