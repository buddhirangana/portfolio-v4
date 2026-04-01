"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Instagram, Facebook, Command, Terminal, Satellite, Zap, Radio, User, Briefcase, GraduationCap, Database, Mail, Cpu } from "lucide-react";

// ── Custom TikTok Icon ────────────────────────────────────────────────────────
const TikTokIcon = ({ size = 20 }: { size?: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

// ── Custom X (Twitter) Icon ───────────────────────────────────────────────────
const XIcon = ({ size = 16 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.482 2.395H4.293l13.314 18.255z" />
    </svg>
);

const NAV_LINKS = [
    { name: "About", href: "#about", tag: "PROFILE_V2", icon: User },
    { name: "Experience", href: "#experience", tag: "HISTORY_LOG", icon: Briefcase },
    { name: "Education", href: "#education", tag: "ACAD_ARCHIVE", icon: GraduationCap },
    { name: "Projects", href: "#projects", tag: "RESEARCH_DATA", icon: Database },
    { name: "Contact", href: "#contact", tag: "UPLINK_COMM", icon: Mail },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${isScrolled ? "py-4 md:py-6" : "py-8 md:py-10"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 flex justify-center">
                <div
                    className={`relative flex items-center justify-between transition-all duration-700 ease-[0.16,1,0.3,1] ${isScrolled
                        ? "w-full max-w-[1000px] px-6 py-3 bg-dark-400/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl"
                        : "w-full bg-transparent border-transparent"
                        }`}
                >
                    {/* Brand */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-4 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <img src="/br-logo.png" alt="Buddhi Rangana's Logo" className="w-10 h-10 rounded-xl bg-theme-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(248,87,42,0.3)]" />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-tighter text-white leading-none">BR // <span className="text-white/40 italic font-light">FOUNDRY</span></span>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse" />
                                <span className="text-[7px] font-bold text-theme-primary tracking-[0.4em] uppercase">System_Stable</span>
                            </div>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-0">
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 group relative"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white transition-colors">
                                    {link.name}
                                </span>
                                <motion.div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-theme-primary group-hover:w-full transition-all duration-500 rounded-full"
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-3 border-r border-white/5 pr-4">
                            <a href="#" className="text-white/20 hover:text-theme-primary transition-colors"><Github size={16} /></a>
                            <a href="#" className="text-white/20 hover:text-theme-primary transition-colors"><Linkedin size={16} /></a>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.4em] text-white whitespace-nowrap"
                        >
                            <Terminal size={13} className="text-theme-primary shrink-0" />
                            My Resume
                        </motion.button>
                    </div>

                    {/* Progress Indicator (only after mount to avoid attribute hydration mismatch) */}
                    {mounted && (
                        <motion.div
                            style={{ scaleX }}
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-theme-primary origin-left opacity-30"
                        />
                    )}

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <div className="flex flex-col gap-1.5"><div className="w-5 h-px bg-white" /><div className="w-3 h-px bg-white self-end" /></div>}
                    </button>
                </div>
            </div>

            {/* Re-imagined Mobile Menu (Bento Style) */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[110] bg-dark-400 p-6 flex flex-col md:hidden"
                    >
                        {/* Background Decal */}
                        <div className="absolute right-[-10%] top-1/4 text-[12rem] font-bold text-white/[0.02] pointer-events-none select-none uppercase rotate-90 whitespace-nowrap">
                            SYSTEM_NAV
                        </div>

                        <div className="flex items-center justify-between mb-12 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-theme-primary flex items-center justify-center text-white shadow-[0_0_30px_rgba(248,87,42,0.3)]">
                                    <Command size={24} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white tracking-[0.2em] uppercase text-xs leading-none">Command Center</span>
                                    <span className="text-[8px] font-mono text-theme-primary mt-1">AX_PROTO_04</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-theme-primary transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 flex-1 relative z-10 overflow-y-auto pr-2 custom-scrollbar">
                            {NAV_LINKS.map((link, i) => {
                                const Icon = link.icon;
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="relative group flex items-center gap-5 p-4 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:bg-theme-primary/5 hover:border-theme-primary/20 transition-all duration-500 overflow-hidden"
                                    >
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-theme-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                                        <div className="w-14 h-14 rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center text-theme-primary/60 group-hover:bg-theme-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shrink-0">
                                            <Icon size={24} />
                                        </div>

                                        <div className="flex flex-col">
                                            <span className="text-[8px] font-bold text-theme-primary uppercase tracking-[0.4em] mb-1 opacity-60 group-hover:opacity-100 transition-opacity">
                                                [{link.tag}]
                                            </span>
                                            <span className="text-2xl font-bold text-white tracking-tighter group-hover:translate-x-1 transition-transform duration-500 lowercase first-letter:uppercase">
                                                {link.name}
                                            </span>
                                        </div>

                                        <div className="ml-auto opacity-0 group-hover:opacity-20 transition-opacity">
                                            <Satellite size={32} className="rotate-45" />
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>

                        <div className="mt-6 relative z-10">
                            <div className="flex flex-col gap-6 p-6 rounded-[2rem] border border-white/5 bg-white/[0.01]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <Zap size={14} className="text-theme-primary" />
                                        <span className="text-[9px] font-bold text-white uppercase tracking-[0.4em]">Integrated Nodes</span>
                                    </div>
                                    <span className="text-[8px] font-mono text-white/20">v2.4.0_Stable</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-7">
                                        {[
                                            { icon: Github, href: "#" },
                                            { icon: Linkedin, href: "#" },
                                            { icon: XIcon, href: "#" },
                                            { icon: Instagram, href: "#" },
                                            { icon: Facebook, href: "#" },
                                            { icon: TikTokIcon, href: "#" }
                                        ].map((social, i) => (
                                            <motion.a
                                                key={i}
                                                href={social.href}
                                                whileHover={{ scale: 1.3, y: -4 }}
                                                className="text-white/20 hover:text-theme-primary transition-all duration-300"
                                            >
                                                <social.icon size={20} />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
