// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     darkMode: ['class'],
//     content: [
//         // './pages/**/*.{ts,tsx}',
//         // './components/**/*.{ts,tsx}',
//         // './app/**/*.{ts,tsx}',
//         // './src/**/*.{ts,tsx}',
//         './index.html',
//         './src/**/*.{js,ts,jsx,tsx}',
//     ],
//     theme: {
//         container: {
//             center: true,
//             padding: '2rem',
//             screens: {
//                 '2xl': '1400px',
//             },
//             colors: {
//                 white: '#ffffff',
//                 black: '#2C2C2C',
//                 whiteBg: '#F5EAF9',
//                 purple: '#E27BF5',
//             },
//             fontFamily: {
//                 mulish: ['Mulish', 'sans-serif'],
//                 space: ['Space Mono', 'monospace'],
//             },
//         },
//         extend: {
//             keyframes: {
//                 'accordion-down': {
//                     from: { height: 0 },
//                     to: { height: 'var(--radix-accordion-content-height)' },
//                 },
//                 'accordion-up': {
//                     from: { height: 'var(--radix-accordion-content-height)' },
//                     to: { height: 0 },
//                 },
//             },
//             animation: {
//                 'accordion-down': 'accordion-down 0.2s ease-out',
//                 'accordion-up': 'accordion-up 0.2s ease-out',
//             },
//         },
//     },
//     plugins: [require('tailwindcss-animate')],
// };

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
