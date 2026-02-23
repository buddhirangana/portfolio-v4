"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Twitter, Command, Terminal, Satellite, Zap, Radio } from "lucide-react";

const NAV_LINKS = [
    { name: "About", href: "#about", tag: "PROFILE_V2" },
    { name: "Experience", href: "#experience", tag: "HISTORY_LOG" },
    { name: "Projects", href: "#projects", tag: "RESEARCH_DATA" },
    { name: "Contact", href: "#contact", tag: "UPLINK_COMM" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
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
                    className={`relative flex items-center justify-between transition-all duration-700 ease-[0.16, 1, 0.3, 1] overflow-hidden ${isScrolled
                        ? "w-full max-w-[1000px] px-8 py-3 bg-dark-400/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-2xl"
                        : "w-full bg-transparent border-transparent"
                        }`}
                >
                    {/* Brand */}
                    <motion.a
                        href="#"
                        className="flex items-center gap-4 group"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-theme-primary flex items-center justify-center text-white shadow-[0_0_20px_rgba(248,87,42,0.3)]">
                            <Command size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold tracking-tighter text-white leading-none">BR // <span className="text-white/40 italic font-light">FOUNDRY</span></span>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse" />
                                <span className="text-[7px] font-bold text-theme-primary tracking-[0.4em] uppercase">System_Stable</span>
                            </div>
                        </div>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="px-5 py-2 group relative"
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
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-4 border-r border-white/5 pr-8">
                            <a href="#" className="text-white/20 hover:text-theme-primary transition-colors"><Github size={18} /></a>
                            <a href="#" className="text-white/20 hover:text-theme-primary transition-colors"><Linkedin size={18} /></a>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white"
                        >
                            <Terminal size={14} className="text-theme-primary" />
                            Deploy CMD
                        </motion.button>
                    </div>

                    {/* Progress Indicator (Fixed in Navbar) */}
                    <motion.div
                        style={{ scaleX }}
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-theme-primary origin-left opacity-30"
                    />

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
                        <div className="flex justify-between items-center mb-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-theme-primary flex items-center justify-center text-white">
                                    <Command size={20} />
                                </div>
                                <span className="font-bold text-white tracking-widest uppercase text-xs">Menu Center</span>
                            </div>
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] flex flex-col justify-end gap-2 group ${i === 0 ? "col-span-2 aspect-[2/1]" : "aspect-square"
                                        }`}
                                >
                                    <span className="text-[8px] font-bold text-theme-primary uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">[{link.tag}]</span>
                                    <span className="text-2xl font-bold text-white tracking-tighter">{link.name}</span>
                                </motion.a>
                            ))}

                            <div className="col-span-2 p-8 rounded-[2rem] border border-white/5 bg-theme-primary/10 flex flex-col justify-between items-start mt-4">
                                <div className="flex items-center gap-3">
                                    <Satellite size={16} className="text-theme-primary" />
                                    <span className="text-[9px] font-bold text-white uppercase tracking-[0.4em]">External Links</span>
                                </div>
                                <div className="flex gap-6 mt-8">
                                    <Github size={24} className="text-white/40" />
                                    <Linkedin size={24} className="text-white/40" />
                                    <Twitter size={24} className="text-white/40" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 py-3 px-6 flex justify-between items-center border border-white/10 rounded-2xl text-white/20">
                            <div className="flex items-center gap-2">
                                <Radio size={12} className="text-theme-primary animate-pulse" />
                                <span className="text-[7px] font-bold uppercase tracking-[0.4em]">Signal: Secure</span>
                            </div>
                            <span className="text-[7px] font-mono uppercase">Node_v2.4_ACT</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
