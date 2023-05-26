import manjushree from '../../fixtures/addempoloyee.json'
import login from '../../pageobjects/loginpage.po'
import addjob from '../../pageobjects/addjob.po'
describe('Add shift time', () => {

    it('Logs in and adds a shift Status', () => {
        cy.visit('/');

        // Enter login credentials and click login button
        cy.xpath(login.usernameInput()).type(manjushree.username);
        cy.xpath(login.passwordInput()).type(manjushree.userpassword);
        cy.get(login.loginButton()).click();

        // Verify that login is successful
         cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');

        cy.contains("Admin").click()

       // cy.get('span[class="oxd-topbar-body-nav-tab-item"]').eq(1).click();
        
       cy.contains("Job ").click()
      // const d = new Date();
      //var fname = data.firstname+"_"+d.getTime()  


      cy.Empoloymentstatus()
    
    })
})
