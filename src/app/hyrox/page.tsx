import Image from "next/image";
import type { CSSProperties } from "react";
import { Header } from "@/components/Header";

const whatsappTrialUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym";

const hyroxImages = [
  "/images/hyrox-01.jpg",
  "/images/hyrox-02.jpg",
  "/images/IMG_4865.jpeg",
  "/images/IMG_4860.jpeg",
];

const whyItems = [
  "Coaching tecnico su corsa, sled, wall ball, row, ski e transizioni.",
  "Ambiente premium, essenziale e concentrato sulla qualità del lavoro.",
  "Progressioni per principianti, intermedi e atleti orientati alla gara.",
  "Sala pesi e conditioning nello stesso club per costruire performance completa.",
];

const classTracks = [
  {
    eyebrow: "Beginner",
    title: "Beginner classes",
    text: "Per chi parte da zero o vuole entrare nel mondo HYROX senza caos: tecnica base, ritmo sostenibile, gestione delle stazioni e costruzione della fiducia.",
    points: ["Fondamentali tecnici", "Intensità scalabile", "Coach sempre presenti"],
  },
  {
    eyebrow: "Performance",
    title: "Performance classes",
    text: "Sessioni più dense per chi vuole spingere: capacità aerobica, forza resistente, pacing, transizioni e lavori specifici sulle stazioni race-day.",
    points: ["Workout cronometrati", "Forza resistente", "Strategia di pacing"],
  },
  {
    eyebrow: "Race prep",
    title: "Race preparation",
    text: "Un percorso mirato verso la competizione: simulazioni, test periodici, gestione dello sforzo e rifinitura tecnica per arrivare pronti al giorno gara.",
    points: ["Simulazioni gara", "Test e benchmark", "Piano progressivo"],
  },
];

const faqs = [
  {
    question: "Devo essere già allenato per iniziare HYROX?",
    answer: "No. Le classi beginner sono pensate per imparare movimenti, ritmo e intensità in modo progressivo, con alternative adatte al livello di partenza.",
  },
  {
    question: "Le classi HYROX preparano anche alla gara?",
    answer: "Sì. Il percorso include lavori su corsa, stazioni, transizioni, pacing e simulazioni per chi vuole preparare una competizione.",
  },
  {
    question: "Posso fare HYROX insieme alla sala pesi?",
    answer: "Sì. Revolution Gym Bacoli integra bodybuilding, sala pesi e conditioning per costruire forza, resistenza e continuità nello stesso centro.",
  },
  {
    question: "Come prenoto una prova?",
    answer: "Puoi scriverci su WhatsApp: il team ti aiuterà a scegliere la classe più adatta e il primo slot disponibile.",
  },
];

export const metadata = {
  title: "HYROX Bacoli | Revolution Gym Official Training Club",
  description: "Pagina HYROX di Revolution Gym Bacoli: classi beginner, performance, race preparation, timetable, gallery e contatti.",
};

export default function HyroxPage() {
  return (
    <main id="hyrox-page" className="min-h-screen bg-revolution-black text-white">
      <Header />

      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black pt-24" aria-labelledby="hyrox-hero-title">
        <div className="absolute inset-0">
          <Image src="/images/hyrox-01.jpg" alt="Allenamento HYROX premium alla Revolution Gym Bacoli" fill sizes="100vw" className="premium-media-image object-cover object-center brightness-110 contrast-125 saturate-125" priority />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_28%,rgba(215,38,38,0.36),transparent_30rem),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.58)_48%,rgba(0,0,0,0.26))]" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_100%)] bg-[length:96px_96px] opacity-10" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
          <div className="animate-hero-reveal max-w-5xl rounded-[2.5rem] border border-white/10 bg-black/55 p-7 shadow-2xl shadow-black/70 backdrop-blur-sm sm:p-10 lg:p-12">
            <p className="text-sm font-black uppercase tracking-[0.55em] text-revolution-red">HYROX Training Club / Bacoli</p>
            <h1 id="hyrox-hero-title" className="mt-6 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.06em] text-white sm:text-8xl lg:text-9xl">
              HYROX <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">Revolution</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl">Un club premium per allenare corsa, stazioni e mentalità race-day con metodo, intensità e coaching tecnico.</p>
            <a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-revolution-red px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-white shadow-glow transition duration-500 hover:-translate-y-1 hover:bg-white hover:text-black">Prenota una prova</a>
          </div>
        </div>
      </section>

      <section id="what-is-hyrox" className="relative isolate overflow-hidden bg-[#050505] py-28 sm:py-36" aria-labelledby="what-title">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_12%,rgba(215,38,38,0.26),transparent_28rem),linear-gradient(180deg,#050505_0%,#111_52%,#050505_100%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div className="scroll-reveal">
            <p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Cos&rsquo;è HYROX</p>
            <h2 id="what-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">La gara fitness che unisce running e workout.</h2>
          </div>
          <p className="scroll-reveal text-xl leading-9 text-zinc-300" style={{ "--reveal-delay": "120ms" } as CSSProperties}>HYROX alterna segmenti di corsa a stazioni funzionali. Per performare servono motore aerobico, forza resistente, tecnica, gestione delle transizioni e lucidità sotto fatica. Alla Revolution Gym Bacoli trasformiamo questi elementi in una programmazione chiara.</p>
        </div>
      </section>

      <section id="why-revolution" className="bg-revolution-black py-28 sm:py-36" aria-labelledby="why-title">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="scroll-reveal max-w-4xl"><p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Perché Revolution Gym Bacoli</p><h2 id="why-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Non solo fatica. Metodo, ambiente e performance.</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{whyItems.map((item, index) => <article key={item} className="scroll-reveal rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-revolution-red/70" style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}><p className="font-display text-5xl font-black text-revolution-red">0{index + 1}</p><p className="mt-8 text-lg font-bold leading-7 text-white">{item}</p></article>)}</div>
        </div>
      </section>

      <section id="hyrox-classes" className="relative isolate overflow-hidden bg-[#030303] py-28 sm:py-36" aria-labelledby="classes-title"><div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_20%,rgba(215,38,38,0.30),transparent_30rem)]" /><div className="mx-auto max-w-7xl px-6 lg:px-8"><h2 id="classes-title" className="scroll-reveal font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Classi HYROX</h2><div className="mt-14 grid gap-6 lg:grid-cols-3">{classTracks.map((track, index) => <article key={track.title} className="hyrox-media scroll-reveal rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/50" style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}><p className="text-xs font-black uppercase tracking-[0.38em] text-revolution-red">{track.eyebrow}</p><h3 className="mt-6 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em]">{track.title}</h3><p className="mt-6 text-lg leading-8 text-zinc-300">{track.text}</p><div className="mt-8 grid gap-3">{track.points.map((point) => <p key={point} className="rounded-full border border-white/10 bg-black/45 px-5 py-3 text-sm font-black uppercase tracking-[0.16em]"><span className="text-revolution-red">✓</span> {point}</p>)}</div></article>)}</div></div></section>

      <section id="timetable" className="bg-white py-28 text-revolution-black sm:py-36" aria-labelledby="timetable-title"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Weekly timetable</p><h2 id="timetable-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Orario settimanale in arrivo.</h2><div className="mt-12 grid gap-4 md:grid-cols-3">{["Lunedì / Mercoledì", "Martedì / Giovedì", "Sabato"].map((day) => <div key={day} className="rounded-[2rem] border border-black/10 bg-zinc-100 p-8"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Placeholder</p><h3 className="mt-4 text-2xl font-black uppercase">{day}</h3><p className="mt-3 text-zinc-600">Slot HYROX da confermare</p></div>)}</div></div></section>

      <section id="hyrox-gallery" className="bg-revolution-black py-28 sm:py-36" aria-labelledby="gallery-title"><div className="mx-auto max-w-7xl px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Gallery</p><h2 id="gallery-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Dentro l&rsquo;energia HYROX.</h2><div className="mt-14 grid auto-rows-[20rem] gap-6 md:grid-cols-2 lg:grid-cols-4">{hyroxImages.map((image, index) => <article key={image} className={`gallery-card scroll-reveal relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 ${index === 0 ? "lg:col-span-2" : ""}`} style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}><Image src={image} alt={`Gallery HYROX Revolution Gym ${index + 1}`} fill sizes="(min-width:1024px) 25vw, 50vw" className="premium-media-image object-cover grayscale transition duration-700 hover:scale-110 hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/85" /></article>)}</div></div></section>

      <section id="faq" className="bg-[#050505] py-28 sm:py-36" aria-labelledby="faq-title"><div className="mx-auto max-w-5xl px-6 lg:px-8"><p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">FAQ</p><h2 id="faq-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Domande frequenti.</h2><div className="mt-12 grid gap-4">{faqs.map((faq) => <details key={faq.question} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6"><summary className="cursor-pointer text-xl font-black uppercase tracking-[0.04em] text-white">{faq.question}</summary><p className="mt-5 text-lg leading-8 text-zinc-300">{faq.answer}</p></details>)}</div></div></section>

      <section id="whatsapp-cta" className="bg-revolution-red px-6 py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-black uppercase tracking-[0.42em] text-white/75">WhatsApp CTA</p><h2 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Prenota la tua prova HYROX.</h2></div><a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="w-fit rounded-full bg-white px-8 py-5 text-sm font-black uppercase tracking-[0.25em] text-black transition duration-500 hover:-translate-y-1 hover:bg-black hover:text-white">Scrivici su WhatsApp</a></div></section>

      <section id="contact" className="bg-revolution-black py-28 sm:py-36" aria-labelledby="contact-title"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:px-8"><div><p className="text-sm font-black uppercase tracking-[0.45em] text-revolution-red">Contatti</p><h2 id="contact-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Revolution Gym Bacoli.</h2><p className="mt-7 text-lg leading-8 text-zinc-300">Via Miseno 91, Bacoli (Napoli), 80070. Prenota la tua prova o parla con il team per scegliere il percorso HYROX più adatto.</p></div><div className="rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-6"><div className="grid gap-4 sm:grid-cols-2"><a className="rounded-[1.5rem] bg-black/45 p-5 hover:bg-revolution-red/20" href="tel:+393382332258"><p className="text-xs font-black uppercase tracking-[0.32em] text-revolution-red">Telefono</p><p className="mt-4 text-xl font-black">3382332258</p></a><a className="rounded-[1.5rem] bg-black/45 p-5 hover:bg-revolution-red/20" href="https://www.instagram.com/r.evolution.gym/" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.32em] text-revolution-red">Instagram</p><p className="mt-4 text-xl font-black">@r.evolution.gym</p></a><a className="rounded-[1.5rem] bg-black/45 p-5 hover:bg-revolution-red/20" href="https://www.tiktok.com/@r.evolutiongym" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.32em] text-revolution-red">TikTok</p><p className="mt-4 text-xl font-black">@r.evolutiongym</p></a></div><a href={whatsappTrialUrl} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-full bg-revolution-red px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] text-white shadow-glow transition hover:bg-white hover:text-black">Prenota una prova</a></div></div></section>
    </main>
  );
}
