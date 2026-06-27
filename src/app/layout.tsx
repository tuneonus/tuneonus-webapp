import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "../components/providers/ThemeProvider";
import { ScrollProgress } from "../components/ui/ScrollProgress";
import { Analytics } from "@vercel/analytics/react";
import ParticleBackgroundClient from "../components/three/ParticleBackgroundClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tuneonus.com"),
  title: "TuneOnus | Premium AI  & Software Engineering",
  description: "TuneOnus is an AI, Web & App Development, and Software Engineering company that builds intelligent digital products, SaaS platforms, and scalable business software.",
  keywords: ["AI Development", "Web Apps", "App Development", "Mobile Apps", "SaaS", "Software Engineering", "React", "Next.js"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "TuneOnus | Premium AI  & Software Engineering",
    description: "TuneOnus is an AI, Web & App Development, and Software Engineering company that builds intelligent digital products.",
    url: "https://www.tuneonus.com",
    siteName: "TuneOnus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TuneOnus - Tune The Future",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TuneOnus | Premium AI  & Software Engineering",
    description: "TuneOnus is an AI, Web App Development, and Software Engineering company.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <ParticleBackgroundClient />
          <ScrollProgress />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
