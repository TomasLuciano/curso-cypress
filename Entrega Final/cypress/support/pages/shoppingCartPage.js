export class ShoppingCartPage {
   
    constructor () {
        this.totalPriceButton = '[class="chakra-button css-15tuzzq"]';
        this.totalPrice = '#price';
        this.checkOutButton = '[class="chakra-button css-17aoa8p"]'
    };
    
    verificarProducto (producto) {
        cy.get(`[name="${producto}"]`).should('exist');
    };

    verificarPrecio (producto,precio) {
        cy.xpath(`//p[@name="${producto}"]//following-sibling::p`).should('contain', precio);
    };
    
    verificarTotal (precioTotal) { 
        cy.get(this.totalPriceButton).click();
        cy.get(this.totalPrice).should('have.text',precioTotal);
    };

    clickcheckOut () {
        cy.get(this.checkOutButton).click()
    };
};