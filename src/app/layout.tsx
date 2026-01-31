import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MD ABU HASAN | Root Identity Node",
  description: "Institutional Systems Architect",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
