/* eslint-disable */

module.exports = {
  'env': {
    'es6': true,
    'browser': true
  },
  'extends': 'eslint:recommended',
  'plugins': [
    'react'
  ],
  'parserOptions': {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
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
    'indent': ['warn', 2, { 'SwitchCase': 1 }],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-no-undef': 'warn'
  },
  settings: {
    'react': {
      'pragma': 'm'
    }
  }
}