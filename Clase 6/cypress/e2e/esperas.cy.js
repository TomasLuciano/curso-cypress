/// <reference types= "cypress" />
const constantes = require('../support/constantes')

describe("Esperas", () => {
    let datos;

    before(() => {
        cy.fixture("datosFixture").then(data => {
            datos = data;
        });
    });

    beforeEach(() => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        cy.get('#user').type(Cypress.env().usuario);
        cy.get('#pass').type(Cypress.env().contraseña);
        cy.get('#submitForm').click();
        cy.get('#waitslink', { timeout: constantes.ESPERA }).click();
    });

    it('Esperas con wait', () => {
        cy.get('#wait').dblclick();
        cy.wait(20000)
        cy.get('[id="message"]').should('exist')
    });

    it.only('Esperas sin wait', () => {
        cy.get('#wait').dblclick();
        cy.get('[id="message"]', { timeout: constantes.ESPERA }).should('have.text', "You have waited for ten seconds, CONGRATULATIONS");
    });


    it.only('Esperas sin wait segundo mensaje', () => {
        cy.get('#wait').dblclick();
        cy.get('[id="message"]', { timeout: constantes.ESPERA * 2 }).should('have.text', "You are a man of patience and have waited fifteen seconds")
    });

});