export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="bg-deep-navy-black text-institutional-white antialiased">
        {children}
      </body>
    </html>
  );
}
