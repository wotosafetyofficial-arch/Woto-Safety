"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";
import axios from "axios";
import CareersModal from "../careers/CareersModal";
import api from "../API/api";

export default function Footer() {
  const [isHiringActive, setIsHiringActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchHiringStatus = async () => {
      try {
        const response = await axios.get(`${api}/api/config/hiring-status`);
        setIsHiringActive(response.data.isHiring);
      } catch (error) {
        console.error("Failed to fetch hiring status in footer:", error);
      }
    };
    fetchHiringStatus();
  }, []);

  return (
    <>
      <footer className="relative bg-[var(--card-bg)] border-t border-[var(--border)] pt-16 pb-12 overflow-hidden text-[var(--text-main)]">
        
        {/* Top Decorative Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-transparent via-[var(--primary)]/10 to-transparent blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)]">
            
            {/* Brand Information Column */}
            <div className="lg:col-span-5 space-y-4">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/logo.png"
                    alt="WOTO Safety Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl tracking-tight text-[var(--text-main)]">
                    WOTO<span className="text-[var(--coral)]">.</span>
                  </span>
                  <span className="text-[10px] tracking-wider uppercase text-[var(--text-muted)] -mt-1 font-semibold">
                    Safety
                  </span>
                </div>
              </Link>

              <p className="text-sm text-[var(--text-muted)] max-w-sm leading-relaxed">
                Empowering personal security through connected hardware innovation and proactive emergency network response.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 pt-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/woto_safety?igsi=N2F3emoydWgxOG1u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/WOTO_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/woto-safety/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--coral)] hover:border-[var(--coral)] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>

              {/* Dynamic Careers Portal CTA */}
              {isHiringActive && (
                <div className="pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--coral)]/10 border border-[var(--coral)]/30 text-[var(--coral)] text-xs font-semibold hover:bg-[var(--coral)] hover:text-white transition-all duration-300"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Now Hiring — Join WOTO Team</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-main)]">
                Navigation
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-muted)]">
                <li>
                  <Link href="/about" className="hover:text-[var(--primary)] transition-colors">About WOTO</Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-[var(--primary)] transition-colors">App Features</Link>
                </li>
                <li>
                  <Link href="/team" className="hover:text-[var(--primary)] transition-colors">Our Team</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact Information Column */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-main)]">
                Contact & Support
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--text-muted)]">
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[var(--coral)]" />
                  <a href="mailto:wotosafetyofficial@gmail.com" className="hover:underline">wotosafetyofficial@gmail.com</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[var(--green)]" />
                  <a href="tel:+919258869338" className="hover:underline">+91 9258869338</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[var(--primary)] dark:text-purple-300" />
                  <span>Dehradun, Uttarakhand, India</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Mission Credit */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
            <p>© {new Date().getFullYear()} WOTO Safety. All rights reserved.</p>
            <div className="flex items-center gap-1.5 font-medium">
              <span>Built with passion for safety</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>
        </div>
      </footer>

      {/* Pop-up Careers Modal */}
      <CareersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}