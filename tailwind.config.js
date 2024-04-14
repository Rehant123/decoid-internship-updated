module.exports = {
    content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          gray: {
            "100": "#fcfcfc",
            "200": "#252727",
          },
          white: "#fff",
          "gray-50": "#f1f1f1",
          cornflowerblue: "#809aff",
          black: "#2c2b2b",
        },
        spacing: {},
        fontFamily: {
          montserrat: "Montserrat",
        },
      },
      fontSize: {
        xs: "12px",
      }
    }
}