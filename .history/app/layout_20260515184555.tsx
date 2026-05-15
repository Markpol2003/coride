import React from "react"
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CoRide",
  description:
    "Find real-time transport availability, check seat counts, and reserve your ride. Modernizing commute with digital convenience.",
  generator: "v0.app",
  keywords: [
    "CoRide",
    "Davao City",
    "public transport",
    "smart mobility",
    "Philippines",
    "PWD accessible",
    "real-time tracking",
    "seat availability",
  ],
  authors: [{ name: "CoRide Team" }],
  applicationName: "CoRide",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "CoRide",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "CoRide - Smart Transit",
    description: "Real-time transport tracking and seat availability for smart commuters",
    images: ["/coride-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoRide - Smart Transit",
    description: "Real-time transport tracking and seat availability",
    images: ["/coride-logo.png"],
  },
  icons: {
    icon: [
      {
        url: "/coride-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/coride-logo.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/coride-logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/coride-logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/coride-logo.png",
    other: [
      {
        rel: "icon",
        url: "/coride-logo.png",
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
