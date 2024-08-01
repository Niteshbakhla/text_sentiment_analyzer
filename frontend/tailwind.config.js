/** @type {import('tailwindcss').Config} */
export default {
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
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
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
      },
    },
  },
  plugins: [],
}
