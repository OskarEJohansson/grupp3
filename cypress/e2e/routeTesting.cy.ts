/// <reference types="Cypress" />

describe("Route Testing", () => {
  it("Navigates from homepage to Food categories through Navbar", () => {
    cy.visit("http://localhost:5173/");

    cy.get(".hidden.md\\:flex.space-x-6.items-center").contains("Food").click();

    cy.url().should("include", "/recipe-page");
  });
});
