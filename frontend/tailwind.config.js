/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",

    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      backgroundColor: {
        'black': '#21130d', // Replace with your desired color code
    }
    
      
    },
  },
  plugins: [],
}