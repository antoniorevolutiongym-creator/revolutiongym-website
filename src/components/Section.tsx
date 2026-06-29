import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
};

export function Section({ id, eyebrow, title, description, children, dark = true }: SectionProps) {
  return (
    <section id={id} className={dark ? "bg-revolution-black text-white" : "bg-white text-revolution-black"}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-revolution-red">{eyebrow}</p> : null}
          <h2 className="font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">{title}</h2>
          {description ? <p className="mt-6 text-lg leading-8 text-zinc-400">{description}</p> : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
