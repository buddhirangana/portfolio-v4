"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, UserCheck, Shield, Activity, Fingerprint, Command } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "A. Sterling",
        role: "CTO // NEXUS_LABS",
        content: "The architectural depth Buddhi brings to digital systems is unparalleled. The transition from legacy nodes to modern meshes was flawlessly executed.",
        hash: "0x88A...921",
        tag: "CTO_SIG_01"
    },
    {
        name: "L. Kaelan",
        role: "Proprietor // QUANTUM_DIGITAL",
        content: "Working with Buddhi was a game-changer for our digital presence. High-fidelity design met with industrial-grade logic. Absolute precision.",
        hash: "0x22B...11C",
        tag: "EXEC_SIG_04"
    },
    {
        name: "M. Voss",
        role: "Lead Architect // SILICON_GRID",
        content: "Extremely rare to find a developer who understands both the aesthetic soul of a brand and the technical rigors of high-performance software.",
        hash: "0xEE4...88F",
        tag: "CORE_SIG_09"
    }
];

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section id="testimonials" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Foundry Background Decals */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
                <div className="absolute top-20 right-20 text-[10rem] font-bold uppercase select-none">VALIDATED_FDBK</div>
                <div className="absolute bottom-20 left-20 text-[10rem] font-bold uppercase select-none rotate-180">STAKEHOLDER_SYNC</div>
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <UserCheck size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Signal Validation</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Stakeholder <span className="text-white/20 italic font-light">Intelligence</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 text-right"
                    >
                        <div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Status: Verified</div>
                            <div className="text-xs font-mono text-theme-primary">FEEDBACK_LOOP_ACTIVE</div>
                        </div>
                        <Shield size={32} className="text-theme-primary/20" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testi, i) => (
                        <motion.div
                            key={testi.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card-premium rounded-[3rem] p-12 border border-white/5 hover:border-theme-primary/30 transition-all duration-700 relative group overflow-hidden flex flex-col h-full"
                        >
                            {/* Scanning Visual */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-theme-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                            <Quote className="absolute top-10 right-10 text-theme-primary opacity-5 group-hover:opacity-20 transition-opacity" size={100} />

                            <div className="flex-1 relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <Activity size={12} className="text-theme-primary" />
                                    <span className="text-[9px] font-bold text-white/20 tracking-[0.4em] uppercase">Transmission Protocol: {testi.tag}</span>
                                </div>

                                <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-12 tracking-tight group-hover:text-white transition-colors italic">
                                    "{testi.content}"
                                </p>
                            </div>

                            <div className="relative z-10 pt-10 border-t border-white/5 mt-auto">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex flex-col">
                                        <h4 className="font-bold text-2xl text-white tracking-tight">{testi.name}</h4>
                                        <p className="text-[10px] text-theme-primary uppercase tracking-[0.2em] font-bold mt-1">{testi.role}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white/20 group-hover:bg-theme-primary group-hover:text-white transition-all duration-500">
                                        <Fingerprint size={20} />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between opacity-20">
                                    <div className="flex items-center gap-2">
                                        <Command size={10} />
                                        <span className="text-[8px] font-mono tracking-widest">{testi.hash}</span>
                                    </div>
                                    <span className="text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 border border-white/10 rounded-full">Validated_Sig</span>
                                </div>
                            </div>

                            {/* Decorative logic lines */}
                            <div className="absolute bottom-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="text-theme-primary">
                                    <path d="M10 50L50 10M50 50L10 10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                                    <circle cx="30" cy="30" r="2" fill="currentColor" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Signal Readout */}
                <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-8 py-4 px-10 rounded-full bg-white/5 border border-white/5 grayscale group hover:grayscale-0 transition-all duration-700">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-theme-primary animate-pulse" />
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Neural Verification Active</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Confidence_Rating: 0.9982</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
