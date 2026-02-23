"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setMounted(true);
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        // Track links and buttons for hover effect
        const interactables = document.querySelectorAll("a, button, [role='button']");
        interactables.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactables.forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart);
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [cursorX, cursorY]);

    if (!mounted) return null;

    return (
        <div className="custom-cursor">
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] border border-theme-primary/20"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? "rgba(248, 87, 42, 0.03)" : "transparent",
                    borderColor: isHovering ? "rgba(248, 87, 42, 0.4)" : "rgba(248, 87, 42, 0.2)",
                }}
            />

            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_#fff]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    scale: isHovering ? 0 : 1,
                }}
            />

            {/* Hover Crosshair / Reticle pieces */}
            <AnimatePresence>
                {isHovering && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                        className="fixed top-0 left-0 pointer-events-none z-[9999]"
                        style={{
                            x: cursorXSpring,
                            y: cursorYSpring,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    >
                        <div className="relative w-16 h-16">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-theme-primary" />
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-theme-primary" />
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-theme-primary" />
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-theme-primary" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
