/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}",
    "./src/*.{jsx,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#141414",
        "indigo-dye": "#1B4965",
        "maximum-blue": "#42BFDD",
        "powder-blue": "#BBE6E4",
        "cameo-pink": "#DBB1BC",
        "cambridge-blue": "#B3D6C6",
        "pale-spring-bud": "#DCEAB2",
        "dark-blue-gray": "#6A66A3",
        "ua-red": "#D61C4E",
        "cultured": "#F3F3F3"
      }
    },
  },
  plugins: [],
}
