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
        // Sage — sampled from the front doors in the homepage hero photo.
        // The site's warm neutral: light sections, dark sections, and
        // photo-overlay tints all pull from this scale so everything reads
        // as one palette with the hero photo, not just the hero itself.
        sage: {
          50: "#f5f6f1",
          100: "#e9ebe1",
          200: "#d3d6c5",
          300: "#b9bca8",
          400: "#a3a690",
          500: "#8d907c",
          600: "#6e715f",
          700: "#565947",
          800: "#3a3c30",
          900: "#24261e",
          950: "#171810",
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
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        pine: {
          css: {
            "--tw-prose-body": theme("colors.pine[800]"),
            "--tw-prose-headings": theme("colors.pine[900]"),
            "--tw-prose-links": theme("colors.clay[600]"),
            "--tw-prose-bold": theme("colors.pine[900]"),
            "--tw-prose-bullets": theme("colors.clay[400]"),
            "--tw-prose-quotes": theme("colors.pine[900]"),
            "--tw-prose-quote-borders": theme("colors.clay[300]"),
            "--tw-prose-hr": theme("colors.pine[200]"),
            a: { fontWeight: "600", textDecoration: "none" },
            "a:hover": { textDecoration: "underline" },
            "h2, h3": { fontFamily: "var(--font-fraunces), Georgia, serif" },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
