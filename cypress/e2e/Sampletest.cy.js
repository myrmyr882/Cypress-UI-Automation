describe('get started page opens', () => {


    it('verifydiamonddetails', () => {
        cy.visit('www.application.com')
        cy.login()

        // Get the value of the input field and store it in a variable
        cy.get('[data-cy="login-email"]').invoke('val').as('email')

        // Use the stored variable
        cy.get('@email').then((email) => {
            // You can use the email variable here
            console.log(email)

            //diamond results page
            cy.get('Shape').invoke('text').then(returnedShape => {
                cy.get('cutgrade').invoke('text').then(returnedcutgrade => {
                    cy.get('color').invoke('text').then(returnedcolor => {
                        cy.get('carat').invoke('text').then(returnedcarat => {
                            // You can use the returnedcarat variable here


                            //orderdetails page
                            cy.get('shapeFromorderdetailspage').should('have.text', returnedShape);
                            cy.get('cutgradeFromorderdetailspage').should('have.text', returnedcutgrade);
                            cy.get('colorFromorderdetailspage').should('have.text', returnedcolor);
                            cy.get('caratFromorderdetailspage').should('have.text', returnedcarat);

                            //verifying email
                            cy.request('GET', '/api/users/123/confirmation-email')
                                .its('body')
                                .then(email => {
                                    expect(email.content).to.include(returnedShape, returnedcutgrade, returnedcolor, returnedcarat)
                                })

                            const axios = require('axios');

                            async function getEmails(accessToken) {
                                const response = await axios({
                                    method: 'get',
                                    url: 'https://graph.microsoft.com/v1.0/me/mailfolders/inbox/messages',
                                    headers: {
                                        'Authorization': `Bearer ${accessToken}`
                                    }
                                });

                                return response.data.value;
                            }

                            getEmails('your_access_token_here')
                                .then(emails => {
                                    // Do something with the emails
                                    console.log(emails);
                                })
                                .catch(error => {
                                    console.error(error);
                                });

                                cy.get('#Dropdown0-option').select('5')

                        })
                    })
                })
            })
        })
    })
})