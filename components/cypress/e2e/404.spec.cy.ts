/// <reference types="cypress" />

describe('404 page e2e', () => {
  it('should be display 404 page', () => {
    cy.visit('/g');

    cy.contains('404');
    cy.contains(/go home/i);
    cy.contains('2023');
  });

  it('Empty test', () => {
    expect(1).to.equal(1);
  });
})
