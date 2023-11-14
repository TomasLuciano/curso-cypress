//////// archivo solo a modo de practica para usar los selectores que faltaron en el otro
//// se cambio el 2 por -2 para trollear porque era lo mismo en este caso
describe("Actividad complementaria 2", () =>{
  
    beforeEach('Conexión a la página', ()=>{
        cy.visit('');
    });

    it('Register', () =>{
        const NumeroRandom = Math.floor(Math.random() * 1000);
        cy.get('#user').type(`usuario${NumeroRandom}`);
        cy.get('form').find('[name="pass"]').type('123456!');   //// dentro del formluario encontra el atributo name con el valor pass
        cy.get('[value="Male"]').click({force:true});
        cy.get('select[id="day"]').select('5');
        cy.get('select').eq(-2).select('March');  //// el -2 va a encontrar el segundo elemento contando desde el último
        cy.get('select[name="year"]').select('1993');
        cy.get('form').children('button').click();
    });

    it('Login', () =>{
        cy.get('[class="chakra-text css-17n7kwz"]').dblclick();
        cy.get('label').siblings('[name="user"]').type('pushingit');
        cy.get('.password').type('123456!');
        cy.contains('button','Log in').click();
    });
});