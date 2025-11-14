import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/app/components/LayoutWrapper";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "ArtistryHub",
  description: "Connect artists and clients through commissions",
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
