"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence, LayoutGroup, useInView, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Plus, Globe, Database, Command, Layers, Monitor, Cpu, Palette, Figma } from "lucide-react";

// ─── Filter Definitions ────────────────────────────────────────────────────────
type FilterKey = "all" | "web" | "app" | "uiux";

const FILTERS: { key: FilterKey; label: string; tag: string; icon: React.ElementType }[] = [
    { key: "all", label: "All", tag: "ALL_NODES", icon: Layers },
    { key: "web", label: "Web", tag: "WEB_SYS", icon: Monitor },
    { key: "app", label: "App", tag: "APP_CORE", icon: Cpu },
    { key: "uiux", label: "UI/UX", tag: "DESIGN_OPS", icon: Palette },
];

// ─── Projects Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        title: "DigiFox Agency Portal",
        desc: "Full-stack agency management platform with client dashboards, invoicing, and project tracking built on PHP/Laravel.",
        tech: ["PHP", "Laravel", "MySQL"],
        category: "SYS_CORE",
        filter: "web" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "TEC ROOM Blog Platform",
        desc: "High-performance tech blog with SEO-optimized architecture, custom CMS, and dynamic content delivery.",
        tech: ["WordPress", "PHP", "SEO"],
        category: "WEB_ARCH",
        filter: "web" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Solar E-Commerce",
        desc: "High-fidelity e-commerce portal with integrated payment pipelines and interactive product configuration.",
        tech: ["Next.js", "Stripe", "Tailwind"],
        category: "ECOSYSTEM",
        filter: "web" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "AI Personal Trainer",
        desc: "Neural-vision fitness engine utilizing real-time pose estimation and corrective feedback loops.",
        tech: ["Next.js", "Python", "MediaPipe"],
        category: "NEURAL_NET",
        filter: "app" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac00dc?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Inventory Manager Pro",
        desc: "Real-time inventory tracking and analytics desktop application with barcode integration and reporting dashboards.",
        tech: ["Electron", "React", "SQLite"],
        category: "APP_SYS",
        filter: "app" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Neural Network Viz",
        desc: "Interactive holographic visualization bridge for complex weight-distribution analysis in deep learning.",
        tech: ["Three.js", "D3.js", "React"],
        category: "DATA_VIS",
        filter: "app" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "FinTrack Mobile App",
        desc: "Cross-platform personal finance tracker featuring AI-driven spending categorization and goal forecasting.",
        tech: ["React Native", "Expo", "Node.js"],
        category: "MOBILE_SYS",
        filter: "app" as FilterKey,
        link: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Foundry Design System",
        desc: "Comprehensive UI component library and design token system built for scalable product teams.",
        tech: ["Figma", "React", "Storybook"],
        category: "DESIGN_SYS",
        filter: "uiux" as FilterKey,
        figma: "#",
        github: "#",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "DigiFox Brand Identity",
        desc: "End-to-end branding and visual identity system — logo, typography, color system, and brand guidelines.",
        tech: ["Figma", "Illustrator", "Photoshop"],
        category: "BRAND_OPS",
        filter: "uiux" as FilterKey,
        figma: "#",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "SaaS Dashboard UI",
        desc: "Dark-mode analytics dashboard UI with micro-interactions, data-dense layouts, and motion design.",
        tech: ["Figma", "Framer", "CSS"],
        category: "UI_ARCH",
        filter: "uiux" as FilterKey,
        figma: "#",
        link: "#",
        image: "/images/projects/project-1.webp"
    },
];

const PAGE_SIZE = 6;

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function ProjectsSection() {
    const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    const filteredProjects = activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter(p => p.filter === activeFilter);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hasMore = visibleCount < filteredProjects.length;

    const handleFilterChange = (key: FilterKey) => {
        setActiveFilter(key);
        setVisibleCount(PAGE_SIZE);
    };

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Smooth reveal for technical decals
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    return (
        <section id="projects" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400">
            {/* Background Architecture */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            {/* Foundry Background Decals */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Portfolio
            </motion.div>

            <div className="section-container relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 mb-12 lg:mb-24 text-center md:text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <Database size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">My Portfolio</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Featured <span className="text-white/20 italic font-light">Projects</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8 text-center md:text-right"
                    >
                        <div className="text-left md:text-right">
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">
                                {filteredProjects.length} Projects Total
                            </div>
                            <div className="text-xs font-mono text-theme-primary">SELECTED WORKS</div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Filter Tabs ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-16"
                >
                    <LayoutGroup id="project-filters">
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
                            {FILTERS.map((filter) => {
                                const Icon = filter.icon;
                                const isActive = activeFilter === filter.key;
                                return (
                                    <motion.button
                                        key={filter.key}
                                        onClick={() => handleFilterChange(filter.key)}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`
                                            relative flex items-center gap-2 px-4 py-2 md:gap-3 md:px-6 md:py-3 rounded-[1rem] md:rounded-2xl
                                            border transition-colors duration-300 overflow-hidden
                                            ${isActive
                                                ? "border-theme-primary/50 text-white"
                                                : "border-white/5 text-white/30 hover:border-white/15 hover:text-white/60"
                                            }
                                        `}
                                    >
                                        {/* Active background fill */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="filter-bg"
                                                className="absolute inset-0 bg-theme-primary/10"
                                                style={{ borderRadius: "1rem" }}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            />
                                        )}

                                        <Icon size={13} className={`relative z-10 transition-colors duration-300 ${isActive ? "text-theme-primary" : ""}`} />
                                        <span className="relative z-10 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
                                            {filter.label}
                                        </span>

                                        {/* Active bottom bar */}
                                        {isActive && (
                                            <motion.div
                                                layoutId="filter-bar"
                                                className="absolute bottom-0 left-3 right-3 h-[2px] bg-theme-primary rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                            />
                                        )}

                                        {/* Count badge */}
                                        <span className={`
                                            relative z-10 ml-1 text-[8px] font-bold font-mono px-1.5 py-0.5 rounded-md
                                            ${isActive ? "bg-theme-primary/20 text-theme-primary" : "bg-white/5 text-white/20"}
                                        `}>
                                            {filter.key === "all" ? PROJECTS.length : PROJECTS.filter(p => p.filter === filter.key).length}
                                        </span>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </LayoutGroup>
                </motion.div>

                {/* ── Project Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[200px]">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={`${activeFilter}-${project.title}`}
                                layout
                                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                                transition={{
                                    duration: 0.45,
                                    delay: i * 0.07,
                                    layout: { duration: 0.4 }
                                }}
                                className="group relative flex flex-col h-full bg-dark-300 rounded-[2.5rem] border border-white/5 hover:border-theme-primary/30 transition-all duration-700 overflow-hidden"
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-dark-400">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 scale-105"
                                    />

                                    {/* Scanning Beam */}
                                    <motion.div
                                        animate={{ x: ["-100%", "200%"] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-theme-primary/10 to-transparent pointer-events-none -skew-x-12"
                                    />

                                    {/* HUD Overlay on Hover */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 bg-dark-400/40 backdrop-blur-sm">
                                        <div className="flex justify-end items-end">
                                            <div className="flex gap-2">
                                                {project.github && (
                                                    <a href={project.github} className="p-3 bg-white/10 hover:bg-theme-primary rounded-xl transition-all border border-white/5" target="_blank" rel="noopener noreferrer">
                                                        <Github size={18} />
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a href={project.link} className="p-3 bg-white/10 hover:bg-theme-primary rounded-xl transition-all border border-white/5" target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink size={18} />
                                                    </a>
                                                )}
                                                {'figma' in project && (project as any).figma && (
                                                    <a href={(project as any).figma} className="p-3 bg-white/10 hover:bg-theme-primary rounded-xl transition-all border border-white/5" target="_blank" rel="noopener noreferrer">
                                                        <Figma size={18} />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
                                            <Globe size={12} className="text-theme-primary" />
                                            <span>
                                                {project.link ? "LIVE_PREVIEW" : (project as any).figma ? "DESIGN_BOARD" : "SYSTEM_SOURCE"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Category Tag */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2">
                                        <div className="px-3 py-1 bg-dark-400/60 backdrop-blur-md border border-white/5 rounded-full">
                                            <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/40">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-8 flex flex-col h-auto relative">
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
                                    <p className="text-xs text-white/40 leading-relaxed max-w-xs mb-2">
                                        {project.desc}
                                    </p>

                                    <div className="mt-5 flex mb-4 items-center justify-between pt-8 border-t border-white/5">
                                        <div className="flex items-center gap-2">
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

                {/* ── Empty State ── */}
                <AnimatePresence>
                    {visibleProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center py-32 gap-6"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/5 flex items-center justify-center">
                                <Database size={32} className="text-white/10" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">No_Records_Found</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── Load More ── */}
                <AnimatePresence>
                    {hasMore && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-24 flex justify-center"
                        >
                            <motion.button
                                onClick={() => setVisibleCount(prev => Math.min(prev + PAGE_SIZE, filteredProjects.length))}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group bg-transparent border border-white/5 rounded-2xl px-10 py-5 flex items-center gap-5 hover:border-theme-primary transition-all duration-500"
                            >
                                <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30 group-hover:text-theme-primary">
                                    Expand Data Feed · {filteredProjects.length - visibleCount} Remaining
                                </span>
                                <div className="w-7 h-7 rounded-lg bg-white/5 group-hover:bg-theme-primary flex items-center justify-center transition-all">
                                    <Plus size={14} className="text-white/30 group-hover:text-white" />
                                </div>
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
