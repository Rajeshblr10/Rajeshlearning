


describe('add to amzon', () => {
    it('add iphone in amazon', () => {
      cy.visit('https://www.amazon.in/')
      cy.get('[id="twotabsearchtextbox"]').type('i phone10')
      
      cy.get('[type="submit"]').click()
      cy.get('[data-asin="B0932QYBH8"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image')
      cy.contains("i phone 10").click()
      cy.get('[data-index="3"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image')
      cy.get('[class="a-section aok-relative s-image-fixed-height"]').click()
      cy.get('[id="add-to-cart-button"]').click()
    })
  })