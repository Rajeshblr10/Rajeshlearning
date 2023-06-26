///<reference types="cypress"/>
describe('Get Paygreds  API', () => {
    it('should retrieve the Paygreds list ', () => {
      cy.request({
        method: 'GET',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/pay-grades?limit=50&offset=0',
        
        
         qs: {
             limit: 50,
            offset: 0,
        //     sortField: 'jt.jobTitleName',
        //     sortOrder: 'ASC'
           },
          
        headers: {
          'Cookie': 'orangehrm=457807f3cf8d7494a3b44c4191d56267',
          
           // Replace with the actual authorization token
          'Host': 'opensource-demo.orangehrmlive.com',
          
          'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/admin/payGrade/6',
          
          
        }
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); // Check if the response status is 200 (OK)
        expect(response.body.data[0].id).to.equal(1)
         
        expect(response.body.data[0].currencies[0].name).to.equal("United States Dollar")
        expect(response.body.meta.total).to.equal(6)
        
        // cy.log(response)
      });
    });
  });
  