// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('registrarUsuario', () => {
    cy.request({
        method: "POST",
        url: "https://pushing-it.onrender.com/api/register",
        body: {
            "username": "tomasluciano",
            "password": "123456!",
            "gender": "Male",
            "day": "5",
            "month": "March",
            "year": "1993",    
            }
    }).then(respuesta => {
        expect(respuesta.status).to.be.equal(200)
        expect(respuesta.body.newUser.username).to.be.equal("tomasluciano")
        expect(respuesta.body.newUser.gender).to.be.equal("Male")
        expect(respuesta.body.newUser.day).to.be.equal("5")
        expect(respuesta.body.newUser.month).to.be.equal("March")
        expect(respuesta.body.newUser.year).to.be.equal("1993")
        })
})

Cypress.Commands.add('loginUsuario', () => {
    cy.request({
        method: "POST",
        url: "https://pushing-it.onrender.com/api/login",
        body: {
            "username": "tomasluciano",
            "password": "123456!",    
            }
    }).then(respuesta => {
        window.localStorage.setItem('token', respuesta.body.token)
        window.localStorage.setItem('user', respuesta.body.user.username)
        expect(respuesta.status).to.be.equal(200)
        expect(respuesta.body.user.username).to.be.equal("tomasluciano")
        expect(respuesta.body.user.gender).to.be.equal("Male")
        expect(respuesta.body.user.day).to.be.equal("5")
        expect(respuesta.body.user.month).to.be.equal("March")
        expect(respuesta.body.user.year).to.be.equal("1993")
        })
})

Cypress.Commands.add('eliminarUsuario', () => {
    cy.request({
        method: "DELETE",
        url: "https://pushing-it.onrender.com/api/deleteuser/tomasluciano",
    }).then(respuesta => {
        expect(respuesta.status).to.be.equal(200)
        expect(respuesta.body.user.username).to.be.equal("tomasluciano")
        expect(respuesta.body.user.gender).to.be.equal("Male")
        expect(respuesta.body.user.day).to.be.equal("5")
        expect(respuesta.body.user.month).to.be.equal("March")
        expect(respuesta.body.user.year).to.be.equal("1993")
        })
})