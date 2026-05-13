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
        navbg: "rgba(250, 248, 245, 0.5)",
        border: "rgba(226, 218, 207, 1)",
        themecolorV2: "rgb(39, 87, 18)",
        themecolorv3: "rgb(38, 99, 105)",
        themecolorv4: "rgb(31, 71, 74)",
        themecolor: "rgb(90, 40, 53)",
        themebg: "rgb(247, 247, 247)",
        themecolorhover: "rgba(176, 133, 140, 1)",
        navbtn: "rgba(134, 114, 98, 1)",
        navbtnfocus: "rgba(87, 75, 65, 1)",
        softgrey: "rgb(199, 199, 199)",
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
