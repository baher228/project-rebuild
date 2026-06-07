import type { Metadata } from "next";
import { Cormorant_Garamond, Crimson_Text, Josefin_Sans } from "next/font/google";

import "./globals.css";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const serifFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const sansFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Ardivia - Bespoke Design & Build, London",
    template: "%s | Ardivia",
  },
  description:
    "Ardivia is a London design and build studio creating exceptional residential and commercial architecture for discerning clients.",
  authors: [{ name: "Ardivia" }],
  openGraph: {
    title: "Ardivia - Bespoke Design & Build, London",
    description:
      "Architecture that endures. Bespoke design and build for those who demand the extraordinary.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${serifFont.variable} ${sansFont.variable}`}
    >
      <body>
        <RevealObserver />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
