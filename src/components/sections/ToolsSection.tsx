"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
    Figma,
    Code2,
    Database,
    Layers,
    Cpu,
    Globe,
    Terminal,
    Braces,
    Wind,
    Zap,
    Box,
    Smartphone,
    Server,
    Flame,
    Github,
    Code,
    FileCode,
    Coffee,
    Layout,
    Ghost,
    Hexagon,
    Triangle,
    Cloud,
    Image,
    Monitor,
    Users,
    BarChart3,
    Shield,
    Settings,
    Activity,
    Send,
    Rocket,
    Home,
    Video,
    Camera,
    Palette,
    FileJson,
    GitBranch,
    Search,
    MonitorPlay
} from "lucide-react";

interface ToolItem {
    name: string;
    icon: any;
    color: string;
    id: string;
}

const ALL_TOOLS: ToolItem[] = [
    // LANGUAGES
    { name: "JavaScript", icon: FileJson, color: "#F7DF1E", id: "JS_CORE" },
    { name: "Python", icon: Terminal, color: "#3776AB", id: "PY_LOGIC" },
    { name: "TypeScript", icon: Braces, color: "#3178C6", id: "TS_NODE" },
    { name: "PHP", icon: FileCode, color: "#777BB4", id: "PHP_SRV" },
    { name: "Java", icon: Coffee, color: "#007396", id: "JV_PLAT" },
    { name: "C++", icon: Cpu, color: "#00599C", id: "CPP_SYS" },
    { name: "C", icon: Cpu, color: "#A8B9CC", id: "C_BASE" },
    { name: "Kotlin", icon: Smartphone, color: "#7F52FF", id: "KT_ANDR" },

    // FRAMEWORKS & WEB
    { name: "React", icon: Zap, color: "#61DAFB", id: "RX_CORE" },
    { name: "Next.js", icon: Globe, color: "#ffffff", id: "NX_GATE" },
    { name: "Angular", icon: Hexagon, color: "#DD0031", id: "NG_PRO" },
    { name: "Tailwind CSS", icon: Wind, color: "#06B6D4", id: "TW_MESH" },
    { name: "Bootstrap", icon: Layers, color: "#7952B3", id: "BS_GRID" },
    { name: "Node.js", icon: Terminal, color: "#339933", id: "JS_PROC" },
    { name: "Express.js", icon: Server, color: "#ffffff", id: "EX_REST" },
    { name: "jQuery", icon: Zap, color: "#0769AD", id: "JQ_LEG" },
    { name: "HTML", icon: Code2, color: "#E34F26", id: "WEB_STR" },
    { name: "CSS", icon: Palette, color: "#1572B6", id: "WEB_STY" },

    // DATABASES & BACKEND
    { name: "MongoDB", icon: Database, color: "#47A248", id: "DB_NOSQL" },
    { name: "MySQL", icon: Database, color: "#4479A1", id: "DB_SQL" },
    { name: "Oracle", icon: Database, color: "#F80000", id: "DB_ENT" },
    { name: "Firebase", icon: Flame, color: "#FFCA28", id: "FB_CLOUD" },
    { name: "Xampp", icon: Server, color: "#FB7A24", id: "LMP_DEV" },
    { name: "Wampp", icon: Server, color: "#98FB98", id: "WMP_DEV" },
    { name: "Local", icon: Home, color: "#5CB85C", id: "WP_LOCL" },

    // MOBILE & TOOLS
    { name: "Flutter", icon: Smartphone, color: "#02569B", id: "FL_HYBR" },
    { name: "Android Studio", icon: Smartphone, color: "#3DDC84", id: "AS_SDK" },
    { name: "Git", icon: GitBranch, color: "#F05032", id: "VC_SYNC" },
    { name: "Github", icon: Github, color: "#ffffff", id: "GH_REPO" },
    { name: "VS Code", icon: Code, color: "#007ACC", id: "VS_IDE" },
    { name: "Antigravity", icon: Rocket, color: "#f8572a", id: "AG_AI" },
    { name: "Postman", icon: Send, color: "#FF6C37", id: "API_TST" },
    { name: "Figma", icon: Figma, color: "#F24E1E", id: "FG_DSGN" },
    { name: "Adobe Illustrator", icon: Palette, color: "#FF9A00", id: "AI_VECT" },
    { name: "Adobe Photoshop", icon: Camera, color: "#31A8FF", id: "PS_RAST" },
    { name: "Adobe Premiere Pro", icon: Video, color: "#9999FF", id: "PR_EDIT" },

    // CMS
    { name: "WordPress", icon: Layout, color: "#21759B", id: "CMS_WP" },
    { name: "Ghost CMS", icon: Ghost, color: "#ffffff", id: "CMS_GHST" },
    { name: "Blogger CMS", icon: FileCode, color: "#FF5722", id: "CMS_BLOG" },
    { name: "Joomla", icon: Box, color: "#F44336", id: "CMS_JML" },

    // PLATFORMS & MORE
    { name: "Vercel", icon: Triangle, color: "#ffffff", id: "DP_VCL" },
    { name: "Heroku", icon: Cloud, color: "#430098", id: "DP_HRK" },
    { name: "Netlify", icon: Cloud, color: "#00C7B7", id: "DP_NTL" },
    { name: "Cloudflare", icon: Shield, color: "#F38020", id: "CF_EDGE" },
    { name: "Chrome Devtools", icon: Settings, color: "#4285F4", id: "BR_DEBG" },
    { name: "Arduino", icon: Cpu, color: "#00979D", id: "HW_PLC" },
    { name: "Power BI", icon: BarChart3, color: "#F2C811", id: "BI_DATA" },
    { name: "Canva", icon: Image, color: "#00C4CC", id: "CV_PUBL" },
    { name: "Anydesk", icon: Monitor, color: "#EF4437", id: "RM_CTRL" },
    { name: "Teams", icon: Users, color: "#6264A7", id: "TM_COLL" },
    { name: "Streamlit", icon: Activity, color: "#FF4B4B", id: "ST_DATA" },
    { name: "NetBeans", icon: Box, color: "#7F52FF", id: "NB_IDE" },
];

const Row = ({ items, direction = 1, speed = 40 }: { items: ToolItem[], direction?: 1 | -1, speed?: number }) => {
    return (
        <div className="flex overflow-hidden group">
            <motion.div
                animate={{
                    x: direction === 1 ? ["0%", "-50%"] : ["-50%", "0%"]
                }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex gap-6 py-4 whitespace-nowrap"
            >
                {[...items, ...items, ...items, ...items].map((tool, i) => (
                    <div
                        key={`${tool.id}-${i}`}
                        className="glass-card-premium rounded-3xl p-6 flex flex-col items-center justify-center gap-4 min-w-[160px] border border-white/5 hover:border-theme-primary/30 transition-all duration-700 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-theme-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div
                            className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shadow-xl relative z-10"
                            style={{ color: tool.color }}
                        >
                            <tool.icon size={24} />
                        </div>
                        <div className="text-center relative z-10">
                            <span className="text-[6px] font-mono font-bold text-theme-primary/40 block mb-0.5">[{tool.id}]</span>
                            <span className="text-[9px] uppercase font-bold tracking-[0.1em] text-white/50">
                                {tool.name}
                            </span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default function ToolsSection() {
    const row1 = ALL_TOOLS.slice(0, 18);
    const row2 = ALL_TOOLS.slice(18, 36);
    const row3 = ALL_TOOLS.slice(36);

    return (
        <section id="tools" className="py-32 relative overflow-hidden bg-dark-400">
            {/* Fullscreen Technical Overlay */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />

            <div className="section-container relative z-10 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Box size={14} className="text-theme-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">Dynamic Arsenal matrix</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                        Technical <span className="text-white/20 italic font-light">Data_Stream</span>
                    </h2>
                </motion.div>
            </div>

            {/* Scrolling Tech Streams */}
            <div className="flex flex-col gap-8 relative">
                <Row items={row1} direction={1} speed={50} />
                <Row items={row2} direction={-1} speed={60} />
                <Row items={row3} direction={1} speed={45} />
            </div>

            {/* Industrial Decals */}
            <div className="absolute left-[-2%] bottom-0 opacity-[0.02] text-[10rem] font-bold select-none pointer-events-none uppercase">
                Hardware_Rig
            </div>
            <div className="absolute right-[-2%] top-0 opacity-[0.02] text-[10rem] font-bold select-none pointer-events-none uppercase rotate-180">
                Logic_System
            </div>
        </section>
    );
}
