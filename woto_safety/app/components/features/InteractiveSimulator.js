"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, ShieldCheck, MapPin, Radio, BellRing } from "lucide-react";

export default function InteractiveSimulator() {
  const [sosState, setSosState] = useState("idle"); // 'idle' | 'triggering' | 'active'

  const handleTrigger = () => {
    setSosState("triggering");
    setTimeout(() => {
      setSosState("active");
    }, 1500);
  };

  const handleReset = () => {
    setSosState("idle");
  };

  return (
    <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-12 shadow-2xl my-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Side: Explanatory Copy */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-semibold">
            <Radio className="w-3.5 h-3.5" />
            <span>Live System Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)] tracking-tight">
            Try the WOTO Dispatch Flow
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
            Click the simulator button to see how WOTO handles emergency situations instantly—locking coordinates, notifying emergency circles, and broadcasting live location streams.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-main)] font-medium">
              <ShieldCheck className="w-4 h-4 text-[var(--green)]" />
              <span>Zero-lag signal relay via encrypted WebSockets</span>
            </div>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[var(--text-main)] font-medium">
              <MapPin className="w-4 h-4 text-[var(--coral)]" />
              <span>High-precision GPS coordinate snapshotting</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Mock Screen */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[9/18] rounded-[40px] bg-slate-950 border-[6px] border-slate-800 shadow-2xl p-5 flex flex-col justify-between text-white overflow-hidden">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-b-xl z-20" />

            {/* Header */}
            <div className="pt-4 flex items-center justify-between text-xs z-10">
              <span className="font-bold text-slate-300">WOTO Safety</span>
              <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
              </span>
            </div>

            {/* Dynamic Status Screen */}
            <AnimatePresence mode="wait">
              {sosState === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="my-auto flex flex-col items-center text-center space-y-4"
                >
                  <button
                    onClick={handleTrigger}
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-rose-500 to-red-700 shadow-lg shadow-rose-600/40 border-4 border-white/20 flex flex-col items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  >
                    <span className="text-white font-black text-lg">SOS</span>
                    <span className="text-[9px] text-white/80">TAP DEMO</span>
                  </button>
                  <span className="text-[10px] text-slate-400">Click button to trigger emergency flow</span>
                </motion.div>
              )}

              {sosState === "triggering" && (
                <motion.div
                  key="triggering"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="my-auto flex flex-col items-center text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full border-4 border-rose-500 border-t-transparent animate-spin" />
                  <span className="text-xs font-bold text-rose-400">Locking Coordinates...</span>
                </motion.div>
              )}

              {sosState === "active" && (
                <motion.div
                  key="active"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="my-auto space-y-3 text-center"
                >
                  <div className="p-3 rounded-2xl bg-rose-500/20 border border-rose-500/40 space-y-1">
                    <AlertTriangle className="w-6 h-6 text-rose-400 mx-auto animate-bounce" />
                    <p className="text-xs font-bold text-rose-300">EMERGENCY BROADCAST ACTIVE</p>
                    <p className="text-[10px] text-slate-300">GPS: 30.3165° N, 78.0322° E</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-1 text-left">
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>SMS Alert Sent</span>
                      <span>100%</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Contacts Notified</span>
                      <span>5 / 5</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-2 rounded-xl bg-slate-800 text-xs text-slate-300 font-medium hover:bg-slate-700 transition-colors"
                  >
                    Reset Simulation
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-[9px] text-slate-500 text-center">WOTO Protection Engine v2.4</div>
          </div>
        </div>

      </div>
    </div>
  );
}