/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        syne: ["Syne", "sans-serif"],
      },
      colors: {
        accent: "#ff804a", // Example primary color
        dark: "#010208", // Dark background color
        gray: "#cbcbcb", // Light gray
        white: "#ffffff", // Explicit white
      },
    },
  },
  plugins: [],
};
