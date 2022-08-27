/* eslint-disable @typescript-eslint/no-var-requires */
const customThemes = require('./themes/customThemes.js');

module.exports = {
  content: ['./pages/**/*.tsx', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: customThemes
  },
  variants: {
    extend: {}
  },
  plugins: []
};
