module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '470': '470px',
        'mobile': '540px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
