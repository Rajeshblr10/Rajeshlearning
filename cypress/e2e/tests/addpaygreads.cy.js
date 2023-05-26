
import login from '../pageobjects/loginpage.po'
import addjob from '../pageobjects/addjob.po'
describe('Add Employee Status', () => {

    it('Logs in and adds a  employee Status', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');

        // Enter login credentials and click login button
        login.loginwithCredentials("Admin","admin123")
        // Verify that login is successful
         cy.url("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains("Admin").click()

       // cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
        cy.contains(addjob.jobsubmenu()).click()
       
        
        cy.contains(addjob.paygreads()).click()

        cy.get(addjob.addbtn()).click()

        cy.get(addjob.paygradename()).eq(1).type("Permanent")
      
        cy.xpath(addjob.savebtn()).click()

    })
})
