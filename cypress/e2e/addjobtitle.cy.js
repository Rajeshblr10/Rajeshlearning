
import data from '../fixtures/addempoloyee.json'
import login from '../pageobjects/loginpage.po';
import addjob from '../pageobjects/addjob.po'

describe('Add Job Test', () => {

    it('Logs in and adds a Job', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        // Enter login credentials and click login button
        cy.xpath(login.usernameInput()).type(data.username);
        cy.xpath(login.passwordInput()).type(data.userpassword);
        cy.get(login.loginButton()).click();

        // Verify that login is successful
        cy.url("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains("Admin").click()

        //verify the jobtittle 
 
      cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click()

        cy.contains("Job Titles").click()

        cy.get('i[class="oxd-icon bi-plus oxd-button-icon"]').click()

       // cy.contains("Job Titles").click()
        cy.get(login.loginButton()).click()

    

    });
})