const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    "baseUrl": "https://opensource-demo.orangehrmlive.com",
    "projectId": "rjneib",
    //"specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
     // on('file:preprocessor', webpackPreprocessor);

      //allureWriter(on, config);
      //return config;
       on('task', { downloadFile })

      require('cypress-mochawesome-reporter/plugin')(on);

      //return require('./cypress/plugins/index.js')(on, config);
      // implement node event listeners here
    },
    //allureReuseAfterSpec: true
  },

});
