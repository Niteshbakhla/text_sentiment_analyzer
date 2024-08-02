const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        jump: 'jump 0.3s ease',
        fadeIn: 'fadeIn 0.5s ease-out',
        'gradient-move': 'gradient-move 8s ease infinite', // New animation
        'border-move': 'border-move 3s linear infinite', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'border-move': { // New keyframes for border animation
          '0%': { 'border-width': '2px 2px 2px 2px' },
          '25%': { 'border-width': '2px 4px 2px 4px' },
          '50%': { 'border-width': '2px 6px 2px 6px' },
          '75%': { 'border-width': '2px 4px 2px 4px' },
          '100%': { 'border-width': '2px 2px 2px 2px' },
        },
        jump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 0%',
          },
          '100%': {
            backgroundPosition: '100% 100%',
          },
        },
        'gradient-move': { // New keyframes
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [],
});
