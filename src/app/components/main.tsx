"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useI18n } from "../i18n/context";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/ericksuehiro",
    icon: "/githubLogo.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ericksuehiro/",
    icon: "/linkedinLogo.svg",
  },
];

export default function Main() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  return (
    <div
      className="relative min-h-[calc(100vh-5rem)] w-full flex items-center justify-center overflow-x-clip"
    >
      {/* Grid pattern background with top fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.03,
          maskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 40%)",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute top-0 right-0 w-px h-[200%] bg-gradient-to-b from-transparent via-[#04D361]/20 to-transparent pointer-events-none"
        style={{
          transform: "rotate(25deg) translateX(200px)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 2s ease 0.8s",
        }}
      />

      <div className="relative w-full max-w-5xl px-4 sm:px-6 py-16 md:py-32">
        {/* Top row — role rotator */}
        <div
          className="mb-8 overflow-hidden h-6"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s",
          }}
        >
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#04D361] animate-pulse" />
            <span
              className="text-xs uppercase tracking-[0.35em] opacity-50 font-medium transition-all duration-500"
              key={roleIndex}
              style={{
                animation: "fadeSlideUp 0.5s ease forwards",
              }}
            >
              {t.hero.roles[roleIndex]}
            </span>
          </div>
        </div>

        {/* Name — massive, cinematic */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <h1 className="text-[clamp(4rem,15vw,11rem)] font-bold tracking-[-0.06em] leading-[0.85] select-none">
            <span className="block">ERICK</span>
            <span className="block relative">
              <span className="inline-block text-transparent bg-clip-text animate-gradient-wave bg-gradient-to-r from-[#04D361] via-emerald-300 to-purple-500 bg-[length:300%_100%] py-[0.05em] pr-[0.05em]">
                SUEHIRO
              </span>
              {/* Underline accent */}
              <span
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-[#04D361] to-purple-500 rounded-full"
                style={{
                  width: mounted ? "120px" : "0px",
                  transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s",
                }}
              />
            </span>
          </h1>
        </div>

        {/* Description + CTA area */}
        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">
          {/* Left — bio */}
          <div
            className="max-w-md"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
            }}
          >
            <p className="text-base md:text-lg leading-relaxed opacity-40">
              {t.hero.bio}
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="absolute -inset-3 rounded-xl bg-gradient-to-br from-[#04D361]/0 to-purple-500/0 group-hover:from-[#04D361]/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <Image
                    src={social.icon}
                    alt={`${social.name}`}
                    width={32}
                    height={32}
                    className="relative filter invert-[var(--filterInvert)] opacity-30 group-hover:opacity-80 transition-all duration-300 group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right — CTAs */}
          <div
            className="flex items-center gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s",
            }}
          >
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl overflow-hidden"
            >
              {/* Button gradient bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#04D361] to-emerald-600 transition-all duration-300 group-hover:from-[#04D361] group-hover:to-purple-500" />
              <span className="relative text-sm font-semibold text-white">
                {t.nav.projects}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="relative w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <Link
              href="/utils"
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border !border-[var(--header-border-color)] hover:!border-[#04D361]/30 transition-all duration-300"
            >
              <span className="text-sm font-medium opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                {t.nav.utils}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 opacity-30 group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-0.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 3.01 1.32-5.67L2.5 8.24l5.82-.5L11.42 2.5l3.1 5.24 5.82.5-4.14 4.27 1.32 5.67z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          style={{
            opacity: mounted ? 0.2 : 0,
            transition: "opacity 1.2s ease 1s",
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">{t.hero.scroll}</span>
          <div className="w-px h-8 bg-gradient-to-b from-current to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
