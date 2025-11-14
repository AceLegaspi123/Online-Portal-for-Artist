"use client";

import { usePathname } from "next/navigation";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: {children: ReactNode}) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/register", "/admin"].includes(pathname);

  return (
    <div className="relative">
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}

      {!hideLayout && <div className="absolute bottom-0 h-55 w-full left-0 bg-primary"></div> }
    </div>
  );
}