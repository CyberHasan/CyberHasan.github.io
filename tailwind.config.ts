import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                'deep-navy-black': '#010409',
                'action-gold': '#FFD700',
                'electric-cyan': '#00D2FF',
                'institutional-white': '#FFFFFF',
            },
            fontFamily: {
                institutional: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;
