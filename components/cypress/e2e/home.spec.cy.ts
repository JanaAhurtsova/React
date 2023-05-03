/// <reference types="cypress" />

describe('Home page e2e', () => {
  it('should have a home page', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
    cy.get('li:first-of-type div h4').should('have.text', 'Pray for the Wicked');
    cy.get('li').should('have.length', 24);
    cy.contains('2023');
  });

  it('should open and close a modal', () => {
    cy.visit('/');

    cy.get('li:first-of-type').click();
    cy.get('p').contains(/Nevada/);
    cy.get('span').closest('#close').click();
    cy.get('#close').should('not.exist');
  });

  it('should search', () => {
    cy.visit('/');

    cy.get('input').type('papa');
    cy.get('button').click();
    cy.contains('Papa Roach');
    cy.contains(/panic/i).should('not.exist');
  });

  it('should be display no cards', () => {
    cy.visit('/');

    cy.get('input').type('ppppp');
    cy.get('button').click();
    cy.contains(/no cards/i);
  });

  it('Empty test', () => {
    expect(1).to.equal(1);
  });
});
