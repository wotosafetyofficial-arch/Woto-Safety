"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Cpu, Cloud, Rocket } from "lucide-react";
import journeyData from "../../../public/data/journeyData.json";

export default function JourneyTree() {
  // Helper function to resolve dynamic icon rendering
  const renderIcon = (type) => {
    switch (type) {
      case "sparkles":
        return <Sparkles className="w-5 h-5 text-[var(--coral)]" />;
      case "cpu":
        return <Cpu className="w-5 h-5 text-[var(--primary)] dark:text-purple-300" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-[var(--green)]" />;
      case "rocket":
        return <Rocket className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[var(--coral)]" />;
    }
  };

  return (
    <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-6 sm:p-12 shadow-2xl space-y-12 relative overflow-hidden">
      
      {/* Background Video Layer for Tree Div */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/journey-bg.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Theme Overlay for High Contrast */}
        <div className="absolute inset-0 bg-[var(--card-bg)]/85 dark:bg-[var(--card-bg)]/90 backdrop-blur-[2px]" />
      </div>

      {/* Section Title */}
      <div className="text-center max-w-xl mx-auto space-y-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Timeline & Growth</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-main)]">
          Our Journey Tree
        </h2>
        <p className="text-sm text-[var(--text-muted)]">
          How WOTO grew from a concept into a connected safety network.
        </p>
      </div>

      {/* Animated Tree Container */}
      <div className="relative max-w-4xl mx-auto pt-4 pb-8 z-10">
        
        {/* Animated Central Tree Trunk Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-6 md:left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[var(--coral)] via-[var(--primary)] to-[var(--green)] rounded-full z-0 opacity-80"
        />

        <div className="space-y-12 md:space-y-16">
          {journeyData.map((step, index) => {
            const isLeft = step.align === "left";

            return (
              <div
                key={step.id || index}
                className="relative flex flex-col md:flex-row items-center justify-between z-10"
              >
                {/* Tree Center Pulse Node (Trunk Connection) */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--card-bg)] border-4 border-[var(--coral)] shadow-lg flex items-center justify-center z-20"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--coral)] animate-ping" />
                </motion.div>

                {/* Left/Right Branch Card */}
                <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${isLeft ? "md:text-right" : "md:order-2 md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ y: -4 }}
                    className="animated-border-card rounded-2xl bg-[var(--bg-light)]/90 backdrop-blur-md border border-[var(--border)] p-6 shadow-xl space-y-3 relative group"
                  >
                    <div className={`flex items-center gap-3 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                      <div className="p-2.5 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] shadow-sm">
                        {renderIcon(step.iconType)}
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--coral)] block">
                          {step.phase}
                        </span>
                        <h3 className="text-base font-bold text-[var(--text-main)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <h4 className="text-xs font-semibold text-[var(--primary)] dark:text-purple-300">
                      {step.subtitle}
                    </h4>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Empty Balancing Side Column for Desktop Grid */}
                <div className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-2" : "md:order-1"}`} />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}