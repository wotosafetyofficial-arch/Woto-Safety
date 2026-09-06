"use client";

import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Users, 
  MapPin, 
  Bell, 
  ShieldCheck, 
  UserCheck, 
  Smartphone,
  Radio
} from "lucide-react";

export default function FeatureGrid() {
  const features = [
    {
      icon: <ShieldAlert className="w-6 h-6 text-[var(--coral)]" />,
      title: "Emergency SOS",
      description: "One-tap emergency activation triggers immediate alerts to trusted contacts and emergency protocols.",
      accent: "border-rose-500/20"
    },
    {
      icon: <Users className="w-6 h-6 text-[var(--primary)] dark:text-purple-300" />,
      title: "Trusted Contacts",
      description: "Designate up to 5 emergency contacts who receive instant alerts with your location and situation.",
      accent: "border-purple-500/20"
    },
    {
      icon: <MapPin className="w-6 h-6 text-[var(--coral)]" />,
      title: "Live Location",
      description: "Real-time location sharing activates automatically during an emergency, with route history.",
      accent: "border-rose-500/20"
    },
    {
      icon: <Bell className="w-6 h-6 text-[var(--primary)] dark:text-purple-300" />,
      title: "Emergency Alerts",
      description: "Contacts receive multi-channel alerts — SMS, app notification, and in-app — ensuring the message gets through.",
      accent: "border-purple-500/20"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[var(--green)]" />,
      title: "Safety Status",
      description: "Set and share your safety status. Contacts know you're safe when it matters, and alerted when you're not.",
      accent: "border-emerald-500/20"
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[var(--primary)] dark:text-purple-300" />,
      title: "Emergency Profile",
      description: "Store medical information, blood group, allergies, and emergency contacts for first responders.",
      accent: "border-purple-500/20"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Smartphone className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>WOTO Safety App</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-main)] tracking-tight">
            Your safety, always in your pocket.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            The WOTO app is the intelligence layer of your personal safety system. It manages contacts, alerts, emergency information, and your hardware chip — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Grid: Feature Cards (2 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-6 rounded-3xl bg-[var(--card-bg)] border ${feature.accent} border-[var(--border)] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--bg-light)] dark:bg-[var(--primary-deep)]/60 border border-[var(--border)] flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-main)]">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Interactive Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center sticky top-28"
          >
            <div className="relative w-full max-w-[320px] aspect-[9/18] rounded-[48px] bg-slate-950 border-[8px] border-slate-800 shadow-2xl p-4 flex flex-col justify-between text-white overflow-hidden">
              
              {/* Phone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-800 rounded-b-2xl z-30" />

              {/* In-App Header */}
              <div className="pt-6 px-2 flex items-center justify-between z-20">
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-medium">Good evening,</span>
                  <span className="text-sm font-bold text-white">Riya S.</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[var(--primary)] text-xs font-bold flex items-center justify-center">
                  RS
                </div>
              </div>

              {/* Status Badge */}
              <div className="my-2 py-1.5 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between z-20">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-300 font-semibold">WOTO Chip Connected</span>
                </div>
                <span className="text-[9px] uppercase text-emerald-400 font-bold">Active</span>
              </div>

              {/* Main Phone SOS Trigger Area */}
              <div className="my-auto py-6 flex flex-col items-center justify-center z-20">
                <motion.button
                  whileTap={{ scale: 0.92 }}
                  className="w-28 h-28 rounded-full bg-gradient-to-br from-rose-500 to-red-700 shadow-lg shadow-rose-600/40 border-4 border-white/20 flex items-center justify-center font-black text-xl tracking-widest text-white cursor-pointer"
                >
                  SOS
                </motion.button>
                <span className="text-[10px] text-slate-400 mt-3 font-medium">
                  Hold 2s to activate emergency
                </span>
              </div>

              {/* Lower Mobile Status Cards */}
              <div className="space-y-2 z-20">
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col">
                    <span className="text-slate-400">LOCATION</span>
                    <span className="text-emerald-400 font-bold mt-0.5">Sharing Active</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col">
                    <span className="text-slate-400">STATUS</span>
                    <span className="text-emerald-400 font-bold mt-0.5">Safe</span>
                  </div>
                </div>

                {/* Trusted Contacts Mini List */}
                <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                    Trusted Contacts
                  </span>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-200">Mom</span>
                      <span className="text-[9px] text-emerald-400">Primary</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-semibold text-slate-200">Raj K.</span>
                      <span className="text-[9px] text-slate-400">Trusted</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}