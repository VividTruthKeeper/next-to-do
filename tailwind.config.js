/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        animatable: "1fr auto",
      },
      backgroundColor: {
        main: "#38938A",
        secondary: "#54BAB9",
      },
      textColor: {
        main: "#38938A",
        secondary: "#54BAB9",
      },
      borderColor: {
        main: "#38938A",
        secondary: "#54BAB9",
      },
    },
  },
  plugins: [],
};
