/*
 *
 * Name: "tailwind.config.js"
 * Link: "tailwind.config.js"
 *
 */
//* * *//

/* Tailwind - Main Config */
const linkBegin = ("./");
function pathConfig(path) {
  return ((linkBegin) + (path));
}
//.
export default {
  content: [
    //("./index.html"),
    ("./**/*.html"),
    //("./syswork/**/*.js"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    //require("@tailwindcss/typography"),
  ],
};

/* Later */
//

//
