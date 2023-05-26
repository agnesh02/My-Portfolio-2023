/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_semi_bold: "poppins-semi-bold",
        poppins_italic: "poppins-italic",
        poppins_light: "poppins-light",
        poppins_medium: "poppins-medium",
        poppins_regular: "poppins-regular",
        poppins_thin: "poppins-thin",
      },
      margin: {
        _10: -10,
      },
    },
  },
  plugins: [],
};
