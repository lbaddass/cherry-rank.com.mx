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
        void: "#0A0A0A",
        cream: "#FAF8F5",
        cherry: "#E94F37",
        burnt: "#FF6B35",
        ink: "#1A1A1A",
        ash: "#6B6B6B",
        smoke: "#2A2A2A",
        pearl: "#EAE6DF",
        success: "#10B981",
        // Legacy aliases for secondary pages
        background: "#0A0A0A",
        foreground: "#FAF8F5",
        primary: "#E94F37",
        accent: "#E94F37",
        highlight: "#FF6B35",
        surface: "#FAF8F5",
        secondary: "#EAE6DF",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "sans-serif"],
      },
      maxWidth: {
        container: "80rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
        "in-decel": "cubic-bezier(0.0, 0.0, 0.2, 1)",
        "spring-soft": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "hero-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.4)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
