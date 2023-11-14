 ////github de la clase 3 https://github.com/FabrizioOtranto/comision-10/tree/clase-3

 describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.contains('Iniciá sesión').dblclick()
        cy.get('#user').type(`pushingit`);
        cy.get('#pass').type('123456!');
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click()
        cy.get("[id^='sen']").type("tarea 1")
        cy.get('#sendTask').click()
        cy.contains('tarea 1').click()
    });
});


//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!

///https://drive.google.com/drive/u/1/folders/1HLb8ZVjPq207-iu3HGo9ugy4c3qOgB0S