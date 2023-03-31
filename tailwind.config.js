/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#24053E",
        "davy-grey": "#584D62",
        "white": "#FFFFFF",
        "eucaplyptus": "#44FFA1",
        "ghost-white": "#FCF8FF"
      },
      fontFamily: {
        Fraunces: ["Fraunces", "sans-serif"],
        Manrope: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
};