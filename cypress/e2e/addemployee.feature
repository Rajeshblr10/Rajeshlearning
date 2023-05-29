
Feature: Add employee functionality

Scenario: Verify Add employeee with valid creds

Given launching url
When enter all mandetary deatails and click login btn
Then user going to dashboard
When navigate PIM module
And click on Add Employee sub module
And enter employee first name last name
Then click on save button