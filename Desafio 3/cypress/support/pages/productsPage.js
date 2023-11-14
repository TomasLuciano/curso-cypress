export class ProductsPage {
   
    constructor () {
        this.closeModalButton ='//button[@id="closeModal"]',
        this.goCartButton = '//button[text()="Go to shopping cart"]';
    };
    
    agregarProducto (producto) {
        cy.get(`[value="${producto}"]`).click();
        cy.xpath(this.closeModalButton).click();
    };

    clickgotoCart () {
        cy.xpath(this.goCartButton).click()
    };
};