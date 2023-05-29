import manjushree from '../fixtures/addempoloyee.json'
import login from '../pageobjects/loginpage.po'

describe('Add work shift in job', () => {

    it('Logs in and add workshift', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        // Enter login credentials and click login button
        cy.xpath(login.usernameInput()).type(manjushree.username);
        cy.xpath(login.passwordInput()).type(manjushree.userpassword);
        cy.get(login.loginButton()).click();

        // Verify that login is successful
         cy.url("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains("Admin").click()

       // cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
        cy.contains("Job").click()
       
        //type somting
        cy.contains("Work Shifts").click();

        cy.get('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()

        cy.get('input[class="oxd-input oxd-input--active"]').eq(1).type("day")
      
        cy.xpath('//button[@type="submit"]').click()

    })
})
