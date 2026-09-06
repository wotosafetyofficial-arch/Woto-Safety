"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, UserCheck, Globe } from "lucide-react";
import teamData from "../../public/data/TeamInfo.json";

export default function TeamPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/team-bg.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Light/Dark Overlay */}
        <div className="absolute inset-0 bg-[var(--bg-main)]/85 dark:bg-[var(--bg-main)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <Users className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Meet The Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
            The minds behind WOTO.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            We are a dedicated group of engineers, designers, and innovators united by a single purpose: making immediate personal safety accessible to everyone.
          </p>
        </motion.div>

        {/* Team Grid Loaded from JSON */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id || index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-6 shadow-xl flex flex-col justify-between space-y-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Photo Frame / Initial Placeholder */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[var(--bg-light)] border border-[var(--border)] flex items-center justify-center">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 font-bold text-4xl">
                      {member.name ? member.name.charAt(0) : "W"}
                    </div>
                  )}
                </div>

                {/* Member Details */}
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-main)] group-hover:text-[var(--coral)] transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--primary)] dark:text-purple-300 block mt-0.5">
                    {member.role}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] mt-2.5 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[var(--border)] flex items-center gap-3 text-[var(--text-muted)]">
                {member.linkedin ? (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-[var(--bg-light)] hover:text-[var(--primary)] transition-colors" title="LinkedIn">
                    <UserCheck className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="p-2 text-gray-400 opacity-50 cursor-not-allowed">
                    <UserCheck className="w-4 h-4" />
                  </span>
                )}

                {member.instagram ? (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl hover:bg-[var(--bg-light)] hover:text-[var(--primary)] transition-colors" title="Instagram">
                    <Globe className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="p-2 text-gray-400 opacity-50 cursor-not-allowed">
                    <Globe className="w-4 h-4" />
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}