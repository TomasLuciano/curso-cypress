describe("Desafio 1", () =>{
    
    it('Crear usuario y completar nueva tarea', () =>{
        const NumeroRandom = Math.floor(Math.random() * 1000);
        cy.visit('');
        cy.get('#user').type(`usuario${NumeroRandom}`);
        cy.get('input#pass').type('123456!');
        cy.get('[value="Male"]').click({force:true});
        cy.get('select[id="day"]').select('5');
        cy.get('select').eq(1).select('March');
        cy.get('select[name="year"]').select('1993');
        cy.get('button').click();
        cy.get('#todolistlink').click();
        cy.get('[class="chakra-input css-1ekf6i8"]').type('hacer las compras');
        cy.get('button[type="submit"]').click();
        cy.get('p').click();
    });
});