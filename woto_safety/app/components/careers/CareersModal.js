"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, AlertCircle } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import api from "../API/api";

export default function CareersModal({ isOpen, onClose }) {
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
      const response = await axios.post(`${api}/api/careers/apply`, data);
      if (response.data.success) {
        toast.success("Application submitted successfully!");
        reset();
        onClose();
      }
    } catch (error) {
      console.error("Submission failed:", error);
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onInvalid = () => {
    toast.error("Please fill in all mandatory fields correctly before submitting.");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Set z-[100] so it renders above the z-50 Navbar */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[85vh] my-auto rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] shadow-2xl p-6 sm:p-8 text-[var(--text-main)] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--lavender-soft)] dark:bg-[var(--primary-deep)] text-[var(--text-main)] hover:opacity-80 transition-opacity z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-2 mb-6 pr-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--coral)]/10 text-[var(--coral)] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Join WOTO Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Apply to Join WOTO</h2>
            <p className="text-sm text-[var(--text-muted)]">
              Fill out the details below to join our founding team.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  Full Name <span className="text-[var(--coral)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  {...register("fullName", { required: "Full Name is required" })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.fullName ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                />
                {errors.fullName && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  Email Address <span className="text-[var(--coral)]">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
                  })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.email ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                />
                {errors.email && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  Phone Number <span className="text-[var(--coral)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  {...register("phone", { required: "Phone number is required" })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.phone ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                />
                {errors.phone && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone.message}
                  </span>
                )}
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  City <span className="text-[var(--coral)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="City, State"
                  {...register("city", { required: "City is required" })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.city ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                />
                {errors.city && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.city.message}
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Education */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  Education <span className="text-[var(--coral)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Degree, Institution"
                  {...register("education", { required: "Education details are required" })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.education ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                />
                {errors.education && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.education.message}
                  </span>
                )}
              </div>

              {/* Position Applied For */}
              <div>
                <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                  Position Applied For <span className="text-[var(--coral)]">*</span>
                </label>
                <select
                  {...register("positionApplied", { required: "Select a position" })}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                    errors.positionApplied ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                  }`}
                >
                  <option value="">Select a role</option>
                  <option value="App Developer">App Developer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Embedded / IoT Engineer">Embedded / IoT Engineer</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                </select>
                {errors.positionApplied && (
                  <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                    <AlertCircle className="w-3 h-3" /> {errors.positionApplied.message}
                  </span>
                )}
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                Skills <span className="text-[var(--coral)]">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Next.js, React, Node.js, C++, Figma..."
                {...register("skills", { required: "Please enter your relevant skills" })}
                className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all ${
                  errors.skills ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                }`}
              />
              {errors.skills && (
                <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.skills.message}
                </span>
              )}
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                Experience Overview <span className="text-[var(--coral)]">*</span>
              </label>
              <textarea
                rows={2}
                placeholder="Brief overview of relevant work or projects..."
                {...register("experience", { required: "Experience overview is required" })}
                className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all resize-none ${
                  errors.experience ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                }`}
              />
              {errors.experience && (
                <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.experience.message}
                </span>
              )}
            </div>

            {/* Portfolio Link */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                Portfolio / GitHub / LinkedIn
              </label>
              <input
                type="text"
                placeholder="https://..."
                {...register("portfolioUrl")}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border border-[var(--border)] text-sm outline-none focus:border-[var(--primary)]"
              />
            </div>

            {/* Why Join */}
            <div>
              <label className="block text-xs font-semibold mb-1 text-[var(--text-main)]">
                Why do you want to join WOTO? <span className="text-[var(--coral)]">*</span>
              </label>
              <textarea
                rows={2}
                placeholder="Tell us what draws you to WOTO's safety mission..."
                {...register("whyJoin", { required: "Please share why you want to join WOTO" })}
                className={`w-full px-4 py-2.5 rounded-xl bg-[var(--bg-light)] border text-sm outline-none transition-all resize-none ${
                  errors.whyJoin ? "border-rose-500 focus:ring-1 focus:ring-rose-500" : "border-[var(--border)] focus:border-[var(--primary)]"
                }`}
              />
              {errors.whyJoin && (
                <span className="flex items-center gap-1 text-[11px] text-rose-500 mt-1">
                  <AlertCircle className="w-3 h-3" /> {errors.whyJoin.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl bg-[var(--coral)] hover:bg-opacity-90 text-white font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}