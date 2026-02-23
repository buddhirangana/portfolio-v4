"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
    GraduationCap, Award, MapPin, Calendar,
    ChevronDown, BookOpen, Layers, Star, Zap
} from "lucide-react";

// ─── Data ──────────────────────────────────────────────────────────────────────
const QUALIFICATIONS = [
    {
        id: "EDU-001",
        degree: "BSc (Hons) in Computing",
        field: "Software Engineering",
        institution: "Coventry University",
        via: "via SLIIT, Sri Lanka",
        location: "Colombo, Sri Lanka",
        period: "2022 — Present",
        status: "READING",
        grade: "Upper Second Class (Predicted)",
        gpa: "3.4",
        featured: true,
        modules: [
            "Software Architecture",
            "Web Technologies",
            "Database Systems",
            "AI & Machine Learning",
            "Agile Development",
            "Cloud Computing",
        ],
        description:
            "A rigorous, industry-focused programme covering the full software development lifecycle — from systems design and database engineering to modern web frameworks and AI-driven systems.",
    },
    {
        id: "EDU-002",
        degree: "Diploma in Information Technology",
        field: "IT & Networking",
        institution: "Esoft Metro Campus",
        via: "",
        location: "Kandy, Sri Lanka",
        period: "2018 — 2019",
        status: "COMPLETED",
        grade: "Merit Pass",
        gpa: "",
        featured: false,
        modules: ["Computer Networks", "Web Design", "Programming Fundamentals", "Database Management"],
        description: "Foundational diploma covering core IT concepts, networking infrastructure, and practical programming skills.",
    },
    {
        id: "EDU-003",
        degree: "G.C.E. Advanced Level",
        field: "Mathematics Stream",
        institution: "Dharmaraja College",
        via: "",
        location: "Kandy, Sri Lanka",
        period: "2015 — 2017",
        status: "COMPLETED",
        grade: "3 Passes",
        gpa: "",
        featured: false,
        modules: ["Combined Mathematics", "Physics", "ICT"],
        description: "Advanced level study with focus on analytical and technical subjects that built the foundation for engineering.",
    },
    {
        id: "EDU-004",
        degree: "G.C.E. Ordinary Level",
        field: "General Education",
        institution: "Dharmaraja College",
        via: "",
        location: "Kandy, Sri Lanka",
        period: "2010 — 2014",
        status: "COMPLETED",
        grade: "6 A Passes",
        gpa: "",
        featured: false,
        modules: ["Mathematics", "Science", "ICT", "English", "History", "Sinhala"],
        description: "Broad general education with distinction in STEM and language subjects.",
    },
];

const STATS = [
    { val: "02", label: "Degrees" },
    { val: "03", label: "Institutions" },
    { val: "07+", label: "Years Study" },
    { val: "20+", label: "Modules" },
];

// ─── Expandable Qualification Strip ──────────────────────────────────────────
function QualStrip({ item, index }: { item: typeof QUALIFICATIONS[1]; index: number }) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-2xl border border-white/5 bg-dark-300 hover:border-white/10 transition-colors duration-500 overflow-hidden"
        >
            {/* Header row — always visible */}
            <button
                onClick={() => setOpen(o => !o)}
                className="w-full flex items-center gap-5 px-7 py-5 text-left"
            >
                {/* Initials badge */}
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center text-[11px] font-bold text-white/30 shrink-0 group-hover:bg-theme-primary/10 group-hover:border-theme-primary/20 group-hover:text-theme-primary transition-all duration-400">
                    {item.institution.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}
                </div>

                <div className="flex-1 min-w-0">
                    <p className="text-[8px] font-bold text-theme-primary/50 uppercase tracking-[0.4em] mb-0.5">{item.field}</p>
                    <p className="text-sm font-bold text-white/80 truncate">{item.degree}</p>
                    <p className="text-[10px] text-white/30 truncate">{item.institution} · {item.period}</p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
                        <Award size={9} className="text-theme-primary/50" />
                        <span className="text-[8px] font-bold text-white/30 uppercase tracking-wider">{item.grade}</span>
                    </div>
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-7 h-7 rounded-lg border border-white/[0.06] flex items-center justify-center text-white/20 group-hover:border-theme-primary/20 group-hover:text-theme-primary transition-colors duration-300"
                    >
                        <ChevronDown size={13} />
                    </motion.div>
                </div>
            </button>

            {/* Expand panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-7 pb-6 border-t border-white/[0.04] pt-5">
                            <p className="text-sm text-white/35 leading-relaxed mb-5">{item.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.modules.map(mod => (
                                    <span key={mod} className="text-[8px] font-bold uppercase tracking-widest text-white/25 border border-white/[0.06] px-2.5 py-1 rounded-md">
                                        {mod}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function EducationSection() {
    const featRef = useRef(null);
    const featInView = useInView(featRef, { once: true, margin: "-60px" });
    const feat = QUALIFICATIONS[0];
    const rest = QUALIFICATIONS.slice(1);

    return (
        <section id="education" className="py-32 relative overflow-hidden bg-dark-400">
            {/* Faint grid */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            {/* Ghost watermark */}
            <div className="absolute -right-8 bottom-0 text-[18rem] font-black italic text-white/[0.012] pointer-events-none select-none leading-none">EDU</div>

            <div className="section-container relative z-10">

                {/* ── Section Header ── */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <GraduationCap size={13} className="text-theme-primary" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-theme-primary">Academic Archive</span>
                            <div className="w-10 h-px bg-theme-primary/30" />
                        </div>
                        <h2 className="text-5xl md:text-7xl xl:text-8xl font-bold text-white tracking-tighter leading-none">
                            Education
                        </h2>
                        <p className="text-white/20 italic font-light text-3xl md:text-5xl tracking-tight mt-1">
                            &amp; Qualifications
                        </p>
                    </motion.div>

                    {/* Stat chips */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex flex-wrap gap-4"
                    >
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 + i * 0.07 }}
                                className="flex flex-col items-center px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/5"
                            >
                                <span className="text-2xl font-bold text-white tracking-tight leading-none">{s.val}</span>
                                <span className="text-[7px] font-bold text-white/20 uppercase tracking-[0.3em] mt-1">{s.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ── Divider ── */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-px w-full origin-left bg-gradient-to-r from-theme-primary/40 via-white/5 to-transparent mb-16"
                />

                {/* ── BENTO LAYOUT: Featured left + strips right ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">

                    {/* LEFT: Large Featured Card (BSc) */}
                    <motion.div
                        ref={featRef}
                        initial={{ opacity: 0, y: 40 }}
                        animate={featInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 group relative rounded-[3rem] overflow-hidden border border-theme-primary/20 bg-dark-300 flex flex-col"
                    >
                        {/* Glows */}
                        <div className="absolute top-0 left-0 w-80 h-60 bg-theme-primary/10 blur-[90px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 right-0 w-52 h-52 bg-theme-secondary/6 blur-[70px] rounded-full pointer-events-none" />

                        {/* Scan shimmer */}
                        <motion.div
                            animate={{ x: ["-200%", "400%"] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                            className="absolute inset-y-0 w-24 -skew-x-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{ background: "linear-gradient(to right, transparent, rgba(248,87,42,0.06), transparent)" }}
                        />

                        <div className="relative z-10 p-10 flex flex-col flex-1">
                            {/* Top badges */}
                            <div className="flex flex-wrap items-center gap-3 mb-8">
                                <div className="flex items-center gap-2 px-4 py-1.5 rounded-xl bg-theme-primary/15 border border-theme-primary/25">
                                    <motion.div
                                        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="w-1.5 h-1.5 bg-theme-primary rounded-full"
                                    />
                                    <span className="text-[8px] font-bold uppercase tracking-[0.35em] text-theme-primary">Currently Reading</span>
                                </div>
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">{feat.id}</span>
                            </div>

                            {/* Field tag */}
                            <span className="text-[9px] font-bold text-theme-primary/60 uppercase tracking-[0.5em] block mb-2">{feat.field}</span>

                            {/* Degree */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-2">
                                {feat.degree}
                            </h3>

                            {/* Institution */}
                            <p className="text-sm font-semibold text-white/55 mb-0.5">{feat.institution}</p>
                            <p className="text-[10px] italic text-white/25 mb-6">{feat.via}</p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                                    <MapPin size={10} className="text-theme-primary/60" />
                                    <span className="text-[9px] text-white/35">{feat.location}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                                    <Calendar size={10} className="text-theme-primary/60" />
                                    <span className="text-[9px] text-white/35">{feat.period}</span>
                                </div>
                            </div>

                            {/* Grade + GPA row */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                                    <Award size={12} className="text-theme-primary" />
                                    <div>
                                        <p className="text-[6px] text-white/20 uppercase tracking-widest">Predicted Grade</p>
                                        <p className="text-xs font-bold text-white/70">{feat.grade}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-theme-primary/8 border border-theme-primary/20">
                                    <Star size={12} className="text-theme-primary" />
                                    <div>
                                        <p className="text-[6px] text-theme-primary/50 uppercase tracking-widest">GPA</p>
                                        <p className="text-xs font-bold text-theme-primary">{feat.gpa} / 4.0</p>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-white/35 leading-relaxed mb-8">
                                {feat.description}
                            </p>

                            {/* Modules */}
                            <div className="mt-auto">
                                <div className="flex items-center gap-2 mb-4">
                                    <Layers size={10} className="text-theme-primary" />
                                    <span className="text-[8px] font-bold text-theme-primary uppercase tracking-[0.4em]">Key Modules</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {feat.modules.map(mod => (
                                        <span key={mod}
                                            className="text-[8px] font-bold uppercase tracking-widest text-white/30 border border-white/[0.07] px-3 py-1.5 rounded-lg hover:text-white/50 hover:border-white/10 transition-colors duration-200">
                                            {mod}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* University footer strip */}
                            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/[0.05]">
                                <div className="w-10 h-10 rounded-xl bg-theme-primary flex items-center justify-center text-[11px] font-bold text-white shadow-[0_0_18px_rgba(248,87,42,0.4)] shrink-0">CU</div>
                                <div>
                                    <p className="text-[8px] font-bold text-theme-primary/60 uppercase tracking-[0.3em] mb-0.5">Awarded by</p>
                                    <p className="text-xs font-semibold text-white/60">Coventry University, United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Stacked strips + learning banner */}
                    <div className="lg:col-span-7 flex flex-col gap-4">

                        {/* Section label */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.5em]">Previous Qualifications</span>
                            <div className="flex-1 h-px bg-white/[0.04]" />
                        </motion.div>

                        {/* Expandable strips */}
                        {rest.map((item, i) => (
                            <QualStrip key={item.id} item={item} index={i} />
                        ))}

                        {/* Learning banner — fills remaining vertical space */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="flex-1 mt-2 relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-dark-300 flex flex-col justify-between p-8"
                        >
                            <div className="absolute top-0 right-0 w-52 h-52 bg-theme-primary/5 blur-[80px] rounded-full pointer-events-none" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-theme-primary/10 border border-theme-primary/20 flex items-center justify-center mb-5">
                                    <BookOpen size={22} className="text-theme-primary" />
                                </div>
                                <p className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.5em] mb-3">Learning Philosophy</p>
                                <p className="text-base font-bold text-white tracking-tight leading-snug mb-3">
                                    Continuous learning is the foundation of every system I build.
                                </p>
                                <p className="text-xs text-white/30 leading-relaxed">
                                    Beyond formal education, I invest in self-directed learning, open-source contribution, and hands-on projects — maintaining perpetual growth across technical and creative domains.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col gap-2 mt-6">
                                {["11+ Professional Certifications", "Self-Directed Online Study", "Real-World Project Portfolio"].map(label => (
                                    <div key={label} className="flex items-center gap-3 py-2 border-t border-white/[0.04]">
                                        <Zap size={10} className="text-theme-primary/50 shrink-0" />
                                        <span className="text-[9px] font-bold text-white/30 uppercase tracking-[0.25em]">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
