import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        revolution: {
          red: "#d72626",
          black: "#050505",
          graphite: "#111111",
          smoke: "#f5f5f5",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(215, 38, 38, 0.28)",
      },
      backgroundImage: {
        "radial-red": "radial-gradient(circle at top, rgba(215,38,38,0.28), transparent 34rem)",
      },
    },
  },
  plugins: [],
};

export default config;
