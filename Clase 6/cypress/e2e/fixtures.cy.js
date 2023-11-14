describe("fixtures", () => {
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
        cy.get('#todolistlink').click();
    });

    afterEach(() => {
        cy.log("After each");
    })

    after(() => {
        cy.log('After');
    })

    it('Deberia agregar 3 tareas', () => {
        cy.get('#task').type(datos.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.get('#task').type(datos.tareas.tarea2);
        cy.get('#sendTask').click();
        cy.get('#task').type(datos.tareas.tarea3);
        cy.get('#sendTask').click();
    });

    it("Deberia agregar 2 tareas", () => {
        cy.get('#task').type(datos.tareas.tarea1);
        cy.get('#sendTask').click();
        cy.get('#task').type(datos.tareas.tarea2);
        cy.get('#sendTask').click();
        cy.log(datos.checkout.nombre);
    });
});