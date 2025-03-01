import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils";

const sansFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Toodoo",
  description: "Super unique and innovative to-do app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(sansFont.variable, "antialiased")}>
        {modal}
        {children}
      </body>
    </html>
  );
}
