const theme = require('tailwindcss/defaultTheme');
const twtype = require('@tailwindcss/typography');
const twforms = require('@tailwindcss/forms');

module.exports = {
  content: ['./src/_includes/**/*.{html,js,njk}'],
  safelist: [],
  theme: {
    container: {
			center: true,
		},
    fontWeight: {
			"extra-light": 200,
			light: 300,
			normal: 400,
			medium: 500,
			strong: 600
		},
    fontSize: {

	  },
    extend: {
      height: {
			
		},

    },
  },
  variants: {
		display: ['responsive', 'group-hover', 'group-focus'],
	},
  plugins: [ twtype, twforms ]
}