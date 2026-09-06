"use client";

import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Users, 
  MapPin, 
  Bell, 
  Radio, 
  UserCheck, 
  Smartphone, 
  Lock, 
  Zap, 
  BatteryCharging, 
  Activity 
} from "lucide-react";
import FeatureCard from "../components/features/FeatureCard";
import InteractiveSimulator from "../components/features/InteractiveSimulator";

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <ShieldAlert className="w-7 h-7 text-[var(--coral)]" />,
      title: "One-Tap Emergency SOS",
      description: "Trigger multi-channel emergency protocols in under two seconds. Instantly alerts designated contacts and emergency nodes.",
      badge: "Core Protection",
      interactiveText: "SOS Dispatch Dispatched",
      interactiveSub: "Broadcasting emergency signal to 5 contacts."
    },
    {
      icon: <Users className="w-7 h-7 text-[var(--primary)] dark:text-purple-300" />,
      title: "Trusted Emergency Circles",
      description: "Assign up to 5 priority contacts. In an emergency, contacts receive continuous updates and situational context.",
      badge: "Network Safety",
      interactiveText: "Trusted Contacts Sync Active",
      interactiveSub: "Mom, Raj K., and 3 others connected."
    },
    {
      icon: <MapPin className="w-7 h-7 text-[var(--coral)]" />,
      title: "Real-Time Live Location Tracking",
      description: "Precision location broadcast activates during emergency dispatch with route tracking and location refreshes.",
      badge: "GPS Intelligence",
      interactiveText: "Live GPS Streaming",
      interactiveSub: "Coordinates updating every 3 seconds."
    },
    {
      icon: <Radio className="w-7 h-7 text-[var(--green)]" />,
      title: "WOTO Safety Hardware Sync",
      description: "Pair with the discreet WOTO Smart Button via BLE. Double-click to issue silent SOS dispatches without touching your phone.",
      badge: "Hardware Native",
      interactiveText: "Hardware Button Connected",
      interactiveSub: "Battery: 98% | Signal: Strong"
    },
    {
      icon: <Bell className="w-7 h-7 text-[var(--primary)] dark:text-purple-300" />,
      title: "Multi-Channel Dispatches",
      description: "Ensures emergency notifications cut through silent modes using automated push notifications and fallback SMS.",
      badge: "High Deliverability",
      interactiveText: "Multi-Channel Alert Test",
      interactiveSub: "Push + SMS channels validated."
    },
    {
      icon: <UserCheck className="w-7 h-7 text-[var(--green)]" />,
      title: "Medical & Incident Profile",
      description: "Store essential emergency medical notes, allergies, blood type, and contacts accessible to first responders.",
      badge: "First Response",
      interactiveText: "Medical Profile Secured",
      interactiveSub: "Blood group & medical contacts ready."
    }
  ];

  const secondaryCapabilities = [
    {
      icon: <Lock className="w-5 h-5 text-[var(--primary)] dark:text-purple-300" />,
      title: "End-to-End Encryption",
      label: "Zero-knowledge encryption protects your location and personal profile until emergency activation."
    },
    {
      icon: <Zap className="w-5 h-5 text-[var(--coral)]" />,
      title: "Low Latency Dispatch",
      label: "Engineered for optimal dispatch speed even in poor connectivity environments."
    },
    {
      icon: <BatteryCharging className="w-5 h-5 text-[var(--green)]" />,
      title: "Battery Optimized",
      label: "Background services utilize ultra-low battery consumption protocols until an active event."
    },
    {
      icon: <Activity className="w-5 h-5 text-[var(--primary)] dark:text-purple-300" />,
      title: "Safety Check-Ins",
      label: "Set timed safety timers when traveling solo; automated alerts trigger if check-in windows pass."
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/feature-bg.mp4" type="video/mp4" />
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
            <Smartphone className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Platform Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
            Engineered for rapid, uncompromised safety.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Explore the animated features and live simulator below to experience how WOTO keeps you protected in critical situations.
          </p>
        </motion.div>

        {/* Animated Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {coreFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Interactive Mobile SOS Simulator Component */}
        <InteractiveSimulator />

        {/* Under the Hood Tech Details */}
        <div className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-12 shadow-xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <h2 className="text-2xl font-bold text-[var(--text-main)]">
              Built on Modern Architecture
            </h2>
            <p className="text-sm text-[var(--text-muted)]">
              Under-the-hood optimization ensuring dependability when every second counts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryCapabilities.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[var(--bg-light)] border border-[var(--border)] space-y-2">
                <div className="p-2 rounded-xl bg-[var(--card-bg)] w-fit border border-[var(--border)]">
                  {item.icon}
                </div>
                <h4 className="text-sm font-bold text-[var(--text-main)]">{item.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}