"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Search, Award, Check, Copy, ChevronDown, ChevronUp, Layers, Terminal, Sparkles, Database } from "lucide-react";

// ── Official Academic Brand Icons ───────────────────────────────────────────

export const ResearchGateIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M5.5 3.5h6.2c3.5 0 5.8 1.8 5.8 4.6 0 2.2-1.4 3.8-3.5 4.3l3.9 8.1h-3.4l-3.5-7.4H8.7v7.4H5.5V3.5zm3.2 2.8v4.6h3.1c1.8 0 2.8-.9 2.8-2.3 0-1.4-1-2.3-2.8-2.3H8.7z" />
    </svg>
);

export const GoogleScholarIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-24a12 12 0 0 0-12 12c0 6.627 5.373 12 12 12s12-5.373 12-12A12 12 0 0 0 12 0zm0 4.5l8.4 6.3-8.4 6.3-8.4-6.3L12 4.5zm0 10.8l5.6-4.2v4.5c0 2.8-2.5 5.1-5.6 5.1s-5.6-2.3-5.6-5.1v-4.5l5.6 4.2z" />
    </svg>
);

export const OrcidIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.541 0 .98.439.98.98a.981.981 0 0 1-.98.979.981.981 0 0 1-.979-.979c0-.541.438-.98.979-.98zm-.605 3.01h1.21v9.988h-1.21V7.388zm3.284 0h3.585c3.084 0 4.444 2.219 4.444 4.99 0 2.152-1.684 4.998-4.444 4.998h-3.585V7.388zm1.21 1.21v7.578h2.375c2.73 0 3.234-2.074 3.234-3.784 0-1.684-1.074-3.794-3.234-3.794h-2.375z" />
    </svg>
);

// ── Academic Profiles Config ───────────────────────────────────────────────

export const ACADEMIC_PROFILES = [
    {
        name: "ResearchGate",
        handle: "Buddhi-Rangana",
        url: "https://www.researchgate.net/profile/Buddhi-Rangana",
        icon: ResearchGateIcon,
        color: "hover:border-[#00CCBB]/50 hover:bg-[#00CCBB]/10 text-[#00CCBB]",
        badge: "VERIFIED PROFILE",
        desc: "Follow research updates & papers"
    },
    {
        name: "Google Scholar",
        handle: "Buddhi Rangana",
        url: "https://scholar.google.com/citations?user=LoIBv4AAAAAJ&hl=en",
        icon: GoogleScholarIcon,
        color: "hover:border-[#4285F4]/50 hover:bg-[#4285F4]/10 text-[#4285F4]",
        badge: "CITATIONS & INDEX",
        desc: "Track citation metrics & index"
    },
    {
        name: "ORCID iD",
        handle: "0009-0009-8555-171X",
        url: "https://orcid.org/0009-0009-8555-171X",
        icon: OrcidIcon,
        color: "hover:border-[#A6CE39]/50 hover:bg-[#A6CE39]/10 text-[#A6CE39]",
        badge: "AUTHOR RECORD",
        desc: "Verified researcher ID record"
    },
];

// ── Publication Interface & Sample Data ─────────────────────────────────────

export interface Publication {
    id: string;
    title: string;
    authors: string[];
    journalOrConference: string;
    publisher?: string;
    year: string;
    date: string;
    type: "Journal" | "Conference" | "Preprint" | "Book Chapter";
    doi?: string;
    doiUrl?: string;
    researchGateUrl?: string;
    googleScholarUrl?: string;
    pdfUrl?: string;
    abstract: string;
    tags: string[];
    bibtex?: string;
}

const PUBLICATIONS: Publication[] = [
    {
        id: "pub-1",
        title: "A Quantitative Study on the Impact of the Use of ChatGPT and Google Gemini on the Academic Performance of IT Undergraduates at NIIBS Campus",
        authors: ["Buddhi Rangana"],
        journalOrConference: "Journal of Research Technology and Engineering (JRTE)",
        publisher: "",
        year: "2026",
        date: "July 2026",
        type: "Journal",
        doi: "10.5281/zenodo.21696248",
        doiUrl: "https://doi.org/10.5281/zenodo.21696248",
        researchGateUrl: "https://www.researchgate.net/profile/Buddhi-Rangana",
        googleScholarUrl: "https://scholar.google.com/citations?user=LoIBv4AAAAAJ&hl=en",
        pdfUrl: "#",
        abstract: "The introduction of generative Artificial Intelligence (AI) in education systems has changed the dynamics of the academic processes, particularly for technology-based courses. In this case, an exploratory study of the effects of the use of LLM tools (i.e., OpenAI's ChatGPT and Google Gemini) on the academic performance of Information Technology (IT) undergraduates at the Faculty of Computing and Information Technology (FCIT), NIIBS Campus. With the help of the scientific approach of empirical research, statistical data were collected through surveys conducted among 49 current undergraduates enrolled in the IT degree program. The research focuses on several important factors related to the penetration of AI tools, their usage frequency and overall effectiveness in terms of GPA achievement. From the study, it was found out that AI technology is widespread among IT students, as 65.3% of participants use both ChatGPT and Google Gemini in multiple platforms. Moreover, 57.1% use them often or very often. From descriptive statistical results, there is evidence of a clear demarcation between task optimization and academic performance. While students exhibit significant levels of operationally positive benefits from speedier completion of assignments (Mean = 3.98/5.00) and enhancement of their quality (Mean = 3.94/5.00), the level of direct impact on terminal GPA performance is notably conservative (Mean = 3.55/5.00). In terms of performance, the study reveals a bell-shaped curve distribution pattern for moderately proficient performance levels in grades (53.0% GPA from 2.5 - 3.0), despite an overwhelming majority perception (89.8%) that AI aids learning positively. There emerges an architectural design of “Academic Integrity Paradox” where efficient structure could induce dependency and ultimately skill degradation. The conclusions drawn by the paper include institutional recommendation for formal inclusion of AI literacy and assessment defense-based approaches.",
        tags: ["Academic Performance", "Artificial Intelligence (AI)", "ChatGPT", "Google Gemini", "Undergraduates"],
        bibtex: `@article{rangana2026quantitative,\n  title={A Quantitative Study on the Impact of the Use of ChatGPT and Google Gemini on the Academic Performance of IT Undergraduates at NIIBS Campus},\n  author={Rangana, Buddhi},\n  journal={Journal of Research Technology and Engineering (JRTE)},\n  year={2026}\n}`
    }
];

type FilterType = "All" | "Journal" | "Conference" | "Preprint";

const FILTERS: { key: FilterType; label: string; tag: string }[] = [
    { key: "All", label: "All Papers", tag: "ALL" },
    { key: "Journal", label: "Journals", tag: "JOURNAL" },
    { key: "Conference", label: "Conferences", tag: "CONF" },
    { key: "Preprint", label: "Preprints", tag: "PREPRINT" },
];

export default function ResearchSection() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [expandedAbstracts, setExpandedAbstracts] = useState<Record<string, boolean>>({});
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const decalX = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 100, damping: 30 });

    const toggleAbstract = (id: string) => {
        setExpandedAbstracts(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const copyBibtex = (id: string, bibtex?: string) => {
        if (!bibtex) return;
        navigator.clipboard.writeText(bibtex);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2500);
    };

    const filteredPublications = PUBLICATIONS.filter(pub => {
        const matchesType = activeFilter === "All" || pub.type === activeFilter;
        const matchesSearch = searchQuery === "" ||
            pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.journalOrConference.toLowerCase().includes(searchQuery.toLowerCase()) ||
            pub.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesType && matchesSearch;
    });

    return (
        <section id="research" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-dark-400 border-t border-white/5">
            {/* Background Architecture Grid */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />

            {/* Background Decal */}
            <motion.div
                style={{ x: decalX }}
                className="absolute top-20 right-[-5%] text-[15rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap"
            >
                Research
            </motion.div>

            <div className="section-container relative z-10">

                {/* ── Section Header ── */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-10 mb-12 lg:mb-20 text-center md:text-left w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-start"
                    >
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                            <BookOpen size={14} className="text-theme-primary" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">
                                Academic Publications
                            </span>
                        </div>
                        <h2 className="relative text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none pb-4">
                            Research &amp; <span className="text-white/20 italic font-light">Publications</span>
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
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center md:items-end text-center md:text-right"
                    >
                        <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest mb-1">
                            {PUBLICATIONS.length} Papers Total
                        </div>
                        <div className="text-xs font-mono text-theme-primary">PEER-REVIEWED WORKS</div>
                    </motion.div>
                </div>

                {/* ── Academic Profiles Banner Card ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 p-8 sm:p-10 rounded-[2.5rem] glass-card-premium border border-white/10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                >

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <Award size={16} className="text-theme-primary" />
                                <span className="text-[11px] font-bold text-white uppercase tracking-[0.3em]">
                                    Academic &amp; Research Profiles
                                </span>
                            </div>
                            <p className="text-white/40 text-xs sm:text-sm font-medium max-w-md">
                                Connect on ResearchGate, track citation metrics on Google Scholar, or verify author records via ORCID.
                            </p>
                        </div>

                        {/* Profile Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
                            {ACADEMIC_PROFILES.map((profile) => {
                                const IconComp = profile.icon;
                                return (
                                    <motion.a
                                        key={profile.name}
                                        whileHover={{ y: -5, scale: 1.03 }}
                                        whileTap={{ scale: 0.97 }}
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex flex-col justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 ${profile.color} transition-all duration-500 group`}
                                    >
                                        <div className="flex items-center justify-between gap-3 mb-3">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <IconComp size={20} />
                                            </div>
                                            <ExternalLink size={13} className="text-white/30 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-white group-hover:text-theme-primary transition-colors block mb-0.5">
                                                {profile.name}
                                            </span>
                                            <span className="text-[9px] font-mono text-white/30 tracking-widest block uppercase">
                                                {profile.badge}
                                            </span>
                                        </div>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* ── Search & Filter Controls ── */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                    {/* Category Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                        {FILTERS.map(({ key, label, tag }) => (
                            <motion.button
                                key={key}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveFilter(key)}
                                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-500 ${activeFilter === key
                                        ? "bg-theme-primary text-white shadow-[0_10px_30px_rgba(248,87,42,0.3)]"
                                        : "bg-white/[0.03] text-white/40 hover:text-white border border-white/5 hover:border-white/20"
                                    }`}
                            >
                                {label}
                                <span className={`text-[8px] font-mono px-2 py-0.5 rounded-full ${activeFilter === key ? "bg-white/20 text-white" : "bg-white/5 text-white/30"
                                    }`}>
                                    {tag}
                                </span>
                            </motion.button>
                        ))}
                    </div>

                    {/* Search Input Box */}
                    <div className="relative w-full md:w-80">
                        <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                            type="text"
                            placeholder="Search papers or tags..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.02] border border-white/10 text-xs font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-theme-primary/50 transition-all duration-300"
                        />
                    </div>
                </div>

                {/* ── Papers Cards Grid ── */}
                <div className="space-y-8">
                    {filteredPublications.length > 0 ? (
                        filteredPublications.map((pub, idx) => {
                            const isExpanded = expandedAbstracts[pub.id] || false;
                            const isCopied = copiedId === pub.id;

                            return (
                                <motion.div
                                    key={pub.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                                    className="p-8 sm:p-10 rounded-[2.5rem] glass-card-premium border border-white/5 hover:border-theme-primary/30 transition-all duration-500 group relative"
                                >
                                    {/* Corner Accent line */}
                                    <div className="absolute top-0 right-12 w-24 h-[2px] bg-gradient-to-r from-transparent via-theme-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Card Top Meta Bar */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <span className="px-4 py-1.5 rounded-xl bg-theme-primary/10 border border-theme-primary/20 text-theme-primary text-[9px] font-bold uppercase tracking-widest">
                                                {pub.type} ARTICLE
                                            </span>
                                            <span className="text-white/30 text-xs font-mono">
                                                {pub.date}
                                            </span>
                                        </div>

                                        {pub.doi && (
                                            <span className="text-[10px] font-mono text-white/40 bg-white/[0.03] border border-white/5 px-3 py-1 rounded-lg">
                                                DOI: {pub.doi}
                                            </span>
                                        )}
                                    </div>

                                    {/* Paper Title */}
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-theme-primary transition-colors leading-snug font-poppins mb-4">
                                        {pub.doiUrl ? (
                                            <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-start gap-3">
                                                {pub.title}
                                                <ExternalLink size={20} className="shrink-0 opacity-40 group-hover:opacity-100 transition-opacity mt-1 text-theme-primary" />
                                            </a>
                                        ) : (
                                            pub.title
                                        )}
                                    </h3>

                                    {/* Authors Line */}
                                    <p className="text-xs sm:text-sm font-medium text-white/60 mb-3">
                                        <span className="text-white/30 uppercase text-[9px] font-bold tracking-widest mr-2">[ AUTHORS ]</span>
                                        {pub.authors.map((author, i) => (
                                            <span key={i} className={author.includes("Buddhi Rangana") ? "text-theme-primary font-bold underline" : ""}>
                                                {author}{i < pub.authors.length - 1 ? ", " : ""}
                                            </span>
                                        ))}
                                    </p>

                                    {/* Venue / Journal */}
                                    <p className="text-xs text-white/40 italic font-mono mb-6">
                                        Published in <span className="text-white/80 font-semibold italic">{pub.journalOrConference}</span> {pub.publisher && `(${pub.publisher})`}
                                    </p>

                                    {/* Expandable Abstract Box */}
                                    <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-white/[0.015] border border-white/5">
                                        <button
                                            onClick={() => toggleAbstract(pub.id)}
                                            className="flex items-center justify-between w-full text-xs font-bold text-white/60 hover:text-white transition-colors"
                                        >
                                            <span className="flex items-center gap-2 uppercase tracking-[0.2em] text-[10px] font-mono">
                                                <FileText size={14} className="text-theme-primary" />
                                                Abstract &amp; Summary
                                            </span>
                                            {isExpanded ? <ChevronUp size={16} className="text-theme-primary" /> : <ChevronDown size={16} />}
                                        </button>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-normal mt-4 pt-4 border-t border-white/5">
                                                        {pub.abstract}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap items-center gap-2 mb-8">
                                        {pub.tags.map((tag) => (
                                            <span key={tag} className="text-[9px] font-mono font-bold text-white/40 bg-white/[0.03] border border-white/5 px-3.5 py-1.5 rounded-xl group-hover:border-theme-primary/20 transition-colors">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons Bar */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/5">
                                        <div className="flex flex-wrap items-center gap-3">
                                            {pub.doiUrl && (
                                                <a
                                                    href={pub.doiUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group/btn relative px-6 py-3 bg-theme-primary rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2 shadow-[0_10px_30px_rgba(248,87,42,0.3)] hover:scale-105 transition-transform duration-300"
                                                >
                                                    <ExternalLink size={13} />
                                                    View DOI / Paper
                                                </a>
                                            )}

                                            {pub.researchGateUrl && (
                                                <a
                                                    href={pub.researchGateUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#00CCBB]/50 hover:bg-[#00CCBB]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#00CCBB] transition-all duration-300"
                                                >
                                                    <ResearchGateIcon size={14} />
                                                    ResearchGate
                                                </a>
                                            )}

                                            {pub.googleScholarUrl && (
                                                <a
                                                    href={pub.googleScholarUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:border-[#4285F4]/50 hover:bg-[#4285F4]/10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#4285F4] transition-all duration-300"
                                                >
                                                    <GoogleScholarIcon size={14} />
                                                    Google Scholar
                                                </a>
                                            )}
                                        </div>

                                        {pub.bibtex && (
                                            <button
                                                onClick={() => copyBibtex(pub.id, pub.bibtex)}
                                                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 text-white/40 hover:text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300"
                                            >
                                                {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                                                {isCopied ? "BibTeX Copied!" : "Cite / BibTeX"}
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })
                    ) : (
                        <div className="text-center py-16 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                            <p className="text-white/40 text-sm font-medium">No publications found matching your filter.</p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}
