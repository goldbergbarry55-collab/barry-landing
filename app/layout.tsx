import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barry Psychology — Understand Why You Feel the Way You Feel",
  description:
    "Psychology-based content helping you understand anxiety, overthinking, burnout, toxic relationships, and more. Follow @barry.psychology on Instagram.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
