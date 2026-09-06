"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Wifi, MapPin, Zap, ShieldAlert } from "lucide-react";
import axios from "axios";
import api from "../API/api";

export default function Hero() {
  const [isHiring, setIsHiring] = useState(false);

  useEffect(() => {
    const checkHiringStatus = async () => {
      try {
        const response = await axios.get(`${api}/api/config/hiring-status`);
        setIsHiring(response.data.isHiring);
      } catch (error) {
        console.error("Error fetching hiring status:", error);
      }
    };
    checkHiringStatus();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      
      {/* 1. Full-screen Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>

        {/* Adaptive Color Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg-main)]/90 via-[var(--bg-main)]/70 to-[var(--bg-main)]/40 dark:from-[var(--bg-main)]/95 dark:via-[var(--bg-main)]/85 dark:to-[var(--primary-deep)]/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Action Items */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {isHiring && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--lavender-soft)]/60 dark:bg-[var(--primary-deep)]/80 border border-[var(--border)] text-xs font-semibold text-[var(--primary)] dark:text-[var(--lavender-soft)] backdrop-blur-md"
              >
                <span className="w-2 h-2 rounded-full bg-[var(--green)] animate-pulse" />
                <span>Now Recruiting — Join Our Founding Team</span>
                <Sparkles className="w-3.5 h-3.5 text-[var(--coral)]" />
              </motion.div>
            )}

            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--text-main)] leading-[1.1]">
                WOTO <br />
                <span className="text-[var(--primary)] dark:text-purple-300">Safety.</span>
              </h1>
              <p className="text-xl sm:text-2xl font-medium italic text-[var(--coral)]">
                &quot;Your safety our priority&quot;
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-muted)] max-w-xl leading-relaxed">
              WOTO pairs a compact, intelligent hardware safety chip with an intuitive application to deliver instant, frictionless protection whenever seconds count.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a href="#about">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-[var(--primary)] hover:bg-[var(--primary-deep)] text-white font-semibold text-base shadow-xl transition-all duration-300"
                >
                  <span>Explore WOTO</span>
                  <ArrowRight className="w-5 h-5 text-[var(--coral)]" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hardware Chip Graphic with Circular Signal Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-[var(--glass)] border border-[var(--glass-border)] backdrop-blur-xl p-8 flex items-center justify-center shadow-2xl overflow-hidden">
              
              {/* 2. Concentric Radar Signal Pulses radiating from the center */}
              {[1, 2, 3].map((index) => (
                <motion.div
                  key={index}
                  className="absolute rounded-full border border-[var(--primary)]/30 dark:border-purple-400/30"
                  initial={{ width: "20%", height: "20%", opacity: 0.8 }}
                  animate={{ width: "110%", height: "110%", opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.9,
                    ease: "easeOut",
                  }}
                />
              ))}

              {/* Central WOTO Safety Chip */}
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-36 h-36 rounded-3xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-deep)] border-2 border-[var(--glass-border)] shadow-2xl flex flex-col items-center justify-center gap-2 relative z-20"
              >
                <ShieldAlert className="w-10 h-10 text-[var(--coral)] animate-pulse" />
                <span className="text-white font-bold tracking-widest text-sm">WOTO</span>
                <span className="text-[9px] uppercase tracking-wider text-purple-200">SAFETY CHIP</span>
              </motion.div>

              {/* Connected Feature Nodes */}
              <div className="absolute top-6 left-4 z-20 flex items-center gap-2 p-2.5 rounded-xl bg-[var(--card-bg)]/90 border border-[var(--border)] shadow-md backdrop-blur-md">
                <Wifi className="w-4 h-4 text-[var(--primary)]" />
                <span className="text-xs font-semibold text-[var(--text-main)]">Wireless Connectivity</span>
              </div>

              <div className="absolute top-12 right-2 z-20 flex items-center gap-2 p-2.5 rounded-xl bg-[var(--card-bg)]/90 border border-[var(--border)] shadow-md backdrop-blur-md">
                <MapPin className="w-4 h-4 text-[var(--coral)]" />
                <span className="text-xs font-semibold text-[var(--text-main)]">Location Capability</span>
              </div>

              <div className="absolute bottom-12 left-2 z-20 flex items-center gap-2 p-2.5 rounded-xl bg-[var(--card-bg)]/90 border border-[var(--border)] shadow-md backdrop-blur-md">
                <Zap className="w-4 h-4 text-[var(--green)]" />
                <span className="text-xs font-semibold text-[var(--text-main)]">Low Power Design</span>
              </div>

              <div className="absolute bottom-6 right-4 z-20 flex items-center gap-2 p-2.5 rounded-xl bg-[var(--card-bg)]/90 border border-[var(--border)] shadow-md backdrop-blur-md">
                <ShieldAlert className="w-4 h-4 text-[var(--coral)]" />
                <span className="text-xs font-semibold text-[var(--text-main)]">SOS Alert Activation</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}