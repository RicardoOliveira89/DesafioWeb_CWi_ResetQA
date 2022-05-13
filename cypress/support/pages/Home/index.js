/// <reference types ="Cypress"/>

const el = require("./elements").ELEMENTS;

class Home {
    acessarSignIn(){
        cy.get(el.login).click();
    }
}

export default new Home();