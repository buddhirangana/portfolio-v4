"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, MapPin, Phone, MessageSquare, Terminal, Zap, Wifi, ShieldCheck, Activity, Globe, Cpu } from "lucide-react";

export default function ContactSection() {
    const sectionRef = useRef(null);
    const [focusedField, setFocusedField] = useState<string | null>(null);
    // Generate a stable TX_ID once on the client to avoid SSR/client hydration mismatch
    const [txId] = useState(() => Math.random().toString(16).substring(2, 10).toUpperCase());

    return (
        <section id="contact" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background Atmosphere & Foundry Decals */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-theme-primary/5 blur-[180px] rounded-full pointer-events-none opacity-40" />

            <div className="absolute top-0 right-[-5%] text-[12rem] font-bold text-white/[0.01] pointer-events-none select-none uppercase rotate-90 whitespace-nowrap">
                COMM_PROTO_AX_01
            </div>

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <MessageSquare size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Communication Node</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Establish <span className="text-white/20 italic font-light">Uplink</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-8 text-right"
                    >
                        <div className="hidden md:block">
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Stability: 99.8%</div>
                            <div className="text-xs font-mono text-theme-primary">NODE_SIGNAL_READY</div>
                        </div>
                        <Globe size={32} className="text-theme-primary/20" />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Info Sidebar (Span 5) */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="max-w-md"
                        >
                            <p className="text-xl text-white/50 leading-relaxed font-medium mb-12">
                                Architecting high-performance digital futures. Select your preferred <span className="text-white">transmission protocol</span> to initiate synchronization.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, label: "SECURE_CHANNEL", value: "info.buddhirangana@gmail.com", metric: "ENCRYPTED_V3", color: "text-theme-primary" },
                                    { icon: MapPin, label: "BASE_ORIGIN", value: "Colombo, Sri Lanka", metric: "04° N, 79° E", color: "text-theme-secondary" },
                                    { icon: Phone, label: "DIRECT_COMMS", value: "+94 75 647 7093", metric: "CARRIER_STABLE", color: "text-theme-accent" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ x: 8 }}
                                        className="group flex items-center gap-6 p-6 rounded-[2.5rem] border border-white/5 hover:border-theme-primary/30 bg-white/[0.02] transition-all duration-500"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} group-hover:bg-theme-primary group-hover:text-white transition-all duration-500 shadow-xl`}>
                                            <item.icon size={22} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="text-[8px] font-bold uppercase tracking-widest text-white/20">[{item.label}]</span>
                                                <span className="text-[7px] font-mono text-theme-primary/40">{item.metric}</span>
                                            </div>
                                            <p className="text-white font-bold tracking-tight text-lg">{item.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="pt-12 border-t border-white/5">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex gap-1">
                                        {[1, 1, 1, 0, 0].map((v, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: v ? [4, 12, 4] : 4 }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                className={`w-1 rounded-full ${v ? 'bg-theme-primary' : 'bg-white/10'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Neural Link Optimized</span>
                                </div>
                                <div className="flex items-center gap-4 opacity-20">
                                    <Cpu size={12} />
                                    <span className="text-[8px] font-mono tracking-widest uppercase">Encryption_Cycle: 4096-BIT_STABLE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Console (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-7"
                    >
                        <div className="glass-card-premium rounded-[3.5rem] p-12 border border-white/5 relative overflow-hidden group">
                            {/* Terminal Top Decal */}
                            <div className="flex justify-between items-center mb-12 py-4 px-8 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md">
                                <div className="flex gap-2.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-theme-primary/60 animate-pulse" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] uppercase">Uplink_Console_V4.2.0</span>
                                    <Activity size={10} className="text-theme-primary/40" />
                                </div>
                                <Wifi size={12} className="text-theme-primary animate-pulse" />
                            </div>

                            <form className="space-y-10 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] px-2">
                                            <label className="text-white/30 flex items-center gap-2">
                                                <Terminal size={10} className="text-theme-primary" />
                                                Identity_Sig
                                            </label>
                                            {focusedField === 'name' && <span className="text-theme-primary animate-pulse">AWAITING_STR</span>}
                                        </div>
                                        <input
                                            onFocus={() => setFocusedField('name')}
                                            onBlur={() => setFocusedField(null)}
                                            type="text"
                                            placeholder="AGENT_NAME"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-sm text-white focus:border-theme-primary/50 focus:bg-white/[0.08] transition-all outline-none placeholder:text-white/10 font-bold tracking-wider"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] px-2">
                                            <label className="text-white/30 flex items-center gap-2">
                                                <ShieldCheck size={10} className="text-theme-primary" />
                                                Routing_Addr
                                            </label>
                                            {focusedField === 'email' && <span className="text-theme-primary animate-pulse">VALIDATING</span>}
                                        </div>
                                        <input
                                            onFocus={() => setFocusedField('email')}
                                            onBlur={() => setFocusedField(null)}
                                            type="email"
                                            placeholder="ENDPOINT@DNS.HOST"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-sm text-white focus:border-theme-primary/50 focus:bg-white/[0.08] transition-all outline-none placeholder:text-white/10 font-bold tracking-wider"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] px-2">
                                        <label className="text-white/30 flex items-center gap-2">
                                            <Zap size={10} className="text-theme-primary" />
                                            Mission_Brief
                                        </label>
                                    </div>
                                    <input
                                        onFocus={() => setFocusedField('subject')}
                                        onBlur={() => setFocusedField(null)}
                                        type="text"
                                        placeholder="DIRECTIVE_SUBJECT_LINE"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-8 py-6 text-sm text-white focus:border-theme-primary/50 focus:bg-white/[0.08] transition-all outline-none placeholder:text-white/10 font-bold tracking-wider"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em] px-2">
                                        <label className="text-white/30 flex items-center gap-2">
                                            <Activity size={10} className="text-theme-primary" />
                                            Payload_Data
                                        </label>
                                    </div>
                                    <textarea
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                        rows={6}
                                        placeholder="DATA_STREAM_CONTENT_ENCODING..."
                                        className="w-full bg-white/5 border border-white/10 rounded-[2.5rem] px-8 py-8 text-sm text-white focus:border-theme-primary/50 focus:bg-white/[0.08] transition-all outline-none resize-none placeholder:text-white/10 font-bold tracking-wider leading-relaxed"
                                    />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full group relative overflow-hidden rounded-[3rem] bg-theme-primary text-white py-8 font-extrabold uppercase tracking-[0.5em] text-xs shadow-3xl shadow-theme-primary/30"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-theme-primary to-theme-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10 flex items-center justify-center gap-6">
                                        Initiate Data Transmission
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </span>
                                </motion.button>
                            </form>

                            {/* Bottom Telemetry */}
                            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-between items-center opacity-30 group-hover:opacity-60 transition-opacity">
                                <div className="flex gap-10">
                                    <div className="flex items-center gap-3 text-[9px] font-mono font-bold tracking-widest">
                                        <ShieldCheck size={14} className="text-theme-primary" />
                                        SSL_VERIFIED
                                    </div>
                                    <div className="flex items-center gap-3 text-[9px] font-mono font-bold tracking-widest">
                                        <Zap size={14} className="text-theme-primary" />
                                        PRIORITY_ONE
                                    </div>
                                </div>
                                <div className="text-[9px] font-mono font-bold text-white/40">
                                    TX_ID: {txId}
                                </div>
                            </div>

                            {/* Decorative background grid element */}
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 grid-bg opacity-[0.03] rotate-12 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
