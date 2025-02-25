// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.senseii.in"),
  title: "Senseii - Your AI Health & Fitness Coach",
  description:
    "Transform your health with Senseii's AI-powered personalized fitness plans, nutrition guidance, and real-time progress tracking. Get custom workout routines and meal plans tailored to your goals.",
  keywords: [
    "AI fitness coach",
    "personalized workout plans",
    "custom meal planning",
    "health tracking app",
    "AI nutrition guide",
    "fitness goals",
    "personal trainer AI",
    "diet planning",
    "workout tracking",
    "health optimization",
    "AI health coach",
    "fitness technology",
  ],
  authors: [{ name: "Senseii Team" }],
  creator: "Senseii",
  publisher: "Senseii",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.senseii.in",
    title: "Senseii - AI-Powered Health & Fitness Coach",
    description:
      "Achieve your fitness goals with personalized AI coaching. Get custom workout plans, nutrition guidance, and real-time progress tracking tailored to your needs.",
    siteName: "Senseii",
    images: [
      {
        url: "/og-image.jpg", // Make sure to create this image
        width: 1200,
        height: 630,
        alt: "Senseii: Your AI Health & Fitness Coach",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@senseii_ai", // Add your Twitter handle
    creator: "@senseii_ai",
    title: "Senseii - Your Personal AI Health Coach",
    description:
      "Transform your fitness journey with AI-powered personalized plans, real-time tracking, and expert guidance. Start your health transformation today!",
    images: ["/twitter-image.jpg"], // Make sure to create this image
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://www.senseii.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
