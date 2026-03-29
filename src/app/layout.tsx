import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "@/app/components/Providers";
import { Inter, Archivo_Black, JetBrains_Mono } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: "ArtistryHub",
  description: "Connect artists and clients through commissions",
};

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const archivo = Archivo_Black({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
});

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased ${archivo.variable} font-sans`}>
        <Providers>
          {children}
          <Toaster position="top-center" />
        </Providers>
      </body>
    </html>
  );
}
