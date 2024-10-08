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
Cypress.Commands.add('verifyAlert', (expectedMessage) => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(expectedMessage);
    });
});
// Cypress.Commands.add('validLogin', (Username, Password) => {
//     cy.get('#loginusername').type(Username)
//     cy.get('#loginpassword').type(Password)
//     cy.get("button[onclick='logIn()']").click()

// });