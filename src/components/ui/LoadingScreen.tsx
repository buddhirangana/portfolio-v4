"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [mounted, setMounted] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setMounted(true);
        let current = 0;
        const tick = () => {
            const remaining = 100 - current;
            const step = remaining < 20 ? 0.8 : remaining < 50 ? 1.5 : 3.5;
            current = Math.min(100, current + step);
            setProgress(Math.floor(current));
            if (current >= 100) {
                setTimeout(() => setLoading(false), 800);
            } else {
                setTimeout(tick, 30);
            }
        };
        const id = setTimeout(tick, 200);
        return () => clearTimeout(id);
    }, []);

    if (!mounted) return null;

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className="fixed inset-0 z-[1000] bg-dark-400 flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background noise/grain */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay" />

                    {/* Logo/Mark container */}
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        {/* Drawing logo */}
                        <motion.div
                            className="relative z-10 font-poppins text-5xl font-extrabold text-theme-primary tracking-tighter select-none"
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            animate={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <img src="/loading-logo.png" alt="Loading Logo" className="w-12 h-full flex items-center justify-center shadow-[0_0_20px_rgba(248,87,42,0.3)]" />

                        </motion.div>

                        {/* Minimal orbiting dot */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-theme-primary rounded-full shadow-[0_0_15px_rgba(248,87,42,0.8)]" />
                        </motion.div>
                    </div>


                    {/* Minimal Progress Info */}
                    <div className="mt-12 flex flex-col items-center gap-4 w-64">
                        {/* Thin progress line */}
                        <div className="w-full h-px bg-white/5 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-theme-primary shadow-[0_0_10px_rgba(248,87,42,0.5)]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        {/* Tech readout */}
                        <div className="flex justify-between w-full">
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.5em]">Initialising</span>
                            <span className="text-[9px] font-mono text-theme-primary/80">{progress.toString().padStart(3, "0")}%</span>
                        </div>
                    </div>

                    {/* Subtle bottom message */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="absolute bottom-12 flex flex-col items-center gap-2"
                    >
                        <span className="text-[8px] font-bold text-white/10 uppercase tracking-[0.8em]">Buddhi Rangana // Foundry</span>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
