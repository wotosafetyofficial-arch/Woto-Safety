"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../components/API/api";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post(`${api}/api/contact`, data);
      if (response.data.success) {
        toast.success("Message sent successfully! We will get back to you shortly.");
        reset();
      }
    } catch (error) {
      console.error("Contact error:", error);
      toast.error(error.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden bg-[var(--bg-main)]">
      
      {/* Background Topographical Video Layer */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/contact-bg.mp4" type="video/mp4" />
        </video>

        {/* Dynamic Light/Dark Theme Overlay for Readability */}
        <div className="absolute inset-0 bg-[var(--bg-main)]/85 dark:bg-[var(--bg-main)]/90 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--primary)] dark:text-purple-300 text-xs font-semibold uppercase tracking-wider border border-[var(--border)]">
            <MessageSquare className="w-3.5 h-3.5 text-[var(--coral)]" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-main)] tracking-tight">
            Get in Touch with WOTO
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            Have questions about our technology, partnership opportunities, or safety solutions? Reach out to our team directly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 rounded-3xl bg-[var(--primary-deep)] text-white p-8 sm:p-10 shadow-xl space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold">Reach Out to Us</h2>
              <p className="text-purple-200 text-sm mt-2">
                We are actively building partnerships with emergency services, safety organizations, and technology creators.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/10 text-[var(--coral)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-purple-200 block">Email Us</span>
                  <a href="mailto:wotosafetyofficial@gmail.com" className="text-sm font-semibold text-white hover:underline">
                    wotosafetyofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/10 text-emerald-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-purple-200 block">Call Us</span>
                  <a href="tel:+919258869338" className="text-sm font-semibold text-white hover:underline">
                    +91 9258869338
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/10 text-purple-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-purple-200 block">Location</span>
                  <span className="text-sm font-semibold text-white">Dehradun, Uttarakhand, India</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-6 border-t border-white/10">
              <span className="text-xs text-purple-200 font-semibold block mb-3 uppercase tracking-wider">Follow Us</span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/woto_safety?igsi=N2F3emoydWgxOG1u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[var(--coral)] text-white transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://x.com/WOTO_Safety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[var(--coral)] text-white transition-all duration-200"
                  aria-label="Twitter / X"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/woto-safety/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[var(--coral)] text-white transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.762-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Container */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] p-8 sm:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">Name *</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-sm outline-none focus:border-[var(--primary)] text-[var(--text-main)]"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">Email *</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-sm outline-none focus:border-[var(--primary)] text-[var(--text-main)]"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">Subject *</label>
                <input
                  type="text"
                  placeholder="Subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-sm outline-none focus:border-[var(--primary)] text-[var(--text-main)]"
                />
                {errors.subject && (
                  <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.subject.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">Message *</label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-sm outline-none focus:border-[var(--primary)] text-[var(--text-main)] resize-none"
                />
                {errors.message && (
                  <span className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-deep)] text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </main>
  );
}