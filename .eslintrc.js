module.exports = {
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true, // Enable browser globals like window and document
    node: true, // Enable Node.js environment
    es6: true, // Enable ES6 features
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'next/core-web-vitals'],
  plugins: ['react', 'prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'react/react-in-jsx-scope': 'off', // React is assumed to be in scope,
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks

    // if required then disable rule at hooks level.
    'react-hooks/exhaustive-deps': 'warn', // Check dependencies
    'import/order': ['error', { 'newlines-between': 'always' }],
    'no-unused-vars': 'error',
  },
};
