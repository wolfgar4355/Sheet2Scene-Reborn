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
  // ─────────────────────────────────────────────
  // GLOBAL IGNORES (équivalent .eslintignore)
  // ─────────────────────────────────────────────
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
    ],
  },

  // ─────────────────────────────────────────────
  // BASE JS
  // ─────────────────────────────────────────────
  js.configs.recommended,

  // ─────────────────────────────────────────────
  // TYPESCRIPT (⚠️ PARSER OBLIGATOIRE)
  // ─────────────────────────────────────────────
  ...tseslint.configs.recommended,

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs,cjs}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      // 🔥 C’EST ÇA QUI MANQUAIT
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: true, // détecte tsconfig automatiquement
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // React / Next
      "react/react-in-jsx-scope": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",

      // TypeScript
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],

      // Général
      "no-empty": ["error", { allowEmptyCatch: true }],
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // ─────────────────────────────────────────────
  // NODE / CONFIG / SCRIPTS
  // ─────────────────────────────────────────────
  {
    files: [
      "**/*.config.{js,cjs,mjs,ts}",
      "scripts/**/*.{js,ts}",
      "server.{js,ts}",
    ],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: "module",
      globals: globals.node,
    },
  },
];
