describe('Selectores', () => {

    it('Encontrar selectores con CssSelectors', () => {
        cy.visit('');
        cy.get('button');
        cy.get("[id='user']")
        cy.get('#day')
        cy.get('input#user')
        cy.get("input[name='user']")
        cy.get('.chakra-form__label')
        cy.get('label.chakra-form__label') // valor parcial del atributo
        cy.get("[class='chakra-form__label css-dcfi0p']") // valor completo del atributo
        cy.get("[class^='chakra-form_']") // el valor inicie de X forma
        cy.get("[class$='css-dcfi0p']") // el valor finalice de X forma
        cy.get("[class*='icon-wrapper']") // el valor contenga x forma
    });

    it('Deberia encontrar el elemento web utilizando contains', () =>{
        cy.visit('')
        cy.contains('button', 'Register');
        cy.contains('button', 'register', {matchCase: false});
    })

    it('Deberia encontrar el elemento web utilizando eq', () =>{
        cy.visit('')
        cy.get('input').eq(1)
    })

    it('Deberia encontrar el elemento web utilizando first', () =>{
        cy.visit('')
        cy.get('input').first()
    })

    it('Deberia encontrar el elemento web utilizando last', () =>{
        cy.visit('')
        cy.get('input').last();
    })

    it('Deberia encontrar el elemento web utilizando find', () =>{
        cy.visit('')
        cy.get('form').find('button')
    })

    it('Deberia encontrar el elemento web utilizando parent', () =>{
        cy.visit('')
        cy.get('input#user').parent('div')
    })

    it('Deberia encontrar el elemento web utilizando children', () =>{
        cy.visit('')
        cy.get('div').children('#user')
    })

    it('Deberia encontrar el elemento web utilizando siblings', () =>{
        cy.visit('')
        cy.get('#user').siblings('label')
    })
})