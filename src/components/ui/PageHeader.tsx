"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ChevronRight, Sparkles } from "lucide-react";

interface PageHeaderProps {
    title: string;
    highlightedText?: string;
    subtitle?: string;
    tag?: string;
    decal?: string;
    breadcrumbCurrent: string;
}

export default function PageHeader({
    title,
    highlightedText,
    subtitle,
    tag = "OVERVIEW",
    decal = "PORTFOLIO",
    breadcrumbCurrent,
}: PageHeaderProps) {
    return (
        <div className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-dark-400 border-b border-white/5">
            {/* Ambient Background Grid & Decal */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 text-[12rem] sm:text-[16rem] uppercase font-bold text-white/[0.02] select-none pointer-events-none whitespace-nowrap">
                {decal}
            </div>

            <div className="section-container relative z-10">

                {/* ── Breadcrumb Navigation ── */}
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    aria-label="Breadcrumb"
                    className="flex items-center gap-2 text-xs font-mono mb-8 w-fit px-4 py-2 rounded-full bg-white/[0.03] border border-white/10"
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-white/40 hover:text-theme-primary transition-colors font-bold uppercase tracking-wider"
                    >
                        <Home size={13} className="text-theme-primary" />
                        <span>Home</span>
                    </Link>

                    <ChevronRight size={12} className="text-white/20" />

                    <span className="text-theme-primary font-bold uppercase tracking-wider">
                        {breadcrumbCurrent}
                    </span>
                </motion.nav>

                {/* ── Header Title & Content ── */}
                <div className="flex flex-col items-start max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex items-center gap-2 mb-4"
                    >
                        <Sparkles size={14} className="text-theme-primary" />
                        <span className="text-[10px] font-bold text-theme-primary uppercase tracking-[0.4em]">
                            [ {tag} ]
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tighter font-poppins leading-none pb-6 mb-4"
                    >
                        {title}{" "}
                        {highlightedText && (
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-secondary italic font-medium">
                                {highlightedText}
                            </span>
                        )}
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute bottom-0 left-0 h-[3px] w-32 sm:w-48 origin-left bg-gradient-to-r from-theme-primary via-theme-secondary to-transparent rounded-full shadow-[0_0_12px_rgba(248,87,42,0.8)]"
                        />
                    </motion.h1>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-white/40 text-base sm:text-lg max-w-2xl font-medium leading-relaxed"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>

            </div>
        </div>
    );
}
