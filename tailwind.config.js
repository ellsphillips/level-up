/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        xxs: "200px",
      },
      borderRadius: {
        DEFAULT: "3px",
      },
      colors: {
        "level-up-yellow": "#ffd866",
        "level-up-orange": "#fc9867",
        "level-up-background": "#1C1B21",
        // Greyscale
        "level-up-black": "#222222",
        "level-up-grey-100": "#171717",
        "level-up-grey-85": "#414042",
        "level-up-grey-75": "#707071",
        "level-up-grey-55": "#969697",
        "level-up-grey-35": "#bcbcbd",
        "level-up-grey-15": "#e2e2e3",
        "level-up-grey-5": "#f5f5f6",
        "level-up-off-white": "#fbfbfb",
        "level-up-white": "#ffffff",
      },
      fontFamily: {
        sans: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
