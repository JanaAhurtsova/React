/// <reference types="cypress" />

describe('about page e2e', () => {
  it('should display about page', () => {
    cy.visit('/about');
    cy.contains('MUSIC COUNTS.');
    cy.contains('Contact:');
  });

  it('Empty test', () => {
    expect(1).to.equal(1);
  });
});
