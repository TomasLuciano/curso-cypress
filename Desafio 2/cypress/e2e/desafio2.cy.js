describe("To do list", () => {
    let datos;

    
    before(() => {
        cy.fixture("fixture").then(data => {
            datos = data;
        });
    });

    beforeEach(() => {
        cy.visit('');
        cy.xpath('//span[text()="Iniciá sesión"]').dblclick();
        cy.xpath('//label[@for="user"]//following-sibling::input').type(datos.user.name);
        cy.xpath('//input[starts-with(@id,"pass")]').type(datos.user.pass);
        cy.get('button').click();
        cy.wait(5000);
        cy.get('#todolistlink').click();
    });

    
    afterEach(() => {
        cy.get('a').click();
    });

    after(() => {
        cy.get('#logout').click();
    });



    it('Ingresar 5 tareas', () => {
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task1);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task2);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task3);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task4);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task5);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
    });

    it('Verificar botones', () => {
        cy.get('#all').should('have.text', 'All');
        cy.get('#completed').should('have.text', 'Completed');
        cy.get('#active').should('have.text', 'Active');
        cy.get('#removeAll').should('have.text', 'Remove all');
    });
    
    it('Agregar 2 tareas, completarlas y eliminar segunda', () => {
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task6);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//div[@class="css-hboir5"]//child::input').type(datos.tasks.task7);
        cy.xpath('//input[@name="task"]//following-sibling::button').click();
        cy.xpath('//p[starts-with(text(), "Sacar")]').click();
        cy.xpath('//p[contains(text(), "Estudiar")]').click();
        cy.xpath('//p[contains(text(), "Estudiar")]//following-sibling::button').click();
    });

    it('Agregar 2 tareas y eliminar la primera', () => {
        cy.get('#task').type(datos.tasks.task8);
        cy.get('#sendTask').click();
        cy.get('#task').type(datos.tasks.task9);
        cy.get('#sendTask').click();
        cy.xpath('//p[starts-with(text(), "Hacer")]//following-sibling::button').click();
    });

});