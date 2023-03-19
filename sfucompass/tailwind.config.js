/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require("flowbite/plugin")
  ],
  theme: {},
};
