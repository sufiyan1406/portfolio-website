/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0f1c',
                primary: '#00f0ff',
                secondary: '#8a2be2',
                darkGlass: 'rgba(17, 24, 39, 0.6)',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            animation: {
                'glow-pulse': 'pulse-glow 2s infinite',
                'float': 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}
