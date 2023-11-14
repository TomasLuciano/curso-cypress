/// <reference types= "cypress" />
const constantes = require('../support/constantes')
import { LoginPage } from '../support/pages/loginPage';
import { HomePage } from '../support/pages/homePage';
import { NavbarPage } from '../support/pages/navbarPage';
import { ToDoListPage } from '../support/pages/toDoListPage';

describe("Esperas", () => {
    let datos;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const navbarPage = new NavbarPage();
    const toDoListPage = new ToDoListPage();

    before(() => {
        cy.fixture("datosFixture").then(data => {
            datos = data;
        });
    });

    beforeEach(() => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(Cypress.env().usuario);
        loginPage.escribirContraseña(Cypress.env().contraseña);
        loginPage.clickLogin();
        navbarPage.obtenerUsuario(Cypress.env().usuario);
        homePage.clickTodoListButton();
    });

    it('Deberia agregar 3 tareas y borrar la segunda tarea', () => {
        toDoListPage.escribirTarea(datos.tareas.tarea1);
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(datos.tareas.tarea2);
        toDoListPage.clickSendTaskButton();
        toDoListPage.escribirTarea(datos.tareas.tarea3);
        toDoListPage.clickSendTaskButton();
        toDoListPage.eliminarTarea(datos.tareas.tarea2);
    });
});