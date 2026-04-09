"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, AnimatePresence, LayoutGroup, useInView, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Plus, Globe, Database, Command, Layers, Monitor, Cpu, Palette, Figma } from "lucide-react";

// ─── Filter Definitions ────────────────────────────────────────────────────────
type FilterKey = "all" | "web" | "app" | "uiux";

const FILTERS: { key: FilterKey; label: string; tag: string; icon: React.ElementType }[] = [
    { key: "all", label: "All", tag: "ALL", icon: Layers },
    { key: "web", label: "Web", tag: "WEB", icon: Monitor },
    { key: "app", label: "App", tag: "APP", icon: Cpu },
    { key: "uiux", label: "UI/UX", tag: "UI/UX", icon: Palette },
];

// ─── Projects Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        title: "Movie Search - Find Your Favorite Films",
        desc: "Movie Search is a web application that allows users to search for movies and get detailed information about them. This project uses the OMDB API to fetch movie data and display it in a user-friendly interface.",
        tech: ["HTML", "CSS", "JavaScript", "OMDB API"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://movie-search-ten-brown.vercel.app/",
        github: "https://github.com/buddhirangana/movie-search",
        image: "/images/projects/movie-search-img.webp"
    },
    {
        title: "Spendo - An Expense Tracker App for Android",
        desc: "Spendo is a modern, intuitive Android application designed to help users track their daily expenses and manage their personal finances. Built with Kotlin and Firebase, it offers a seamless experience for staying on top of your budget in real-time.",
        tech: ["Kotlin", "Android Studio", "Firebase"],
        category: "APPLICATION",
        filter: "app" as FilterKey,
        link: "https://github.com/buddhirangana/spendo-app/releases/tag/v1.0",
        github: "https://github.com/buddhirangana/spendo-app",
        image: "/images/projects/spendo-app-img.webp"
    },
    {
        title: "Fruit Classifier - AI Powered Image Recognition App",
        desc: "Fruit Classifier is a machine learning project that leverages deep learning techniques to classify different types of fruits. This project uses a convolutional neural network (CNN) to process images of fruits and predict their category.",
        tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "http://fruit-classifier-bv1.streamlit.app/",
        github: "https://github.com/buddhirangana/fruit-classifier",
        image: "/images/projects/fruit-classifier-img.webp"
    },
    {
        title: "Hostel Management System - Web based",
        desc: "Built a comprehensive web application to automate and digitalize hostel administration. Utilizing PHP and MySQL, this full-stack academic project simplifies facility management, student tracking and daily tasks for administrative staff.",
        tech: ["PHP", "JavaScript", "MySQL", "Bootstrap", "PayHere"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://hms.digifox.lk/",
        image: "/images/projects/hms-web-img.webp"
    },
    {
        title: "Spa Ceylon App",
        desc: "A simple Android application built using Kotlin, inspired by the Spa Ceylon – Ayurveda Wellness brand. This mini project demonstrates basic Android UI design and user navigation between multiple screens.",
        tech: ["Kotlin", "Android Studio"],
        category: "APPLICATION",
        filter: "app" as FilterKey,
        github: "https://github.com/buddhirangana/spa-ceylon-app",
        image: "/images/projects/spa-ceylon-app-img.webp"
    },
    {
        title: "Online Bus Seat Booking App",
        desc: "This Online Bus Seat Booking App design is perfect for modernizing the way people reserve bus tickets. It combines functionality, user-friendliness, and clean aesthetics to provide a top-notch booking solution for travelers and operators.",
        tech: ["Figma", "Photoshop"],
        category: "UI/UX DESIGN",
        filter: "uiux" as FilterKey,
        figma: "https://www.figma.com/community/file/1449397086545531873/online-bus-seat-booking-app?q_id=f10edea2-cf4d-4bdb-b84e-569f1e9d252c",
        image: "/images/projects/online-bus-seat-booking-app-img.webp"
    },
    {
        title: "Secret Santa Generator",
        desc: "A simple and fun web-based Secret Santa name generator built with HTML, JavaScript, and Bootstrap 5. Easily create anonymous pairings for your group of friends, family, or coworkers!",
        tech: ["HTML", "JavaScript", "CSS", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://secret-santa-generator-two.vercel.app/",
        github: "https://github.com/buddhirangana/Secret-Santa-Generator",
        image: "/images/projects/secret-santa-generator-img.webp"
    },
    {
        title: "Hostel Management System - Standalone",
        desc: "The Hostel Management System is a standalone application designed to efficiently manage hostel-related operations.",
        tech: ["Java", "MySQL", "NetBeans", "iTextPDF", "FlatLaf"],
        category: "APPLICATION",
        filter: "app" as FilterKey,
        github: "https://github.com/buddhirangana/hostel-management-system",
        image: "/images/projects/hms-desktop-img.webp"
    },
    {
        title: "Alumni Management System",
        desc: "The Alumni Management System project in PHP is an advanced initiative designed to help university management efficiently manage alumni records.",
        tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://aasict.iceiy.com/",
        github: "https://github.com/buddhirangana/alumni-management-system",
        image: "/images/projects/alumni-management-system-img.webp"
    },
    {
        title: "Association for ICT Professionals Website",
        desc: "Association for Information Communication Technology Professionals (AICTP), the premier body advancing the science, practice, and professional standards of ICT.",
        tech: ["WordPress", "SEO", "Elementor"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://ictprofessionals.org/",
        image: "/images/projects/aictp-img.webp"
    },
    {
        title: "FineArts.lk Website",
        desc: "Discover a vibrant community of artists and art enthusiasts. This platform empowers creators to showcase, sell and promote their art, books and unique creations.",
        tech: ["WordPress", "SEO", "WooCommerce", "OnePay"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://finearts.lk/",
        image: "/images/projects/finearts-img.webp"
    },
    {
        title: "NIIBS Convention Centre Website",
        desc: "NIIBS Convention Centre is the conference partner and prime location for local, regional and international conferences and events.",
        tech: ["WordPress", "SEO", "Google Analytics"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://conventions.niibs.lk/",
        image: "/images/projects/niibs-convention-centre-img.webp"
    },
    {
        title: "NIIBS Campus Website",
        desc: "NIIBS is a degree awarding institute recognized by the Government of Sri Lanka under the provisions of the Universities Act No.16 of 1978.",
        tech: ["WordPress", "SEO", "Google Analytics"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://niibs.lk/",
        image: "/images/projects/niibs-img.webp"
    },
    {
        title: "TEC ROOM Website",
        desc: "TEC ROOM  is a Sri Lankan technology website, publishing news, feature stories, software & app reviews, tech tutorials and product reviews in Sinhala.",
        tech: ["WordPress", "Cloudflare", "OneSignal", "PWA"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://tecroom.lk/",
        image: "/images/projects/tecroom-img.webp"
    },
    {
        title: "ChineseFor.LK Website",
        desc: "ChineseFor.LK is mainly focusing on every day using authentic Mandarin Chinese expressions to let you speak Chinese like a native.",
        tech: ["WordPress", "WooCommerce", "Cloudflare"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://chinesefor.lk/",
        image: "/images/projects/chineseforlk-img.webp"
    },
    {
        title: "Weather Web App",
        desc: "I used HTML, CSS and JavaScript to create this web app. Mainly the most popular CSS framework, Boostrap framework and font-awsome icon library were used to improve the appearance of the website.",
        tech: ["JavaScript", "HTML", "CSS", "JQuery", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://weather-web-app-60162f.netlify.app/",
        github: "https://github.com/buddhirangana/weather-web-app",
        image: "/images/projects/weather-web-app-img.webp"
    },
    {
        title: "Permalink Generator",
        desc: "Using regular expressions we create a quick and effective way to generate a friendly slug that can be used in a URL, including support for special characters!",
        tech: ["JavaScript", "HTML", "CSS", "JQuery", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://buddhirangana.github.io/permalink-generator/",
        github: "https://github.com/buddhirangana/permalink-generator",
        image: "/images/projects/permalink-generator-img.webp"
    },
    {
        title: "Spicy Corner Website",
        desc: "I used HTML, CSS and JavaScript to create this website. Mainly the most popular CSS framework, Boostrap framework and font-awsome icon library were used to improve the appearance of the website.",
        tech: ["JavaScript", "HTML", "CSS", "JQuery", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://spicy-corner.netlify.app/",
        github: "https://github.com/buddhirangana/spicy-corner-website",
        image: "/images/projects/spicy-corner-website-img.webp"
    },
    {
        title: "YouTube Thumbnail Downloader",
        desc: "YouTube Thumbnail Downloader is a Tool. Which can be created using HTML, CSS and Javascript. With the help of this tool you can download the “Thumbnail” used on any YouTube video.",
        tech: ["JavaScript", "HTML", "CSS", "JQuery", "Bootstrap"],
        category: "WEB DEVELOPMENT",
        filter: "web" as FilterKey,
        link: "https://buddhirangana.github.io/youtube-thumbnail-downloader/",
        github: "https://github.com/buddhirangana/youtube-thumbnail-downloader",
        image: "/images/projects/yt-downloader-img.webp"
    },
    {
        title: "Sri Lanka Covid-19 Statistics",
        desc: "Chrome extension developed for provides the current real time situation of the patients reported in Sri Lanka.",
        tech: ["JavaScript", "HTML", "CSS"],
        category: "APPLICATION",
        filter: "app" as FilterKey,
        github: "https://github.com/buddhirangana/SL-Covid-19-Statistics-Chrome-Extension",
        image: "/images/projects/sri-lanka-covid-19-statistics-img.webp"
    },
    {
        title: "Student Management System",
        desc: "Student Management System is software which is helpful for students as well as the school authorities.",
        tech: ["Java", "MySQL", "NetBeans", "PhpMyAdmin", "XAMPP"],
        category: "APPLICATION",
        filter: "app" as FilterKey,
        github: "https://github.com/buddhirangana/Student-Management-System",
        image: "/images/projects/sms-system-img.webp"
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
                        <h2 className="relative text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none pb-4">
                            Featured <span className="text-white/20 italic font-light">Projects</span>
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
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0 scale-105"
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
                                                {project.link ? "LIVE PREVIEW" : (project as any).figma ? "DESIGN PREVIEW" : "SOURCE CODE"}
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

                                    <a
                                        href={project.link || project.github || (project as any).figma || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-5 flex mb-4 items-center justify-between pt-8 border-t border-white/5 group/link cursor-pointer"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Command size={12} className="text-theme-primary" />
                                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover/link:text-theme-primary transition-colors">
                                                {project.link && project.link !== "#" ? "Live Preview" : (project as any).figma && (project as any).figma !== "#" ? "Design Preview" : "Source Code"}
                                            </span>
                                        </div>
                                        <ArrowRight size={14} className="text-white/20 group-hover:translate-x-2 group-hover:text-theme-primary transition-all" />
                                    </a>

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
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/20">No Records Found</span>
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
                                    View More Projects · {filteredProjects.length - visibleCount} Remaining
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
