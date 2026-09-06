"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldAlert, Home, ArrowLeft, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[var(--bg-main)] px-4 py-24 text-[var(--text-main)]">
      
      {/* Background Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[var(--coral)]/20 via-[var(--primary)]/20 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-2xl w-full text-center relative z-10 space-y-8">
        
        {/* Animated Badge & Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex flex-col items-center gap-3"
        >
          <div className="p-4 rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] shadow-2xl relative group">
            <div className="absolute inset-0 rounded-3xl bg-[var(--coral)]/20 blur-md group-hover:blur-lg transition-all" />
            <ShieldAlert className="w-12 h-12 text-[var(--coral)] relative z-10 animate-pulse" />
          </div>
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-bold uppercase tracking-widest border border-[var(--border)]">
            <Compass className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Error 404 — Signal Lost</span>
          </div>
        </motion.div>

        {/* Hero Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[var(--text-main)]">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
            Page Off The Radar
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-md mx-auto leading-relaxed">
            The coordinates or page you are looking for don&apos;t exist, have been relocated, or are temporarily out of range.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-deep)] text-white text-sm font-semibold shadow-xl flex items-center justify-center gap-2 transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return to Safety (Home)</span>
            </motion.button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-[var(--text-main)] hover:bg-[var(--bg-light)] text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-[var(--coral)]" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Quick Links Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-[var(--border)] max-w-lg mx-auto"
        >
          <span className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider block mb-4">
            Looking for something specific?
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium">
            <Link
              href="/features"
              className="px-3.5 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            >
              Features
            </Link>
            <Link
              href="/hardware"
              className="px-3.5 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            >
              Safety Button
            </Link>
            <Link
              href="/team"
              className="px-3.5 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="px-3.5 py-2 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}