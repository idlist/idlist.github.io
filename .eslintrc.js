/* eslint-disable */

module.exports = {
  'env': {
    'es6': true,
    'browser': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module'
  },
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'rules': {
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'indent': ['warn', 2, { 'SwitchCase': 1 }]
  }
}