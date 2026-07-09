import Image from "next/image";
import type { CSSProperties } from "react";
import { Header } from "@/components/Header";

const whatsappTrialUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym";

const disciplines = [
  {
    id: "muay-thai",
    eyebrow: "Muay Thai / Arte delle otto armi",
    title: "Muay Thai",
    image: "/images/combat-01.jpg",
    imageAlt: "Allenamento di Muay Thai di gruppo alla Revolution Gym Bacoli",
    copy: "La Muay Thai alla Revolution Gym si allena come si allena un atleta vero: tecnica, clinch, lavoro ai pao e al sacco, condizionamento e sparring controllato. Coaching diretto di Antonio Costagliola, fighter professionista in attività, dal primo giorno all'angolo di un match ufficiale.",
    points: ["Tecnica dal giorno uno", "Sparring controllato", "Percorso agonistico", "Corso Junior dedicato"],
    schedule: [
      { label: "Adulti", slots: ["Lunedì · Mercoledì · Venerdì", "20:00 – 21:30"] },
      { label: "Junior (bambini e ragazzi)", slots: ["Lunedì Mercoledì e Venerdì 17:45 – 18:45"] },
    ],
  },
  {
    id: "boxe",
    eyebrow: "Boxe / Noble art",
    title: "Boxe",
    image: "/images/combat-sparring-ring-01.jpg",
    imageAlt: "Sparring di boxe sul ring della Revolution Gym Bacoli",
    copy: "Colpi di braccia,velocità di gambe, difesa e ritmo: la boxe alla Revolution Gym unisce tecnica pulita e condizionamento reale, sul ring regolamentare e ai sacchi Fairtex. Un lavoro progressivo adatto a chi inizia e a chi vuole salire di livello.",
    points: ["Fondamentali e difesa", "Lavoro al sacco e ai colpitori", "Ring regolamentare", "Condizionamento completo"],
    schedule: [
      { label: "Adulti", slots: ["Martedì · Giovedì 20:30 – 21:30", "Sabato 16:00 – 17:00"] },
    ],
  },
];

export const metadata = {
  title: "Muay Thai e Boxe a Bacoli | Sala Combat — Revolution Gym",
  description:
    "Corsi di Muay Thai e Boxe a Bacoli con un fighter professionista: adulti, bambini e agonisti. Ring regolamentare, orari settimanali e prova su WhatsApp.",
};

export default function CombatPage() {
  return (
    <main id="combat-page" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-black pt-24" aria-labelledby="combat-hero-title">
        <div className="absolute inset-0">
          <Image src="/images/IMG_4869.jpeg" alt="Sala combat con ring e sacchi alla Revolution Gym Bacoli" fill sizes="100vw" className="premium-media-image object-cover object-center brightness-110 contrast-125 saturate-125" priority />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(215,38,38,0.36),transparent_30rem),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.26))]" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="animate-hero-reveal max-w-5xl rounded-[2.5rem] border border-white/10 bg-black/55 p-7 shadow-2xl shadow-black/70 backdrop-blur-sm sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.55em] text-revolution-red">Sala Combat / Bacoli</p>
            <h1 id="combat-hero-title" className="mt-6 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-8xl lg:text-9xl">
              Muay Thai <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">e Boxe</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl">Il cuore tecnico di Revolution Gym: ring regolamentare, sacchi Fairtex e il metodo di chi combatte davvero.</p>
            <a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-revolution-red px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black">Prova una lezione</a>
          </div>
        </div>
      </section>

      {disciplines.map((d, index) => (
        <section key={d.id} id={d.id} className={`relative isolate overflow-hidden py-28 sm:py-36 ${index % 2 === 0 ? "bg-[#050505]" : "bg-revolution-black"}`} aria-labelledby={`${d.id}-title`}>
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(215,38,38,0.22),transparent_28rem)]" />
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
            <p className="text-xs font-black uppercase tracking-[0.42em] text-white/75">Prenota una lezione</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Sali sul ring. Prenota la tua prima lezione.</h2>
          </div>
          <a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-black transition duration-500 hover:-translate-y-1 hover:bg-black hover:text-white">Scrivici su WhatsApp</a>
        </div>
      </section>
    </main>
  );
  foto combat + testo CTA
}
