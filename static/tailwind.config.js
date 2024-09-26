
module.exports = {
  content: ["../../templates/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat-Black': ['Montserrat-Black'],
        'Montserrat-BlackItalic': ['Montserrat-BlackItalic'],
        'Montserrat-Bold': ['Montserrat-Bold'],
        'Montserrat-BoldItalic': ['Montserrat-BoldItalic'],
        'Montserrat-ExtraBold': ['Montserrat-ExtraBold'],
        'Montserrat-ExtraBoldItalic': ['Montserrat-ExtraBoldItalic'],
        'Montserrat-ExtraLight': ['Montserrat-ExtraLight'],
        'Montserrat-ExtraLightItalic': ['Montserrat-ExtraLightItalic'],
        'Montserrat-Italic': ['Montserrat-Italic'],
        'Montserrat-Light': ['Montserrat-Light'],
        'Montserrat-LightItalic': ['Montserrat-LightItalic'],
        'Montserrat-Medium': ['Montserrat-Medium'],
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
    require("@material-tailwind/html/utils/withMT")
  ],
}

