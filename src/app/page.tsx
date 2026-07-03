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
  salaDetail: "/images/bodybuilding-03.jpg",
  hyrox: "/images/hyrox-01.jpg",
  hyroxWide: "/images/hyrox-02.jpg",
  combat: "/images/combat-01.jpg",
  combatWide: "/images/combat-02.jpg",
  wellness: "/images/wellness-01.jpg",
  wellnessWide: "/images/IMG_4876.jpeg",
  personal: "/images/coach-antonio.jpg",
};

const paths = [
  {
    eyebrow: "01 / Strength",
    title: "Bodybuilding & Sala Pesi",
    copy: "Costruisci forza, massa e controllo con attrezzature professionali, pesi liberi e una progressione pensata sul tuo livello.",
    image: images.sala,
  },
  {
    eyebrow: "02 / Race Ready",
    title: "HYROX",
    copy: "Allenamenti strutturati per endurance, sled, ergometri, corsa e station training con metodo misurabile.",
    image: images.hyrox,
  },
  {
    eyebrow: "03 / Fight Room",
    title: "Combat Sports",
    copy: "Muay Thai, boxe e kickboxing in una sala vera: tecnica, disciplina, condizionamento e mentalità round dopo round.",
    image: images.combat,
  },
  {
    eyebrow: "04 / Recovery",
    title: "Wellness",
    copy: "Yoga, Pilates, mobilità e riequilibrio per recuperare meglio, respirare meglio e dare qualità al movimento.",
    image: images.wellness,
  },
];

const editorialSections = [
  {
    id: "sala-pesi",
    number: "04",
    eyebrow: "Bodybuilding / Sala Pesi",
    title: "Sala Pesi",
    headline: "Una sala costruita per spingere davvero.",
    copy: "Macchine professionali, bilancieri, manubri e postazioni complete per lavorare su forza, ipertrofia, ricomposizione corporea e preparazione atletica. Un ambiente intenso, ordinato e concreto: meno distrazioni, più carico, più metodo.",
    image: images.salaWide,
    stats: ["Forza", "Ipertrofia", "Tecnica"],
    cards: [
      "Percorsi per principianti, intermedi e atleti avanzati.",
      "Focus su esecuzione, progressione e continuità.",
      "Attrezzatura solida per allenamenti completi e misurabili.",
    ],
  },
  {
    id: "hyrox",
    number: "05",
    eyebrow: "Performance / Official Training Club",
    title: "HYROX OFFICIAL TRAINING CLUB",
    headline: "Potenza, fiato e standard da gara.",
    copy: "Una sezione editoriale, fisica e ad alto impatto per preparare ogni stazione HYROX: corsa, sled, rowing, ski erg, wall ball e lavoro funzionale. Qui ogni sessione ha ritmo, dati e obiettivo.",
    image: images.hyroxWide,
    stats: ["Run", "Sled", "Stations"],
    cards: [
      "Programmazione specifica per costruire endurance e capacità lattacida.",
      "Tecnica sulle stazioni per rendere ogni gesto più efficiente.",
      "Simulazioni, pacing e lavoro mentale per arrivare pronto.",
    ],
  },
  {
    id: "combat",
    number: "06",
    eyebrow: "Combat Sports / Ring Room",
    title: "Sala Combat",
    headline: "Il ring cambia il modo in cui ti alleni.",
    copy: "Sacchi, ring, colpitori e lavoro tecnico per Muay Thai, boxe e kickboxing. Una sala ruvida e premium dove impari a muoverti, colpire, difenderti e restare presente anche quando l’intensità sale.",
    image: images.combatWide,
    stats: ["Boxe", "Muay Thai", "Kickboxing"],
    cards: [
      "Tecnica progressiva per chi inizia e per chi vuole crescere.",
      "Condizionamento fisico completo: ritmo, core, gambe e fiato.",
      "Mentalità, disciplina e controllo in un ambiente autentico.",
    ],
  },
  {
    id: "wellness",
    number: "07",
    eyebrow: "Wellness / Recovery",
    title: "Area Wellness",
    headline: "Recupero, postura e controllo hanno lo stesso peso.",
    copy: "Yoga, Pilates, mobilità, respirazione e riequilibrio posturale completano l’identità Revolution. Il benessere non è un’aggiunta morbida: è ciò che ti permette di allenarti meglio, più a lungo e con più qualità.",
    image: images.wellnessWide,
    stats: ["Pilates", "Yoga", "Mobility"],
    cards: [
      "Lavoro profondo su core, respirazione e postura.",
      "Percorsi ideali per recupero, prevenzione e consapevolezza.",
      "Equilibrio tra intensità, mobilità e qualità del movimento.",
    ],
  },
  {
    id: "personal-training",
    number: "08",
    eyebrow: "Coaching / Personal Training",
    title: "Personal Training",
    headline: "Un percorso riservato, preciso, costruito su di te.",
    copy: "Valutazione iniziale, obiettivi chiari, sedute dedicate e correzione continua. Il personal training Revolution unisce metodo, cura e identità: ogni ripetizione, ogni progressione e ogni scelta hanno un perché.",
    image: images.personal,
    stats: ["Metodo", "Cura", "Risultati"],
    cards: [
      "Programmazione personalizzata per forza, estetica o performance.",
      "Controllo tecnico costante e adattamento del lavoro.",
      "Supporto motivazionale per trasformare l’obiettivo in routine.",
    ],
  },
];

const reasons = [
  "Un unico centro per bodybuilding, HYROX, combat sports e wellness.",
  "Aree forti, riconoscibili e pensate per allenamenti veri.",
  "Metodo tecnico, attenzione alla persona e identità premium.",
  "Percorsi per iniziare, evolvere e restare costante nel tempo.",
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

function EditorialSection({ section, index }: { section: (typeof editorialSections)[number]; index: number }) {
  const reverse = index % 2 === 1;

  return (
    <section id={section.id} className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby={`${section.id}-title`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,38,38,0.2),transparent_30rem)]" />
      <div className="relative mx-auto grid max-w-[92rem] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className={`relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 ${reverse ? "lg:order-2" : ""}`}>
          <Image src={section.image} alt={`${section.title} Revolution Gym Bacoli`} fill sizes="(min-width:1024px) 48vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/60 px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-white backdrop-blur">{section.eyebrow}</div>
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
            {section.stats.map((stat) => (
              <div key={stat} className="rounded-2xl border border-white/10 bg-black/60 p-4 text-center text-xs font-black uppercase tracking-[0.24em] backdrop-blur">
                {stat}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7 shadow-2xl shadow-black/45 sm:p-10 lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.5em] text-revolution-red">{section.number}</p>
            <h2 id={`${section.id}-title`} className="mt-5 font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-7xl lg:text-8xl">{section.title}</h2>
            <p className="mt-7 max-w-3xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">{section.headline}</p>
            <p className="mt-7 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">{section.copy}</p>
          </div>
          <div className="mt-10 grid gap-4">
            {section.cards.map((card, cardIndex) => (
              <div key={card} className="grid grid-cols-[4rem_1fr] items-center gap-4 rounded-[1.5rem] border border-white/10 bg-black/35 p-4">
                <span className="font-display text-4xl font-black text-revolution-red">0{cardIndex + 1}</span>
                <p className="text-sm font-semibold leading-6 text-zinc-200 sm:text-base">{card}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden bg-revolution-black text-white">
      <Header />

      <section className="relative isolate min-h-screen overflow-hidden bg-[#050505] px-5 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32" aria-labelledby="hero-title">
        <Image src={images.hero} alt="Ring e area combat di Revolution Gym a Bacoli" fill priority sizes="100vw" className="-z-30 object-cover object-center opacity-80" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.92)_38%,rgba(5,5,5,0.55)_62%,rgba(5,5,5,0.18)_100%),radial-gradient(circle_at_30%_25%,rgba(215,38,38,0.36),transparent_34rem)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[92rem] items-center gap-10 lg:grid-cols-[1fr_0.86fr]">
          <div className="relative z-10 py-12 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-revolution-red sm:text-sm">Bacoli / Sala pesi e wellness</p>
            <h1 id="hero-title" className="mt-6 font-display text-[5rem] font-black uppercase leading-[0.76] tracking-[-0.1em] sm:text-[8.6rem] lg:text-[11rem] xl:text-[13rem]">
              Revolution <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">Gym</span>
            </h1>
            <p className="mt-8 max-w-4xl text-2xl font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">Bodybuilding & Sala Pesi · HYROX · Combat Sports · Wellness</p>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-200 sm:text-xl sm:leading-9">A Bacoli, un centro completo dove bodybuilding, HYROX, combat sports e wellness convivono con metodo, cura e identità.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Prenota una prova</Button>
              <Button href="#scegli" variant="secondary">Scegli il percorso</Button>
            </div>
          </div>

          <div className="relative hidden min-h-[42rem] lg:block">
            <div className="absolute right-0 top-0 h-[31rem] w-[78%] overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70">
              <Image src={images.salaDetail} alt="Dettaglio sala pesi Revolution Gym" fill sizes="38vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 h-[25rem] w-[62%] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70">
              <Image src={images.hyrox} alt="Allenamento HYROX Revolution Gym" fill sizes="30vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-14 right-10 rounded-[2rem] border border-revolution-red/40 bg-black/75 p-6 shadow-glow backdrop-blur">
              <p className="font-display text-6xl font-black leading-none text-revolution-red">360°</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-white">Training Center</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="relative bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-[92rem] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">02 / Chi siamo</p>
            <h2 id="about-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Non una palestra qualunque.</h2>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl shadow-black/45 sm:p-10">
            <p className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">Revolution Gym è un centro completo, scuro, fisico, riconoscibile: ogni area ha un’identità forte e lavora dentro un unico metodo.</p>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">Dalla sala pesi al ring, dalla preparazione HYROX al wellness, l’obiettivo è creare continuità: allenamenti importanti, cura tecnica e un ambiente che ti fa sentire dentro qualcosa di solido.</p>
          </div>
        </div>
      </section>

      <section id="scegli" className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="paths-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.22),transparent_34rem)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">03 / Scegli il tuo percorso Revolution</p>
            <h2 id="paths-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Quattro strade. Stessa intensità.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {paths.map((path) => (
              <article key={path.title} className="group relative min-h-[34rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-2 hover:border-revolution-red/70">
                <Image src={path.image} alt={`${path.title} Revolution Gym`} fill sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-black uppercase tracking-[0.32em] text-revolution-red">{path.eyebrow}</p>
                  <h3 className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em]">{path.title}</h3>
                  <p className="mt-5 text-sm font-semibold leading-7 text-zinc-200">{path.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {editorialSections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}

      <section id="perche" className="relative bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto max-w-[92rem] rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,38,38,0.18),rgba(255,255,255,0.04)_45%,rgba(0,0,0,0.55))] p-7 shadow-2xl shadow-black/55 sm:p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">09 / Perché scegliere Revolution Gym</p>
          <h2 id="why-title" className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Tutto ha più peso quando è fatto con identità.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason} className="grid grid-cols-[4.5rem_1fr] gap-5 rounded-[1.75rem] border border-white/10 bg-black/35 p-5">
                <span className="font-display text-5xl font-black text-revolution-red">0{index + 1}</span>
                <p className="text-lg font-black uppercase leading-tight tracking-[-0.02em] text-white">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contatti" className="relative overflow-hidden bg-[#050505] px-5 py-20 text-white sm:px-6 lg:px-8 lg:py-28" aria-labelledby="contact-title">
        <Image src={images.hero} alt="Revolution Gym Bacoli" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="relative mx-auto grid max-w-[92rem] gap-10 rounded-[3rem] border border-white/10 bg-black/65 p-7 shadow-2xl shadow-black/60 backdrop-blur sm:p-10 lg:grid-cols-[1fr_0.78fr] lg:p-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">10 / Contatti · Prenota</p>
            <h2 id="contact-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Entra nella Revolution.</h2>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-200">Prenota una prova, visita il centro a Bacoli e scegli il percorso più adatto al tuo obiettivo.</p>
            <address className="mt-8 not-italic text-lg leading-9 text-zinc-200 sm:text-xl">
              <strong className="text-white">Revolution Gym</strong><br />
              Bacoli<br /><br />
              <span className="text-zinc-500">telefono / whatsapp</span><br />
              <a className="transition hover:text-revolution-red" href="tel:+393382332258">338 233 2258</a><br />
              <span className="text-zinc-500">instagram</span><br />
              <span>@revolutiongym</span>
            </address>
          </div>
          <div className="flex flex-col justify-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 sm:p-7">
            <Button href={whatsappUrl}>Scrivici su WhatsApp</Button>
            <Button href={contactUrl} variant="secondary">Contattaci</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
