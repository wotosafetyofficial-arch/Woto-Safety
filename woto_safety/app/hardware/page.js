"use client";

import { motion } from "framer-motion";
import { Cpu, BatteryCharging, Bluetooth, Radio, ShieldCheck, Droplet, Zap, Feather } from "lucide-react";
import Button3DViewer from "../components/hardware/Button3DViewer";
import HardwareSpecCard from "../components/hardware/HardwareSpecCard";

export default function HardwarePage() {
  const hardwareSpecs = [
    {
      icon: <BatteryCharging className="w-7 h-7 text-[var(--green)]" />,
      title: "2-Year Ultra Battery Life",
      description: "Powered by a replaceable CR2032 coin cell optimized with deep-sleep firmware that lasts up to 24 months without charging.",
      highlight: "Zero Charging Required"
    },
    {
      icon: <Bluetooth className="w-7 h-7 text-[var(--primary)] dark:text-purple-300" />,
      title: "BLE 5.2 Connectivity",
      description: "Low-Energy Bluetooth 5.2 protocol ensures an unbreakable connection with instant automatic reconnection.",
      highlight: "Instant Auto-Sync"
    },
    {
      icon: <Radio className="w-7 h-7 text-[var(--coral)]" />,
      title: "Discreet Keyring Form Factor",
      description: "Designed as an ultra-compact accessory that attaches seamlessly to keychains, bag straps, or inner coat pockets.",
      highlight: "Compact & Covert"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[var(--green)]" />,
      title: "Accidental-Click Guard",
      description: "Algorithmic double-press detection filters out accidental bumps while making intentional triggers foolproof.",
      highlight: "Double-Press Precision"
    },
    {
      icon: <Droplet className="w-7 h-7 text-[var(--primary)] dark:text-purple-300" />,
      title: "IP67 Water & Dust Resistance",
      description: "Sealed casing protects internal circuitry against heavy rain, water splashes, dust, and daily wear.",
      highlight: "IP67 Certified"
    },
    {
      icon: <Feather className="w-7 h-7 text-[var(--coral)]" />,
      title: "Featherlight Ergonomics",
      description: "Weighing under 18 grams, the WOTO chip provides total tactile certainty without adding bulk to your pocket.",
      highlight: "Ultra Lightweight (18g)"
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hardware-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--bg-main)]/85 dark:bg-[var(--bg-main)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Cpu className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Physical Hardware Companion</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
            The WOTO Smart Safety Button
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Tactile certainty when seconds matter most. Engineered for seamless interaction without ever pulling out or unlocking your smartphone.
          </p>
        </motion.div>

        {/* Interactive Double-Click Demo */}
        <div className="mb-20">
          <Button3DViewer />
        </div>

        {/* Specs Grid */}
        <div className="space-y-6 mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-main)]">
            Hardware Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareSpecs.map((spec, index) => (
              <HardwareSpecCard key={index} spec={spec} index={index} />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}