import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  weight: ["100", "200", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sontosh Kumar Sarker",
    template: "%s | Sontosh Kumar Sarker",
  },
  description:
    "I'm Sontosh Kumar Sarker, a MERN Stack Developer specializing in React, Next.js and modern web technologies.",
  keywords: [
    "Sontosh Kumar Sarker",
    "MERN Stack Develper",
    "NextJS Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
  ],
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
