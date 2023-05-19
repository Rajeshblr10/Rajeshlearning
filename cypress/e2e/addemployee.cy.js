import data from '../fixtures/addempoloyee.json'
import addemployee from '../pageobjects/addemployee.po'
import login from '../pageobjects/loginpage.po';
describe('Add Employee Test', () => {

  it('Logs in and adds a new employee', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Enter login credentials and click login button
    cy.xpath(login.usernameInput()).type(data.username);
    cy.xpath(login.passwordInput()).type(data.userpassword);
    cy.get(login.loginButton()).click();
    // Verify that login is successful
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains("PIM").click()
    cy.contains("Add Employee").click()
    //const d = new Date();
    //var fname = data.firstname + "_" + d.getTime()
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.xpath(addemployee.Firstname()).type("rajesh"+r)
    cy.get(addemployee.Lastname()).type(data.lastname)
    cy.get(addemployee.switchbtn()).click();
    cy.get(addemployee.username()).type("username"+r) 
    cy.get(addemployee.password()).type (data.password)
    cy.get(addemployee.confirmpassword()).type(data.password)
    cy.get(addemployee.savebtn()).click()
  });

  it('Verify character limit for firstname in add employee ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Enter login credentials and click login button
    cy.xpath(login.usernameInput()).type(data.username);
    cy.xpath(login.passwordInput()).type(data.userpassword);
    cy.get(login.loginButton()).click();
    // Verify that login is successful
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains("PIM").click()
    cy.contains("Add Employee").click()
    //const d = new Date();
    //var fname = data.firstname + "_" + d.getTime()
    //worng empolee name
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get(addemployee.Firstname()).type("kjksjadlajllsfalwdflwalljdjfaldjfdjfaddfldldjldjdljgdjgdjgfjgfjgkfjkjf")
    cy.contains("Should not exceed 30 characters").should("be.visible")
  }); 
it('verify add employee', () => {
    cy.visit('/');

    // Enter login credentials and click login button
    cy.xpath(login.logininput("username")).type(data.username);
    cy.xpath(login.logininput("password")).type(data.userpassword);
    cy.get(login.loginButton()).click();
    // Verify that login is successful
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains("PIM").click()
    cy.contains("Add Employee").click()
    //const d = new Date();
    //var fname = data.firstname + "_" + d.getTime()
    //worng empolee name
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get(addemployee.Firstname()).type("kjksjadlajllsfalwdflwalljdjfaldjfdjfaddfldldjldjdljgdjgdjgfjgfjgkfjkjf")
    cy.get(addemployee.Lastname()).type(data.lastname)
    cy.get(addemployee.switchbtn()).click();
    cy.get(addemployee.username()).type("usernsme") 
    cy.get(addemployee.password()).type (data.password)
    cy.get(addemployee.confirmpassword()).type(data.password)
    cy.get(addemployee.savebtn()).click()
  }); 

it.only('Verify confirm password is reqquired field in add employee', () => {
    cy.visit('/');

    // Enter login credentials and click login button
    cy.xpath(login.usernameInput()).type(data.username);
    cy.xpath(login.passwordInput()).type(data.userpassword);
    cy.get(login.loginButton()).click();
    // Verify that login is successful
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains("PIM").click()
    cy.contains("Add Employee").click()
    //const d = new Date();
    //var fname = data.firstname + "_" + d.getTime()
    //worng empolee name
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get(addemployee.nameinput("First Name")).type(data.firstname+r)
    cy.get(addemployee.nameinput("Last Name")).type(data.lastname)
    cy.get(addemployee.switchbtn()).click();
    cy.xpath(addemployee.username()).type("Username") 
    cy.xpath(addemployee.password()).type (data.password)
    //cy.xpath(addemployee.confirmpassword()).type("")
    cy.get(addemployee.savebtn()).click()
    cy.contains("Required").should("be.visible")


  }); 

  it('Logs in mention 12 charctor passoword addemployee ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    // Enter login credentials and click login button
    cy.xpath(login.usernameInput()).type(data.username);
    cy.xpath(login.passwordInput()).type(data.userpassword);
    cy.get(login.loginButton()).click();
    // Verify that login is successful
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains("PIM").click()
    cy.contains("Add Employee").click()
    //const d = new Date();
    //var fname = data.firstname + "_" + d.getTime()
    //worng empolee name
    let r = (Math.random() + 1).toString(36).substring(7);
    cy.get(addemployee.Firstname()).type("rajesh"+r)
    cy.get(addemployee.Lastname()).type(data.lastname)
    cy.get(addemployee.switchbtn()).click();
    cy.get(addemployee.username()).type("Username"+r) 
    cy.get(addemployee.password()).type ("rajesh123344")
    cy.get(addemployee.confirmpassword()).type(data.confirmpassword)
    cy.get(addemployee.savebtn()).click()
  }); 

});

