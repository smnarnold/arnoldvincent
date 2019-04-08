/**
 * .stylelintrc.js
 * ===============
 */

let word = `[a-z0-9]+(?:-[a-z0-9]+)*`;
let block = word;
let element = `(?:__${word})*`;
let modifier = `(?:--${word})?`;

module.exports = {
  'extends': [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
  ],
  'rules': {
    'at-rule-no-unknown': null,
    'color-named': ['never', {
      'ignore': ['inside-function']
    }],
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'selector-class-pattern': `^${block}${element}${modifier}$`,
  },
};
