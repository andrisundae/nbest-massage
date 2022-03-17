const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'section-main': `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('/images/section-main.jpg')`,
        'section-aboutus': `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('/images/section-about.jpg')`,
        'section-service': `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('/images/spa-2.jpeg')`,
       }),
    },
    minHeight: {
      '19px': 19,
    },
    height: {
      '500px': '500px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
