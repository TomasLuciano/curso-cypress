export class CheckoutPage {
   
    constructor () {
        this.firstNameInput = '#FirstName';
        this.lastNameInput = '#lastName';
        this.cardNumberInput = '#cardNumber';
        this.purchaseButton = '[class="chakra-button css-13zsa"]'
    };
    
    escribirNombre (nombre) {
        cy.get(this.firstNameInput).type(nombre)
    };

    escribirApellido (apellido) {
        cy.get(this.lastNameInput).type(apellido)
    };

    escribirTarjeta (tarjeta) {
        cy.get(this.cardNumberInput).type(tarjeta)
    };

    clickPurchase () {
        cy.get(this.purchaseButton).click()
    };
};