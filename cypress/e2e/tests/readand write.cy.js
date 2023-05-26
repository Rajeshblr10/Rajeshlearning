describe('Automation - Write file and Read file ', function () {

    it.only('Cypress Test Case - Write file example', function () {

        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Rajesh\n")
     
    })

    it.only('Cypress Test Case - Append Data in end to the file ', function () {
        
        cy.writeFile('cypress/fixtures/module1/test4.txt', "Cypress Learner",{flag: 'a+'});
     
    })

    it.only('Cypress Test Case - Create Json file ', function () {
        
        cy.writeFile('cypress/fixtures/module2/test6.json', { firstname: 'k', lastname: 'Rajesh'});
     
    })

    it('Cypress Test Case - Validation of Data both Text file and Json ', function () {
        
        cy.readFile('cypress/fixtures/PIM/registerflowdata.json').should('exist')

        cy.readFile('cypress/fixtures/registerflowcharan.json').its('username').should('eq','Charan1234')

         cy.readFile('cypress/fixtures/module2/test6.json').its('firstname').should('eq','G')

         cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Raju');

        cy.readFile('cypress/fixtures/module1/test4.txt').should('contain','Cypress Trainer') 

    })
    it.only('Cypress Test Case - Understanding download file ', function () {
  
        cy.downloadFile("https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTuga17uytePeXtHwUYGIoL34rtoLKV1nRIIc_xIQaMJidyMyvHo6TMOhtXdIEKfKW2MnjrPevQtxtSowc", "cypress/downloads", "peacock.png")
      })

  })
  
