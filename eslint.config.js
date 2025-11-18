// eslint.config.js
// @ts-check
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // remplace .eslintignore
  { ignores: ["**/node_modules/**", "**/.next/**", "**/dist/**", "**/build/**", "**/coverage/**"] },

  // Bases JS/TS
  js.configs.recommended,
  ...tseslint.configs.recommended, // si tu veux la version type-checked: recommendedTypeChecked + parserOptions.project

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,      // <-- nom exact
      "@next/next": nextPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@next/next/no-img-element": "warn",
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
    settings: { react: { version: "detect" } },
  },

  // Fichiers Node/config/scripts
  {
    files: ["**/*.config.{js,cjs,mjs,ts}", "scripts/**/*.{js,ts}", "server.{js,ts}"],
    languageOptions: { globals: globals.node },
  },
];
