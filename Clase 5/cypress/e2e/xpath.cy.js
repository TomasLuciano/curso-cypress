describe('xpath', () => {

    it('Xpath absoluto', () => {
        cy.visit('')
        cy.xpath('/html/body/div[1]/div/div/div/form/div[1]/input');
    })

    it('Xpath relativo', () => {
        cy.visit('')
        cy.xpath('//form/div[1]/input[@name="user"]');
        cy.xpath("//input[@name='user']")
    })

    it('Metodo contains', () => {
        cy.visit('')
        cy.xpath("//input[contains(@class, 'password')]")
    })

    it('Metodo starts-wtih', () => {
        cy.visit('')
        cy.xpath("//input[starts-with(@class,'chakra-input password')]")
    })

    it('Metodo text', () => {
        cy.visit('')
        cy.xpath("//button[text()='Register']")
    })

    it('Metodo text + contains', () => {
        cy.visit('')
        cy.xpath("//p[contains(text(), 'registrado')]")
    })

    it('Metodo text + start-with', () => {
        cy.visit('')
        cy.xpath("//p[starts-with(text(), 'Si ya estás')]")
    })

    it('Following Sibbling', () => {
        cy.visit('')
        cy.xpath('//label[@for="user"]//following-sibling::input')
    })

    it('Preceding Sibbling', () => {
        cy.visit('')
        cy.xpath('//input[@id="user"]//preceding-sibling::label')
    })

    it('Child', () => {
        cy.visit('')
        cy.xpath('//div[@role="group"][1]//child::label')
    })

    it('Parent', () => {
        cy.visit('')
        cy.xpath('//label[@for="user"]//parent::div')
    })
})