"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { Camera, ExternalLink, Images, ZoomIn, ChevronRight } from "lucide-react";

// ─── Gallery Data ──────────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
    {
        id: "GAL-015",
        title: "AURA '26 - Igniting Talent, Celebrating Creativity",
        tag: "CONCERT",
        image: "/images/gallery/gallery-15.webp",
        span: "col-span-2 row-span-2", // large feature card
    },
    {
        id: "GAL-014",
        title: "Clean Mind, Clean Beach - Beach Cleaning Programme",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-14.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-013",
        title: "SICT Diamond Night 2025",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-13.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-012",
        title: "Viva Voice & Final Project Demonstration - BSc (Hons) in IT 2023/A",
        tag: "PRESENTATION",
        image: "/images/gallery/gallery-12.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-011",
        title: "Nagananda Kowul Wasantha Udanaya 2025",
        tag: "FESTIVAL",
        image: "/images/gallery/gallery-11.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-010",
        title: "Free One Day Workshop - Cyber Crew of SICT",
        tag: "WORKSHOP",
        image: "/images/gallery/gallery-10.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-009",
        title: "Diploma and Certificate Awarding Ceremony at NIIBS - 2024",
        tag: "AWARDING CEREMONY",
        image: "/images/gallery/gallery-9.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-008",
        title: "Batch Bash 2024 - 1st Year Ending Celebration",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-8.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-007",
        title: "Grand opening of the NIIBS Convention Center's official website",
        tag: "PRODUCT LAUNCHES",
        image: "/images/gallery/gallery-7.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-006",
        title: "Leadership & Soft Skills Development Outbound Training Program for BSc (Hons) in IT Students",
        tag: "WORKSHOP",
        image: "/images/gallery/gallery-6.webp",
        span: "col-span-2 row-span-1", // wide card
    },
    {
        id: "GAL-005",
        title: "NIIBS Open Day 2023",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-5.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-004",
        title: "Inaugural Meeting of Cyber Crew of SICT",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-4.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-003",
        title: "Batch Trip of BSc IT 2023/A",
        tag: "COMMUNITY EVENT",
        image: "/images/gallery/gallery-3.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-002",
        title: "INDO Sri'23 - Indu Sri Lanka Cultural Concert",
        tag: "CONCERT",
        image: "/images/gallery/gallery-2.webp",
        span: "col-span-1 row-span-1",
    },
    {
        id: "GAL-001",
        title: "Soft Skills+ 2017 Programme @ SLIIT",
        tag: "WORKSHOP",
        image: "/images/gallery/gallery-1.webp",
        span: "col-span-2 row-span-1", // wide card
    },
];

// ─── Lightbox Component ────────────────────────────────────────────────────────
function Lightbox({ item, onClose }: { item: typeof GALLERY_ITEMS[0]; onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
        >
            <motion.div
                initial={{ scale: 0.85, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full rounded-[3rem] overflow-hidden border border-white/10"
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[70vh] object-cover"
                />
                {/* Info Bar */}
                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="flex items-end justify-between gap-4">
                        <div>
                            <span className="text-[9px] font-bold text-theme-primary uppercase tracking-[0.4em] block mb-2">[{item.tag}]</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{item.title}</h3>
                        </div>
                        <div className="text-[9px] font-mono text-white/20 shrink-0">{item.id}</div>
                    </div>
                </div>
                {/* Close hint */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-theme-primary/20 hover:border-theme-primary/40 transition-all backdrop-blur-md"
                >
                    <span className="text-lg font-light leading-none">×</span>
                </button>
            </motion.div>
        </motion.div>
    );
}

// ─── Gallery Card ──────────────────────────────────────────────────────────────
function GalleryCard({ item, index, onOpen }: { item: typeof GALLERY_ITEMS[0]; index: number; onOpen: (item: typeof GALLERY_ITEMS[0]) => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-60px" }}
            className={`${item.span} group relative overflow-hidden rounded-[2.5rem] cursor-pointer border border-white/5 hover:border-theme-primary/40 transition-colors duration-500`}
            onClick={() => onOpen(item)}
        >
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 scale-105"
                />
            </div>

            {/* Ambient base gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover overlay tint */}
            <div className="absolute inset-0 bg-theme-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Top-left tag */}
            <div className="absolute top-5 left-5 flex items-center gap-2">
                <div className="px-3 py-1 bg-dark-400/60 backdrop-blur-md border border-white/5 rounded-full">
                    <span className="text-[7px] font-bold uppercase tracking-[0.3em] text-white/40">{item.tag}</span>
                </div>
            </div>

            {/* Top-right zoom hint */}
            <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-dark-400/60 border border-white/5 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ZoomIn size={15} className="text-white/70" />
            </motion.div>

            {/* Bottom content */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                {/* ID chip */}
                <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="w-1 h-1 rounded-full bg-theme-primary animate-pulse" />
                    <span className="text-[7px] font-mono text-theme-primary uppercase tracking-widest">{item.id}</span>
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tighter leading-tight mb-3 drop-shadow-lg">
                    {item.title}
                </h3>
            </div>

            {/* Scanning beam on hover */}
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity"
            />
        </motion.div>
    );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function GallerySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleCount, setVisibleCount] = useState(5);
    const [selectedItem, setSelectedItem] = useState<typeof GALLERY_ITEMS[0] | null>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });

    // Smooth reveal for technical decals
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    const visibleItems = GALLERY_ITEMS.slice(0, visibleCount);
    const hasMore = visibleCount < GALLERY_ITEMS.length;

    return (
        <section id="gallery" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
            {/* Foundry Background Decals */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Gallery
            </motion.div>

            <div className="section-container relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 lg:mb-24 gap-12 text-center md:text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <Camera size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">COMMUNITY ENGAGEMENT</span>
                        </div>
                        <h2 className="relative text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none pb-4">
                            Event <span className="text-white/20 italic font-light">Gallery</span>
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute bottom-0 left-0 h-[3px] w-full md:w-40 origin-left bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent rounded-full shadow-[0_0_12px_rgba(248,87,42,0.8)]"
                            />
                        </h2>
                        <p className="text-base text-white/30 font-medium max-w-md leading-relaxed mt-4">
                            Moments captured across conferences, workshops, product launches and community events.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-end gap-4"
                    >
                        <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/5 bg-white/[0.02]">
                            <Images size={14} className="text-theme-primary" />
                            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/30">
                                {GALLERY_ITEMS.length} SELECTED HIGHLIGHTS
                            </span>
                        </div>
                        <div className="text-xs font-mono text-theme-primary">LATEST HIGHLIGHTS</div>
                    </motion.div>
                </div>

                {/* ── Bento Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-6">
                    <AnimatePresence>
                        {visibleItems.map((item, i) => (
                            <GalleryCard
                                key={item.id}
                                item={item}
                                index={i}
                                onOpen={(item) => setSelectedItem(item)}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                {/* ── Footer CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setVisibleCount(hasMore ? GALLERY_ITEMS.length : 4)}
                        className="group flex items-center gap-4 px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-theme-primary/40 hover:bg-theme-primary/5 transition-all duration-500"
                    >
                        <div className="relative">
                            <Camera size={14} className={`text-theme-primary transition-transform duration-500 ${hasMore ? "group-hover:rotate-12" : "rotate-180 group-hover:rotate-[192deg]"}`} />
                            {hasMore && (
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 bg-theme-primary/20 rounded-full blur-sm"
                                />
                            )}
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
                            {hasMore ? "Load More Highlights" : "Show Less"}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 group-hover:bg-theme-primary group-hover:border-theme-primary flex items-center justify-center transition-all duration-500">
                            <ChevronRight size={14} className={`text-white/30 group-hover:text-white transition-transform duration-500 ${hasMore ? "rotate-90" : "-rotate-90"}`} />
                        </div>
                    </motion.button>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <Lightbox
                        item={selectedItem}
                        onClose={() => setSelectedItem(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
