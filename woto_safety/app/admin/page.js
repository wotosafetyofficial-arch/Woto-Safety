"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Eye,
    EyeOff,
    Lock,
    LogOut,
    ShieldCheck,
    Mail,
    FileText,
    MessageSquare,
    Clock,
    Phone,
    GraduationCap,
    MapPin,
    Trash2,
    Link as LinkIcon,
} from "lucide-react";
import axios from "axios";
import api from "../components/API/api";

const AUTH_TOKEN_KEY = "woto_admin_token";
const LOCKOUT_KEY = "woto_admin_lockout_until";
const ATTEMPTS_KEY = "woto_admin_attempts";

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // Lockout State Management
    const [attempts, setAttempts] = useState(0);
    const [lockoutTimeLeft, setLockoutTimeLeft] = useState(0);

    // Dashboard Data State
    const [activeTab, setActiveTab] = useState("applications");
    const [appData, setAppData] = useState({ applications: [], messages: [] });
    const [storageType, setStorageType] = useState("");

    // Track items pending deletion confirmation/action
    const [deletingId, setDeletingId] = useState(null);
    const [confirmDeleteId, setConfirmDeleteId] = useState(null);

    // Check Lockout and Token on Initial Render
    useEffect(() => {
        const savedAttempts = parseInt(localStorage.getItem(ATTEMPTS_KEY) || "0", 10);
        const lockoutUntil = parseInt(localStorage.getItem(LOCKOUT_KEY) || "0", 10);
        const now = Date.now();

        if (lockoutUntil > now) {
            setLockoutTimeLeft(Math.ceil((lockoutUntil - now) / 1000));
            setAttempts(3);
        } else {
            localStorage.removeItem(LOCKOUT_KEY);
            localStorage.removeItem(ATTEMPTS_KEY);
            setAttempts(0);
        }

        const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
        if (token) {
            verifyToken(token);
        }
    }, []);

    // Persistent Countdown Timer for 1-minute Lockout
    useEffect(() => {
        let timer;
        if (lockoutTimeLeft > 0) {
            timer = setInterval(() => {
                setLockoutTimeLeft((prev) => {
                    if (prev <= 1) {
                        localStorage.removeItem(LOCKOUT_KEY);
                        localStorage.removeItem(ATTEMPTS_KEY);
                        setAttempts(0);
                        setErrorMsg("");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [lockoutTimeLeft]);

    // Handle Login Submission
    const handleLogin = async (e) => {
        e.preventDefault();

        if (lockoutTimeLeft > 0) {
            setErrorMsg(`Too many failed attempts. Access locked for ${lockoutTimeLeft}s.`);
            return;
        }

        setErrorMsg("");
        setIsLoading(true);

        try {
            const response = await axios.post(`${api}/api/admin/login`, {
                username: username.trim(),
                password,
            });

            if (response.data.success) {
                sessionStorage.setItem(AUTH_TOKEN_KEY, response.data.token);
                localStorage.removeItem(ATTEMPTS_KEY);
                localStorage.removeItem(LOCKOUT_KEY);
                setAttempts(0);
                setIsAuthenticated(true);
                fetchDashboardData(response.data.token);
            }
        } catch (err) {
            const newAttempts = attempts + 1;
            setAttempts(newAttempts);
            localStorage.setItem(ATTEMPTS_KEY, newAttempts.toString());

            if (newAttempts >= 3) {
                const lockoutUntil = Date.now() + 60000;
                localStorage.setItem(LOCKOUT_KEY, lockoutUntil.toString());
                setLockoutTimeLeft(60);
                setErrorMsg("Maximum 3 login attempts exceeded. Access locked for 1 minute.");
            } else {
                const remaining = 3 - newAttempts;
                setErrorMsg(
                    err.response?.data?.error ||
                    `Invalid credentials. ${remaining} attempt${remaining > 1 ? "s" : ""} left.`
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    const verifyToken = async (token) => {
        try {
            const response = await axios.get(`${api}/api/admin/verify`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                setIsAuthenticated(true);
                fetchDashboardData(token);
            } else {
                handleLogout();
            }
        } catch {
            handleLogout();
        }
    };

    const fetchDashboardData = async (token) => {
        try {
            const response = await axios.get(`${api}/api/admin/data`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (response.data.success) {
                setAppData({
                    applications: response.data.applications || [],
                    messages: response.data.messages || [],
                });
                setStorageType(response.data.storageType || "mongodb");
            }
        } catch (err) {
            if (err.response?.status === 401) handleLogout();
        }
    };

    const handleLogout = () => {
        sessionStorage.removeItem(AUTH_TOKEN_KEY);
        setIsAuthenticated(false);
        setPassword("");
    };

    // Delete Job Application Handler
    const handleDeleteApplication = async (id) => {
        const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
        setDeletingId(id);
        try {
            await axios.delete(`${api}/api/admin/applications/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAppData((prev) => ({
                ...prev,
                applications: prev.applications.filter((item) => (item._id || item.id) !== id),
            }));
        } catch (err) {
            alert("Failed to delete application. Please try again.");
        } finally {
            setDeletingId(null);
            setConfirmDeleteId(null);
        }
    };

    // Delete Contact Message Handler
    const handleDeleteMessage = async (id) => {
        const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
        setDeletingId(id);
        try {
            await axios.delete(`${api}/api/admin/messages/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAppData((prev) => ({
                ...prev,
                messages: prev.messages.filter((item) => (item._id || item.id) !== id),
            }));
        } catch (err) {
            alert("Failed to delete message. Please try again.");
        } finally {
            setDeletingId(null);
            setConfirmDeleteId(null);
        }
    };

    // Render Login Card View
    if (!isAuthenticated) {
        return (
            <main className="min-h-screen pt-32 pb-16 bg-[var(--bg-dark,#0F0E1E)] flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-[var(--primary-card,#29264D)]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6">
                    <div className="text-center space-y-2">
                        <div className="relative w-16 h-16 mx-auto mb-2">
                            <Image src="/logo.png" alt="WOTO Safety" fill className="object-contain" priority />
                        </div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin Portal</h1>
                        <p className="text-xs text-[var(--text-muted,#A09DD4)]">
                            Sign in with authorized administrator credentials
                        </p>
                    </div>

                    {errorMsg && (
                        <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs text-center font-medium">
                            {errorMsg}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-[var(--lavender-soft,#E8E6F4)] mb-2">
                                Username
                            </label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="wotosafety"
                                disabled={lockoutTimeLeft > 0}
                                required
                                className="w-full bg-[var(--bg-dark,#0F0E1E)]/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--primary,#4F4A86)] disabled:opacity-50 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-[var(--lavender-soft,#E8E6F4)] mb-2">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    disabled={lockoutTimeLeft > 0}
                                    required
                                    className="w-full bg-[var(--bg-dark,#0F0E1E)]/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[var(--primary,#4F4A86)] disabled:opacity-50 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 text-[var(--text-muted,#A09DD4)] hover:text-white text-sm"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading || lockoutTimeLeft > 0}
                            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[var(--primary,#4F4A86)] to-purple-600 hover:opacity-90 text-white font-bold text-sm shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                        >
                            <Lock className="w-4 h-4" />
                            <span>
                                {lockoutTimeLeft > 0
                                    ? `Locked (${lockoutTimeLeft}s)`
                                    : isLoading
                                        ? "Verifying..."
                                        : "🔒 Sign In"}
                            </span>
                        </button>
                    </form>

                    <div className="text-center pt-2">
                        <Link
                            href="/"
                            className="text-xs text-[var(--text-muted,#A09DD4)] hover:text-white transition-colors"
                        >
                            ← Return to Public Website
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    // Render Dashboard View
    return (
        <main className="min-h-screen pt-28 pb-16 bg-[var(--bg-dark,#0F0E1E)] text-[var(--text-light,#F3F1F8)] p-6 sm:p-10">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Admin Sub-Header */}
                <header className=" mt-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                        <h1 className="text-2xl font-extrabold text-white tracking-tight">Admin Dashboard</h1>
                        <p className="text-xs text-[var(--text-muted,#A09DD4)]">Manage job applications & user inquiries</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>{storageType === "mongodb" ? "MongoDB Connected" : "Local Mode"}</span>
                        </span>
                        <button
                            onClick={handleLogout}
                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 flex items-center gap-1.5 transition-all"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </header>

                {/* Tab Selection */}
                <div className="flex gap-3 border-b border-white/10 pb-4">
                    <button
                        onClick={() => setActiveTab("applications")}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "applications"
                                ? "bg-[var(--primary,#4F4A86)] text-white shadow-lg"
                                : "bg-white/5 text-[var(--text-muted,#A09DD4)] hover:text-white"
                            }`}
                    >
                        <FileText className="w-4 h-4" />
                        <span>Job Applications</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white">
                            {appData.applications.length}
                        </span>
                    </button>
                    <button
                        onClick={() => setActiveTab("messages")}
                        className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${activeTab === "messages"
                                ? "bg-[var(--primary,#4F4A86)] text-white shadow-lg"
                                : "bg-white/5 text-[var(--text-muted,#A09DD4)] hover:text-white"
                            }`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        <span>Contact Messages</span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/20 text-white">
                            {appData.messages.length}
                        </span>
                    </button>
                </div>

                {/* Tab Panels */}
                {activeTab === "applications" ? (
                    <div className="space-y-4">
                        {appData.applications.length === 0 ? (
                            <div className="p-12 text-center rounded-2xl bg-[var(--primary-card,#29264D)]/50 border border-white/10 text-[var(--text-muted,#A09DD4)]">
                                No job applications received yet.
                            </div>
                        ) : (
                            appData.applications.map((app, idx) => {
                                const itemId = app._id || app.id || idx;
                                return (
                                    <div
                                        key={itemId}
                                        className="p-6 rounded-2xl bg-[var(--primary-card,#29264D)] border border-white/10 space-y-4 shadow-xl"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-base font-bold text-white">{app.name}</span>
                                                    <span className="px-2.5 py-0.5 rounded-md bg-[var(--primary,#4F4A86)]/30 border border-purple-400/30 text-purple-300 text-[11px] font-semibold">
                                                        {app.position}
                                                    </span>
                                                    {app.city && (
                                                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                                                            <MapPin className="w-3 h-3" />
                                                            {app.city}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <span className="text-[11px] text-[var(--text-muted,#A09DD4)] flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {app.createdAt ? new Date(app.createdAt).toLocaleString() : "N/A"}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-[var(--text-muted,#A09DD4)]">
                                            <div className="flex items-center gap-1.5">
                                                <Mail className="w-3.5 h-3.5 text-purple-300" />
                                                <span>{app.email}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Phone className="w-3.5 h-3.5 text-purple-300" />
                                                <span>{app.phone}</span>
                                            </div>
                                            {app.education && (
                                                <div className="flex items-center gap-1.5">
                                                    <GraduationCap className="w-3.5 h-3.5 text-purple-300" />
                                                    <span>{app.education}</span>
                                                </div>
                                            )}
                                            {app.portfolio && (
                                                <div className="flex items-center gap-1.5">
                                                    <LinkIcon className="w-3.5 h-3.5 text-purple-300" />
                                                    <a
                                                        href={app.portfolio}
                                                        target="_blank"
                                                        className="underline text-purple-300 truncate max-w-[200px]"
                                                    >
                                                        {app.portfolio}
                                                    </a>
                                                </div>
                                            )}
                                        </div>

                                        {app.why && (
                                            <div className="p-4 rounded-xl bg-black/20 text-xs text-gray-200 leading-relaxed">
                                                <strong className="block text-[10px] uppercase text-[var(--text-muted,#A09DD4)] mb-1">
                                                    Why join WOTO:
                                                </strong>
                                                {app.why}
                                            </div>
                                        )}

                                        <div className="flex items-center justify-between pt-2">
                                            <a
                                                href={`mailto:${app.email}?subject=Your Application to WOTO Safety`}
                                                className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                                            >
                                                <Mail className="w-3.5 h-3.5" />
                                                <span>Reply by Email</span>
                                            </a>

                                            {/* Delete Application Button / Confirmation */}
                                            {confirmDeleteId === itemId ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[11px] text-rose-300 font-medium">Confirm?</span>
                                                    <button
                                                        onClick={() => handleDeleteApplication(itemId)}
                                                        disabled={deletingId === itemId}
                                                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all disabled:opacity-50"
                                                    >
                                                        {deletingId === itemId ? "Deleting..." : "Yes, Delete"}
                                                    </button>
                                                    <button
                                                        onClick={() => setConfirmDeleteId(null)}
                                                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold transition-all"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setConfirmDeleteId(itemId)}
                                                    className="px-3.5 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                    <span>Delete</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                ) : (
                    <div className="space-y-4">
                        {appData.messages.length === 0 ? (
                            <div className="p-12 text-center rounded-2xl bg-[var(--primary-card,#29264D)]/50 border border-white/10 text-[var(--text-muted,#A09DD4)]">
                                No contact messages received yet.
                            </div>
                        ) : (
                            appData.messages.map((msg, idx) => {
                                const itemId = msg._id || msg.id || idx;
                                return (
                                    <div
                                        key={itemId}
                                        className="p-6 rounded-2xl bg-[var(--primary-card,#29264D)] border border-white/10 space-y-4 shadow-xl"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-base font-bold text-white">{msg.name}</h3>
                                                <p className="text-xs text-purple-300 font-semibold">{msg.subject}</p>
                                            </div>
                                            <span className="text-[11px] text-[var(--text-muted,#A09DD4)] flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : "N/A"}
                                            </span>
                                        </div>

                                        <p className="text-xs text-[var(--text-muted,#A09DD4)] flex items-center gap-1.5">
                                            <Mail className="w-3.5 h-3.5 text-purple-300" />
                                            <span>{msg.email}</span>
                                        </p>

                                        <div className="p-4 rounded-xl bg-black/20 text-xs text-gray-200 leading-relaxed">
                                            {msg.message}
                                        </div>

                                        <div className="flex items-center justify-between pt-2">
                                            <a
                                                href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                                            >
                                                <Mail className="w-3.5 h-3.5" />
                                                <span>Reply by Email</span>
                                            </a>

                                            {/* Delete Contact Message Button / Confirmation */}
                                            {confirmDeleteId === itemId ? (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[11px] text-rose-300 font-medium">Confirm?</span>
                                                    <button
                                                        onClick={() => handleDeleteMessage(itemId)}
                                                        disabled={deletingId === itemId}
                                                        className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all disabled:opacity-50"
                                                    >
                                                        {deletingId === itemId ? "Deleting..." : "Yes, Delete"}
                                                    </button>
                                                    <button
                                                        onClick={() => setConfirmDeleteId(null)}
                                                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 text-xs font-semibold transition-all"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => setConfirmDeleteId(itemId)}
                                                    className="px-3.5 py-2 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                                                >
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                    <span>Delete</span>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}