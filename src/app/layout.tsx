import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-neo-sans", // Mapping Inter to the variable expected by the Doctrine
});

export const metadata: Metadata = {
  title: "MD ABU HASAN | Institutional Systems Architect",
  description: "Sovereign Root Identity v1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-deep-navy-black text-institutional-white antialiased font-institutional`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
