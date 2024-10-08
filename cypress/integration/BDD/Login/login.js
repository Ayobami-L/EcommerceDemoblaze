/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(function () {
    // cy.visit('https://www.demoblaze.com/')
    cy.fixture('example').then(function (data) {
        this.data = data
    });
});

Given('i navigate to Demobaze Website', function () {
    // cy.url().should('include', 'demoblaze');
    cy.visit(Cypress.env("url"))
});

When('i click on Login', function () {
    cy.get('#login2').should('be.visible').click();
});
//Scenario: Validate Login page is accessible
Then('i verify Login form is accessible', function () {
    cy.get('#logInModal').should('be.visible');
    cy.get('#logInModalLabel')
        .should('be.visible')
        .and('contain.text', 'Log in');
});

Then('i enter username and password', function () {
    cy.wait(3000)
    cy.get('#loginusername').should('be.visible').type(this.data.Username);
    cy.wait(3000)
    cy.get('#loginpassword').should('be.visible').type(this.data.Password);

});

When('i click on Login button', function () {
    cy.get("button[onclick='logIn()']").should('be.visible').click();
    cy.wait(3000)
});

Then('i Validate successful login', function () {
     cy.get('#nameofuser').should('contains.text', 'Welcome ' + this.data.Username);
    
});

Then('i enter a valid username and an incorrect password', function () {
    cy.get('#loginusername').should('be.visible').clear().type(this.data.Username);
    cy.wait(3000)
    cy.get('#loginpassword').should('be.visible').clear().type(this.data.InvalidPassword);
});

Then('i enter a valid password and an incorrect username', function () {
    cy.wait(2000)
    cy.get('#loginusername').type(this.data.InvalidUsername)
    
    cy.get('#loginpassword').type(this.data.Password)
});

Then('an "Wrong password." alert should appear', function () {
    cy.verifyAlert('Wrong password.');
});

Then('i enter a non-existent username and any password', function () {
    cy.get('#loginusername').should('be.visible').clear().type('chrtemkad');
    cy.get('#loginpassword').should('be.visible').clear().type('pass123');
});

Then('a "User does not exist." alert should appear', function () {
    cy.verifyAlert('User does not exist.');
});

Then('i leave the username and password fields empty', function () {
    cy.get('#loginusername').should('be.empty')
    cy.get('#loginpassword').should('be.empty')
});

Then('a "Please fill out Username and Password." alert should appear', function () {
    cy.verifyAlert('Please fill out Username and Password.');
});

Then('i enter a username and leave the password field empty', function () {
    cy.get('#loginusername').should('be.visible').type(this.data.Username);
    cy.get('#loginpassword').should('be.empty');
});

Then('i leave the username field empty and enter a password', function () {
    cy.wait(2000)
    cy.get('#loginusername').should('be.empty')
    cy.get('#loginpassword').should('be.visible').type(this.data.Password);
});
