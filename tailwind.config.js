/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#141612',
        'afwhite': '#E9EBEC',
        'polyblue': '#1D477B',
        'resedagreen': '#6E9075'
      },
      fontFamily :{
        'poppins': ["Poppins"],
        'montserrat': ["Montserrat"]
      },
    },
    
  },
  plugins: [],
}

