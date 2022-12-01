/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#364D76",

          "secondary": "#87d33f",

          "accent": "#f7b4e9",

          "neutral": "#223A66",

          "base-100": "#F1F1F1",

          "info": "#4B8EEC",

          "success": "#17968B",

          "warning": "#F5C238",

          "error": "#E8646D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
