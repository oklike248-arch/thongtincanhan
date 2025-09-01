/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {sans: ["Inter", "sans-serif"]},
      keyframes: {
        borderLoop: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        borderLoop: "borderLoop 3s linear infinite",
  theme: { extend: { keyframes: { shimmer: { '0%,100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } } }, animation: { shimmer: 'shimmer 3s ease-in-out infinite' } } }    
      },
    },
  },
  plugins: [],
}
