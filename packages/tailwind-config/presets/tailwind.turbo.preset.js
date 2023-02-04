const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config}*/
module.exports = {
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
}
