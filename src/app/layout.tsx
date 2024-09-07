import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { GlobalContext } from "@/context/GlobalContext";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luria",
  description: "Luria PX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={undefined} />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="logoicon.png"></link>
      </head>

      <body className={inter.className}>
        <GlobalContext>
          <Header />
          {children}
          <Footer />
        </GlobalContext>
      </body>
    </html>
  );
}
