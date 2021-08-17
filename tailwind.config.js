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
       'search': '#E29C32', // search button color
       'danger': '#e3342f',
      })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
