describe('Automation - File Upload Example', function () {

    it('Cypress Test Case - Understanding upload file ', function () {
  
      cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');

      cy.xpath('//input[@name="upfile"]').attachFile('module1/test4.txt');
      
      //cy.get("//input[@name='upfile']").attachFile("module1/test4.txt")

      cy.wait(3000)
      cy.xpath('//input[@type="submit"]').click();
    
      cy.contains("The file's contents are:").should("be.visible")
    })


})