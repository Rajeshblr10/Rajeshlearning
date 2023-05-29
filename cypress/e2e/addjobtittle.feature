
Feature: Add job tittle functionality

Background: login

Given launching url
When enter all mandetary deatails and click login btn
Then user going to dashboard
When navigate Admin module
 And click on the Job sub module


Scenario: Add job tittle with valid creds

And click jobtittle
And click on add button
And enter jobtittle name  
Then click on save button

Scenario:Add paygreds with valid creds
And click paygreds
And click on add button
And enter paygrade name  
Then click on save button

Scenario:Add empoloyeement status with valid creds
And click addemployement status
And click on add button
And enter employeement status name  
Then click on save button


Scenario:Add job categires with valid creds
And click job categires
And click on add button
And enter job categires name  
Then click on save button

Scenario:Add work shift with valid creds
And click workshift
And click on add button
And enter work shift  
Then click on save button

