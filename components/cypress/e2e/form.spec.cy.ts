/// <reference types="cypress" />

describe('form e2e', () => {
  it('should be display form page', () => {
    cy.visit('/form');

    cy.get('button:first-of-type').should('have.text', 'Submit');
    cy.contains('Name');
    cy.contains('Singer');
  });

  it('should be display errors', ()=> {
    cy.visit('/form');

    cy.get('form').submit();
    cy.contains('*Name cannot be blank');
    cy.contains('*No file chosen');
    cy.contains('*Information must be confirm');
  });

  it('should reset all values', ()=> {
    cy.visit('/form');

    cy.get('input[type=text]').type('blabla');
    cy.get('input[type=date]').type('2022-02-14');
    cy.get('input[type=checkbox]').check();
    cy.get('select').select('Rock');

    cy.contains('Reset').click();

    cy.get('input[type=text]').should('have.value', '');
    cy.get('input[type=date]').should('have.value', '');
    cy.get('input[type=checkbox]').uncheck();
    cy.get('select').should('have.value', 'Choose a Genre');
  });

  it('should be display error if invalid date and invalid file type', () => {
    cy.visit('/form');
    cy.get('input[type=date]').type('2024-08-25');
    cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');

    cy.get('form').submit();

    cy.contains(/not yet come/);
    cy.contains(/file isn't an image/);
  })

  it('should create a card', () => {
    cy.visit('/form');

    cy.get('input[type=text]').type('blabla');
    cy.get('input[type=date]').type('2022-02-14');
    cy.get('input[type=checkbox]').check();
    cy.get('select').select('Rock');
    cy.get('input[type=radio]').first().check();
    cy.get('input[type=file]').selectFile('cypress/fixtures/test.jpg');

    cy.get('form').submit();

    cy.contains(/successfully/i);
    cy.contains('Band: blabla');
  })

  it('Empty test', () => {
    expect(1).to.equal(1);
  });
});
