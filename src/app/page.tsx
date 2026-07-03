import Image from "next/image";
import { Header } from "@/components/Header";

const whatsappUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym.";
const contactUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Revolution%20Gym.";

const images = {
  hero: "/images/hero-ring.jpg",
  sala: "/images/bodybuilding-01.jpg",
  salaWide: "/images/bodybuilding-02.jpg",
  combat: "/images/combat-01.jpg",
  combatWide: "/images/hero-ring.jpg",
  hyrox: "/images/hyrox-01.jpg",
  hyroxWide: "/images/hyrox-02.jpg",
  wellness: "/images/wellness-01.jpg",
  wellnessWide: "/images/IMG_4876.jpeg",
  yogaPilates: "/images/IMG_4879.jpeg",
};

const areas = [
  {
    title: "Sala Pesi",
    text: "Macchine, bilancieri e pesi liberi per costruire forza, massa muscolare e controllo tecnico in modo progressivo.",
    image: images.sala,
  },
  {
    title: "Sala Combat",
    text: "Ring, sacchi e lavoro tecnico per Muay Thai e boxe: disciplina, intensità e crescita reale round dopo round.",
    image: images.combat,
  },
  {
    title: "Area HYROX",
    text: "Corsa, sled, ergometri e station training per allenare potenza, resistenza e performance completa.",
    image: images.hyrox,
  },
  {
    title: "Area Wellness",
    text: "Yoga, Pilates, mobilità e respirazione per recuperare meglio, muoverti meglio e ritrovare equilibrio.",
    image: images.wellness,
  },
];

const editorialBlocks = [
  {
    title: "Sala Pesi",
    kicker: "Forza · controllo · progressione",
    text: "Un ambiente solido e completo dove ogni allenamento ha una direzione precisa: aumentare forza, migliorare composizione corporea e costruire una base atletica reale. Macchine guidate, pesi liberi e lavoro tecnico convivono in una sala pensata per principianti, appassionati e atleti.",
    image: images.salaWide,
  },
  {
    title: "Sala Combat",
    kicker: "Tecnica · ring · mentalità",
    text: "La sala combat è il cuore più intenso della Revolution Gym: ring, sacchi, colpitori e percorsi tecnici per imparare Muay Thai e boxe con metodo. Qui il lavoro fisico incontra disciplina, concentrazione e fiducia nei propri mezzi.",
    image: images.combatWide,
  },
  {
    title: "Area HYROX",
    kicker: "Performance · endurance · potenza",
    text: "Una zona dinamica per chi vuole allenarsi con standard moderni: corsa, sled push, rowing, ski erg e circuiti funzionali. L’Area HYROX trasforma forza e fiato in performance misurabile, sessione dopo sessione.",
    image: images.hyroxWide,
  },
  {
    title: "Area Wellness",
    kicker: "Mobilità · postura · benessere",
    text: "Non solo intensità: il corpo ha bisogno anche di controllo, recupero e qualità del movimento. Yoga, Pilates e attività wellness completano il percorso con un lavoro profondo su mobilità, postura, equilibrio e respirazione.",
    image: images.wellnessWide,
  },
];

const courses = [
  {
    title: "Muay Thai",
    text: "Tecnica, condizionamento e lavoro al sacco per sviluppare colpi, guardia, clinch e mentalità da ring.",
    image: images.combat,
  },
  {
    title: "Boxe",
    text: "Footwork, combinazioni, difesa e preparazione fisica per un allenamento completo, tecnico e ad alta energia.",
    image: images.combatWide,
  },
  {
    title: "HYROX",
    text: "Sessioni strutturate per costruire endurance, forza funzionale e confidenza con le stazioni di gara.",
    image: images.hyrox,
  },
  {
    title: "Yoga & Pilates",
    text: "Respirazione, core, mobilità e postura per recuperare meglio e dare più qualità a ogni allenamento.",
    image: images.yogaPilates,
  },
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

      <section className="relative isolate min-h-screen overflow-hidden bg-[#050505] px-5 pb-12 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32" aria-labelledby="hero-title">
        <Image src={images.hero} alt="Ring e area combat di Revolution Gym a Bacoli" fill priority sizes="100vw" className="-z-20 object-cover object-center opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.82)_35%,rgba(5,5,5,0.24)_100%),radial-gradient(circle_at_24%_28%,rgba(215,38,38,0.36),transparent_30rem)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[92rem] items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative z-10 max-w-5xl py-10 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.48em] text-revolution-red sm:text-sm">Wellness · Training · Combat Sport</p>
            <h1 id="hero-title" className="mt-6 font-display text-[4.7rem] font-black uppercase leading-[0.78] tracking-[-0.09em] sm:text-[8.5rem] lg:text-[10.8rem] xl:text-[12.5rem]">
              Revolution <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">Gym</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl sm:leading-10">
              Il tuo centro sportivo a Bacoli per allenarti a 360°. Sala pesi, sala combat, HYROX e area wellness in un’unica struttura pensata per performance, benessere e risultati concreti.
            </p>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Prenota una prova</Button>
              <Button href="#aree" variant="secondary">Scopri le aree</Button>
            </div>
          </div>

          <div className="relative mb-10 grid gap-4 sm:grid-cols-2 lg:mb-0">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70 sm:min-h-[30rem] lg:translate-y-10">
              <Image src={images.salaWide} alt="Sala pesi Revolution Gym" fill sizes="(min-width:1024px) 26vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <p className="absolute bottom-6 left-6 text-xs font-black uppercase tracking-[0.3em] text-white">Sala Pesi</p>
            </div>
            <div className="grid gap-4">
              <div className="relative min-h-[14rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 sm:min-h-[19rem]">
                <Image src={images.hyroxWide} alt="Area HYROX Revolution Gym" fill sizes="(min-width:1024px) 24vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                <p className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.3em] text-white">HYROX</p>
              </div>
              <div className="relative min-h-[14rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 sm:min-h-[19rem]">
                <Image src={images.wellnessWide} alt="Area wellness Revolution Gym" fill sizes="(min-width:1024px) 24vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                <p className="absolute bottom-5 left-5 text-xs font-black uppercase tracking-[0.3em] text-white">Wellness</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aree" className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="areas-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.18),transparent_34rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Training areas</p>
            <h2 id="areas-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Le nostre aree:</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">Quattro aree, un solo obiettivo: farti allenare meglio.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-2">
            {areas.map((area) => (
              <article key={area.title} className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/45 transition duration-500 hover:-translate-y-2 hover:border-revolution-red/60 hover:bg-white/[0.07] hover:shadow-revolution-red/10">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={area.image} alt={`${area.title} Revolution Gym`} fill sizes="(min-width:1024px) 50vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
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

      <section id="allenati" className="relative bg-[#0a0a0a] px-5 py-24 sm:px-6 lg:px-8 lg:py-36" aria-labelledby="train-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(215,38,38,0.18),transparent_32rem)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Metodo Revolution</p>
            <h2 id="train-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">ALLENATI ALLA REVOLUTION GYM</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">Ogni area ha una sua identità, ma tutte lavorano insieme per costruire forza, tecnica, performance e benessere.</p>
          </div>
          <div className="mt-14 grid gap-7">
            {editorialBlocks.map((block, index) => (
              <article key={block.title} className={`grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/45 lg:grid-cols-2 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                <div className="relative min-h-[19rem] sm:min-h-[27rem]">
                  <Image src={block.image} alt={`${block.title} Revolution Gym Bacoli`} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-revolution-red">{block.kicker}</p>
                  <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">{block.title}</h3>
                  <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">{block.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corsi" className="relative overflow-hidden bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="courses-title">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Corsi</p>
            <h2 id="courses-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">I nostri corsi:</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">Allenamento, tecnica, performance e benessere: scegli il percorso giusto per te.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <article key={course.title} className="group relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/45">
                <Image src={course.image} alt={`${course.title} Revolution Gym`} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="font-display text-4xl font-black uppercase leading-none tracking-[-0.04em]">{course.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-200">{course.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="relative overflow-hidden bg-[#0a0a0a] px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32" aria-labelledby="contact-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.22),transparent_34rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/50 sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Contatti · prova</p>
            <h2 id="contact-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Prenota la tua prova</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">Scopri Revolution Gym a Bacoli e scegli il percorso più adatto a te.</p>
            <address className="mt-8 not-italic text-lg leading-9 text-zinc-200 sm:text-xl">
              <strong className="text-white">Revolution Gym</strong><br />
              Bacoli<br /><br />
              <span className="text-zinc-500">telefono / whatsapp</span><br />
              <a className="transition hover:text-revolution-red" href="tel:+393382332258">338 233 2258</a><br />
              <span className="text-zinc-500">instagram</span><br />
              <span>@revolutiongym</span>
            </address>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-[2rem] border border-white/10 bg-black/35 p-5 sm:p-7">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-revolution-red px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-black">Scrivici su WhatsApp</a>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:border-revolution-red hover:bg-revolution-red">Contattaci</a>
          </div>
        </div>
      </section>
    </main>
  );
}
