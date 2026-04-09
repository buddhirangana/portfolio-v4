"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence, useScroll } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck, Fingerprint, Lock, Shield, Activity, Database, ChevronDown, ChevronUp, Zap } from "lucide-react";

const CERTIFICATIONS = [
    {
        title: "Postman API Fundamentals Student Expert",
        issuer: "Postman",
        date: "Jan 2026",
        link: "https://badgr.com/public/assertions/JUvM1l1TSFe6Fe-pEuW4vA",
        id: "69738df7fd...ab9a41d",
        hash: "69738df7fd...ab9a41d",
        status: "VERIFIED",
        image: "/images/certifications/postman-api-fundamentals-student-expert.webp"
    },
    {
        title: "Digital Awareness",
        issuer: "Cisco Networking Academy",
        date: "Sep 2025",
        link: "https://www.credly.com/badges/5efb32cb-1dcd-4832-8940-305b8a10aefd",
        id: "5efb32cb...305b8a10aefd",
        hash: "5efb32cb...305b8a10aefd",
        status: "VERIFIED",
        image: "/images/certifications/digital-awareness.webp"
    },
    {
        title: "Computer Hardware Basics",
        issuer: "Cisco Networking Academy",
        date: "Sep 2025",
        link: "https://www.credly.com/badges/8dbc235a-b24d-41ae-b5a8-c1cba91b73dc",
        id: "8dbc235a...c1cba91b73dc",
        hash: "8dbc235a...c1cba91b73dc",
        status: "VERIFIED",
        image: "/images/certifications/computer-hardware-basics.webp"
    },
    {
        title: "AI Security & Governance",
        issuer: "Securiti AI",
        date: "Sep 2025",
        link: "https://education.securiti.ai/verification/1395F77A2-1395F52E9-1333B5A4A/",
        id: "1395F77A2...1333B5A4A",
        hash: "1395F77A2...1333B5A4A",
        status: "CERTIFIED",
        image: "/images/certifications/ai-security-governance.webp"
    },
    {
        title: "Cisco IT Essentials",
        issuer: "Cisco Networking Academy",
        date: "Aug 2025",
        link: "https://www.credly.com/badges/53c17015-fd35-45ec-b193-b2966c0bec14",
        id: "53c17015...b2966c0bec14",
        hash: "53c17015...b2966c0bec14",
        status: "VERIFIED",
        image: "/images/certifications/cisco-it-essentials.webp"
    },
    {
        title: "Introduction to Digital Journalism",
        issuer: "Reuters",
        date: "Feb 2023",
        link: "https://reutersdigitaljournalism.com/course_completed_certificate/246916.html",
        id: "246916",
        hash: "246916",
        status: "CERTIFIED",
        image: "/images/certifications/introduction-to-digital-journalism.webp"
    },
    {
        title: "Professional Practice in Software Development",
        issuer: "University of Moratuwa / DP Education",
        date: "Aug 2022",
        link: "https://drive.google.com/file/d/1TMA7iZcbWSd608nHsCGjR1CO5H5mABkc/view",
        id: "fHJGUtXJR3",
        hash: "fHJGUtXJR3",
        status: "CERTIFIED",
        image: "/images/certifications/professional-practice-in-software-development.webp"
    },
    {
        title: "Server-side Web Programming",
        issuer: "University of Moratuwa / DP Education",
        date: "Jul 2022",
        link: "https://drive.google.com/file/d/1K4vs5CjxDZALKBYhsr9zas4Gg1jXVixj/view",
        id: "33WK5SLfPR",
        hash: "33WK5SLfPR",
        status: "CERTIFIED",
        image: "/images/certifications/server-side-web-programming.webp"
    },
    {
        title: "Front-End Web Development",
        issuer: "University of Moratuwa / DP Education",
        date: "Jul 2022",
        link: "https://drive.google.com/file/d/1RDm4NsukPDh0xgHgbmzDj29lEbWUSEJR/view",
        id: "YptzGOmmok",
        hash: "YptzGOmmok",
        status: "CERTIFIED",
        image: "/images/certifications/front-end-web-development.webp"
    },
    {
        title: "Python Programming",
        issuer: "University of Moratuwa / DP Education",
        date: "Jul 2022",
        link: "https://drive.google.com/file/d/1QhjHtvTft606XIcPBpIFqH1p1wRisVYC/view",
        id: "1WDXRYHBHF",
        hash: "1WDXRYHBHF",
        status: "CERTIFIED",
        image: "/images/certifications/python-programming.webp"
    },
    {
        title: "Web Design for Beginners",
        issuer: "University of Moratuwa / DP Education",
        date: "Jul 2022",
        link: "https://drive.google.com/file/d/1PiEMKlTQAubD8edGp8BPsCvkUCuT8IU5/view",
        id: "C2CIR9NXbb",
        hash: "C2CIR9NXbb",
        status: "CERTIFIED",
        image: "/images/certifications/web-design-for-beginners.webp"
    },
    {
        title: "Python for Beginners",
        issuer: "University of Moratuwa / DP Education",
        date: "Jul 2022",
        link: "https://drive.google.com/file/d/1U2vGYjjMhADpXIz9NkTkYi5QYzZyGo3a/view",
        id: "n6AS4aJDGh",
        hash: "n6AS4aJDGh",
        status: "CERTIFIED",
        image: "/images/certifications/python-for-beginners.webp"
    },
    {
        title: "Web Development Fundamentals",
        issuer: "Sololearn",
        date: "May 2022",
        link: "https://www.sololearn.com/Certificate/CT-CH2OXBBA/pdf",
        id: "#1141-21877333",
        hash: "#1141-21877333",
        status: "CERTIFIED",
        image: "/images/certifications/web-development-fundamentals.webp"
    },
    {
        title: "Coding for Marketers Course",
        issuer: "Sololearn",
        date: "Jul 2021",
        link: "https://www.sololearn.com/Certificate/CT-KBGGVN3M/pdf",
        id: "#1165-21877333",
        hash: "#1165-21877333",
        status: "CERTIFIED",
        image: "/images/certifications/coding-for-marketers-course.webp"
    },
    {
        title: "Google Analytics for Beginners",
        issuer: "Google Digital Academy (Skillshop)",
        date: "Jun 2021",
        link: "https://analytics.google.com/analytics/academy/certificate/xAe00xsdSlWjeska19W_3w",
        id: "xAe00xsdSlWjeska19W_3w",
        hash: "xAe00xsdSlWjeska19W_3w",
        status: "CERTIFIED",
        image: "/images/certifications/google-analytics-for-beginners.webp"
    },
    {
        title: "Marketing on Facebook",
        issuer: "LinkedIn Learning",
        date: "Jun 2021",
        link: "https://drive.google.com/file/d/15LfN7KSpOzK7t3itcM5fQFjrG0jUGB5y/view?usp=drivesdk",
        id: "AYQmhVQkD...P8RaAEj19",
        hash: "AYQmhVQkD...P8RaAEj19",
        status: "CERTIFIED",
        image: "/images/certifications/marketing-on-facebook.webp"
    },
    {
        title: "Introduction to IT & Cybersecurity",
        issuer: "Cybrary",
        date: "Jun 2021",
        link: "https://app.cybrary.it/courses/api/certificate/CC-1592e6fa-6636-4a4e-ab9d-165a112d5b7a/view",
        id: "CC-1592e6fa...5b7a",
        hash: "CC-1592e6fa...5b7a",
        status: "CERTIFIED",
        image: "/images/certifications/introduction-to-it-cybersecurity.webp"
    },
    {
        title: "Fundamentals of Digital Marketing",
        issuer: "Google Digital Garage",
        date: "Jun 2021",
        link: "https://learndigital.withgoogle.com/link/1qsdpcedm9s",
        id: "CEV Y5Z ETW",
        hash: "CEV Y5Z ETW",
        status: "CERTIFIED",
        image: "/images/certifications/fundamentals-of-digital-marketing.webp"
    },
];

const INITIAL_COUNT = 3;

export default function CertificationsSection() {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const visibleCerts = showAll ? CERTIFICATIONS : CERTIFICATIONS.slice(0, INITIAL_COUNT);
    const hiddenCount = CERTIFICATIONS.length - INITIAL_COUNT;

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Smooth reveal for technical decals
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    return (
        <section id="certifications" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400">
            {/* Background Architecture */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

            {/* Foundry Background Decals */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Courses
            </motion.div>

            <div className="section-container relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-10 mb-12 lg:mb-24 text-center md:text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <Shield size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Professional Credentials</span>
                        </div>
                        <h2 className="relative text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4 pb-4">
                            Courses &amp; <span className="text-white/20 italic font-light">Certifications</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-0 left-0 h-[3px] w-full md:w-40 origin-left bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent rounded-full shadow-[0_0_12px_rgba(248,87,42,0.8)]"
                            />
                        </h2>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8 text-center md:text-right"
                    >
                        <div>
                            <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">VERIFIED // ISSUED:</div>
                            <div className="text-xs font-mono text-theme-primary">2021 - 2026</div>
                        </div>
                        <Database size={32} className="text-theme-primary/20" />
                    </motion.div>
                </div>

                {/* Counter Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center md:justify-start items-center gap-4 mb-12"
                >
                    <div className="flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-white/5 bg-white/[0.02]">
                        <Zap size={12} className="text-theme-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">
                            {CERTIFICATIONS.length} EARNED CERTIFICATIONS
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
                                <Card cert={cert} index={i} onImageClick={(img) => setSelectedImage(img)} />
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
                        className="group relative flex items-center gap-5 px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-theme-primary/40 hover:bg-theme-primary/5 transition-all duration-500 overflow-hidden"
                    >
                        {/* Shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        <span className="relative z-10 flex flex-col items-start">
                            <span className="text-[7px] font-bold text-theme-primary uppercase tracking-[0.5em] mb-1">
                                {showAll ? "Collapse View" : `+${hiddenCount} More Available`}
                            </span>
                            <span className="text-[11px] md:text-xs font-bold text-white/60 group-hover:text-white transition-colors uppercase tracking-[0.2em]">
                                {showAll ? "Show Less" : "View All Credentials"}
                            </span>
                        </span>

                        <motion.div
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 group-hover:border-theme-primary/30 group-hover:bg-theme-primary/10 transition-all duration-500 flex items-center justify-center text-white/30 group-hover:text-theme-primary"
                        >
                            <ChevronDown size={18} />
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

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
            </AnimatePresence>
        </section>
    );
}

function Card({ cert, index, onImageClick }: { cert: any; index: number; onImageClick: (img: string) => void }) {
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
            className="group relative h-[580px]"
        >
            <div className="absolute inset-0 glass-card-premium rounded-[3rem] border border-white/5 group-hover:border-theme-primary/30 transition-colors duration-700 overflow-hidden">
                {/* Holographic Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Scanning Beam */}
                <motion.div
                    animate={{ y: [-580, 580] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-theme-primary/40 shadow-[0_0_15px_rgba(248,87,42,1)] opacity-0 group-hover:opacity-30"
                />

                <div className="p-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(75px)" }}>
                    {/* Header Seal */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-theme-primary group-hover:bg-theme-primary group-hover:text-white transition-all duration-500">
                            <Award size={24} />
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center gap-2 mb-1">
                                <Activity size={10} className="text-theme-primary animate-pulse" />
                                <span className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.3em]">{cert.status}</span>
                            </div>
                            <span className="text-[8px] font-mono text-white/20">{cert.hash}</span>
                        </div>
                    </div>

                    {/* Image Preview */}
                    <div
                        onClick={() => onImageClick(cert.image)}
                        className="relative w-full aspect-video md:aspect-auto md:h-44 mb-8 rounded-2xl overflow-hidden border border-white/5 bg-white/5 group-hover:border-theme-primary/20 transition-colors cursor-zoom-in"
                    >
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800&auto=format&fit=crop";
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-400/80 to-transparent opacity-60" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="px-4 py-2 bg-theme-primary/10 backdrop-blur-md rounded-full border border-theme-primary/20 text-theme-primary text-[8px] font-bold uppercase tracking-widest">
                                Show Credential
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.4em] mb-4 block">Professional Credential</span>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-theme-primary transition-colors tracking-tighter leading-tight">
                            {cert.title}
                        </h3>
                        <p className="text-xs font-medium text-white/40 mb-6 leading-relaxed font-poppins">
                            {cert.issuer}
                        </p>

                        <div className="flex flex-col gap-4 pt-6 border-t border-white/5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-widest text-white/20">
                                    <Calendar size={12} className="text-theme-primary" />
                                    ISSUED: {cert.date}
                                </div>
                                <div className="flex items-center gap-3 text-[8px] font-bold uppercase tracking-widest text-white/20 text-right">
                                    <Fingerprint size={12} className="text-theme-primary" />
                                    ID: {cert.id}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.a
                        whileHover={{ x: 5 }}
                        href={cert.link}
                        className="inline-flex items-center gap-4 text-[9px] font-bold uppercase tracking-[0.5em] text-theme-primary group/link mt-6"
                    >
                        VERIFY CREDENTIAL
                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Decorative Background Decal */}
                <ShieldCheck size={180} className="absolute -bottom-16 -right-16 text-white/[0.01] -rotate-12 group-hover:rotate-0 transition-all duration-1000" />
            </div>
        </motion.div>
    );
}

function ImageModal({ image, onClose }: { image: string | null; onClose: () => void }) {
    if (!image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-dark-400/90 backdrop-blur-xl cursor-zoom-out"
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full aspect-[4/3] md:aspect-[16/11] glass-card-premium rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl"
            >
                <img
                    src={image}
                    alt="Certificate"
                    className="w-full h-full object-contain p-2 md:p-4"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop";
                    }}
                />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-theme-primary/20 hover:border-theme-primary/40 transition-all backdrop-blur-md"
                >
                    <span className="text-lg font-light leading-none">×</span>
                </button>

                {/* Scanner Effect */}
                <motion.div
                    animate={{ y: [-1000, 1000] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-px bg-theme-primary/20 shadow-[0_0_20px_rgba(248,87,42,0.5)]"
                />
            </motion.div>
        </motion.div>
    );
}
