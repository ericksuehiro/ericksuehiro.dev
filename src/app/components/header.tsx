"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const path = usePathname();

  const [isNotAtTop, setIsNotAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsNotAtTop(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-14 md:h-20 flex justify-center items-end bg-opacity-35">
      <div className="absolute inset-0 backdrop-blur-sm rounded-xl h-1/2" />

      <div
        className={`h-12 md:h-16 max-w-7xl w-full mr-4 ml-4 border transition-all ease-in-out rounded-lg !backdrop-blur-xl flex items-center
        ${
          isNotAtTop
            ? "!border-[var(--header-border-color)] shadow-md pl-5 pr-5"
            : "!border-transparent"
        }
        `}
      >
        <Link href="/" className=" md:flex">
          <Image
            src="/logo.svg"
            alt="Erick Suehiro Logo"
            width={30}
            height={30}
            className={`filter invert-[var(--filterInvert)] transition-all ease-in-out scale-75 md:scale-100 ${
              isNotAtTop && "rotate-180"
            }`}
          />
        </Link>

        <div className="w-full flex justify-end md:justify-end gap-5">
          {[
            // { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: "ILearned", href: "/ilearned" },
            { name: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              className={`transition-all ease-in-out hover:opacity-100 p-1 md:p-3 ${
                item.href === path ? "opacity-100" : ""
              } active:scale-95 cursor-pointer opacity-50`}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
