/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handlee: ["Handlee", "cursive"],      // cho title
        orbitron: ["Orbitron", "sans-serif"], // cho subtitle
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        borderLoop: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        borderLoop: "borderLoop 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        fadeDown: "fadeDown 0.5s ease-out forwards",
      },
      colors: {
        cream: "#FFFDF5",
        blackpure: "#000000",
        lightBg: "#ffffff",
        darkBg: "#0a0a0a",
      },
    },
  },
  plugins: [],
};
