const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      require("@cypress/code-coverage/task")(on, config);

      return config;
    },
  },
});
