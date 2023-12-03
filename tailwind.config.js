/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customColor: "#fdf2ec",
        // Add more custom colors as needed
        // colorName: "#hexValue",
      },
    },
  },
  plugins: [],
};
