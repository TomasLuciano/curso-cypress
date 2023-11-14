 describe("Actividad complementaria 3", () =>{


   it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath('/html/body/div[1]/div/div/div/form/p/span').dblclick();
        cy.xpath("//input[contains(@name, 'user')]").type(`pushingit`);
        cy.xpath("//input[@name='pass']").type('123456!');
        cy.xpath("//button[starts-with(@class,'chakra-button')]").click()
        cy.xpath("//a[text()='To Do List']").click();
        cy.xpath('//button[@type="submit"]//preceding-sibling::input').type("tarea 1");
        cy.xpath("//button[contains(text(), 'Se')]").click();
        cy.xpath("//p[starts-with(text(), 'tarea')]").click();
    });

    
   it('Desafio 1 con expresioness Xpath', () =>{
      const NumeroRandom = Math.floor(Math.random() * 1000);
      cy.visit('');
      cy.xpath("//input[@name='user']").type(`usuario${NumeroRandom}`);
      cy.xpath('//label[@for="pass"]//following-sibling::input').type('123456!');
      cy.xpath('//label[1]/input').click({force:true});
      cy.xpath("//select[contains(@name, 'day')]").select('5');
      cy.xpath("//select[starts-with(@name,'mon')]").select('March');
      cy.xpath('//select[@name="year" and @id="year"]').select('1993');
      cy.xpath('/html/body/div[1]/div/div/div/form/button').click();
      cy.xpath("//a[contains(text(), 'To Do')]").click();
      cy.xpath('//input[@name="task" or @id="falso"]').type('hacer las compras');
      cy.xpath('//input[@name="task"]//following-sibling::button').click();
      cy.xpath('//div[@class="css-vuy1kp"]//child::p').click();
    });

   
});