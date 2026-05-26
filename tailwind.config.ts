import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4af37",
          light: "#e8c86a",
          dark: "#b8941e",
          dim: "#a08830",
        },
        surface: {
          DEFAULT: "#08080e",
          1: "#0e0e18",
          2: "#14141f",
          card: "#1a1a2e",
          hover: "#22223a",
        },
        text: {
          DEFAULT: "#ececf5",
          2: "#a8a8c0",
          3: "#6e6e88",
        },
        border: { DEFAULT: "#2a2a3e", 2: "#3a3a50" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        text: ["var(--font-text)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
