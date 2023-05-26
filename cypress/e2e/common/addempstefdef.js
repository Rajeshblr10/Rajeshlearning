
import addemployee from '../../pageobjects/addemployee.po'
import login from '../../pageobjects/loginpage.po'
import data from '../../fixtures/addempoloyee.json'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('launch urlWhen enter all the deatails', () => {
    cy.visit("/")
    cy.xpath(login.usernameInput()).type(data.username);
    cy.xpath(login.passwordInput()).type(data.userpassword);
    cy.get(login.loginButton()).click();

})
Then('user going to dashboard', () => {
    cy.url("eq", "/web/index.php/dashboard/index").should('include', '/dashboard');
})
When('navigate PIM module', () => {
    cy.contains("PIM").click()

})
When('click on Add Employee sub module', () => {
    cy.contains("Add Employee").click()

})
When('enter employee first name last name', () => {

    let r = (Math.random() + 1).toString(36).substring(7);
    cy.xpath(addemployee.Firstname()).type("rajesh" + r)
    cy.get(addemployee.Lastname()).type(data.lastname)

})
Then('click on save button', () => {
    cy.get(addemployee.switchbtn()).click();

})