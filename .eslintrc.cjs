// no use of eslint-plugin-prettier: it is against prettier philosophy https://prettier.io/docs/en/integrating-with-linters.html#notes

module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  rules: {
    "no-console": 1,
    "space-before-function-paren": ["error", "never"],
    "comma-dangle": ["error", "always-multiline"]
  }
};
