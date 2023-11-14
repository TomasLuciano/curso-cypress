/// <reference types= "cypress" />
import { LoginPage } from '../support/pages/loginPage';
import { ToDoListPage } from '../support/pages/toDoListPage';

describe('Actividad complementaria 6', () => { 
const loginPage = new LoginPage();
const toDoListPage = new ToDoListPage();
    
     beforeEach("Actividad complementaria 5", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        loginPage.escribirUsuario(Cypress.env().usuario)
        loginPage.escribirContraseña(Cypress.env().contraseña);
        loginPage.clickLogin();
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
        cy.get('#todolistlink').click();
    });

  	it("deberia verificar que los botones existen", () =>{
        toDoListPage.verificarAllButton(); 
        toDoListPage.verificarCompletedButton(); 
        toDoListPage.verificarActiveButton(); 
        toDoListPage.verificarRemoveAllButton(); 
    });
 });