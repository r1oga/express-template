// no use of eslint-plugin-prettier: it is against prettier philosophy https://prettier.io/docs/en/integrating-with-linters.html#notes

module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "no-console": "warn",
    "no-useless-constructor": "warn"
  },
  env: {
    "jest/globals": true
  }
};
