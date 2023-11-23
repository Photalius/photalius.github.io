const postcss = require('postcss');
const namespacePhotaliusStyles = require('./scripts/namespace-photalius-styles.plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    !isDev && namespacePhotaliusStyles,
    !isDev &&
      require('cssnano')({
        preset: 'default',
      }),
  ],
};
