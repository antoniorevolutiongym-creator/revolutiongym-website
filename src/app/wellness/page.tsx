import Image from "next/image";
import type { CSSProperties } from "react";
import { Header } from "@/components/Header";

const whatsappTrialUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym";

const disciplines = [
  {
    id: "riequilibrio-posturale",
    eyebrow: "Postura / Movimento consapevole",
    title: "Riequilibrio Posturale",
    image: "/images/IMG_4874.jpeg",
    imageAlt: "Lezione di riequilibrio posturale alla Revolution Gym Bacoli",
    copy: "Un lavoro mirato su postura, mobilità e controllo del corpo: esercizi progressivi per riequilibrare le tensioni, migliorare la qualità del movimento e prevenire i dolori da vita sedentaria. Il punto di partenza ideale per chi torna ad allenarsi.",
    points: ["Postura e mobilità", "Prevenzione dei dolori", "Progressioni individuali"],
    schedule: [{ label: "Orari settimanali", slots: ["Lunedì · Mercoledì · Venerdì", "09:30 – 10:30"] }],
  },
  {
    id: "pilates",
    eyebrow: "Pilates / Core e controllo",
    title: "Pilates",
    image: "/images/IMG_4878.jpeg",
    imageAlt: "Corso di Pilates matwork alla Revolution Gym Bacoli",
    copy: "Pilates matwork con piccoli attrezzi in una sala corsi dedicata: core, stabilità, allungamento e controllo del respiro. Classi seguite passo passo, adatte a ogni livello, con decine di persone che ogni settimana ne fanno un appuntamento fisso.",
    points: ["Matwork e piccoli attrezzi", "Core e stabilità", "Tutti i livelli"],
    schedule: [
      { label: "Mattina", slots: ["Lunedì · Mercoledì · Venerdì", "10:30 – 11:30"] },
      { label: "Sera", slots: ["Martedì · Giovedì", "18:00 – 19:00"] },
    ],
  },
  {
    id: "yoga",
    eyebrow: "Iyengar Yoga / Equilibrio",
    title: "Iyengar Yoga",
    image: "/images/wellness-01.jpg",
    imageAlt: "Lezione di Iyengar Yoga alla Revolution Gym Bacoli",
    copy: "Lo Iyengar Yoga lavora su allineamento, precisione e respiro, con l'uso di supporti che rendono ogni asana accessibile. Una pratica che costruisce forza silenziosa, flessibilità e lucidità — il perfetto contrappeso all'allenamento intenso.",
    points: ["Allineamento e precisione", "Supporti per ogni livello", "Forza e flessibilità"],
    schedule: [
      { label: "Mattina", slots: ["Martedì · Giovedì", "09:00 – 10:00"] },
      { label: "Sera", slots: ["Lunedì · Mercoledì · Venerdì", "18:00 – 19:00"] },
    ],
  },
];

export const metadata = {
  title: "Pilates, Yoga e Riequilibrio Posturale a Bacoli | Wellness — Revolution Gym",
  description:
    "Area wellness della Revolution Gym Bacoli: corsi di Pilates, Iyengar Yoga e riequilibrio posturale con orari settimanali. Prenota una prova su WhatsApp.",
};

export default function WellnessPage() {
  return (
    <main id="wellness-page" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-black pt-24" aria-labelledby="wellness-hero-title">
        <div className="absolute inset-0">
          <Image src="/images/IMG_4876.jpeg" alt="Sala corsi wellness della Revolution Gym Bacoli" fill sizes="100vw" className="premium-media-image object-cover object-center brightness-110 contrast-110" priority />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(215,38,38,0.3),transparent_30rem),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.6)_48%,rgba(0,0,0,0.3))]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="animate-hero-reveal max-w-5xl rounded-[2.5rem] border border-white/10 bg-black/55 p-7 shadow-2xl shadow-black/70 backdrop-blur-sm sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.55em] text-revolution-red">Area Wellness / Bacoli</p>
            <h1 id="wellness-hero-title" className="mt-6 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-8xl lg:text-9xl">
              Pilates, Yoga <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">e Postura</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl">Mobilità, controllo e recupero in una sala corsi dedicata: le fondamenta invisibili di ogni risultato.</p>
            <a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-revolution-red px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black">Prenota una prova</a>
          </div>
        </div>
      </section>

      {disciplines.map((d, index) => (
        <section key={d.id} id={d.id} className={`relative isolate overflow-hidden py-28 sm:py-36 ${index % 2 === 0 ? "bg-[#050505]" : "bg-revolution-black"}`} aria-labelledby={`${d.id}-title`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(215,38,38,0.18),transparent_28rem)]" />
          <div className={`mx-auto grid max-w-7xl gap-12 px-6 lg:items-center lg:px-8 ${index % 2 === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-[0.95fr_1.05fr]"}`}>
            <div className={`scroll-reveal ${index % 2 === 0 ? "" : "lg:order-2"}`}>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">{d.eyebrow}</p>
              <h2 id={`${d.id}-title`} className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">{d.title}</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">{d.copy}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {d.points.map((point) => (
                  <p key={point} className="rounded-full border border-white/10 bg-black/45 px-5 py-3 text-sm font-black uppercase tracking-[0.16em]"><span className="text-revolution-red">✓</span> {point}</p>
                ))}
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {d.schedule.map((block) => (
                  <div key={block.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6">
                    <p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">{block.label}</p>
                    {block.slots.map((slot) => (
                      <p key={slot} className="mt-3 text-lg font-bold leading-7 text-white">{slot}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className={`scroll-reveal relative min-h-[28rem] overflow-hidden rounded-[2.5rem] border border-white/10 ${index % 2 === 0 ? "" : "lg:order-1"}`} style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <Image src={d.image} alt={d.imageAlt} fill sizes="(min-width:1024px) 50vw, 100vw" className="premium-media-image object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            </div>
          </div>
        </section>
      ))}

      <section id="whatsapp-cta" className="bg-revolution-red px-6 py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.42em] text-white/75">Prova gratuita</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Il tuo corpo lavora meglio quando si muove bene.</h2>
          </div>
          <a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-black transition duration-500 hover:-translate-y-1 hover:bg-black hover:text-white">Scrivici su WhatsApp</a>
        </div>
      </section>
    </main>
  );
}
