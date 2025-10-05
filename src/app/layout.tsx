import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
        <h1>Client-side vs Server-side Rendering</h1>
        <h6> <Link href="..">Voltar</Link></h6>
        </div>

        {children}
      </body>
    </html>
  );
}
