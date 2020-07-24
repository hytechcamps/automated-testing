/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
    //login
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
    //add items to cart
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    //view cart
    cy.get('.svg-inline--fa').click()
    cy.get('.btn_action')
    //verify items in cart
    //cy.get('.inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('.btn_action').click()
    //enter user information
    cy.get('[data-test=firstName]').type('Standard')
    cy.get('[data-test=lastName]').type('Standard')
    cy.get('[data-test=postalCode]').type('44145')
    cy.get('.btn_primary').click()
    //verify items again
    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('.btn_action').click()
    //verify order complete
    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
  })
})
