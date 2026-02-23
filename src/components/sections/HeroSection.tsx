"use client";

import React, { useRef, useState, useEffect } from "react";
import {
    motion, useScroll, useTransform, useSpring,
    useMotionValue, AnimatePresence
} from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, Cpu, Activity, Globe, Wifi, Shield, Zap } from "lucide-react";

// ── Typewriter roles ────────────────────────────────────────────────────────────
const ROLES = [
    "Full-Stack Engineer",
    "UI/UX Architect",
    "Digital Entrepreneur",
    "WordPress Expert",
    "Tech Blogger",
];

// ── Radar sweep component (pure CSS via motion) ────────────────────────────────
function RadarSweep() {
    return (
        <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 origin-center"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, rgba(248,87,42,0.25) 40deg, transparent 80deg)"
                }}
            />
        </div>
    );
}

// ── Concentric animated ring ───────────────────────────────────────────────────
function Ring({ r, duration, dir = 1, dash = "1 4" }: { r: number; duration: number; dir?: number; dash?: string }) {
    return (
        <motion.circle
            cx={50} cy={50} r={r}
            fill="none"
            stroke="rgba(248,87,42,0.25)"
            strokeWidth={0.15}
            strokeDasharray={dash}
            animate={{ rotate: 360 * dir }}
            transition={{ duration, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
        />
    );
}

// ── Ping dot on orbit ──────────────────────────────────────────────────────────
function OrbitDot({ radius, angle, speed }: { radius: number; angle: number; speed: number }) {
    const rad = (angle * Math.PI) / 180;
    const cx = 50 + radius * Math.cos(rad);
    const cy = 50 + radius * Math.sin(rad);
    return (
        <motion.circle
            cx={cx} cy={cy} r={0.8}
            fill="rgba(248,87,42,0.9)"
            animate={{ rotate: 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50px 50px" }}
            filter="url(#orangeGlow)"
        />
    );
}

// ── HUD Corner bracket ─────────────────────────────────────────────────────────
function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
    const base = "absolute w-8 h-8 border-theme-primary/60";
    const map = {
        tl: "top-0 left-0 border-t-2 border-l-2",
        tr: "top-0 right-0 border-t-2 border-r-2",
        bl: "bottom-0 left-0 border-b-2 border-l-2",
        br: "bottom-0 right-0 border-b-2 border-r-2",
    };
    return <div className={`${base} ${map[pos]}`} />;
}

// ── Animated data bar ──────────────────────────────────────────────────────────
function DataBar({ label, value, delay }: { label: string; value: number; delay: number }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
                <span className="text-[7px] font-bold text-white/30 uppercase tracking-[0.3em]">{label}</span>
                <span className="text-[7px] font-mono text-theme-primary">{value}%</span>
            </div>
            <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-theme-primary to-theme-secondary rounded-full shadow-[0_0_6px_rgba(248,87,42,0.8)]"
                />
            </div>
        </div>
    );
}

// ── Main HeroSection ───────────────────────────────────────────────────────────
export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const [roleIndex, setRoleIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springCfg = { damping: 28, stiffness: 120 };
    const hudX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springCfg);
    const hudY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springCfg);
    const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), springCfg);
    const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [25, -25]), springCfg);

    const parallaxY = useTransform(scrollY, [0, 600], [0, 120]);

    useEffect(() => {
        setMounted(true);
        const onMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, [mouseX, mouseY]);

    // Typewriter role cycling
    useEffect(() => {
        const id = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2800);
        return () => clearInterval(id);
    }, []);

    return (
        <section
            ref={containerRef}
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-400"
        >
            {/* ── Layered Background ── */}
            <motion.div style={{ y: parallaxY }} className="absolute inset-0 pointer-events-none">
                {/* Hex / dot grid */}
                <div className="absolute inset-0 hero-hex-grid opacity-[0.07]" />
                {/* Radial vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,transparent_0%,#010409_100%)]" />
                {/* Atmospheric blobs */}
                <motion.div style={{ x: bgX, y: bgY }}
                    className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-theme-primary/8 blur-[250px] rounded-full" />
                <motion.div
                    style={{ x: useTransform(bgX, v => v * -1.3), y: useTransform(bgY, v => v * -1.3) }}
                    className="absolute -bottom-40 -right-20 w-[700px] h-[700px] bg-theme-secondary/8 blur-[250px] rounded-full"
                />
            </motion.div>

            {/* ── HUD Scan Lines (full-width) ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 5}%` }} />
                ))}
            </div>

            {/* ── Corner HUD Brackets (section-level) ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute inset-8 pointer-events-none"
            >
                <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />
                {/* Corner labels */}
                <span className="absolute top-2 left-10 text-[7px] font-mono text-theme-primary/40 uppercase tracking-[0.4em]">SYS::HERO_NODE</span>
                <span className="absolute top-2 right-10 text-[7px] font-mono text-theme-primary/40 uppercase tracking-[0.4em]">v2.4.0_STABLE</span>
                <span className="absolute bottom-2 left-10 text-[7px] font-mono text-theme-primary/40 uppercase tracking-[0.4em]">LOC: 6.94°N 79.86°E</span>
                <span className="absolute bottom-2 right-10 text-[7px] font-mono text-theme-primary/40 uppercase tracking-[0.4em]">ENC: AES-256</span>
            </motion.div>

            {/* ── Left HUD Panel ── */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-30"
            >
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-theme-primary/40 to-transparent mx-auto" />

                {/* System status readouts */}
                <div className="flex flex-col gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    {[
                        { icon: Activity, label: "Neural_Link", val: "ACTIVE" },
                        { icon: Cpu, label: "Core_Load", val: "12.4%" },
                        { icon: Wifi, label: "Uplink_Sig", val: "99.8 dB" },
                        { icon: Shield, label: "Threat_Level", val: "NULL" },
                    ].map(({ icon: Icon, label, val }) => (
                        <div key={label} className="flex items-center gap-3">
                            <Icon size={10} className="text-theme-primary shrink-0" />
                            <div className="flex flex-col">
                                <span className="text-[6px] font-bold text-white/20 uppercase tracking-[0.3em]">{label}</span>
                                <span className="text-[9px] font-mono text-theme-primary leading-none">{val}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-px h-24 bg-gradient-to-b from-theme-primary/40 via-theme-primary/20 to-transparent mx-auto" />

                {/* Performance bars */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md min-w-[120px]">
                    <DataBar label="PHP" value={92} delay={1.4} />
                    <DataBar label="React" value={88} delay={1.6} />
                    <DataBar label="Design" value={85} delay={1.8} />
                    <DataBar label="DevOps" value={74} delay={2.0} />
                </div>
            </motion.div>

            {/* ── Right HUD Panel ── */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 items-end z-30"
            >
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-theme-primary/40 to-transparent mx-auto" />

                {/* Live metric cards */}
                <div className="flex flex-col gap-3">
                    {[
                        { val: "50+", label: "Deployments" },
                        { val: "06+", label: "Years Active" },
                        { val: "99%", label: "Uptime SLA" },
                    ].map(({ val, label }) => (
                        <motion.div
                            key={label}
                            whileHover={{ x: -4 }}
                            className="flex flex-col items-end gap-1 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
                        >
                            <span className="text-xl font-bold text-white tracking-tight">{val}</span>
                            <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.3em]">{label}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="w-px h-24 bg-gradient-to-b from-theme-primary/40 via-theme-primary/20 to-transparent mx-auto" />

                {/* Globe location mini display */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    <Globe size={12} className="text-theme-primary" />
                    <div className="flex flex-col items-end">
                        <span className="text-[8px] font-mono text-white/40">Colombo, LK</span>
                        <div className="flex items-center gap-1 mt-0.5">
                            <div className="w-1 h-1 rounded-full bg-theme-primary animate-pulse" />
                            <span className="text-[6px] font-bold text-theme-primary uppercase tracking-widest">Online</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* ── Main Content ── */}
            <div className="section-container relative z-10 w-full px-6 pt-28 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* ── LEFT: Text Content ── */}
                    <div className="lg:col-span-7 flex flex-col items-start">

                        {/* System ID badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="flex items-center gap-4 mb-10"
                        >
                            <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-theme-primary/20 bg-theme-primary/5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-theme-primary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-theme-primary" />
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-primary">B.RANGANA // NODE_ACTIVE</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[9px] font-mono text-white/20">SYS_ID:</span>
                                <span className="text-[9px] font-mono text-white/40">0x4BR_ARCH</span>
                            </div>
                        </motion.div>

                        {/* Glitch Title */}
                        <div className="mb-6 relative">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-3xl md:text-5xl lg:text-6xl italic font-light text-theme-primary/70 tracking-tight mb-2"
                            >
                                Senior Creative
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="hero-glitch-text text-[5rem] md:text-[8rem] lg:text-[10rem] font-bold font-poppins tracking-tighter leading-[0.85] text-white relative select-none"
                                data-text="ENGINEER"
                            >
                                ENGINEER
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute -bottom-3 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent rounded-full shadow-[0_0_12px_rgba(248,87,42,0.8)]"
                                />
                            </motion.h1>
                        </div>

                        {/* Typewriter cycling subtitle */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-3 mb-10 h-8"
                        >
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">ROLE://</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-base md:text-lg font-bold text-white tracking-tight"
                                >
                                    {ROLES[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="w-0.5 h-5 bg-theme-primary rounded-full"
                            />
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-white/35 leading-relaxed font-medium max-w-lg mb-12"
                        >
                            Architecting high-fidelity digital experiences and{" "}
                            <span className="text-white/70 font-semibold">neural performance layers</span>{" "}
                            for the next generation of industrial software systems.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-14"
                        >
                            <a
                                href="#projects"
                                className="group relative px-10 py-5 bg-theme-primary rounded-[1.75rem] text-xs font-bold uppercase tracking-[0.25em] text-white overflow-hidden shadow-[0_20px_50px_rgba(248,87,42,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Initiate Recon
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-3 px-10 py-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] hover:border-theme-primary/40 hover:bg-theme-primary/5 text-xs font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all duration-400 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary/40 group-hover:bg-theme-primary transition-colors" />
                                Mission Brief
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-[7px] font-bold text-white/15 uppercase tracking-[0.5em]">Uplink</span>
                            <div className="w-8 h-px bg-white/10" />
                            {[
                                { Icon: Github, href: "#", label: "GIT" },
                                { Icon: Linkedin, href: "#", label: "LI" },
                                { Icon: Twitter, href: "#", label: "X" },
                            ].map(({ Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    whileHover={{ y: -6, scale: 1.15 }}
                                    href={href}
                                    className="w-11 h-11 rounded-xl glass-card-premium border border-white/5 hover:border-theme-primary/30 hover:bg-theme-primary/10 flex items-center justify-center text-white/25 hover:text-theme-primary transition-all duration-400"
                                >
                                    <Icon size={18} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* ── RIGHT: JARVIS HUD Orb ── */}
                    <motion.div
                        style={{ x: hudX, y: hudY }}
                        className="hidden lg:col-span-5 lg:flex items-center justify-center relative"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-[460px] h-[460px] flex items-center justify-center"
                        >
                            {/* Outer ambient glow */}
                            <div className="absolute inset-0 bg-theme-primary/10 blur-[80px] rounded-full" />

                            {/* Radar / Ring SVG */}
                            <svg
                                viewBox="0 0 100 100"
                                className="absolute inset-0 w-full h-full"
                            >
                                <defs>
                                    <filter id="orangeGlow">
                                        <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>

                                {/* Concentric rings */}
                                <Ring r={48} duration={60} dir={1} dash="1 5" />
                                <Ring r={43} duration={40} dir={-1} dash="3 3" />
                                <Ring r={37} duration={25} dir={1} dash="0.5 3" />
                                <Ring r={30} duration={18} dir={-1} dash="2 4" />
                                <Ring r={22} duration={12} dir={1} dash="1 2" />

                                {/* Cross-hair lines */}
                                <line x1="50" y1="2" x2="50" y2="98" stroke="rgba(248,87,42,0.06)" strokeWidth="0.15" />
                                <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(248,87,42,0.06)" strokeWidth="0.15" />

                                {/* Orbit dots */}
                                <OrbitDot radius={43} angle={30} speed={18} />
                                <OrbitDot radius={37} angle={120} speed={12} />
                                <OrbitDot radius={30} angle={220} speed={8} />
                                <OrbitDot radius={22} angle={310} speed={5} />
                            </svg>

                            {/* Radar sweep layer */}
                            <div className="absolute inset-[4%] rounded-full overflow-hidden">
                                <RadarSweep />
                            </div>

                            {/* Inner radar tick marks */}
                            <div className="absolute inset-0">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-full h-px origin-left"
                                        style={{ transform: `rotate(${i * 30}deg) translateY(-50%)` }}
                                    >
                                        <div className="absolute right-0 w-2 h-px bg-theme-primary/20" />
                                    </div>
                                ))}
                            </div>

                            {/* Center nucleus */}
                            <div className="relative w-48 h-48 flex items-center justify-center z-10">
                                {/* Pulse rings */}
                                {[1, 2, 3].map(i => (
                                    <motion.div
                                        key={i}
                                        className="absolute inset-0 rounded-full border border-theme-primary/20"
                                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                                    />
                                ))}

                                {/* Core circle */}
                                <div className="relative w-28 h-28 rounded-full bg-dark-400 border-2 border-theme-primary/40 flex flex-col items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(248,87,42,0.3),inset_0_0_40px_rgba(248,87,42,0.05)]">
                                    {/* Conic spin */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0"
                                        style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(248,87,42,0.08) 50%, transparent 100%)" }}
                                    />
                                    <Zap size={32} className="text-theme-primary relative z-10 filter drop-shadow-[0_0_12px_rgba(248,87,42,0.9)]" />
                                    <span className="text-[7px] font-bold text-theme-primary/60 uppercase tracking-[0.3em] relative z-10 mt-1">ONLINE</span>
                                </div>
                            </div>

                            {/* HUD corner brackets on the orb */}
                            <div className="absolute inset-8 pointer-events-none">
                                <Corner pos="tl" /><Corner pos="tr" /><Corner pos="bl" /><Corner pos="br" />
                            </div>

                            {/* Floating data tags */}
                            <motion.div
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 right-8 px-4 py-2 rounded-xl bg-dark-400/80 border border-white/5 backdrop-blur-md"
                            >
                                <span className="text-[8px] font-mono text-theme-primary">SIG: LOCKED</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [6, -6, 6] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -bottom-4 left-8 px-4 py-2 rounded-xl bg-dark-400/80 border border-white/5 backdrop-blur-md"
                            >
                                <span className="text-[8px] font-mono text-theme-primary">FREQ: 2.4GHz</span>
                            </motion.div>

                            <motion.div
                                animate={{ x: [-5, 5, -5] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/2 -right-8 -translate-y-1/2 px-4 py-2 rounded-xl bg-dark-400/80 border border-white/5 backdrop-blur-md"
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-[6px] font-bold text-white/20 uppercase tracking-widest">Node</span>
                                    <span className="text-[9px] font-mono text-theme-primary">0X-ARCH</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Identity card below orb */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-max px-10 py-5 rounded-[2rem] bg-dark-400/80 border border-white/5 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="flex items-center gap-8">
                                <div className="flex flex-col">
                                    <span className="text-[7px] font-bold text-theme-primary uppercase tracking-[0.5em] mb-1">Operator</span>
                                    <span className="text-lg font-bold text-white tracking-tighter">BUDDHI RANGANA</span>
                                </div>
                                <div className="w-px h-10 bg-white/5" />
                                <div className="flex flex-col">
                                    <span className="text-[7px] font-bold text-white/20 uppercase tracking-widest mb-1">Clearance</span>
                                    <span className="text-sm font-mono text-theme-primary">LEVEL_5_ARCH</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Bottom Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 z-20"
            >
                <span className="text-[7px] font-bold text-white/15 uppercase tracking-[0.6em]">Scroll to Navigate</span>
                <motion.div
                    animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-px h-10 bg-gradient-to-b from-theme-primary/60 to-transparent"
                />
            </motion.div>
        </section>
    );
}
