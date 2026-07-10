import { useEffect, useState } from "react";
import profile from "../data/profile";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-lg tracking-tight text-paper">
          {profile.name.split(" ")[0]}
          <span className="text-brass">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="eyebrow text-slate hover:text-brass transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-block eyebrow border border-line px-4 py-2 text-paper hover:border-brass hover:text-brass transition-colors"
        >
          Say hello
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper eyebrow border border-line px-3 py-2"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-line px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-slate hover:text-brass"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
