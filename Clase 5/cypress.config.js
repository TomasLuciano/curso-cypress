const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    'baseUrl': "https://pushing-front.vercel.app/",
    watchForFileChanges: false,
    defaultCommandTimeout: 8000
  },
  env: {
    usuario: "pushingit",
    contraseña: "123456!"
  }
});