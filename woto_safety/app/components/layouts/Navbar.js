"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Sparkles, Lock } from "lucide-react";
import axios from "axios";
import CareersModal from "../careers/CareersModal";
import api from "../API/api";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHiringActive, setIsHiringActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHiringStatus = async () => {
      try {
        const response = await axios.get(`${api}/api/config/hiring-status`);
        setIsHiringActive(response.data.isHiring);
      } catch (error) {
        console.error("Failed to fetch hiring status from backend:", error);
      }
    };

    fetchHiringStatus();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Hardware", href: "/hardware" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--glass)] backdrop-blur-md border-b border-[var(--glass-border)] shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Custom Image Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo.png"
                  alt="WOTO Safety Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-[var(--text-main)]">
                  WOTO
                </span>
                <span className="text-[10px] tracking-wider uppercase text-[var(--text-muted)] -mt-1 font-semibold">
                  Safety
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[var(--text-main)] hover:text-[var(--primary)] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Section: Theme Toggle, Admin Button & Hiring Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className="p-2.5 rounded-xl bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--text-main)] hover:opacity-80 transition-all duration-200 border border-[var(--border)]"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-[var(--primary-deep)]" />
                )}
              </button>

              {/* Admin Portal Button */}
              <Link
                href="/admin"
                aria-label="Admin Portal"
                className="p-2.5 rounded-xl bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--text-main)] hover:opacity-80 transition-all duration-200 border border-[var(--border)]"
              >
                <Lock className="w-5 h-5 text-[var(--coral)]" />
              </Link>

              {/* Dynamic Join WOTO Modal Trigger */}
              {isHiringActive && (
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--coral)] text-white text-sm font-semibold shadow-md hover:bg-opacity-90 transition-all duration-200"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Join WOTO</span>
                </motion.button>
              )}
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                title="Day/Night"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--text-main)]"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
              </button>
              <Link
                title="Admin Portal"
                href="/admin"
                className="p-2 rounded-lg bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--text-main)]"
              >
                <Lock className="w-5 h-5 text-[var(--coral)]" />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-[var(--text-main)] focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[var(--card-bg)] border-b border-[var(--border)] px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-[var(--text-main)] hover:text-[var(--primary)] py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {isHiringActive && (
                <div className="pt-2 border-t border-[var(--border)]">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[var(--coral)] text-white text-sm font-semibold"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Join WOTO</span>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Pop-up Careers Modal */}
      <CareersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}