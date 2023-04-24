describe('App e2e', () => {
  it('should have a main page', () => {
    cy.visit('/');

    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'Search');
  });
})
