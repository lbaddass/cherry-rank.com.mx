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
        background: "#F9F7F2",
        foreground: "#0F0F0D",
        primary: "#1A3C34",
        secondary: "#E2DDD5",
        accent: "#4A2C2F",
      },
      fontFamily: {
        crimson: ["var(--font-crimson)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
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
