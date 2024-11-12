/** @type {import('tailwindcss').Config} */
const gradients = require('tailwindcss-gradients');

module.exports = {
  content: [".*/*.{html,js}", ],
  theme: {
    extend: {
      colors: {
        financeBlue : '#005A9C',
      },
    },
  },
  plugins: [gradients],
  theme: {
    linearGradientColors: {
      'finance-blue': ['#005A9C', '#4fa3e4'],
    },
  },
};




