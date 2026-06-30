import Image from "next/image";
import type { CSSProperties } from "react";
import { AnimatedCounters } from "@/components/AnimatedCounters";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { aboutHighlights, differentiators, disciplines, services, wellnessServices } from "@/lib/content";

const whatsappBookingUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20visita%20alla%20Revolution%20Gym.";

const photography = {
  hero: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2400&q=82",
  strength: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1800&q=80",
  hyrox: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1800&q=80",
  combat: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1800&q=80",
  wellness: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1800&q=80",
  coaching: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1800&q=80",
};

const hyroxMedia = [
  { label: "Energia race-day", title: "Energia race-day", image: photography.hyrox, className: "md:col-span-2" },
  { label: "Classi HYROX", title: "Classi HYROX", image: photography.strength, className: "" },
  { label: "Preparazione in azione", title: "Preparazione in azione", image: photography.wellness, className: "md:col-span-3" },
];


const mainPillars = [
  {
    title: "Bodybuilding & Sala Pesi",
    description: "Una sala pesi completa e curata per costruire forza, ipertrofia e controllo del corpo con un metodo progressivo.",
    benefits: ["Attrezzature professionali", "Programmi su misura", "Progressione tecnica"],
    image: photography.strength,
  },
  {
    title: "HYROX",
    description: "Preparazione dedicata per corsa, stazioni e transizioni, con coaching tecnico e intensità calibrata sul tuo livello.",
    benefits: ["Sessioni specifiche", "Simulazioni gara", "Condizionamento completo"],
    image: photography.hyrox,
  },
  {
    title: "Combat Sports",
    description: "Muay Thai, Boxe e Kickboxing in un ambiente energico, tecnico e controllato, dal primo approccio al lavoro avanzato.",
    benefits: ["Tecnica sul ring", "Classi guidate", "Disciplina e sicurezza"],
    image: photography.combat,
  },
  {
    title: "Wellness",
    description: "Pilates, Yoga, postura e fisioterapia completano l’allenamento con attenzione a mobilità, recupero e benessere quotidiano.",
    benefits: ["Mobilità e postura", "Recupero attivo", "Supporto specializzato"],
    image: photography.wellness,
  },
];

const galleryItems = [
  { title: "Bodybuilding & Sala Pesi", eyebrow: "Training floor", image: photography.strength, className: "lg:col-span-5" },
  { title: "HYROX", eyebrow: "Official Training Club", image: photography.hyrox, className: "lg:col-span-7" },
  { title: "Combat", eyebrow: "Muay Thai & Boxing", image: photography.combat, className: "lg:col-span-7" },
  { title: "Ring", eyebrow: "Night session", image: photography.hero, className: "lg:col-span-5" },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-revolution-black pt-24" aria-labelledby="hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-45 grayscale" style={{ backgroundImage: `url(${photography.hero})` }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(215,38,38,0.32),transparent_28rem),linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.92))]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_100%)] bg-[length:84px_84px] opacity-10" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="animate-hero-reveal">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-revolution-red sm:text-sm">Bacoli / Sala pesi e wellness</p>
            <h1 id="hero-title" className="font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
              REVOLUTION <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">GYM</span>
            </h1>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.32em] text-white sm:text-base">BODYBUILDING & SALA PESI • HYROX • COMBAT SPORTS • WELLNESS</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              A Bacoli, un centro completo dove bodybuilding, HYROX, combat sports e wellness convivono con metodo, cura e identità.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#chi-siamo" className="rounded-full bg-revolution-red px-7 py-4 text-center text-xs font-black uppercase tracking-[0.24em] text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                Scopri il centro
              </a>
              <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-1 hover:border-revolution-red hover:bg-revolution-red">
                Prenota una visita
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] animate-hero-float overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/60 lg:block">
            <div className="h-full rounded-[2rem] border border-white/10 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${photography.hero})` }} />
            <div className="absolute -left-8 bottom-14 rounded-3xl border border-revolution-red/40 bg-black/70 p-5 backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-revolution-red">Bacoli</p>
              <p className="mt-2 font-display text-3xl font-black uppercase text-white">Bodybuilding & Sala Pesi • HYROX</p>
            </div>
          </div>
        </div>

        <a href="#chi-siamo" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.32em] text-white/70 transition hover:text-white" aria-label="Vai alla sezione Chi siamo">
          Scorri
          <span className="h-12 w-px overflow-hidden bg-white/20">
            <span className="block h-5 w-px animate-scroll-indicator bg-revolution-red" />
          </span>
        </a>
      </section>

      <section id="pilastri" className="relative isolate overflow-hidden bg-[#050505] py-24 text-white sm:py-32" aria-labelledby="pilastri-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_10%,rgba(215,38,38,0.28),transparent_28rem),radial-gradient(circle_at_88%_45%,rgba(255,255,255,0.08),transparent_20rem),linear-gradient(180deg,#050505_0%,#111111_48%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:104px_104px] opacity-10" />
        <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(82rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-revolution-red to-transparent" />

        <div className="mx-auto max-w-[92rem] px-6 lg:px-8">
          <div className="scroll-reveal max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">I quattro pilastri</p>
            <h2 id="pilastri-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-6xl lg:text-8xl">
              Scegli il tuo percorso Revolution
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Quattro aree principali, una sola identità: allenamento serio, ambiente premium e supporto reale per costruire continuità.
            </p>
          </div>

          <div className="mt-16 grid gap-7 lg:grid-cols-2">
            {mainPillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className="scroll-reveal group grid overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/55 backdrop-blur-sm transition duration-700 hover:-translate-y-2 hover:border-revolution-red/70 hover:shadow-glow xl:grid-cols-[0.95fr_1.05fr]"
                style={{ "--reveal-delay": `${index * 100}ms` } as CSSProperties}
              >
                <div className="relative min-h-80 overflow-hidden xl:min-h-full">
                  <div className="absolute inset-0 scale-105 bg-cover bg-center grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" style={{ backgroundImage: `url(${pillar.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/88 xl:bg-gradient-to-r" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                    Pilastro 0{index + 1}
                  </div>
                </div>

                <div className="flex min-h-[30rem] flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <div className="h-px w-20 bg-gradient-to-r from-revolution-red to-transparent transition-all duration-700 group-hover:w-40" />
                    <h3 className="mt-7 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">{pillar.description}</p>
                    <div className="mt-8 grid gap-3">
                      {pillar.benefits.map((benefit) => (
                        <p key={benefit} className="rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white transition duration-500 group-hover:border-revolution-red/45">
                          <span className="text-revolution-red">✓</span> {benefit}
                        </p>
                      ))}
                    </div>
                  </div>

                  <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-revolution-red px-6 py-4 text-xs font-black uppercase tracking-[0.24em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black">
                    Prenota su WhatsApp <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="hyrox" className="relative isolate overflow-hidden bg-[#030303] py-24 text-white sm:py-32" aria-labelledby="hyrox-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(215,38,38,0.36),transparent_30rem),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.12),transparent_22rem),linear-gradient(135deg,#030303_0%,#101010_45%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.10)_0_1px,transparent_1px_100%)] bg-[length:118px_118px] opacity-10" />
        <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(92rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-revolution-red to-transparent" />
        <div className="absolute -right-24 top-24 -z-10 h-80 w-80 rounded-full border border-revolution-red/20 bg-revolution-red/10 blur-2xl" />

        <div className="mx-auto max-w-[92rem] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="scroll-reveal">
              <p className="text-sm font-black uppercase tracking-[0.52em] text-revolution-red">Programma di punta</p>
              <h2 id="hyrox-title" className="mt-5 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl xl:text-9xl">
                HYROX <span className="block text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.92)]">Official Training Club</span>
              </h2>
              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-9 text-zinc-100 sm:text-3xl">
                A Bacoli alleni la gara con una programmazione precisa: corsa, stazioni, transizioni e gestione dello sforzo diventano parte di un metodo continuo.
              </p>
            </div>

            <div className="hyrox-command scroll-reveal rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-7" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Sessioni HYROX dedicate",
                  "Programmi per esordienti e atleti",
                  "Simulazioni e test periodici",
                  "Forza resistente e conditioning",
                  "Coaching tecnico in sala",
                ].map((item, index) => (
                  <article key={item} className="group rounded-[1.6rem] border border-white/10 bg-black/45 p-5 transition duration-500 hover:-translate-y-1 hover:border-revolution-red/70 hover:bg-revolution-red/10">
                    <p className="font-display text-sm font-black uppercase tracking-[0.28em] text-revolution-red">0{index + 1}</p>
                    <h3 className="mt-4 text-lg font-black uppercase leading-tight tracking-[0.08em] text-white">{item}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="scroll-reveal flex flex-col justify-between gap-6 rounded-[2.5rem] border border-revolution-red/25 bg-revolution-red p-8 text-white shadow-glow sm:p-10" style={{ "--reveal-delay": "160ms" } as CSSProperties}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.42em] text-white/70">Metodo race-day</p>
                <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl">Forza, resistenza, strategia.</h3>
                <p className="mt-6 text-lg leading-8 text-white/85">Un percorso riservato per costruire ritmo, transizioni e gestione dello sforzo con coaching tecnico, intensità progressiva e attenzione reale al livello di partenza.</p>
              </div>
              <a href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.24em] text-black transition duration-500 hover:-translate-y-1 hover:bg-black hover:text-white">
                Prenota una prova <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {hyroxMedia.map((media, index) => (
                <div key={media.label} className={`hyrox-media scroll-reveal group relative min-h-72 overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50 ${media.className}`} style={{ "--reveal-delay": `${220 + index * 90}ms` } as CSSProperties}>
                  <div className="absolute inset-0 scale-105 bg-cover bg-center grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" style={{ backgroundImage: `url(${media.image})` }} />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 to-black/95" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(215,38,38,0.35),transparent_18rem)]" />
                  <div className="relative flex h-full min-h-72 flex-col justify-between p-7">
                    <p className="w-fit rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">Revolution Gym</p>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.36em] text-revolution-red">{media.label}</p>
                      <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.04em] text-white">{media.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 scroll-reveal">
            <AnimatedCounters
              counters={[
                { value: 12, suffix: "+", label: "sessioni HYROX e conditioning" },
                { value: 360, suffix: "°", label: "corsa, stazioni e transizioni" },
                { value: 1, label: "programma progressivo dedicato" },
              ]}
            />
          </div>

          <div className="hyrox-cta scroll-reveal mt-16 overflow-hidden rounded-[2.75rem] border border-white/10 bg-white p-8 text-revolution-black shadow-2xl shadow-black/50 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10" style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.42em] text-revolution-red">HYROX Revolution Gym</p>
              <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Costruisci la tua HYROX con metodo, non con improvvisazione.</h3>
            </div>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-revolution-black px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-revolution-red lg:mt-0">
              Parla con un coach
            </a>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="relative overflow-hidden bg-revolution-black text-white" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(215,38,38,0.20),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:auto,92px_92px] opacity-80" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-revolution-red/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="scroll-reveal">
            <p className="text-sm font-black uppercase tracking-[0.42em] text-revolution-red">Chi siamo</p>
            <h2 id="about-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Revolution Gym Bacoli
            </h2>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-revolution-red to-transparent" />
            <p className="mt-8 text-xl font-semibold leading-9 text-zinc-100">
              Revolution Gym è un bodybuilding e wellness center completo a Bacoli, creato per chi vuole allenarsi con serietà, recuperare con attenzione e vivere lo sport in un ambiente curato.
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Bodybuilding & Sala Pesi • HYROX • Combat Sports • Wellness non è uno slogan: è la struttura del centro. HYROX, Muay Thai, Boxe, Kickboxing, Bodybuilding & Sala Pesi, Pilates, Yoga, Riequilibrio Posturale e Area Fisioterapia lavorano insieme per dare continuità a performance, prevenzione e qualità del movimento.
            </p>
          </div>

          <div className="scroll-reveal grid gap-5" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {aboutHighlights.map((item, index) => (
                  <div key={item} className="group rounded-[1.5rem] border border-white/10 bg-black/40 p-5 transition duration-500 hover:-translate-y-1 hover:border-revolution-red/60 hover:bg-revolution-red/10">
                    <p className="font-display text-sm font-black uppercase tracking-[0.3em] text-revolution-red">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="mt-4 text-lg font-black uppercase tracking-[0.08em] text-white">{item}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {["Bodybuilding & Sala Pesi", "HYROX", "Combat Sports", "Wellness"].map((item) => (
                <div key={item} className="rounded-[1.75rem] bg-white p-6 text-revolution-black transition duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <p className="font-display text-2xl font-black uppercase leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="metodo" className="relative isolate overflow-hidden bg-black py-28 text-white sm:py-40" aria-labelledby="method-title">
        <div className="absolute inset-0 -z-10 bg-cover bg-center grayscale" style={{ backgroundImage: `url(${photography.coaching})` }} />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.96),rgba(0,0,0,0.72)_48%,rgba(0,0,0,0.92)),radial-gradient(circle_at_70%_30%,rgba(215,38,38,0.30),transparent_28rem)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-revolution-red to-transparent" />

        <div className="mx-auto grid max-w-[92rem] gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:px-8">
          <div className="scroll-reveal">
            <p className="text-sm font-black uppercase tracking-[0.52em] text-revolution-red">Il Metodo Revolution</p>
            <h2 id="method-title" className="mt-6 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl xl:text-9xl">
              Metodo prima. Intensità dopo.
            </h2>
            <p className="mt-8 max-w-3xl text-2xl font-semibold leading-9 text-zinc-100 sm:text-3xl">
              Ogni percorso parte da ascolto, valutazione e progressione: non vendiamo caos, costruiamo continuità.
            </p>
          </div>

          <div className="scroll-reveal grid gap-5" style={{ "--reveal-delay": "140ms" } as CSSProperties}>
            {[
              { title: "Valutiamo", text: "Obiettivi, livello, mobilità e storia sportiva entrano nel programma prima del carico." },
              { title: "Alleniamo", text: "Coach presenti, tecnica leggibile e stimoli calibrati per forza, conditioning e recupero." },
              { title: "Misuriamo", text: "Progressi, sensazioni e continuità guidano gli step successivi, senza improvvisazione." },
            ].map((item, index) => (
              <article key={item.title} className="rounded-[2rem] border border-white/10 bg-black/65 p-7 shadow-2xl shadow-black/50 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:border-revolution-red/70 hover:bg-revolution-red/10 sm:p-8">
                <p className="font-display text-4xl font-black uppercase leading-none text-revolution-red">0{index + 1}</p>
                <h3 className="mt-6 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] text-white sm:text-5xl">{item.title}</h3>
                <p className="mt-5 text-lg leading-8 text-zinc-300">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="discipline" className="relative isolate overflow-hidden bg-revolution-black py-24 text-white sm:py-32" aria-labelledby="discipline-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(215,38,38,0.28),transparent_28rem),radial-gradient(circle_at_88%_78%,rgba(215,38,38,0.20),transparent_24rem),linear-gradient(180deg,#050505_0%,#0b0b0b_46%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:96px_96px] opacity-10" />
        <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(72rem,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-revolution-red to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Discipline</p>
            <h2 id="discipline-title" className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Bodybuilding, HYROX, combat sports e wellness nello stesso centro
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Ogni disciplina ha un’identità chiara e la stessa attenzione al dettaglio: tecnica, progressione e qualità dell’esperienza, dal primo ingresso al lavoro avanzato.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {disciplines.map((discipline, index) => (
              <article
                key={discipline.title}
                className="discipline-card scroll-reveal group relative min-h-[31rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div
                  className="absolute inset-0 scale-105 bg-cover bg-center transition duration-700 ease-out group-hover:scale-110 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${discipline.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/62 to-black/95 transition duration-700 group-hover:from-black/10 group-hover:via-black/48 group-hover:to-black" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.34),transparent_22rem)] opacity-60 transition duration-700 group-hover:opacity-100" />
                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <span className="rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
                    0{index + 1}
                  </span>
                  <span className="h-3 w-3 rounded-full bg-revolution-red shadow-[0_0_28px_rgba(215,38,38,0.9)]" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="h-px w-20 bg-gradient-to-r from-revolution-red to-transparent transition-all duration-500 group-hover:w-36" />
                  <h3 className="mt-6 font-display text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-4xl">
                    {discipline.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">{discipline.description}</p>
                  <a
                    href={discipline.href}
                    className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white px-5 py-3 text-[0.68rem] font-black uppercase tracking-[0.24em] text-black transition duration-500 hover:border-revolution-red hover:bg-revolution-red hover:text-white group-hover:-translate-y-1 group-hover:shadow-glow"
                  >
                    Scopri di più
                    <span aria-hidden="true" className="transition duration-500 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="gallery" className="relative isolate overflow-hidden bg-revolution-black py-24 text-white sm:py-32" aria-labelledby="gallery-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(215,38,38,0.22),transparent_26rem),linear-gradient(180deg,#050505_0%,#0b0b0b_50%,#050505_100%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Gallery</p>
            <h2 id="gallery-title" className="font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Dentro l’esperienza Revolution</h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">Bodybuilding & Sala Pesi, HYROX, combat sports e ring convivono in un racconto visivo essenziale, notturno e premium, fedele all’identità del centro.</p>
          </div>

          <div className="mt-16 grid auto-rows-[22rem] gap-6 lg:grid-cols-12">
            {galleryItems.map((item, index) => (
              <article key={item.title} className={`gallery-card scroll-reveal group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50 ${item.className}`} style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}>
                <div className="absolute inset-0 scale-105 bg-cover bg-center grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-black/90" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(215,38,38,0.28),transparent_18rem)] opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <p className="text-xs font-black uppercase tracking-[0.36em] text-revolution-red">{item.eyebrow}</p>
                  <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] text-white sm:text-6xl">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section id="training" eyebrow="Training" title="Training completo, programmato e verificabile" description="Dalla preparazione HYROX alla sala pesi, ogni percorso nasce da obiettivi concreti e da una progressione sostenibile.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-revolution-red/70">
              <span className="text-revolution-red">●</span>
              <h3 className="mt-5 text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section id="combat-sport" eyebrow="Combat Sports" title="Muay Thai e Boxing: tecnica prima dell’intensità">
        <div className="grid gap-6 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div key={item} className="rounded-[2rem] bg-white p-8 text-revolution-black">
              <p className="font-display text-5xl font-black text-revolution-red">0{index + 1}</p>
              <p className="mt-8 text-lg font-bold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="wellness" className="relative isolate overflow-hidden bg-revolution-black py-24 text-white sm:py-32" aria-labelledby="wellness-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(215,38,38,0.18),transparent_24rem),radial-gradient(circle_at_86%_20%,rgba(255,255,255,0.08),transparent_18rem),linear-gradient(180deg,#050505_0%,#090909_52%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07)_0_1px,transparent_1px_100%)] bg-[length:110px_110px] opacity-10" />
        <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(76rem,88vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="scroll-reveal grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Wellness</p>
              <h2 id="wellness-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Benessere, postura e recupero in un’unica direzione
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-8">
              <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
                Pilates, Yoga, Riequilibrio Posturale e Area Fisioterapia completano l’allenamento con un lavoro profondo su mobilità, respirazione, prevenzione e recupero.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6">
            {wellnessServices.map((service, index) => (
              <article
                key={service.title}
                className="wellness-card scroll-reveal group grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/45 backdrop-blur-sm transition duration-700 hover:border-revolution-red/60 md:grid-cols-[0.82fr_1.18fr]"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <div className="relative min-h-64 overflow-hidden md:min-h-full">
                  <div
                    className="absolute inset-0 scale-105 bg-cover bg-center grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/45 to-black/85 md:bg-gradient-to-r" />
                  <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/80 backdrop-blur-md">
                    Wellness 0{index + 1}
                  </div>
                </div>

                <div className="relative flex min-h-64 flex-col justify-center p-7 sm:p-10 lg:p-12">
                  <div className="absolute right-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-revolution-red/40 bg-revolution-red/10 text-2xl font-black text-revolution-red shadow-[0_0_35px_rgba(215,38,38,0.18)] transition duration-700 group-hover:scale-110 group-hover:bg-revolution-red group-hover:text-white">
                    <span aria-hidden="true">{service.icon}</span>
                  </div>
                  <div className="h-px w-20 bg-gradient-to-r from-revolution-red to-transparent transition-all duration-700 group-hover:w-40" />
                  <h3 className="mt-7 max-w-3xl font-display text-3xl font-black uppercase leading-none tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="scroll-reveal mx-auto mt-16 max-w-4xl text-center font-display text-3xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            <span className="text-revolution-red">“</span>Quando il corpo si muove meglio, l’allenamento diventa più preciso.<span className="text-revolution-red">”</span>
          </p>
        </div>
      </section>

      <Section id="app" eyebrow="App" title="Gestisci il tuo percorso con semplicità">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { title: "Prenotazioni", text: "Scegli le classi e organizza la settimana con un accesso rapido agli orari del club." },
            { title: "Percorsi", text: "Tieni insieme allenamento, recupero e obiettivi con comunicazioni chiare dal team Revolution." },
            { title: "Continuità", text: "Resta connesso al centro anche fuori dalla sala, senza perdere ritmo e appuntamenti." },
          ].map((item) => (
            <article key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-revolution-red">App</p>
              <h3 className="mt-8 text-2xl font-black uppercase tracking-[0.08em] text-white">{item.title}</h3>
              <p className="mt-5 text-lg font-semibold leading-8 text-white/60">{item.text}</p>
              <div className="mt-10 h-px bg-white/10" />
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">Esperienza digitale Revolution</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="relative isolate overflow-hidden bg-revolution-black py-24 text-white sm:py-32" aria-labelledby="contact-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_18%,rgba(215,38,38,0.24),transparent_24rem),radial-gradient(circle_at_86%_74%,rgba(255,255,255,0.10),transparent_20rem),linear-gradient(180deg,#050505_0%,#101010_52%,#050505_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:96px_96px] opacity-10" />
        <div className="absolute left-1/2 top-0 -z-10 h-px w-[min(76rem,88vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-revolution-red to-transparent" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div className="scroll-reveal">
              <p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Contatti</p>
              <h2 id="contact-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">Entra in Revolution Gym Bacoli.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">Prenota una visita e confrontati con il team: ti aiuteremo a scegliere il percorso più coerente tra HYROX, Bodybuilding & Sala Pesi, Combat Sports, Pilates, Yoga, postura e fisioterapia.</p>
            </div>

            <div className="scroll-reveal rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-8" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Indirizzo", value: "Via Miseno 91, Bacoli (Napoli), 80070", href: "https://www.google.com/maps/search/?api=1&query=Via%20Miseno%2091%2C%20Bacoli%20%28Napoli%29%2C%2080070" },
                  { label: "Telefono", value: "3382332258", href: "tel:+393382332258" },
                  { label: "Fisso", value: "0815235944", href: "tel:+390815235944" },
                  { label: "Instagram", value: "@r.evolutiongym", href: "https://www.instagram.com/r.evolutiongym/" },
                  { label: "TikTok", value: "@r.evolutiongym", href: "https://www.tiktok.com/@r.evolutiongym" },
                  { label: "Instagram Team Costagliola", value: "@teamcostagliola", href: "https://www.instagram.com/teamcostagliola/" },
                ].map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="group rounded-[1.5rem] border border-white/10 bg-black/45 p-5 transition duration-500 hover:-translate-y-1 hover:border-revolution-red/70 hover:bg-revolution-red/10">
                    <p className="text-xs font-black uppercase tracking-[0.32em] text-revolution-red">{item.label}</p>
                    <p className="mt-4 text-lg font-black leading-7 text-white transition group-hover:text-white">{item.value}</p>
                  </a>
                ))}
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-revolution-red/25 bg-revolution-red p-6 shadow-glow">
                <p className="text-xs font-black uppercase tracking-[0.36em] text-white/75">Orari</p>
                <div className="mt-5 grid gap-3 text-lg font-black text-white sm:grid-cols-3">
                  <p>Lun-Ven<br /><span className="text-white/75">7:00-22:00</span></p>
                  <p>Sabato<br /><span className="text-white/75">9:00-20:00</span></p>
                  <p>Domenica<br /><span className="text-white/75">9:00-13:00</span></p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a className="rounded-full bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-revolution-black transition duration-500 hover:-translate-y-1 hover:bg-revolution-red hover:text-white" href={whatsappBookingUrl} target="_blank" rel="noopener noreferrer">Prenota su WhatsApp</a>
                <a className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white transition duration-500 hover:-translate-y-1 hover:border-revolution-red hover:bg-revolution-red" href="tel:+393382332258">Chiama ora</a>
              </div>
            </div>
          </div>

          <div className="scroll-reveal mt-12 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/60" style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <iframe
              title="Mappa Revolution Gym Bacoli"
              src="https://www.google.com/maps?q=Via%20Miseno%2091%2C%20Bacoli%20%28Napoli%29%2C%2080070&output=embed"
              className="h-[24rem] w-full rounded-[2rem] border-0 grayscale invert-[0.9] md:h-[30rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-zinc-500 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/revolution-gym-logo.svg"
            alt="Revolution Gym"
            width={240}
            height={84}
            className="h-auto w-44 object-contain sm:w-56"
          />
          <p>© 2026 Revolution Gym Bacoli. Bodybuilding & Sala Pesi • HYROX • Combat Sports • Wellness.</p>
        </div>
      </footer>
    </main>
  );
}
