import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const institutional = localFont({
  src: [
    {
      path: "../../public/fonts/NeoSansPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansPro-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeoSansPro-Light.woff",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-institutional",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MD ABU HASAN | Root Identity Node",
  description: "Institutional Systems Architect",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${institutional.variable}`}>
      <body
        suppressHydrationWarning
        className="bg-[#010409] text-white antialiased font-institutional"
      >
        {children}
      </body>
    </html>
  );
}
