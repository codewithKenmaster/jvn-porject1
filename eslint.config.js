// eslint.config.js
import { FlatCompat } from "@eslint/eslintrc";

// This makes it compatible with older configs if needed
const compat = new FlatCompat({});

export default [
  // use recommended rules
  ...compat.extends("eslint:recommended"),
  {
    rules: {
      // example rules you can adjust
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
