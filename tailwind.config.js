/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Poppins"],
        body: ["Rubik"],
      },

      colors: {
        primary: "#15202B",
        secondary: {
          100: "#ffffff",
          200: "rgba(247, 247, 247, 0.75)",
        },
        tertiary: {
          100: "#1DA1F2",
          200: "rgba(29, 161, 242, 0.75)",
        },
        red: "#E13833",
      },
    },
  },
  plugins: [],
};
