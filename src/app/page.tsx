import { Header } from "@/components/Header";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { differentiators, services } from "@/lib/content";

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
              <a href="#discipline" className="rounded-full bg-revolution-red px-7 py-4 text-center text-xs font-black uppercase tracking-[0.24em] text-white shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black">
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
              <p className="text-xs font-black uppercase tracking-[0.35em] text-revolution-red">Open</p>
              <p className="mt-2 font-display text-3xl font-black uppercase text-white">Your Revolution</p>
            </div>
          </div>
        </div>

        <a href="#discipline" className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.32em] text-white/70 transition hover:text-white" aria-label="Scroll to content">
          Scroll
          <span className="h-12 w-px overflow-hidden bg-white/20">
            <span className="block h-5 w-px animate-scroll-indicator bg-revolution-red" />
          </span>
        </a>
      </section>

      <Section id="discipline" eyebrow="Discipline" title="A private-standard training experience" description="Non una palestra generica: un ambiente scenografico, ordinato e focalizzato, dove ogni dettaglio sostiene concentrazione, performance e costanza.">
        <div className="grid gap-6 md:grid-cols-3">
          {['Performance', 'Precision', 'Presence'].map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="font-display text-3xl font-black uppercase">{item}</h3>
              <p className="mt-4 text-zinc-400">Percorsi eleganti e funzionali per allenarti con intensità, controllo e una direzione chiara.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="training" eyebrow="Training" title="Designed around ambition" description="Servizi essenziali, premium e scalabili: pronti per essere estesi con pagine dedicate in futuro.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-revolution-red/70">
              <span className="text-revolution-red">●</span>
              <h3 className="mt-5 text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section id="combat-sport" eyebrow="Combat Sport" title="Luxury is discipline made visible">
        <div className="grid gap-6 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div key={item} className="rounded-[2rem] bg-white p-8 text-revolution-black">
              <p className="font-display text-5xl font-black text-revolution-red">0{index + 1}</p>
              <p className="mt-8 text-lg font-bold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="wellness" eyebrow="Wellness" title="Replace-ready visual system" description="Nessuna immagine finta: solo spazi placeholder premium per inserire foto reali della struttura.">
        <div className="grid gap-5 md:grid-cols-3">
          <Placeholder label="Training floor" />
          <Placeholder label="Equipment detail" />
          <Placeholder label="Lifestyle moment" />
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="Member voices, coming soon">
        <div className="grid gap-5 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <article key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-revolution-red">Placeholder</p>
              <p className="mt-8 text-2xl font-semibold text-white/50">Testimonial reale da inserire.</p>
              <div className="mt-10 h-px bg-white/10" />
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-zinc-500">Member name</p>
            </article>
          ))}
        </div>
      </Section>

      <section id="contact" className="bg-white text-revolution-black">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-revolution-red">Contact</p>
            <h2 className="mt-5 font-display text-5xl font-black uppercase tracking-tight">Begin your revolution in Bacoli.</h2>
          </div>
          <div className="rounded-[2rem] bg-revolution-black p-8 text-white sm:p-10">
            <p className="text-2xl font-semibold leading-10">Prenota una visita, richiedi informazioni o prepara l'integrazione futura con form, WhatsApp e mappe.</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <a className="rounded-full bg-revolution-red px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em]" href="mailto:info@revolutiongymbacoli.it">Email</a>
              <a className="rounded-full border border-white/20 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em]" href="tel:+390000000000">Call</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black px-6 py-10 text-sm text-zinc-500 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl font-black uppercase tracking-[0.24em] text-white">Revolution<span className="text-revolution-red">.</span></p>
          <p>© 2026 Revolution Gym Bacoli. Built for future pages and real brand assets.</p>
        </div>
      </footer>
    </main>
  );
}
