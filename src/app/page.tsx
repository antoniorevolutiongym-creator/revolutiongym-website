import Image from "next/image";
import { Header } from "@/components/Header";

const whatsappUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20prenotare%20una%20prova%20alla%20Revolution%20Gym.";
const contactUrl =
  "https://wa.me/393382332258?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20su%20Revolution%20Gym.";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Revolution%20Gym%20Via%20Miseno%2091%20Bacoli%20NA";
const instagramUrl = "https://www.instagram.com/revolutiongym_bacoli/";

const images = {
  hero: "/images/cb5db689-77a9-4312-98cd-debff4f99b26.jpeg",
  about: "/images/15d5ba0f-2122-4561-8526-70e77d636329.jpeg",
  sala: "/images/2e996e2b-b11a-4144-a677-79799b226b16.jpeg",
  combat: "/images/IMG_4869.jpeg",
  hyrox: "/images/IMG_4865.jpeg",
  wellness: "/images/c1a6078e-3cf2-4a5f-b751-9a87e76ea4c8.jpeg",
};

const areas = [
  {
    title: "Sala Pesi",
    text: "Allenamento con macchine, pesi liberi e supporto tecnico per costruire forza, migliorare la composizione corporea e lavorare sui tuoi obiettivi in modo concreto.",
    image: images.sala,
  },
  {
    title: "Combat Sport",
    text: "Muay Thai, boxe e preparazione tecnica in un ambiente dedicato a disciplina, intensità, crescita fisica e mentale.",
    image: images.combat,
  },
  {
    title: "HYROX",
    text: "Un metodo di allenamento completo che unisce corsa, forza e resistenza, ideale per chi cerca performance, condizionamento e sfida personale.",
    image: images.hyrox,
  },
  {
    title: "Wellness",
    text: "Yoga e Pilates per migliorare postura, mobilità, controllo del corpo, respirazione e benessere generale.",
    image: images.wellness,
  },
];

const focusAreas = [
  {
    eyebrow: "Sala Pesi",
    title: "Forza, tecnica e risultati",
    text: "La sala pesi di Revolution Gym è pensata per chi vuole allenarsi con continuità e qualità. Che il tuo obiettivo sia migliorare la forma fisica, aumentare la forza, tonificare o lavorare sulla composizione corporea, troverai uno spazio attrezzato e un ambiente dove allenarti con metodo.",
    image: images.sala,
  },
  {
    eyebrow: "Combat Sport",
    title: "Tecnica, disciplina e carattere",
    text: "L’area combat è il cuore pulsante di Revolution Gym. Qui si svolgono allenamenti dedicati agli sport da combattimento, con lavoro tecnico, preparazione fisica e sviluppo delle capacità atletiche. Un ambiente adatto sia a chi si avvicina per la prima volta a queste discipline, sia a chi vuole allenarsi con più intensità e continuità.",
    image: images.combat,
  },
  {
    eyebrow: "HYROX",
    title: "Performance, resistenza, completezza",
    text: "HYROX è un format di allenamento che unisce corsa, forza e resistenza in un lavoro strutturato e coinvolgente. È ideale per chi vuole migliorare condizionamento, capacità aerobica, tenuta mentale e performance generale attraverso sessioni complete e stimolanti.",
    image: images.hyrox,
  },
  {
    eyebrow: "Wellness",
    title: "Equilibrio, controllo e benessere",
    text: "L’area wellness di Revolution Gym è dedicata a chi vuole ritagliarsi uno spazio per stare bene, muoversi meglio e ritrovare equilibrio. I corsi di Yoga e Pilates aiutano a migliorare mobilità, postura, respirazione, controllo del corpo e qualità del movimento, con un lavoro profondo ma accessibile a diversi livelli.",
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

      <section id="chi-siamo" className="relative bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="about-title">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl shadow-black/50">
            <Image src={images.about} alt="Sala allenamento Revolution Gym" fill sizes="(min-width:1024px) 44vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Chi siamo</p>
            <h2 id="about-title" className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">Un unico spazio, più modi di vivere l’allenamento</h2>
            <div className="mt-7 space-y-5 text-lg leading-8 text-zinc-300">
              <p>Revolution Gym è un centro sportivo a Bacoli nato per offrire un’esperienza di allenamento completa. Dalla sala pesi agli sport da combattimento, passando per HYROX, Yoga e Pilates, ogni area è pensata per aiutarti a migliorare forma fisica, performance, mobilità e benessere.</p>
              <p>Che tu voglia rimetterti in forma, allenarti con costanza, imparare una disciplina o spingere di più sulla performance, qui trovi spazi, corsi e supporto per farlo davvero.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="aree" className="bg-[#0a0a0a] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="areas-title">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Le nostre aree</p>
          <h2 id="areas-title" className="mt-4 max-w-4xl font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Training completo, identità forte</h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {areas.map((area) => (
              <article key={area.title} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/40 transition duration-500 hover:-translate-y-2 hover:border-revolution-red/60">
                <div className="relative min-h-72 overflow-hidden">
                  <Image src={area.image} alt={area.title} fill sizes="(min-width:1280px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl font-black uppercase tracking-[-0.03em]">{area.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="focus" className="bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="focus-title">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Focus aree</p>
          <h2 id="focus-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Dentro Revolution Gym</h2>
          <div className="mt-12 space-y-8">
            {focusAreas.map((area, index) => (
              <article key={area.eyebrow} className="grid overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/45 lg:grid-cols-2">
                <div className={`relative min-h-[24rem] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image src={area.image} alt={area.eyebrow} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-revolution-red">{area.eyebrow}</p>
                  <h3 className="mt-4 font-display text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-6xl">{area.title}</h3>
                  <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg">{area.text}</p>
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

      <section className="bg-revolution-red px-5 py-20 text-white sm:px-6 lg:px-8" aria-labelledby="final-cta-title">
        <div className="mx-auto max-w-5xl text-center">
          <h2 id="final-cta-title" className="font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Inizia il tuo percorso con Revolution Gym</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">Che tu voglia allenarti in sala pesi, avvicinarti agli sport da combattimento, migliorare la tua performance o dedicarti al benessere, da Revolution Gym trovi lo spazio giusto per iniziare e crescere.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white">Prenota una prova</a>
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/40 bg-black/10 px-8 py-4 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-black">Contattaci su WhatsApp</a>
          </div>
        </div>
      </section>

      <section id="contatti" className="bg-[#050505] px-5 py-24 sm:px-6 lg:px-8 lg:py-32" aria-labelledby="contact-title">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.25rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl shadow-black/50 sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:p-14">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.45em] text-revolution-red">Contatti</p>
            <h2 id="contact-title" className="mt-4 font-display text-5xl font-black uppercase leading-none tracking-[-0.05em] sm:text-7xl">Vieni a trovarci</h2>
            <address className="mt-8 not-italic text-xl leading-9 text-zinc-200">
              <strong className="text-white">Revolution Gym</strong><br />
              Via Miseno 91, Bacoli (NA)<br /><br />
              <a className="hover:text-revolution-red" href="tel:+393382332258">338 233 2258</a><br />
              <a className="hover:text-revolution-red" href="tel:+390815235944">081 523 5944</a>
            </address>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Button href={mapsUrl}>Apri su Maps</Button>
            <Button href={contactUrl} variant="secondary">Contattaci</Button>
            <Button href={instagramUrl} variant="secondary">Seguici su Instagram</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
