/// <reference types= "cypress" />
import { HomePage } from "../support/pages/homePage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";
import { CheckoutPage } from "../support/pages/checkoutPage";
import { ReciptPage } from "../support/pages/reciptPage";

describe("Entrega final", () => {
    let datos;
    let datos2;
    const homePage = new HomePage;
    const productsPage = new ProductsPage;
    const shoppingCartPage = new ShoppingCartPage;
    const checkoutPage = new CheckoutPage;
    const reciptPage = new ReciptPage;

    before(() => {
        cy.fixture("productos").then(data => {
            datos = data;
        });

        cy.fixture("checkout").then(data => {
            datos2 = data;
        });
    });

    it('Test final', () => {
        cy.registrarUsuario()
        cy.loginUsuario()    
        cy.visit('');
        homePage.clickShop();
        productsPage.agregarProducto(datos.producto1.nombre);
        productsPage.agregarProducto(datos.producto2.nombre);
        productsPage.clickgotoCart();
        shoppingCartPage.verificarProducto(datos.producto1.nombre);
        shoppingCartPage.verificarProducto(datos.producto2.nombre);
        shoppingCartPage.verificarPrecio(datos.producto1.nombre,datos.producto1.precio);
        shoppingCartPage.verificarPrecio(datos.producto2.nombre,datos.producto2.precio);
        shoppingCartPage.verificarTotal(datos.producto1.precio+datos.producto2.precio);
        shoppingCartPage.clickcheckOut();
        checkoutPage.escribirNombre(datos2.nombre);
        checkoutPage.escribirApellido(datos2.apellido);
        checkoutPage.escribirTarjeta(datos2.tarjeta);
        checkoutPage.clickPurchase();
        reciptPage.verificarNombre(datos2.nombre);
        reciptPage.verificarNombre(datos2.apellido);
        reciptPage.verificarProducto1(datos.producto1.nombre);
        reciptPage.verificarProducto2(datos.producto2.nombre);
        reciptPage.verificarTarjeta(datos2.tarjeta);
        reciptPage.verificarTotal(datos.producto1.precio+datos.producto2.precio);
    });

    after(() => {
         cy.eliminarUsuario()
     });
});