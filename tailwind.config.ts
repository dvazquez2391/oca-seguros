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
        oca: {
          blue: "#006ed2",
          "blue-dark": "#005bb5",
          "blue-light": "#e8f3fc",
          red: "#BA1E2D",
          green: "#28a745",
          "green-light": "#e8f5e9",
          gray: "#f4f4f4",
          "gray-border": "#e0e0e0",
          "text-primary": "#1a1a1a",
          "text-secondary": "#666666",
          "text-muted": "#999999",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
