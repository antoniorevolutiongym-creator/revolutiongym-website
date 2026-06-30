import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Revolution Gym Bacoli | Premium Fitness Center",
  description: "Homepage ufficiale di Revolution Gym Bacoli, fitness center premium per performance, forza e benessere.",
  icons: {
    icon: "/revolution-gym-mark.svg",
    shortcut: "/revolution-gym-mark.svg",
    apple: "/revolution-gym-mark.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
