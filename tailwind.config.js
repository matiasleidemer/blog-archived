// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // fontFamily: {
      //   // sans: ['Inter', ...defaultTheme.fontFamily.sans],
      // },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: 400,
              color: theme('colors.pink.600'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
