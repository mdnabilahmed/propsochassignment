import React from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import { Space_Grotesk } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} min-h-screen antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
