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
    spacing: createSpacingConfig(20),
    extend: {
      colors: {
        primary: "#f5f1ef",
      },
      fontFamily: {
        sans: "var(--font-qanelas)",
      },
      fontSize: {
        xl: ["32px", "40px"],
      },
    },
  },
  plugins: [],
};
export default config;
