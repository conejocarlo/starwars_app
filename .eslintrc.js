module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:import/typescript'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
};
