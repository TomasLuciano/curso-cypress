 /////////Tarea editada por mi con conocimientos adquiridos fuera del curso
 //////Se agregó un beforeEach para acortar código y la variable se metio dentro del it que se usa
 ////Además se le cambió el nombre genérico a la variable por algo más específico
 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
  
    beforeEach('Conexión a la página', ()=>{
        cy.visit('');
    });

    it('Actividadhttps://codeshare.io/MND8bq complementeria 1', () =>{
        const NumeroRandom = Math.floor(Math.random() * 1000);
        cy.get('#user').type(`usuario${NumeroRandom}`);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").click({force:true});
        cy.get('#day').select('5');
        cy.get('#month').select('March');
        cy.get('#year').select('1993');
        cy.get('#submitForm').click();
    });

    it('Login', () =>{
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
    });
});