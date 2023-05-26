
import login from '../pageobjects/login qatool.po'


describe('demo qatool suict', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/text-box')

        cy.on('uncaught:exception', (e, runnable) => {
            return false
        })

    })
    it('verify login with details', () => {



        //assertion
        cy.wait(6000)
        cy.get(login.fullname()).type("rajesh")
        cy.get(login.email()).type("xyz.com")
        cy.get(login.currentAddress()).type("rat")
        cy.get(login.permenentAddress()).type("bang")

        cy.wait(6000)

        cy.get(login.loginButton()).click("button")

        cy.get('Div[class="border col-md-12 col-sm-12"]').check()
    })
})