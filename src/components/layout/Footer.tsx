"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUp, Command, Terminal, Cpu } from "lucide-react";

export default function Footer() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-dark-400 border-t border-white/5 pt-32 pb-16 overflow-hidden">
            {/* Background Grid & Decals */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            <div className="absolute left-0 bottom-0 p-20 opacity-[0.02] text-[15rem] font-bold select-none pointer-events-none uppercase">
                Foundry
            </div>

            <div className="section-container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-32">
                    {/* Brand Meta */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-theme-primary flex items-center justify-center text-white shadow-2xl">
                                <Command size={24} />
                            </div>
                            <h3 className="text-4xl font-bold text-white tracking-tighter">
                                BR // <span className="text-white/20 italic font-light">CORP</span>
                            </h3>
                        </div>

                        <p className="text-xl text-white/40 max-w-sm leading-relaxed mb-12 font-medium">
                            Architecting high-performance digital systems with <span className="text-white">radical engineering</span> principles.
                        </p>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/itbuddhi", label: "GIT" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/itbuddhi/", label: "LINKED" },
                                { icon: Twitter, href: "#", label: "X_SOC" },
                                { icon: Mail, href: "mailto:info.buddhirangana@gmail.com", label: "MAIL" }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    href={item.href}
                                    className="flex flex-col items-center gap-2 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl glass-card-premium border border-white/5 flex items-center justify-center text-white/30 group-hover:text-theme-primary group-hover:border-theme-primary/30 transition-all duration-500">
                                        <item.icon size={22} />
                                    </div>
                                    <span className="text-[7px] font-bold text-white/10 group-hover:text-theme-primary transition-colors tracking-[0.4em]">{item.label}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Channels */}
                    <div className="md:col-span-3">
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-10">[ CHANNELS ]</h4>
                        <ul className="space-y-6">
                            {["About", "Projects", "Experience", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="group flex items-center gap-4 text-sm font-bold text-white/40 hover:text-white transition-all">
                                        <div className="w-0 h-[1px] bg-theme-primary group-hover:w-4 transition-all duration-500" />
                                        {link.toUpperCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* System Endpoint */}
                    <div className="md:col-span-4">
                        <h4 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.5em] mb-10">[ ENDPOINT ]</h4>
                        <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <Terminal size={14} className="text-theme-primary" />
                                <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Access Node v4.0</span>
                            </div>
                            <p className="text-white font-bold text-lg mb-1">Colombo, Sri Lanka</p>
                            <p className="text-white/30 text-xs font-mono">EST_CONNECTION: SECURE</p>
                        </div>
                        <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-theme-primary/10 border border-theme-primary/20 w-fit">
                            <div className="w-2 h-2 rounded-full bg-theme-primary animate-pulse" />
                            <span className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.4em]">Available_For_Ops</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col gap-2">
                        <p className="text-white/20 text-[9px] font-bold uppercase tracking-[0.5em]" suppressHydrationWarning>
                            © {new Date().getFullYear()} — BUDDHI RANGANA FOUNDRY
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="text-[7px] font-mono text-white/10 uppercase">Architectural_v2.4_Stable</span>
                            <Cpu size={10} className="text-white/10" />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ y: -5 }}
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-4"
                    >
                        <span className="text-[8px] font-bold text-white/20 group-hover:text-white transition-colors uppercase tracking-[0.5em]">Origin_Point</span>
                        <div className="w-14 h-14 rounded-2xl glass-card-premium border border-white/5 flex items-center justify-center text-white/30 group-hover:text-theme-primary group-hover:border-theme-primary/40 transition-all duration-700">
                            <ArrowUp size={20} />
                        </div>
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
