// eslint.config.cjs
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  // Recommended ESLint rules
  js.configs.recommended,

  // Custom project rules
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.jest,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
