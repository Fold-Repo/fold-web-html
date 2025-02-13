/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#0EA5E9",
        // secondary: "#FFC107",
        // danger: "#E91E63",
        // success: "#4CAF50",
        // info: "#2196F3",
        // warning: "#FF9800",
        gray: "#4B5563",
        gray2: "#D0D5DD",
        dark: "#111827",
        dark2: "#101928",
      },
    },
  },
  plugins: [require("flowbite/plugin", )],
};
