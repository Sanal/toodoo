import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import ThemeProvider from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const sansFont = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Toodoo",
  description: "Super unique and innovative to-do app",
};

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#171717",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#fafafa",
    },
  ],
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(sansFont.variable, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {modal}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
