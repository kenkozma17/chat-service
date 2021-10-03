module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        'primary-dark': '#16162C',
        'secondary-dark': '#2E2E42'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-caret-color')(),
  ],
}
