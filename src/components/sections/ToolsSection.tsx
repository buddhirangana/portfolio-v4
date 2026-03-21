"use client";

import React from "react";
import { motion } from "framer-motion";
import {
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
    Figma,
    BrainCircuit,
    Wrench,
    Blocks,
    FlaskConical,
} from "lucide-react";

interface Skill {
    name: string;
    icon: React.ElementType;
    color: string;
}

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ElementType;
    accent: string;
    skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        id: "languages",
        title: "Languages",
        icon: Code2,
        accent: "#7C3AED",
        skills: [
            { name: "Python", icon: Terminal, color: "#3776AB" },
            { name: "JavaScript", icon: FileJson, color: "#F7DF1E" },
            { name: "TypeScript", icon: Braces, color: "#3178C6" },
            { name: "Java", icon: Coffee, color: "#007396" },
            { name: "C/C++", icon: Cpu, color: "#00599C" },
            { name: "PHP", icon: FileCode, color: "#777BB4" },
            { name: "Kotlin", icon: Smartphone, color: "#7F52FF" },
        ],
    },
    {
        id: "web-dev",
        title: "Web Development",
        icon: Globe,
        accent: "#0EA5E9",
        skills: [
            { name: "React", icon: Zap, color: "#61DAFB" },
            { name: "Next.js", icon: Globe, color: "#ffffff" },
            { name: "Angular", icon: Hexagon, color: "#DD0031" },
            { name: "Node.js", icon: Terminal, color: "#339933" },
            { name: "Express.js", icon: Server, color: "#ffffff" },
            { name: "Tailwind CSS", icon: Wind, color: "#06B6D4" },
            { name: "HTML / CSS", icon: Code2, color: "#E34F26" },
            { name: "Bootstrap", icon: Layers, color: "#7952B3" },
        ],
    },
    {
        id: "ai-ml",
        title: "AI / ML & Data",
        icon: BrainCircuit,
        accent: "#10B981",
        skills: [
            { name: "TensorFlow", icon: Activity, color: "#FF6F00" },
            { name: "Scikit-Learn", icon: FlaskConical, color: "#F89820" },
            { name: "Streamlit", icon: Activity, color: "#FF4B4B" },
            { name: "Power BI", icon: BarChart3, color: "#F2C811" },
            { name: "NumPy", icon: Blocks, color: "#4DABCF" },
            { name: "Pandas", icon: Blocks, color: "#150458" },
        ],
    },
    {
        id: "databases",
        title: "Databases",
        icon: Database,
        accent: "#F59E0B",
        skills: [
            { name: "MongoDB", icon: Database, color: "#47A248" },
            { name: "MySQL", icon: Database, color: "#4479A1" },
            { name: "Oracle", icon: Database, color: "#F80000" },
            { name: "Firebase", icon: Flame, color: "#FFCA28" },
        ],
    },
    {
        id: "mobile",
        title: "Mobile & CMS",
        icon: Smartphone,
        accent: "#EC4899",
        skills: [
            { name: "Flutter", icon: Smartphone, color: "#02569B" },
            { name: "Android Studio", icon: Smartphone, color: "#3DDC84" },
            { name: "WordPress", icon: Layout, color: "#21759B" },
            { name: "Ghost CMS", icon: Ghost, color: "#ffffff" },
            { name: "Joomla", icon: Box, color: "#F44336" },
        ],
    },
    {
        id: "devops",
        title: "DevOps & Cloud",
        icon: Cloud,
        accent: "#6366F1",
        skills: [
            { name: "Git", icon: GitBranch, color: "#F05032" },
            { name: "GitHub", icon: Github, color: "#ffffff" },
            { name: "Vercel", icon: Triangle, color: "#ffffff" },
            { name: "Netlify", icon: Cloud, color: "#00C7B7" },
            { name: "Heroku", icon: Cloud, color: "#9E70FF" },
            { name: "Cloudflare", icon: Shield, color: "#F38020" },
        ],
    },
    {
        id: "tools",
        title: "Tools & IDEs",
        icon: Wrench,
        accent: "#F97316",
        skills: [
            { name: "VS Code", icon: Code, color: "#007ACC" },
            { name: "Postman", icon: Send, color: "#FF6C37" },
            { name: "Arduino", icon: Cpu, color: "#00979D" },
            { name: "Antigravity", icon: Rocket, color: "#f8572a" },
            { name: "Chrome DevTools", icon: Settings, color: "#4285F4" },
        ],
    },
    {
        id: "design",
        title: "Design & Media",
        icon: Figma,
        accent: "#F43F5E",
        skills: [
            { name: "Figma", icon: Figma, color: "#F24E1E" },
            { name: "Adobe Illustrator", icon: Palette, color: "#FF9A00" },
            { name: "Adobe Photoshop", icon: Camera, color: "#31A8FF" },
            { name: "Adobe Premiere Pro", icon: Video, color: "#9999FF" },
            { name: "Canva", icon: Image, color: "#00C4CC" },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ToolsSection() {
    return (
        <section id="tools" className="py-32 relative overflow-hidden bg-dark-400">
            {/* Grid bg */}
            <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-sky-500/5 blur-[120px] pointer-events-none" />

            <div className="section-container relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Wrench size={14} className="text-theme-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-theme-primary">
                            Technical Skillset
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none">
                        Skills &amp;{" "}
                        <span className="text-white/20 italic font-light">Expertise</span>
                    </h2>
                </motion.div>

                {/* Category Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {SKILL_CATEGORIES.map((category) => (
                        <motion.div
                            key={category.id}
                            variants={cardVariants}
                            className="group relative rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-500 overflow-hidden flex flex-col gap-5"
                        >
                            {/* Card accent glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                                style={{
                                    background: `radial-gradient(ellipse at top left, ${category.accent}18 0%, transparent 70%)`,
                                }}
                            />

                            {/* Category Header */}
                            <div className="flex items-center gap-3 relative z-10">
                                <div
                                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                                    style={{ background: `${category.accent}22`, color: category.accent }}
                                >
                                    <category.icon size={18} />
                                </div>
                                <h3 className="font-semibold text-white/90 text-sm tracking-wide">
                                    {category.title}
                                </h3>
                            </div>

                            {/* Divider */}
                            <div
                                className="h-px w-full rounded-full opacity-30"
                                style={{ background: `linear-gradient(90deg, ${category.accent}, transparent)` }}
                            />

                            {/* Skill Pills */}
                            <div className="flex flex-wrap gap-2 relative z-10">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                                    >
                                        <skill.icon
                                            size={12}
                                            style={{ color: skill.color }}
                                            className="shrink-0"
                                        />
                                        <span className="text-[11px] font-medium text-white/70 whitespace-nowrap">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Industrial decals */}
            <div className="absolute left-[-2%] bottom-0 opacity-[0.02] text-[10rem] font-bold select-none pointer-events-none uppercase">
                Skill_Matrix
            </div>
            <div className="absolute right-[-2%] top-0 opacity-[0.02] text-[10rem] font-bold select-none pointer-events-none uppercase rotate-180">
                Tech_Stack
            </div>
        </section>
    );
}
