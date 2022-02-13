const theme = require('tailwindcss/defaultTheme');
const twtype = require('@tailwindcss/typography');
const twforms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './src/_includes/**/*.{html,js,njk}',
    './src/content/**/*.{md,html}'
  ],
  safelist: [],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1140px",
        xl: "1280px",
        "2xl": "1440px"
      }
    },
    fontWeight: {
      "extra-light": 200,
      light: 300,
      normal: 400,
      medium: 500,
      strong: 600
    },
    extend: {
      colors: {
        sdred:  '#D92231'
      }
    },
  },

  variants: {
		display: ['responsive', 'group-hover', 'group-focus'],
	},
  plugins: [ twtype, twforms ]
}