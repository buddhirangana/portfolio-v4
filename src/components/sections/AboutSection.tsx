"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Code2, Palette, BarChart3, Megaphone, Video, FileText, Cpu, Globe, Crosshair, Terminal, Zap, Fingerprint, Layout, Star } from "lucide-react";

// Updated Skills with technical metadata
const SKILLS = [
    { name: "Web Development", level: 80, category: "PHP | JAVASCRIPT | HTML | CSS | Next.js | React", color: "var(--theme-primary)" },
    { name: "Graphic Design", level: 70, category: "PHOTOSHOP | ILLUSTRATOR", color: "var(--theme-secondary)" },
    { name: "Digital Marketing", level: 75, category: "FACEBOOK | TIKTOK | INSTAGRAM | SEO", color: "var(--theme-accent)" },
    { name: "UI/UX Design", level: 75, category: "FIGMA | ADOBE XD", color: "var(--theme-primary)" },
    { name: "CMS Development", level: 90, category: "WORDPRESS | SHOPIFY | WOOCOMMERCE | GHOST | JOOMLA", color: "var(--theme-primary)" },
];

const EXPERTISE = [
    {
        icon: Terminal,
        title: "Web Development",
        desc: "Architecting high-performance digital environments with zero-latency logic.",
        tag: "WEB_DEPLOY",
        color: "var(--theme-primary)"
    },
    {
        icon: Palette,
        title: "Graphic Design",
        desc: "Crafting unique brand DNAs that resonate across modern industrial landscapes.",
        tag: "VISUAL_DNA",
        color: "var(--theme-secondary)"
    },
    {
        icon: BarChart3,
        title: "Technical Analysis",
        desc: "Deep-dive data processing and system metrics analysis for performance modeling.",
        tag: "DATA_NODE",
        color: "var(--theme-accent)"
    },
    {
        icon: Megaphone,
        title: "Social Media Consultant",
        desc: "Optimizing digital reach and engagement through strategic network consultation.",
        tag: "UPLINK_SOC",
        color: "var(--theme-primary)"
    },
    {
        icon: Globe,
        title: "UI/UX Design",
        desc: "Designing high-fidelity interfaces with intuitive user-centric logic flow.",
        tag: "CORE_UI",
        color: "var(--theme-secondary)"
    },
    {
        icon: Zap,
        title: "Social Media Marketing",
        desc: "Accelerating brand growth through targeted high-impact digital campaigns.",
        tag: "MARK_OPS",
        color: "var(--theme-accent)"
    },
    {
        icon: Crosshair,
        title: "SEO",
        desc: "Maximizing discoverability and indexing through advanced technical search optimization.",
        tag: "SEARCH_OPT",
        color: "var(--theme-primary)"
    },
    {
        icon: Layout,
        title: "WordPress Development",
        desc: "Engineering custom themes and robust plugin architectures for scalable CMS solutions.",
        tag: "CMS_ARCH",
        color: "var(--theme-secondary)"
    }
];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Smooth reveal for technical decals
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative py-20 lg:py-32 overflow-hidden bg-dark-400"
        >
            {/* Foundry Background Decals */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                About Me
            </motion.div>

            <div className="section-container relative z-10">
                {/* Modernized Header */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 mb-12 lg:mb-24 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl flex flex-col items-center lg:items-start"
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 w-full">
                            <span className="w-12 h-[1px] bg-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">About Me</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-8">
                            Engineering the <span className="italic font-light text-white/40">Digital Blueprint</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:text-right"
                    >
                        <p className="text-white/40 text-sm font-medium leading-relaxed max-w-xs ml-auto">
                            Transforming complex ideas into scalable, high-performance digital systems through precision engineering and intelligent design.
                        </p>
                    </motion.div>
                </div>

                {/* Asymmetrical Bento Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32">
                    {/* Bio Card (Span 7) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 group"
                    >
                        <div className="glass-card-premium rounded-[3rem] p-8 md:p-12 h-full border border-white/5 relative overflow-hidden flex flex-col min-h-[500px]">
                            {/* Scanning Animation Visual & Info Section */}
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-12">
                                <div className="relative group-hover:scale-105 transition-transform duration-700">
                                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                                        <div className="absolute inset-0 rounded-3xl border border-theme-primary animate-pulse" />
                                        <div className="absolute inset-0 bg-theme-primary/10 rounded-3xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                            <img
                                                src="/images/about/buddhi-rangana-img.webp"
                                                alt="Buddhi Rangana Profile" loading="lazy"
                                                className="w-full h-full object-cover brightness-125"
                                            />
                                            <motion.div
                                                animate={{ y: [-160, 160] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                                className="absolute inset-x-0 h-1 bg-theme-primary/40 shadow-[0_0_15px_rgba(248,87,42,1)]"
                                            />
                                        </div>
                                        <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-dark-400 rounded-2xl border border-white/10 flex items-center justify-center">
                                            <Crosshair size={20} className="text-theme-primary" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:mx-0 flex-1">
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Buddhi Rangana</h3>
                                    <p className="text-sm md:text-md text-white/50 leading-relaxed mb-6 max-w-2xl">Entrepreneur • Founder @ DFox Technologies (Pvt) Ltd • Founder @ TEC ROOM • Aspiring Full-Stack Developer</p>
                                    <div className="flex justify-center lg:justify-start gap-4">
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/40">Freelancer</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 bg-theme-primary/10 border border-theme-primary/20 rounded-full text-theme-primary">Available for Work</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col flex-1 justify-end">
                                <p className="text-md md:text-lg text-white/50 leading-relaxed mb-10 max-w-2xl">
                                    I'm Buddhi Rangana, a Software Engineering undergraduate and founder of DigiFox Technologies, focused on building scalable, high-performance digital systems. With a strong background in full-stack development and hands-on experience in real-world projects, I create solutions that combine functionality, usability and innovation. <br/><br/> Driven by continuous learning and a passion for AI and emerging technologies, I transform ideas into intelligent, future-ready digital experiences.
                                </p>

                                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                                    <div className="flex flex-col gap-2">
                                        <span>Status: Undergraduate</span>
                                        <span>Location: Sri Lanka</span>
                                    </div>
                                    <div className="flex flex-col gap-2 text-right">
                                        <span className="text-theme-primary">Focus: Full-Stack & AI</span>
                                        <span>Role: Entrepreneur</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Card (Span 5) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="glass-card-premium rounded-[3rem] p-12 h-full border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-12">
                                <Star size={20} className="text-theme-primary" />
                                <h4 className="text-sm font-bold items-center lg:items-start uppercase tracking-[0.4em] text-white/40">My Skills</h4>
                            </div>

                            <div className="space-y-12">
                                {SKILLS.map((skill, i) => (
                                    <div key={skill.name} className="relative">
                                        <div className="flex justify-between items-end mb-4">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest mb-1">{skill.category}</span>
                                                <span className="text-sm font-bold text-white uppercase tracking-wider">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-mono font-bold text-theme-primary">{skill.level}%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, delay: 0.4 + i * 0.1, ease: "circOut" }}
                                                className="h-full bg-theme-primary shadow-[0_0_15px_rgba(248,87,42,0.4)]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Expertise Micro-Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {EXPERTISE.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card-premium rounded-[2.5rem] p-10 border border-white/5 hover:border-theme-primary/30 transition-all duration-500 overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                <item.icon size={60} />
                            </div>

                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-theme-primary mb-8 border border-white/5 group-hover:bg-theme-primary group-hover:text-white transition-all duration-500">
                                <item.icon size={22} />
                            </div>

                            <span className="text-[10px] font-bold text-theme-primary uppercase tracking-[0.3em] mb-4 block">[{item.tag}]</span>
                            <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{item.title}</h4>
                            <p className="text-xs text-white/40 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
