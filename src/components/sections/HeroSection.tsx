"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook, ArrowRight, Figma } from "lucide-react";

// ── Custom TikTok Icon ────────────────────────────────────────────────────────
const TikTokIcon = ({ size = 16 }: { size?: number }) => (
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

// ── Typewriter roles ────────────────────────────────────────────────────────────
const ROLES = [
    "Entrepreneur",
    "Aspiring Full-Stack Developer",
    "Founder of DigiFox Technologies",
    "Founder of TEC ROOM",
    "Web Developer",
    "Freelancer",
    "WordPress Expert",
    "UI/UX Designer",
    "Graphic Designer",
    "Tech Blogger",
    "Tech Enthusiastic",
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
// cx/cy are pre-computed as static literals to avoid Math.sin/cos floating-point
// precision divergence between Node.js and browser V8 (would cause attribute hydration mismatch).
// Formula: cx = 50 + radius * cos(angle°), cy = 50 + radius * sin(angle°)
const ORBIT_DOTS: { cx: number; cy: number; speed: number }[] = [
    { cx: 87.239, cy: 71.5, speed: 18 }, // radius=43, angle=30°
    { cx: 31.5, cy: 82.043, speed: 12 }, // radius=37, angle=120°
    { cx: 27.019, cy: 30.716, speed: 8 }, // radius=30, angle=220°
    { cx: 64.141, cy: 33.147, speed: 5 }, // radius=22, angle=310°
];

function OrbitDot({ cx, cy, speed }: { cx: number; cy: number; speed: number }) {
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

            {/* ── Main Content ── */}
            <div className="section-container relative z-10 w-full px-6 pt-32 pb-12 lg:pt-40 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* ── LEFT: Text Content ── */}
                    <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">

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
                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-theme-primary">Available for Work</span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/[0.02]">
                                <span className="text-[9px] font-mono uppercase text-white/20">From Sri Lanka</span>
                                <span className="text-[9px] font-mono uppercase text-white/40">to the World</span>
                            </div>
                        </motion.div>

                        {/* Glitch Title */}
                        <div className="mb-6 relative">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl italic font-light text-theme-primary/70 tracking-tight mb-2"
                            >
                                Hello, I'm
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="hero-glitch-text text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold font-poppins tracking-tighter leading-[0.85] text-white relative select-none pb-4 lg:pb-8 md:pb-7"
                                data-text="Buddhi Rangana"
                            >
                                Buddhi Rangana
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 1.2, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute -bottom-3 left-0 h-[3px] w-full md:w-60 origin-left bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent rounded-full shadow-[0_0_12px_rgba(248,87,42,0.8)]"

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
                            <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em]">ROLES://</span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 16, opacity: 0, filter: "blur(6px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: -16, opacity: 0, filter: "blur(6px)" }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-base md:text-lg font-bold text-white tracking-tight text-center lg:text-left"
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
                            className="text-base md:text-lg text-white/35 leading-relaxed font-medium max-w-lg mb-12 mx-auto lg:mx-0"
                        >
                            Architecting high-performance digital systems powered by {" "}<span className="text-white/70 font-semibold">AI, cloud and scalable technologies.</span>{" "}
                            I build intelligent solutions that don't just function — they evolve, adapt and lead.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start sm:items-center gap-5 mb-14 w-full sm:w-auto"
                        >
                            <a
                                href="#projects"
                                className="group relative px-10 py-5 bg-theme-primary rounded-[1.75rem] text-xs font-bold uppercase tracking-[0.25em] text-white overflow-hidden shadow-[0_20px_50px_rgba(248,87,42,0.35)] hover:scale-105 active:scale-95 transition-transform duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    View Projects
                                    <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-3 px-10 py-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] hover:border-theme-primary/40 hover:bg-theme-primary/5 text-xs font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-all duration-400 group"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-theme-primary/40 group-hover:bg-theme-primary transition-colors" />
                                Hire Me
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-col lg:flex-row items-center gap-6"
                        >
                            <div className="flex items-center gap-4 h-9">
                                <span className="text-[7px] font-bold text-white/15 uppercase tracking-[0.5em]">Connect</span>
                                <div className="hidden sm:block w-8 h-px bg-white/10" />
                            </div>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                                {[
                                    { Icon: Github, href: "https://github.com/buddhirangana", label: "GIT" },
                                    { Icon: Linkedin, href: "https://www.linkedin.com/in/buddhirangana", label: "LINKED" },
                                    { Icon: Figma, href: "https://www.figma.com/@buddhirangana", label: "FIGMA" },
                                    { Icon: XIcon, href: "https://x.com/buddhirangana", label: "X" },
                                    { Icon: Instagram, href: "https://www.instagram.com/buddhirangana", label: "IG" },
                                    { Icon: Facebook, href: "https://www.facebook.com/buddhi.rangana.official", label: "FB" },
                                    { Icon: TikTokIcon, href: "https://www.tiktok.com/@buddhirangana", label: "TT" },
                                ].map(({ Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        whileHover={{ y: -6, scale: 1.15 }}
                                        href={href}
                                        className="w-9 h-9 rounded-xl glass-card-premium border border-white/5 hover:border-theme-primary/30 hover:bg-theme-primary/10 flex items-center justify-center text-white/25 hover:text-theme-primary transition-all duration-400"
                                    >
                                        <Icon size={16} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* ── RIGHT: JARVIS HUD Orb ── */}
                    <motion.div
                        style={{ x: hudX, y: hudY }}
                        className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2 w-full mt-4 lg:mt-0 mb-12 lg:mb-0"
                    >
                        <div className="relative flex items-center justify-center w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[460px] lg:h-[460px]">
                            {/* Dedicated static scaling wrapper to protect against framer-motion override */}
                            <div className="absolute scale-[0.65] sm:scale-[0.8] lg:scale-100 origin-center flex items-center justify-center w-[460px] h-[460px]">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.7 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative w-full h-full flex items-center justify-center"
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

                                        {/* Orbit dots — positions precomputed to avoid SSR/client Math.sin/cos float divergence */}
                                        {ORBIT_DOTS.map((dot, i) => (
                                            <OrbitDot key={i} {...dot} />
                                        ))}
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
                                    <div className="relative w-[240px] h-[240px] flex items-center justify-center z-10">
                                        {/* Pulse rings */}
                                        {[1, 2, 3].map(i => (
                                            <motion.div
                                                key={i}
                                                className="absolute inset-0 rounded-full border border-theme-primary/20"
                                                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
                                            />
                                        ))}

                                        {/* Holographic Avatar Core */}
                                        <div className="relative w-[200px] h-[200px] rounded-full bg-theme-primary/5 border border-theme-primary/30 flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(248,87,42,0.2),inset_0_0_30px_rgba(248,87,42,0.1)] group">

                                            {/* Base tint (fades out on hover) */}
                                            <div className="absolute inset-0 bg-theme-primary/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />

                                            {/* Hologram scanline fx */}
                                            <motion.div
                                                animate={{ y: ["-100%", "200%"] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 w-full h-12 bg-gradient-to-b from-transparent via-theme-primary/30 to-transparent z-20 pointer-events-none"
                                            />

                                            {/* Avatar Image (colored on hover) */}
                                            <img
                                                src="/images/about/buddhi-rangana-img.webp"
                                                alt="Buddhi Rangana Profile" loading="lazy"
                                                className="w-[200px] h-auto object-cover filter contrast-125 brightness-100 contrast-10 group-hover:contrast-20 group-hover:brightness-100 drop-shadow-[0_0_10px_rgba(248,87,42,0.5)] relative z-0 transition-all duration-700 group-hover:scale-110"
                                            />

                                            {/* Conic spin for extra tech radar feel over the avatar */}
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-0 z-30 opacity-60 pointer-events-none mix-blend-screen"
                                                style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(248,87,42,0.2) 20%, transparent 60%)" }}
                                            />

                                            {/* Glass rim reflection */}
                                            <div className="absolute inset-0 rounded-full border border-white/10 z-30 pointer-events-none" />
                                        </div>
                                    </div>



                                    {/* Floating Skill Tags Array */}
                                    {[
                                        { label: "JavaScript", top: "2%", left: "50%", offsetX: "-50%" },
                                        { label: "React", top: "18%", right: "8%" },
                                        { label: "Next.js", top: "52%", right: "-4%" },
                                        { label: "Cloud ☁", bottom: "16%", right: "5%" },
                                        { label: "PHP", bottom: "16%", left: "5%" },
                                        { label: "WordPress", top: "52%", left: "-4%" },
                                        { label: "Tailwind CSS", top: "18%", left: "8%" }
                                    ].map((skill, i) => (
                                        <motion.div
                                            key={skill.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1, y: [-4, 4, -4], x: skill.offsetX || 0 }}
                                            transition={{
                                                opacity: { delay: i * 0.1, duration: 0.8 },
                                                scale: { delay: i * 0.1, duration: 0.8 },
                                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                                                x: { duration: 0 }
                                            }}
                                            style={{ top: skill.top, left: skill.left, right: skill.right, bottom: skill.bottom }}
                                            className="absolute px-5 py-2.5 rounded-[1.25rem] bg-dark-400/90 border border-white/5 backdrop-blur-md shadow-[0_0_20px_rgba(248,87,42,0.15)] flex items-center justify-center cursor-default z-30"
                                        >
                                            <span className="text-[12px] font-bold text-white/90 hover:text-theme-primary transition-colors whitespace-nowrap">{skill.label}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Lower Stats Widget (Years | Projects | Countries) */}
                        <div className="absolute -bottom-16 sm:-bottom-20 lg:-bottom-12 w-full flex justify-center z-40 px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4, duration: 0.8 }}
                                className="w-full sm:w-max max-w-[420px] sm:max-w-none px-4 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 rounded-3xl lg:rounded-[2rem] bg-dark-400/90 border border-white/5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center"
                            >
                                <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-10 w-full">
                                    <div className="flex flex-col items-center flex-1">
                                        <span className="text-xl lg:text-3xl font-bold text-theme-primary mb-1">5<span className="text-sm lg:text-xl">+</span></span>
                                        <span className="text-[7px] lg:text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap">Experience</span>
                                    </div>
                                    <div className="w-px h-8 lg:h-12 bg-white/10 shrink-0" />
                                    <div className="flex flex-col items-center flex-1">
                                        <span className="text-xl lg:text-3xl font-bold text-theme-primary mb-1">30<span className="text-sm lg:text-xl">+</span></span>
                                        <span className="text-[7px] lg:text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap">Projects</span>
                                    </div>
                                    <div className="w-px h-8 lg:h-12 bg-white/10 shrink-0" />
                                    <div className="flex flex-col items-center flex-1">
                                        <span className="text-xl lg:text-3xl font-bold text-theme-primary mb-1">50<span className="text-sm lg:text-xl">+</span></span>
                                        <span className="text-[7px] lg:text-[8px] font-bold text-white/40 uppercase tracking-[0.2em] whitespace-nowrap">Happy Clients</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
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
