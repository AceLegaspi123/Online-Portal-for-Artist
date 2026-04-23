import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {ImageKitProvider } from "@imagekit/next";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageKitProvider urlEndpoint={process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow mt-18">{children}</main>

        <div className="bg-primary mt-20">
          <Footer />
        </div>
      </div>
    </ImageKitProvider>
  );
};

export default layout;
