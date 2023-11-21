module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#fff9f6", 300: "#dedbd3", 600: "#79766f", 800: "#4c4a46" },
        black: {
          900: "#000000",
          "900_4c": "#0000004c",
          "900_01": "#001315",
          "900_b2": "#000000b2",
        },
        deep_orange: { A100: "#ffa87a" },
        orange: { A700: "#ff5900" },
        blue_gray: { 900: "#383632" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { ppneuemontreal: "PP Neue Montreal", roboto: "Roboto" },
      boxShadow: { bs: "0px 1px  8px 0px #0000004c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
