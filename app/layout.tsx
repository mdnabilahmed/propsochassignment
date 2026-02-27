import React from "react";
import "./globals.css";
import Navbar from "./components/navbar";
import { Space_Grotesk, Caveat } from "next/font/google";

const font = Space_Grotesk({ subsets: ["latin"], display: "swap" });
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${caveat.variable} min-h-screen antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
