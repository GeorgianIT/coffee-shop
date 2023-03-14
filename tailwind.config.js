/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'chemex': "url('/src/assets/chemex.jpg')",
      }
    },
  },
  plugins: [],
}
