///<reference types="cypress"/>
describe('Employee List API', () => {
    it('should retrieve the employee list with specific parameters and headers', () => {
      cy.request({
        method: 'GET',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',
        
        qs: {
          limit: 50,
          offset: 0,
          model: 'detailed',
          includeEmployees: 'onlyCurrent',
          sortField: 'employee.firstName',
          sortOrder: 'ASC'
        },
        headers: {
          'Cookie': 'orangehrm=f1d6e108bd4eefba6f632afcaea112ef',
           // Replace with the actual authorization token
          'Host': 'opensource-demo.orangehrmlive.com',
          'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList'
          
        }
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); // Check if the response status is 200 (OK)
        expect(response.body).to.have.property('data'); // Check if the response body contains a 'data' property
        // Additional assertions or validations as per your API response structure
        //cy.log(response)
      });
    });
  });
  