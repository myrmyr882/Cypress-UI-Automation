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

  describe('get started page opens', () => {
    it('passes', () => {
      cy.visit('https://angular.realworld.how/')
      cy.login()
  
      // Get the value of the input field and store it in a variable
      cy.get('[data-cy="login-email"]').invoke('val').as('email')
  
      // Use the stored variable
      cy.get('@email').then((email) => {
        // You can use the email variable here
        console.log(email)
      })
    })
  })