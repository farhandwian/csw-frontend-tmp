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
        cardItemPreTest: "/img/card_recently_pretest.png",
      },
      colors: {
        pl: {
          //pl=pallete
          primary: "#6255A4",
          RoyalBlue: "#0066D7",
          GreenButton: "#8EC63F",
          GrayDefault: "#e5e7eb",
          GreenQuestionNow: "#8EC63F",
          Orange: "#FFA056",
          BackgroundUserDashboard: "#F9F9F9",
          GrayUserDashboard: "#F9FAFB",
          GreenUserDashboard: "#9BE1BD",
          GrayUserDashboardTabelJamPelaksanaan: "#F8F7FA",
          RedUserDahboard: "#f3736c",
        },
        tp: {
          //tp=typhography
          SteelBlue: "#64748B",
          SlateGray: "#9CA3AF",
          SilverGray: "#B4B4B4",
          Gunmetal: "#1F2937 ",
          BlueUserDashboard: "#2563EB",
          GrayTabelJadwalUserDashboard: "#9CA3AF",
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
