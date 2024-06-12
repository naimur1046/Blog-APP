/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        logoColortext: "#2874A6",
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
      },
      fontFamily: {
        opensans: ["'Open-Sans'", "'sans-serif'"],
        roboto: ["Roboto", , "'sans-serif'"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
