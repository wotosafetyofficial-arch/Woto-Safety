"use client";

import { motion } from "framer-motion";
import { Cpu, BatteryCharging, Bluetooth, Radio, ShieldCheck } from "lucide-react";

export default function HardwareShowcase() {
  const specs = [
    {
      icon: <BatteryCharging className="w-5 h-5 text-[var(--green)]" />,
      label: "2-Year Battery Standby",
    },
    {
      icon: <Bluetooth className="w-5 h-5 text-[var(--primary)] dark:text-purple-300" />,
      label: "Low-Energy Bluetooth Sync",
    },
    {
      icon: <Radio className="w-5 h-5 text-[var(--coral)]" />,
      label: "Discreet Keyring Design",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[var(--green)]" />,
      label: "Silent Double-Press Trigger",
    },
  ];

  return (
    <section id="hardware" className="relative py-24 overflow-hidden bg-[var(--bg-main)]">
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hardwareBackground.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Light/Dark Overlay */}
        <div className="absolute inset-0 bg-[var(--bg-main)]/85 dark:bg-[var(--bg-main)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Cpu className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>WOTO Accessory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            The WOTO Smart Safety Button
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            An optional, ultra-compact hardware companion that connects seamlessly to the WOTO App. Designed to be carried on keychains, loops, or hidden pockets, it lets you send silent emergency alerts with a double-click without ever taking out or unlocking your phone.
          </p>
        </motion.div>

        {/* 2. Main Hardware Feature Card (Clean Solid Layout) */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-12 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Specs List */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl font-bold text-[var(--text-main)]">
                  Frictionless Hardware Protection
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                  When panic sets in, navigating touchscreens is unreliable. The physical WOTO chip provides tactile certainty—a deliberate double-press triggers instant multi-channel SOS dispatches to your emergency contacts.
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {specs.map((spec, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--primary-deep)]/40 border border-[var(--border)] shadow-sm hover:border-[var(--primary)]/40 transition-colors duration-200"
                    >
                      <div className="p-2 rounded-xl bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)]">
                        {spec.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-[var(--text-main)]">
                        {spec.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual WOTO Button Display */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center pt-6 lg:pt-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-44 h-44 rounded-3xl bg-gradient-to-br from-[var(--primary)] via-[var(--primary-deep)] to-[#181630] border-4 border-white/20 shadow-2xl flex flex-col items-center justify-center gap-2 relative cursor-pointer group"
                >
                  <div className="w-4 h-4 rounded-full bg-[var(--green)] animate-ping absolute top-4 right-4" />
                  <div className="w-3 h-3 rounded-full bg-[var(--green)] absolute top-4.5 right-4.5" />

                  <span className="text-2xl font-extrabold text-white tracking-widest group-hover:text-[var(--coral)] transition-colors duration-300">
                    WOTO
                  </span>
                  <span className="text-[10px] tracking-widest text-purple-200 uppercase font-medium">
                    DOUBLE-CLICK SOS
                  </span>
                </motion.div>
                
                <span className="text-xs text-[var(--text-muted)] mt-4 font-medium italic">
                  * Ultra-lightweight & waterproof casing
                </span>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}