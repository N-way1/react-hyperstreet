/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        main: '#213A51',
        blue: '#3983C7',
        gray: '#CACACA',
      }
    },
  },
  plugins: [],
}

