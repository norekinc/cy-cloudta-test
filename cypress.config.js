const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://todomvc.com/examples/vanillajs/',
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
});
