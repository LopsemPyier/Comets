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
          login: '40% auto',
          signup: 'auto 40%',
          hero: '65% auto',
        },
        gridTemplateRows: {
          login: '40% auto',
          signup: 'auto 40%',
        },
        colors: {
          white: '#ffffff',
          'gray-lightest': '#f8f8f9',
          'gray-lighter': '#e5e4e6',
          'gray-light': '#d1d1d2',
          gray: '#bebebf',
          'gray-dark': '#979697',
          'gray-darker': '#6f6f70',
          'gray-darkest': '#484849',
          black: '#212121',
  
          primary: {
            light: '#767ccd',
            DEFAULT: '#5158bf',
            dark: '#3b42a2',
          },
  
          secondary: {
            light: '#f0d37c',
            DEFAULT: '#EBC44E',
            dark: '#e6b520',
          },
  
          'cta-light': '#f2ded1',
          cta: '#bf8151',
          'cta-dark': '#5c402b',
  
          'info-light': '#daf0fc',
          info: '#46c2f2',
          'info-dark': '#2d5c71',
  
          'warning-light': '#fdefd3',
          warning: '#e6c051',
          'warning-dark': '#6d5b2c',
  
          'success-light': '#d9f4d8',
          success: '#58d068',
          'success-dark': '#316335',
  
          'danger-light': '#ffd3d4',
          danger: '#e6405d',
          'danger-dark': '#6e2730',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
