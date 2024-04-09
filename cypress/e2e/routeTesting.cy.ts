/// <reference types="Cypress" />

describe('Route Testing', () => {
  it('Navigates from homepage to Food categories through Navbar', () => {
  
    cy.visit('http://localhost:5173/');

   
    cy.get('.nav-list').contains('Food').click();

   
    cy.url().should('include', '/category-page');
  });
});