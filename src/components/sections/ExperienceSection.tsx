"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { Terminal, Cpu, Database, Network, Box, Share2, Activity, ShieldCheck, Zap } from "lucide-react";

const EXPERIENCE = [
    {
        company: "NIIBS",
        role: "Systems Architect",
        period: "2024 - PRESENT",
        desc: "Engineering high-availability digital infrastructure and core system management for institutional scale. Implemented zero-latency protocols and hyper-redundant node architectures.",
        metrics: ["UPTIME: 99.99%", "LATENCY: 0.04ms", "SYNC: VERIFIED"],
        tag: "CORE_ACCESS_V4",
        icon: Network,
        color: "var(--theme-primary)"
    },
    {
        company: "DigiFox Systems",
        role: "Founder & Lead",
        period: "2023 - PRESENT",
        desc: "Architecting premium digital meshes and strategic growth protocols for global scale enterprises. Leading the development of custom hardware-aware software solutions.",
        metrics: ["NODES: 120+", "THROUGHPUT: MAX", "LOAD: OPTIMIZED"],
        tag: "EXT_OPS_PROT",
        icon: Database,
        color: "var(--theme-secondary)"
    },
    {
        company: "TEC ROOM",
        role: "Founder / Editor",
        period: "2022 - PRESENT",
        desc: "Orchestrating the premier technical publication in Sri Lanka, delivering industrial-grade insights into emerging hardware and software paradigms.",
        metrics: ["REACH: GLOBAL", "FREQ: REALTIME", "ENGAGEMENT: HIGH"],
        tag: "DATA_MESH_SIG",
        icon: Share2,
        color: "var(--theme-accent)"
    },
    {
        company: "Innovation Lab",
        role: "Consultant",
        period: "2021 - 2022",
        desc: "Pioneered neural network integration benchmarks for automated customer support architectures. Optimized decision-tree logic for high-frequency data streams.",
        metrics: ["SYNC: VERIFIED", "BUILD: v2.4.9", "CORE: DUAL_RIG"],
        tag: "RESEARCH_NODE_X",
        icon: Cpu,
        color: "var(--theme-primary)"
    }
];

export default function ExperienceSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background Data Decals */}
            <div className="absolute right-[-5%] top-1/4 text-[15rem] font-bold text-white/[0.01] pointer-events-none select-none uppercase rotate-90 whitespace-nowrap">
                FOUNDRY_LOGS_CORE_v2.4
            </div>

            <div className="absolute left-[-10%] bottom-1/4 text-[10rem] font-bold text-white/[0.01] pointer-events-none select-none uppercase -rotate-90 whitespace-nowrap">
                HARDWARE_RIG_ACCESS
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Terminal size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Chronicle logs</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            System <span className="text-white/20 italic font-light">Evolution</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Industrial Data Bus Line */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[1px] bg-white/10">
                        <motion.div
                            style={{ scaleY }}
                            className="absolute top-0 left-0 right-0 origin-top bg-gradient-to-b from-theme-primary via-theme-secondary to-transparent h-full"
                        />
                    </div>

                    <div className="space-y-32">
                        {EXPERIENCE.map((exp, i) => (
                            <motion.div
                                key={`${exp.company}-${i}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Roadmap Node */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-dark-400 border-2 border-theme-primary z-20 shadow-[0_0_20px_rgba(248,87,42,0.6)]">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-theme-primary opacity-20" />
                                </div>

                                {/* Card Area */}
                                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                    <motion.div
                                        whileHover={{ y: -8 }}
                                        className="glass-card-premium rounded-[3rem] p-12 border border-white/5 hover:border-theme-primary/30 transition-all duration-700 relative group overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                            <exp.icon size={120} />
                                        </div>

                                        <div className="flex flex-col gap-8 relative z-10">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-theme-primary animate-pulse" />
                                                    <span className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.3em]">[{exp.tag}]</span>
                                                </div>
                                                <span className="text-[10px] font-mono font-bold text-white/20 px-3 py-1 bg-white/5 rounded-full border border-white/5">{exp.period}</span>
                                            </div>

                                            <div>
                                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tighter group-hover:text-theme-primary transition-colors">{exp.role}</h3>
                                                <div className="flex items-center gap-3">
                                                    <Activity size={12} className="text-white/20" />
                                                    <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-white/40">{exp.company}</p>
                                                </div>
                                            </div>

                                            <p className="text-[15px] text-white/50 leading-relaxed font-medium">
                                                {exp.desc}
                                            </p>

                                            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
                                                {exp.metrics.map(metric => (
                                                    <div key={metric} className="flex flex-col gap-2">
                                                        <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.3em] font-mono">{metric.split(':')[0]}</span>
                                                        <span className="text-[9px] font-bold text-theme-primary tracking-widest uppercase">{metric.split(':')[1]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Connector Decal Horizontal */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-gradient-to-r ${i % 2 === 0 ? "from-transparent to-theme-primary/30 right-[-48px]" : "from-theme-primary/30 to-transparent left-[-48px]"} hidden md:block`} />
                                    </motion.div>
                                </div>

                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Telemetry */}
                <div className="mt-32 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-12 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-3">
                            <ShieldCheck size={16} className="text-theme-primary" />
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">Background_Verified</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap size={16} className="text-theme-primary" />
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">Core_Stable</span>
                        </div>
                    </div>
                    <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em]">
                        Foundry_Protocol_Execution_Verified // 2018-2025
                    </div>
                </div>
            </div>
        </section>
    );
}
