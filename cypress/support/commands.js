// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
    cy.get(':nth-child(2) > .form-control').click()
    cy.get(':nth-child(2) > .form-control').type('myrmyr882@gmail.com')
    cy.get(':nth-child(3) > .form-control').type('7474')
    cy.get('.btn').click()
});


Cypress.Commands.add('addbio', () => {
   
    cy.get('.container > .nav > :nth-child(3) > .nav-link').click()
    cy.get(':nth-child(3) > .form-control').type('Quis nesciunt ut est eos.\nQui reiciendis doloribus.\nEst quidem ullam reprehenderit.\nEst omnis eligendi quis quis quo eum officiis asperiores quis. Et sed dicta eveniet accusamus consequatur.')
    


});