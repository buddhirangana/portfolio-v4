import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    100: "#161b22",
                    200: "#0d1117",
                    300: "#0c0d10",
                    400: "#010409",
                },
                theme: {
                    primary: "var(--theme-primary)",
                    secondary: "var(--theme-secondary)",
                    accent: "var(--theme-accent)",
                    alert: "var(--theme-alert)",
                },
                neon: {
                    blue: "var(--neon-blue)",
                    purple: "var(--neon-purple)",
                    cyan: "var(--neon-cyan)",
                    pink: "var(--neon-pink)",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                poppins: ["var(--font-poppins)"],
            },
            animation: {
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
