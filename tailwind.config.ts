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
        background: "#161616",
        foreground: "#FEF8E8",
        primary: "#161616",
        accent: "#F44A22",
        highlight: "#D81E28",
        surface: "#FEF8E8",
      },
      fontFamily: {
        clash: ["var(--font-clash)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
      },
      transitionDuration: {
        fast: "200ms",
        medium: "400ms",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
