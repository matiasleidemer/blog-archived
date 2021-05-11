const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              fontWeight: 400,
              color: theme('colors.pink.600'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            ':not(pre) > code': {
              color: theme('colors.pink.400'),
            },
            a: {
              color: theme('colors.gray.400'),
              '&:hover': {
                color: theme('colors.gray.300'),
              },
              code: { color: theme('colors.gray.400') },
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300'),
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            strong: { color: theme('colors.gray.300') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
    typography: ['responsive', 'dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
