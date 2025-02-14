/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "custom-emerald": "#008970",
          "shades" : "#008970",
          'foreground': '#212121'
        },
        fontFamily: {
          sans: ["Graphik", "sans-serif"],
          serif: ["Merriweather", "serif"],
        },
      },
    },
    plugins: [],
  };
  