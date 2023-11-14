/// <reference types= "cypress" />

describe("Aserciones", () => {
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
        cy.get('#waitslink').click();
    });


    it('Asercion utilizando should', () => {
        cy.get('#title').should('have.text', 'Waits')
    });

    it('Asercion utilizando expect', () => {
        cy.get('#title').invoke('text').then(titulo => {
            expect(titulo).to.be.equal('Waits')
        })
    });

    it('Asercion utilizando assert', () => {
        const resultadoEsperado = "Waits"
        cy.get('#title').invoke('text').then(resultadoObtenido => {
            assert.equal(resultadoObtenido, resultadoEsperado, `Se esperaba ${resultadoEsperado}, pero se encontro ${resultadoObtenido}`);
        });
    });

    it('Asercion utilizando should usando length', () => {
        cy.get('#title').invoke('text').should('have.length', 5)
        // cy.get('button').should('have.length', 2)
    });

    it('Asercion utilizando expect usando length', () => {
        cy.get('#title').invoke('text').then(titulo => {
            expect(titulo).to.have.lengthOf(5)
        })
    });
});