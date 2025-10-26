import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "ArtistryHub",
  description: "Connect artists and clients through commissions",
};

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
