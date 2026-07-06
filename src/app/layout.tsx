import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revolution Gym Bacoli | Sala Pesi, Hyrox Training Club, Combat Sport e Wellness",
  description: "Palestra e centro sportivo a Bacoli: sala pesi, sala combat, HYROX, wellness e personal training. Metodo, allenamento vero, risultati veri.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
