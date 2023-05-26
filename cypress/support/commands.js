// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
require('cypress-downloadfile/lib/downloadFileCommand')



Cypress.Commands.add('Empoloymentstatus', () => {

    cy.contains("Employment Status").click();
   
    cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
  
   // const d = new Date();
     // var fname = "_"+d.getTime()
     let r = (Math.random() + 1).toString(36).substring(7);
    cy.get('[class="oxd-input oxd-input--active"]').eq(1).type("rajesh3"+r)

    cy.xpath('//button[@type="submit"]').click()

})



Cypress.Commands.add("enterText", (element, text) => {
  if (element.includes("//")) {
      cy.xpath(element).type(text);

      cy.log("Entered Text value "+ text) 
  }
  else {
      cy.get(element).type(text);
      cy.log("Entered Text value "+ text) 
  }
})

Cypress.Commands.add("clickonelement", (element) => {

  if (element.includes("//")) {
      cy.xpath(element).click();
  }
  else {
      cy.get(element).click();
  }

})
