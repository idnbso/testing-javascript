const {defineConfig} = require('cypress')

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 400,

  e2e: {
    baseUrl: 'http://localhost:8080',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
