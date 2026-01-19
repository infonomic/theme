import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./theme/provider";
import { EarlyThemeDetector } from "./theme/early-theme-detector";
import { AppBarFront } from "./components/app-bar-front";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infonomic Theme Demo",
  description: "Created by Infonomic Company Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning
      dir="ltr"
      className="scroll-smooth"
      style={{ scrollBehavior: 'smooth' }}
      data-scroll-behavior="smooth">
      <head>
        <meta name="color-scheme" content="light dark" />
        <EarlyThemeDetector />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <AppBarFront />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
