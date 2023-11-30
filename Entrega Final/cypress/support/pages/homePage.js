export class HomePage {
   
    constructor () {
        this.onlineShopButton = '//a[text()="Online Shop"]'
    };
    
    clickShop () {
        cy.xpath(this.onlineShopButton).click()
    };
};