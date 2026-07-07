import Image from "next/image";
import { Header } from "@/components/Header";

const whatsappUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym";
const images = {
  hero: "/images/hero-ring.jpg",
  heroRing: "/images/hero-ring.jpg",
  sala: "/images/bodybuilding-01.jpg",
  salaWide: "/images/68754fd6-ac1f-4327-9b0b-a8dc89163045.jpeg",
  salaDetail: "/images/a081ff89-30d7-4a4d-b624-6418d48dd399.jpeg",
  hyrox: "/images/hyrox-02.jpg",
  hyroxWide: "/images/hyrox-01.jpg",
  combat: "/images/IMG_4869.jpeg",
  combatWide: "/images/combat-01.jpg",
  wellness: "/images/IMG_4876.jpeg",
  wellnessWide: "/images/wellness-01.jpg",
  personal: "/images/bodybuilding-02.jpg",
};

const paths = [
  {
    eyebrow: "01 / Strength",
    title: "SALA PESI",
    copy: "Costruisci forza, ridisegna il fisico, migliora ogni gesto. Macchine isotoniche, bilancieri, manubri e progressioni pensate per portarti dove vuoi arrivare — un passo alla volta, con metodo.",
    image: images.sala,
  },
  {
    eyebrow: "02 / Combat",
    title: "SALA COMBAT",
    copy: "Il ring non mente. Qui la Muay Thai e la Boxe si allenano come si allena un atleta vero: tecnica, sparring, condizionamento e la mentalità che fa la differenza tra chi si allena e chi combatte. Formiamo fighter da gara e diamo a ogni persona la versione più forte di sé. Sali. Il resto lo costruiamo insieme.",
    image: images.combat,
  },
  {
    eyebrow: "03 / HYROX",
    title: "Area HYROX",
    copy: "L’unica area a Bacoli dove ti prepari davvero alla gara HYROX, non ci giochi. Corsa, sled, ergometri, forza resistente e transizioni allenate come in competizione, dentro una programmazione che ti porta al giorno della gara pronto a spingere dal primo all’ultimo metro. Che sia la tua prima HYROX o il tuo prossimo PB, qui trovi chi le gare le corre davvero.",
    image: images.hyrox,
  },
  {
    eyebrow: "04 / Wellness",
    title: "Area Wellness",
    copy: "Il tuo corpo lavora meglio quando si muove bene. Yoga, Pilates e mobilità per postura, controllo e recupero: le fondamenta invisibili di ogni risultato.",
    image: images.wellness,
  },
  {
    eyebrow: "05 / Coaching",
    title: "Personal Training",
    copy: "Percorsi individuali su misura per dimagrimento, ricomposizione corporea, performance e continuità.",
    image: images.personal,
  },
];

const editorialSections = [
  {
    id: "sala-pesi",
    number: "05",
    eyebrow: "Sala Pesi / Strength",
    title: "SALA PESI: FORZA, COSTRUZIONE E QUALITÀ DEL LAVORO",
    headline: "",
    copy: "Un’area pensata per chi vuole migliorare forza, composizione corporea, tecnica e continuità di allenamento.\n\nMacchine, manubri, bilancieri e lavoro programmato convivono in uno spazio ordinato, serio e costruito per allenarsi bene.",
    image: images.salaWide,
    stats: ["Forza", "Costruzione", "Qualità"],
    cards: ["SCOPRI LA SALA PESI"],
  },
  {
    id: "hyrox",
    number: "06",
    eyebrow: "HYROX / Performance",
    title: "CENTRO AFFILIATO HYROX A BACOLI",
    headline: "",
    copy: "Revolution Gym è centro affiliato HYROX. L’area HYROX è pensata per preparare la gara e migliorare corsa, sled, ergometri, transizioni, forza resistente e gestione dello sforzo.\n\nDall’esordiente all’atleta che vuole migliorare il proprio tempo: allenamenti strutturati, coaching tecnico e programmazione continua.",
    image: images.hyroxWide,
    stats: ["Run", "Sled", "Pacing"],
    cards: ["Sessioni HYROX dedicate", "Programmi per principianti e atleti", "Test, simulazioni e race prep", "Coaching tecnico e metodo HYROX"],
  },
  {
    id: "combat",
    number: "07",
    eyebrow: "Combat / Ring Room",
    title: "SALA COMBAT: MUAY THAI E BOXE",
    headline: "",
    copy: "La sala combat è il cuore tecnico di Revolution Gym. Qui si pratica Muay Thai e Boxe con lavoro al sacco, ring, tecnica, condizionamento e preparazione atletica.\n\nNon corsi generici: solo lavoro vero, progressivo e adatto al livello di chi si allena.",
    image: images.combatWide,
    stats: ["Muay Thai", "Boxe", "Tecnica"],
    cards: ["SCOPRI LA SALA COMBAT"],
  },
  {
    id: "wellness",
    number: "08",
    eyebrow: "Wellness / Recovery",
    title: "WELLNESS: MOBILITÀ, CONTROLLO E RECUPERO",
    headline: "",
    copy: "Allenarsi bene non significa solo spingere di più. Significa anche migliorare mobilità, postura, controllo del corpo e qualità del movimento.\n\nL’area wellness nasce per dare equilibrio al lavoro, supportare il recupero e migliorare la continuità.",
    image: images.wellnessWide,
    stats: ["Mobilità", "Controllo", "Recupero"],
    cards: ["SCOPRI WELLNESS"],
  },
];

const reasons = [
  {
    title: "UNA STRUTTURA COMPLETA",
    copy: "Sala pesi, combat, HYROX, wellness e personal training nello stesso centro.",
  },
  {
    title: "AREE VERE, NON IMPROVVISATE",
    copy: "Ogni spazio ha una funzione chiara ed è pensato per un lavoro preciso.",
  },
  {
    title: "METODO E CONTINUITÀ",
    copy: "Allenarsi bene significa avere una direzione, non fare cose a caso.",
  },
  {
    title: "AMBIENTE SERIO E RICONOSCIBILE",
    copy: "Ordine, attenzione, tecnica e un’identità forte in ogni percorso.",
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
            {section.headline ? (
              <p className="mt-7 max-w-3xl text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">{section.headline}</p>
            ) : null}
            <p className="mt-7 max-w-3xl whitespace-pre-line text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">{section.copy}</p>
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
            <p className="text-xs font-black uppercase tracking-[0.5em] text-revolution-red sm:text-sm">TRAINING • WELLNESS • COMBAT SPORT</p>
            <h1 id="hero-title" className="mt-6 font-display text-[3.5rem] font-black uppercase leading-[0.84] tracking-[-0.055em] sm:text-[5.8rem] lg:text-[7.3rem] xl:text-[8.5rem]">
              REVOLUTION <span className="block text-transparent [-webkit-text-stroke:1.5px_#fff] sm:[-webkit-text-stroke:2px_#fff]">GYM</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl font-semibold leading-9 text-zinc-100 sm:text-2xl sm:leading-10">A Bacoli tutto sotto lo stesso tetto: pesi, combat, HYROX, wellness e personal training. Una struttura pensata per chi vuole allenarsi sul serio, con continuità e risultati concreti.</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>PRENOTA UNA LEZIONE</Button>
              <Button href="#scegli" variant="secondary">SCOPRI LE AREE</Button>
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
            <h2 id="about-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">UN SOLO CENTRO.
PIÙ MODI DI ALLENARTI BENE.</h2>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-black/45 sm:p-12">
            <p className="text-2xl font-black uppercase leading-tight tracking-[-0.03em] text-white sm:text-4xl">Revolution Gym nasce per unire sotto lo stesso tetto forza, tecnica, performance e benessere.</p>
            <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">Sala pesi, area combat, HYROX, wellness e personal training non sono reparti messi a caso: ogni spazio ha una funzione precisa, ma tutto segue la stessa idea di lavoro — allenarti con metodo, continuità e qualità.</p>
          </div>
        </div>
      </section>

      <section id="scegli" className="relative overflow-hidden bg-[#050505] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="paths-title">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(215,38,38,0.22),transparent_34rem)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">03 / Aree principali</p>
            <h2 id="paths-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">LE AREE PRINCIPALI</h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-zinc-300 sm:text-2xl sm:leading-10">Cinque percorsi diversi, una sola direzione: allenarti meglio, con più qualità e più continuità.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
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
            <h2 id="personal-title" className="mt-5 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-8xl">PERSONAL TRAINING SU MISURA</h2>
            <p className="mt-7 max-w-3xl whitespace-pre-line text-xl leading-9 text-zinc-200 sm:text-2xl sm:leading-10">Percorsi individuali costruiti su obiettivi reali: dimagrimento, ricomposizione corporea, forza, performance e ritorno all’allenamento.

Un lavoro uno a uno, con metodo, controllo tecnico e continuità.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>PRENOTA UNA LEZIONE</Button>
              <Button href="#contatti" variant="secondary">Contattaci</Button>
            </div>
          </div>
        </div>
      </section>

      {editorialSections.map((section, index) => (
        <EditorialSection key={section.id} section={section} index={index} />
      ))}

      <section id="perche" className="relative bg-[#090909] px-5 py-20 sm:px-6 lg:px-8 lg:py-28" aria-labelledby="why-title">
        <div className="mx-auto max-w-[92rem] rounded-[3rem] border border-white/10 bg-[linear-gradient(135deg,rgba(215,38,38,0.18),rgba(255,255,255,0.04)_45%,rgba(0,0,0,0.55))] p-7 shadow-2xl shadow-black/55 sm:p-10 lg:p-14">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">06 / Perché scegliere Revolution Gym</p>
          <h2 id="why-title" className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">PERCHÉ SCEGLIERE REVOLUTION GYM</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="grid grid-cols-[4.5rem_1fr] gap-5 rounded-[1.75rem] border border-white/10 bg-black/35 p-5">
                <span className="font-display text-5xl font-black text-revolution-red">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-black uppercase leading-tight tracking-[-0.02em] text-white">{reason.title}</h3>
                  <p className="mt-3 text-sm font-semibold leading-7 text-zinc-300 sm:text-base">{reason.copy}</p>
                </div>
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
            <h2 id="contact-title" className="mt-5 font-display text-5xl font-black uppercase leading-none tracking-[-0.06em] sm:text-7xl lg:text-8xl">ENTRA IN REVOLUTION</h2>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-200">Prenota una lezione , vieni a visitare il centro a Bacoli e scegli il percorso più adatto al tuo obiettivo.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="https://www.google.com/maps/search/?api=1&query=Via%20Miseno%2091%2C%20Bacoli%2080070" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Indirizzo</p><p className="mt-3 text-lg font-bold leading-7">Revolution Gym<br />Via Miseno 91, Bacoli</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="tel:+393382332258"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Telefono / WhatsApp</p><p className="mt-3 text-lg font-bold">338 233 2258</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="tel:+390815235944"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Telefono fisso</p><p className="mt-3 text-lg font-bold">081 523 5944</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="mailto:info@revolutiongymbacoli.it"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Email</p><p className="mt-3 text-lg font-bold break-words">info@revolutiongymbacoli.it</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="https://www.instagram.com/r.evolution.gym/" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Instagram</p><p className="mt-3 text-lg font-bold">@r.evolution.gym</p></a>
              <a className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 transition hover:border-revolution-red/60" href="https://www.tiktok.com/@r.evolutiongym" target="_blank" rel="noopener noreferrer"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">TikTok</p><p className="mt-3 text-lg font-bold">@r.evolutiongym</p></a>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5"><p className="text-xs font-black uppercase tracking-[0.28em] text-revolution-red">Orari</p><p className="mt-3 text-lg font-bold leading-7">Lunedì–Venerdì: 07:00 – 22:00<br />Sabato: 09:00 – 20:00<br />Domenica: 09:00 – 13:00</p></div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl}>Scrivici su WhatsApp</Button>
              <Button href={whatsappUrl} variant="secondary">PRENOTA UNA LEZIONE</Button>
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
