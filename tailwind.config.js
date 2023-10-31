/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js, jsx}", './public/index.html'],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      'subtitle': '12rem',
      'header': '15rem',
    },
    extend: {
      colors: {
        'lilac': '#BA98DE',
        'orange': '#FFBA3A',
        'pink': '#E86BBB',
      }
    },
  },
  plugins: [],
}

