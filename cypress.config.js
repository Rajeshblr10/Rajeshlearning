const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://opensource-demo.orangehrmlive.com",

    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      // implement node event listeners here
    },
  },
});
