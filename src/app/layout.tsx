import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Globe } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Países do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="flex p-6 gap-2 font-medium">
          <Globe className="text-cyan-700" />
          <h1>Países do mundo</h1>
        </header>
        {children}
        </body>
    </html>
  );
}
