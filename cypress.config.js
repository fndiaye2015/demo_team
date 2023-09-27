const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hr66wa',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://testqa.purse.tech'
  },
});
