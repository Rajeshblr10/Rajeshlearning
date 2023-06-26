import qatool from '../../pageobjects/tools da.po'



describe('Add details tools Qa', () => {

    it('enter valid details in tools qa', () => {
        Cypress.on("uncaught:exception", () => {

            return false;
        });

        cy.visit('https://demoqa.com/text-box');

        // Enter login credentials and click login button
        cy.get(qatool.toolsimage()).should("be.visible");
        cy.get(qatool.Firstname()).type("rajesh");
        cy.get(qatool.email()).type("xyz.com")
        cy.get(qatool.currentaddress()).type("ratnagiri")
        cy.get(qatool.permenentaddress()).type("ratnagiri")
        //cy.get('#submit')

       cy.get(qatool.loginButton()).click()

    })
})  