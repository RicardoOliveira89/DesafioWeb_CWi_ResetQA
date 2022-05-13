/// <reference types ="Cypress"/>

const el = require("./elements").ELEMENTS;

class MyAccount {
    validarMinhaConta(){
        cy.get(el.usuarioDaConta).should("have.text", "José Railson");
    }
}

export default new MyAccount();