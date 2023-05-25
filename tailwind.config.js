/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "1.5xl": "1490px",
        "xmd": "1184px",
      },
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

