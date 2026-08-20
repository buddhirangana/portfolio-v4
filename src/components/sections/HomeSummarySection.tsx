"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { User, Briefcase, Database, BookOpen, ArrowRight, Award, Sparkles, Terminal, Rocket, ChevronRight } from "lucide-react";

// ── Metrics / Key Stats Definitions ──────────────────────────────────────────

const METRICS = [
    { label: "Years Experience", value: "5+", icon: Rocket, accent: "from-theme-primary to-theme-secondary" },
    { label: "Digital Projects", value: "20+", icon: Database, accent: "from-theme-secondary to-theme-accent" },
    { label: "Peer-Reviewed Papers", value: "1+", icon: BookOpen, accent: "from-theme-primary to-orange-400" },
    { label: "Certifications", value: "10+", icon: Award, accent: "from-theme-accent to-theme-primary" },
];

// ── Summary Cards Data ───────────────────────────────────────────────────────

const HIGHLIGHT_CARDS = [
    {
        title: "About & Tech Stack",
        subtitle: "Architecting Digital Systems",
        desc: "Full-Stack Developer, Entrepreneur, and Founder of DigiFox Technologies & TEC ROOM. Specializing in modern web applications, cloud infrastructure, and AI integration.",
        link: "/about",
        cta: "Explore Full Bio",
        icon: User,
        tag: "BIOGRAPHY",
        gradient: "group-hover:border-theme-primary/40"
    },
    {
        title: "Featured Projects",
        subtitle: "Selected Works & Apps",
        desc: "Explore a curated portfolio of web applications, mobile apps, GPA calculators, ML classifiers, and high-performance digital products.",
        link: "/projects",
        cta: "View All Projects",
        icon: Database,
        tag: "PORTFOLIO",
        gradient: "group-hover:border-theme-secondary/40"
    },
    {
        title: "Research & Papers",
        subtitle: "Academic Publications",
        desc: "Empirical studies and peer-reviewed research on LLM tools (ChatGPT & Google Gemini), AI performance impact, and software architecture.",
        link: "/research",
        cta: "Read Publications",
        icon: BookOpen,
        tag: "PUBLICATIONS",
        gradient: "group-hover:border-theme-primary/40"
    },
    {
        title: "Work Experience",
        subtitle: "Career Milestones",
        desc: "Leadership roles, software engineering, digital transformation consulting, and entrepreneurial achievements across tech ventures.",
        link: "/experience",
        cta: "View Career History",
        icon: Briefcase,
        tag: "CAREER",
        gradient: "group-hover:border-theme-accent/40"
    },
];

export default function HomeSummarySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400 border-t border-white/5">
            {/* Ambient Background Grid & Decal */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Overview
            </motion.div>

            <div className="section-container relative z-10">

                {/* ── Section Header ── */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-6"
                    >
                        <Sparkles size={14} className="text-theme-primary" />
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.4em]">
                            EXECUTIVE SUMMARY &amp; HIGHLIGHTS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight font-poppins mb-6"
                    >
                        Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-secondary">Excellence</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/40 text-base sm:text-lg max-w-2xl font-medium leading-relaxed"
                    >
                        Bridging full-stack software development, academic research, and tech entrepreneurship to engineer scalable future-ready solutions.
                    </motion.p>
                </div>

                {/* ── Metrics Stats Bar ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
                    {METRICS.map((metric, idx) => {
                        const IconComp = metric.icon;
                        return (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-6 sm:p-8 rounded-[2rem] glass-card-premium border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-theme-primary/30 transition-all duration-500"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-theme-primary group-hover:scale-110 transition-transform">
                                        <IconComp size={18} />
                                    </div>
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">
                                        STAT.0{idx + 1}
                                    </span>
                                </div>

                                <div>
                                    <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${metric.accent} font-poppins tracking-tight mb-1`}>
                                        {metric.value}
                                    </div>
                                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── Highlight Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {HIGHLIGHT_CARDS.map((card, idx) => {
                        const IconComp = card.icon;
                        return (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className={`p-8 sm:p-10 rounded-[2.5rem] glass-card-premium border border-white/5 ${card.gradient} transition-all duration-500 group relative flex flex-col justify-between`}
                            >
                                <div>
                                    {/* Top Bar */}
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="px-3.5 py-1.5 rounded-xl bg-theme-primary/10 border border-theme-primary/20 text-theme-primary text-[9px] font-bold uppercase tracking-widest">
                                            {card.tag}
                                        </span>
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-theme-primary group-hover:bg-theme-primary/10 transition-all duration-500">
                                            <IconComp size={22} />
                                        </div>
                                    </div>

                                    {/* Subtitle & Title */}
                                    <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-1">
                                        {card.subtitle}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-theme-primary transition-colors font-poppins mb-4">
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-xs sm:text-sm text-white/40 font-medium leading-relaxed mb-8">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* CTA Link */}
                                <a
                                    href={card.link}
                                    className="flex items-center gap-3 text-xs font-bold text-white/70 group-hover:text-theme-primary uppercase tracking-[0.2em] transition-colors pt-6 border-t border-white/5"
                                >
                                    <span>{card.cta}</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* ── Quick Contact CTA Banner ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-theme-primary/20 via-white/[0.02] to-theme-secondary/20 border border-theme-primary/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_20px_50px_rgba(248,87,42,0.15)]"
                >
                    <div className="text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <Terminal size={16} className="text-theme-primary" />
                            <span className="text-[10px] font-bold text-theme-primary uppercase tracking-[0.3em]">
                                READY TO COLLABORATE
                            </span>
                        </div>
                        <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-poppins mb-2">
                            Have a project in mind?
                        </h3>
                        <p className="text-white/40 text-xs sm:text-sm font-medium max-w-xl">
                            Available for remote software engineering and collaborations.
                        </p>
                    </div>

                    <a
                        href="/contact"
                        className="group relative px-8 py-4 bg-theme-primary rounded-2xl text-xs font-bold uppercase tracking-[0.25em] text-white flex items-center gap-3 shadow-[0_10px_30px_rgba(248,87,42,0.4)] hover:scale-105 transition-transform duration-300 shrink-0"
                    >
                        <span>Let's Connect</span>
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
