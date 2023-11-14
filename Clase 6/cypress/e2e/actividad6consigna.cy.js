//importar la pagina todoListPage
//importar la pagina loginPage

describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    //generar una instancia de la clase loginPage
        
         beforeEach("Actividad complementaria 5", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            cy.get('#user').type('pushingit'); // utilizar la clase loginPage para ingresar el usuario
            cy.get('#pass').type('123456!'); // utilizar la clase loginPage para ingresar  la contraseña
            cy.get('#submitForm').click(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            cy.get('#all').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#completed').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#active').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            cy.get('#removeAll').should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });