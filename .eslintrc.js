module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // "prettier/prettier": ["error"],
    "indent": ["error", 2],
    "comma-dangle": ["error", {
      "arrays": "always",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    "quotes": ["error", "double"],
    "max-len": ["error", {
      "code": 80,
      "tabWidth": 2,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreStrings": true
    }],
    "jest/expect-expect": "off",
    "no-console": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "error",
    "semi": ["error", "always"]
  },
};
