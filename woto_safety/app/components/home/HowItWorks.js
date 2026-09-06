"use client";

import { motion } from "framer-motion";
import { Power, Wifi, Cpu, MessageSquare, Workflow } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Activate",
      description: "The user activates WOTO through the app's SOS button or the physical WOTO hardware chip — a single deliberate action.",
      icon: <Power className="w-5 h-5 text-[var(--coral)]" />,
    },
    {
      step: "02",
      title: "Connect",
      description: "The hardware chip communicates with the WOTO app and ecosystem, establishing a connection and transmitting the emergency signal.",
      icon: <Wifi className="w-5 h-5 text-[var(--primary)] dark:text-purple-300" />,
    },
    {
      step: "03",
      title: "Process",
      description: "Emergency information — including your location, identity, medical profile, and emergency contacts — is assembled and processed instantly.",
      icon: <Cpu className="w-5 h-5 text-[var(--green)]" />,
    },
    {
      step: "04",
      title: "Respond",
      description: "Trusted contacts and the appropriate support network receive the alert, your location, and your emergency profile so they can act immediately.",
      icon: <MessageSquare className="w-5 h-5 text-[var(--coral)]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Workflow className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Four steps between danger and a response.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            WOTO is designed to compress the gap between an emergency and a response to the absolute minimum. Here&apos;s how the system works.
          </p>
        </motion.div>

        {/* Workflow Steps Grid / Timeline */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--border)] -translate-y-8 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Step Circle Hub */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[var(--card-bg)] border-2 border-[var(--border)] group-hover:border-[var(--primary)] text-[var(--text-main)] font-bold text-lg flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                    {item.step}
                  </div>
                  <div className="absolute -bottom-2 -right-1 p-1.5 rounded-full bg-[var(--bg-main)] border border-[var(--border)] shadow-sm">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-bold text-[var(--text-main)]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}