import addjob from '../../pageobjects/addjob.po'
import login from '../../pageobjects/loginpage.po'
import data from '../../fixtures/addempoloyee.json'
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";




When('navigate Admin module', () => {
    cy.contains("Admin").click()
})
And('click on the Job sub module', () => {
    cy.contains("Job").click()
})
 And('click jobtittle',()  =>  {     
    cy.contains("Job Titles").click()
})
And('click on add button', () => {
    cy.get(addjob.addbtn()).click()
})
And('enter jobtittle name', () => {
    cy.get(addjob.paygradename()).eq(1).type("Rajesh")

})
Then('click on save button', () => {
    cy.xpath(addjob.savebtn()).click()

})


And('click paygreds', () => {
    
    cy.contains("Pay Grades").click()
})
And('click paygreds', () => {
    cy.get(addjob.paygradename()).eq(1).type("Rajesh")
})

And('click addemployement status', () => {
    
    cy.contains("Employment Status").click()
})
And('enter employeement status name', () => {
    cy.get(addjob.paygradename()).eq(1).type("Rajesh")
})


And('click job categires', () => {
    
    cy.contains("Job Categories").click()
})
And('enter job categires name', () => {
    cy.get(addjob.paygradename()).eq(1).type("Rajesh")
})


And('click workshift', () => {
    
    cy.contains("Work Shifts").click()
})

And('enter work shift', () => {
    cy.get(addjob.paygradename()).eq(1).type("Rajesh")
})