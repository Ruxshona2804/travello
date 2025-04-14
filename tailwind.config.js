const { Volkhov, Roboto } = require("next/font/google");

module.exports = {
    theme: {
      extend: {
        fontFamily: {
          Volkhov: ['var(--font-volkhov)'],
          Roboto: ['var(--font-roboto)'],
        },
      },
    },
  }