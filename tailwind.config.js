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
					dark: '#e6b520',
				},

				error: {
					light: '#ffd3d4',
					DEFAULT: '#e6405d',
					dark: '#6e2730'
				},

				info: {
					light: '#daf0fc',
					DEFAULT: '#46c2f2',
					dark: '#2d5c71'
				},

				warning: {
					light: '#f6e8c2',
					DEFAULT: '#e6c051',
					dark: '#6d5b2c'
				},

				success: {
					light: '#a1ebc3', // '#c4eeca',
					DEFAULT: '#43d787',// '#58d068',
					dark: '#316335'
				}
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
