///<reference types="cypress"/>
describe('Get job titles  API', () => {
    it('should retrieve the jobtile list ', () => {
      cy.request({
        method: 'GET',
        url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles',
        qs: {
            limit: 50,
            offset: 0,
            sortField: 'jt.jobTitleName',
            sortOrder: 'ASC'
          },
          
        headers: {
          'Cookie': 'orangehrm=724eedfd499e5e72bffe77ca7e508479',
           // Replace with the actual authorization token
          'Host': 'opensource-demo.orangehrmlive.com',
          'Referer':'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList'
          
        }
      }).then((response) => {
        // Assertions
        expect(response.status).to.eq(200); // Check if the response status is 200 (OK)
        expect(response.body.data[0].id).to.equal(1)
        expect(response.body.data[0].title).to.equal("Chief Executive Officer")
        cy.log(response)
      });
    });
  });
  