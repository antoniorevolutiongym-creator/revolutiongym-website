import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.revolutiongymbacoli.it"),
  title: "Revolution Gym Bacoli | Sala Pesi, Hyrox Training Club, Combat Sport e Wellness",
  description: "Palestra e centro sportivo a Bacoli: sala pesi, sala combat, HYROX, wellness e personal training. Metodo, allenamento vero, risultati veri.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: "R•Evolution Gym",
  alternateName: "Revolution Gym Bacoli",
  url: "https://www.revolutiongymbacoli.it",
  email: "info@revolutiongymbacoli.it",
  telephone: "+39 338 233 2258",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via Miseno 91",
    postalCode: "80070",
    addressLocality: "Bacoli",
    addressRegion: "Campania",
    addressCountry: "IT",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "13:00" },
  ],
  sameAs: [
    "https://www.instagram.com/r.evolution.gym",
    "https://www.tiktok.com/@r.evolutiongym",
  ],
  areaServed: ["Bacoli","Campi Flegrei","Monte di Procida","Pozzuoli","Baia","Quarto","Napoli"],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
      </body>
    </html>
  );
}
