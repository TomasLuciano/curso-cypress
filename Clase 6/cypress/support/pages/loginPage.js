export class LoginPage {

    constructor() {
        this.usuarioInput = "#user";
        this.contraseñaInput = '#pass'
        this.loginButton = '#submitForm'
    };

    escribirUsuario(usuario) {
        cy.get(this.usuarioInput).type(usuario)
    };

    escribirContraseña(contraseña) {
        cy.get(this.contraseñaInput).type(contraseña)
    };

    clickLogin() {
        cy.get(this.loginButton).click()
    };
};