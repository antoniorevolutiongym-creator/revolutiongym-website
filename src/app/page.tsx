import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { aboutHighlights, differentiators, disciplines, services, wellnessServices } from "@/lib/content";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-revolution-black pt-24" aria-labelledby="hero-title">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1280/101010/2a2a2a?text=Revolution+Gym+Placeholder')] bg-cover bg-center opacity-35 grayscale" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(215,38,38,0.32),transparent_28rem),linear-gradient(90deg,rgba(5,5,5,0.96),rgba(5,5,5,0.72)_42%,rgba(5,5,5,0.92))]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_100%)] bg-[length:84px_84px] opacity-10" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div className="animate-hero-reveal">
            <p className="mb-5 text-xs font-black uppercase tracking-[0.5em] text-revolution-red sm:text-sm">Bacoli / Fitness Club</p>
            <h1 id="hero-title" className="font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-7xl md:text-8xl lg:text-9xl">
              REVOLUTION <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">GYM</span>
            </h1>
            <p className="mt-7 text-sm font-black uppercase tracking-[0.32em] text-white sm:text-base">WELLNESS • TRAINING • COMBAT SPORT</p>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Un centro specializzato dove benessere, performance e sport si incontrano.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#chi-siamo" className="rounded-full bg-revolution-red px-7 py-4 text-center text-xs font-black uppercase tracking-[0.24em] text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
                Esplora Revolution Gym
              </a>
              <a href="#contact" className="rounded-full border border-white/25 bg-white/5 px-7 py-4 text-center text-xs font-black uppercase tracking-[0.24em] text-white transition duration-300 hover:-translate-y-1 hover:border-revolution-red hover:bg-revolution-red">
                Contattaci
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] animate-hero-float rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/60 lg:block">
            <div className="h-full rounded-[2rem] border border-white/10 bg-[url('https://placehold.co/900x1200/151515/3a3a3a?text=Hero+Image+Placeholder')] bg-cover bg-center grayscale" />
            <div className="absolute -left-8 bottom-14 rounded-3xl border border-revolution-red/40 bg-black/70 p-5 backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-revolution-red">Aperto</p>
              <p className="mt-2 font-display text-3xl font-black uppercase text-white">La tua rivoluzione</p>
            </div>
          </div>
        </div>

        <a href="#chi-siamo" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.32em] text-white/70 transition hover:text-white" aria-label="Vai alla sezione Chi siamo">
          Scroll
          <span className="h-12 w-px overflow-hidden bg-white/20">
            <span className="block h-5 w-px animate-scroll-indicator bg-revolution-red" />
          </span>
        </a>
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
                Preparati alla gara fitness più famosa al mondo.
              </p>
            </div>

            <div className="hyrox-command scroll-reveal rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-7" style={{ "--reveal-delay": "120ms" } as CSSProperties}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Allenamenti specifici",
                  "Programmazione per principianti e agonisti",
                  "Simulazioni gara",
                  "Preparazione atletica",
                  "Coach esperti",
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
                <p className="mt-6 text-lg leading-8 text-white/85">Un percorso premium per imparare ritmo, transizioni e gestione dello sforzo con coaching tecnico, intensità progressiva e attenzione al tuo livello di partenza.</p>
              </div>
              <a href="#contact" className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-xs font-black uppercase tracking-[0.24em] text-black transition duration-500 hover:-translate-y-1 hover:bg-black hover:text-white">
                Entra nel percorso <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Foto gara", title: "Foto gara", className: "md:col-span-2" },
                { label: "Foto classi", title: "Foto classi", className: "" },
                { label: "Video competizioni", title: "Video competizioni", className: "md:col-span-3" },
              ].map((media, index) => (
                <div key={media.label} className={`hyrox-media scroll-reveal group relative min-h-72 overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50 ${media.className}`} style={{ "--reveal-delay": `${220 + index * 90}ms` } as CSSProperties}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(215,38,38,0.35),transparent_18rem),linear-gradient(135deg,#171717,#050505)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.10)_0_1px,transparent_1px_100%)] bg-[length:46px_46px] opacity-20" />
                  <div className="relative flex h-full min-h-72 flex-col justify-between p-7">
                    <p className="w-fit rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.28em] text-white/70 backdrop-blur-md">Segnaposto</p>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.36em] text-revolution-red">{media.label}</p>
                      <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-[-0.04em] text-white">{media.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {[
              { value: "12+", label: "Classi ogni settimana" },
              { value: "360°", label: "Preparazione completa" },
              { value: "01", label: "Percorso per ogni livello" },
            ].map((stat, index) => (
              <article key={stat.label} className="hyrox-stat scroll-reveal rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/40 backdrop-blur-md" style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}>
                <p className="font-display text-6xl font-black uppercase leading-none tracking-[-0.06em] text-white sm:text-7xl">{stat.value}</p>
                <div className="mt-6 h-px w-20 bg-gradient-to-r from-revolution-red to-transparent" />
                <p className="mt-6 text-sm font-black uppercase tracking-[0.24em] text-zinc-200">✓ {stat.label}</p>
              </article>
            ))}
          </div>

          <div className="hyrox-cta scroll-reveal mt-16 overflow-hidden rounded-[2.75rem] border border-white/10 bg-white p-8 text-revolution-black shadow-2xl shadow-black/50 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10" style={{ "--reveal-delay": "180ms" } as CSSProperties}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.42em] text-revolution-red">HYROX Revolution Gym</p>
              <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Preparati alla tua prossima HYROX.</h3>
            </div>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-revolution-black px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-revolution-red lg:mt-0">
              SCOPRI HYROX
            </a>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="relative overflow-hidden bg-revolution-black text-white" aria-labelledby="about-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(215,38,38,0.20),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:auto,92px_92px] opacity-80" />
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-revolution-red/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
          <div className="animate-hero-reveal">
            <p className="text-sm font-black uppercase tracking-[0.42em] text-revolution-red">Chi siamo</p>
            <h2 id="about-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Chi è Revolution Gym
            </h2>
            <div className="mt-8 h-px w-32 bg-gradient-to-r from-revolution-red to-transparent" />
            <p className="mt-8 text-xl font-semibold leading-9 text-zinc-100">
              Revolution Gym nasce a Bacoli come fitness center premium per chi cerca più di un semplice allenamento: un luogo in cui estetica, metodo e benessere diventano un percorso quotidiano di evoluzione personale.
            </p>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Ogni area è pensata per accompagnare obiettivi diversi con la stessa cura: dalla forza alla mobilità, dal recupero alla performance, fino alle discipline da combattimento. L’esperienza è elegante, intensa e misurabile, guidata da professionisti che mettono tecnica, ascolto e continuità al centro di ogni programma.
            </p>
          </div>

          <div className="grid gap-5">
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

            <div className="grid gap-5 md:grid-cols-3">
              {["Wellness evoluto", "Training sartoriale", "Combat sport elite"].map((item) => (
                <div key={item} className="rounded-[1.75rem] bg-white p-6 text-revolution-black transition duration-500 hover:-translate-y-1 hover:shadow-glow">
                  <p className="font-display text-2xl font-black uppercase leading-tight">{item}</p>
                </div>
              ))}
            </div>
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
              Un ecosistema premium per corpo, mente e performance
            </h2>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-300 sm:text-xl">
              Sei percorsi distinti, un’unica filosofia: allenarti con precisione, stile e intensità in un ambiente costruito per far emergere la tua versione più forte.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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

      <Section id="training" eyebrow="Training" title="Allenamento costruito sulle tue ambizioni" description="Functional training, preparazione atletica e coaching su misura per evolvere con metodo, presenza e precisione.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-revolution-red/70">
              <span className="text-revolution-red">●</span>
              <h3 className="mt-5 text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section id="combat-sport" eyebrow="Combat Sport" title="La disciplina rende visibile il carattere">
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
                Un centro completo per il tuo benessere
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/40 backdrop-blur-md sm:p-8">
              <p className="text-lg leading-8 text-zinc-300 sm:text-xl">
                Revolution Gym unisce l’energia del combat sport e del fitness a un’anima wellness premium: spazi, professionisti e rituali pensati per respirare meglio, muoversi meglio e recuperare con eleganza.
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
            <span className="text-revolution-red">“</span>Il benessere è il punto di partenza di ogni grande performance.<span className="text-revolution-red">”</span>
          </p>
        </div>
      </section>

      <Section id="app" eyebrow="App" title="La tua esperienza Revolution sempre con te">
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-revolution-red">App</p>
              <p className="mt-8 text-2xl font-semibold text-white/50">Prenotazioni, programmi, comunicazioni e progressi: uno spazio digitale pensato per rendere il percorso ancora più fluido.</p>
              <div className="mt-10 h-px bg-white/10" />
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">Revolution Gym App</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="bg-white text-revolution-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-revolution-red">Contatti</p>
            <h2 className="mt-5 font-display text-5xl font-black uppercase tracking-tight">Inizia la tua rivoluzione a Bacoli.</h2>
          </div>
          <div className="rounded-[2rem] bg-revolution-black p-8 text-white sm:p-10">
            <p className="text-2xl font-semibold leading-10">Prenota una visita, scopri il percorso più adatto a te e vivi Revolution Gym come un fitness center premium costruito intorno alla tua evoluzione.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a className="rounded-full bg-revolution-red px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em]" href="mailto:info@revolutiongymbacoli.it">Email</a>
              <a className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em]" href="tel:+390000000000">Chiama</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-zinc-500 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-black uppercase tracking-[0.24em] text-white">Revolution<span className="text-revolution-red">.</span></p>
          <p>© 2026 Revolution Gym Bacoli. Esperienza premium per wellness, training e combat sport.</p>
        </div>
      </footer>
    </main>
  );
}
