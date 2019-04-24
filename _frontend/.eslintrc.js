/**
 * .eslintrc.js
 * ============
 *
 * Configuring Rules
 * - "off" or 0 - turn the rule off
 * - "warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
 * - "error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
 */

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  globals: {
    initClasses: true, // Vanilla JS
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'max-len': ['error', { code: 120, ignoreUrls: true, tabWidth: 2 }],
    'no-console': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'state', // for Vuex
      ],
    }],
  },
};
