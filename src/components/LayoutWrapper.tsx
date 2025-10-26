"use client";

import { usePathname } from "next/navigation";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { ReactNode } from "react";

export default function LayoutWrapper({ children }: {children: ReactNode}) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/register", "/admin"].includes(pathname);

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}