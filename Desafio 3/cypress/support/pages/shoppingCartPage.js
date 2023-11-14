export class ShoppingCartPage {
   
    constructor () {
        this.totalPriceButton = '[class="chakra-button css-15tuzzq"]';
        this.totalPrice = '#price'
    };
    
    verificarProducto (producto) {
        cy.get(`[name="${producto}"]`).should('exist');
    };

    verificarPrecio (producto,precio) {
        cy.xpath(`//p[@name="${producto}"]//following-sibling::p`).should('have.text', precio);
    };
    
    verificarTotal () { 
        cy.get(this.totalPriceButton).click();
        cy.get(this.totalPrice).should('have.text',35);
    };
};