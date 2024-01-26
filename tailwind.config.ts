import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        banner: "url('/img/bg.png')",
      },
      colors: {
        customPalette: {
          primary: "#6255A4",
          RoyalBlue: "#0066D7",
          GreenButton: "#8EC63F",
          GreyDefault: "#e5e7eb",
          GreenQuestionNow: "#8EC63F",
        },
        customColorTypography: {
          SteelBlue: "#64748B",
          SlateGray: "#9CA3AF",
          SilverGray: "#B4B4B4",
          Gunmetal: "#1F2937 ",
        },
      },
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};

export default config;
