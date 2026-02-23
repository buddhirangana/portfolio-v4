"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Plus, Eye, Database, Globe, Command } from "lucide-react";

const PROJECTS = [
    {
        title: "AI Personal Trainer",
        desc: "Neural-vision fitness engine utilizing real-time pose estimation and corrective feedback loops.",
        tech: ["Next.js", "Python", "MediaPipe"],
        category: "NEURAL_NET",
        build: "v4.2.1",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac00dc?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Digital Agency CMS",
        desc: "Headless data orchestration platform featuring hyper-modular content modeling and real-time mesh analytics.",
        tech: ["React", "Node.js", "MongoDB"],
        category: "SYS_CORE",
        build: "v2.0.8",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Solar E-Commerce",
        desc: "High-fidelity architectural portal with integrated payment pipelines and interactive 3D light modeling.",
        tech: ["Next.js", "Stripe", "Three.js"],
        category: "ECOSYSTEM",
        build: "v1.5.0",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Neural Network Viz",
        desc: "Interactive holographic visualization bridge for complex weight-distribution analysis in deep learning.",
        tech: ["Three.js", "D3.js", "React"],
        category: "DATA_VIS",
        build: "v0.9.4_BETA",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Blockchain Bridge",
        desc: "Secure horizontal scaling protocol for zero-knowledge asset migration across fragmented networks.",
        tech: ["Solidity", "Go", "Ethereum"],
        category: "Z_K_PROTOCOL",
        build: "v3.1.2",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Quantum Simulation",
        desc: "Hybrid algorithmic research testing entanglement stability for next-gen material synthesis.",
        tech: ["Python", "Qiskit", "C++"],
        category: "QUANTUM_RES",
        build: "EX_LAB_44",
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1532187875605-2fe358a3d46a?q=80&w=800&auto=format&fit=crop"
    }
];

export default function ProjectsSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const [visibleCount, setVisibleCount] = useState(3);

    const loadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, PROJECTS.length));
    };

    return (
        <section id="projects" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background Architecture */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Database size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Experimental Archive</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Technical <span className="text-white/20 italic font-light">Research</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-8"
                    >
                        <div className="text-right">
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Status: Syncing</div>
                            <div className="text-xs font-mono text-theme-primary">0010110_READING</div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {PROJECTS.slice(0, visibleCount).map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                                className="group relative flex flex-col h-full bg-dark-300 rounded-[2.5rem] border border-white/5 hover:border-theme-primary/30 transition-all duration-700 overflow-hidden"
                            >
                                {/* High-Fidelity Asset Visual */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-dark-400">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 scale-105"
                                    />

                                    {/* Scanning Beam Overlay */}
                                    <motion.div
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-theme-primary/10 to-transparent pointer-events-none -skew-x-12"
                                    />

                                    {/* Technical Metadata HUD */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark-400/40 backdrop-blur-sm">
                                        <div className="flex justify-between items-start">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold text-theme-primary uppercase tracking-widest mb-1">BUILD_ID</span>
                                                <span className="text-[10px] font-mono text-white">{project.build}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <a href={project.github} className="p-3 bg-white/10 hover:bg-theme-primary rounded-xl transition-all border border-white/5">
                                                    <Github size={18} />
                                                </a>
                                                <a href={project.link} className="p-3 bg-white/10 hover:bg-theme-primary rounded-xl transition-all border border-white/5">
                                                    <ExternalLink size={18} />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                                            <Globe size={12} className="text-theme-primary" />
                                            <span>LIVE_DEPLOYMENT</span>
                                        </div>
                                    </div>

                                    {/* Build Tag */}
                                    <div className="absolute top-4 left-4 px-3 py-1 bg-dark-400/60 backdrop-blur-md border border-white/5 rounded-full">
                                        <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/40">NODE // {project.category}</span>
                                    </div>
                                </div>

                                {/* Research Content */}
                                <div className="p-10 flex flex-col h-full relative">
                                    <div className="flex gap-2 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[8px] font-bold uppercase tracking-widest text-white/30 border border-white/5 px-2 py-1 rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-theme-primary transition-colors tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs text-white/40 leading-relaxed max-w-xs mb-8">
                                        {project.desc}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/5">
                                        <div className="flex items-center gap-2 group-hover:text-theme-primary transition-colors">
                                            <Command size={12} className="text-theme-primary" />
                                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">Access Protocol</span>
                                        </div>
                                        <ArrowRight size={14} className="text-white/20 group-hover:translate-x-2 group-hover:text-theme-primary transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {visibleCount < PROJECTS.length && (
                    <div className="mt-24 flex justify-center">
                        <motion.button
                            onClick={loadMore}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border border-white/5 rounded-full px-16 py-6 flex items-center gap-6 group hover:border-theme-primary transition-all duration-500"
                        >
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-theme-primary">Initiate Data Expansion</span>
                            <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-theme-primary flex items-center justify-center transition-all">
                                <Plus size={16} className="text-white/30 group-hover:text-white" />
                            </div>
                        </motion.button>
                    </div>
                )}
            </div>
        </section>
    );
}
