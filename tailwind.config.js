/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ['"Poppins"', '"Noto Sans Tamil"', "sans-serif"],
        accent: ['Lato', '"Noto Sans Tamil"', "cursive"],
      }
    },
  },
  plugins: [],
}
