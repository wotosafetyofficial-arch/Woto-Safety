"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  Target,
  Eye,
  Heart,
  Zap,
  Award,
  ArrowRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
} from "lucide-react";
import JourneyTree from "../components/about/JourneyTree";

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const values = [
    {
      icon: <Zap className="w-6 h-6 text-[var(--coral)]" />,
      title: "Zero-Latency Priority",
      description:
        "When emergencies occur, seconds dictate outcomes. We engineer every software packet and hardware signal for maximum delivery speed.",
    },
    {
      icon: <Shield className="w-6 h-6 text-[var(--primary)] dark:text-purple-300" />,
      title: "Uncompromising Privacy",
      description:
        "Location tracking activates strictly during intentional emergency dispatches or active safety check-ins. Your data belongs to you.",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      title: "Human-Centric Design",
      description:
        "Emergency interfaces must require zero cognitive load. We design tactile and visual interactions for high-stress scenarios.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: "Connected Ecosystem",
      description:
        "Combining standalone hardware triggers with multi-channel smartphone software creates a resilient safety mesh.",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/about-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[var(--bg-main)]/85 dark:bg-[var(--bg-main)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Shield className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Our Story & Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
            Redefining Personal Safety for Everyone.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            WOTO was founded with a singular purpose: bridging physical hardware and rapid cloud response to deliver immediate help when every second counts.
          </p>
        </motion.div>

        {/* Portrait Founder Reel Player Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group bg-black">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            >
              <source
                src="https://twb1nsdhwc0tqch8.public.blob.vercel-storage.com/IMG_9112.mp4"
                type="video/mp4"
              />
            </video>

            {/* Top Info Tag & Mute Badge */}
            <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-20 pointer-events-none">
              <div className="text-white drop-shadow-md space-y-0.5">
                <h3 className="font-extrabold text-sm sm:text-base tracking-wide leading-tight">
                  Nishant Chaudhary
                </h3>
                <p className="text-[10px] font-semibold tracking-wider text-gray-300 uppercase">
                  Founder
                </p>
              </div>

              {/* Tap to Unmute Overlay pill (shows when muted) */}
              {isMuted && (
                <button
                  onClick={toggleMute}
                  className="pointer-events-auto px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-lg hover:bg-black/80 transition-all"
                >
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>Tap to Unmute</span>
                </button>
              )}
            </div>

            {/* Floating Glassmorphic Control Bar at Bottom */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center justify-between w-[85%] px-4 py-2.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full text-white hover:bg-white/20 transition-all"
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 fill-white" />
                ) : (
                  <Play className="w-5 h-5 fill-white" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-white hover:bg-white/20 transition-all text-xs font-semibold uppercase tracking-wider"
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span>Mute</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span>Unmute</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-10 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[var(--coral)]/10 text-[var(--coral)] w-fit">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Our Mission</h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                To eliminate barriers to personal safety by creating accessible, discreet, and reliable emergency technology that empowers individuals and connects families instantly during critical moments.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-10 shadow-xl space-y-4 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="p-3.5 rounded-2xl bg-[var(--primary)]/10 text-[var(--primary)] dark:text-purple-300 w-fit">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--text-main)]">Our Vision</h2>
              <p className="text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                To build an interconnected safety infrastructure where hardware devices, mobile networks, and emergency responders harmonize to minimize response times and provide peace of mind globally.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Guiding Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[var(--text-main)]">Guiding Principles</h2>
            <p className="text-sm text-[var(--text-muted)]">The foundational pillars that guide WOTO product engineering.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-6 shadow-xl space-y-3"
              >
                <div className="p-3 rounded-2xl bg-[var(--bg-light)] border border-[var(--border)] w-fit">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-main)]">{val.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Tree Journey Component */}
        <JourneyTree />

        {/* Bottom CTA Card */}
        <div className="rounded-3xl bg-[var(--primary-deep)] text-white p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Want to join or partner with WOTO?</h2>
            <p className="text-sm text-purple-200">
              We are actively collaborating with safety advocates, engineers, and community organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/team" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3.5 rounded-xl bg-[var(--coral)] hover:bg-opacity-90 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all">
                <span>Meet Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center justify-center gap-2 transition-all">
                <span>Get In Touch</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}