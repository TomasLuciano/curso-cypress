////// ESTE TEST VA A FUNCIONAR SOLO UNA VEZ CON LOS MISMOS DATOS
//// NO PODEMOS REPETIR CON EL MISMO INPUT DE USUARIO MAS DE UNA VEZ

describe('Registro', () => {
    const numeroRandom = Math.floor(Math.random() * 1000)

    it('Registrarse satisfactoriamente', () => {
        cy.visit('');
        cy.get('#user').type(`comision10${numeroRandom}`);
        cy.get('#user').clear()
        cy.get('#user').type('comision10' + numeroRandom);
        cy.get('#pass').type('123456!');
        cy.get('[value="Male"]').check({force: true} );
        cy.get('#day').select('10'); // value
        cy.get('#month').select('April') // texto visible
        cy.get('#year').select(30); // indice 30
        cy.get('#submitForm').click();
    });
});