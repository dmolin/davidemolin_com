/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        london: "url(/img/london-skyline.svg)"
      },
      container: {
        center: true
      },
      fontFamily: {
        sans: ["_Overpass", "Open Sans", "ui-sans-serif", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
};
