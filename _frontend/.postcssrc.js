/**
 * .postcssrc.js
 * =============
 */

const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano')({
  preset: ['default', {
    autoprefixer: false,
    discardComments: { removeAll: true },
  }],
});

// console.log(autoprefixer().info());

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
  ],
};
