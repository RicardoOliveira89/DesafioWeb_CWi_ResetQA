const el = require("./elements").ELEMENTS;

class MyAccount {
    validarMinhaConta(){
        cy.get(".account > span").should("have.text", "José Railson");
    }
}

export default new MyAccount();