/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#ffffff',
            black: '#2C2C2C',
            whiteBg: '#F5EAF9',
            purple: '#E27BF5',
        },
        fontFamily: {
            mulish: ['Mulish', 'sans-serif'],
            space: ['Space Mono', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
};
