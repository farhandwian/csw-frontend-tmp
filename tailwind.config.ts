import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
        "4xs": "0.375rem",
      },
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
          GraySidebarMateriModul: "#F7F7F7",
          DarkBlueSidebarMateriModul: "#127CA6",
          DarkBlueSidebarMateriModul2: "#1594C5",
          BlueSidebarMateriModul: "#31B9ED",
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
  plugins: [
    require("flowbite/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
  ],
};

export default config;
