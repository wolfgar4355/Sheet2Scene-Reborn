// .eslintrc.js (apps/web)
module.exports = {
  rules: {
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@engine/*", "@mithril/*"],
      },
    ],
  },
};
