"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Bell, ArrowRight, Sparkles, Zap, Radio, Terminal, Fingerprint, Activity, ShieldCheck, Database, Cpu } from "lucide-react";

const UPDATES = [
    {
        tag: "NODE_DEPLOY",
        title: "Architecture Portfolio v2.4 Live",
        desc: "Major structural update featuring the Foundry Design System, improved performance metrics, and neural animation layers.",
        date: "2026.02.19",
        hash: "0x8F2A...91A",
        status: "STABLE",
        icon: Sparkles
    },
    {
        tag: "PROJECT_SYNC",
        title: "New Case Study: AI Digital Agent",
        desc: "Deep dive into the neural architecture behind our latest automation tool, optimized for low-latency decision making.",
        date: "2026.02.15",
        hash: "0x2D1B...44C",
        status: "ACTIVE",
        icon: Zap
    },
    {
        tag: "NETWORK_ALERT",
        title: "Ranked Top 10 Developer in Sri Lanka",
        desc: "Recognized for contributions to the local open-source ecosystem and innovative systems architecture.",
        date: "2026.01.30",
        hash: "0x99B3...K88",
        status: "VERIFIED",
        icon: Bell
    }
];

export default function NewsSection() {
    const sectionRef = useRef(null);

    return (
        <section id="news" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

            <div className="absolute right-[-2%] top-0 text-[15rem] font-bold text-white/[0.01] pointer-events-none select-none uppercase rotate-90 whitespace-nowrap">
                FEED_INTEL
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Radio size={14} className="text-theme-primary animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Intelligence Stream</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
                            System <span className="text-white/20 italic font-light">Updates</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 text-right"
                    >
                        <div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Stream: Real-time</div>
                            <div className="text-xs font-mono text-theme-primary">SOURCE_ACTIVE</div>
                        </div>
                        <Database size={32} className="text-theme-primary/20" />
                    </motion.div>
                </div>

                <div className="space-y-6">
                    {UPDATES.map((update, i) => (
                        <UpdateCard key={update.title} update={update} index={i} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#"
                        className="group flex flex-col items-center gap-4"
                    >
                        <span className="text-[8px] font-bold text-white/20 group-hover:text-theme-primary transition-colors uppercase tracking-[0.5em]">View Full Archive</span>
                        <div className="w-16 h-16 rounded-[2rem] bg-white/5 border border-white/5 flex items-center justify-center text-white/30 group-hover:bg-theme-primary group-hover:text-white transition-all duration-500 shadow-2xl">
                            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

function UpdateCard({ update, index }: { update: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative"
        >
            <div className="glass-card-premium rounded-[3rem] p-8 md:p-12 border border-white/5 group-hover:border-theme-primary/30 transition-all duration-700 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
                {/* Horizontal Scan Beam */}
                <motion.div
                    animate={{ x: [-1000, 1000] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-theme-primary/30 to-transparent opacity-0 group-hover:opacity-100"
                />

                {/* Left Industrial Status Bar */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1/3 bg-theme-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-center" />

                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center text-theme-primary group-hover:bg-theme-primary group-hover:text-white transition-all duration-500 shadow-2xl shrink-0 group-hover:rotate-12">
                    <update.icon size={32} />
                </div>

                <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6">
                        <span className="text-[10px] font-bold text-theme-primary uppercase tracking-[0.4em] font-mono">[{update.tag}]</span>
                        <div className="hidden sm:flex items-center gap-2">
                            <Fingerprint size={12} className="text-white/20" />
                            <span className="text-[10px] font-mono text-white/20">{update.hash}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                            <ShieldCheck size={10} className="text-theme-primary" />
                            <span className="text-[8px] font-bold text-white/40 uppercase tracking-widest">{update.status}</span>
                        </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tighter group-hover:text-theme-primary transition-colors leading-none">
                        {update.title}
                    </h3>

                    <p className="text-base text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors max-w-3xl">
                        {update.desc}
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-6 shrink-0 pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-10">
                    <div className="text-right">
                        <div className="text-[8px] font-bold text-white/20 uppercase tracking-[0.3em] mb-1">Transmission Date</div>
                        <div className="text-lg font-bold text-white tracking-widest">{update.date}</div>
                    </div>

                    <motion.div
                        whileHover={{ scale: 1.1, x: 5 }}
                        className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-theme-primary group-hover:bg-theme-primary/10 transition-all cursor-pointer border border-white/5"
                    >
                        <ArrowRight size={22} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
