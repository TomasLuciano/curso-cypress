const constantes = require('../constantes');

export class HomePage {

    clickTodoListButton() {
        cy.get('#todolistlink', { timeout: constantes.ESPERA }).click();
    }
}