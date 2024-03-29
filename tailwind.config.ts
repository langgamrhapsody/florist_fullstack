import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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

        secondary: {
          DEFAULT: "#fcf5f0",
        },
      },
      fontFamily: {
        ovo: ["var(--font-ovo)"],
        montserrat: ["var(--font-montserrat)"],
        worksans: ["var(--font-worksans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
export default config;
