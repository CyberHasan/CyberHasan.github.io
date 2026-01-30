import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter mapped to --font-neo-sans for Sovereign Brand Manual compliance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-neo-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD ABU HASAN | Sovereign Root Identity",
  description: "Institutional Systems Architect - INSPIRON TECH",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} bg-deep-navy-black text-institutional-white antialiased font-institutional`}
      >
        {children}
      </body>
    </html>
  );
}
