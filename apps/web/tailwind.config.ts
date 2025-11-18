import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./pages/**/*.{ts,tsx,mdx}",
    "./public/**/*.html",
    // Si tu veux forcer l'inclusion de classes dynamiques ou non détectées
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
}
export default config
