const navItems = [
  { label: "Home", href: "#home" },
  { label: "Discipline", href: "#discipline" },
  { label: "Wellness", href: "#wellness" },
  { label: "Training", href: "#training" },
  { label: "Combat Sport", href: "#combat-sport" },
  { label: "Contatti", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-3" aria-label="Revolution Gym home">
          <span className="grid size-10 place-items-center rounded-full border border-revolution-red/70 bg-white/5 shadow-glow transition group-hover:scale-105">
            <span className="font-display text-lg font-black text-white">R</span>
          </span>
          <span className="hidden font-display text-sm font-black uppercase leading-none tracking-[0.24em] text-white sm:block">
            Revolution<br />
            <span className="text-revolution-red">Gym</span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-zinc-200 transition duration-300 hover:text-revolution-red">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-[0.68rem] font-black uppercase tracking-[0.22em] text-white transition duration-300 hover:border-revolution-red hover:bg-revolution-red">
          Contattaci
        </a>
      </nav>
    </header>
  );
}
