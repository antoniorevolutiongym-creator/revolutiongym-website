import Image from "next/image";
import { Header } from "@/components/Header";

const whatsappUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym.";
const contactUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Revolution%20Gym.";
const images = {
  hero: "/images/cb5db689-77a9-4312-98cd-debff4f99b26.jpeg",
  sala: "/images/bodybuilding-01.jpg",
  combat: "/images/combat-01.jpg",
  hyrox: "/images/hyrox-01.jpg",
  wellness: "/images/wellness-01.jpg",
};

const areas = [
  {
    title: "Sala Pesi",
    text: "Forza, composizione corporea e lavoro tecnico con macchine, bilancieri e pesi liberi.",
    image: images.sala,
  },
  {
    title: "Sala Combat",
    text: "Muay Thai, boxe e preparazione tecnica in uno spazio dedicato a disciplina, intensità e crescita.",
    image: images.combat,
  },
  {
    title: "Area HYROX",
    text: "Corsa, sled, ergometri e station training per costruire resistenza, forza e performance.",
    image: images.hyrox,
  },
  {
    title: "Area Wellness",
    text: "Yoga, Pilates e lavoro sul controllo del corpo per migliorare mobilità, postura e benessere.",
    image: images.wellness,
  },
];

const reasons = [
  ["Un centro completo", "Sala pesi, combat sport, HYROX e area wellness in un’unica struttura."],
  ["Allenamento per ogni livello", "Percorsi adatti a chi inizia, a chi vuole rimettersi in forma e a chi cerca performance."],
  ["Ambiente vero", "Uno spazio dove allenarsi seriamente, con energia, attenzione e identità."],
  ["Benessere e prestazione insieme", "Non solo forza o fatica: mobilità, controllo, tecnica e qualità del movimento fanno parte del percorso."],
];

function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-6 py-4 text-center text-xs font-black uppercase tracking-[0.22em] transition duration-300 hover:-translate-y-1 sm:px-8 ${
        variant === "primary"
          ? "bg-revolution-red text-white shadow-glow hover:bg-white hover:text-black"
          : "border border-white/20 bg-white/10 text-white backdrop-blur hover:border-revolution-red hover:bg-revolution-red"
      }`}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-revolution-black text-white">
      <Header />

      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden px-5 pb-12 pt-28 sm:px-6 lg:items-center lg:px-8" aria-labelledby="hero-title">
        <Image src={images.hero} alt="Ring e area combat di Revolution Gym" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/60 to-[#050505]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_20%,rgba(215,38,38,0.32),transparent_26rem)]" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl rounded-[2rem] border border-white/10 bg-black/45 p-6 shadow-2xl shadow-black/60 backdrop-blur-md sm:p-10 lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Wellness · Training · Combat Sport</p>
            <h1 id="hero-title" className="mt-5 font-display text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[9.5rem]">
              Revolution <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff]">Gym</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-100 sm:text-2xl sm:leading-10">
              Il tuo centro sportivo a Bacoli per allenarti a 360°. Sala pesi, combat sport, HYROX e area wellness in un’unica struttura pensata per performance, benessere e risultati concreti.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Prenota una prova</Button>
              <Button href="#contatti" variant="secondary">Contattaci</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="aree" className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="areas-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.18),transparent_34rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Training areas</p>
            <h2 id="areas-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">LE NOSTRE AREE</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">Quattro aree, un solo obiettivo: farti allenare meglio.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {areas.map((area) => (
              <article key={area.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/45 transition duration-500 hover:-translate-y-2 hover:border-revolution-red/60 hover:bg-white/[0.06] hover:shadow-revolution-red/10">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image src={area.image} alt={`${area.title} Revolution Gym`} fill sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-1 w-20 bg-revolution-red transition duration-500 group-hover:w-32" />
                </div>
                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-3xl font-black uppercase tracking-[-0.03em] text-white">{area.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="perche" className="relative bg-[#0a0a0a] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="why-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.24),transparent_30rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <h2 id="why-title" className="font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Perché scegliere Revolution Gym</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(([title, text], index) => (
              <article key={title} className="rounded-[2rem] border border-white/10 bg-black/45 p-7 backdrop-blur">
                <p className="font-display text-5xl font-black text-revolution-red">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-black uppercase tracking-[0.08em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="relative overflow-hidden bg-revolution-red px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.22),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.25rem] border border-white/20 bg-black/25 p-7 shadow-2xl shadow-black/40 backdrop-blur sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-white/75">Contatti · prova</p>
            <h2 id="contact-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Prenota la tua prova</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">Scopri Revolution Gym a Bacoli: sala pesi, combat sport, HYROX e wellness in un’unica struttura pensata per risultati, benessere e performance.</p>
            <address className="mt-8 not-italic text-xl leading-9 text-white/90">
              <strong className="text-white">Revolution Gym</strong><br />
              Bacoli<br /><br />
              <span className="text-white/70">telefono / whatsapp</span><br />
              <a className="hover:text-black" href="tel:+393382332258">338 233 2258</a><br />
              <span className="text-white/70">instagram</span><br />
              <span>@revolutiongym</span>
            </address>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white">Prenota una prova</a>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 bg-black/10 px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-black">Contattaci</a>
          </div>
        </div>
      </section>
    </main>
  );
}
