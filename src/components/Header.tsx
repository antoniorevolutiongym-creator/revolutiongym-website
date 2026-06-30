"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Discipline", href: "#discipline" },
  { label: "Wellness", href: "#wellness" },
  { label: "App", href: "#app" },
  { label: "Contatti", href: "#contact" },
];

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 24);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        hasScrolled
          ? "border-b border-white/10 bg-black shadow-2xl shadow-black/50"
          : "border-b border-white/0 bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Navigazione principale">
        <a href="#home" className="group flex items-center" aria-label="Revolution Gym home">
          <Image
            src="/revolution-gym-logo.svg"
            alt="Revolution Gym"
            width={180}
            height={63}
            className="h-auto w-32 object-contain drop-shadow-[0_0_18px_rgba(215,38,38,0.35)] transition duration-500 group-hover:scale-105 sm:w-40"
            priority
          />
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-zinc-100 transition duration-300 hover:text-revolution-red">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white transition duration-300 hover:border-revolution-red hover:bg-revolution-red">
            Prenota
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          Menu
        </button>
      </nav>

      <div id="mobile-navigation" className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="mx-5 mb-5 rounded-[1.5rem] border border-white/10 bg-black/95 p-4 shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-white/10 hover:text-revolution-red"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
