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
        "text-red": "#E13833",
      },

      backgroundImage: {
        "cover-pic": "url('/public/img/profile-main.png')",
        "linear-gradient": "linear-gradient(to right, #1DA1F2, 15%, #FFFF)",
      },
    },
  },
  plugins: [],
};
