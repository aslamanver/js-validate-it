module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "google"],
  rules: {
    quotes: ["error", "double"],
    "require-jsdoc": 0,
    "quote-props": 0,
    "object-curly-spacing": 0,
    "max-len": 0,
    "space-before-function-paren": 0,
    "no-unused-vars": 1,
    "padded-blocks": 0,
  },
};
