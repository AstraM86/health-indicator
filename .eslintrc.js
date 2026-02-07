module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true
  },
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-env']
    }
  },
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }]
  },
  plugins: ['jest'],
  overrides: [
    {
      files: ['**/__tests__/**/*.js', '**/*.test.js'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
};