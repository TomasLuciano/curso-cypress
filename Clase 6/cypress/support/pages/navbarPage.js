export class NavbarPage {


    obtenerUsuario(usuario) {
        cy.get(`[id^="user_${usuario}_"]`);
    };
};