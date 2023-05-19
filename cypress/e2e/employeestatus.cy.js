import manjushree from '../fixtures/addempoloyee.json'
import login from '../pageobjects/loginpage.po'
import addjob from '../pageobjects/addjob.po'
describe('Add Employee Status', () => {

    it('Logs in and adds a  employee Status', () => {
        cy.visit('/');

        // Enter login credentials and click login button
        cy.xpath(login.usernameInput()).type(manjushree.username);
        cy.xpath(login.passwordInput()).type(manjushree.userpassword);
        cy.get(login.loginButton()).click();

        // Verify that login is successful
         cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains(addjob.admin()).click()

       // cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
        cy.contains(addjob.jobsubmenu()).click()
       
        
        cy.contains(addjob.empstatus()).click();

        cy.get(addjob.addbtn()).click()

        cy.get(addjob.jobname()).eq(1).type("Permanent")
      
        cy.xpath('//button[@type="submit"]').click()

    })
})
