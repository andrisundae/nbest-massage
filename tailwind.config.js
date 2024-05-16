const colors = require("tailwindcss/colors")

module.exports = {
  // mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // Mengganti font default sans dengan Nunito
      },
      backgroundImage: theme => ({
        "section-main": `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('../images/section-mainnew.jpg')`,
        "section-aboutus": `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('../images/section-about.jpg')`,
        "section-service": `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('../images/spa-2.jpg')`,
        "section-choose-us": `linear-gradient(90deg,${colors.gray[50]} 30%,rgba(244,240,233,0) 100%), url('../images/price-1.jpg')`,
      }),
    },
    minHeight: {
      "19px": 19,
    },
    height: {
      "500px": "500px",
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
