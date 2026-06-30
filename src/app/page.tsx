import { Header } from "@/components/Header";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { aboutHighlights, differentiators, services } from "@/lib/content";

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

      <Section id="discipline" eyebrow="Discipline" title="Un ecosistema premium per corpo, mente e performance" description="Discipline integrate, ambienti scenografici e percorsi ordinati per allenarti con intensità, controllo e una direzione chiara.">
        <div className="grid gap-6 md:grid-cols-3">
          {['HYROX Official Training Club', 'Muay Thai & Boxing', 'Pilates, Yoga e Postura'].map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="font-display text-3xl font-black uppercase">{item}</h3>
              <p className="mt-4 text-zinc-400">Programmi curati per trasformare energia, tecnica e benessere in risultati concreti e sostenibili.</p>
            </div>
          ))}
        </div>
      </Section>

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

      <Section id="wellness" eyebrow="Wellness" title="Recupero, equilibrio e cura professionale" description="Pilates, Yoga, riequilibrio posturale e area fisioterapia dialogano con il training per creare un’esperienza completa e raffinata.">
        <div className="grid gap-5 md:grid-cols-3">
          <Placeholder label="Sala training" />
          <Placeholder label="Dettagli attrezzature" />
          <Placeholder label="Momento wellness" />
        </div>
      </Section>

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
