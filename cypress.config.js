const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    async setupNodeEvents(on, config) {
      // Aqui você pode adicionar event listeners, se precisar
      return config;
    },
  },
});