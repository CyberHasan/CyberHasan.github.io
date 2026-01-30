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
                'deep-navy-black': '#010409',
                'action-gold': '#FFD700',
                'electric-cyan': '#00D2FF',
                'institutional-white': '#FFFFFF',
            },
            fontFamily: {
                institutional: ['var(--font-neo-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
