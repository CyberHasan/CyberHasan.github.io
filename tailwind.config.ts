import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Kinetic Palette - Sovereign Brand Manual v1.2.0
                "action-gold": "#FFD700",
                "electric-cyan": "#00D2FF",
                "deep-navy-black": "#010409",
                "institutional-white": "#FFFFFF",
                // Legacy aliases
                navy: "#002147",
                gold: "#FFD700",
                aqua: "#00D2FF",
            },
            fontFamily: {
                institutional: ["var(--font-institutional)", "sans-serif"],
            },
        },
        animation: {
            'spin-slow': 'spin 8s linear infinite',
        }
    },
    plugins: [],
};
export default config;
