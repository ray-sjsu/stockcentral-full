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

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav />
        <div className="w-full m-[10%]"></div>
      </body>
    </html>
  )
}

export default RootLayout
