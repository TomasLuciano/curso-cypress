describe.only('Primer suite', () => {
    const nombre = "Fabrizio"
    it('Primer test', () => {
        cy.log('Primer test con ' + nombre)
    })

    it('Segundo test', () => {
        cy.log('Segundo test con ' + nombre)
    })

    it('Tercer test', () => {
        cy.log('Tercer test con ' + nombre)
    })

    it('Cuarto test', () => {
        cy.log('Cuarto test con ' + nombre)
    })
})