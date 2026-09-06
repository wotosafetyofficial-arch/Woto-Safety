"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Compass, Zap } from "lucide-react";
import TiltGlassCard from "../ui/TiltGlassCard";

export default function ProblemVision() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Compass className="w-3.5 h-3.5" />
            <span>About WOTO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Safety that responds as fast as emergencies happen.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Existing emergency systems are slow, difficult to activate under stress, and rely entirely on the person in danger navigating complex steps. WOTO is reimagining that.
          </p>
        </motion.div>

        {/* 3D Glassmorphism Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch perspective-1000">
          
          {/* Card 1: The Problem */}
          <TiltGlassCard className="bg-[var(--glass)] dark:bg-white/5 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-transparent">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 dark:bg-rose-500/20 text-[var(--coral)] flex items-center justify-center border border-rose-500/20 shadow-inner">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[var(--text-main)]">
                The problem we&apos;re solving
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed text-sm sm:text-base">
                When someone is in danger, they may have only seconds to call for help. Traditional emergency calls require unlocking a phone, dialing, and communicating a location — a process that&apos;s nearly impossible under panic, physical restraint, or in situations where silence is critical.
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--glass-border)]">
              <div className="flex items-center justify-between text-xs sm:text-sm text-[var(--text-muted)]">
                <span>Average traditional activation:</span>
                <span className="font-bold text-[var(--coral)]">45–60 Seconds</span>
              </div>
            </div>
          </TiltGlassCard>

          {/* Card 2: WOTO's Vision */}
          <TiltGlassCard className="bg-gradient-to-br from-[var(--primary-deep)]/90 via-[var(--primary)]/80 to-[var(--primary-deep)]/90 text-white">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/20 shadow-inner">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                WOTO&apos;s Vision
              </h3>
              <p className="text-purple-200 leading-relaxed text-sm sm:text-base">
                A world where every person — regardless of age, technical literacy, or situation — has instant, frictionless access to safety. WOTO envisions personal safety technology that is as natural and invisible as wearing a watch.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-xs sm:text-sm text-purple-200">
                <span>WOTO hardware trigger speed:</span>
                <span className="font-bold text-emerald-400">&lt; 2 Seconds</span>
              </div>
            </div>
          </TiltGlassCard>

        </div>

      </div>
    </section>
  );
}