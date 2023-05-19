import login from '../pageobjects/loginpage.po'
import addjob from '../pageobjects/addjob.po'
describe('Add Assign leave', () => {

    it('Logs in a assign  employee leave Status', () => {
        cy.visit('/');

        // Enter login credentials and click login button
        login.loginwithCredentials("Admin", "admin123")
        // Verify that login is successful
        cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
        Cypress.on("uncaught:exception", () => {

            return false;

        });
       // const d = new Date();
       // var fname = data.firstname + "_" + d.getTime()

        cy.contains(addjob.leave()).click();
        cy.get(addjob.moremenu()).click();
        cy.get(addjob.more()).click()
        cy.contains(addjob.assignleave()).click()
        cy.get(addjob.payname()).type("Pavani priya Gadiraju")

        cy.get(addjob.dname()).click()
        cy.contains(addjob.canpersonal()).click()
        cy.get(addjob.date()).eq(1).type('2023-05-18')
        cy.get(addjob.date()).eq(0).type('2023-05-18')

        cy.get(addjob.comments()).type("hsdhhjshsxsx vs")
        cy.get(addjob.savebtn).click()

    })
})