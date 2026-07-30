import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Deep pine — grounded, credible, reads as "growth/wealth" without
        // skewing corporate-cold or soft-feminine. Used for nav, headings,
        // primary UI.
        pine: {
          50: "#f2f7f5",
          100: "#e0ede8",
          200: "#c3dbd1",
          300: "#98c0b0",
          400: "#679c89",
          500: "#457d6c",
          600: "#336457",
          700: "#2b5148",
          800: "#24413b",
          900: "#1f3732",
          950: "#0f1e1b",
        },
        // Warm clay/terracotta — the "door" color. Used for CTAs and the
        // door motif so it feels warm and inviting rather than a hard sell.
        clay: {
          50: "#fdf5f1",
          100: "#fbe8de",
          200: "#f6cdb8",
          300: "#efab87",
          400: "#e67f52",
          500: "#d9602f",
          600: "#c14a20",
          700: "#a03a1c",
          800: "#82311d",
          900: "#6b2a1b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
