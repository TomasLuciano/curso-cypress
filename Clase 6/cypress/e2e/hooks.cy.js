/// <reference types= "cypress" />

describe("hooks", () => {
    let datosTarea = {}
    let datosLogin = {}

    before(() => {
        datosTarea = {
            "tarea1": "Hacer las compras",
            "tarea2": "Hacer la comida",
            "tarea3": "Estudiar"
        }

        datosLogin = {
            "usuario": "pushingit",
            "contraseña": "123456!"
        }
    })

    beforeEach(() => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        cy.get('#user').type(datosLogin.usuario)
        cy.get('#pass').type(datosLogin.contraseña)
        cy.get('#submitForm').click();
        cy.get('#todolistlink').click()
    });

    afterEach(() => {
        cy.log("After each")
    })

    after(() => {
        cy.log('After')
    })

    it('Deberia agregar 3 tareas', () => {

        cy.get('#task').type(datosTarea.tarea1)
        cy.get('#sendTask').click();
        cy.get('#task').type(datosTarea.tarea2)
        cy.get('#sendTask').click();
        cy.get('#task').type(datosTarea.tarea3)
        cy.get('#sendTask').click();
    })

    it("Deberia agregar 2 tareas", () => {
        cy.get('#task').type(datosTarea.tarea1)
        cy.get('#sendTask').click();
        cy.get('#task').type(datosTarea.tarea2)
        cy.get('#sendTask').click();
    })
})