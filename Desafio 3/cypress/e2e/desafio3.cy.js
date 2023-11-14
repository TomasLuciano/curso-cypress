/// <reference types= "cypress" />
import { LoginPage } from "../support/pages/logInPage";
import { RegisterPage } from "../support/pages/registerPage";
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe("Desafío3", () => {
    let datos;
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage;
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingCartPage = new ShoppingCartPage;

    before(() => {
        cy.fixture("productos").then(data => {
            datos = data;
        });
    });

    it('Verificación de nombre, precio y precio total de productos', () => {
        cy.visit('');
        registerPage.dblclickLogin();
        loginPage.escribirUsuario(Cypress.env().usuario);
        loginPage.escribirContraseña(Cypress.env().contraseña);
        loginPage.clickLogin();
        homePage.clickShop();
        productsPage.agregarProducto(datos.producto1.nombre);
        productsPage.agregarProducto(datos.producto2.nombre);
        productsPage.clickgotoCart();
        shoppingCartPage.verificarProducto(datos.producto1.nombre);
        shoppingCartPage.verificarProducto(datos.producto2.nombre);
        shoppingCartPage.verificarPrecio(datos.producto1.nombre,datos.producto1.precio);
        shoppingCartPage.verificarPrecio(datos.producto2.nombre,datos.producto2.precio);
        shoppingCartPage.verificarTotal();
    });
});