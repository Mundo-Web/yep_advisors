/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      fontWeight: {
        medium: "500",
        regular: "400",
        semibold: "600",
      },
      fontSize: {
        mediumSize: "56px",
        regularSize: "18px",
        basicSize: "16px",
        basic: "14px",
        basicLittle: "12px",
        subtitle: "48px",
        littleTitle: "24px",
        middleTitle: "40px",
        middle: "32px",
      },
      backgroundColor: {
        colorButton: "#173525",
        colorBackground: "#2D694B",
        colorFooter: "#173525",
        colorCombo: "#F9FCFB",
      },
      textColor: {
        colorSubtitle: "#113E55",
        colorSubtitleLittle: "#173525",
        colorAdd: "#2D694B",
      },
      borderColor: {
        selectCheck: "#173525",
      },
    },
    screens: {
      xs: "320px",
      "2xs": "370px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwindcss-animated"), require("preline/plugin")],
};
