// import test from './src/test.svg';
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js, jsx}", './public/index.html'],
  theme: {
    fontFamily: {
      'serif': ['Rozha One', 'serif']
    },
    fontSize: {
      ...defaultTheme.fontSize,
      'subtitle': '9rem',
      'header': '12rem',
      '8.5xl': '7rem',
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      xl: '30px',
    },
    screens: {
      xs: '350px',
      sm: '640px', 
      md: '768px', 
      lg: '1024px', 
      xl: '1159px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'taupe': '#DCCCBB',
        'darker-grey': '#B9B9B9',
        'dark-grey': '#8F8E8E',
        'forest-green': '#3C6C5D',
        'green': '#6C9262',
        'grey': '#D9D9D9',
        'lilac': '#BA98DE',
        'lime': '#B9B73A',
        'mint': '#C2DEC7',
        'pink': '#FFB0D2'
      },
      height: {
        '90': '344px',
      },
      maxWidth: {
        'max-w-3xl': '50rem'
      },
      width: {
        '11/20': '55%',
      },
    },
  },
  plugins: [],
}

