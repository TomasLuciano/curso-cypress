describe('Actividad complementaria 5', () => { 
    const espera = 10000;
    
     beforeEach("Precondiciones", () => {
        cy.visit('')
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`, {timeout:espera}).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

  	// Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
    it("Verificar que boton cargando vuelva a tener texto button", () =>{
        cy.get('#wait').dblclick().should('have.text', 'Cargando')                                       
        cy.get('#wait', {timeout:espera}).should('have.text', 'Button')
	})

    // verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
    it("Verificar elemento con texto Wait 5 more seconds", () =>{
		cy.get('#wait').dblclick()
        cy.get('#colorChangeMessage', {timeout:espera}).should('have.text', 'Wait 5 more seconds')
	})

    // Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
    it("Verificar que el mensaje que aparece a los 10s cambie luego de 5s más", () => {
        cy.get('#wait').dblclick()
        cy.get('#message', {timeout:espera}).should('have.text', 'You have waited for ten seconds, CONGRATULATIONS')
        cy.get('#message', {timeout:espera*2}).should('have.text', 'You are a man of patience and have waited fifteen seconds')				
	})
 })