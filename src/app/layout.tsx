import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Badge from "@/components/badge";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senseii - AI-Powered Health & Lifestyle",
  description:
    "Senseii is an AI-driven platform democratizing healthcare and lifestyle through personalized diet and workout plans, real-time tracking, and expert guidance.",
  keywords: [
    "Senseii",
    "AI healthcare",
    "nutrition",
    "workout",
    "fitness",
    "health",
    "lifestyle",
  ],
  openGraph: {
    title: "Senseii - AI-Powered Health & Lifestyle",
    description:
      "A group of AI agents working together to guide users toward a healthier life, with personalized diet and workout plans.",
    url: "https://www.senseii.in/senseii-pink.png",
    images: [
      {
        url: "/senseii-pink.png",
        width: 1200,
        height: 630,
        alt: "Senseii: AI-Powered Healthcare",
      },
    ],
    siteName: "Senseii",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senseii - AI-Powered Health & Lifestyle",
    description:
      "Jarvis for Health—personalized planes & real-time tracking. Achieve your fitness goals with AI-driven solutions.",
    images: ["https://www.senseii.in/senseii-pink.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} h-screen antialiased`}>
        <div className="h-full">
          <Badge />
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
