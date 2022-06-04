const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray[300]'),
            a: {
              color: theme('colors.gray[100]'),
              code: {
                color: theme('colors.gray[100]'),
              },
            },
            strong: { color: theme('colors.gray[100]') },
            ol: {
              li: {
                '&::marker': { color: theme('colors.gray[400]') },
              },
            },
            ul: {
              li: {
                '&::marker': { backgroundColor: theme('colors.gray[400]') },
              },
            },
            hr: { borderColor: theme('colors.gray[600]') },
            blockquote: {
              color: theme('colors.gray[100]'),
              borderLeftColor: theme('colors.gray[700]'),
            },
            h1: { color: theme('colors.gray[100]') },
            h2: { color: theme('colors.gray[100]') },
            h3: { color: theme('colors.gray[100]') },
            h4: { color: theme('colors.gray[100]') },
            h5: { color: theme('colors.gray[100]') },
            h6: { color: theme('colors.gray[100]') },
            code: { color: theme('colors.gray[100]') },
            pre: {
              color: theme('colors.gray[200]'),
              backgroundColor: theme('colors.gray[800]'),
            },
            thead: {
              th: {
                color: theme('colors.gray[100]'),
              },
              borderBottomColor: theme('colors.gray[600]'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray[700]'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
