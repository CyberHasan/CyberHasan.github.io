import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter as the Sovereign Font (Simulating Neo Sans Pro's industrial clean look)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-institutional",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD ABU HASAN | Sovereign Portfolio",
  description: "Operational Command Node for INSPIRON TECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} bg-deep-navy-black text-institutional-white antialiased selection:bg-electric-cyan selection:text-deep-navy-black font-institutional`}
      >
        {children}
      </body>
    </html>
  );
}
