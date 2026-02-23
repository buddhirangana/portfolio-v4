"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck, Fingerprint, Lock, Shield, Activity, Database, ChevronDown, ChevronUp, Zap } from "lucide-react";

const CERTIFICATIONS = [
    {
        title: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#",
        id: "AWS-SA-12345",
        hash: "0x882A...F92",
        status: "VALIDATED"
    },
    {
        title: "Meta Front-End Developer Professional Certificate",
        issuer: "Coursera / Meta",
        date: "2023",
        link: "#",
        id: "META-FE-9876",
        hash: "0x221B...X1C",
        status: "CERTIFIED"
    },
    {
        title: "Google Cloud Digital Leader",
        issuer: "Google Cloud",
        date: "2023",
        link: "#",
        id: "GCP-DL-5544",
        hash: "0x994D...K99",
        status: "ACTIVE"
    },
    {
        title: "Google Analytics Individual Qualification",
        issuer: "Google",
        date: "2023",
        link: "#",
        id: "GAIQ-7712",
        hash: "0x33AC...P71",
        status: "VALIDATED"
    },
    {
        title: "HubSpot Content Marketing Certification",
        issuer: "HubSpot Academy",
        date: "2023",
        link: "#",
        id: "HUB-CM-4421",
        hash: "0x77FF...B30",
        status: "CERTIFIED"
    },
    {
        title: "Digital Marketing Fundamentals",
        issuer: "Google Digital Garage",
        date: "2022",
        link: "#",
        id: "GDG-DM-8831",
        hash: "0xA12E...S04",
        status: "ACTIVE"
    },
    {
        title: "WordPress Development Certification",
        issuer: "Udemy / Automattic",
        date: "2022",
        link: "#",
        id: "WP-DEV-3390",
        hash: "0xD99C...W88",
        status: "VALIDATED"
    },
    {
        title: "JavaScript Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        date: "2022",
        link: "#",
        id: "FCC-JS-6614",
        hash: "0xBB44...J22",
        status: "CERTIFIED"
    },
    {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        date: "2021",
        link: "#",
        id: "FCC-RWD-2200",
        hash: "0x5C1A...R55",
        status: "ACTIVE"
    },
    {
        title: "PHP & MySQL Web Development",
        issuer: "Udemy",
        date: "2021",
        link: "#",
        id: "UDM-PHP-9902",
        hash: "0x6E3B...M14",
        status: "VALIDATED"
    },
    {
        title: "SEO Fundamentals",
        issuer: "SEMrush Academy",
        date: "2021",
        link: "#",
        id: "SEM-SEO-1145",
        hash: "0x8A7D...Q39",
        status: "CERTIFIED"
    },
];

const INITIAL_COUNT = 3;

export default function CertificationsSection() {
    const sectionRef = useRef(null);
    const [showAll, setShowAll] = useState(false);

    const visibleCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, INITIAL_COUNT);
    const hiddenCount = CERTIFICATIONS.length - INITIAL_COUNT;

    return (
        <section id="certifications" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background Architecture */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

            {/* Industrial Decals */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.01] text-[15rem] font-bold select-none pointer-events-none uppercase">
                Verification
            </div>

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Shield size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Professional Verification</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
                            Credentials &amp; <span className="text-white/20 italic font-light">Seals</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-6 text-right"
                    >
                        <div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">Status: Encrypted</div>
                            <div className="text-xs font-mono text-theme-primary">0X_VAL_PROTOCOL</div>
                        </div>
                        <Database size={32} className="text-theme-primary/20" />
                    </motion.div>
                </div>

                {/* Counter Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Zap size={12} className="text-theme-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            {CERTIFICATIONS.length} Credentials Indexed
                        </span>
                        <span className="ml-2 text-[10px] font-bold text-theme-primary font-mono">
                            [{showAll ? CERTIFICATIONS.length : INITIAL_COUNT} / {CERTIFICATIONS.length}]
                        </span>
                    </div>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {visibleCerts.map((cert, i) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i < INITIAL_COUNT ? 0 : (i - INITIAL_COUNT) * 0.08,
                                    layout: { duration: 0.4 }
                                }}
                            >
                                <Card cert={cert} index={i} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View More / Show Less Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-16"
                >
                    <motion.button
                        onClick={() => setShowAll((prev) => !prev)}
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative flex items-center gap-5 px-12 py-6 rounded-[2rem] border border-white/10 bg-white/[0.03] hover:border-theme-primary/40 hover:bg-theme-primary/5 transition-all duration-500 overflow-hidden"
                    >
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <span className="relative z-10 flex flex-col items-start">
                            <span className="text-[8px] font-bold text-theme-primary uppercase tracking-[0.5em] mb-1">
                                {showAll ? "Collapse_View" : `+${hiddenCount}_More_Available`}
                            </span>
                            <span className="text-sm font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-[0.2em]">
                                {showAll ? "Show Less Credentials" : "View All Certifications"}
                            </span>
                        </span>

                        <motion.div
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 group-hover:border-theme-primary/30 group-hover:bg-theme-primary/10 transition-all duration-500 flex items-center justify-center text-white/30 group-hover:text-theme-primary"
                        >
                            <ChevronDown size={20} />
                        </motion.div>
                    </motion.button>
                </motion.div>

                {/* Progress Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center mt-8 gap-2"
                >
                    {CERTIFICATIONS.map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                width: i < (showAll ? CERTIFICATIONS.length : INITIAL_COUNT) ? 24 : 6,
                                backgroundColor: i < (showAll ? CERTIFICATIONS.length : INITIAL_COUNT)
                                    ? "var(--theme-primary)"
                                    : "rgba(255,255,255,0.1)"
                            }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            className="h-[3px] rounded-full"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function Card({ cert, index }: { cert: any; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-[500px]"
        >
            <div className="absolute inset-0 glass-card-premium rounded-[3rem] border border-white/5 group-hover:border-theme-primary/30 transition-colors duration-700 overflow-hidden">
                {/* Holographic Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Scanning Beam */}
                <motion.div
                    animate={{ y: [-500, 500] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-theme-primary/40 shadow-[0_0_15px_rgba(248,87,42,1)] opacity-0 group-hover:opacity-30"
                />

                <div className="p-12 h-full flex flex-col justify-between" style={{ transform: "translateZ(75px)" }}>
                    {/* Header Seal */}
                    <div className="flex justify-between items-start">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-theme-primary group-hover:bg-theme-primary group-hover:text-white transition-all duration-500">
                            <Award size={28} />
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-1">
                                <Activity size={10} className="text-theme-primary animate-pulse" />
                                <span className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.3em]">{cert.status}</span>
                            </div>
                            <span className="text-[8px] font-mono text-white/20">{cert.hash}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4 block">Professional_Credential</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-theme-primary transition-colors tracking-tighter leading-tight">
                            {cert.title}
                        </h3>
                        <p className="text-sm font-medium text-white/40 mb-10 leading-relaxed font-poppins">
                            {cert.issuer}
                        </p>

                        <div className="flex flex-col gap-4 pt-10 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-white/20">
                                    <Calendar size={14} className="text-theme-primary" />
                                    ISSUED: {cert.date}
                                </div>
                                <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-white/20 text-right">
                                    <Fingerprint size={14} className="text-theme-primary" />
                                    ID: {cert.id}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        whileHover={{ x: 5 }}
                        href={cert.link}
                        className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary group/link mt-8"
                    >
                        VERIFY_CREDENTIAL
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Decorative Background Decal */}
                <ShieldCheck size={220} className="absolute -bottom-24 -right-24 text-white/[0.01] -rotate-12 group-hover:rotate-0 transition-all duration-1000" />
                <Lock size={150} className="absolute -top-12 -left-12 text-white/[0.01] rotate-12 group-hover:rotate-0 transition-all duration-1000" />
            </div>
        </motion.div>
    );
}
