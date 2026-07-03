import Image from "next/image";
import { Header } from "@/components/Header";

const whatsappUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym.";
const contactUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Revolution%20Gym.";

const images = {
  hero: "/images/IMG_4878.jpeg",
  heroRing: "/images/IMG_4874.jpeg",
  sala: "/images/15d5ba0f-2122-4561-8526-70e77d636329.jpeg",
  salaWide: "/images/2e996e2b-b11a-4144-a677-79799b226b16.jpeg",
  salaDetail: "/images/a081ff89-30d7-4a4d-b624-6418d48dd399.jpeg",
  hyrox: "/images/IMG_4865.jpeg",
  hyroxWide: "/images/IMG_4865.jpeg",
  combat: "/images/IMG_4876.jpeg",
  combatWide: "/images/IMG_4878.jpeg",
  wellness: "/images/IMG_4860.jpeg",
  wellnessWide: "/images/IMG_4860.jpeg",
  personal: "/images/c1a6078e-3cf2-4a5f-b751-9a87e76ea4c8.jpeg",
};

const paths = [
  {
    eyebrow: "01 / Strength",
    title: "Sala Pesi",
    copy: "Forza, massa e controllo in una sala attrezzata per progressioni concrete e allenamenti senza distrazioni.",
    image: images.sala,
  },
  {
    eyebrow: "02 / Fight Room",
    title: "Sala Combat",
    copy: "Boxe, Muay Thai e kickboxing in una sala autentica: tecnica, disciplina, fiato e mentalità round dopo round.",
    image: images.combat,
  },
  {
    eyebrow: "03 / Race Ready",
    title: "Area HYROX",
    copy: "Endurance, sled, ergometri e stazioni funzionali con programmazione chiara, ritmo e dati misurabili.",
    image: images.hyrox,
  },
  {
    eyebrow: "04 / Recovery",
    title: "Area Wellness",
    copy: "Pilates, yoga, mobilità e recupero per dare qualità al movimento e sostenere ogni percorso di allenamento.",
    image: images.wellness,
  },
];

const editorialSections = [
  {
    id: "sala-pesi",
    number: "05",
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
    number: "07",
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
    number: "08",
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
];

const reasons = [
  "Sala pesi, HYROX, combat, wellness e personal training hanno lo stesso peso strategico.",
  "Aree forti, riconoscibili e pensate per allenamenti veri, non per riempire spazio.",
  "Metodo tecnico, attenzione alla persona e identità premium in ogni percorso.",
  "Un ambiente scuro, ordinato e concreto per iniziare, evolvere e restare costante.",
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
        <Image src={images.hero} alt="Ring e area combat di Revolution Gym a Bacoli" fill priority sizes="100vw" className="-z-30 object-cover object-center opacity-75" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.86)_34%,rgba(5,5,5,0.42)_68%,rgba(5,5,5,0.16)_100%),radial-gradient(circle_at_30%_25%,rgba(215,38,38,0.36),transparent_34rem)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />
        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[92rem] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 py-12 lg:py-20">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-revolution-red sm:text-sm">BACOLI · TRAINING · COMBAT · WELLNESS</p>
            <h1 id="hero-title" className="mt-6 font-display text-[4rem] font-black uppercase leading-[0.84] tracking-[-0.055em] sm:text-[6.6rem] lg:text-[7.3rem] xl:text-[8.5rem]">
              Revolution <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">Gym</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl sm:leading-10">A Bacoli, un centro completo dove sala pesi, combat, HYROX e wellness convivono in un’unica struttura pensata per allenamento vero, continuità e risultati concreti.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Prenota una prova</Button>
              <Button href="#scegli" variant="secondary">Scopri le aree</Button>
            </div>
          </div>

          <div className="relative min-h-[34rem] lg:min-h-[42rem]">
            <div className="absolute inset-0 overflow-hidden rounded-[3rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/70">
              <Image src={images.heroRing} alt="Ring della sala combat Revolution Gym Bacoli" fill sizes="(min-width:1024px) 46vw, 100vw" className="object-cover object-center" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_28%,rgba(215,38,38,0.22),transparent_26rem)]" />
            </div>
            <div className="absolute bottom-8 left-6 right-6 grid gap-3 sm:grid-cols-3">
              {['Sala Pesi', 'Combat', 'HYROX'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/65 px-4 py-4 text-center text-xs font-black uppercase tracking-[0.22em] backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
            <div className="absolute right-6 top-6 rounded-[2rem] border border-revolution-red/40 bg-black/75 p-6 shadow-glow backdrop-blur">
              <p className="font-display text-6xl font-black leading-none text-revolution-red">360°</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.28em] text-white">Training Center</p>
            </div>
          </div>
        </div>
      </section>

      <section id="chi-siamo" className="relative bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">02 / Chi siamo</p>
            <h2 id="about-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Centro completo per allenarti a 360°.</h2>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/45 sm:p-12">
            <p className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">Revolution Gym è un training center completo a Bacoli: sala pesi, combat, HYROX, wellness e personal training convivono in una struttura pensata per allenamenti concreti, progressione e continuità.</p>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">Qui puoi costruire forza, migliorare tecnica, preparare una gara, recuperare qualità di movimento o lavorare uno a uno con un coach. Ogni area ha una funzione chiara e un percorso adatto al tuo livello.</p>
          </div>
        </div>
      </section>

      <section id="scegli" className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="paths-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.22),transparent_34rem)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">03 / Scegli il tuo percorso Revolution</p>
            <h2 id="paths-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Le aree principali.</h2>
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


      <section id="personal-training" className="relative overflow-hidden bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="personal-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(215,38,38,0.22),transparent_32rem)]" />
        <div className="relative mx-auto grid max-w-[92rem] gap-8 rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.075),rgba(255,255,255,0.025))] p-7 shadow-2xl shadow-black/55 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:p-12">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950">
            <Image src={images.personal} alt="Personal training Revolution Gym Bacoli" fill sizes="(min-width:1024px) 42vw, 100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full border border-revolution-red/45 bg-black/70 px-5 py-3 text-xs font-black uppercase tracking-[0.28em] text-white backdrop-blur">Coaching su misura</div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">04 / Personal Training</p>
            <h2 id="personal-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">Personal Training su misura.</h2>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-200 sm:text-2xl sm:leading-10">Coaching individuale per obiettivi reali: ricomposizione corporea, dimagrimento, forza, performance, ripresa e continuità. Valutazione, programma, tecnica e progressione seguite da vicino.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Prenota una consulenza</Button>
              <Button href="#contatti" variant="secondary">Parla con il team</Button>
            </div>
          </div>
        </div>
      </section>

      {editorialSections
        .filter((section) => section.id === "hyrox")
        .map((section, index) => (
          <EditorialSection key={section.id} section={section} index={index} />
        ))}

      <section id="perche" className="relative bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto max-w-[92rem] rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,38,38,0.18),rgba(255,255,255,0.04)_45%,rgba(0,0,0,0.55))] p-7 shadow-2xl shadow-black/55 sm:p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">06 / Perché scegliere Revolution Gym</p>
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
        <div className="relative mx-auto grid max-w-[92rem] gap-8 rounded-[3rem] border border-white/10 bg-black/70 p-7 shadow-2xl shadow-black/60 backdrop-blur sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">07 / Contatti · Prenota</p>
            <h2 id="contact-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">Vieni ad allenarti da noi.</h2>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-200">Visita Revolution Gym a Bacoli, prenota una prova o scrivici per scegliere il percorso più adatto tra Sala Pesi, Combat, HYROX, Wellness e Personal Training.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="https://www.google.com/maps/search/?api=1&query=Via%20Miseno%2091%2C%20Bacoli%2080070" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Indirizzo</p><p className="mt-3 text-lg font-bold leading-7">Via Miseno 91<br />80070 Bacoli (NA)</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="tel:+393382332258"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Telefono / WhatsApp</p><p className="mt-3 text-lg font-bold">338 233 2258</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="https://www.instagram.com/r.evolutiongym/" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Instagram</p><p className="mt-3 text-lg font-bold">@r.evolutiongym</p></a>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Orari</p><p className="mt-3 text-lg font-bold leading-7">Lun–Ven 06:00–22:00<br />Sab 08:00–18:00</p></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Scrivici su WhatsApp</Button>
              <Button href={contactUrl} variant="secondary">Richiedi informazioni</Button>
            </div>
          </div>
          <div className="min-h-[28rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/60 lg:min-h-full">
            <iframe title="Mappa Revolution Gym Bacoli" src="https://www.google.com/maps?q=Via%20Miseno%2091%2C%20Bacoli%2080070&output=embed" className="h-full min-h-[28rem] w-full grayscale invert-[0.9] contrast-125" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

    </main>
  );
}
