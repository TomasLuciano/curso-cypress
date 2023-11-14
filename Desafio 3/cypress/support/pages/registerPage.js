export class RegisterPage {
   
    constructor () {
        this.loginButton = '//span[@id="registertoggle"]'
    };
    
    dblclickLogin () {
        cy.xpath(this.loginButton).dblclick()
    };
};