/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    colors:{
      'orange':'hsl(26, 100%, 55%)',
      'pale-orange':'hsl(25, 100%, 94%)',
      'vark-blue':'hsl(220, 13%, 13%)',
      'grayish-blue':'hsl(220, 14%, 75%)',
      'light-grayish-blue':'hsl(223, 64%, 98%)',
      'dark-grayish-blue':'hsl(219, 9%, 45%)',
      'white':'#FFF',
      'black':'#000',
    },
    extend: {
      screens:{
        'tablet': '640px',
      }
    },
  },
  plugins: [],
}
