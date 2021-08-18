const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    backgroundColor: theme => ({
       ...theme('colors'),
       'homepage': '#588AA6', // background color for homepage
       'search': '#E29C32', // search button color for homepage
       'test': '#2A3B50', // test button color for homepage
       'firstbox': '#93C9E7', // first box color for steps container on homepage
       'altbox': '#9DDBCC', // alt box color for steps container on homepage
       'navbar': '#111A25', // alt box color for steps container on homepage
      })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
