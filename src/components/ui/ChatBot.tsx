"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronDown, Maximize2, Minimize2 } from "lucide-react";

interface Message {
    id: string;
    text: string;
    sender: "bot" | "user";
    timestamp: string;
}

const SUGGESTIONS = [
    "Who is Buddhi Rangana?",
    "What are Buddhi's core skills?",
    "Tell me about his projects",
    "How can I contact him?",
    "Is he available for hire?",
];

const BOT_NAME = "BNova";
const BOT_TAGLINE = "Ask me about Buddhi Rangana...";

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: `Hi! I'm ${BOT_NAME}, Buddhi's AI assistant. 👋 I can tell you about his skills, projects, and professional background. What would you like to know?`,
            sender: "bot",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth"
            });
        }
    }, [messages, isOpen, isTyping]);

    const handleSend = (text: string) => {
        if (!text.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text,
            sender: "user",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate Bot Thinking & Response
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: getBotResponse(text),
                sender: "bot",
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1500);
    };

    const getBotResponse = (input: string): string => {
        const lower = input.toLowerCase();
        if (lower.includes("who is buddhi rangana")) return "Buddhi Rangana is a multi-talented entrepreneur, web developer, tech blogger, and founder of DigiFox & TEC ROOM. Based in Colombo, Sri Lanka.";
        if (lower.includes("skill")) return "Buddhi is a Lead Developer specializing in Full-Stack Engineering. His core stack includes React, Next.js, PHP (Laravel/Wordpress), and Python for AI/Data science.";
        if (lower.includes("project")) return "He has built over 10+ major projects, including the DigiFox Agency Portal and TEC ROOM Blog. You can see his best work in the 'Technical Research' section!";
        if (lower.includes("contact") || lower.includes("hire")) return "You can reach Buddhi via email at info.buddhirangana@gmail.com or use the 'Establish Uplink' form at the bottom of the page.";
        return "Hmm 🤔, I'm not sure about that one. Try asking about Buddhi's skills, experience, projects, education, or contact details. You can also use the quick suggestions below!";
    };

    return (
        <>
            {/* ── Trigger Button ── */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] w-16 h-16 sm:w-16 sm:h-16 rounded-full bg-theme-primary text-white shadow-[0_0_25px_rgba(248,87,42,0.5)] flex items-center justify-center transition-all ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
            >
                {/* Attention Glows & Layered Pulses */}
                <div className="absolute inset-0 rounded-full animate-[ping_3s_infinite] bg-theme-primary/40 -z-10" />
                <div className="absolute inset-0 rounded-full animate-[ping_3s_infinite_1s] bg-theme-primary/20 -z-10" />
                <div className="absolute inset-[-8px] rounded-full animate-pulse bg-theme-primary/15 -z-20 blur-xl" />
                
                {/* Shine Sweep Effect */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ x: "-150%", skewX: -45 }}
                        animate={{ x: "150%" }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 1.5 }}
                        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                    />
                </div>

                <Bot size={32} className="w-8 h-8 sm:w-9 sm:h-9 relative z-10" />
            </motion.button>

            {/* ── Chat Window ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8, x: 20 }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8, x: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[200] w-[calc(100vw-3rem)] sm:w-[400px] bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col ${isMinimized ? 'h-16' : 'h-[600px] max-h-[80vh]'}`}
                    >
                        {/* Header */}
                        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-theme-primary to-theme-secondary flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2.5 sm:gap-3">
                                <div className="w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <Bot size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-bold text-white text-sm sm:text-[15px] tracking-tight leading-none">{BOT_NAME}</span>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                                        <span className="text-[8px] font-bold text-white/60 uppercase tracking-widest">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white/80"
                                >
                                    {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-xl transition-colors text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        {!isMinimized && (
                            <>
                                <div 
                                    ref={scrollRef}
                                    data-lenis-prevent
                                    className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar overscroll-contain"
                                >
                                    {messages.map((msg) => (
                                        <div 
                                            key={msg.id}
                                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div className={`flex gap-3 max-w-[85%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                                                <div className={`w-8 h-8 rounded-xl shrink-0 flex items-center justify-center ${msg.sender === "bot" ? "bg-theme-primary/10 text-theme-primary" : "bg-white/5 text-white/40"}`}>
                                                    {msg.sender === "bot" ? <Bot size={16} /> : <User size={16} />}
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <div className={`p-4 rounded-3xl text-sm leading-relaxed ${msg.sender === "bot" ? "bg-white/5 text-white/80 border border-white/5" : "bg-theme-primary text-white shadow-lg shadow-theme-primary/10"}`}>
                                                        {msg.text}
                                                    </div>
                                                    <span className={`text-[9px] font-mono text-white/20 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
                                                        {msg.timestamp}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Typing Indicator */}
                                    {isTyping && (
                                        <div className="flex justify-start">
                                            <div className="flex gap-3 max-w-[85%]">
                                                <div className="w-8 h-8 rounded-xl shrink-0 flex items-center justify-center bg-theme-primary/10 text-theme-primary">
                                                    <Bot size={16} />
                                                </div>
                                                <div className="p-4 rounded-3xl bg-white/5 border border-white/5 flex gap-1.5 items-center">
                                                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-gray-500" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Suggestions Flowed into Chat */}
                                    <div className="flex flex-col items-start gap-2 pt-4">
                                        {SUGGESTIONS.map((s) => (
                                            <button
                                                key={s}
                                                onClick={() => handleSend(s)}
                                                className="px-5 py-2.5 rounded-full border border-theme-primary/15 bg-theme-primary/5 text-theme-primary text-[11px] font-medium hover:bg-theme-primary hover:text-white hover:border-theme-primary transition-all text-left w-fit shadow-sm"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Input Area Refined */}
                                <div className="p-4 sm:p-6 bg-dark-400 border-t border-white/5">
                                    <form 
                                        onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
                                        className="flex flex-col gap-3"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 relative">
                                                <input
                                                    value={inputValue}
                                                    onChange={(e) => setInputValue(e.target.value)}
                                                    placeholder={`Ask about ${BOT_NAME}...`}
                                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs text-white focus:border-theme-primary/50 focus:bg-white/[0.08] transition-all outline-none placeholder:text-white/20 font-medium"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white/40 flex items-center justify-center hover:text-theme-primary hover:border-theme-primary/30 hover:bg-theme-primary/5 active:scale-95 transition-all shadow-lg"
                                            >
                                                <Send size={20} />
                                            </button>
                                        </div>
                                        <div className="flex justify-between px-2">
                                            <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest">{inputValue.length}/500</span>
                                            <span className="text-[9px] font-mono text-white/10 uppercase tracking-widest leading-none">Enter to send</span>
                                        </div>
                                    </form>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
