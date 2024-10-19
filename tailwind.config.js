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
        primary: "#D3B0AC",
        text: "#625E58",
        inactive: "#D2CCC4",
      },
      fontFamily: {
        italiana: ["var(--italiana)"],
        "instrument-sans": ["var(--instrument-sans)"],
        "purple-purse": ["var(--purple-purse)"],
      },
    },
  },
  plugins: [],
};
