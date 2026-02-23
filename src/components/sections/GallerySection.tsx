"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ExternalLink, MapPin, Calendar, Tag, Images, ZoomIn, ChevronRight } from "lucide-react";

// ─── Gallery Data ──────────────────────────────────────────────────────────────
const GALLERY_ITEMS = [
    {
        id: "EVT-001",
        title: "AWS Community Day Sri Lanka",
        location: "Colombo, Sri Lanka",
        date: "Feb 2024",
        tag: "CONFERENCE",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
        span: "col-span-2 row-span-2", // large feature card
    },
    {
        id: "EVT-002",
        title: "DigiFox Product Launch",
        location: "Colombo, Sri Lanka",
        date: "Dec 2023",
        tag: "LAUNCH_EVENT",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
    },
    {
        id: "EVT-003",
        title: "Google DevFest 2023",
        location: "Colombo, Sri Lanka",
        date: "Nov 2023",
        tag: "DEVFEST",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
    },
    {
        id: "EVT-004",
        title: "TEC ROOM Meetup Vol. 3",
        location: "Kandy, Sri Lanka",
        date: "Sep 2023",
        tag: "COMMUNITY",
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
    },
    {
        id: "EVT-005",
        title: "Digital Marketing Summit",
        location: "Colombo, Sri Lanka",
        date: "Aug 2023",
        tag: "SUMMIT",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
    },
    {
        id: "EVT-006",
        title: "Startup Weekend Colombo",
        location: "Colombo, Sri Lanka",
        date: "Jul 2023",
        tag: "HACKATHON",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
        span: "col-span-2 row-span-1", // wide card
    },
    {
        id: "EVT-007",
        title: "UX Design Workshop",
        location: "Remote / Online",
        date: "Jun 2023",
        tag: "WORKSHOP",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
    },
    {
        id: "EVT-008",
        title: "Sri Lanka Tech Conference",
        location: "Colombo, Sri Lanka",
        date: "Mar 2023",
        tag: "CONFERENCE",
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
        span: "col-span-1 row-span-1",
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
                            <div className="flex items-center gap-4 mt-3">
                                <div className="flex items-center gap-2">
                                    <MapPin size={12} className="text-theme-primary" />
                                    <span className="text-xs text-white/50">{item.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar size={12} className="text-theme-primary" />
                                    <span className="text-xs text-white/50">{item.date}</span>
                                </div>
                            </div>
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
function GalleryCard({ item, index }: { item: typeof GALLERY_ITEMS[0]; index: number }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                viewport={{ once: true, margin: "-60px" }}
                className={`${item.span} group relative overflow-hidden rounded-[2.5rem] cursor-pointer border border-white/5 hover:border-theme-primary/40 transition-colors duration-500`}
                onClick={() => setLightboxOpen(true)}
            >
                {/* Image */}
                <div className="absolute inset-0">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 scale-105"
                    />
                </div>

                {/* Ambient base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover overlay tint */}
                <div className="absolute inset-0 bg-theme-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top-left tag */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-xl bg-black/50 border border-white/8 backdrop-blur-md">
                        <span className="text-[7px] font-bold uppercase tracking-[0.35em] text-theme-primary">{item.tag}</span>
                    </div>
                </div>

                {/* Top-right zoom hint */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute top-5 right-5 w-10 h-10 rounded-xl bg-black/50 border border-white/8 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <ZoomIn size={15} className="text-white/70" />
                </motion.div>

                {/* Bottom content */}
                <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {/* ID chip */}
                    <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                        <div className="w-1 h-1 rounded-full bg-theme-primary animate-pulse" />
                        <span className="text-[7px] font-mono text-white/30 uppercase tracking-widest">{item.id}</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tighter leading-tight mb-3 drop-shadow-lg">
                        {item.title}
                    </h3>

                    <div className="flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-75">
                        <div className="flex items-center gap-2">
                            <MapPin size={11} className="text-theme-primary shrink-0" />
                            <span className="text-[10px] font-medium text-white/50">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={11} className="text-theme-primary shrink-0" />
                            <span className="text-[10px] font-medium text-white/50">{item.date}</span>
                        </div>
                    </div>
                </div>

                {/* Scanning beam on hover */}
                <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none -skew-x-12 opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </motion.div>

            <AnimatePresence>
                {lightboxOpen && (
                    <Lightbox item={item} onClose={() => setLightboxOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
}

// ─── Main Section ──────────────────────────────────────────────────────────────
export default function GallerySection() {
    const sectionRef = useRef(null);

    return (
        <section id="gallery" ref={sectionRef} className="py-32 relative overflow-hidden bg-dark-400">
            {/* Background */}
            <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />
            <div className="absolute right-[-2%] top-0 text-[15rem] font-bold text-white/[0.01] pointer-events-none select-none uppercase rotate-90 whitespace-nowrap">
                VISUAL_LOG
            </div>

            <div className="section-container relative z-10">

                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <Camera size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Visual Archive</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none mb-4">
                            Event <span className="text-white/20 italic font-light">Gallery</span>
                        </h2>
                        <p className="text-base text-white/30 font-medium max-w-md leading-relaxed mt-4">
                            Moments captured across conferences, workshops, product launches, and community events.
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
                                {GALLERY_ITEMS.length} Frames Indexed
                            </span>
                        </div>
                        <div className="text-xs font-mono text-theme-primary">CAM_FEED_ACTIVE</div>
                    </motion.div>
                </div>

                {/* ── Bento Grid ── */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4 md:gap-6">
                    {GALLERY_ITEMS.map((item, i) => (
                        <GalleryCard key={item.id} item={item} index={i} />
                    ))}
                </div>

                {/* ── Footer CTA ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-20 flex justify-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        href="#"
                        className="group flex items-center gap-5 px-12 py-6 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:border-theme-primary/40 hover:bg-theme-primary/5 transition-all duration-500"
                    >
                        <Camera size={16} className="text-theme-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">
                            View Full Visual Archive
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 group-hover:bg-theme-primary group-hover:border-theme-primary flex items-center justify-center transition-all duration-500">
                            <ChevronRight size={16} className="text-white/30 group-hover:text-white transition-colors" />
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
