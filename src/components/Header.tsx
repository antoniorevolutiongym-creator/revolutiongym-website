const navItems = ["About", "Services", "Gallery", "Contact"];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8" aria-label="Primary">
        <a href="#home" className="font-display text-lg font-black uppercase tracking-[0.24em] text-white">
          Revolution<span className="text-revolution-red">.</span>
        </a>
        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-300 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="rounded-full bg-revolution-red px-5 py-3 text-xs font-black uppercase tracking-[0.24em] text-white shadow-glow transition hover:bg-white hover:text-black">
          Start
        </a>
      </nav>
    </header>
  );
}
