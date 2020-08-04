/// <reference types="cypress" />

context('Hy-Tech Camp', () => {

  it('visits the sample website', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test=username]').type('standard_user')
    cy.get('[data-test=password]').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('.product_label').should('contain', 'Products')

    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get(':nth-child(2) > .pricebar > .btn_primary').click()
    cy.get('.svg-inline--fa').click()

    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('.btn_action').click()

    cy.get('[data-test=firstName]').type('Standard')
    cy.get('[data-test=lastName]').type('User')
    cy.get('[data-test=postalCode]').type('44145')
    cy.get('.btn_primary').click()

    cy.get('#item_4_title_link > .inventory_item_name').should('contain', 'Sauce Labs Backpack')
    cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
    cy.get('.btn_action').click()

    cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER')
  })
})
