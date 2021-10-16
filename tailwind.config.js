module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-green': '#00BC48',
        'secondary-green': '#135C4A',
        'primary-dark': '#16162C',
        'secondary-dark': '#2E2E42',
        'tertiary-dark': '#2a2a3b'
      }
    },
  },
  variants: {
    extend: {}, 
  },
  plugins: [
    require('tailwind-caret-color')(),
  ],
}
