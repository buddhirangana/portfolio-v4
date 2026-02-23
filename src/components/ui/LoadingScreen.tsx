"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Boot log lines ────────────────────────────────────────────────────────────
const BOOT_LINES = [
    { ms: 0, text: "BIOS v2.4.0 — BR_FOUNDRY initialising..." },
    { ms: 320, text: "Loading kernel modules...                [  OK  ]" },
    { ms: 600, text: "Neural link handshake...                [  OK  ]" },
    { ms: 900, text: "Mounting secure filesystem...           [  OK  ]" },
    { ms: 1150, text: "Uplink signal: 99.8 dB                  [LOCKED]" },
    { ms: 1400, text: "Authenticating operator identity...     [  OK  ]" },
    { ms: 1650, text: "Scanning threat matrix...                [ NULL ]" },
    { ms: 1850, text: "Rendering HUD overlay...                [  OK  ]" },
    { ms: 2050, text: "All systems nominal. Welcome, ENGINEER." },
];

// ─── Ring SVG ─────────────────────────────────────────────────────────────────
function LoaderOrb() {
    return (
        <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Glow */}
            <div className="absolute inset-0 bg-theme-primary/15 blur-[50px] rounded-full" />

            {/* Outer spinning ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48"
                        fill="none" stroke="rgba(248,87,42,0.2)" strokeWidth="0.5"
                        strokeDasharray="3 5" />
                </svg>
            </motion.div>

            {/* Mid spinning ring (reverse) */}
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="48"
                        fill="none" stroke="rgba(248,87,42,0.3)" strokeWidth="0.8"
                        strokeDasharray="8 6" />
                </svg>
            </motion.div>

            {/* Radar sweep */}
            <div className="absolute inset-8 rounded-full overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 origin-center"
                    style={{
                        background: "conic-gradient(from 0deg, transparent 0deg, rgba(248,87,42,0.35) 40deg, transparent 80deg)"
                    }}
                />
            </div>

            {/* Pulse halos */}
            {[1, 2].map(i => (
                <motion.div
                    key={i}
                    className="absolute inset-6 rounded-full border border-theme-primary/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                />
            ))}

            {/* Centre core */}
            <div className="relative z-10 w-14 h-14 rounded-full bg-dark-400 border border-theme-primary/40 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(248,87,42,0.3),inset_0_0_20px_rgba(248,87,42,0.05)]">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: "conic-gradient(from 0deg, transparent 0%, rgba(248,87,42,0.12) 50%, transparent 100%)" }}
                />
                <span className="text-sm font-bold text-theme-primary font-poppins relative z-10">BR</span>
            </div>
        </div>
    );
}

// ─── Segmented progress bar ────────────────────────────────────────────────────
function SegmentBar({ progress }: { progress: number }) {
    const SEGMENTS = 20;
    const filled = Math.floor((progress / 100) * SEGMENTS);

    return (
        <div className="flex gap-[3px] w-full max-w-xs">
            {Array.from({ length: SEGMENTS }).map((_, i) => (
                <motion.div
                    key={i}
                    className="flex-1 h-[6px] rounded-[1px]"
                    animate={{
                        backgroundColor: i < filled
                            ? i === filled - 1
                                ? "#f8572a"
                                : "#f8572a99"
                            : "rgba(255,255,255,0.04)",
                        boxShadow: i < filled && i === filled - 1
                            ? "0 0 8px rgba(248,87,42,0.9)"
                            : "none"
                    }}
                    transition={{ duration: 0.15 }}
                />
            ))}
        </div>
    );
}

// ─── Boot log ─────────────────────────────────────────────────────────────────
function BootLog({ progress }: { progress: number }) {
    const [visibleLines, setVisibleLines] = useState<string[]>([]);
    const logRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Show lines based on progress
        const elapsed = (progress / 100) * 2400; // 2.4s total
        const visible = BOOT_LINES.filter(l => l.ms <= elapsed).map(l => l.text);
        setVisibleLines(visible);
    }, [progress]);

    useEffect(() => {
        if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
    }, [visibleLines]);

    return (
        <div
            ref={logRef}
            className="w-full max-w-sm h-28 overflow-hidden flex flex-col justify-end gap-0.5"
        >
            <AnimatePresence>
                {visibleLines.map((line, i) => (
                    <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`text-[9px] font-mono leading-relaxed whitespace-pre
                            ${i === visibleLines.length - 1 ? "text-theme-primary" : "text-white/25"}`}
                    >
                        {line}
                    </motion.p>
                ))}
            </AnimatePresence>
        </div>
    );
}

// ─── Main LoadingScreen ────────────────────────────────────────────────────────
export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);
    const [phase, setPhase] = useState<"boot" | "done">("boot");

    useEffect(() => {
        // Accelerating progress: fast then slows near end
        let current = 0;
        const tick = () => {
            const remaining = 100 - current;
            const step = remaining < 15 ? 0.4 : remaining < 40 ? 1.2 : 2.2;
            current = Math.min(100, current + step);
            setProgress(Math.floor(current));
            if (current >= 100) {
                setPhase("done");
                setTimeout(() => setLoading(false), 700);
            } else {
                requestTimeout(tick, 28);
            }
        };
        const requestTimeout = (fn: () => void, delay: number) => setTimeout(fn, delay);
        const id = requestTimeout(tick, 80);
        return () => clearTimeout(id);
    }, []);

    // HUD corner bracket
    const Bracket = ({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) => {
        const map = {
            tl: "top-0 left-0 border-t border-l",
            tr: "top-0 right-0 border-t border-r",
            bl: "bottom-0 left-0 border-b border-l",
            br: "bottom-0 right-0 border-b border-r",
        };
        return <div className={`absolute w-8 h-8 border-theme-primary/40 ${map[pos]}`} />;
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.04,
                        filter: "blur(8px)",
                        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[200] bg-dark-400 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* ── Hex grid background ── */}
                    <div className="absolute inset-0 hero-hex-grid opacity-[0.06] pointer-events-none" />

                    {/* ── Scan line sweep ── */}
                    <motion.div
                        animate={{ y: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-x-0 h-24 pointer-events-none"
                        style={{
                            background: "linear-gradient(to bottom, transparent, rgba(248,87,42,0.025), transparent)"
                        }}
                    />

                    {/* ── CRT horizontal lines ── */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
                        {Array.from({ length: 30 }).map((_, i) => (
                            <div key={i} className="absolute w-full h-px bg-white" style={{ top: `${(i + 1) * 3.3}%` }} />
                        ))}
                    </div>

                    {/* ── Section corners ── */}
                    <div className="absolute inset-8 pointer-events-none">
                        <Bracket pos="tl" /><Bracket pos="tr" />
                        <Bracket pos="bl" /><Bracket pos="br" />
                        <span className="absolute top-2 left-10 text-[7px] font-mono text-theme-primary/30 uppercase tracking-[0.4em]">SYS_BOOT v2.4.0</span>
                        <span className="absolute top-2 right-10 text-[7px] font-mono text-theme-primary/30 uppercase tracking-[0.4em]">B.RANGANA // PORTFOLIO</span>
                        <span className="absolute bottom-2 left-10 text-[7px] font-mono text-theme-primary/30 uppercase tracking-[0.4em]">LOC: 6.94°N 79.86°E</span>
                        <span className="absolute bottom-2 right-10 text-[7px] font-mono text-theme-primary/30 uppercase tracking-[0.4em]">ENC: AES-256</span>
                    </div>

                    {/* ── Side vertical lines ── */}
                    <div className="absolute left-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-theme-primary/20 to-transparent hidden md:block" />
                    <div className="absolute right-24 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-theme-primary/20 to-transparent hidden md:block" />

                    {/* ── System readouts (left) ── */}
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
                        {[
                            { label: "MEM", val: "512 MB" },
                            { label: "CPU", val: "12.4%" },
                            { label: "UPLINK", val: "99.8%" },
                            { label: "TEMP", val: "38°C" },
                        ].map(({ label, val }) => (
                            <div key={label} className="flex flex-col">
                                <span className="text-[6px] font-bold text-white/15 uppercase tracking-[0.4em]">{label}</span>
                                <span className="text-[10px] font-mono text-theme-primary/60">{val}</span>
                            </div>
                        ))}
                    </div>

                    {/* ── System readouts (right) ── */}
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 items-end">
                        {[
                            { label: "NODE", val: "0X-ARCH" },
                            { label: "THREAT", val: "NULL" },
                            { label: "FIREWALL", val: "ACTIVE" },
                            { label: "SESSION", val: "NEW" },
                        ].map(({ label, val }) => (
                            <div key={label} className="flex flex-col items-end">
                                <span className="text-[6px] font-bold text-white/15 uppercase tracking-[0.4em]">{label}</span>
                                <span className="text-[10px] font-mono text-theme-primary/60">{val}</span>
                            </div>
                        ))}
                    </div>

                    {/* ── MAIN CONTENT ── */}
                    <div className="flex flex-col items-center gap-10 relative z-10">
                        {/* Radar orb */}
                        <LoaderOrb />

                        {/* Title */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center"
                        >
                            <p className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.6em] mb-1">BR_FOUNDRY</p>
                            <div className="flex items-center gap-2 justify-center">
                                <div className="w-8 h-px bg-white/10" />
                                <p className="text-[8px] font-mono text-white/20 uppercase tracking-[0.4em]">SYSTEM BOOT SEQUENCE</p>
                                <div className="w-8 h-px bg-white/10" />
                            </div>
                        </motion.div>

                        {/* Segmented bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col items-center gap-3 w-full"
                        >
                            <SegmentBar progress={progress} />

                            <div className="flex justify-between w-full max-w-xs">
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">LOADING</span>
                                <motion.span
                                    key={progress}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-[8px] font-mono text-theme-primary"
                                >
                                    {progress.toString().padStart(3, "0")}%
                                </motion.span>
                            </div>
                        </motion.div>

                        {/* Boot log */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="w-full max-w-sm px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                        >
                            <BootLog progress={progress} />
                        </motion.div>

                        {/* "Done" flash */}
                        <AnimatePresence>
                            {phase === "done" && (
                                <motion.p
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.6em]"
                                >
                                    ✦ All Systems Nominal ✦
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
