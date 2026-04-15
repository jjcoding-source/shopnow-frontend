import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#534AB7",
        "primary-light": "#EEEDFE",
        "primary-dark": "#26215C",
        accent: "#AFA9EC",
        background: {
          primary: "#FFFFFF",
          secondary: "#F8F7FF",
          tertiary: "#F1F0FF",
        },
        text: {
          primary: "#26215C",
          secondary: "#3C3489",
          tertiary: "#888780",
        },
      },
      borderRadius: {
        "shopnow": "12px",
      },
    },
  },
  plugins: [],
};
export default config;