import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StockCentral",
  description: "A place to trade stocks",
};

import React from 'react'
import Nav from "@/components/navbar/NavBar";
import ClientProvider from "@/components/ClientProvider";

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          {children}
          <Nav />
          {/* Add spacing below content to prevent navbar from hiding content */}
          <div className="w-full m-[200px]"></div>
        </ClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
