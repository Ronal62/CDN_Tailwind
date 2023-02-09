/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
 
  darkMode:'class',
  theme: {
      extend: {
          spacing: {
              13: "3.25rem",
          },
          fontfamily:{
              inter: ['Inter']                       
          },
          colors: {
              phoenix : '#bada55',
              kopi    : '#c0ffee'
          },
          animation:{
              'spin-slow' : 'spin 3s linear infinite', 
              'goyang' : 'goyang 1s ease-in-out infinite',
          },
          keyframes: {
              goyang: {
                  '0% ,100%' : { transform: 'rotate(-4deg)'},
                  '50%' : { transform: 'rotate(3deg)'},
              },
          },
      },
  },
  plugins: [],
}
