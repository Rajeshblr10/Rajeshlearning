
describe('API Testing', () => {
    it('should send a Delete request with payload', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        body: {"ids":[97]},
        headers: {
            'Cookie': 'orangehrm=c6ea3ddaee52bafc609a441c9b153ac7',
           // Replace with the actual authorization token
          'Host': 'opensource-demo.orangehrmlive.com',
          'Origin': 'https://opensource-demo.orangehrmlive.com',
          'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
          
          //'Content-Type': 'application/json'
        }
      }).then((response) => {
        // Assertion or validation of the response
        expect(response.status).to.equal(200);
        // Add more assertions as needed
      });
    });
  });
  