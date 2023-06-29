/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Lobster', 'cursive'],
        'sans': ['Poppins', 'sans-serif']
      },
      colors: {
        'lightBrown': '#FFD699',
        'darkBrown': '#A1674A',
        'facebook': '#1877F2',
        'instagram': '#C7389D'
      },
      grayscale: {
        50: '50%',
      },
      letterSpacing: {
        ultraWide: '0.50em',
      }
    },
  },
  plugins: [],
}