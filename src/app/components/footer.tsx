import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ericksuehiro",
    icon: "/linkedinLogo.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/ericksuehiro",
    icon: "/githubLogo.svg",
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t !border-t-[var(--header-border-color)] bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="filter invert-[var(--filterInvert)]"
                  />
                  <span className="text-sm">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="flex gap-4">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t !border-t-[var(--header-border-color)] pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <p className="text-sm opacity-50">
            &copy; {new Date().getFullYear()} Erick Suehiro
          </p>
        </div>
      </div>
    </footer>
  );
}
