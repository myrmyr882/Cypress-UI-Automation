describe('get started page opens', () => {
    it('passes', () => {
      cy.visit('https://angular.realworld.how/')
      cy.login()
  
      // cy.get('[data-cy="logged-user"] > .inline-block').click()
      // cy.get('[data-cy="login-menu"] > .pr-2', {timeout:10000}).click();
      // cy.get('[data-cy="login-email"]').clear().type('yesh@email.com');
      // cy.get('[data-cy="login-password"]').type('747');
      // cy.get('[data-cy="login-submit"]').click();
      // cy.get('[data-cy="notification-message"]').should('be.visible');

    })
  })