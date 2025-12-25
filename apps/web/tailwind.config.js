/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./hooks/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
    "./public/**/*.html",
  ],

  // Pour inclure les classes dynamiques générées (ex: bg-[url('/images/...')])
  safelist: [
    {
      pattern: /bg-\[url\(\'\/images\/.*\'\)\]/,
    },
  ],

  theme: {
    extend: {
      backgroundImage: {
        parchment: "url('/images/bg-parchment.png')",
        hall: "url('/images/bg-hall.png')",
        study: "url('/images/bg-study.jpg')",
      },
    },
  },

  plugins: [],
};

module.exports = config;
