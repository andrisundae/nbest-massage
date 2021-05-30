module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '19px': 19,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
