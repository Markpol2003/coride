import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoR",
  description:
    "Find real-time jeepney availability, check seat counts, and reserve your ride in Davao City. Modernizing traditional transport with digital convenience.",
  generator: "v0.app",
  keywords: [
    "jeepney",
    "Davao City",
    "public transport",
    "smart mobility",
    "Philippines",
    "PWD accessible",
    "real-time tracking",
    "seat availability",
  ],
  authors: [{ name: "JeepniGo Team" }],
  applicationName: "JeepniGo",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "JeepniGo",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "JeepniGo - Smart Jeepney Transit",
    description: "Real-time jeepney tracking and seat availability for Filipino commuters",
    images: ["/jeepnigo-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JeepniGo - Smart Jeepney Transit",
    description: "Real-time jeepney tracking and seat availability",
    images: ["/jeepnigo-logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/jeepnigo-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/jeepnigo-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/jeepnigo-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/jeepnigo-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/jeepnigo-logo.png",
    other: [
      {
        rel: "icon",
        url: "/jeepnigo-logo.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
