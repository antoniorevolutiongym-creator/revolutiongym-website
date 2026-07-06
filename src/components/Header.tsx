"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const whatsappBookingUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym";

const navItems = [
  { label: "Home", href: "/" },
  { label: "HYROX", href: "/hyrox" },
  { label: "Sala Pesi", href: "/#sala-pesi" },
  { label: "Combat", href: "/#combat" },
  { label: "Wellness", href: "/#wellness" },
  { label: "Personal Training", href: "/#personal-training" },
  { label: "Contatti", href: "/#contatti" },
];

export function Header() {
  const pathname = usePathname();
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
        <Link href="/" className="group flex items-center" aria-label="Revolution Gym home">
          <span className="font-display text-xl font-black uppercase tracking-[0.12em] text-white transition duration-500 group-hover:scale-105 sm:text-2xl">
            <span className="text-revolution-red">REVOLUTION</span> GYM
          </span>
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={`text-[0.68rem] font-bold uppercase tracking-[0.22em] transition duration-300 hover:text-revolution-red ${pathname === item.href ? "text-revolution-red" : "text-zinc-100"}`}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white transition duration-300 hover:border-revolution-red hover:bg-revolution-red">
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
            <Link
              key={item.label}
              href={item.href}
              className={`block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.22em] transition hover:bg-white/10 hover:text-revolution-red ${pathname === item.href ? "text-revolution-red" : "text-zinc-100"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
