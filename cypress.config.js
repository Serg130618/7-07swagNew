const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5i2ry",
  e2e: {
    baseUrl: "https://petstore.swagger.io/v2",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
