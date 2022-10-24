// no use of eslint-plugin-prettier: it is against prettier philosophy https://prettier.io/docs/en/integrating-with-linters.html#notes

module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'standard'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  root: true,
  rules: {
    "@typescript-eslint/ban-ts-comment": "warn",
    "comma-dangle": ["error", "always-multiline"],
    "no-console": "warn",
    "no-useless-constructor": "warn",
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "asyncArrow": "always",
      "named": "never"
    }]
  },
  env: {
    "jest/globals": true
  }
};
