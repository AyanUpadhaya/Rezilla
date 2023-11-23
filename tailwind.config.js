/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
      },
      colors:{
        primary:"#3A0CA3",
        textdark:"#2B2B2B",
        darkgray:"#808080",
      },
      fontWeight:{
        'semilessbold':'500'
      },
      borderRadius:{
        '6xl':'50px'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
}

