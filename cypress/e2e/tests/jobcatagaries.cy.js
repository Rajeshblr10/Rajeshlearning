
import login from '../pageobjects/loginpage.po'

describe('Add Job categaries', () => {

    it('Logs in and adds a job categaries Status', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        // Enter login credentials and click login button
        login.loginwithCredentials("Admin","admin123")
        // Verify that login is successful
         cy.url("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains("Admin").click()

       // cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
        cy.contains("Job").click()
       
        
        cy.contains("Job Categories").click();

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("Permanent")
      
        cy.xpath('//button[@type="submit"]').click()

    })
})
