import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revolution Gym Bacoli | Premium Bodybuilding & Sala Pesi Center",
  description: "Homepage ufficiale di Revolution Gym Bacoli, bodybuilding e wellness center premium per performance, forza e benessere.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
