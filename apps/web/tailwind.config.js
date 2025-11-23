/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./public/**/*.html",

    // Pour inclure tes classes dynamiques (raw)
    {
      raw: `
        bg-[url('/images/parchment.png')]
        bg-[url('/images/bg-hall.png')]
        bg-[url('/images/bg-study.jpg')]
      `,
    },
  ],

  theme: {
    extend: {
      backgroundImage: {
        parchment: "url('/images/parchment.png')",
        hall: "url('/images/bg-hall.png')",
        study: "url('/images/bg-study.jpg')",
      },
    },
  },

  plugins: [],
};

module.exports = config;
