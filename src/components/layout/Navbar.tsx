"use client";

import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const {theme, toggleTheme} = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar glass background */}
      <div className="border-b border-white/10 bg-dark/5 backdrop-blur-xl shadow-lg shadow-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/*  logo  */}
            <Link
              href="/"
              className="group flex items-center text-xl font-bold tracking-tight"
              aria-label="Go to homepage"
            >
              <span className="text-primary transition-colors duration-200 group">
                Sontosh<span className="group-hover:scale-110 font-extrabold text-pink-500">
                .io
              </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/10 p-1 backdrop-blur-md">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive ? "bg-primary text-white shadow-md shadow-primary/20" : "text-gray-900 dark:text-gray-400 hover:bg-white/10 hover:text-blue-400"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Download CV */}
              <a
                href="https://docs.google.com/document/d/1lrzoO_7O0lq8AD8zVwtp45ISJ4NmRzmzrNYsduzhdhE/edit?usp=sharing"
                download
                className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
              >
                <ArrowDownTrayIcon className="h-4 w-4" />
                <span>Download CV</span>
              </a>

              {/* Theme button */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === "dark"
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/50 dark:border-white/10 bg-white/5 text-primary transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary active:scale-95 cursor-pointer"
              >
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={
                  mobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileMenuOpen}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/50 dark:border-white/10 bg-white/5 text-gray-200 transition-all duration-200 hover:border-primary/30 hover:bg-primary/10 hover:text-primary active:scale-95 md:hidden cursor-pointer"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5 text-black dark:text-white/50" />
                ) : (
                  <Bars3Icon className="h-5 w-5 text-black dark:text-white/50" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu*/}
      <div
        className={`overflow-hidden border-b border-white/10 bg-dark/10 backdrop-blur-xl shadow-xl shadow-black/10 transition-all duration-300 ease-in-out md:hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-2">
          <div className="space-y-1 rounded-xl border border-white/30 bg-white/5 p-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "bg-primary text-white shadow-md shadow-primary/20 font-bold" : "text-gray-400 hover:bg-white/20 hover:pl-5 hover:text-blue-400"}`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Mobile Download CV button */}
            <a
              href="/cv.pdf"
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
