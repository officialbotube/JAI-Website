/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: "#112240",
          DEFAULT: "#0a192f",
          dark: "#020c1b",
        },
        royal: {
          light: "#3b82f6",
          DEFAULT: "#1d4ed8",
          dark: "#1e3a8a",
        },
        gold: {
          light: "#f3e5ab",
          DEFAULT: "#d4af37",
          dark: "#aa7c11",
          premium: "#c5a880",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        bangla: ["var(--font-bangla)", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
