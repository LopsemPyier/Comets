const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
	prefix: '',
	mode: 'jit',
	purge: {
		content: [
			'./src/**/*.{html,ts,css,scss,sass,less,styl}',
		]
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			gridTemplateColumns: {
				login: '60% auto',
				signup: 'auto 60%',
				hero: '65% auto',
				application: '20% auto'
			},
			gridTemplateRows: {
				login: '40% auto',
				signup: 'auto 40%',
			},
			colors: {
				white: '#ffffff',

				gray: {
					lightest: '#f8f8f9',
					lighter: '#e5e4e6',
					light: '#d1d1d2',
					DEFAULT: '#bebebf',
					dark: '#979697',
					darker: '#6f6f70',
					darkest: '#484849'
				},

				black: '#212121',

				primary: {
					light: '#767ccd',
					DEFAULT: '#5158bf',
					dark: '#3b42a2',
				},

				secondary: {
					light: '#ffdd80',
					DEFAULT: '#ffbb00', // '#EBC44E',
					dark: '#b38300',
				},

				error: {
					light: '#fdf2f2',
					DEFAULT: '#f98080',
					dark: '#cc3231'
				},

				info: {
					light: '#ebf5ff',
					DEFAULT: '#76a9fa',
					dark: '#4879e2'
				},

				warning: {
					light: '#fdfdea',
					DEFAULT: '#e3a008',
					dark: '#9c622d'
				},

				success: {
					light: '#f2faf7', // '#c4eeca',
					DEFAULT: '#32c48d',// '#58d068',
					dark: '#237c62'
				}
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
