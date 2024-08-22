/** @type {import('tailwindcss').Config} */
// Barevna paleta!
// https://coolors.co/485151-a0b0bd-5e9bd0-363a35-dfe9f2
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlue: "#5E9BD0", 
        customGrey: "#A0B0BD",
        customBlack: "#363A35",
        customWhite: "#DFE9F2",
      }
    },
  },
  plugins: [],
};
