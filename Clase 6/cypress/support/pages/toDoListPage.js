export class ToDoListPage {

    constructor() {
        this.tareaInput = '#task';
        this.sendTaskButton = '#sendTask';
        this.allButton = '#all';
        this.completedButton = '#completed';
        this.activeButton = '#active';
        this.removeAllButton = '#removeAll'
    };

    escribirTarea(tarea) {
        cy.get(this.tareaInput).type(tarea);
    };

    clickSendTaskButton() {
        cy.get(this.sendTaskButton).click();
    };

    eliminarTarea(tarea) {
        cy.contains(tarea).siblings('button').click();
    };

    verificarAllButton() {
        cy.get(this.allButton).should('exist');
    };

    verificarCompletedButton() {
        cy.get(this.completedButton).should('exist');
    };

    verificarActiveButton() {
        cy.get(this.activeButton).should('exist');
    };

    verificarRemoveAllButton() {
        cy.get(this.removeAllButton).should('exist');
    };
};