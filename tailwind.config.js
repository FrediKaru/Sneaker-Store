/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff964f",
        lightPrimary: "#ffddab",
        secondary: "#808080",
        lightGray: "#d3d3d3",
      },
    },
  },
  plugins: [],
};
