/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["VT323", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", "sans-serif"],
        vt323: ["VT323", "sans-serif"]
      },
    },
  },
  plugins: [],
};
