import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// LOADING SOVEREIGN ASSET: NEO SANS PRO
// Assets relocated to src/assets/fonts for correct bundling
const neoSans = localFont({
  src: [
    {
      path: "../assets/fonts/NeoSansPro-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeoSansPro-Medium.woff",
      weight: "500", // Using Medium as primary body weight
      style: "normal",
    },
    {
      path: "../assets/fonts/NeoSansPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    // CRITICAL FALLBACK: Mapping 900 (Black) to Bold asset
    // because the 'Black' asset is missing but the design demands 900.
    {
      path: "../assets/fonts/NeoSansPro-Bold.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-neo-sans",
});

export const metadata: Metadata = {
  title: "MD ABU HASAN | Sovereign Root Node",
  description: "Institutional Systems Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={neoSans.variable}>
      <body
        suppressHydrationWarning
        className="bg-[#010409] text-white antialiased font-institutional"
      >
        {children}
      </body>
    </html>
  );
}
