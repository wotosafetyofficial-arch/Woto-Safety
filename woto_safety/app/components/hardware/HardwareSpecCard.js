"use client";

import { motion } from "framer-motion";

export default function HardwareSpecCard({ spec, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="animated-border-card rounded-3xl bg-[var(--card-bg)] p-8 shadow-xl flex flex-col justify-between space-y-4 transition-all duration-300"
    >
      <div className="space-y-4">
        <div className="p-3.5 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--primary-deep)]/60 border border-[var(--border)] w-fit">
          {spec.icon}
        </div>
        <h3 className="text-xl font-bold text-[var(--text-main)]">{spec.title}</h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
          {spec.description}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--border)]">
        <span className="text-xs font-semibold text-[var(--primary)] dark:text-purple-300">
          {spec.highlight}
        </span>
      </div>
    </motion.div>
  );
}