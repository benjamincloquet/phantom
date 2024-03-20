import type { Config } from "tailwindcss";

function createSpacingConfig(numberOfSizes: number): { [key: string]: string } {
  return Object.fromEntries(
    Array.from({ length: numberOfSizes }, (_, size) => [
      `${size}`,
      `${8 * size}px`,
    ]),
  );
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "0.5": "4px",
      ...createSpacingConfig(64),
    },
    extend: {
      colors: {
        "phantom-bg-primary": "#f5f1ef",
        "phantom-bg-secondary": "#ffffff",
        "phantom-text-primary": "#000000",
        "phantom-text-secondary": "#73706e",
        "phantom-accent": "#5273e8",
      },
      fontFamily: {
        sans: "var(--font-qanelas)",
      },
      fontSize: {
        "2xl": ["32px", "40px"],
        xl: ["20px", "24px"],
      },
    },
  },
  plugins: [],
};
export default config;
