import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // IN CASE THERE IS DARKMODE REQUEST
        primary: {
          DEFAULT: "#fddfd6",
          // dark: '',
        },
      },
      fontFamily: {
        poppins: ["var(--font-ovo)"],
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
