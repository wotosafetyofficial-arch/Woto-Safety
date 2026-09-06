"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";

export default function FeatureCard({ feature, index }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="animated-border-card rounded-3xl bg-[var(--card-bg)] p-8 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300 relative overflow-hidden group"
    >
      <div className="space-y-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="p-3.5 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--primary-deep)]/60 border border-[var(--border)] group-hover:scale-110 transition-transform duration-300">
            {feature.icon}
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 border border-[var(--border)]">
            {feature.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[var(--text-main)] group-hover:text-[var(--coral)] transition-colors">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Interactive Live Simulation Trigger */}
      <div className="pt-4 border-t border-[var(--border)] relative z-10">
        <button
          onClick={() => setIsActive(!isActive)}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[var(--bg-light)] hover:bg-[var(--lavender-soft)] dark:hover:bg-[var(--primary-deep)] text-xs font-semibold text-[var(--text-main)] transition-colors duration-200"
        >
          <span className="flex items-center gap-2">
            {isActive ? (
              <CheckCircle2 className="w-4 h-4 text-[var(--green)]" />
            ) : (
              <Play className="w-3.5 h-3.5 text-[var(--coral)]" />
            )}
            <span>{isActive ? "Simulation Active" : "Interactive Demo"}</span>
          </span>
          <span className="text-[10px] opacity-70 uppercase tracking-wider">
            {isActive ? "Live" : "Test"}
          </span>
        </button>

        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-3 p-3 rounded-xl bg-[var(--primary-deep)] text-white text-[11px] space-y-1"
          >
            <p className="font-semibold text-[var(--coral)]">⚡ {feature.interactiveText}</p>
            <p className="text-purple-200">{feature.interactiveSub}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}