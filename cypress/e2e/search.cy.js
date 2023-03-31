/// <reference types="cypress" />

describe('fetching images app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('display placeholder in search input', () => {
    cy.get('.search-bar form input').contains('Find some photos')
  })

  it('display results after typing query and hiting eneter', () => {
    cy.get('.search-bar form input')
      .clear()
      .type('cars')
      .type('{enter}')

    cy.get('.image-list')
      .contains('img')
  })
})
