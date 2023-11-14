
/// <reference types="cypress" />

describe('Actividad complementaria 4', () => {
    let datos
    before(() => cy.fixture("fixture").then(data => {
        datos = data
    } 
    ));

    beforeEach(() => {
        cy.visit('');
        cy.get('#registertoggle').dblclick()
    });


    /////cambiar el fixture por el nombre de usuario falso, se cambio por el user correcto para hacer las otras clases
    it('Deberia validar un mensaje de error al colocar un usuario inexistente', () => {
        cy.get('#user').type(datos.username);
        cy.get('#pass').type(datos.password);
        cy.get('#submitForm').click();
        cy.get('#messageError').should('have.text', datos.mensajeError)
    });
});