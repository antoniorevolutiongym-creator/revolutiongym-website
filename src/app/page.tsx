import { Header } from "@/components/Header";
import { Placeholder } from "@/components/Placeholder";
import { Section } from "@/components/Section";
import { differentiators, services } from "@/lib/content";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative isolate overflow-hidden bg-revolution-black pt-36">
        <div className="absolute inset-0 -z-10 bg-radial-red" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_100%)] bg-[length:72px_72px] opacity-20" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-32">
          <div>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Bacoli / Premium Fitness</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
              Train like your next level is non-negotiable.
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
              Revolution Gym Bacoli è uno spazio fitness dallo stile essenziale e lussuoso, progettato per chi pretende metodo, presenza e risultati concreti.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="rounded-full bg-revolution-red px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition hover:bg-white hover:text-black">
                Book a visit
              </a>
              <a href="#services" className="rounded-full border border-white/20 px-8 py-4 text-sm font-black uppercase tracking-[0.25em] text-white transition hover:border-white hover:bg-white hover:text-black">
                Explore services
              </a>
            </div>
          </div>
          <Placeholder label="Hero visual placeholder" className="min-h-[34rem] shadow-2xl shadow-black/50" />
        </div>
      </section>

      <Section id="about" eyebrow="About" title="A private-standard training experience" description="Non una palestra generica: un ambiente scenografico, ordinato e focalizzato, dove ogni dettaglio sostiene concentrazione, performance e costanza.">
        <div className="grid gap-6 md:grid-cols-3">
          {['Performance', 'Precision', 'Presence'].map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <h3 className="font-display text-3xl font-black uppercase">{item}</h3>
              <p className="mt-4 text-zinc-400">Percorsi eleganti e funzionali per allenarti con intensità, controllo e una direzione chiara.</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="Designed around ambition" description="Servizi essenziali, premium e scalabili: pronti per essere estesi con pagine dedicate in futuro.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-white/10 bg-zinc-950 p-7 transition hover:-translate-y-1 hover:border-revolution-red/70">
              <span className="text-revolution-red">●</span>
              <h3 className="mt-5 text-xl font-bold">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why choose us" title="Luxury is discipline made visible">
        <div className="grid gap-6 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div key={item} className="rounded-[2rem] bg-white p-8 text-revolution-black">
              <p className="font-display text-5xl font-black text-revolution-red">0{index + 1}</p>
              <p className="mt-8 text-lg font-bold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="gallery" eyebrow="Gallery" title="Replace-ready visual system" description="Nessuna immagine finta: solo spazi placeholder premium per inserire foto reali della struttura.">
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
