"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Zap, ShieldCheck, Bluetooth } from "lucide-react";

export default function Button3DViewer() {
  const [pressed, setPressed] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);

  const handleDoubleClick = () => {
    setPressed(true);
    setPulseCount((prev) => prev + 1);
    setTimeout(() => setPressed(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Explanation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-semibold">
            <Radio className="w-3.5 h-3.5" />
            <span>Tactile Hardware Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Double-Click for Silent SOS
          </h2>
          <p className="text-base text-[var(--text-muted)] leading-relaxed">
            Test the WOTO Smart Button simulator. In critical moments where pulling out a phone isn&apos;t safe, a discrete double-press sends immediate, multi-channel emergency dispatches.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="p-3.5 rounded-2xl bg-[var(--bg-light)] border border-[var(--border)]">
              <span className="text-xs text-[var(--text-muted)] block">Latency</span>
              <span className="text-sm font-bold text-[var(--green)]">&lt; 0.8 Seconds</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--bg-light)] border border-[var(--border)]">
              <span className="text-xs text-[var(--text-muted)] block">Range</span>
              <span className="text-sm font-bold text-[var(--primary)] dark:text-purple-300">Up to 30 Meters</span>
            </div>
          </div>
        </div>

        {/* Right Interactive Button Mockup */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
          
          {/* Animated Signal Rings */}
          <AnimatePresence>
            {pressed && (
              <>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute w-48 h-48 rounded-full border-2 border-[var(--coral)] pointer-events-none"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 2.3, opacity: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, repeat: Infinity }}
                  className="absolute w-48 h-48 rounded-full border-2 border-rose-500 pointer-events-none"
                />
              </>
            )}
          </AnimatePresence>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onDoubleClick={handleDoubleClick}
            className={`w-48 h-48 rounded-full cursor-pointer flex flex-col items-center justify-center gap-2 relative shadow-2xl transition-all duration-300 border-4 ${
              pressed
                ? "bg-gradient-to-br from-rose-500 to-red-700 border-white/40 shadow-rose-500/50"
                : "bg-gradient-to-br from-[var(--primary)] via-[var(--primary-deep)] to-[#181630] border-white/20"
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-[var(--green)] animate-ping absolute top-5 right-5" />
            <div className="w-3 h-3 rounded-full bg-[var(--green)] absolute top-5.5 right-5.5" />

            <span className="text-2xl font-black text-white tracking-widest">WOTO</span>
            <span className="text-[10px] tracking-widest text-purple-200 uppercase font-bold">
              {pressed ? "SOS TRIGGERED" : "DOUBLE-CLICK ME"}
            </span>
          </motion.div>

          <span className="text-xs text-[var(--text-muted)] mt-6 font-medium">
            {pressed
              ? "⚡ Silent Emergency Alert Dispatched!"
              : "Double-click the button above to simulate trigger"}
          </span>
        </div>

      </div>
    </div>
  );
}