describe('creat a rediffmail account with valid credentiol', () => {
    it('creat mail with valid deatails', () => {
        Cypress.on("uncaught:exception", () => {

            return false;
        });
        cy.visit("https://register.rediff.com/register/register.php")
        cy.xpath('//input[@type="text"]').eq(0).type("raju")
        cy.get('[type="text"]').eq(1).type("raju1234")
        cy.get('[value="Check availability"]').click()
        cy.get('[type="password"]').eq(1).type("govind")
        cy.xpath('//input[@type="password"]').eq(0).type("abcd123")
        cy.xpath('//input[@type="password"]').eq(1).type("abcd123")
        //cy.get('["altemail7ddabf32"]').type('rgovindaraju832@gmail.com')
        //checkbox cheking
        cy.get('[type="checkbox"]').check().should("be.checked")
        //uncheck checkbox
        cy.wait10000
        cy.get('[type="checkbox"]').uncheck()
        cy.get('[id="mobno"]').type("233444568")
        //radio button checking
        cy.get('select[name^="DOB_Day"]').select("10")
        // cy.get('[name="DOB_Day0238cfe0"]').select("10")
        cy.wait10000
        cy.get('select[name^="DOB_Month"]').select("07")
        cy.wait10000
        cy.get('select[name^="DOB_Year"]').select("2023")
        cy.wait10000
        cy.get('select[name^="country"]').select("India")
        cy.wait10000
        cy.get('select[name^="city"]').select("Banglore")
        //cy.get(':nth-child(1) > [colspan="3"] > select')
    })
})