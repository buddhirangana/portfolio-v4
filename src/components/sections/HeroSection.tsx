"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Zap, Cpu, Activity, Globe } from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const coreX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
    const coreY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

    const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), springConfig);
    const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth - 0.5);
            mouseY.set(e.clientY / innerHeight - 0.5);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const rotate = useTransform(scrollY, [0, 500], [0, 15]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-40 pb-20 overflow-hidden bg-dark-400"
        >
            {/* Ultra-Modern Background Layers */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-[0.08]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--dark-400)_100%)] opacity-60" />

                {/* Parallax Atmospheric Nebulas */}
                <motion.div
                    style={{ x: bgX, y: bgY }}
                    className="absolute top-[-10%] left-[-10%] w-[70rem] h-[70rem] bg-theme-primary/10 blur-[200px] rounded-full"
                />
                <motion.div
                    style={{ x: useTransform(bgX, (v) => v * -1.2), y: useTransform(bgY, (v) => v * -1.2) }}
                    className="absolute bottom-[-20%] right-[-10%] w-[60rem] h-[60rem] bg-theme-secondary/10 blur-[200px] rounded-full"
                />
            </div>

            {/* Micro-Technical Readouts */}
            <div className="absolute inset-0 pointer-events-none z-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-1/4 left-10 hidden xl:flex flex-col gap-4"
                >
                    <div className="flex items-center gap-3">
                        <Activity size={10} className="text-theme-primary" />
                        <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.4em]">Latency: 0.04ms</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Cpu size={10} className="text-theme-primary" />
                        <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.4em]">Core: Optimized</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute bottom-1/4 right-10 hidden xl:flex flex-col items-end gap-4"
                >
                    <div className="flex items-center gap-3">
                        <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.4em]">Loc: 6.94° N, 79.86° E</span>
                        <Globe size={10} className="text-theme-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.4em]">Sync: Verified</span>
                        <div className="w-1 h-1 rounded-full bg-theme-primary animate-ping" />
                    </div>
                </motion.div>
            </div>

            <div className="section-container relative z-10 w-full px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Content (Text) */}
                    <div className="lg:col-span-8 flex flex-col items-start text-left">
                        {/* Status Chip */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 px-5 py-2.5 rounded-2xl glass-card-premium border border-white/5 mb-12 group hover:border-theme-primary/40 transition-all cursor-crosshair"
                        >
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary"></span>
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                                    B.RANGANA // NODE_ACTIVE
                                </span>
                            </div>
                            <div className="w-px h-3 bg-white/10" />
                            <span className="text-[9px] font-medium text-white/30 tracking-widest uppercase">v2.4.0_STABLE</span>
                        </motion.div>

                        {/* Title with Advanced Typography */}
                        <div className="mb-10 lg:mb-14 relative group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span className="block italic font-light text-theme-primary/80 mb-2 md:mb-4 lg:mb-6 text-4xl md:text-6xl lg:text-7xl tracking-tight">
                                    Senior Creative
                                </span>
                                <h1 className="text-7xl md:text-[8rem] lg:text-[11rem] font-bold font-poppins tracking-tighter leading-[0.8] text-white relative">
                                    ENGINEER
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ delay: 1, duration: 2 }}
                                        className="absolute -bottom-4 left-0 h-[2px] bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent"
                                    />
                                </h1>
                            </motion.div>
                        </div>

                        {/* Description & Socials */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 lg:gap-16 w-full max-w-4xl">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-base md:text-xl text-white/40 leading-relaxed font-medium max-w-xl"
                            >
                                Architecting high-fidelity digital experiences and
                                <span className="text-white/80"> neural performance layers </span>
                                for the next generation of industrial software systems.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="flex items-center gap-5 shrink-0"
                            >
                                {[Github, Linkedin, Twitter].map((Icon, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(248,87,42,0.1)" }}
                                        href="#"
                                        className="w-14 h-14 rounded-2xl glass-card-premium border border-white/5 flex items-center justify-center text-white/30 hover:text-theme-primary transition-all shadow-xl"
                                    >
                                        <Icon size={22} />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-16 flex flex-col sm:flex-row items-center gap-8"
                        >
                            <a href="#projects" className="group relative px-14 py-6 bg-theme-primary rounded-[2rem] text-sm font-bold uppercase tracking-widest text-white overflow-hidden shadow-[0_30px_60px_rgba(248,87,42,0.3)] transition-all hover:scale-105 active:scale-95">
                                <span className="relative z-10 flex items-center gap-4">
                                    Initiate Recon <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </a>
                            <a href="#contact" className="px-12 py-6 rounded-[2rem] glass-card-premium border border-white/10 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white hover:border-white/20 transition-all flex items-center gap-3 group">
                                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary/50 group-hover:bg-theme-primary transition-colors" />
                                Mission Brief
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Content (Cyber Hub Core) - Desktop Only */}
                    <motion.div
                        style={{ x: coreX, y: coreY }}
                        className="hidden lg:col-span-4 lg:flex flex-col items-center justify-center relative z-30"
                    >
                        {/* Atmospheric Hub Glows */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-theme-primary/15 blur-[160px] rounded-full" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full max-w-[520px] aspect-square flex items-center justify-center group"
                        >
                            {/* Kinetic Orbital rings */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                                <motion.circle
                                    cx="50" cy="50" r="49"
                                    fill="none"
                                    stroke="var(--theme-primary)"
                                    strokeWidth="0.08"
                                    strokeDasharray="1 6"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.circle
                                    cx="50" cy="50" r="45"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.05"
                                    className="opacity-10"
                                    strokeDasharray="4 2"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                />
                            </svg>

                            {/* Center Power Nucleus */}
                            <div className="relative w-64 h-64 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute w-full h-full bg-theme-primary/20 blur-3xl rounded-full"
                                />

                                <div className="relative w-36 h-36 rounded-full glass-card-premium border border-theme-primary/40 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-700 shadow-2xl">
                                    <Zap size={44} className="text-theme-primary animate-pulse filter drop-shadow-[0_0_15px_rgba(248,87,42,0.8)]" />
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-[conic-gradient(from_0deg,_transparent_0%,_rgba(248,87,42,0.05)_50%,_transparent_100%)]"
                                    />
                                </div>

                                {/* Orbital Energy Dots */}
                                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ rotate: angle }}
                                        animate={{ rotate: angle + 360 }}
                                        transition={{ duration: 25 + i * 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute w-full h-full flex items-center justify-end"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-theme-primary shadow-[0_0_15px_rgba(248,87,42,0.8)]" />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Holographic Identity Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1, duration: 1.2 }}
                                className="absolute -right-16 bottom-0 p-10 rounded-[4rem] bg-dark-400/80 backdrop-blur-3xl border border-white/5 shadow-2xl z-20 hidden xl:block"
                            >
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-theme-primary" />
                                        <span className="text-[10px] font-bold text-theme-primary uppercase tracking-[0.4em]">Node // 0X-ARCH</span>
                                    </div>
                                    <h4 className="text-4xl font-bold text-white tracking-tighter">B. RANGANA</h4>
                                    <div className="grid grid-cols-2 gap-8 mt-6 pt-6 border-t border-white/5">
                                        <div className="flex flex-col">
                                            <span className="text-xl font-bold text-white">06+ YRS</span>
                                            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">Exp Cycle</span>
                                        </div>
                                        <div className="flex flex-col text-right">
                                            <span className="text-xl font-bold text-theme-primary">50+</span>
                                            <span className="text-[8px] font-bold text-white/30 uppercase tracking-widest mt-1">Deployments</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indication Readout */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-10 flex items-center gap-4 hidden xl:flex"
            >
                <div className="flex flex-col gap-1">
                    <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.5em]">Scroll to Nave</span>
                    <motion.div
                        animate={{ height: [24, 48, 24], opacity: [0.1, 0.3, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-px bg-theme-primary self-start"
                    />
                </div>
            </motion.div>
        </section >
    );
}
