"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-dark-400 flex flex-col items-center justify-center p-8"
                >
                    {/* Central Logo/Icon animation */}
                    <div className="relative mb-12">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="w-24 h-24 rounded-2xl border-2 border-theme-primary/20 flex items-center justify-center"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-theme-primary to-theme-secondary rounded-lg blur-xl opacity-50 absolute" />
                            <span className="text-2xl font-bold text-white relative z-10 font-poppins">BR</span>
                        </motion.div>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full max-w-xs relative">
                        <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="h-full bg-gradient-to-r from-theme-primary to-theme-secondary shadow-[0_0_10px_rgba(248,87,42,0.5)]"
                            />
                        </div>

                        <div className="mt-4 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-semibold">
                            <span className="text-white/30">System Initializing</span>
                            <span className="text-theme-primary">{progress}%</span>
                        </div>
                    </div>

                    {/* Background decorative elements */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-theme-primary to-transparent" />
                        <div className="absolute bottom-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-theme-secondary to-transparent" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
