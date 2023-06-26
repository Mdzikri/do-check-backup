/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/section/**/*.{js,jsx,ts,tsx}",
    "./src/layouts/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "wool-background": {
          primary: "#F9FCFE",
          secondary: "#EAF5FE",
        },
        "wool-blue": "#2A9EF4",
        "wool-orange": "#FDB827",
        "wool-red": "#F84F31",
        "wool-green": "#6EC51E",
        "wool-dark-purple": "#3B3348",
        "wool-neutral": {
          100: "#3E3E3E",
          200: "#2F3940",
          300: "#D5F5F6",
          400: "#D6DFE3",
          500: "#FFFFFF",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
