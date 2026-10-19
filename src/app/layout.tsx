import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700","800", "900"],
   display: "swap",
});
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sontosh Kumar Sarker | MERN Stack Developer",
    template: "%s | Sontosh Kumar Sarker",
  },

  description:
    "Explore the portfolio of Sontosh Kumar Sarker, a MERN Stack Developer specializing in React, Next.js, Node.js, and modern web application development.",

  keywords: [
    "Sontosh Kumar Sarker",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Frontend Developer",
    "JavaScript Developer",
    "Software Developer Portfolio",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sontosh-portfolio-five.vercel.app",
    siteName: "Sontosh Kumar Sarker Portfolio",
    title: "Sontosh Kumar Sarker | MERN Stack Developer",
    description:
      "Discover my projects, technical skills, and experience building modern, responsive web applications with React, Next.js, and Node.js.",
    images: [
      {
        url: "/7389.png",
        width: 1200,
        height: 630,
        alt: "Sontosh Kumar Sarker - MERN Stack Developer Portfolio",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    linkedin: "https://linkedin/in/sontoshkumar",
    github: "https://github.com/sontosh36"
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="bg-white transition-colors dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
