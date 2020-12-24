const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': false,
            'code::after': false,
            'pre code::after': false,
            code: {
              border: `1px solid ${theme('colors.gray.200')}`,
              borderRadius: theme('spacing.1'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: 4,
              paddingRight: 4,
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
