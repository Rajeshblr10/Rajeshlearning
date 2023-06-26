///<reference types="cypress"/>

describe('Automation - Working With Drag and Drop', function () {

  it('Cypress Test Case - Globelsqa Drag and Drop', function () {

    cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');

    cy.wait(5000)
    Cypress.on("uncaught:exception", () => {

      return false;

    });

    cy.get('[class="demo-frame lazyloaded"]').eq(0).then(($iframe) => {

      const $body = $iframe.contents().find('body');

      // Dragging the element
      cy.wrap($body)
        .find('[id="gallery"] > li:nth-child(1)')
        .trigger('mousedown', { which: 1, force: true })
        .trigger('mousemove', { clientX: 0, clientY: 0, force: true });

      // Dropping the element
      cy.wrap($body)
        .find('#trash')
        .trigger('mousemove', { clientX: 0, clientY: 0, force: true })
        .trigger('mouseup', { force: true });
      cy.wait(5000)


      cy.wrap($body)
        .find('[id="gallery"] > li:nth-child(2)')
        .trigger('mousedown', { which: 2, force: true })
        .trigger('mousemove', { clientX: 0, clientY: 0, force: true });

      // Dropping the element
      cy.wrap($body)
        .find('#trash')
        .trigger('mousemove', { clientX: 1, clientY: 1, force: true })
        .trigger('mouseup', { force: true });
      cy.wait(5000)
    });

  })
 


})
