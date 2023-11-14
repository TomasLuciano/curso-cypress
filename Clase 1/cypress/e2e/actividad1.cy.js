 ///////tarea hecha con conocimientos hasta donde llegamos del curso
 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividadhttps://codeshare.io/MND8bq complementeria 1', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type(`usuario${numero}`);
        cy.get('#pass').type('123456!');
        cy.get("[value='Male']").click({force:true});
        cy.get('#day').select('5');
        cy.get('#month').select('March');
        cy.get('#year').select('1993');
        cy.get('#submitForm').click();
    });

    it('Login', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit');
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click();
    });
});