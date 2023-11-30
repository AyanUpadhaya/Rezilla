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
        labelOne:'#FFE1E1',
        labelTwo:'#D7EEFF',
        labelThree:'#F1FFF1',
        textRed:'#f11',
        textSkyblue:'#119BFF',
        textGreen:'#00CE3A',
        sectionTitle:"#0B090A",
        
      },
      fontWeight:{
        'semilessbold':'500'
      },
      fontSize:{
        'textNinetine':'19.4px'
      },
      borderRadius:{
        '6xl':'50px'
      },
      boxShadow:{
        'badgeshadow':'10px 30px 50px 0px rgba(0, 0, 0, 0.05)',
        'cardShadow':'4px 10px 30px 0px rgba(0, 0, 0, 0.03)',
        'propertyShadow':'4px 10px 30px 0px rgba(0, 0, 0, 0.06);'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  
}

