import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        navbg: "rgba(250, 248, 245, 0.95)",
        border: "rgba(226, 218, 207, 1)",
        themecolor: "rgba(190, 114, 60, 1)",
        themebg: "rgba(234, 230, 227, 1)",
        themecolorhover: "rgba(176, 133, 140, 1)",
        navbtn: "rgba(134, 114, 98, 1)",
        navbtnfocus: "rgba(87, 75, 65, 1)",
        softgrey: "rgba(98, 101, 81, 1)",
        softpink: "rgba(244,192,168,0.95)",
        mainblack: "rgba(46,37,31,1)",
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-cormorant)", ...defaultTheme.fontFamily.serif],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
