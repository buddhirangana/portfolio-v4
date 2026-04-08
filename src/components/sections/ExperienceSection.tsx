"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { Terminal, Network, Activity, ShieldCheck, Zap, User, MapPin, Code, Globe } from "lucide-react";

const EXPERIENCE = [
    {
        company: "AICTP",
        role: "Associate Member (AICTP)",
        period: "FEB 2026 - PRESENT",
        desc: "Association for Information Communication Technology Professionals (AICTP), the premier body advancing the science, practice, and professional standards of ICT.",
        tag: "Part-time",
        location: "Colombo, Sri Lanka",
        icon: User,
        logo: "/images/experience/aictp-logo.webp",
        color: "var(--theme-primary)"
    },
    {
        company: "DigiFox Technologies",
        role: "Founder & CEO",
        period: "MAR 2024 - PRESENT",
        desc: "DigiFox Technologies provides web design, SEO, digital marketing, software development, e-commerce, branding and content services.",
        tag: "Remote",
        location: "Colombo, Sri Lanka",
        icon: Code,
        logo: "/images/experience/digifox-logo.webp",
        color: "var(--theme-primary)"
    },
    {
        company: "Cyber Crew of SICT",
        role: "Main Editor",
        period: "JAN 2024 - PRESENT",
        desc: "Cyber Crew of SICT is a community group to support students in their quest of being a significant IT Professional.",
        tag: "Volunteer",
        location: "Kelaniya, Sri Lanka",
        icon: Network,
        logo: "/images/experience/cybercrewsict-logo.webp",
        color: "var(--theme-secondary)"
    },
    {
        company: "Colombo Journal",
        role: "Web Content Writer",
        period: "JAN 2023 - PRESENT",
        desc: "The Colombo Journal is an open-source, online content community which contains expert articles done by Sri Lankan professionals. All these articles are published free of charge on merit and considering the substance of the subject matter.",
        tag: "Volunteer",
        location: "Colombo, Sri Lanka",
        icon: Globe,
        logo: "/images/experience/colombo-journal-logo.webp",
        color: "var(--theme-accent)"
    },
    {
        company: "NIIBS Campus",
        role: "Information System Assistant",
        period: "FEB 2021 - PRESENT",
        desc: "NIIBS is a degree awarding institute recognized by the Government of Sri Lanka under the provisions of the Universities Act No.16 of 1978.",
        tag: "Full-time",
        location: "Kelaniya, Sri Lanka",
        icon: Code,
        logo: "/images/experience/niibs-logo.webp",
        color: "var(--theme-primary)"
    },
    {
        company: "NIIBS Campus",
        role: "Trainee",
        period: "AUG 2020 - FEB 2021",
        desc: "NIIBS is a degree awarding institute recognized by the Government of Sri Lanka under the provisions of the Universities Act No.16 of 1978.",
        tag: "Full-time",
        location: "Kelaniya, Sri Lanka",
        icon: Code,
        logo: "/images/experience/niibs-logo.webp",
        color: "var(--theme-primary)"
    },
    {
        company: "TEC ROOM",
        role: "Founder",
        period: "MAR 2020 - PRESENT",
        desc: "TEC ROOM  is a Sri Lankan technology website, publishing news, feature stories, software & app reviews, tech tutorials and product reviews in Sinhala. ",
        tag: "Part-time",
        location: "Colombo, Sri Lanka",
        icon: Globe,
        logo: "/images/experience/tecroom-logo.webp",
        color: "var(--theme-primary)"
    }
];

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Smooth reveal for technical decals
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experience" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400">
            {/* Foundry Background Decals */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Journey
            </motion.div>

            <div className="section-container relative z-10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                            <Terminal size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">My Journey</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                            Career <span className="text-white/20 italic font-light">Timeline</span>
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
                                            {/* Period Badge - Moved slightly for better flow */}
                                            <div className="flex justify-end">
                                                <span className="text-[10px] sm:text-[11px] font-mono font-bold text-white/20 px-4 py-1.5 bg-white/5 rounded-full border border-white/5 whitespace-nowrap">{exp.period}</span>
                                            </div>

                                            <div className="flex items-center gap-6 md:gap-8">
                                                {/* Large App-Style Logo Container */}
                                                <div className="w-16 h-16 md:w-24 md:h-24 rounded-[1.5rem] md:rounded-[2rem] bg-white/[0.03] border border-white/10 p-2 flex items-center justify-center group-hover:border-theme-primary/30 transition-all duration-700 shadow-2xl shrink-0">
                                                    <img
                                                        src={exp.logo}
                                                        alt={exp.company}
                                                        className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-700"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).style.display = 'none';
                                                        }}
                                                    />
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    {/* Role Title */}
                                                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-tighter group-hover:text-theme-primary transition-colors leading-none">
                                                        {exp.role}
                                                    </h3>
                                                    
                                                    {/* Company & Meta Info */}
                                                    <div className="flex flex-wrap items-center gap-3 mt-2">
                                                        <p className="text-sm md:text-lg font-semibold text-white/60 tracking-tight">{exp.company}</p>
                                                        <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[9px] md:text-[11px] font-bold text-theme-primary uppercase tracking-[0.2em]">[{exp.tag}]</span>
                                                        </div>
                                                        <div className="hidden md:flex items-center gap-2 text-[10px] font-medium text-white/20 uppercase tracking-[0.1em]">
                                                            <MapPin size={10} className="text-theme-primary/40" />
                                                            {exp.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-[15px] md:text-[17px] text-white/50 leading-relaxed font-medium border-l border-white/5 pl-6">
                                                {exp.desc}
                                            </p>
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
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">Quality Assured</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap size={16} className="text-theme-primary" />
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em]">Performance Optimized</span>
                        </div>
                    </div>
                    <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em]">
                        Delivering Scalable Digital Products // 2020 - Present
                    </div>
                </div>
            </div>
        </section>
    );
}
