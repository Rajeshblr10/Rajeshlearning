
Feature: Add job tittle functionality

Scenario: Verify Add job tittle with valid creds

Given launch urlWhen enter all the deatails
Then user going to dashboard
When navigate Admin module
And click on the Job sub module
And click on add button
And enter jobtittle name as "Accountent"
Then click on save button