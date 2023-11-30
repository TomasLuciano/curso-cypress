export class ReciptPage {
   
    constructor () {
        this.Nombre = '#name';
        this.Producto1 = "//p[contains(@id, 'Jacket')]";
        this.Producto2 = "//p[contains(@id, 'Socks')]";
        this.Tarjeta = '#creditCard';
        this.totalPrice = '#totalPrice';
    };
    
    verificarNombre (nombre) {
        cy.get(this.Nombre).should('contain',nombre);
    };

    verificarProducto1 (nombre) {
        cy.xpath(this.Producto1).should('have.text',nombre);
    };

    verificarProducto2 (nombre) {
        cy.xpath(this.Producto2).should('have.text',nombre);
    };

    verificarTarjeta (numero) {
        cy.get(this.Tarjeta).should('contain',numero);
    };

    verificarTotal (precioTotal) { 
        cy.get(this.totalPrice).should('contain',precioTotal);
    };
};